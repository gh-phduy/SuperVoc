import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { supabase } from '../config/supabase';
import { speakWord } from '../services/speech';
import {
  ArrowLeft,
  Search,
  Database,
  Volume2,
  Folder,
  Layers,
  Sparkles,
  RefreshCw,
} from 'lucide-react-native';

interface SupabaseCard {
  id: string;
  term: string;
  definition: string;
  phonetic?: string;
  phonetic_uk?: string;
  part_of_speech?: string;
  cefr_level?: string;
  sets?: {
    id: string;
    title: string;
  };
}

interface SupabaseExplorerScreenProps {
  onBack: () => void;
  onSelectCard?: (card: SupabaseCard) => void;
}

export const SupabaseExplorerScreen: React.FC<SupabaseExplorerScreenProps> = ({
  onBack,
  onSelectCard,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState<SupabaseCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [activeCefr, setActiveCefr] = useState<string>('all');

  const CEFR_LEVELS = ['all', 'A1', 'A2', 'B1', 'B2', 'C1'];

  const fetchCards = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('cards')
        .select('id, term, definition, phonetic, phonetic_uk, part_of_speech, cefr_level, sets(id, title)', {
          count: 'exact',
        })
        .order('term', { ascending: true })
        .limit(50);

      if (searchQuery.trim()) {
        query = query.ilike('term', `%${searchQuery.trim()}%`);
      }

      if (activeCefr !== 'all') {
        query = query.eq('cefr_level', activeCefr);
      }

      const { data, count, error } = await query;

      if (!error && data) {
        setCards(data as any);
        if (count !== null) setTotalCount(count);
      } else if (error) {
        console.warn('Supabase query error:', error.message);
      }
    } catch (err) {
      console.warn('Supabase fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      fetchCards();
    }, 300);

    return () => clearTimeout(delayTimer);
  }, [searchQuery, activeCefr]);

  const handlePlaySound = (term: string) => {
    speakWord(term, 'us');
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={20} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.topBarInfo}>
          <View style={styles.topBarTitleRow}>
            <Database size={16} color="#34d399" />
            <Text style={styles.topBarTitle}>SUPABASE CLOUD LEXICON</Text>
          </View>
          <Text style={styles.topBarSubtitle}>
            Kết nối trực tiếp CSDL Supabase hiện tại
          </Text>
        </View>
      </View>

      {/* Search & CEFR Filters */}
      <View style={styles.searchSection}>
        <View style={styles.searchBox}>
          <Search size={16} color="#94a3b8" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tra cứu từ vựng trực tiếp trong Supabase..."
            placeholderTextColor="#64748b"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* CEFR Level filter pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cefrList}
        >
          {CEFR_LEVELS.map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.cefrButton,
                activeCefr === level && styles.cefrButtonActive,
              ]}
              onPress={() => setActiveCefr(level)}
            >
              <Text
                style={[
                  styles.cefrButtonText,
                  activeCefr === level && styles.cefrButtonTextActive,
                ]}
              >
                {level === 'all' ? 'All Levels' : level}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.countRow}>
          <Text style={styles.countText}>
            {loading
              ? 'Đang tải từ vựng từ Cloud...'
              : `Tìm thấy ${cards.length} từ vựng${totalCount ? ` (trên tổng ${totalCount} từ)` : ''}`}
          </Text>
          <TouchableOpacity onPress={fetchCards} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <RefreshCw size={14} color="#34d399" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Cards List */}
      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#34d399" />
            <Text style={styles.loadingText}>Đang đồng bộ với Supabase Postgres...</Text>
          </View>
        ) : cards.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Không tìm thấy từ vựng</Text>
            <Text style={styles.emptySubtitle}>
              Thử tìm kiếm bằng từ khóa khác hoặc chuyển cấp độ CEFR.
            </Text>
          </View>
        ) : (
          cards.map((card) => (
            <View key={card.id} style={styles.cardItem}>
              <View style={styles.cardMain}>
                <View style={styles.cardHeaderRow}>
                  <Text style={styles.cardTerm}>{card.term}</Text>

                  {card.part_of_speech && (
                    <View style={styles.posBadge}>
                      <Text style={styles.posText}>{card.part_of_speech}</Text>
                    </View>
                  )}

                  {card.cefr_level && (
                    <View style={styles.cefrBadge}>
                      <Text style={styles.cefrText}>{card.cefr_level}</Text>
                    </View>
                  )}
                </View>

                {card.phonetic && (
                  <Text style={styles.cardPhonetic}>{card.phonetic}</Text>
                )}

                <Text style={styles.cardDefinition}>{card.definition}</Text>

                {card.sets?.title && (
                  <View style={styles.setRow}>
                    <Folder size={11} color="#94a3b8" />
                    <Text style={styles.setTitle} numberOfLines={1}>
                      {card.sets.title}
                    </Text>
                  </View>
                )}
              </View>

              <TouchableOpacity
                style={styles.speakerBtn}
                onPress={() => handlePlaySound(card.term)}
              >
                <Volume2 size={16} color="#34d399" />
              </TouchableOpacity>
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
  topBarInfo: {
    flex: 1,
  },
  topBarTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  topBarTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  topBarSubtitle: {
    color: '#34d399',
    fontSize: 11,
    fontWeight: '600',
  },
  searchSection: {
    padding: 16,
    backgroundColor: '#0c0d28',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
    gap: 10,
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
  cefrList: {
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 2,
  },
  cefrButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  cefrButtonActive: {
    backgroundColor: '#34d399',
    borderColor: '#34d399',
  },
  cefrButtonText: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  cefrButtonTextActive: {
    color: '#07061d',
  },
  countRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  countText: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  loadingContainer: {
    paddingVertical: 40,
    alignItems: 'center',
    gap: 10,
  },
  loadingText: {
    color: '#34d399',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
  emptySubtitle: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 4,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0c0d28',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  cardMain: {
    flex: 1,
    paddingRight: 10,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTerm: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
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
    fontWeight: '700',
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
  cardPhonetic: {
    color: '#94a3b8',
    fontSize: 11,
    fontFamily: 'monospace',
    marginTop: 2,
  },
  cardDefinition: {
    color: '#e2e8f0',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  setTitle: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '500',
  },
  speakerBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(52, 211, 153, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.3)',
  },
});
