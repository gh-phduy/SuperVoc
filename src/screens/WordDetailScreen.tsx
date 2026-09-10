import React, { useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SupervocWord, SupervocRoot } from '../data/supervoc-roots-dataset';
import { WordAnatomyCard } from '../components/WordAnatomyCard';
import { WordFamilyMatrix } from '../components/WordFamilyMatrix';
import { SynonymsAntonymsCard } from '../components/SynonymsAntonymsCard';
import { NuanceComparisonTable } from '../components/NuanceComparisonTable';
import { speakWord } from '../services/speech';
import {
  ArrowLeft,
  Volume2,
  Quote,
  Sparkles,
  Link,
  Tag,
  GitBranch,
} from 'lucide-react-native';

interface WordDetailScreenProps {
  word: SupervocWord;
  root?: SupervocRoot;
  onBack: () => void;
  onSelectRoot?: (root: SupervocRoot) => void;
  onSelectRootById?: (rootId: string) => void;
  onSelectRelatedWord?: (term: string) => void;
}

export const WordDetailScreen: React.FC<WordDetailScreenProps> = React.memo(({
  word,
  root,
  onBack,
  onSelectRoot,
  onSelectRootById,
  onSelectRelatedWord,
}) => {
  const insets = useSafeAreaInsets();
  const safeTopPadding = insets.top > 0 ? insets.top + 4 : 10;

  const handlePlayUs = useCallback(() => {
    if (word?.term) speakWord(word.term, 'us');
  }, [word?.term]);

  const handlePlayUk = useCallback(() => {
    if (word?.term) speakWord(word.term, 'uk');
  }, [word?.term]);

  if (!word) {
    return (
      <View style={styles.container}>
        <View style={[styles.topBar, { paddingTop: safeTopPadding }]}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <ArrowLeft size={18} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>Không tìm thấy từ vựng</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={[styles.topBar, { paddingTop: safeTopPadding }]}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={18} color="#ffffff" />
        </TouchableOpacity>

        <View style={styles.topBarInfo}>
          <Text style={styles.topBarTitle}>SIÊU TỪ ĐIỂN: {word.term.toUpperCase()}</Text>

          {/* Connected Root Badges Horizontal Scroll */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.rootBadgesList}
          >
            {word.roots && word.roots.length > 0 ? (
              word.roots.map((r) => (
                <TouchableOpacity
                  key={r.rootId}
                  style={styles.rootLinkChip}
                  onPress={() => onSelectRootById && onSelectRootById(r.rootId)}
                >
                  <GitBranch size={9} color="#b892ff" />
                  <Text style={styles.rootLinkText}>
                    Gốc: {r.rootName} ({r.meaningVi})
                  </Text>
                </TouchableOpacity>
              ))
            ) : root ? (
              <TouchableOpacity
                style={styles.rootLinkChip}
                onPress={() => onSelectRoot && onSelectRoot(root)}
              >
                <GitBranch size={9} color="#b892ff" />
                <Text style={styles.rootLinkText}>
                  Gốc: {root.rootName} ({root.meaningVi})
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.standaloneBadge}>
                <Sparkles size={9} color="#34d399" />
                <Text style={styles.standaloneBadgeText}>Từ vựng độc lập</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        {/* Word Header Hero */}
        <View style={styles.wordHero}>
          <View style={styles.badgeRow}>
            <View style={styles.posBadge}>
              <Text style={styles.posText}>{word.partOfSpeech}</Text>
            </View>
            <View style={styles.cefrBadge}>
              <Text style={styles.cefrText}>Level {word.cefrLevel}</Text>
            </View>
          </View>

          <Text style={styles.termTitle}>{word.term}</Text>

          {/* Pronunciation & Audio Buttons (Vertical 2 Rows) */}
          <View style={styles.audioStack}>
            {/* US Audio Button */}
            <TouchableOpacity
              style={[styles.audioCardRow, styles.audioCardUs]}
              activeOpacity={0.75}
              onPress={handlePlayUs}
            >
              <View style={styles.audioLeftGroup}>
                <View style={[styles.speakerCircle, { backgroundColor: 'rgba(56, 189, 248, 0.2)' }]}>
                  <Volume2 size={16} color="#38bdf8" />
                </View>
                <View style={[styles.accentTag, { backgroundColor: 'rgba(56, 189, 248, 0.15)', borderColor: '#38bdf8' }]}>
                  <Text style={[styles.accentTagText, { color: '#38bdf8' }]}>US</Text>
                </View>
              </View>

              <Text style={styles.audioPhoneticText}>
                {word.phoneticUs}
              </Text>

              <Text style={[styles.listenHint, { color: '#38bdf8' }]}>Nghe</Text>
            </TouchableOpacity>

            {/* UK Audio Button */}
            {word.phoneticUk ? (
              <TouchableOpacity
                style={[styles.audioCardRow, styles.audioCardUk]}
                activeOpacity={0.75}
                onPress={handlePlayUk}
              >
                <View style={styles.audioLeftGroup}>
                  <View style={[styles.speakerCircle, { backgroundColor: 'rgba(184, 146, 255, 0.2)' }]}>
                    <Volume2 size={16} color="#b892ff" />
                  </View>
                  <View style={[styles.accentTag, { backgroundColor: 'rgba(184, 146, 255, 0.15)', borderColor: '#b892ff' }]}>
                    <Text style={[styles.accentTagText, { color: '#b892ff' }]}>UK</Text>
                  </View>
                </View>

                <Text style={styles.audioPhoneticText}>
                  {word.phoneticUk}
                </Text>

                <Text style={[styles.listenHint, { color: '#b892ff' }]}>Nghe</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {/* Vietnamese Meaning Primary */}
          <View style={styles.definitionBox}>
            <Text style={styles.definitionLabel}>Định nghĩa tiếng Việt:</Text>
            <Text style={styles.definitionText}>{word.definitionVi}</Text>
            {word.definitionEn ? (
              <Text style={styles.definitionEnText}>"{word.definitionEn}"</Text>
            ) : null}
          </View>

          {/* Detailed Nuance & Semantic Imagery */}
          {word.detailedMeaningVi ? (
            <View style={styles.detailedNuanceBox}>
              <View style={styles.detailedNuanceHeader}>
                <Sparkles size={13} color="#f59e0b" />
                <Text style={styles.detailedNuanceLabel}>NGHĨA CHI TIẾT & SẮC THÁI NGUYÊN BẢN:</Text>
              </View>
              <Text style={styles.detailedNuanceText}>{word.detailedMeaningVi}</Text>
            </View>
          ) : null}
        </View>

        {/* Morphological Word Anatomy (With Multi-root support) */}
        <WordAnatomyCard
          anatomy={word.anatomy}
          roots={word.roots}
          term={word.term}
          onSelectRoot={onSelectRootById}
        />

        {/* Word Family Matrix (Noun, Verb, Adj, Adv) */}
        {word.wordFamily && (
          <WordFamilyMatrix
            currentTerm={word.term}
            nouns={word.wordFamily.nouns || []}
            verbs={word.wordFamily.verbs || []}
            adjectives={word.wordFamily.adjectives || []}
            adverbs={word.wordFamily.adverbs || []}
            onSelectTerm={onSelectRelatedWord}
          />
        )}

        {/* Synonyms & Antonyms Interactive Card */}
        <SynonymsAntonymsCard
          synonyms={word.synonyms}
          antonyms={word.antonyms}
          onSelectWord={onSelectRelatedWord}
        />

        {/* Nuance Comparison Matrix (Bảng so sánh sắc thái từ vựng) */}
        {word.nuanceTable && (
          <NuanceComparisonTable
            nuanceTable={word.nuanceTable}
            currentTerm={word.term}
            onSelectWord={onSelectRelatedWord}
          />
        )}

        {/* Collocations & Phrases */}
        {word.collocations && word.collocations.length > 0 && (
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Link size={15} color="#b892ff" />
              <Text style={styles.sectionTitle}>CỤM TỪ HAY ĐI CHUNG (COLLOCATIONS)</Text>
            </View>
            <View style={styles.collocationsList}>
              {word.collocations.map((item, idx) => (
                <View key={idx} style={styles.collocationItem}>
                  <Text style={styles.collocationPhrase}>{item.phrase}</Text>
                  <Text style={styles.collocationMeaning}>{item.vi}</Text>
                  {item.example ? (
                    <Text style={styles.collocationExample}>"{item.example}"</Text>
                  ) : null}
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Bilingual Examples */}
        {word.examples && word.examples.length > 0 && (
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Quote size={15} color="#34d399" />
              <Text style={[styles.sectionTitle, { color: '#34d399' }]}>
                VÍ DỤ CÂU THỰC TẾ (EXAMPLES)
              </Text>
            </View>
            <View style={styles.examplesList}>
              {word.examples.map((item, idx) => (
                <View key={idx} style={styles.exampleItem}>
                  <Text style={styles.exampleEn}>{item.en}</Text>
                  <Text style={styles.exampleVi}>{item.vi}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07061d',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: Platform.OS === 'ios' ? 36 : 6,
    paddingBottom: 6,
    backgroundColor: 'rgba(12, 13, 40, 0.96)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  topBarInfo: {
    flex: 1,
  },
  topBarTitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.3,
  },
  rootBadgesList: {
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 1,
    marginTop: 2,
  },
  rootLinkChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(184, 146, 255, 0.15)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.25)',
  },
  rootLinkText: {
    color: '#b892ff',
    fontSize: 9.5,
    fontWeight: '700',
  },
  standaloneBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(52, 211, 153, 0.15)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  standaloneBadgeText: {
    color: '#6ee7b7',
    fontSize: 9.5,
    fontWeight: '700',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 12,
    paddingTop: 6,
    paddingBottom: 40,
  },
  wordHero: {
    backgroundColor: '#0c0d28',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(66, 85, 255, 0.35)',
    marginBottom: 8,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 6,
  },
  posBadge: {
    backgroundColor: 'rgba(96, 165, 250, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  posText: {
    color: '#93c5fd',
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  cefrBadge: {
    backgroundColor: 'rgba(52, 211, 153, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  cefrText: {
    color: '#6ee7b7',
    fontSize: 10,
    fontWeight: '800',
  },
  termTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  audioStack: {
    flexDirection: 'column',
    gap: 8,
    marginVertical: 12,
  },
  audioCardRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  audioCardUs: {
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    borderColor: 'rgba(56, 189, 248, 0.25)',
  },
  audioCardUk: {
    backgroundColor: 'rgba(184, 146, 255, 0.08)',
    borderColor: 'rgba(184, 146, 255, 0.25)',
  },
  audioLeftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  speakerCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accentTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  accentTagText: {
    fontSize: 10,
    fontWeight: '900',
  },
  audioPhoneticText: {
    color: '#ffffff',
    fontSize: 13,
    fontFamily: 'monospace',
    fontWeight: '700',
    flex: 1,
    paddingHorizontal: 10,
  },
  listenHint: {
    fontSize: 11,
    fontWeight: '800',
  },
  definitionBox: {
    backgroundColor: 'rgba(184, 146, 255, 0.1)',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.25)',
  },
  definitionLabel: {
    color: '#94a3b8',
    fontSize: 10,
    fontWeight: '700',
    marginBottom: 2,
  },
  definitionText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 20,
  },
  definitionEnText: {
    color: '#cbd5e1',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 4,
  },
  detailedNuanceBox: {
    backgroundColor: 'rgba(245, 158, 11, 0.09)',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
    marginTop: 10,
  },
  detailedNuanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 5,
  },
  detailedNuanceLabel: {
    color: '#f59e0b',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  detailedNuanceText: {
    color: '#fef3c7',
    fontSize: 12.5,
    lineHeight: 18,
    fontWeight: '500',
  },
  sectionCard: {
    backgroundColor: '#0c0d28',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 6,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
    paddingBottom: 6,
  },
  sectionTitle: {
    color: '#b892ff',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
  collocationsList: {
    gap: 8,
  },
  collocationItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: 10,
    padding: 8,
  },
  collocationPhrase: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },
  collocationMeaning: {
    color: '#fbbf24',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  collocationExample: {
    color: '#94a3b8',
    fontSize: 10,
    fontStyle: 'italic',
    marginTop: 3,
  },
  examplesList: {
    gap: 8,
  },
  exampleItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: 10,
    padding: 8,
  },
  exampleEn: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
  exampleVi: {
    color: '#34d399',
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
});
