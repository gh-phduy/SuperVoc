import React, { useState, useEffect, useRef, useCallback, useMemo, Component, ReactNode, ErrorInfo } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  BackHandler,
  Platform,
  ToastAndroid,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';
import { AllWordsScreen } from './src/screens/AllWordsScreen';
import { OxfordSetsScreen } from './src/screens/OxfordSetsScreen';
import { RootDetailScreen } from './src/screens/RootDetailScreen';
import { WordDetailScreen } from './src/screens/WordDetailScreen';
import { BottomNavBar, MainTabType } from './src/components/BottomNavBar';
import { ParentBrandHeader } from './src/components/ParentBrandHeader';
import {
  SupervocRoot,
  SupervocWord,
  SUPERVOC_ROOTS_DATA,
  getAllLexiconWords,
} from './src/data/supervoc-roots-dataset';
import { OXFORD_5000_SETS } from './src/data/oxford-sets-dataset';
import { fetchAllRoots, findWordInRoots } from './src/services/roots-service';

// Error Boundary to display any runtime error directly
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App Error Caught:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Đã xảy ra lỗi khởi chạy SuperVoc</Text>
          <Text style={styles.errorMessage}>
            {this.state.error?.toString() || 'Lỗi không xác định'}
          </Text>
          {this.state.errorInfo && (
            <ScrollView style={styles.errorStackScroll}>
              <Text style={styles.errorStackText}>
                {this.state.errorInfo.componentStack}
              </Text>
            </ScrollView>
          )}
          <TouchableOpacity style={styles.errorRetryBtn} onPress={this.handleReload}>
            <Text style={styles.errorRetryText}>Thử lại ngay</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

type ScreenState =
  | { name: 'home' } // Roots explorer
  | { name: 'lexicon' } // All words library
  | { name: 'oxford' } // Oxford 5000 sets hub
  | { name: 'root-detail'; root: SupervocRoot }
  | { name: 'word-detail'; word: SupervocWord; root?: SupervocRoot };

