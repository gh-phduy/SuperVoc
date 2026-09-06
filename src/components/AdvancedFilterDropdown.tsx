import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Check,
  Sparkles,
  ArrowUpDown,
  Filter,
} from 'lucide-react-native';

export type SortOption = 'az' | 'za' | 'cefr_asc' | 'cefr_desc';
export type PosFilterOption = 'all' | 'n.' | 'v.' | 'adj.' | 'adv.';
export type CefrFilterOption = 'all' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type OriginFilterOption = 'all' | 'Latin' | 'Greek' | 'standalone';

export interface FilterState {
  sort: SortOption;
  pos: PosFilterOption;
  cefr: CefrFilterOption;
  origin: OriginFilterOption;
}

interface AdvancedFilterDropdownProps {
  filters: FilterState;
  onChangeFilters: (newFilters: FilterState) => void;
  totalResultsCount: number;
}

export const AdvancedFilterDropdown: React.FC<AdvancedFilterDropdownProps> = ({
  filters,
  onChangeFilters,
  totalResultsCount,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Calculate how many filters are currently active (deviating from default)
  const activeFiltersCount =
    (filters.sort !== 'az' ? 1 : 0) +
    (filters.pos !== 'all' ? 1 : 0) +
    (filters.cefr !== 'all' ? 1 : 0) +
    (filters.origin !== 'all' ? 1 : 0);

  const handleReset = () => {
    onChangeFilters({
      sort: 'az',
      pos: 'all',
      cefr: 'all',
      origin: 'all',
    });
  };

  const updateField = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    onChangeFilters({
      ...filters,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header Bar: Tap to expand / collapse */}
      <TouchableOpacity
        style={[styles.headerBar, isOpen && styles.headerBarOpen]}
        activeOpacity={0.8}
        onPress={toggleDropdown}
      >
        <View style={styles.headerLeft}>
          <View style={[styles.filterIconCircle, activeFiltersCount > 0 && styles.filterIconCircleActive]}>
            <SlidersHorizontal size={14} color={activeFiltersCount > 0 ? '#ffffff' : '#38bdf8'} />
          </View>
          <Text style={styles.headerTitle}>Bộ Lọc Nâng Cao</Text>

          {activeFiltersCount > 0 ? (
            <View style={styles.activeBadge}>
              <Text style={styles.activeBadgeText}>{activeFiltersCount} Đang lọc</Text>
            </View>
          ) : (
            <View style={styles.resultsBadge}>
              <Text style={styles.resultsBadgeText}>{totalResultsCount} từ</Text>
            </View>
          )}
        </View>

        <View style={styles.headerRight}>
          {activeFiltersCount > 0 && (
            <TouchableOpacity
              style={styles.quickResetBtn}
              onPress={(e) => {
                e.stopPropagation();
                handleReset();
              }}
            >
              <RotateCcw size={12} color="#f43f5e" />
              <Text style={styles.quickResetText}>Đặt lại</Text>
            </TouchableOpacity>
          )}

          {isOpen ? (
            <ChevronUp size={18} color="#b892ff" />
          ) : (
            <ChevronDown size={18} color="#94a3b8" />
          )}
        </View>
      </TouchableOpacity>

      {/* Expandable Dropdown Body */}
      {isOpen && (
        <View style={styles.dropdownBody}>
          {/* Section 1: Sắp xếp (Sort) */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <ArrowUpDown size={13} color="#38bdf8" />
              <Text style={styles.sectionTitle}>SẮP XẾP THEO</Text>
            </View>
            <View style={styles.optionsRow}>
              {[
                { id: 'az', label: 'Tên: A → Z' },
                { id: 'za', label: 'Tên: Z → A' },
                { id: 'cefr_asc', label: 'CEFR: A1 → C2' },
                { id: 'cefr_desc', label: 'CEFR: C2 → A1' },
              ].map((opt) => (
                <TouchableOpacity
                  key={opt.id}
                  style={[
                    styles.pillButton,
                    filters.sort === opt.id && styles.pillButtonActive,
                  ]}
                  onPress={() => updateField('sort', opt.id as SortOption)}
                >
                  <Text
                    style={[
                      styles.pillText,
                      filters.sort === opt.id && styles.pillTextActive,
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Section 2: Từ loại (Part of Speech) */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Filter size={13} color="#b892ff" />
              <Text style={styles.sectionTitle}>TỪ LOẠI (PART OF SPEECH)</Text>
            </View>
            <View style={styles.optionsRow}>
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'n.', label: 'Danh từ (n.)' },
                { id: 'v.', label: 'Động từ (v.)' },
                { id: 'adj.', label: 'Tính từ (adj.)' },
                { id: 'adv.', label: 'Trạng từ (adv.)' },
              ].map((opt) => (
                <TouchableOpacity
                  key={opt.id}
                  style={[
                    styles.pillButton,
                    filters.pos === opt.id && styles.pillButtonActivePos,
                  ]}
                  onPress={() => updateField('pos', opt.id as PosFilterOption)}
                >
                  <Text
                    style={[
                      styles.pillText,
                      filters.pos === opt.id && styles.pillTextActive,
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Section 3: Cấp độ CEFR */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Sparkles size={13} color="#34d399" />
              <Text style={styles.sectionTitle}>KHUNG TRÌNH ĐỘ CEFR</Text>
            </View>
            <View style={styles.optionsRow}>
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'A1', label: 'A1 Sơ cấp' },
                { id: 'A2', label: 'A2 Cơ bản' },
                { id: 'B1', label: 'B1 Trung cấp' },
                { id: 'B2', label: 'B2 Khá' },
                { id: 'C1', label: 'C1 Nâng cao' },
                { id: 'C2', label: 'C2 Thành thạo' },
              ].map((opt) => (
                <TouchableOpacity
                  key={opt.id}
                  style={[
                    styles.pillButton,
                    filters.cefr === opt.id && styles.pillButtonActiveCefr,
                  ]}
                  onPress={() => updateField('cefr', opt.id as CefrFilterOption)}
                >
                  <Text
                    style={[
                      styles.pillText,
                      filters.cefr === opt.id && styles.pillTextActive,
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Section 4: Nguồn gốc từ nguyên (Origin) */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>NGUỒN GỐC TỪ NGUYÊN</Text>
            </View>
            <View style={styles.optionsRow}>
              {[
                { id: 'all', label: 'Tất cả nguồn' },
                { id: 'Latin', label: 'Gốc Latinh' },
                { id: 'Greek', label: 'Gốc Hy Lạp' },
                { id: 'standalone', label: 'Từ điển tích / Độc lập' },
              ].map((opt) => (
                <TouchableOpacity
                  key={opt.id}
                  style={[
                    styles.pillButton,
                    filters.origin === opt.id && styles.pillButtonActiveOrigin,
                  ]}
                  onPress={() => updateField('origin', opt.id as OriginFilterOption)}
                >
                  <Text
                    style={[
                      styles.pillText,
                      filters.origin === opt.id && styles.pillTextActive,
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Footer Actions */}
          <View style={styles.footerRow}>
            <TouchableOpacity style={styles.resetFullBtn} onPress={handleReset}>
              <RotateCcw size={14} color="#f43f5e" />
              <Text style={styles.resetFullText}>Xóa tất cả bộ lọc</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyBtn} onPress={toggleDropdown}>
              <Check size={14} color="#ffffff" />
              <Text style={styles.applyBtnText}>Thu gọn bộ lọc</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0d28',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.25)',
    marginVertical: 4,
    overflow: 'hidden',
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
  },
  headerBarOpen: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  filterIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIconCircleActive: {
    backgroundColor: '#4255ff',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },
  activeBadge: {
    backgroundColor: 'rgba(184, 146, 255, 0.25)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b892ff',
  },
  activeBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '900',
  },
  resultsBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  resultsBadgeText: {
    color: '#94a3b8',
    fontSize: 10,
    fontWeight: '700',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quickResetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(244, 63, 94, 0.12)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  quickResetText: {
    color: '#f43f5e',
    fontSize: 10,
    fontWeight: '700',
  },
  dropdownBody: {
    padding: 12,
    gap: 12,
    backgroundColor: 'rgba(7, 6, 29, 0.95)',
  },
  section: {
    gap: 6,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sectionTitle: {
    color: '#94a3b8',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  pillButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  pillButtonActive: {
    backgroundColor: '#4255ff',
    borderColor: '#9fa6ff',
  },
  pillButtonActivePos: {
    backgroundColor: 'rgba(96, 165, 250, 0.25)',
    borderColor: '#60a5fa',
  },
  pillButtonActiveCefr: {
    backgroundColor: 'rgba(52, 211, 153, 0.25)',
    borderColor: '#34d399',
  },
  pillButtonActiveOrigin: {
    backgroundColor: 'rgba(184, 146, 255, 0.25)',
    borderColor: '#b892ff',
  },
  pillText: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
  },
  pillTextActive: {
    color: '#ffffff',
    fontWeight: '900',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    marginTop: 4,
  },
  resetFullBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  resetFullText: {
    color: '#f43f5e',
    fontSize: 11,
    fontWeight: '700',
  },
  applyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#4255ff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  applyBtnText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '900',
  },
});
