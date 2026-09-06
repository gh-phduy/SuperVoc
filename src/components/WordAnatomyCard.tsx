import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SupervocWordAnatomy, SupervocRootRef } from '../data/supervoc-roots-dataset';
import { Dna, Plus, BookOpen, GitBranch, ArrowRight } from 'lucide-react-native';

interface WordAnatomyCardProps {
  anatomy?: SupervocWordAnatomy;
  roots?: SupervocRootRef[];
  term: string;
  onSelectRoot?: (rootId: string) => void;
}

export const WordAnatomyCard: React.FC<WordAnatomyCardProps> = React.memo(({
  anatomy,
  roots = [],
  term,
  onSelectRoot,
}) => {
  if (!anatomy) {
    return null;
  }

  const rootParts = anatomy.rootParts || [];
  const isMultiRoot = rootParts.length > 1;

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Dna size={18} color="#38bdf8" />
        <Text style={styles.headerTitle}>GIẢI PHẪU HÌNH THÁI TỪ (WORD ANATOMY)</Text>
      </View>

      {/* Multi-root banner badge */}
      {isMultiRoot && (
        <View style={styles.multiRootBanner}>
          <GitBranch size={13} color="#38bdf8" />
          <Text style={styles.multiRootBannerText}>
            Từ ghép từ <Text style={{ fontWeight: '900', color: '#ffffff' }}>{rootParts.length} gốc từ độc lập</Text>
          </Text>
        </View>
      )}

      {/* Dynamic Anatomy Structure */}
      {isMultiRoot ? (
        /* Symmetrical Multi-Root Grid Row */
        <View style={styles.compoundContainer}>
          <View style={styles.compoundRow}>
            {rootParts.map((rootPart, idx) => (
              <React.Fragment key={rootPart.rootId || idx}>
                {idx > 0 && (
                  <View style={styles.plusSeparator}>
                    <Plus size={14} color="#38bdf8" />
                  </View>
                )}
                <TouchableOpacity
                  style={styles.compoundRootCard}
                  activeOpacity={0.75}
                  onPress={() => onSelectRoot && rootPart.rootId && onSelectRoot(rootPart.rootId)}
                >
                  <View style={styles.rootChipTop}>
                    <Text style={styles.compoundCategory}>GỐC {idx + 1}</Text>
                    <ArrowRight size={10} color="#38bdf8" />
                  </View>

                  <Text style={styles.compoundTerm}>{(rootPart.text || '').toUpperCase()}</Text>
                  {rootPart.rootName ? (
                    <Text style={styles.compoundRootName}>Họ: {rootPart.rootName}</Text>
                  ) : null}
                  {rootPart.meaningVi ? (
                    <Text style={styles.compoundMeaning}>{rootPart.meaningVi}</Text>
                  ) : null}
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>
        </View>
      ) : (
        /* Single Root Flow */
        <View style={styles.singleRootFlow}>
          {anatomy.prefix && (
            <>
              <View style={[styles.singleChip, styles.prefixChip]}>
                <Text style={styles.singleChipCat}>PREFIX</Text>
                <Text style={styles.singleChipText}>{anatomy.prefix}</Text>
                {anatomy.prefixVi && (
                  <Text style={styles.singleChipMeaning}>{anatomy.prefixVi}</Text>
                )}
              </View>
              <Plus size={14} color="#94a3b8" />
            </>
          )}

          {rootParts.map((rootPart, idx) => (
            <TouchableOpacity
              key={rootPart.rootId || idx}
              style={[styles.singleChip, styles.rootChip]}
              activeOpacity={0.75}
              onPress={() => onSelectRoot && rootPart.rootId && onSelectRoot(rootPart.rootId)}
            >
              <View style={styles.rootChipTop}>
                <Text style={styles.singleChipCat}>ROOT</Text>
                <ArrowRight size={10} color="#60a5fa" />
              </View>
              <Text style={styles.singleChipText}>{(rootPart.text || '').toUpperCase()}</Text>
              {rootPart.meaningVi ? (
                <Text style={styles.singleChipMeaning}>{rootPart.meaningVi}</Text>
              ) : null}
            </TouchableOpacity>
          ))}

          {anatomy.suffix && (
            <>
              <Plus size={14} color="#94a3b8" />
              <View style={[styles.singleChip, styles.suffixChip]}>
                <Text style={styles.singleChipCat}>SUFFIX</Text>
                <Text style={styles.singleChipText}>{anatomy.suffix}</Text>
                {anatomy.suffixVi && (
                  <Text style={styles.singleChipMeaning}>{anatomy.suffixVi}</Text>
                )}
              </View>
            </>
          )}
        </View>
      )}

      {/* Result Formula Box */}
      {anatomy.formula ? (
        <View style={styles.formulaBox}>
          <Text style={styles.formulaEquation}>{anatomy.formula}</Text>
        </View>
      ) : null}

      {/* Deep Morphological Explanation */}
      {anatomy.explanation ? (
        <View style={styles.explanationBox}>
          <View style={styles.explanationHeader}>
            <BookOpen size={14} color="#b892ff" />
            <Text style={styles.explanationTitle}>Bản chất từ nguyên & Sự kết hợp gốc:</Text>
          </View>
          <Text style={styles.explanationText}>{anatomy.explanation}</Text>
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0c0d28',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.35)',
    marginVertical: 10,
    shadowColor: '#38bdf8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  headerTitle: {
    color: '#38bdf8',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  multiRootBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(56, 189, 248, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.25)',
    marginBottom: 12,
  },
  multiRootBannerText: {
    color: '#38bdf8',
    fontSize: 11,
    fontWeight: '700',
  },
  compoundContainer: {
    marginVertical: 4,
  },
  compoundRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  plusSeparator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  compoundRootCard: {
    flex: 1,
    backgroundColor: 'rgba(56, 189, 248, 0.12)',
    borderRadius: 14,
    padding: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(56, 189, 248, 0.4)',
    alignItems: 'center',
  },
  rootChipTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  compoundCategory: {
    color: '#38bdf8',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  compoundTerm: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  compoundRootName: {
    color: '#93c5fd',
    fontSize: 10,
    fontWeight: '700',
    marginTop: 2,
    textAlign: 'center',
  },
  compoundMeaning: {
    color: '#cbd5e1',
    fontSize: 10,
    fontWeight: '500',
    marginTop: 3,
    textAlign: 'center',
    lineHeight: 13,
  },
  singleRootFlow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    flexWrap: 'wrap',
    marginVertical: 6,
  },
  singleChip: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    minWidth: 80,
  },
  prefixChip: {
    backgroundColor: 'rgba(244, 63, 94, 0.15)',
    borderColor: '#f43f5e',
  },
  rootChip: {
    backgroundColor: 'rgba(66, 85, 255, 0.25)',
    borderColor: '#60a5fa',
  },
  suffixChip: {
    backgroundColor: 'rgba(168, 85, 247, 0.15)',
    borderColor: '#a855f7',
  },
  singleChipCat: {
    color: '#94a3b8',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  singleChipText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900',
    marginTop: 1,
  },
  singleChipMeaning: {
    color: '#cbd5e1',
    fontSize: 9,
    fontWeight: '500',
    marginTop: 2,
    textAlign: 'center',
  },
  formulaBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 10,
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  formulaEquation: {
    color: '#f8fafc',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 17,
  },
  explanationBox: {
    backgroundColor: 'rgba(184, 146, 255, 0.08)',
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.2)',
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  explanationTitle: {
    color: '#b892ff',
    fontSize: 11,
    fontWeight: '800',
  },
  explanationText: {
    color: '#e2e8f0',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
  },
});
