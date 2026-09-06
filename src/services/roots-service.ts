import { supabase } from '../config/supabase';
import {
  SUPERVOC_ROOTS_DATA,
  SupervocRoot,
  SupervocWord,
  getOmniWordProfile,
} from '../data/supervoc-roots-dataset';

let inMemoryCachedRoots: SupervocRoot[] | null = null;
let lastSyncTime: number | null = null;

export function getLastSyncTime(): number | null {
  return lastSyncTime;
}

export function getCachedRootsSync(): SupervocRoot[] {
  return inMemoryCachedRoots || SUPERVOC_ROOTS_DATA;
}

export async function fetchAllRoots(forceRefresh = false): Promise<SupervocRoot[]> {
  try {
    // 1. Query Supabase for roots (Gốc từ)
    const { data: rootsData, error: rootsErr } = await supabase
      .from('supervoc_roots')
      .select('*')
      .order('order_index', { ascending: true });

    if (rootsErr) {
      console.warn('Supabase supervoc_roots error:', rootsErr.message);
      return inMemoryCachedRoots || SUPERVOC_ROOTS_DATA;
    }

    if (rootsData && rootsData.length > 0) {
      // 2. Query all words with word families (Kho từ vựng & Gia đình từ)
      const { data: wordsData, error: wordsErr } = await supabase
        .from('supervoc_words')
        .select('*, supervoc_word_families(*)');

      if (wordsErr) {
        console.warn('Supabase supervoc_words error:', wordsErr.message);
      }

      const safeWordsList = wordsData || [];

      // Map into unified SupervocRoot[] model
      const roots: SupervocRoot[] = rootsData.map((r: any) => {
        const rootWords = safeWordsList
          .filter((w: any) => w.root_id === r.id || (w.roots && Array.isArray(w.roots) && w.roots.some((item: any) => item.rootId === r.id)))
          .map((w: any) => {
            const fam = Array.isArray(w.supervoc_word_families)
              ? w.supervoc_word_families[0] || {}
              : w.supervoc_word_families || {};

            const anatomyRootParts = w.anatomy_root_parts && Array.isArray(w.anatomy_root_parts) && w.anatomy_root_parts.length > 0
              ? w.anatomy_root_parts
              : [
                  {
                    text: w.anatomy_root || r.root_name,
                    rootId: r.id,
                    rootName: r.root_name,
                    meaningVi: w.anatomy_root_vi || r.meaning_vi,
                  },
                ];

            return {
              id: w.id,
              term: w.term,
              partOfSpeech: w.part_of_speech || 'n.',
              phoneticUs: w.phonetic_us || '',
              phoneticUk: w.phonetic_uk || undefined,
              definitionVi: w.definition_vi,
              detailedMeaningVi: w.detailed_meaning_vi || w.detailedMeaningVi || undefined,
              definitionEn: w.definition_en || undefined,
              cefrLevel: w.cefr_level || 'B1',
              roots: w.roots && Array.isArray(w.roots) && w.roots.length > 0
                ? w.roots
                : [{ rootId: r.id, rootName: r.root_name, meaningVi: r.meaning_vi }],
              anatomy: {
                prefix: w.anatomy_prefix || undefined,
                prefixVi: w.anatomy_prefix_vi || undefined,
                rootParts: anatomyRootParts,
                suffix: w.anatomy_suffix || undefined,
                suffixVi: w.anatomy_suffix_vi || undefined,
                formula: w.anatomy_formula || '',
                explanation: w.anatomy_explanation || '',
              },
              wordFamily: {
                nouns: fam.noun_forms || [],
                verbs: fam.verb_forms || [],
                adjectives: fam.adj_forms || [],
                adverbs: fam.adv_forms || [],
              },
              collocations: w.collocations || [],
              examples: w.examples || [],
              synonyms: w.synonyms || [],
              antonyms: w.antonyms || [],
            } as SupervocWord;
          });

        return {
          id: r.id,
          rootName: r.root_name,
          variants: r.variants || [],
          meaningEn: r.meaning_en || '',
          meaningVi: r.meaning_vi || '',
          originLanguage: r.origin_language || 'Latin',
          originWord: r.origin_word || undefined,
          etymologyStory: r.etymology_story || '',
          orderIndex: r.order_index || 0,
          words: rootWords,
        };
      });

      if (roots.length > 0) {
        inMemoryCachedRoots = roots;
        lastSyncTime = Date.now();
        return roots;
      }
    }
  } catch (err) {
    console.warn('Lỗi kết nối Supabase, chuyển sang chế độ dữ liệu cục bộ:', err);
  }

  // Fallback to local high-performance bundled dataset (0ms latency)
  return inMemoryCachedRoots || SUPERVOC_ROOTS_DATA;
}

export function findWordInRoots(roots: SupervocRoot[], term: string): SupervocWord | null {
  return getOmniWordProfile(term, roots);
}

