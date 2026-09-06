import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SupervocRoot, SupervocWord } from '../data/supervoc-roots-dataset';
import {
  ChevronDown,
  ChevronRight,
  GitBranch,
  Sparkles,
  Layers,
  ArrowUpRight,
  Dna,
} from 'lucide-react-native';

interface RootDirectoryTreeProps {
  roots: SupervocRoot[];
  onSelectRoot: (root: SupervocRoot) => void;
  onSelectWord: (word: SupervocWord, root: SupervocRoot) => void;
  expandedRoots?: Record<string, boolean>;
  onToggleRoot?: (rootId: string) => void;
}

export const RootDirectoryTree: React.FC<RootDirectoryTreeProps> = ({
  roots = [],
  onSelectRoot,
  onSelectWord,
  expandedRoots: propExpandedRoots,
  onToggleRoot: propOnToggleRoot,
}) => {
  // State to track which root folders are expanded (used if not controlled from parent)
  const [internalExpandedRoots, setInternalExpandedRoots] = useState<Record<string, boolean>>({
    agri_agro: true, // open first root by default
  });

  const expandedRoots = propExpandedRoots !== undefined ? propExpandedRoots : internalExpandedRoots;

  const toggleRoot = (rootId: string) => {
    if (propOnToggleRoot) {
      propOnToggleRoot(rootId);
    } else {
      setInternalExpandedRoots((prev) => ({
        ...prev,
        [rootId]: !prev[rootId],
      }));
    }
  };

  const safeRoots = roots || [];

  return (
    <View style={styles.container}>
      {/* Roots List */}
      <View style={styles.rootsList}>
        {safeRoots.map((root) => {
          if (!root) return null;
          const isExpanded = !!expandedRoots[root.id];
          const wordsList = root.words || [];

          return (
            <View key={root.id} style={styles.rootCardWrapper}>
              {/* Root Row */}
              <View style={styles.rootRow}>
                {/* Chevron expand/collapse toggle */}
                <TouchableOpacity
                  style={styles.expandTrigger}
                  onPress={() => toggleRoot(root.id)}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  {isExpanded ? (
                    <ChevronDown size={18} color="#b892ff" />
                  ) : (
                    <ChevronRight size={18} color="#94a3b8" />
                  )}
                </TouchableOpacity>

                {/* Main Root Button: tap to open full root details & tree */}
                <TouchableOpacity
                  style={[styles.rootInfoButton, isExpanded && styles.rootInfoButtonActive]}
                  activeOpacity={0.75}
                  onPress={() => onSelectRoot(root)}
                >
                  <View style={styles.rootNameCol}>
                    <View style={styles.rootHeaderRow}>
                      <Text style={[styles.rootName, isExpanded && styles.rootNameActive]}>
                        {root.rootName}
                      </Text>
                      <View style={styles.originBadge}>
                        <Text style={styles.originText}>{root.originLanguage}</Text>
                      </View>
                    </View>

                    <Text style={styles.rootMeaningText} numberOfLines={1}>
                      {root.meaningVi}
                    </Text>
                  </View>

                  <View style={styles.wordCountBadge}>
                    <Dna size={12} color="#38bdf8" />
                    <Text style={styles.wordCountText}>{wordsList.length} từ</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Sub-Words when this Root is expanded */}
              {isExpanded && wordsList.length > 0 && (
                <View style={styles.subWordsList}>
                  {wordsList.map((word) => {
                    if (!word) return null;
                    return (
                      <TouchableOpacity
                        key={word.id}
                        style={styles.subWordItem}
                        activeOpacity={0.75}
                        onPress={() => onSelectWord(word, root)}
                      >
                        <View style={styles.subWordDot} />

                        <View style={styles.subWordContent}>
                          <View style={styles.subWordHeader}>
                            <Text style={styles.subWordTerm}>{word.term}</Text>
                            <View style={styles.posBadge}>
                              <Text style={styles.posText}>{word.partOfSpeech}</Text>
                            </View>
                            <View style={styles.cefrBadge}>
                              <Text style={styles.cefrText}>{word.cefrLevel}</Text>
                            </View>
                          </View>

                          <Text style={styles.subWordMeaning} numberOfLines={1}>
                            {word.definitionVi}
                          </Text>

                          {/* Morphological formula preview */}
                          {word.anatomy?.formula ? (
                            <Text style={styles.formulaPreview} numberOfLines={1}>
                              {word.anatomy.formula}
                            </Text>
                          ) : null}
                        </View>

                        <ArrowUpRight size={14} color="#94a3b8" />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  rootsList: {
    gap: 10,
  },
  rootCardWrapper: {
    backgroundColor: '#0c0d28',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    overflow: 'hidden',
  },
  rootRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  expandTrigger: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  rootInfoButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 14,
  },
  rootInfoButtonActive: {
    backgroundColor: 'rgba(184, 146, 255, 0.08)',
  },
  rootNameCol: {
    flex: 1,
    paddingRight: 8,
  },
  rootHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rootName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.3,
  },
  rootNameActive: {
    color: '#b892ff',
  },
  originBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 6,
  },
  originText: {
    color: '#94a3b8',
    fontSize: 9,
    fontWeight: '700',
  },
  rootMeaningText: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 2,
    fontWeight: '500',
  },
  wordCountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(56, 189, 248, 0.12)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  wordCountText: {
    color: '#38bdf8',
    fontSize: 11,
    fontWeight: '800',
  },
  subWordsList: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
    backgroundColor: 'rgba(7, 6, 29, 0.6)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 6,
  },
  subWordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
  },
  subWordDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#b892ff',
    marginRight: 10,
  },
  subWordContent: {
    flex: 1,
    paddingRight: 6,
  },
  subWordHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  subWordTerm: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  posBadge: {
    backgroundColor: 'rgba(96, 165, 250, 0.2)',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
  },
  posText: {
    color: '#93c5fd',
    fontSize: 8.5,
    fontWeight: '700',
  },
  cefrBadge: {
    backgroundColor: 'rgba(52, 211, 153, 0.2)',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
  },
  cefrText: {
    color: '#6ee7b7',
    fontSize: 8.5,
    fontWeight: '800',
  },
  subWordMeaning: {
    color: '#cbd5e1',
    fontSize: 11,
    marginTop: 2,
  },
  formulaPreview: {
    color: '#94a3b8',
    fontSize: 9.5,
    fontStyle: 'italic',
    marginTop: 2,
  },
});
