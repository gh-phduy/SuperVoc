import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { PREFIXES_DATABASE, PrefixItem } from '../data/prefixes-database';
import { SUFFIXES_DATABASE, SuffixItem } from '../data/suffixes-database';
import { ArrowLeft, Search, Layers, Sparkles, Tag, ChevronRight } from 'lucide-react-native';

interface AffixLibraryScreenProps {
  onBack: () => void;
  onSelectAffixExample?: (word: string) => void;
}

export const AffixLibraryScreen: React.FC<AffixLibraryScreenProps> = ({
  onBack,
  onSelectAffixExample,
}) => {
  const [activeTab, setActiveTab] = useState<'prefixes' | 'suffixes'>('prefixes');
  const [searchQuery, setSearchQuery] = useState('');

  const prefixesList = Object.values(PREFIXES_DATABASE);
  const suffixesList = Object.values(SUFFIXES_DATABASE);

  const filteredPrefixes = prefixesList.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      p.prefix.toLowerCase().includes(q) ||
      p.meaningVi.toLowerCase().includes(q) ||
      p.meaningEn.toLowerCase().includes(q) ||
      p.examples.some((e) => e.word.toLowerCase().includes(q) || e.vi.toLowerCase().includes(q))
    );
  });

  const filteredSuffixes = suffixesList.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      s.suffix.toLowerCase().includes(q) ||
      s.meaningVi.toLowerCase().includes(q) ||
      s.meaningEn.toLowerCase().includes(q) ||
      s.examples.some((e) => e.word.toLowerCase().includes(q) || e.vi.toLowerCase().includes(q))
    );
  });

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={20} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>PHÁP ĐIỂN TIỀN TỐ & HẬU TỐ</Text>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchBox}>
          <Search size={16} color="#94a3b8" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm tiền tố, hậu tố hoặc ví dụ..."
            placeholderTextColor="#64748b"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Tab Switcher */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'prefixes' && styles.tabButtonActive]}
            onPress={() => setActiveTab('prefixes')}
          >
            <Text style={[styles.tabText, activeTab === 'prefixes' && styles.tabTextActive]}>
              PREFIXES (TIỀN TỐ - {prefixesList.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'suffixes' && styles.tabButtonActive]}
            onPress={() => setActiveTab('suffixes')}
          >
            <Text style={[styles.tabText, activeTab === 'suffixes' && styles.tabTextActive]}>
              SUFFIXES (HẬU TỐ - {suffixesList.length})
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        {activeTab === 'prefixes' ? (
          filteredPrefixes.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={[styles.badge, styles.prefixBadge]}>
                  <Text style={styles.prefixText}>{item.prefix}</Text>
                </View>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
              </View>

              <Text style={styles.meaningVi}>{item.meaningVi}</Text>
              <Text style={styles.meaningEn}>"{item.meaningEn}"</Text>

              {/* Examples */}
              <View style={styles.examplesSection}>
                <Text style={styles.examplesLabel}>Ví dụ phổ biến:</Text>
                <View style={styles.examplesList}>
                  {item.examples.map((ex, idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={styles.exampleChip}
                      onPress={() => onSelectAffixExample && onSelectAffixExample(ex.word)}
                    >
                      <Text style={styles.exampleWord}>{ex.word}</Text>
                      <Text style={styles.exampleVi}>({ex.vi})</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          ))
        ) : (
          filteredSuffixes.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={[styles.badge, styles.suffixBadge]}>
                  <Text style={styles.suffixText}>{item.suffix}</Text>
                </View>
                <View style={styles.targetPosBadge}>
                  <Text style={styles.targetPosText}>Tạo {item.targetPos.toUpperCase()}</Text>
                </View>
              </View>

              <Text style={styles.meaningVi}>{item.meaningVi}</Text>
              <Text style={styles.meaningEn}>"{item.meaningEn}"</Text>

              {/* Examples */}
              <View style={styles.examplesSection}>
                <Text style={styles.examplesLabel}>Ví dụ phổ biến:</Text>
                <View style={styles.examplesList}>
                  {item.examples.map((ex, idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={styles.exampleChip}
                      onPress={() => onSelectAffixExample && onSelectAffixExample(ex.word)}
                    >
                      <Text style={styles.exampleWord}>{ex.word}</Text>
                      <Text style={styles.exampleVi}>({ex.vi})</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07061d',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'rgba(12, 13, 40, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  topBarTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  searchSection: {
    padding: 16,
    backgroundColor: '#0c0d28',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
    gap: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 44,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 13,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 14,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 10,
  },
  tabButtonActive: {
    backgroundColor: '#4255ff',
  },
  tabText: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '800',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 12,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#0c0d28',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  prefixBadge: {
    backgroundColor: 'rgba(244, 63, 94, 0.15)',
    borderWidth: 1,
    borderColor: '#f43f5e',
  },
  suffixBadge: {
    backgroundColor: 'rgba(168, 85, 247, 0.15)',
    borderWidth: 1,
    borderColor: '#a855f7',
  },
  prefixText: {
    color: '#fb7185',
    fontSize: 16,
    fontWeight: '900',
  },
  suffixText: {
    color: '#c084fc',
    fontSize: 16,
    fontWeight: '900',
  },
  categoryBadge: {
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  categoryText: {
    color: '#38bdf8',
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  targetPosBadge: {
    backgroundColor: 'rgba(52, 211, 153, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  targetPosText: {
    color: '#34d399',
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  meaningVi: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 2,
  },
  meaningEn: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 2,
  },
  examplesSection: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  examplesLabel: {
    color: '#b892ff',
    fontSize: 11,
    fontWeight: '800',
    marginBottom: 6,
  },
  examplesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  exampleChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  exampleWord: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  exampleVi: {
    color: '#94a3b8',
    fontSize: 11,
  },
});
