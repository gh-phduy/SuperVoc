import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Line, Circle, Rect, G } from 'react-native-svg';
import { TreeNode } from '../data/roots-database';
import { GitBranch, Layers, Sparkles, ChevronRight } from 'lucide-react-native';

interface GenealogyTreeProps {
  tree: TreeNode;
  onSelectNode?: (node: TreeNode) => void;
}

export const GenealogyTree: React.FC<GenealogyTreeProps> = ({ tree, onSelectNode }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <GitBranch size={18} color="#b892ff" />
        <Text style={styles.headerTitle}>SƠ ĐỒ PHẢ HỆ TỪ GỐC (GENEALOGY TREE)</Text>
      </View>
      <Text style={styles.headerSubtitle}>
        Chạm vào bất kỳ nhánh nào để khám phá họ từ vựng phái sinh:
      </Text>

      {/* Interactive Visual Tree Hierarchy */}
      <View style={styles.treeWrapper}>
        {/* Root Node */}
        <TouchableOpacity
          style={styles.rootNode}
          activeOpacity={0.8}
          onPress={() => onSelectNode && onSelectNode(tree)}
        >
          <View style={styles.rootBadge}>
            <Sparkles size={12} color="#0d0c28" />
            <Text style={styles.rootBadgeText}>ROOT (GỐC TỪ)</Text>
          </View>
          <Text style={styles.rootLabel}>{tree.label}</Text>
          {tree.meaningVi && <Text style={styles.rootMeaning}>{tree.meaningVi}</Text>}
        </TouchableOpacity>

        {/* Vertical Stem Trunk */}
        <View style={styles.verticalTrunk} />

        {/* Stem Branches */}
        {tree.children && tree.children.length > 0 && (
          <View style={styles.stemsContainer}>
            {tree.children.map((stem, index) => (
              <View key={stem.id || index} style={styles.stemBranch}>
                {/* Branch Line */}
                <View style={styles.branchLine} />

                {/* Stem Node */}
                <TouchableOpacity
                  style={styles.stemNode}
                  activeOpacity={0.75}
                  onPress={() => onSelectNode && onSelectNode(stem)}
                >
                  <View style={styles.stemHeader}>
                    <Layers size={13} color="#9fa6ff" />
                    <Text style={styles.stemLabel}>{stem.label}</Text>
                  </View>
                  {stem.meaningVi && (
                    <Text style={styles.stemMeaning}>{stem.meaningVi}</Text>
                  )}
                </TouchableOpacity>

                {/* Derived Words under this stem */}
                {stem.children && stem.children.length > 0 && (
                  <View style={styles.wordsContainer}>
                    {stem.children.map((wordNode, wIndex) => (
                      <TouchableOpacity
                        key={wordNode.id || wIndex}
                        style={styles.wordLeaf}
                        activeOpacity={0.7}
                        onPress={() => onSelectNode && onSelectNode(wordNode)}
                      >
                        <View style={styles.wordLeafDot} />
                        <View style={styles.wordLeafContent}>
                          <Text style={styles.wordLeafLabel}>{wordNode.label}</Text>
                          {wordNode.meaningVi && (
                            <Text style={styles.wordLeafMeaning}>{wordNode.meaningVi}</Text>
                          )}
                        </View>
                        <ChevronRight size={14} color="#64748b" />
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0d28',
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.35)',
    marginVertical: 12,
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  headerTitle: {
    color: '#b892ff',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  headerSubtitle: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 16,
    fontWeight: '500',
  },
  treeWrapper: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  rootNode: {
    backgroundColor: '#4255ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#9fa6ff',
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
    minWidth: 200,
  },
  rootBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#b892ff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginBottom: 4,
  },
  rootBadgeText: {
    color: '#07061d',
    fontSize: 10,
    fontWeight: '900',
  },
  rootLabel: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  rootMeaning: {
    color: '#e0e7ff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  verticalTrunk: {
    width: 3,
    height: 24,
    backgroundColor: '#9fa6ff',
  },
  stemsContainer: {
    width: '100%',
    gap: 14,
  },
  stemBranch: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(159, 166, 255, 0.25)',
  },
  branchLine: {
    height: 2,
    backgroundColor: 'rgba(184, 146, 255, 0.4)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  stemNode: {
    backgroundColor: '#171544',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4255ff',
    marginBottom: 10,
  },
  stemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  stemLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  stemMeaning: {
    color: '#b892ff',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  wordsContainer: {
    paddingLeft: 12,
    gap: 6,
    borderLeftWidth: 2,
    borderLeftColor: 'rgba(184, 146, 255, 0.3)',
    marginLeft: 6,
  },
  wordLeaf: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(14, 13, 56, 0.9)',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  wordLeafDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#38bdf8',
    marginRight: 8,
  },
  wordLeafContent: {
    flex: 1,
  },
  wordLeafLabel: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  wordLeafMeaning: {
    color: '#cbd5e1',
    fontSize: 11,
    fontWeight: '500',
  },
});
