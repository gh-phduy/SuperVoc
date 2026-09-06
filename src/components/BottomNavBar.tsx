import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { GitBranch, BookOpen, Layers } from 'lucide-react-native';

export type MainTabType = 'roots' | 'lexicon' | 'oxford';

interface BottomNavBarProps {
  activeTab: MainTabType;
  onChangeTab: (tab: MainTabType) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = React.memo(({
  activeTab,
  onChangeTab,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {/* Tab 1: Root */}
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'roots' && styles.tabItemActive]}
          activeOpacity={0.8}
          onPress={() => onChangeTab('roots')}
        >
          <GitBranch size={18} color={activeTab === 'roots' ? '#ffffff' : '#94a3b8'} />
          <Text
            numberOfLines={1}
            style={[styles.tabLabel, activeTab === 'roots' && styles.tabLabelActive]}
          >
            Root
          </Text>
        </TouchableOpacity>

        {/* Tab 2: Word */}
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'lexicon' && styles.tabItemActive]}
          activeOpacity={0.8}
          onPress={() => onChangeTab('lexicon')}
        >
          <BookOpen size={18} color={activeTab === 'lexicon' ? '#ffffff' : '#94a3b8'} />
          <Text
            numberOfLines={1}
            style={[styles.tabLabel, activeTab === 'lexicon' && styles.tabLabelActive]}
          >
            Word
          </Text>
        </TouchableOpacity>

        {/* Tab 3: Oxford Set */}
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'oxford' && styles.tabItemActive]}
          activeOpacity={0.8}
          onPress={() => onChangeTab('oxford')}
        >
          <Layers size={18} color={activeTab === 'oxford' ? '#ffffff' : '#94a3b8'} />
          <Text
            numberOfLines={1}
            style={[styles.tabLabel, activeTab === 'oxford' && styles.tabLabelActive]}
          >
            Oxford Set
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#07061d',
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(12, 13, 40, 0.95)',
    borderRadius: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.2)',
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    gap: 6,
  },
  tabItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 16,
    gap: 6,
  },
  tabItemActive: {
    backgroundColor: '#4255ff',
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  tabLabel: {
    color: '#94a3b8',
    fontSize: 13,
    fontWeight: '700',
  },
  tabLabelActive: {
    color: '#ffffff',
    fontWeight: '900',
  },
});
