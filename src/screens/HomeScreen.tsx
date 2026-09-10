import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  Platform,
} from 'react-native';
import {
  SupervocRoot,
  SupervocWord,
  SUPERVOC_ROOTS_DATA,
  getAllLexiconWords,
} from '../data/supervoc-roots-dataset';
import { RootDirectoryTree } from '../components/RootDirectoryTree';
import {
  Search,
  Sparkles,
  ArrowRight,
  Volume2,
} from 'lucide-react-native';
import { speakWord } from '../services/speech';

interface HomeScreenProps {
  roots?: SupervocRoot[];
  loading?: boolean;
  onRefresh?: () => void;
  onSelectRoot: (root: SupervocRoot) => void;
  onSelectWord: (word: SupervocWord, root?: SupervocRoot) => void;
  onSelectRootById?: (rootId: string) => void;
}

// Memoized Direct Matching Word Card for fast search results
const DirectWordCard = React.memo<{
  word: SupervocWord;
  onSelect: (word: SupervocWord) => void;
  onPlayAudio: (term: string) => void;
}>(({ word, onSelect, onPlayAudio }) => {
  return (
    <TouchableOpacity
      style={styles.directWordCard}
      activeOpacity={0.75}
      onPress={() => onSelect(word)}
    >
      <View style={styles.directWordLeft}>
        <View style={styles.directWordTermRow}>
          <Text style={styles.directWordTerm}>{word.term}</Text>
          <View style={styles.posBadge}>
            <Text style={styles.posBadgeText}>{word.partOfSpeech}</Text>
          </View>
          <View style={styles.cefrBadge}>
            <Text style={styles.cefrBadgeText}>{word.cefrLevel}</Text>
          </View>
        </View>

        <Text style={styles.directWordDef} numberOfLines={2}>
          {word.definitionVi}
        </Text>

        {/* Origin tag */}
        <View style={styles.directWordMeta}>
          {word.roots && word.roots.length > 0 ? (
            <Text style={styles.directWordRootText}>
              Thuộc họ: {word.roots.map((r) => r.rootName).join(' + ')}
            </Text>
          ) : (
            <Text style={styles.directWordStandaloneText}>
              Từ độc lập / Điển tích
            </Text>
          )}
        </View>
      </View>

      <View style={styles.directWordRight}>
        <TouchableOpacity
          style={styles.directAudioBtn}
          onPress={(e) => {
            e.stopPropagation();
            onPlayAudio(word.term);
          }}
        >
          <Volume2 size={15} color="#38bdf8" />
        </TouchableOpacity>
        <ArrowRight size={16} color="#b892ff" />
      </View>
    </TouchableOpacity>
  );
});

