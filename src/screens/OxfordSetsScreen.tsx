import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Layers,
  Search,
  Volume2,
  Bookmark,
  BookOpen,
  Play,
  ArrowLeft,
  X,
  Sparkles,
  Clock,
  Copy,
  ArrowRight,
  User,
} from 'lucide-react-native';
import {
  OXFORD_5000_SETS,
  OxfordWordSet,
} from '../data/oxford-sets-dataset';
import { SupervocWord } from '../data/supervoc-roots-dataset';
import { speakWord, VoiceAccent } from '../services/speech';

interface OxfordSetsScreenProps {
  onSelectWord: (word: SupervocWord) => void;
  onOpenFlashcardQuiz?: (words: SupervocWord[], title: string) => void;
  selectedSetId?: string | null;
  onSelectSetId?: (setId: string | null) => void;
}

// Memoized Word Item Card for 60 FPS performance
const OxfordWordItemCard = React.memo<{
  word: SupervocWord;
  index: number;
  voiceAccent: VoiceAccent;
  isPlaying: boolean;
  onSelect: (word: SupervocWord) => void;
  onSpeak: (term: string) => void;
}>(({ word, index, voiceAccent, isPlaying, onSelect, onSpeak }) => {
  return (
    <TouchableOpacity
      style={styles.wordItemCard}
      activeOpacity={0.75}
      onPress={() => onSelect(word)}
    >
      {/* Top Row: [Index] [Term] [POS] [Level] [Audio] ------ [Vietnamese Meaning] */}
      <View style={styles.cardHeaderRow}>
        <View style={styles.cardHeaderLeft}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberBadgeText}>{index + 1}</Text>
          </View>
          <Text style={styles.wordItemTerm}>{word.term}</Text>
          <View style={styles.itemPosBadge}>
            <Text style={styles.itemPosBadgeText}>
              {word.partOfSpeech.replace('.', '').toUpperCase()}
            </Text>
          </View>
          <View style={styles.itemLevelBadge}>
            <Text style={styles.itemLevelBadgeText}>{word.cefrLevel || 'B2'}</Text>
          </View>
          <TouchableOpacity
            style={[styles.audioSpeakerBtn, isPlaying && styles.audioSpeakerBtnActive]}
            onPress={(e) => {
              e.stopPropagation();
              onSpeak(word.term);
            }}
          >
            <Volume2 size={12} color={isPlaying ? '#ffffff' : '#38bdf8'} />
            <Text style={styles.audioSpeakerText}>{voiceAccent.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardHeaderRight}>
          <Text style={styles.definitionViText} numberOfLines={2}>
            {word.definitionVi}
          </Text>
        </View>
      </View>

      {/* Bottom Row: [Phonetics US / GB] ------ [✨ Họ từ & Trái nghĩa] */}
      <View style={styles.cardFooterRow}>
        <View style={styles.phoneticsContainer}>
          <Text style={styles.phoneticsLabel}>US</Text>
          <Text style={styles.phoneticsVal}>{word.phoneticUs || `/${word.term}/`}</Text>
          {word.phoneticUk && (
            <>
              <Text style={styles.phoneticsLabelGb}>GB</Text>
              <Text style={styles.phoneticsVal}>{word.phoneticUk}</Text>
            </>
          )}
        </View>

        <View style={styles.familyBadgeChip}>
          <Sparkles size={11} color="#b892ff" />
          <Text style={styles.familyBadgeText}>Họ từ & Trái nghĩa</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

// Memoized Set Catalog Card
const OxfordCatalogCard = React.memo<{
  set: OxfordWordSet;
  isBookmarked: boolean;
  onOpenSet: (setId: string) => void;
  onToggleBookmark: (setId: string) => void;
  onOpenQuiz?: (words: SupervocWord[], title: string) => void;
}>(({ set, isBookmarked, onOpenSet, onToggleBookmark, onOpenQuiz }) => {
  const hasWords = set.words && set.words.length > 0;

  return (
    <TouchableOpacity
      style={styles.setCard}
      activeOpacity={0.85}
      onPress={() => onOpenSet(set.id)}
    >
      {/* Card Top: Title & Bookmark */}
      <View style={styles.setCardTop}>
        <Text style={styles.setCardTitle} numberOfLines={2}>
          {set.title}
        </Text>
        <TouchableOpacity
          style={styles.bookmarkBtn}
          onPress={(e) => {
            e.stopPropagation();
            onToggleBookmark(set.id);
          }}
        >
          <Bookmark
            size={17}
            color={isBookmarked ? '#f59e0b' : '#64748b'}
            fill={isBookmarked ? '#f59e0b' : 'transparent'}
          />
        </TouchableOpacity>
      </View>

      {/* Badges Row */}
      <View style={styles.setCardBadgesRow}>
        <View style={styles.setCardLevelBadge}>
          <Text style={styles.setCardLevelText}>LEVEL {set.level}</Text>
        </View>

        <View style={styles.setCardCountBadge}>
          <Layers size={11} color="#b892ff" />
          <Text style={styles.setCardCountText}>
            {set.words.length > 0 ? set.words.length : set.termsCount} terms
          </Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.setCardDescription} numberOfLines={2}>
        {set.description}
      </Text>

      {/* Footer: Author & Action Buttons */}
      <View style={styles.setCardFooter}>
        <View style={styles.setCardAuthor}>
          <View style={styles.smallAvatar}>
            <Text style={styles.smallAvatarText}>
              {(set.author || 'SuperVoc')[0].toUpperCase()}
            </Text>
          </View>
          <Text style={styles.smallAuthorName}>{set.author || 'SuperVoc / Oxford 5000'}</Text>
          {set.daysAgo && <Text style={styles.smallDaysAgoText}>• {set.daysAgo}</Text>}
        </View>

        <View style={styles.setCardActions}>
          <View style={styles.viewWordsBtn}>
            <BookOpen size={13} color="#ffffff" />
            <Text style={styles.viewWordsBtnText}>Xem {set.words.length} từ</Text>
          </View>

          {hasWords && onOpenQuiz && (
            <TouchableOpacity
              style={styles.quickPlayBtn}
              activeOpacity={0.8}
              onPress={(e) => {
                e.stopPropagation();
                onOpenQuiz(set.words, set.title);
              }}
            >
              <Play size={13} color="#ffffff" fill="#ffffff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
});

export const OxfordSetsScreen: React.FC<OxfordSetsScreenProps> = ({
  onSelectWord,
  onOpenFlashcardQuiz,
  selectedSetId,
  onSelectSetId,
}) => {
  const insets = useSafeAreaInsets();
  const safeTopPadding = Math.max(
    insets.top,
    Platform.OS === 'android' ? (StatusBar.currentHeight || 28) : 44
  ) + 6;

  const [internalSelectedSetId, setInternalSelectedSetId] = useState<string | null>(null);
  const activeSetId = selectedSetId !== undefined ? selectedSetId : internalSelectedSetId;
  const setActiveSetId = onSelectSetId || setInternalSelectedSetId;

  // Catalog Filters
  const [catalogSearch, setCatalogSearch] = useState('');
  const [bookmarkedSetIds, setBookmarkedSetIds] = useState<Set<string>>(new Set());

  // Set Detail Filters
  const [detailSearch, setDetailSearch] = useState('');
  const [posFilter, setPosFilter] = useState<string>('All');
  const [voiceAccent, setVoiceAccent] = useState<VoiceAccent>('us');
  const [playingTerm, setPlayingTerm] = useState<string | null>(null);

  // Active Set object
  const currentSet = useMemo(() => {
    if (!activeSetId) return null;
    return OXFORD_5000_SETS.find((s) => s.id === activeSetId) || null;
  }, [activeSetId]);

  // Filtered Catalog Sets
  const filteredSets = useMemo(() => {
    return OXFORD_5000_SETS.filter((set) => {
      const q = catalogSearch.toLowerCase().trim();
      return (
        !q ||
        set.title.toLowerCase().includes(q) ||
        set.description.toLowerCase().includes(q) ||
        set.category.toLowerCase().includes(q)
      );
    });
  }, [catalogSearch]);

  // Filtered Words in Active Set
  const filteredWords = useMemo(() => {
    if (!currentSet) return [];
    const words = currentSet.words || [];
    return words.filter((w) => {
      let matchPos = true;
      if (posFilter === 'N.') matchPos = w.partOfSpeech.startsWith('n');
      else if (posFilter === 'ADJ.') matchPos = w.partOfSpeech.startsWith('adj');
      else if (posFilter === 'V.') matchPos = w.partOfSpeech.startsWith('v');

      const q = detailSearch.toLowerCase().trim();
      const matchSearch =
        !q ||
        w.term.toLowerCase().includes(q) ||
        w.definitionVi.toLowerCase().includes(q) ||
        (w.definitionEn && w.definitionEn.toLowerCase().includes(q)) ||
        w.partOfSpeech.toLowerCase().includes(q);

      return matchPos && matchSearch;
    });
  }, [currentSet, posFilter, detailSearch]);

  const posCounts = useMemo(() => {
    if (!currentSet) return { all: 0, nouns: 0, adjs: 0, verbs: 0 };
    const words = currentSet.words || [];
    const nouns = words.filter((w) => w.partOfSpeech.startsWith('n')).length;
    const adjs = words.filter((w) => w.partOfSpeech.startsWith('adj')).length;
    const verbs = words.filter((w) => w.partOfSpeech.startsWith('v')).length;
    return { all: words.length, nouns, adjs, verbs };
  }, [currentSet]);

  const toggleBookmark = useCallback((setId: string) => {
    setBookmarkedSetIds((prev) => {
      const next = new Set(prev);
      if (next.has(setId)) next.delete(setId);
      else next.add(setId);
      return next;
    });
  }, []);

  const handleSpeak = useCallback(
    (term: string) => {
      setPlayingTerm(term);
      speakWord(term, voiceAccent);
      setTimeout(() => setPlayingTerm(null), 1200);
    },
    [voiceAccent]
  );

  const handleOpenSet = useCallback(
    (setId: string) => {
      setActiveSetId(setId);
    },
    [setActiveSetId]
  );

  // =========================================================================
  // VIEW 2: OXFORD SET DETAIL (Matching User Uploaded Image 2)
  // =========================================================================
  if (currentSet) {
    return (
      <View style={styles.container}>
        {/* Top Bar Navigation with dynamic Safe Area padding */}
        <View style={[styles.detailTopBar, { paddingTop: safeTopPadding }]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              setActiveSetId(null);
              setDetailSearch('');
              setPosFilter('All');
            }}
          >
            <ArrowLeft size={18} color="#ffffff" />
          </TouchableOpacity>

          <View style={styles.topBarBadgesRow}>
            <View style={styles.topBarTagBadge}>
              <BookOpen size={11} color="#60a5fa" />
              <Text style={styles.topBarTagText}>VOCABULARY TERMS</Text>
            </View>

            <View style={styles.topBarLevelBadge}>
              <Text style={styles.topBarLevelText}>LEVEL {currentSet.level}</Text>
            </View>

            <View style={styles.topBarCountBadge}>
              <Layers size={11} color="#b892ff" />
              <Text style={styles.topBarCountText}>{currentSet.words.length} terms</Text>
            </View>
          </View>

          <View style={styles.topBarRightActions}>
            <TouchableOpacity
              style={styles.topBarCopyBtn}
              onPress={() => {}}
              activeOpacity={0.7}
            >
              <Copy size={12} color="#cbd5e1" />
              <Text style={styles.topBarCopyText}>Copy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setActiveSetId(null);
                setDetailSearch('');
                setPosFilter('All');
              }}
            >
              <X size={18} color="#94a3b8" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.detailScrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Set Hero Card */}
          <View style={styles.setHeroCard}>
            <Text style={styles.setHeroTitle}>{currentSet.title}</Text>
            <Text style={styles.setHeroDescription}>{currentSet.description}</Text>

            <View style={styles.setHeroFooter}>
              <View style={styles.authorRow}>
                <View style={styles.avatarCircle}>
                  <User size={10} color="#ffffff" />
                </View>
                <Text style={styles.authorName}>{currentSet.author || 'SuperVoc / Oxford 5000'}</Text>
                {currentSet.daysAgo && (
                  <View style={styles.daysAgoRow}>
                    <Clock size={11} color="#64748b" />
                    <Text style={styles.daysAgoText}>{currentSet.daysAgo}</Text>
                  </View>
                )}
              </View>

              {onOpenFlashcardQuiz && currentSet.words.length > 0 && (
                <TouchableOpacity
                  style={styles.startPracticeBtn}
                  onPress={() => onOpenFlashcardQuiz(currentSet.words, currentSet.title)}
                  activeOpacity={0.8}
                >
                  <Play size={12} color="#ffffff" fill="#ffffff" />
                  <Text style={styles.startPracticeText}>Start Practice ▾</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Search & US/UK Toggle Bar */}
          <View style={styles.searchAndAccentRow}>
            <View style={styles.searchBoxContainer}>
              <Search size={15} color="#64748b" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search by term, definition, or part of speech..."
                placeholderTextColor="#64748b"
                value={detailSearch}
                onChangeText={setDetailSearch}
                autoCapitalize="none"
              />
              {detailSearch.length > 0 && (
                <TouchableOpacity onPress={() => setDetailSearch('')} style={styles.clearBtn}>
                  <X size={14} color="#94a3b8" />
                </TouchableOpacity>
              )}
            </View>

            {/* US / UK Accent Switch */}
            <View style={styles.accentSwitch}>
              <TouchableOpacity
                style={[styles.accentBtn, voiceAccent === 'us' && styles.accentBtnActive]}
                onPress={() => setVoiceAccent('us')}
              >
                <Text
                  style={[
                    styles.accentSmallLabel,
                    voiceAccent === 'us' && styles.accentSmallLabelActive,
                  ]}
                >
                  us
                </Text>
                <Text style={[styles.accentText, voiceAccent === 'us' && styles.accentTextActive]}>
                  US
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.accentBtn, voiceAccent === 'uk' && styles.accentBtnActive]}
                onPress={() => setVoiceAccent('uk')}
              >
                <Text
                  style={[
                    styles.accentSmallLabel,
                    voiceAccent === 'uk' && styles.accentSmallLabelActive,
                  ]}
                >
                  GB
                </Text>
                <Text style={[styles.accentText, voiceAccent === 'uk' && styles.accentTextActive]}>
                  UK
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.showingCountText}>
              Showing <Text style={{ fontWeight: '800', color: '#f1f5f9' }}>{filteredWords.length}</Text> of{' '}
              <Text style={{ fontWeight: '800', color: '#f1f5f9' }}>{currentSet.words.length}</Text> terms
            </Text>
          </View>

          {/* Showing Count and POS Filter Chips */}
          <View style={styles.filterSection}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.posFilterRow}
            >
              <Text style={styles.filterLabel}>PART OF SPEECH:</Text>

              <TouchableOpacity
                style={[styles.posFilterChip, posFilter === 'All' && styles.posFilterChipActive]}
                onPress={() => setPosFilter('All')}
              >
                <Text
                  style={[
                    styles.posFilterChipText,
                    posFilter === 'All' && styles.posFilterChipTextActive,
                  ]}
                >
                  All ({posCounts.all})
                </Text>
              </TouchableOpacity>

              {posCounts.adjs > 0 && (
                <TouchableOpacity
                  style={[styles.posFilterChip, posFilter === 'ADJ.' && styles.posFilterChipActive]}
                  onPress={() => setPosFilter('ADJ.')}
                >
                  <Text
                    style={[
                      styles.posFilterChipText,
                      posFilter === 'ADJ.' && styles.posFilterChipTextActive,
                    ]}
                  >
                    ADJ. ({posCounts.adjs})
                  </Text>
                </TouchableOpacity>
              )}

              {posCounts.nouns > 0 && (
                <TouchableOpacity
                  style={[styles.posFilterChip, posFilter === 'N.' && styles.posFilterChipActive]}
                  onPress={() => setPosFilter('N.')}
                >
                  <Text
                    style={[
                      styles.posFilterChipText,
                      posFilter === 'N.' && styles.posFilterChipTextActive,
                    ]}
                  >
                    N. ({posCounts.nouns})
                  </Text>
                </TouchableOpacity>
              )}

              {posCounts.verbs > 0 && (
                <TouchableOpacity
                  style={[styles.posFilterChip, posFilter === 'V.' && styles.posFilterChipActive]}
                  onPress={() => setPosFilter('V.')}
                >
                  <Text
                    style={[
                      styles.posFilterChipText,
                      posFilter === 'V.' && styles.posFilterChipTextActive,
                    ]}
                  >
                    V. ({posCounts.verbs})
                  </Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>

          {/* Word List Cards (Responsive 2-Row Structured Layout) */}
          <View style={styles.wordList}>
            {filteredWords.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>Không tìm thấy từ vựng phù hợp với tìm kiếm.</Text>
              </View>
            ) : (
              filteredWords.map((word, idx) => (
                <OxfordWordItemCard
                  key={word.id || word.term}
                  word={word}
                  index={idx}
                  voiceAccent={voiceAccent}
                  isPlaying={playingTerm === word.term}
                  onSelect={onSelectWord}
                  onSpeak={handleSpeak}
                />
              ))
            )}
          </View>
        </ScrollView>

        {/* Tip & Flashcards Action Footer Bar (Matching Screenshot) */}
        <View style={styles.detailFooterBar}>
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipText} numberOfLines={2}>
              <Text style={{ fontWeight: '800', color: '#fcd34d' }}>💡 Tip: </Text>
              Nhấn vào từ bất kỳ để xem{' '}
              <Text style={{ fontWeight: '700', color: '#ffffff' }}>Họ từ (Noun/Verb/Adj/Adv)</Text>,{' '}
              <Text style={{ fontWeight: '700', color: '#f87171' }}>Từ trái nghĩa</Text> & định nghĩa chi tiết.
            </Text>
          </View>

          <View style={styles.detailFooterButtons}>
            <TouchableOpacity
              style={styles.closeFooterBtn}
              onPress={() => {
                setActiveSetId(null);
                setDetailSearch('');
                setPosFilter('All');
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.closeFooterBtnText}>Close</Text>
            </TouchableOpacity>

            {onOpenFlashcardQuiz && currentSet.words.length > 0 && (
              <TouchableOpacity
                style={styles.studyFlashcardsBtn}
                onPress={() => onOpenFlashcardQuiz(currentSet.words, currentSet.title)}
                activeOpacity={0.85}
              >
                <Text style={styles.studyFlashcardsBtnText}>Study Flashcards</Text>
                <ArrowRight size={13} color="#ffffff" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }

  // =========================================================================
  // VIEW 1: OXFORD SETS CATALOG (HUB - Matching User Uploaded Image 1)
  // =========================================================================
  return (
    <View style={styles.container}>
      {/* Search in Catalog */}
      <View style={styles.catalogHeader}>
        <View style={styles.catalogSearchBox}>
          <Search size={15} color="#64748b" style={styles.searchIcon} />
          <TextInput
            style={styles.catalogSearchInput}
            placeholder="Tìm kiếm bộ từ vựng Oxford..."
            placeholderTextColor="#64748b"
            value={catalogSearch}
            onChangeText={setCatalogSearch}
          />
          {catalogSearch.length > 0 && (
            <TouchableOpacity onPress={() => setCatalogSearch('')}>
              <X size={14} color="#94a3b8" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Catalog Sets List */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.catalogScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.setsGrid}>
          {filteredSets.map((set) => (
            <OxfordCatalogCard
              key={set.id}
              set={set}
              isBookmarked={bookmarkedSetIds.has(set.id)}
              onOpenSet={handleOpenSet}
              onToggleBookmark={toggleBookmark}
              onOpenQuiz={onOpenFlashcardQuiz}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07061d',
  },
  content: {
    flex: 1,
  },

  // CATALOG STYLES
  catalogHeader: {
    backgroundColor: '#0c0d28',
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  catalogSearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121438',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  catalogSearchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 12,
    paddingVertical: 2,
  },
  searchIcon: {
    marginRight: 6,
  },
  catalogScrollContent: {
    padding: 14,
    paddingBottom: 24,
  },
  setsGrid: {
    gap: 12,
  },
  setCard: {
    backgroundColor: '#0c0d28',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  setCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  setCardTitle: {
    flex: 1,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 21,
  },
  bookmarkBtn: {
    padding: 4,
  },
  setCardBadgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  setCardLevelBadge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: 'rgba(96, 165, 250, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(96, 165, 250, 0.4)',
  },
  setCardLevelText: {
    color: '#60a5fa',
    fontSize: 10,
    fontWeight: '900',
  },
  setCardCountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: 'rgba(184, 146, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.3)',
  },
  setCardCountText: {
    color: '#d8b4fe',
    fontSize: 10,
    fontWeight: '800',
  },
  setCardDescription: {
    color: '#94a3b8',
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 12,
  },
  setCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
    paddingTop: 10,
  },
  setCardAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  smallAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallAvatarText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '900',
  },
  smallAuthorName: {
    color: '#cbd5e1',
    fontSize: 11,
    fontWeight: '700',
  },
  setCardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  viewWordsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#1e224e',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  viewWordsBtnText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '800',
  },
  quickPlayBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#4255ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // DETAIL STYLES
  detailTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0c0d28',
    paddingHorizontal: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarBadgesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },
  topBarTagBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(96, 165, 250, 0.12)',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(96, 165, 250, 0.3)',
  },
  topBarTagText: {
    color: '#60a5fa',
    fontSize: 9,
    fontWeight: '900',
  },
  topBarLevelBadge: {
    backgroundColor: 'rgba(96, 165, 250, 0.15)',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(96, 165, 250, 0.4)',
  },
  topBarLevelText: {
    color: '#93c5fd',
    fontSize: 9,
    fontWeight: '900',
  },
  topBarCountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(184, 146, 255, 0.12)',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.3)',
  },
  topBarCountText: {
    color: '#d8b4fe',
    fontSize: 9,
    fontWeight: '800',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailScrollContent: {
    padding: 12,
    paddingBottom: 50,
  },
  setHeroCard: {
    backgroundColor: '#0c0d28',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    marginBottom: 10,
  },
  setHeroTitle: {
    color: '#f472b6',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 22,
    marginBottom: 4,
  },
  setHeroDescription: {
    color: '#94a3b8',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 10,
  },
  setHeroFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  avatarCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetter: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '900',
  },
  authorName: {
    color: '#cbd5e1',
    fontSize: 11,
    fontWeight: '700',
  },
  startPracticeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#4255ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  startPracticeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '900',
  },
  searchAndAccentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  searchBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c0d28',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 12,
    paddingVertical: 2,
  },
  clearBtn: {
    padding: 2,
  },
  accentSwitch: {
    flexDirection: 'row',
    backgroundColor: '#0c0d28',
    borderRadius: 8,
    padding: 2,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  accentBtn: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 6,
  },
  accentBtnActive: {
    backgroundColor: '#4255ff',
  },
  accentText: {
    color: '#64748b',
    fontSize: 10,
    fontWeight: '800',
  },
  accentTextActive: {
    color: '#ffffff',
    fontWeight: '900',
  },
  filterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 6,
  },
  posFilterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  filterLabel: {
    color: '#64748b',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginRight: 2,
  },
  posFilterChip: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: '#0c0d28',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  posFilterChipActive: {
    backgroundColor: '#4255ff',
    borderColor: '#60a5fa',
  },
  posFilterChipText: {
    color: '#94a3b8',
    fontSize: 10,
    fontWeight: '700',
  },
  posFilterChipTextActive: {
    color: '#ffffff',
    fontWeight: '900',
  },
  showingCountText: {
    color: '#64748b',
    fontSize: 10,
    fontWeight: '600',
  },
  wordList: {
    gap: 8,
  },
  emptyState: {
    backgroundColor: '#0c0d28',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  emptyStateText: {
    color: '#94a3b8',
    fontSize: 12,
  },
  wordItemCard: {
    backgroundColor: '#0c0d28',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    gap: 8,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  numberBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberBadgeText: {
    color: '#94a3b8',
    fontSize: 10,
    fontWeight: '800',
  },
  wordItemTerm: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
  },
  itemPosBadge: {
    backgroundColor: 'rgba(147, 51, 234, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(147, 51, 234, 0.4)',
  },
  itemPosBadgeText: {
    color: '#c084fc',
    fontSize: 8,
    fontWeight: '900',
  },
  itemLevelBadge: {
    backgroundColor: 'rgba(52, 211, 153, 0.2)',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.4)',
  },
  itemLevelBadgeText: {
    color: '#34d399',
    fontSize: 8,
    fontWeight: '900',
  },
  audioSpeakerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: 'rgba(56, 189, 248, 0.12)',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
  },
  audioSpeakerBtnActive: {
    backgroundColor: '#38bdf8',
  },
  audioSpeakerText: {
    color: '#38bdf8',
    fontSize: 8,
    fontWeight: '900',
  },
  cardHeaderRight: {
    flexShrink: 1,
    alignItems: 'flex-end',
  },
  definitionViText: {
    color: '#f8fafc',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'right',
  },
  cardFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.04)',
    gap: 6,
  },
  phoneticsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  phoneticsLabel: {
    color: '#64748b',
    fontSize: 8,
    fontWeight: '800',
  },
  phoneticsLabelGb: {
    color: '#64748b',
    fontSize: 8,
    fontWeight: '800',
    marginLeft: 4,
  },
  phoneticsVal: {
    color: '#94a3b8',
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  },
  familyBadgeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(184, 146, 255, 0.12)',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.3)',
  },
  familyBadgeText: {
    color: '#d8b4fe',
    fontSize: 9,
    fontWeight: '800',
  },
  detailFooterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(12, 13, 40, 0.98)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  tipTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  tipText: {
    color: '#94a3b8',
    fontSize: 10,
    lineHeight: 14,
  },
  detailFooterButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  closeFooterBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
  },
  closeFooterBtnText: {
    color: '#cbd5e1',
    fontSize: 11,
    fontWeight: '700',
  },
  studyFlashcardsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#4255ff',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 8,
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },
  studyFlashcardsBtnText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '800',
  },
  topBarRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  topBarCopyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  topBarCopyText: {
    color: '#cbd5e1',
    fontSize: 11,
    fontWeight: '700',
  },
  daysAgoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginLeft: 6,
  },
  daysAgoText: {
    color: '#64748b',
    fontSize: 11,
    fontWeight: '600',
  },
  smallDaysAgoText: {
    color: '#64748b',
    fontSize: 10,
    fontWeight: '500',
  },
  accentSmallLabel: {
    color: '#64748b',
    fontSize: 8,
    fontWeight: '800',
    marginRight: 2,
  },
  accentSmallLabelActive: {
    color: '#bfdbfe',
  },
});
