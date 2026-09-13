import { createClient } from '@supabase/supabase-js';
import { SUPERVOC_ROOTS_DATA } from '../src/data/supervoc-roots-dataset';
import { OMNI_EXPANDED_LEXICON } from '../src/data/omni-expanded-lexicon';
import {
  OXFORD_5000_SETS,
  OXFORD_B2_HEALTH_MIND_WORDS,
  OXFORD_B2_EDUCATION_ACADEMICS_WORDS,
} from '../src/data/oxford-sets-dataset';
import { SYNONYMS_ANTONYMS_LEXICON } from '../src/data/supervoc-synonyms-dataset';

const SUPABASE_URL = 'https://dgldxrvmsccbtezjbjzx.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnbGR4cnZtc2NjYnRlempianp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxODY1MDgsImV4cCI6MjEwMzc2MjUwOH0.DtK-YEIP-ku0aGqLKX8Mi4WVmGsKHRT8CV3SXTeYkxA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function main() {
  console.log('🌱 Bắt đầu đồng bộ SuperVoc Gốc từ, Từ vựng & Bộ từ Oxford 5000 lên Supabase...');

  // 0. Kiểm tra xem bảng supervoc_sets đã tồn tại trong schema cache chưa
  let hasSetTable = false;
  try {
    const { error: setCheckErr } = await supabase.from('supervoc_sets').select('id').limit(1);
    if (!setCheckErr) {
      hasSetTable = true;
      console.log('✅ Bảng supervoc_sets đã sẵn sàng trên Supabase.');
    } else {
      console.warn('\n⚠️ CẢNH BÁO: Bảng supervoc_sets chưa được tạo trên Supabase!');
      console.warn('👉 Bạn cần chạy file: supabase/migrations/20260913_supervoc_sets_schema.sql trong Supabase SQL Editor.');
      console.warn(`👉 Chi tiết lỗi: ${setCheckErr.message}\n`);
    }
  } catch (err) {
    console.warn('⚠️ Lỗi kiểm tra bảng supervoc_sets:', err);
  }

  const roots = SUPERVOC_ROOTS_DATA || [];
  console.log(`📊 Tổng số Gốc từ cần đồng bộ: ${roots.length}`);

  let totalWordsCount = 0;

  // 1. Upsert Roots & Words
  for (const root of roots) {
    if (!root) continue;
    console.log(`\n⏳ Đang xử lý Gốc từ: [${root.rootName}] (${root.id})`);

    const { error: rootErr } = await supabase.from('supervoc_roots').upsert({
      id: root.id,
      root_name: root.rootName,
      variants: root.variants || [],
      meaning_en: root.meaningEn || '',
      meaning_vi: root.meaningVi || '',
      origin_language: root.originLanguage || 'Latin',
      origin_word: root.originWord || null,
      etymology_story: root.etymologyStory || '',
      order_index: root.orderIndex || 0,
      updated_at: new Date().toISOString(),
    });

    if (rootErr) {
      console.warn(`  ❌ Lỗi khi lưu gốc ${root.id}:`, rootErr.message);
    } else {
      console.log(`  ✅ Đã lưu Gốc: ${root.rootName}`);
    }

    const words = root.words || [];
    for (const word of words) {
      if (!word) continue;
      totalWordsCount++;

      const anatomy = word.anatomy || {
        rootParts: [],
        formula: '',
        explanation: '',
      };

      const wordPayload = {
        id: word.id,
        root_id: root.id,
        term: word.term,
        part_of_speech: word.partOfSpeech || 'n.',
        phonetic_us: word.phoneticUs || '',
        phonetic_uk: word.phoneticUk || null,
        definition_vi: word.definitionVi || '',
        definition_en: word.definitionEn || null,
        cefr_level: word.cefrLevel || 'B1',
        roots: word.roots || [{ rootId: root.id, rootName: root.rootName, meaningVi: root.meaningVi }],
        anatomy_prefix: anatomy.prefix || null,
        anatomy_prefix_vi: anatomy.prefixVi || null,
        anatomy_root: (anatomy.rootParts && anatomy.rootParts[0]?.text) || root.rootName,
        anatomy_root_vi: (anatomy.rootParts && anatomy.rootParts[0]?.meaningVi) || root.meaningVi,
        anatomy_root_parts: anatomy.rootParts || [],
        anatomy_suffix: anatomy.suffix || null,
        anatomy_suffix_vi: anatomy.suffixVi || null,
        anatomy_formula: anatomy.formula || '',
        anatomy_explanation: anatomy.explanation || '',
        collocations: word.collocations || [],
        examples: word.examples || [],
        synonyms: word.synonyms || [],
        antonyms: word.antonyms || [],
        updated_at: new Date().toISOString(),
      };

      if (hasSetTable) {
        wordPayload.detailed_meaning_vi = word.detailedMeaningVi || null;
        wordPayload.nuance_table = word.nuanceTable || null;
      }

      const { error: wordErr } = await supabase.from('supervoc_words').upsert(wordPayload);

      if (wordErr) {
        console.warn(`    ❌ Lỗi khi lưu từ [${word.term}]:`, wordErr.message);
      } else {
        console.log(`    ✅ Đã lưu Từ: ${word.term} (${word.cefrLevel})`);
      }

      if (word.wordFamily) {
        await supabase.from('supervoc_word_families').upsert({
          id: `fam_${word.id}`,
          word_id: word.id,
          noun_forms: word.wordFamily.nouns || [],
          verb_forms: word.wordFamily.verbs || [],
          adj_forms: word.wordFamily.adjectives || [],
          adv_forms: word.wordFamily.adverbs || [],
          updated_at: new Date().toISOString(),
        });
      }
    }
  }

  // 2. Upsert Expanded Lexicon Words
  console.log(`\n📚 Đang đồng bộ Kho Siêu Từ Điển Mở Rộng (Omni Expanded Lexicon)...`);
  for (const [id, word] of Object.entries(OMNI_EXPANDED_LEXICON)) {
    if (!word) continue;
    totalWordsCount++;

    const existingRootIds = new Set(roots.map((r) => r.id));
    const matchingRoot = word.roots?.find((r) => existingRootIds.has(r.rootId));
    const validRootId = matchingRoot ? matchingRoot.rootId : null;
    const anatomy = word.anatomy || {
      rootParts: [],
      formula: '',
      explanation: '',
    };

    const expWordPayload = {
      id: word.id,
      root_id: validRootId,
      term: word.term,
      part_of_speech: word.partOfSpeech || 'n.',
      phonetic_us: word.phoneticUs || '',
      phonetic_uk: word.phoneticUk || null,
      definition_vi: word.definitionVi || '',
      definition_en: word.definitionEn || null,
      cefr_level: word.cefrLevel || 'B1',
      roots: word.roots || [],
      anatomy_prefix: anatomy.prefix || null,
      anatomy_prefix_vi: anatomy.prefixVi || null,
      anatomy_root: (anatomy.rootParts && anatomy.rootParts[0]?.text) || word.term,
      anatomy_root_vi: (anatomy.rootParts && anatomy.rootParts[0]?.meaningVi) || '',
      anatomy_root_parts: anatomy.rootParts || [],
      anatomy_suffix: anatomy.suffix || null,
      anatomy_suffix_vi: anatomy.suffixVi || null,
      anatomy_formula: anatomy.formula || '',
      anatomy_explanation: anatomy.explanation || '',
      collocations: word.collocations || [],
      examples: word.examples || [],
      synonyms: word.synonyms || [],
      antonyms: word.antonyms || [],
      updated_at: new Date().toISOString(),
    };

    if (hasSetTable) {
      expWordPayload.detailed_meaning_vi = word.detailedMeaningVi || null;
      expWordPayload.nuance_table = word.nuanceTable || null;
    }

    const { error: expWordErr } = await supabase.from('supervoc_words').upsert(expWordPayload);

    if (expWordErr) {
      console.warn(`    ❌ Lỗi khi lưu từ mở rộng [${word.term}]:`, expWordErr.message);
    } else {
      console.log(`    ✅ Đã lưu Từ Mở Rộng: ${word.term} (${word.cefrLevel})`);
    }

    if (word.wordFamily) {
      await supabase.from('supervoc_word_families').upsert({
        id: `fam_${word.id}`,
        word_id: word.id,
        noun_forms: word.wordFamily.nouns || [],
        verb_forms: word.wordFamily.verbs || [],
        adj_forms: word.wordFamily.adjectives || [],
        adv_forms: word.wordFamily.adverbs || [],
        updated_at: new Date().toISOString(),
      });
    }
  }

  // 3. Upsert Oxford 5000 Sets & Their Words
  console.log(`\n🎓 Đang đồng bộ Bộ Từ Vựng Oxford 5000 (${OXFORD_5000_SETS.length} bộ)...`);
  for (let setIdx = 0; setIdx < OXFORD_5000_SETS.length; setIdx++) {
    const setItem = OXFORD_5000_SETS[setIdx];
    if (!setItem) continue;

    console.log(`\n📦 Đang xử lý Bộ từ: [${setItem.title}] (${setItem.id})`);

    if (hasSetTable) {
      const { error: setErr } = await supabase.from('supervoc_sets').upsert({
        id: setItem.id,
        title: setItem.title,
        level: setItem.level || 'B2',
        terms_count: setItem.words ? setItem.words.length : setItem.termsCount,
        description: setItem.description || '',
        category: setItem.category || '',
        author: setItem.author || 'SuperVoc / Oxford 5000',
        days_ago: setItem.daysAgo || null,
        order_index: setIdx,
        updated_at: new Date().toISOString(),
      });

      if (setErr) {
        console.warn(`  ❌ Lỗi khi lưu bộ từ [${setItem.title}]:`, setErr.message);
      } else {
        console.log(`  ✅ Đã lưu Bộ từ vào supervoc_sets: [${setItem.title}]`);
      }
    }

    const setWords = setItem.words || [];
    for (let wordIdx = 0; wordIdx < setWords.length; wordIdx++) {
      const word = setWords[wordIdx];
      if (!word) continue;
      totalWordsCount++;

      const existingRootIds = new Set(roots.map((r) => r.id));
      const matchingRoot = word.roots?.find((r) => existingRootIds.has(r.rootId));
      const validRootId = matchingRoot ? matchingRoot.rootId : null;
      const anatomy = word.anatomy || {
        rootParts: [],
        formula: '',
        explanation: '',
      };

      const oxWordPayload = {
        id: word.id,
        root_id: validRootId,
        term: word.term,
        part_of_speech: word.partOfSpeech || 'n.',
        phonetic_us: word.phoneticUs || '',
        phonetic_uk: word.phoneticUk || null,
        definition_vi: word.definitionVi || '',
        definition_en: word.definitionEn || null,
        cefr_level: word.cefrLevel || 'B2',
        roots: word.roots || [],
        anatomy_prefix: anatomy.prefix || null,
        anatomy_prefix_vi: anatomy.prefixVi || null,
        anatomy_root: (anatomy.rootParts && anatomy.rootParts[0]?.text) || word.term,
        anatomy_root_vi: (anatomy.rootParts && anatomy.rootParts[0]?.meaningVi) || '',
        anatomy_root_parts: anatomy.rootParts || [],
        anatomy_suffix: anatomy.suffix || null,
        anatomy_suffix_vi: anatomy.suffixVi || null,
        anatomy_formula: anatomy.formula || '',
        anatomy_explanation: anatomy.explanation || '',
        collocations: word.collocations || [],
        examples: word.examples || [],
        synonyms: word.synonyms || [],
        antonyms: word.antonyms || [],
        updated_at: new Date().toISOString(),
      };

      if (hasSetTable) {
        oxWordPayload.set_id = setItem.id;
        oxWordPayload.detailed_meaning_vi = word.detailedMeaningVi || null;
        oxWordPayload.nuance_table = word.nuanceTable || null;
      }

      const { error: oxWordErr } = await supabase.from('supervoc_words').upsert(oxWordPayload);

      if (oxWordErr) {
        console.warn(`    ❌ Lỗi khi lưu từ Oxford [${word.term}]:`, oxWordErr.message);
      } else {
        console.log(`    ✅ Đã lưu Từ Oxford: ${word.term} (${word.partOfSpeech}) -> set_id: ${hasSetTable ? setItem.id : 'N/A'}`);
      }

      if (hasSetTable) {
        const { error: linkErr } = await supabase.from('supervoc_set_words').upsert({
          id: `${setItem.id}_${word.id}`,
          set_id: setItem.id,
          word_id: word.id,
          order_index: wordIdx,
          created_at: new Date().toISOString(),
        });
        if (linkErr) {
          console.warn(`      ⚠️ Lỗi liên kết set_words:`, linkErr.message);
        }
      }

      if (word.wordFamily) {
        await supabase.from('supervoc_word_families').upsert({
          id: `fam_${word.id}`,
          word_id: word.id,
          noun_forms: word.wordFamily.nouns || [],
          verb_forms: word.wordFamily.verbs || [],
          adj_forms: word.wordFamily.adjectives || [],
          adv_forms: word.wordFamily.adverbs || [],
          updated_at: new Date().toISOString(),
        });
      }
    }
  }

  // 4. Upsert Synonyms & Antonyms Lexicon
  console.log(`\n✨ Đang đồng bộ Kho Từ Đồng Nghĩa & Trái Nghĩa (Synonyms & Antonyms Lexicon)...`);
  for (const [id, word] of Object.entries(SYNONYMS_ANTONYMS_LEXICON)) {
    if (!word) continue;
    totalWordsCount++;

    const anatomy = word.anatomy || {
      rootParts: [],
      formula: '',
      explanation: '',
    };

    const synWordPayload = {
      id: word.id,
      term: word.term,
      root_id: null,
      part_of_speech: word.partOfSpeech,
      phonetic_us: word.phoneticUs,
      phonetic_uk: word.phoneticUk || null,
      definition_vi: word.definitionVi,
      definition_en: word.definitionEn || null,
      cefr_level: word.cefrLevel,
      anatomy_prefix: anatomy.prefix || null,
      anatomy_prefix_vi: anatomy.prefixVi || null,
      anatomy_root_parts: anatomy.rootParts || [],
      anatomy_suffix: anatomy.suffix || null,
      anatomy_suffix_vi: anatomy.suffixVi || null,
      anatomy_formula: anatomy.formula || '',
      anatomy_explanation: anatomy.explanation || '',
      collocations: word.collocations || [],
      examples: word.examples || [],
      synonyms: word.synonyms || [],
      antonyms: word.antonyms || [],
      updated_at: new Date().toISOString(),
    };

    if (hasSetTable) {
      synWordPayload.detailed_meaning_vi = word.detailedMeaningVi || null;
      synWordPayload.nuance_table = word.nuanceTable || null;
    }

    const { error: synWordErr } = await supabase.from('supervoc_words').upsert(synWordPayload);

    if (synWordErr) {
      console.warn(`    ❌ Lỗi khi lưu từ đồng/trái nghĩa [${word.term}]:`, synWordErr.message);
    } else {
      console.log(`    ✅ Đã lưu Từ Đồng/Trái nghĩa: ${word.term} (${word.partOfSpeech})`);
    }

    if (word.wordFamily) {
      await supabase.from('supervoc_word_families').upsert({
        id: `fam_${word.id}`,
        word_id: word.id,
        noun_forms: word.wordFamily.nouns || [],
        verb_forms: word.wordFamily.verbs || [],
        adj_forms: word.wordFamily.adjectives || [],
        adv_forms: word.wordFamily.adverbs || [],
        updated_at: new Date().toISOString(),
      });
    }
  }

  console.log(`\n🎉 Hoàn thành đồng bộ! Tổng cộng: ${roots.length} gốc từ, ${totalWordsCount} từ vựng.`);
  if (!hasSetTable) {
    console.log(`\n📌 NHẮC NHỞ: Sau khi bạn chạy file migration 'supabase/migrations/20260913_supervoc_sets_schema.sql' trong Supabase SQL Editor, hãy chạy lại script này để đồng bộ toàn bộ supervoc_sets và supervoc_set_words nhé!`);
  }
}

main().catch(console.error);