export default function App() {
  const [roots, setRoots] = useState<SupervocRoot[]>(SUPERVOC_ROOTS_DATA);
  const [loading, setLoading] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<ScreenState>({ name: 'home' });
  const [historyStack, setHistoryStack] = useState<ScreenState[]>([]);
  const [activeTab, setActiveTab] = useState<MainTabType>('roots');
  const [selectedOxfordSetId, setSelectedOxfordSetId] = useState<string | null>(null);
  const lastBackPressRef = useRef<number>(0);

  // Load latest roots & words from Supabase on mount
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchAllRoots();
      if (data && data.length > 0) {
        setRoots(data);
      }
    } catch (err) {
      console.warn('Failed to load roots from Supabase:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Push new screen onto history stack
  const navigateTo = useCallback((nextScreen: ScreenState) => {
    setHistoryStack((prev) => [...prev, currentScreen]);
    setCurrentScreen(nextScreen);
  }, [currentScreen]);

  // Pop previous screen from history stack
  const handleGoBack = useCallback(() => {
    if (historyStack.length > 0) {
      const prev = historyStack[historyStack.length - 1];
      setHistoryStack((old) => old.slice(0, old.length - 1));
      setCurrentScreen(prev);
      if (prev.name === 'home') setActiveTab('roots');
      if (prev.name === 'lexicon') setActiveTab('lexicon');
      if (prev.name === 'oxford') setActiveTab('oxford');
    } else {
      if (activeTab === 'oxford' && selectedOxfordSetId) {
        setSelectedOxfordSetId(null);
        return;
      }
      if (activeTab === 'lexicon') {
        setCurrentScreen({ name: 'lexicon' });
      } else if (activeTab === 'oxford') {
        setCurrentScreen({ name: 'oxford' });
      } else {
        setCurrentScreen({ name: 'home' });
      }
    }
  }, [historyStack, activeTab, selectedOxfordSetId]);

  const handleChangeTab = useCallback((tab: MainTabType) => {
    setActiveTab(tab);
    setHistoryStack([]);
    if (tab === 'roots') {
      setCurrentScreen({ name: 'home' });
    } else if (tab === 'lexicon') {
      setCurrentScreen({ name: 'lexicon' });
    } else if (tab === 'oxford') {
      setCurrentScreen({ name: 'oxford' });
    }
  }, []);

  // Handle hardware/gesture back button on Android & devices
  useEffect(() => {
    const onBackPress = () => {
      // 1. If there is history to pop (e.g. from detail screen back to root/home, or word to root)
      if (historyStack.length > 0) {
        handleGoBack();
        return true;
      }

      // 2. If we are on a detail screen (root-detail or word-detail) even without history
      if (
        currentScreen.name !== 'home' &&
        currentScreen.name !== 'lexicon' &&
        currentScreen.name !== 'oxford'
      ) {
        handleGoBack();
        return true;
      }

      // 3. If in Oxford set detail view, return to Oxford Catalog hub
      if (activeTab === 'oxford' && selectedOxfordSetId) {
        setSelectedOxfordSetId(null);
        return true;
      }

      // 4. If we are on the lexicon or oxford tab, return to roots home tab
      if (activeTab === 'lexicon' || activeTab === 'oxford') {
        handleChangeTab('roots');
        return true;
      }

      // 5. We are at the root Home screen ('home' in 'roots' tab).
      // Require double press within 2 seconds to exit the app
      const now = Date.now();
      if (now - lastBackPressRef.current < 2000) {
        return false; // let Android exit the app naturally
      }

      lastBackPressRef.current = now;
      if (Platform.OS === 'android') {
        ToastAndroid.show('Nhấn lần nữa để thoát SuperVoc', ToastAndroid.SHORT);
      }
      return true; // prevent immediate accidental exit
    };

    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => subscription.remove();
  }, [
    historyStack,
    currentScreen,
    activeTab,
    selectedOxfordSetId,
    handleGoBack,
    handleChangeTab,
  ]);

  const safeRoots = useMemo(() => roots || SUPERVOC_ROOTS_DATA || [], [roots]);
  const allWords = useMemo(() => getAllLexiconWords(safeRoots), [safeRoots]);

  // Navigation handlers
  const handleSelectRoot = useCallback(
    (root: SupervocRoot) => {
      navigateTo({ name: 'root-detail', root });
    },
    [navigateTo]
  );

  const handleSelectRootById = useCallback(
    (rootId: string) => {
      const foundRoot = safeRoots.find((r) => r && r.id === rootId);
      if (foundRoot) {
        navigateTo({ name: 'root-detail', root: foundRoot });
      }
    },
    [safeRoots, navigateTo]
  );

  const handleSelectWord = useCallback(
    (word: SupervocWord, root?: SupervocRoot) => {
      const matchingRoot =
        root ||
        safeRoots.find(
          (r) =>
            r &&
            word.roots &&
            word.roots.some((mr) => mr.rootId === r.id)
        );
      navigateTo({ name: 'word-detail', word, root: matchingRoot });
    },
    [safeRoots, navigateTo]
  );

  const handleSelectRelatedWord = useCallback(
    (term: string) => {
      const matchedWord = findWordInRoots(safeRoots, term);
      if (matchedWord) {
        const matchingRoot = safeRoots.find(
          (r) =>
            r &&
            matchedWord.roots &&
            matchedWord.roots.some((mr) => mr.rootId === r.id)
        );
        navigateTo({ name: 'word-detail', word: matchedWord, root: matchingRoot });
      }
    },
    [safeRoots, navigateTo]
  );

  const isOverlayScreenActive =
    currentScreen.name === 'root-detail' ||
    currentScreen.name === 'word-detail';

  const showBrandHeader = !isOverlayScreenActive && (activeTab !== 'oxford' || !selectedOxfordSetId);
  const showBottomNav = !isOverlayScreenActive;

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <View style={styles.rootContainer}>
          <StatusBar barStyle="light-content" backgroundColor="#0c0d28" />

          {/* Global Parent Ecosystem Header */}
          {showBrandHeader && (
            <ParentBrandHeader
              totalRootsCount={safeRoots.length}
              totalWordsCount={allWords.length}
            />
          )}

          <View style={styles.screenContainer}>
            {/* Main Tab 1: Home (Cây Gốc Từ) - Kept mounted to preserve scroll & expanded state */}
            <View
              style={[
                styles.tabScreenWrapper,
                activeTab === 'roots' && !isOverlayScreenActive ? styles.visibleTab : styles.hiddenTab,
              ]}
            >
              <HomeScreen
                roots={safeRoots}
                loading={loading}
                onRefresh={loadData}
                onSelectRoot={handleSelectRoot}
                onSelectWord={handleSelectWord}
                onSelectRootById={handleSelectRootById}
              />
            </View>

            {/* Main Tab 2: Lexicon (Kho Từ Vựng) - Kept mounted to preserve scroll & filter state */}
            <View
              style={[
                styles.tabScreenWrapper,
                activeTab === 'lexicon' && !isOverlayScreenActive ? styles.visibleTab : styles.hiddenTab,
              ]}
            >
              <AllWordsScreen
                roots={safeRoots}
                loading={loading}
                onRefresh={loadData}
                onSelectWord={handleSelectWord}
                onSelectRootById={handleSelectRootById}
              />
            </View>

            {/* Main Tab 3: Oxford 5000 (Bộ từ vựng Oxford) - Kept mounted */}
            <View
              style={[
                styles.tabScreenWrapper,
                activeTab === 'oxford' && !isOverlayScreenActive ? styles.visibleTab : styles.hiddenTab,
              ]}
            >
              <OxfordSetsScreen
                onSelectWord={handleSelectWord}
                selectedSetId={selectedOxfordSetId}
                onSelectSetId={setSelectedOxfordSetId}
              />
            </View>

            {/* Stack Detail Screen: Root Detail */}
            {currentScreen.name === 'root-detail' && (
              <View style={styles.detailScreenWrapper}>
                <RootDetailScreen
                  root={currentScreen.root}
                  onBack={handleGoBack}
                  onSelectWord={(word) => handleSelectWord(word, currentScreen.root)}
                />
              </View>
            )}

            {/* Stack Detail Screen: Word Detail */}
            {currentScreen.name === 'word-detail' && (
              <View style={styles.detailScreenWrapper}>
                <WordDetailScreen
                  word={currentScreen.word}
                  root={currentScreen.root}
                  onBack={handleGoBack}
                  onSelectRoot={handleSelectRoot}
                  onSelectRootById={handleSelectRootById}
                  onSelectRelatedWord={handleSelectRelatedWord}
                />
              </View>
            )}
          </View>

          {/* Modern Bottom Navigation Bar with 3 Tabs */}
          {showBottomNav && (
            <BottomNavBar
              activeTab={activeTab}
              onChangeTab={handleChangeTab}
            />
          )}
        </View>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#07061d',
  },
  screenContainer: {
    flex: 1,
    position: 'relative',
  },
  tabScreenWrapper: {
    ...StyleSheet.absoluteFill,
  },
  visibleTab: {
    display: 'flex',
  },
  hiddenTab: {
    display: 'none',
  },
  detailScreenWrapper: {
    ...StyleSheet.absoluteFill,
    zIndex: 10,
    backgroundColor: '#07061d',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#07061d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  errorTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 8,
  },
  errorMessage: {
    color: '#f43f5e',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
  errorStackScroll: {
    maxHeight: 180,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 10,
    width: '100%',
    marginVertical: 10,
  },
  errorStackText: {
    color: '#94a3b8',
    fontSize: 11,
    fontFamily: 'monospace',
  },
  errorRetryBtn: {
    backgroundColor: '#4255ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  errorRetryText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },
});
