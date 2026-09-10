import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SupervocRoot, SupervocWord } from '../data/supervoc-roots-dataset';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  ChevronRight,
  GitBranch,
  Layers,
  Dna,
} from 'lucide-react-native';

interface RootDetailScreenProps {
  root: SupervocRoot;
  onBack: () => void;
  onSelectWord: (word: SupervocWord) => void;
}

export const RootDetailScreen: React.FC<RootDetailScreenProps> = React.memo(({
  root,
  onBack,
  onSelectWord,
}) => {
  const insets = useSafeAreaInsets();
  const safeTopPadding = insets.top > 0 ? insets.top + 4 : 10;

  if (!root) {
    return (
      <View style={styles.container}>
        <View style={[styles.topBar, { paddingTop: safeTopPadding }]}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <ArrowLeft size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>Không tìm thấy gốc từ</Text>
        </View>
      </View>
    );
  }

  const wordsList = root.words || [];

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={[styles.topBar, { paddingTop: safeTopPadding }]}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={20} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.topBarTitle}>GỐC TỪ: {root.rootName}</Text>
          <Text style={styles.topBarSubtitle}>{root.originLanguage} Origin</Text>
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        {/* Root Hero Card */}
        <View style={styles.heroCard}>
          <View style={styles.badgeRow}>
            <View style={styles.rootBadge}>
              <Sparkles size={14} color="#b892ff" />
              <Text style={styles.rootBadgeText}>ROOT ANATOMY</Text>
            </View>
            <View style={styles.originBadge}>
              <Text style={styles.originText}>{root.originLanguage}</Text>
            </View>
          </View>

          <Text style={styles.heroRoot}>{root.rootName}</Text>
          <Text style={styles.heroMeaningVi}>{root.meaningVi}</Text>
          {root.meaningEn ? (
            <Text style={styles.heroMeaningEn}>Meaning: "{root.meaningEn}"</Text>
          ) : null}

          {root.etymologyStory ? (
            <View style={styles.storyBox}>
              <BookOpen size={14} color="#38bdf8" />
              <Text style={styles.storyText}>{root.etymologyStory}</Text>
            </View>
          ) : null}
        </View>

        {/* Visual Genealogy Branching Tree */}
        <View style={styles.treeSection}>
          <View style={styles.treeSectionHeader}>
            <GitBranch size={16} color="#b892ff" />
            <Text style={styles.treeSectionTitle}>SƠ ĐỒ PHẢ HỆ TỪ GỐC (GENEALOGY TREE)</Text>
          </View>

          <View style={styles.treeContainer}>
            {/* Center Root Node */}
            <View style={styles.rootTreeNode}>
              <Text style={styles.rootTreeName}>{root.rootName}</Text>
              <Text style={styles.rootTreeMeaning}>({root.meaningVi})</Text>
            </View>

            <View style={styles.treeTrunk} />

            {/* Descendant Word Nodes */}
            <View style={styles.treeLeavesContainer}>
              {wordsList.map((word) => {
                if (!word) return null;
                const fam = word.wordFamily || { nouns: [], verbs: [], adjectives: [], adverbs: [] };
                const nLen = fam.nouns?.length || 0;
                const vLen = fam.verbs?.length || 0;
                const adjLen = fam.adjectives?.length || 0;
                const advLen = fam.adverbs?.length || 0;

                return (
                  <TouchableOpacity
                    key={word.id}
                    style={styles.treeLeafCard}
                    activeOpacity={0.8}
                    onPress={() => onSelectWord(word)}
                  >
                    <View style={styles.treeLeafHeader}>
                      <Dna size={14} color="#38bdf8" />
                      <Text style={styles.treeLeafTerm}>{word.term}</Text>
                      <View style={styles.posBadge}>
                        <Text style={styles.posText}>{word.partOfSpeech}</Text>
                      </View>
                    </View>

                    {word.anatomy?.formula ? (
                      <Text style={styles.treeLeafFormula}>{word.anatomy.formula}</Text>
                    ) : null}
                    <Text style={styles.treeLeafDef}>{word.definitionVi}</Text>

                    {/* Word family counts */}
                    <View style={styles.familyBadgeRow}>
                      <Text style={styles.familyBadgeText}>
                        Word Family: {nLen}n • {vLen}v • {adjLen}adj • {advLen}adv
                      </Text>
                      <ChevronRight size={13} color="#b892ff" />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* Descendant Words Detail List */}
        <View style={styles.wordsSection}>
          <Text style={styles.sectionTitle}>
            DANH SÁCH TỪ VỰNG PHÁI SINH ({wordsList.length})
          </Text>

          {wordsList.map((word) => {
            if (!word) return null;
            return (
              <TouchableOpacity
                key={word.id}
                style={styles.wordCard}
                activeOpacity={0.75}
                onPress={() => onSelectWord(word)}
              >
                <View style={styles.wordInfo}>
                  <View style={styles.wordTermRow}>
                    <Text style={styles.wordTerm}>{word.term}</Text>
                    <View style={styles.posBadge}>
                      <Text style={styles.posText}>{word.partOfSpeech}</Text>
                    </View>
                    <View style={styles.cefrBadge}>
                      <Text style={styles.cefrText}>{word.cefrLevel}</Text>
                    </View>
                  </View>
                  <Text style={styles.wordPhonetic}>{word.phoneticUs}</Text>
                  <Text style={styles.wordDefinition}>{word.definitionVi}</Text>
                </View>

                <ChevronRight size={18} color="#b892ff" />
              </TouchableOpacity>
            );
          })}
        </View>
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
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 44 : 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(12, 13, 40, 0.96)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  topBarTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
  },
  topBarSubtitle: {
    color: '#94a3b8',
    fontSize: 11,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
    gap: 16,
  },
  heroCard: {
    backgroundColor: '#0c0d28',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.3)',
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  rootBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(184, 146, 255, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  rootBadgeText: {
    color: '#b892ff',
    fontSize: 10,
    fontWeight: '900',
  },
  originBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  originText: {
    color: '#94a3b8',
    fontSize: 10,
    fontWeight: '700',
  },
  heroRoot: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '900',
    marginTop: 4,
  },
  heroMeaningVi: {
    color: '#38bdf8',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 2,
  },
  heroMeaningEn: {
    color: '#94a3b8',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 2,
  },
  storyBox: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    padding: 12,
    borderRadius: 14,
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.2)',
  },
  storyText: {
    flex: 1,
    color: '#cbd5e1',
    fontSize: 12,
    lineHeight: 18,
  },
  treeSection: {
    backgroundColor: '#0c0d28',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  treeSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  treeSectionTitle: {
    color: '#b892ff',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
  treeContainer: {
    alignItems: 'center',
  },
  rootTreeNode: {
    backgroundColor: '#4255ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  rootTreeName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
  },
  rootTreeMeaning: {
    color: '#cbd5e1',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  treeTrunk: {
    width: 2,
    height: 20,
    backgroundColor: '#4255ff',
  },
  treeLeavesContainer: {
    width: '100%',
    gap: 10,
  },
  treeLeafCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  treeLeafHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  treeLeafTerm: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
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
  treeLeafFormula: {
    color: '#94a3b8',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 4,
  },
  treeLeafDef: {
    color: '#cbd5e1',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  familyBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
  },
  familyBadgeText: {
    color: '#b892ff',
    fontSize: 10,
    fontWeight: '700',
  },
  wordsSection: {
    gap: 10,
  },
  sectionTitle: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  wordCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0c0d28',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  wordInfo: {
    flex: 1,
    paddingRight: 10,
  },
  wordTermRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  wordTerm: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
  wordPhonetic: {
    color: '#94a3b8',
    fontSize: 11,
    fontFamily: 'monospace',
    marginTop: 2,
  },
  wordDefinition: {
    color: '#cbd5e1',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 4,
  },
});
