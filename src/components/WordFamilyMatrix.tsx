import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Volume2, BookMarked, Zap, Palette, Rocket } from 'lucide-react-native';
import { speakWord } from '../services/speech';

interface WordFamilyMember {
  term: string;
  vi: string;
}

interface WordFamilyMatrixProps {
  currentTerm: string;
  nouns?: WordFamilyMember[];
  verbs?: WordFamilyMember[];
  adjectives?: WordFamilyMember[];
  adverbs?: WordFamilyMember[];
  onSelectTerm?: (term: string) => void;
}

export const WordFamilyMatrix: React.FC<WordFamilyMatrixProps> = React.memo(({
  currentTerm,
  nouns = [],
  verbs = [],
  adjectives = [],
  adverbs = [],
  onSelectTerm,
}) => {
  const handlePlaySound = (term: string) => {
    speakWord(term, 'us');
  };

  const renderSection = (
    title: string,
    subTitle: string,
    icon: React.ReactNode,
    items: WordFamilyMember[],
    themeColor: string,
    bgColor: string,
    borderColor: string
  ) => (
    <View style={[styles.sectionCard, { borderColor: borderColor }]}>
      <View style={styles.sectionHeader}>
        <View style={styles.headerLeft}>
          {icon}
          <Text style={[styles.sectionTitle, { color: themeColor }]}>
            {title}{' '}
            <Text style={styles.sectionSubtitle}>({subTitle})</Text>
          </Text>
        </View>
        <View style={[styles.countBadge, { backgroundColor: bgColor }]}>
          <Text style={[styles.countText, { color: themeColor }]}>{items.length}</Text>
        </View>
      </View>

      <View style={styles.itemsList}>
        {items.length > 0 ? (
          items.map((item, idx) => {
            const isCurrent = item.term.toLowerCase() === currentTerm.toLowerCase();
            return (
              <TouchableOpacity
                key={item.term || idx}
                style={[
                  styles.itemButton,
                  isCurrent && styles.itemButtonActive,
                ]}
                activeOpacity={0.7}
                onPress={() => onSelectTerm && onSelectTerm(item.term)}
              >
                <View style={styles.itemTextContainer}>
                  <Text
                    style={[
                      styles.itemTerm,
                      isCurrent && styles.itemTermActive,
                    ]}
                  >
                    {item.term}
                  </Text>
                  <Text style={styles.itemMeaning}>{item.vi}</Text>
                </View>

                <TouchableOpacity
                  style={styles.speakerButton}
                  onPress={() => handlePlaySound(item.term)}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Volume2 size={16} color={isCurrent ? '#ffffff' : themeColor} />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text style={styles.emptyText}>Chưa có dạng từ loại này</Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>HỌ TỪ VỰNG TOÀN DIỆN (WORD FAMILY)</Text>
      <Text style={styles.mainSubtitle}>
        Học 1 gốc từ để nắm trọn vẹn cả 4 dạng thức từ loại:
      </Text>

      <View style={styles.grid}>
        {/* Noun */}
        {renderSection(
          'Noun',
          'Danh từ',
          <BookMarked size={16} color="#60a5fa" />,
          nouns,
          '#60a5fa',
          'rgba(96, 165, 250, 0.15)',
          'rgba(96, 165, 250, 0.3)'
        )}

        {/* Verb */}
        {renderSection(
          'Verb',
          'Động từ',
          <Zap size={16} color="#34d399" />,
          verbs,
          '#34d399',
          'rgba(52, 211, 153, 0.15)',
          'rgba(52, 211, 153, 0.3)'
        )}

        {/* Adjective */}
        {renderSection(
          'Adjective',
          'Tính từ',
          <Palette size={16} color="#c084fc" />,
          adjectives,
          '#c084fc',
          'rgba(192, 132, 252, 0.15)',
          'rgba(192, 132, 252, 0.3)'
        )}

        {/* Adverb */}
        {renderSection(
          'Adverb',
          'Trạng từ',
          <Rocket size={16} color="#fbbf24" />,
          adverbs,
          '#fbbf24',
          'rgba(251, 191, 36, 0.15)',
          'rgba(251, 191, 36, 0.3)'
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  mainTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
  mainSubtitle: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 12,
  },
  grid: {
    gap: 12,
  },
  sectionCard: {
    backgroundColor: '#0c0d28',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
    paddingBottom: 8,
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  sectionSubtitle: {
    fontSize: 11,
    color: '#94a3b8',
    fontWeight: '600',
  },
  countBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  countText: {
    fontSize: 11,
    fontWeight: '800',
  },
  itemsList: {
    gap: 8,
  },
  itemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  itemButtonActive: {
    backgroundColor: '#4255ff',
    borderColor: '#9fa6ff',
  },
  itemTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  itemTerm: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
  itemTermActive: {
    color: '#ffffff',
  },
  itemMeaning: {
    color: '#cbd5e1',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
  speakerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#64748b',
    fontSize: 12,
    fontStyle: 'italic',
    paddingVertical: 6,
  },
});
