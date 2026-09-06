import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SupervocWordFamilyItem } from '../data/supervoc-roots-dataset';
import { Sparkles, ArrowRight, CheckCircle2, XCircle } from 'lucide-react-native';

interface SynonymsAntonymsCardProps {
  synonyms?: SupervocWordFamilyItem[];
  antonyms?: SupervocWordFamilyItem[];
  onSelectWord?: (term: string) => void;
}

export const SynonymsAntonymsCard: React.FC<SynonymsAntonymsCardProps> = React.memo(({
  synonyms = [],
  antonyms = [],
  onSelectWord,
}) => {
  const safeSynonyms = synonyms || [];
  const safeAntonyms = antonyms || [];

  if (safeSynonyms.length === 0 && safeAntonyms.length === 0) {
    return null;
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Sparkles size={16} color="#b892ff" />
        <Text style={styles.headerTitle}>TỪ ĐỒNG NGHĨA & TRÁI NGHĨA (SYNONYMS & ANTONYMS)</Text>
      </View>

      <View style={styles.content}>
        {/* Synonyms Section */}
        {safeSynonyms.length > 0 && (
          <View style={styles.group}>
            <View style={styles.groupHeader}>
              <CheckCircle2 size={14} color="#34d399" />
              <Text style={styles.groupTitleSyn}>TỪ ĐỒNG NGHĨA (SYNONYMS)</Text>
            </View>

            <View style={styles.chipsContainer}>
              {safeSynonyms.map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.synonymChip}
                  activeOpacity={0.75}
                  onPress={() => onSelectWord && onSelectWord(item.term)}
                >
                  <View style={styles.chipTextRow}>
                    <Text style={styles.synTerm}>{item.term}</Text>
                    {onSelectWord && <ArrowRight size={10} color="#34d399" />}
                  </View>
                  {item.phonetic ? (
                    <Text style={styles.chipPhonetic}>{item.phonetic}</Text>
                  ) : null}
                  {item.vi ? <Text style={styles.synMeaning}>{item.vi}</Text> : null}
                  {item.exampleEn ? (
                    <Text style={styles.chipExample} numberOfLines={2}>
                      • {item.exampleEn}
                    </Text>
                  ) : null}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Antonyms Section */}
        {safeAntonyms.length > 0 && (
          <View style={[styles.group, safeSynonyms.length > 0 && styles.groupTopBorder]}>
            <View style={styles.groupHeader}>
              <XCircle size={14} color="#f43f5e" />
              <Text style={styles.groupTitleAnt}>TỪ TRÁI NGHĨA (ANTONYMS)</Text>
            </View>

            <View style={styles.chipsContainer}>
              {safeAntonyms.map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.antonymChip}
                  activeOpacity={0.75}
                  onPress={() => onSelectWord && onSelectWord(item.term)}
                >
                  <View style={styles.chipTextRow}>
                    <Text style={styles.antTerm}>{item.term}</Text>
                    {onSelectWord && <ArrowRight size={10} color="#f43f5e" />}
                  </View>
                  {item.phonetic ? (
                    <Text style={styles.chipPhonetic}>{item.phonetic}</Text>
                  ) : null}
                  {item.vi ? <Text style={styles.antMeaning}>{item.vi}</Text> : null}
                  {item.exampleEn ? (
                    <Text style={styles.chipExample} numberOfLines={2}>
                      • {item.exampleEn}
                    </Text>
                  ) : null}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0c0d28',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.25)',
    marginVertical: 8,
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
    paddingBottom: 8,
    marginBottom: 12,
  },
  headerTitle: {
    color: '#b892ff',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
  content: {
    gap: 12,
  },
  group: {
    gap: 8,
  },
  groupTopBorder: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  groupTitleSyn: {
    color: '#34d399',
    fontSize: 10.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  groupTitleAnt: {
    color: '#f43f5e',
    fontSize: 10.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  synonymChip: {
    backgroundColor: 'rgba(52, 211, 153, 0.12)',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.3)',
    minWidth: 110,
  },
  antonymChip: {
    backgroundColor: 'rgba(244, 63, 94, 0.12)',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(244, 63, 94, 0.3)',
    minWidth: 110,
  },
  chipTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  synTerm: {
    color: '#6ee7b7',
    fontSize: 13,
    fontWeight: '900',
  },
  synMeaning: {
    color: '#cbd5e1',
    fontSize: 10,
    fontWeight: '500',
    marginTop: 2,
  },
  antTerm: {
    color: '#fda4af',
    fontSize: 13,
    fontWeight: '900',
  },
  antMeaning: {
    color: '#cbd5e1',
    fontSize: 10,
    fontWeight: '500',
    marginTop: 2,
  },
  chipPhonetic: {
    color: '#94a3b8',
    fontSize: 9.5,
    fontFamily: 'monospace',
    marginTop: 1,
  },
  chipExample: {
    color: '#94a3b8',
    fontSize: 9.5,
    fontStyle: 'italic',
    marginTop: 3,
    lineHeight: 13,
  },
});
