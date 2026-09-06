import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
} from 'react-native';
import { SupervocWord, SupervocRoot, getAllLexiconWords } from '../data/supervoc-roots-dataset';
import {
  AdvancedFilterDropdown,
  FilterState,
} from '../components/AdvancedFilterDropdown';
import {
  Search,
  BookOpen,
  Volume2,
  ChevronRight,
  GitBranch,
  Sparkles,
} from 'lucide-react-native';
import { speakWord } from '../services/speech';

interface AllWordsScreenProps {
  roots: SupervocRoot[];
  loading?: boolean;
  onRefresh?: () => void;
  onSelectWord: (word: SupervocWord) => void;
  onSelectRootById?: (rootId: string) => void;
}

const CEFR_ORDER: Record<string, number> = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6,
};

// Memoized Individual Word Card Item for Maximum 60 FPS Scrolling Performance
const WordListItemCard = React.memo<{
  item: SupervocWord;
  onSelect: (word: SupervocWord) => void;
  onPlayAudio: (term: string) => void;
}>(({ item, onSelect, onPlayAudio }) => {
  const famCount =
    (item.wordFamily?.nouns?.length || 0) +
    (item.wordFamily?.verbs?.length || 0) +
    (item.wordFamily?.adjectives?.length || 0) +
    (item.wordFamily?.adverbs?.length || 0);

  return (
    <TouchableOpacity
      style={styles.wordCard}
      activeOpacity={0.75}
      onPress={() => onSelect(item)}
    >
      <View style={styles.wordMainRow}>
        <View style={styles.wordLeftCol}>
          <View style={styles.termBadgeRow}>
            <Text style={styles.wordTerm}>{item.term}</Text>

            <View style={styles.posBadge}>
              <Text style={styles.posText}>{item.partOfSpeech}</Text>
            </View>

            <View style={styles.cefrBadge}>
              <Text style={styles.cefrText}>{item.cefrLevel}</Text>
            </View>
          </View>

          <Text style={styles.phoneticText}>{item.phoneticUs}</Text>
          <Text style={styles.definitionText} numberOfLines={2}>
            {item.definitionVi}
          </Text>
        </View>

        {/* Audio Quick Trigger */}
        <TouchableOpacity
          style={styles.speakerBtn}
          activeOpacity={0.7}
          onPress={(e) => {
            e.stopPropagation();
            onPlayAudio(item.term);
          }}
        >
          <Volume2 size={16} color="#38bdf8" />
        </TouchableOpacity>
      </View>

      {/* Root Tags / Etymology Tag */}
      <View style={styles.wordFooterRow}>
        {item.roots && item.roots.length > 0 ? (
          <View style={styles.rootChipsWrap}>
            {item.roots.map((r) => (
              <View key={r.rootId} style={styles.rootTag}>
                <GitBranch size={10} color="#b892ff" />
                <Text style={styles.rootTagText}>Gốc: {r.rootName}</Text>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.standaloneTag}>
            <Sparkles size={10} color="#34d399" />
            <Text style={styles.standaloneTagText}>Từ độc lập / Điển tích</Text>
          </View>
        )}

        <View style={styles.familyCountBadge}>
          <Text style={styles.familyCountText}>{famCount} dạng từ</Text>
          <ChevronRight size={13} color="#94a3b8" />
        </View>
      </View>
    </TouchableOpacity>
  );
});

export const AllWordsScreen: React.FC<AllWordsScreenProps> = ({
  roots,
  loading = false,
  onRefresh,
  onSelectWord,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    sort: 'az',
    pos: 'all',
    cefr: 'all',
    origin: 'all',
  });

  const safeRoots = roots || [];
  const allWords = useMemo(() => getAllLexiconWords(safeRoots), [safeRoots]);

  const filteredWords = useMemo(() => {
    return allWords
      .filter((w) => {
        if (!w) return false;

        // POS Filter
        if (filters.pos !== 'all') {
          const pos = w.partOfSpeech || '';
          if (!pos.toLowerCase().includes(filters.pos.toLowerCase())) {
            return false;
          }
        }

        // CEFR Filter
        if (filters.cefr !== 'all' && w.cefrLevel !== filters.cefr) {
          return false;
        }

        // Origin Filter
        if (filters.origin !== 'all') {
          if (filters.origin === 'standalone') {
            if (w.roots && w.roots.length > 0) return false;
          } else {
            // Find parent roots
            const hasOrigin = safeRoots.some(
              (r) =>
                r &&
                r.originLanguage &&
                r.originLanguage.toLowerCase().includes(filters.origin.toLowerCase()) &&
                r.words &&
                r.words.some((rw) => rw && rw.id === w.id)
            );
            if (!hasOrigin) return false;
          }
        }

        // Search Query
        const q = (searchQuery || '').toLowerCase().trim();
        if (!q) return true;

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
      })
      .sort((a, b) => {
        if (filters.sort === 'az') {
          return (a.term || '').localeCompare(b.term || '');
        } else if (filters.sort === 'za') {
          return (b.term || '').localeCompare(a.term || '');
        } else if (filters.sort === 'cefr_asc') {
          return (CEFR_ORDER[a.cefrLevel] || 0) - (CEFR_ORDER[b.cefrLevel] || 0);
        } else if (filters.sort === 'cefr_desc') {
          return (CEFR_ORDER[b.cefrLevel] || 0) - (CEFR_ORDER[a.cefrLevel] || 0);
        }
        return 0;
      });
  }, [allWords, safeRoots, searchQuery, filters]);

  const handlePlayAudio = useCallback((term: string) => {
    speakWord(term, 'us');
  }, []);

  const handleSelectItem = useCallback(
    (word: SupervocWord) => {
      onSelectWord(word);
    },
    [onSelectWord]
  );

  const keyExtractor = useCallback((item: SupervocWord) => item.id || item.term, []);

  const renderWordItem = useCallback(
    ({ item }: { item: SupervocWord }) => (
      <WordListItemCard
        item={item}
        onSelect={handleSelectItem}
        onPlayAudio={handlePlayAudio}
      />
    ),
    [handleSelectItem, handlePlayAudio]
  );

  return (
    <View style={styles.container}>
      {/* Search & Filter Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <Search size={16} color="#94a3b8" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm trong kho từ vựng..."
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

        {/* Dropdown Multi-Filter Accordion */}
        <AdvancedFilterDropdown
          filters={filters}
          onChangeFilters={setFilters}
          totalResultsCount={filteredWords.length}
        />
      </View>

      {/* FlatList for High-Performance Scrolling */}
      <FlatList
        data={filteredWords}
        keyExtractor={keyExtractor}
        renderItem={renderWordItem}
        contentContainerStyle={styles.listContent}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={Platform.OS === 'android'}
        updateCellsBatchingPeriod={50}
        refreshing={loading}
        onRefresh={onRefresh}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <BookOpen size={36} color="#64748b" />
            <Text style={styles.emptyTitle}>Không tìm thấy từ vựng nào</Text>
            <Text style={styles.emptySubtitle}>
              Thử tìm kiếm với từ khóa khác hoặc bấm "Đặt lại" trong Bộ Lọc Nâng Cao
            </Text>
          </View>
        }
      />
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
    gap: 8,
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
  listContent: {
    padding: 14,
    paddingBottom: 40,
    gap: 8,
  },
  wordCard: {
    backgroundColor: '#0c0d28',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  wordMainRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  wordLeftCol: {
    flex: 1,
    paddingRight: 10,
  },
  termBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  wordTerm: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
  },
  posBadge: {
    backgroundColor: 'rgba(96, 165, 250, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
  },
  posText: {
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
  cefrText: {
    color: '#6ee7b7',
    fontSize: 9,
    fontWeight: '800',
  },
  phoneticText: {
    color: '#94a3b8',
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    marginTop: 2,
    marginBottom: 4,
  },
  definitionText: {
    color: '#cbd5e1',
    fontSize: 12,
    lineHeight: 16,
  },
  speakerBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.04)',
    paddingTop: 8,
    marginTop: 8,
  },
  rootChipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    flex: 1,
  },
  rootTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(184, 146, 255, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  rootTagText: {
    color: '#b892ff',
    fontSize: 9.5,
    fontWeight: '700',
  },
  standaloneTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(52, 211, 153, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  standaloneTagText: {
    color: '#6ee7b7',
    fontSize: 9.5,
    fontWeight: '700',
  },
  familyCountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  familyCountText: {
    color: '#94a3b8',
    fontSize: 9.5,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    gap: 8,
  },
  emptyTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 8,
  },
  emptySubtitle: {
    color: '#94a3b8',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 30,
    lineHeight: 18,
  },
});
