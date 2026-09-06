import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dna, Sparkles } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ParentBrandHeaderProps {
  totalRootsCount?: number;
  totalWordsCount?: number;
}

export const ParentBrandHeader: React.FC<ParentBrandHeaderProps> = React.memo(({
  totalRootsCount = 12,
  totalWordsCount = 133,
}) => {
  const insets = useSafeAreaInsets();
  const safeTopPadding = Math.max(
    insets.top,
    Platform.OS === 'android' ? (StatusBar.currentHeight || 28) : 44
  ) + 8;

  return (
    <View style={[styles.headerContainer, { paddingTop: safeTopPadding }]}>
      <View style={styles.brandRow}>
        <LinearGradient
          colors={['#6366f1', '#8b5cf6', '#a855f7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.logoBadge}
        >
          <Dna size={18} color="#ffffff" />
        </LinearGradient>
        <View style={{ flex: 1 }}>
          <Text style={styles.brandTitle}>
            Super<Text style={{ color: '#c084fc' }}>Voc</Text>
          </Text>
          <Text style={styles.brandTagline}>KHO PHẢ HỆ TỪ GỐC & TỪ NGUYÊN TOÀN THƯ</Text>
        </View>
        <View style={styles.statsBadge}>
          <Sparkles size={11} color="#c084fc" />
          <Text style={styles.statsBadgeText}>
            {totalRootsCount} Gốc • {totalWordsCount} Từ
          </Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 14,
    paddingBottom: 8,
    backgroundColor: 'rgba(12, 13, 40, 0.98)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 0.4,
  },
  brandTagline: {
    color: '#94a3b8',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  statsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: 'rgba(192, 132, 252, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(192, 132, 252, 0.25)',
  },
  statsBadgeText: {
    color: '#c084fc',
    fontSize: 10,
    fontWeight: '800',
  },
});
