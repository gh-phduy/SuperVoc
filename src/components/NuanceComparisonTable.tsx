import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Scale, Volume2, ArrowRight, Lightbulb, Sparkles, Compass } from 'lucide-react-native';
import { SupervocNuanceTable } from '../data/supervoc-roots-dataset';
import { speakWord } from '../services/speech';

interface NuanceComparisonTableProps {
  nuanceTable?: SupervocNuanceTable;
  currentTerm: string;
  onSelectWord?: (term: string) => void;
}

export const NuanceComparisonTable: React.FC<NuanceComparisonTableProps> = React.memo(({
  nuanceTable,
  currentTerm,
  onSelectWord,
}) => {
  if (!nuanceTable || !nuanceTable.items || nuanceTable.items.length === 0) {
    return null;
  }

  const handlePlaySound = (term: string) => {
    speakWord(term, 'us');
  };

  const getIntensityBadgeColor = (intensity?: string) => {
    switch (intensity) {
      case 'Cực độ':
      case 'Cực mạnh':
        return { bg: 'rgba(244, 63, 94, 0.18)', border: '#f43f5e', text: '#fda4af' };
      case 'Vừa':
        return { bg: 'rgba(245, 158, 11, 0.18)', border: '#f59e0b', text: '#fde68a' };
      case 'Nhẹ':
      default:
        return { bg: 'rgba(16, 185, 129, 0.18)', border: '#10b981', text: '#a7f3d0' };
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleRow}>
          <View style={styles.iconCircle}>
            <Scale size={16} color="#f59e0b" />
          </View>
          <View style={styles.headerTextGroup}>
            <Text style={styles.headerTitle}>BẢNG SO SÁNH SẮC THÁI</Text>
            <Text style={styles.headerSubtitle}>NUANCE COMPARISON MATRIX</Text>
          </View>
        </View>
      </View>

      {/* Topic Banner */}
      <View style={styles.topicBanner}>
        <Compass size={14} color="#b892ff" />
        <Text style={styles.topicText}>{nuanceTable.topicVi}</Text>
      </View>

      {/* Quick Summary Note */}
      {nuanceTable.summaryVi ? (
        <View style={styles.summaryBox}>
          <Lightbulb size={14} color="#f59e0b" />
          <Text style={styles.summaryText}>{nuanceTable.summaryVi}</Text>
        </View>
      ) : null}

      {/* Nuance Items List */}
      <View style={styles.itemsList}>
        {nuanceTable.items.map((item, index) => {
          const isCurrent = item.term.toLowerCase() === currentTerm.toLowerCase();
          const intensityColor = getIntensityBadgeColor(item.intensity);

          return (
            <TouchableOpacity
              key={`${item.term}-${index}`}
              style={[
                styles.itemCard,
                isCurrent && styles.itemCardCurrent,
              ]}
              activeOpacity={isCurrent ? 1 : 0.75}
              onPress={() => {
                if (!isCurrent && onSelectWord) {
                  onSelectWord(item.term);
                }
              }}
            >
              {/* Card Top Row: Term, Pronounce, POS, and Status */}
              <View style={styles.cardHeaderRow}>
                <View style={styles.termInfoGroup}>
                  <Text style={[styles.termText, isCurrent && styles.termTextCurrent]}>
                    {item.term}
                  </Text>

                  {item.partOfSpeech ? (
                    <View style={styles.posBadge}>
                      <Text style={styles.posText}>{item.partOfSpeech}</Text>
                    </View>
                  ) : null}

                  {item.phonetic ? (
                    <Text style={styles.phoneticText}>{item.phonetic}</Text>
                  ) : null}

                  <TouchableOpacity
                    style={styles.speakerButton}
                    onPress={() => handlePlaySound(item.term)}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Volume2 size={13} color={isCurrent ? '#f59e0b' : '#38bdf8'} />
                  </TouchableOpacity>
                </View>

                {/* Right Indicator: Active badge or Arrow to jump */}
                {isCurrent ? (
                  <View style={styles.currentBadge}>
                    <Sparkles size={10} color="#000000" />
                    <Text style={styles.currentBadgeText}>ĐANG XEM</Text>
                  </View>
                ) : onSelectWord ? (
                  <View style={styles.jumpLinkGroup}>
                    <Text style={styles.jumpLinkText}>Xem từ</Text>
                    <ArrowRight size={12} color="#b892ff" />
                  </View>
                ) : null}
              </View>

              {/* Core Nuance / Visual Semantic Imagery */}
              <View style={styles.nuanceRow}>
                <Text style={styles.nuanceLabel}>SẮC THÁI CỐT LÕI:</Text>
                <Text style={styles.nuanceValue}>{item.coreNuanceVi}</Text>
              </View>

              {/* Context and Intensity Badges Row */}
              <View style={styles.metaRow}>
                <View style={styles.contextBadge}>
                  <Text style={styles.contextLabel}>Bối cảnh:</Text>
                  <Text style={styles.contextValue}>{item.contextVi}</Text>
                </View>

                {item.intensity ? (
                  <View
                    style={[
                      styles.intensityBadge,
                      {
                        backgroundColor: intensityColor.bg,
                        borderColor: intensityColor.border,
                      },
                    ]}
                  >
                    <Text style={[styles.intensityText, { color: intensityColor.text }]}>
                      {item.intensity}
                    </Text>
                  </View>
                ) : null}
              </View>

              {/* Distinguishing Example */}
              {item.exampleEn ? (
                <View style={styles.exampleBox}>
                  <Text style={styles.exampleEn}>"{item.exampleEn}"</Text>
                  {item.exampleVi ? (
                    <Text style={styles.exampleVi}>→ {item.exampleVi}</Text>
                  ) : null}
                </View>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0d28',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.25)',
    marginVertical: 6,
  },
  header: {
    marginBottom: 10,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  headerTextGroup: {
    flex: 1,
  },
  headerTitle: {
    color: '#f59e0b',
    fontSize: 12.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: '#94a3b8',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginTop: 1,
  },
  topicBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(184, 146, 255, 0.1)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.25)',
    marginBottom: 8,
  },
  topicText: {
    color: '#e2e8f0',
    fontSize: 12,
    fontWeight: '800',
    flex: 1,
  },
  summaryBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    backgroundColor: 'rgba(245, 158, 11, 0.08)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.2)',
    marginBottom: 12,
  },
  summaryText: {
    color: '#fef3c7',
    fontSize: 11.5,
    lineHeight: 16,
    fontWeight: '500',
    flex: 1,
  },
  itemsList: {
    gap: 10,
  },
  itemCard: {
    backgroundColor: '#131538',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  itemCardCurrent: {
    backgroundColor: 'rgba(245, 158, 11, 0.09)',
    borderColor: '#f59e0b',
    borderWidth: 1.5,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  termInfoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'wrap',
  },
  termText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
  termTextCurrent: {
    color: '#fef08a',
  },
  posBadge: {
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  posText: {
    color: '#38bdf8',
    fontSize: 10,
    fontWeight: '800',
  },
  phoneticText: {
    color: '#cbd5e1',
    fontSize: 11,
    fontFamily: 'monospace',
  },
  speakerButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: '#f59e0b',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  currentBadgeText: {
    color: '#000000',
    fontSize: 9,
    fontWeight: '900',
  },
  jumpLinkGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: 'rgba(184, 146, 255, 0.12)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  jumpLinkText: {
    color: '#b892ff',
    fontSize: 10,
    fontWeight: '700',
  },
  nuanceRow: {
    marginBottom: 6,
  },
  nuanceLabel: {
    color: '#f59e0b',
    fontSize: 9.5,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  nuanceValue: {
    color: '#f1f5f9',
    fontSize: 12.5,
    lineHeight: 18,
    fontWeight: '600',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 6,
  },
  contextBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderWidth: 0.5,
    borderColor: 'rgba(56, 189, 248, 0.2)',
    flex: 1,
  },
  contextLabel: {
    color: '#38bdf8',
    fontSize: 10,
    fontWeight: '800',
  },
  contextValue: {
    color: '#bae6fd',
    fontSize: 11,
    fontWeight: '500',
    flex: 1,
  },
  intensityBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2.5,
    borderRadius: 6,
    borderWidth: 0.5,
  },
  intensityText: {
    fontSize: 9.5,
    fontWeight: '800',
  },
  exampleBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 8,
    padding: 7,
    marginTop: 2,
  },
  exampleEn: {
    color: '#cbd5e1',
    fontSize: 11,
    fontStyle: 'italic',
    lineHeight: 16,
  },
  exampleVi: {
    color: '#94a3b8',
    fontSize: 10.5,
    marginTop: 2,
  },
});
