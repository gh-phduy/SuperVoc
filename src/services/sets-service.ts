import { supabase } from '../config/supabase';
import { OXFORD_5000_SETS, OxfordWordSet } from '../data/oxford-sets-dataset';
import { SupervocWord } from '../data/supervoc-roots-dataset';

let cachedSets: OxfordWordSet[] | null = null;
let lastSyncTime: number | null = null;

export function getLastSetsSyncTime(): number | null {
  return lastSyncTime;
}

export function getCachedSetsSync(): OxfordWordSet[] {
  return cachedSets || OXFORD_5000_SETS;
}

export async function fetchAllSets(forceRefresh = false): Promise<OxfordWordSet[]> {
  if (cachedSets && !forceRefresh) {
    return cachedSets;
  }

  try {
    // 1. Fetch sets from Supabase
    const { data: setsData, error: setsErr } = await supabase
      .from('supervoc_sets')
      .select('*')
      .order('order_index', { ascending: true });

    if (setsErr) {
      console.warn('Supabase supervoc_sets query info:', setsErr.message);
      return cachedSets || OXFORD_5000_SETS;
    }

    if (setsData && setsData.length > 0) {
      // 2. Fetch words linked to sets (via set_id)
      const { data: wordsData, error: wordsErr } = await supabase
        .from('supervoc_words')
        .select('*, supervoc_word_families(*)');

      if (wordsErr) {
        console.warn('Supabase supervoc_words in sets query info:', wordsErr.message);
      }

      const allWords = wordsData || [];

      // 3. Map into OxfordWordSet model
      const mappedSets: OxfordWordSet[] = setsData.map((s: any) => {
        const setWords: SupervocWord[] = allWords
          .filter((w: any) => w.set_id === s.id)
          .map((w: any) => {
            const fam = Array.isArray(w.supervoc_word_families)
              ? w.supervoc_word_families[0] || {}
              : w.supervoc_word_families || {};

            return {
              id: w.id,
              term: w.term,
              partOfSpeech: w.part_of_speech || 'n.',
              phoneticUs: w.phonetic_us || '',
              phoneticUk: w.phonetic_uk || undefined,
              definitionVi: w.definition_vi,
              detailedMeaningVi: w.detailed_meaning_vi || undefined,
              definitionEn: w.definition_en || undefined,
              cefrLevel: w.cefr_level || 'B2',
              roots: w.roots || [],
              anatomy: {
                prefix: w.anatomy_prefix || undefined,
                prefixVi: w.anatomy_prefix_vi || undefined,
                rootParts: w.anatomy_root_parts || [],
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
              nuanceTable: w.nuance_table || undefined,
            } as SupervocWord;
          });

        // Fallback to local words if remote set has no words yet
        const localSet = OXFORD_5000_SETS.find((ls) => ls.id === s.id);
        const finalWords = setWords.length > 0 ? setWords : (localSet?.words || []);

        return {
          id: s.id,
          title: s.title,
          level: s.level || 'B2',
          termsCount: s.terms_count || finalWords.length,
          description: s.description || '',
          category: s.category || 'Education & Science',
          author: s.author || 'SuperVoc / Oxford 5000',
          daysAgo: s.days_ago || undefined,
          words: finalWords,
        };
      });

      if (mappedSets.length > 0) {
        cachedSets = mappedSets;
        lastSyncTime = Date.now();
        return mappedSets;
      }
    }
  } catch (err) {
    console.warn('Lỗi kết nối Supabase Sets, sử dụng bộ từ cục bộ:', err);
  }

  return cachedSets || OXFORD_5000_SETS;
}