export const HomeScreen: React.FC<HomeScreenProps> = ({
  roots: propRoots,
  loading = false,
  onRefresh,
  onSelectRoot,
  onSelectWord,
  onSelectRootById,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState<'all' | 'Latin' | 'Greek'>('all');
  const [expandedRoots, setExpandedRoots] = useState<Record<string, boolean>>({
    agri_agro: true,
  });

  const handleToggleRoot = useCallback((rootId: string) => {
    setExpandedRoots((prev) => ({
      ...prev,
      [rootId]: !prev[rootId],
    }));
  }, []);

  const safeRoots = propRoots || SUPERVOC_ROOTS_DATA || [];

  // All combined words (from roots + standalone + derivatives)
  const allLexicon = useMemo(() => getAllLexiconWords(safeRoots), [safeRoots]);

  // Exact direct matching words for the search bar
  const directMatchingWords = useMemo(() => {
    const q = (searchQuery || '').toLowerCase().trim();
    if (!q) return [];

    return allLexicon.filter((w) => {
      if (!w) return false;
      const matchTerm = (w.term || '').toLowerCase().includes(q);
      const matchDef = (w.definitionVi || '').toLowerCase().includes(q);

      const fam = w.wordFamily || { nouns: [], verbs: [], adjectives: [], adverbs: [] };
      const matchFamily = [
        ...(fam.nouns || []),
        ...(fam.verbs || []),
        ...(fam.adjectives || []),
        ...(fam.adverbs || []),
      ].some((m) => (m && m.term && m.term.toLowerCase().includes(q)) || (m && m.vi && m.vi.toLowerCase().includes(q)));

      return matchTerm || matchDef || matchFamily;
    });
  }, [allLexicon, searchQuery]);

  // Filtered roots for tree view
  const filteredRoots = useMemo(() => {
    return safeRoots
      .filter((r) => {
        if (!r) return false;
        const matchOrigin = selectedOrigin === 'all' || (r.originLanguage && r.originLanguage.includes(selectedOrigin));
        if (!matchOrigin) return false;

        const q = (searchQuery || '').toLowerCase().trim();
        if (!q) return true;

        const matchRoot =
          (r.rootName || '').toLowerCase().includes(q) ||
          (r.meaningVi || '').toLowerCase().includes(q) ||
          (r.meaningEn || '').toLowerCase().includes(q);

        const matchWord = (r.words || []).some((w) => {
          if (!w) return false;
          const matchTerm = (w.term || '').toLowerCase().includes(q);
          const matchDef = (w.definitionVi || '').toLowerCase().includes(q);
          const fam = w.wordFamily || { nouns: [], verbs: [], adjectives: [], adverbs: [] };
          const famMatch = [
            ...(fam.nouns || []),
            ...(fam.verbs || []),
            ...(fam.adjectives || []),
            ...(fam.adverbs || []),
          ].some((m) => m && m.term && m.term.toLowerCase().includes(q));
          return matchTerm || matchDef || famMatch;
        });

        return matchRoot || matchWord;
      })
      .map((r) => {
        const q = (searchQuery || '').toLowerCase().trim();
        if (!q) return r;
        const matchedSubWords = (r.words || []).filter((w) => {
          if (!w) return false;
          const matchTerm = (w.term || '').toLowerCase().includes(q);
          const matchDef = (w.definitionVi || '').toLowerCase().includes(q);
          const fam = w.wordFamily || { nouns: [], verbs: [], adjectives: [], adverbs: [] };
          const famMatch = [
            ...(fam.nouns || []),
            ...(fam.verbs || []),
            ...(fam.adjectives || []),
            ...(fam.adverbs || []),
          ].some((m) => m && m.term && m.term.toLowerCase().includes(q));
          return matchTerm || matchDef || famMatch;
        });
        return {
          ...r,
          words: matchedSubWords.length > 0 ? matchedSubWords : r.words,
        };
      });
  }, [safeRoots, selectedOrigin, searchQuery]);

  const handlePlayQuickAudio = useCallback((term: string) => {
    speakWord(term, 'us');
  }, []);

  const handleSelectDirectWord = useCallback(
    (word: SupervocWord) => {
      onSelectWord(word);
    },
    [onSelectWord]
  );

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <Search size={16} color="#94a3b8" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tra cứu từ vựng (hiển thị trực tiếp kết quả)..."
            placeholderTextColor="#64748b"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearSearch}>×</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={loading}
              onRefresh={onRefresh}
              tintColor="#b892ff"
              colors={['#4255ff', '#b892ff']}
            />
          ) : undefined
        }
      >
        {/* 1. DIRECT SEARCH RESULTS (WHEN USER TYPES QUERY) */}
        {searchQuery.trim().length > 0 && (
          <View style={styles.directSearchSection}>
            <View style={styles.sectionHeaderRow}>
              <Sparkles size={14} color="#38bdf8" />
              <Text style={styles.directSearchTitle}>
                TỪ VỰNG KHỚP TRỰC TIẾP ({directMatchingWords.length})
              </Text>
            </View>

            {directMatchingWords.length > 0 ? (
              <View style={styles.directWordsList}>
                {directMatchingWords.map((word) => (
                  <DirectWordCard
                    key={word.id || word.term}
                    word={word}
                    onSelect={handleSelectDirectWord}
                    onPlayAudio={handlePlayQuickAudio}
                  />
                ))}
              </View>
            ) : (
              <View style={styles.noResultBox}>
                <Text style={styles.noResultText}>
                  Không tìm thấy từ nào khớp với "{searchQuery}"
                </Text>
              </View>
            )}
          </View>
        )}

        {/* 2. ORIGIN FILTER PILLS */}
        <View style={styles.originFiltersRow}>
          {(['all', 'Latin', 'Greek'] as const).map((origin) => (
            <TouchableOpacity
              key={origin}
              style={[
                styles.originPill,
                selectedOrigin === origin && styles.originPillActive,
              ]}
              onPress={() => setSelectedOrigin(origin)}
            >
              <Text
                style={[
                  styles.originPillText,
                  selectedOrigin === origin && styles.originPillTextActive,
                ]}
              >
                {origin === 'all'
                  ? 'Tất cả nguồn gốc'
                  : `${origin} Origin`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 3. ROOT DIRECTORY TREE (INTERACTIVE GENEALOGY ACCORDION) */}
        <RootDirectoryTree
          roots={filteredRoots}
          expandedRoots={expandedRoots}
          onToggleRoot={handleToggleRoot}
          onSelectRoot={onSelectRoot}
          onSelectWord={onSelectWord}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07061d',
  },
  searchHeader: {
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'rgba(12, 13, 40, 0.96)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 13,
  },
  clearSearch: {
    color: '#94a3b8',
    fontSize: 18,
    paddingHorizontal: 6,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 14,
    paddingBottom: 40,
  },
  directSearchSection: {
    marginBottom: 16,
    backgroundColor: '#0c0d28',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  directSearchTitle: {
    color: '#38bdf8',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  directWordsList: {
    gap: 8,
  },
  directWordCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  directWordLeft: {
    flex: 1,
    paddingRight: 8,
  },
  directWordTermRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  directWordTerm: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  posBadge: {
    backgroundColor: 'rgba(96, 165, 250, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
  },
  posBadgeText: {
    color: '#93c5fd',
    fontSize: 9,
    fontWeight: '700',
  },
  cefrBadge: {
    backgroundColor: 'rgba(52, 211, 153, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
  },
  cefrBadgeText: {
    color: '#6ee7b7',
    fontSize: 9,
    fontWeight: '800',
  },
  directWordDef: {
    color: '#cbd5e1',
    fontSize: 11.5,
    lineHeight: 15,
    marginBottom: 4,
  },
  directWordMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  directWordRootText: {
    color: '#b892ff',
    fontSize: 9.5,
    fontWeight: '600',
  },
  directWordStandaloneText: {
    color: '#34d399',
    fontSize: 9.5,
    fontWeight: '600',
  },
  directWordRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  directAudioBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noResultBox: {
    padding: 12,
    alignItems: 'center',
  },
  noResultText: {
    color: '#94a3b8',
    fontSize: 12,
    textAlign: 'center',
  },
  originFiltersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  originPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  originPillActive: {
    backgroundColor: '#4255ff',
    borderColor: '#6366f1',
  },
  originPillText: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
  },
  originPillTextActive: {
    color: '#ffffff',
    fontWeight: '900',
  },
});
