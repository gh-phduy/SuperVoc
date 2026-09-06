import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootItem } from '../data/roots-database';
import { Sparkles, ChevronRight, Dna } from 'lucide-react-native';

interface RootCardProps {
  root: RootItem;
  onPress: () => void;
}

export const RootCard: React.FC<RootCardProps> = React.memo(({ root, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.topRow}>
        <View style={styles.rootBadge}>
          <Sparkles size={13} color="#b892ff" />
          <Text style={styles.rootText}>{root.root}</Text>
        </View>

        <View style={styles.originBadge}>
          <Text style={styles.originText}>{root.origin}</Text>
        </View>
      </View>

      <Text style={styles.meaningVi}>{root.meaningVi}</Text>
      <Text style={styles.meaningEn}>{root.meaningEn}</Text>

      <View style={styles.footerRow}>
        <View style={styles.countContainer}>
          <Dna size={14} color="#38bdf8" />
          <Text style={styles.countText}>{root.derivedWordsCount} từ vựng phái sinh</Text>
        </View>

        <View style={styles.arrowButton}>
          <Text style={styles.exploreText}>Xem phả hệ</Text>
          <ChevronRight size={14} color="#b892ff" />
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0c0d28',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.25)',
    marginVertical: 6,
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  rootBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(184, 146, 255, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.3)',
  },
  rootText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  originBadge: {
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  originText: {
    color: '#38bdf8',
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
    fontWeight: '500',
    marginTop: 2,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  countText: {
    color: '#38bdf8',
    fontSize: 12,
    fontWeight: '700',
  },
  arrowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  exploreText: {
    color: '#b892ff',
    fontSize: 12,
    fontWeight: '800',
  },
});
