import { OMNI_EXPANDED_LEXICON } from './omni-expanded-lexicon';
import { OXFORD_B2_HEALTH_MIND_WORDS, OXFORD_B2_EDUCATION_ACADEMICS_WORDS } from './oxford-sets-dataset';
import { SYNONYMS_ANTONYMS_LEXICON } from './supervoc-synonyms-dataset';

export interface SupervocWordFamilyItem {
  term: string;
  vi: string;
  phonetic?: string;
  exampleEn?: string;
  exampleVi?: string;
}

export interface SupervocNuanceItem {
  term: string;
  partOfSpeech?: string;
  phonetic?: string;
  coreNuanceVi: string;      // Sắc thái cốt lõi & Hình ảnh bản chất
  contextVi: string;         // Bối cảnh sử dụng đặc trưng
  intensity?: 'Nhẹ' | 'Vừa' | 'Cực độ'; // Cường độ / Mức độ cảm xúc
  exampleEn?: string;        // Ví dụ phân biệt điển hình
  exampleVi?: string;
}

export interface SupervocNuanceTable {
  topicVi: string;           // Tên chủ đề so sánh
  summaryVi?: string;        // Lời đúc kết ngắn gọn cách phân biệt
  items: SupervocNuanceItem[];
}

export interface SupervocRootRef {
  rootId: string;
  rootName: string;
  meaningVi: string;
}

export interface SupervocWordAnatomy {
  prefix?: string;
  prefixVi?: string;
  rootParts: Array<{
    text: string;
    rootId: string;
    rootName: string;
    meaningVi: string;
  }>;
  suffix?: string;
  suffixVi?: string;
  formula: string;
  explanation: string;
}

export interface SupervocWord {
  id: string;
  term: string;
  partOfSpeech: string;
  phoneticUs: string;
  phoneticUk?: string;
  definitionVi: string;
  detailedMeaningVi?: string; // Sắc thái nghĩa chuyên sâu & hình tượng hóa bản chất từ
  definitionEn?: string;
  cefrLevel: string;
  roots: SupervocRootRef[]; // Can be 1 or multiple connected roots
  anatomy: SupervocWordAnatomy;
  wordFamily: {
    nouns: SupervocWordFamilyItem[];
    verbs: SupervocWordFamilyItem[];
    adjectives: SupervocWordFamilyItem[];
    adverbs: SupervocWordFamilyItem[];
  };
  collocations: Array<{ phrase: string; vi: string; example: string }>;
  examples: Array<{ en: string; vi: string }>;
  synonyms: SupervocWordFamilyItem[];
  antonyms: SupervocWordFamilyItem[];
  nuanceTable?: SupervocNuanceTable; // Bảng so sánh sắc thái khi từ có nhiều từ đồng nghĩa
}

export interface SupervocRoot {
  id: string;
  rootName: string;
  variants: string[];
  meaningEn: string;
  meaningVi: string;
  originLanguage: string;
  originWord?: string;
  etymologyStory: string;
  orderIndex: number;
  words: SupervocWord[];
}

// ----------------------------------------------------
// 1. DATASET WITH STANDARDIZED ROOTS & MULTI-ROOT LINKS
// ----------------------------------------------------

const WORD_AGRICULTURE: SupervocWord = {
  id: 'agriculture',
  term: 'agriculture',
  partOfSpeech: 'n.',
  phoneticUs: '/ˈæɡrɪkʌltʃər/',
  phoneticUk: '/ˈæɡrɪkʌltʃə(r)/',
  definitionVi: 'nông nghiệp, ngành trồng trọt và chăn nuôi',
  definitionEn: 'the science or practice of farming, including cultivation of the soil and rearing of animals',
  cefrLevel: 'B1',
  roots: [
    { rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng, đất đai' },
    { rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, nuôi dưỡng' },
  ],
  anatomy: {
    rootParts: [
      { text: 'agri-', rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng (Latin: ager)' },
      { text: 'culture', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt (Latin: cultura)' },
    ],
    formula: 'agri- (đồng ruộng) + culture (trồng trọt) → agriculture (nghề trồng trọt trên đồng ruộng → nông nghiệp)',
    explanation: 'Sự kết hợp giữa 2 gốc từ Latinh: "ager" (đồng đất) và "cultura" (chăm sóc, canh tác).',
  },
  wordFamily: {
    nouns: [
      { term: 'agriculture', vi: 'ngành nông nghiệp' },
      { term: 'agriculturist', vi: 'người làm nông nghiệp, chuyên gia nông nghiệp' },
      { term: 'agriculturalist', vi: 'chuyên gia phát triển nông nghiệp' },
    ],
    verbs: [],
    adjectives: [
      { term: 'agricultural', vi: 'thuộc về nông nghiệp' },
    ],
    adverbs: [
      { term: 'agriculturally', vi: 'về mặt nông nghiệp' },
    ],
  },
  collocations: [
    {
      phrase: 'sustainable agriculture',
      vi: 'nông nghiệp bền vững',
      example: 'Modern farms adopt sustainable agriculture to protect soil nutrients.',
    },
    {
      phrase: 'agricultural produce / products',
      vi: 'nông sản, sản phẩm nông nghiệp',
      example: 'Vietnam is a major exporter of high-quality agricultural products.',
    },
  ],
  examples: [
    {
      en: 'Over sixty percent of the rural population relies on agriculture for their livelihood.',
      vi: 'Hơn 60% dân số nông thôn phụ thuộc vào nông nghiệp để kiếm sống.',
    },
  ],
  synonyms: [{ term: 'farming', vi: 'nghề làm nông' }, { term: 'cultivation', vi: 'canh tác' }],
  antonyms: [{ term: 'industry', vi: 'công nghiệp' }],
};

const WORD_AGRICULTURAL: SupervocWord = {
  id: 'agricultural',
  term: 'agricultural',
  partOfSpeech: 'adj.',
  phoneticUs: '/ˌæɡrɪˈkʌltʃərəl/',
  phoneticUk: '/ˌæɡrɪˈkʌltʃərəl/',
  definitionVi: 'thuộc về nông nghiệp, dùng cho trồng trọt',
  definitionEn: 'relating to agriculture or farming',
  cefrLevel: 'B1',
  roots: [
    { rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng, đất đai' },
    { rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, nuôi dưỡng' },
  ],
  anatomy: {
    rootParts: [
      { text: 'agri-', rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng' },
      { text: 'cultur-', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt' },
    ],
    suffix: '-al',
    suffixVi: 'tính từ (thuộc về)',
    formula: 'agri- (đồng ruộng) + cultur- (trồng trọt) + -al (thuộc về) → agricultural (thuộc về nông nghiệp)',
    explanation: 'Dạng tính từ của agriculture dùng để chỉ các đặc tính liên quan đến canh tác.',
  },
  wordFamily: {
    nouns: [{ term: 'agriculture', vi: 'ngành nông nghiệp' }],
    verbs: [],
    adjectives: [{ term: 'agricultural', vi: 'thuộc về nông nghiệp' }],
    adverbs: [{ term: 'agriculturally', vi: 'về phương diện nông nghiệp' }],
  },
  collocations: [
    {
      phrase: 'agricultural land',
      vi: 'đất nông nghiệp',
      example: 'The government protects fertile agricultural land from urban encroachment.',
    },
  ],
  examples: [
    {
      en: 'The Mekong Delta is the primary agricultural hub of Vietnam.',
      vi: 'Đồng bằng sông Cửu Long là trung tâm nông nghiệp trọng điểm của Việt Nam.',
    },
  ],
  synonyms: [{ term: 'farming', vi: 'làm nông' }],
  antonyms: [{ term: 'urban', vi: 'thuộc đô thị' }],
};

const WORD_HORTICULTURE: SupervocWord = {
  id: 'horticulture',
  term: 'horticulture',
  partOfSpeech: 'n.',
  phoneticUs: '/ˈhɔːrtɪkʌltʃər/',
  phoneticUk: '/ˈhɔːtɪkʌltʃə(r)/',
  definitionVi: 'nghề làm vườn, khoa học làm vườn cây cảnh/hoa quả',
  definitionEn: 'the art or practice of garden cultivation and management',
  cefrLevel: 'B2',
  roots: [
    { rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, nuôi dưỡng' },
  ],
  anatomy: {
    prefix: 'horti-',
    prefixVi: 'vườn tược (Latin: hortus)',
    rootParts: [
      { text: 'culture', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt (Latin: cultura)' },
    ],
    formula: 'horti- (vườn tược) + culture (trồng trọt) → horticulture (nghề làm vườn)',
    explanation: 'Nghệ thuật và kỹ thuật chuyên canh cây ăn quả, rau và hoa trong vườn.',
  },
  wordFamily: {
    nouns: [
      { term: 'horticulture', vi: 'nghề làm vườn' },
      { term: 'horticulturist', vi: 'chuyên gia làm vườn' },
    ],
    verbs: [],
    adjectives: [
      { term: 'horticultural', vi: 'thuộc về nghề làm vườn' },
    ],
    adverbs: [],
  },
  collocations: [
    {
      phrase: 'horticultural society',
      vi: 'hội làm vườn cây cảnh',
      example: 'The annual flower show was hosted by the local horticultural society.',
    },
  ],
  examples: [
    {
      en: 'She studied horticulture at university to master organic greenhouse gardening.',
      vi: 'Cô ấy học ngành làm vườn tại trường đại học để tinh thông kỹ thuật nhà kính hữu cơ.',
    },
  ],
  synonyms: [{ term: 'gardening', vi: 'làm vườn' }],
  antonyms: [],
};

export const SUPERVOC_ROOTS_DATA: SupervocRoot[] = [
  // 1. Agri, Agro
  {
    id: 'agri_agro',
    rootName: 'Agri, Agro',
    variants: ['agri', 'agro', 'agr'],
    meaningEn: 'field, land, soil, farming',
    meaningVi: 'đồng ruộng, đất đai, thổ nhưỡng',
    originLanguage: 'Latin / Greek',
    originWord: 'ager (Latin), agros (Greek)',
    etymologyStory: 'Bắt nguồn từ tiếng Latin "ager" và Hy Lạp "agros" có nghĩa là cánh đồng, vùng đất mở để cày cấy.',
    orderIndex: 1,
    words: [
      WORD_AGRICULTURE,
      WORD_AGRICULTURAL,
      {
        id: 'agrarian',
        term: 'agrarian',
        partOfSpeech: 'adj.',
        phoneticUs: '/əˈɡreriən/',
        phoneticUk: '/əˈɡreəriən/',
        definitionVi: 'thuộc về ruộng đất, địa chính nông nghiệp',
        definitionEn: 'relating to cultivated land or the cultivation of land',
        cefrLevel: 'B2',
        roots: [{ rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng, đất đai' }],
        anatomy: {
          rootParts: [
            { text: 'agr-', rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'ruộng đất' },
          ],
          suffix: '-arian',
          suffixVi: 'thuộc về',
          formula: 'agr- (ruộng đất) + -arian (thuộc về) → agrarian (thuộc về chế độ ruộng đất)',
          explanation: 'Mô tả xã hội hoặc nền kinh tế dựa chủ yếu vào việc sở hữu và cày cấy đất đai.',
        },
        wordFamily: {
          nouns: [{ term: 'agrarianism', vi: 'chủ nghĩa trọng nông nghiệp' }],
          verbs: [],
          adjectives: [{ term: 'agrarian', vi: 'thuộc về ruộng đất' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'agrarian reform / society',
            vi: 'cải cách ruộng đất / xã hội nông nghiệp',
            example: 'The country transitioned from an agrarian society to a high-tech economy.',
          },
        ],
        examples: [
          {
            en: 'Before the industrial revolution, most nations had strictly agrarian economies.',
            vi: 'Trước cách mạng công nghiệp, hầu hết các quốc gia đều có nền kinh tế thuần nông.',
          },
        ],
        synonyms: [{ term: 'rural', vi: 'nông thôn' }, { term: 'agricultural', vi: 'nông nghiệp' }],
        antonyms: [{ term: 'industrial', vi: 'công nghiệp' }],
      },
      {
        id: 'agronomy',
        term: 'agronomy',
        partOfSpeech: 'n.',
        phoneticUs: '/əˈɡrɑːnəmi/',
        phoneticUk: '/əˈɡrɒnəmi/',
        definitionVi: 'nông học, khoa học quản lý đất và trồng trọt',
        definitionEn: 'the science of soil management and crop production',
        cefrLevel: 'C1',
        roots: [{ rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng, đất đai' }],
        anatomy: {
          rootParts: [
            { text: 'agro-', rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng đất (Greek: agros)' },
            { text: '-nomy', rootId: 'agri_agro', rootName: 'Nom, Nomy', meaningVi: 'khoa học, quy luật (Greek: nomos)' },
          ],
          formula: 'agro- (đồng ruộng) + -nomy (khoa học) → agronomy (khoa học về đất đai và cây trồng)',
          explanation: 'Ngành khoa học ứng dụng nghiên cứu dinh dưỡng đất, bảo vệ mùa màng và tăng năng suất.',
        },
        wordFamily: {
          nouns: [
            { term: 'agronomy', vi: 'ngành nông học' },
            { term: 'agronomist', vi: 'nhà khoa học nông nghiệp (chuyên sâu đất & cây)' },
          ],
          verbs: [],
          adjectives: [{ term: 'agronomic', vi: 'thuộc về nông học' }],
          adverbs: [{ term: 'agronomically', vi: 'về mặt nông học' }],
        },
        collocations: [
          {
            phrase: 'field of agronomy',
            vi: 'lĩnh vực nông học',
            example: 'Innovations in the field of agronomy help feed billions of people.',
          },
        ],
        examples: [
          {
            en: 'Agronomists test soil samples to optimize fertilizer formulas for grain crops.',
            vi: 'Các nhà nông học kiểm tra mẫu đất để tối ưu hóa công thức phân bón cho cây ngũ cốc.',
          },
        ],
        synonyms: [{ term: 'soil science', vi: 'khoa học đất đai' }],
        antonyms: [],
      },
    ],
  },

  // 2. Cult, Cultura
  {
    id: 'cult_cultura',
    rootName: 'Cult, Cultura',
    variants: ['cult', 'cultur', 'col'],
    meaningEn: 'to cultivate, till, care, nourish, dwell',
    meaningVi: 'trồng trọt, nuôi dưỡng, trau dồi, văn hóa',
    originLanguage: 'Latin',
    originWord: 'colere, cultura',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "colere" (cày xới đất đai, chăm sóc, nuôi nấng) tạo nên danh từ "cultura" (sự trau dồi trí tuệ và tâm hồn, văn hóa).',
    orderIndex: 2,
    words: [
      {
        id: 'culture',
        term: 'culture',
        partOfSpeech: 'n.',
        phoneticUs: '/ˈkʌltʃər/',
        phoneticUk: '/ˈkʌltʃə(r)/',
        definitionVi: 'văn hóa, nếp sống; sự nuôi cấy sinh học',
        definitionEn: 'the customs, arts, social institutions, and achievements of a nation; cultivation of plants/bacteria',
        cefrLevel: 'A2',
        roots: [{ rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, nuôi dưỡng' }],
        anatomy: {
          rootParts: [
            { text: 'cultur', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trau dồi, nuôi dưỡng' },
          ],
          suffix: '-e',
          formula: 'cultur (trau dồi) + -e → culture (những giá trị được con người trau dồi và nuôi dưỡng → văn hóa)',
          explanation: 'Từ nghĩa gốc "cày xới làm màu mỡ mảnh đất" được mở rộng thành "trau dồi làm giàu tâm hồn con người".',
        },
        wordFamily: {
          nouns: [
            { term: 'culture', vi: 'nền văn hóa' },
            { term: 'subculture', vi: 'tiểu văn hóa' },
          ],
          verbs: [{ term: 'culture', vi: 'nuôi cấy tế bào/vi khuẩn' }],
          adjectives: [
            { term: 'cultural', vi: 'thuộc về văn hóa' },
            { term: 'cultured', vi: 'có học thức, thanh lịch' },
            { term: 'multicultural', vi: 'đa văn hóa' },
          ],
          adverbs: [{ term: 'culturally', vi: 'về phương diện văn hóa' }],
        },
        collocations: [
          {
            phrase: 'preserve cultural heritage',
            vi: 'gìn giữ di sản văn hóa',
            example: 'Traditional music festivals help preserve the cultural heritage of indigenous tribes.',
          },
        ],
        examples: [
          {
            en: 'Vietnamese culture values filial piety, education, and community harmony.',
            vi: 'Văn hóa Việt Nam coi trọng lòng hiếu thảo, sự học và sự hòa hợp cộng đồng.',
          },
        ],
        synonyms: [{ term: 'civilization', vi: 'nền văn minh' }, { term: 'customs', vi: 'phong tục' }],
        antonyms: [],
      },
      {
        id: 'cultivate',
        term: 'cultivate',
        partOfSpeech: 'v.',
        phoneticUs: '/ˈkʌltɪveɪt/',
        phoneticUk: '/ˈkʌltɪveɪt/',
        definitionVi: 'trồng trọt hoa màu, trau dồi tri thức/mối quan hệ',
        definitionEn: 'to prepare and use land for crops; develop a quality, skill, or relationship',
        cefrLevel: 'B2',
        roots: [{ rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, nuôi dưỡng' }],
        anatomy: {
          rootParts: [
            { text: 'cultiv-', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'cày xới, chăm sóc' },
          ],
          suffix: '-ate',
          suffixVi: 'động từ hành động',
          formula: 'cultiv- (chăm sóc) + -ate (làm) → cultivate (chăm sóc đất đai / trau dồi bản thân)',
          explanation: 'Chăm sóc đều đặn từ ngày này qua ngày khác để hạt giống nở hoa kết trái.',
        },
        wordFamily: {
          nouns: [
            { term: 'cultivation', vi: 'sự canh tác trồng trọt, sự trau dồi' },
            { term: 'cultivator', vi: 'người trồng trọt, máy cày xới' },
          ],
          verbs: [{ term: 'cultivate', vi: 'trồng trọt, trau dồi' }],
          adjectives: [
            { term: 'cultivated', vi: 'được canh tác, có văn hóa' },
            { term: 'uncultivated', vi: 'bỏ hoang, chưa khai khẩn' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'cultivate good habits / relationships',
            vi: 'trau dồi thói quen tốt / vun đắp mối quan hệ',
            example: 'Reading books daily is an excellent habit to cultivate.',
          },
        ],
        examples: [
          {
            en: 'Farmers cultivate rice, corn, and organic vegetables along the riverbanks.',
            vi: 'Nông dân trồng lúa, ngô và rau hữu cơ dọc theo các bờ sông.',
          },
        ],
        synonyms: [{ term: 'nurture', vi: 'nuôi dưỡng' }, { term: 'grow', vi: 'trồng trọt' }],
        antonyms: [{ term: 'neglect', vi: 'bỏ bê, phớt lờ' }],
      },
      WORD_AGRICULTURE,
      WORD_HORTICULTURE,
    ],
  },

  // 3. Flex, Flect
  {
    id: 'flex_flect',
    rootName: 'Flex, Flect',
    variants: ['flex', 'flect'],
    meaningEn: 'to bend, curve',
    meaningVi: 'uốn cong, gập, linh hoạt',
    originLanguage: 'Latin',
    originWord: 'flectere',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "flectere" (uốn cong, bẻ gập), liên quan đến sự linh hoạt và khả năng phản chiếu.',
    orderIndex: 3,
    words: [
      {
        id: 'reflect',
        term: 'reflect',
        partOfSpeech: 'v.',
        phoneticUs: '/rɪˈflekt/',
        phoneticUk: '/rɪˈflekt/',
        definitionVi: 'phản chiếu ánh sáng/âm thanh, suy ngẫm sâu sắc',
        definitionEn: 'to throw back heat, light, or sound; to think deeply about something',
        cefrLevel: 'B1',
        roots: [{ rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn cong, gập' }],
        anatomy: {
          prefix: 're-',
          prefixVi: 'lại, dội ngược lại',
          rootParts: [{ text: 'flect', rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn cong' }],
          formula: 're- (ngược lại) + flect (uốn cong) → reflect (dội ngược lại → phản chiếu, suy ngẫm)',
          explanation: 'Ánh sáng hoặc tâm trí uốn cong và dội ngược trở lại điểm xuất phát.',
        },
        wordFamily: {
          nouns: [
            { term: 'reflection', vi: 'sự phản chiếu, sự suy ngẫm' },
            { term: 'reflector', vi: 'kính/gương phản xạ ánh sáng' },
          ],
          verbs: [{ term: 'reflect', vi: 'phản chiếu, suy ngẫm' }],
          adjectives: [{ term: 'reflective', vi: 'có tính phản chiếu, trầm ngâm suy tư' }],
          adverbs: [{ term: 'reflectively', vi: 'một cách trầm ngâm suy nghĩ' }],
        },
        collocations: [
          {
            phrase: 'reflect on one’s past',
            vi: 'ngẫm nghĩ về quá khứ của bản thân',
            example: 'He sat silently to reflect on his past decisions.',
          },
        ],
        examples: [
          {
            en: 'Calm lake water reflects the towering mountain peaks.',
            vi: 'Mặt nước hồ phẳng lặng phản chiếu những đỉnh núi cao sừng sững.',
          },
        ],
        synonyms: [{ term: 'mirror', vi: 'phản chiếu' }, { term: 'ponder', vi: 'suy ngẫm' }],
        antonyms: [{ term: 'absorb', vi: 'hấp thụ, hút vào' }],
      },
      {
        id: 'flexible',
        term: 'flexible',
        partOfSpeech: 'adj.',
        phoneticUs: '/ˈfleksəbl/',
        phoneticUk: '/ˈfleksəbl/',
        definitionVi: 'linh hoạt, mềm dẻo, dễ thích ứng',
        definitionEn: 'capable of bending easily without breaking; adaptable to new situations',
        cefrLevel: 'B1',
        roots: [{ rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn cong, gập' }],
        anatomy: {
          rootParts: [{ text: 'flex', rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn cong' }],
          suffix: '-ible',
          suffixVi: 'có thể được',
          formula: 'flex (uốn cong) + -ible (có thể) → flexible (có thể uốn cong mà không gãy → linh hoạt)',
          explanation: 'Khả năng uốn cong mềm dẻo trước các tác động bên ngoài.',
        },
        wordFamily: {
          nouns: [{ term: 'flexibility', vi: 'tính linh hoạt, sự mềm dẻo' }],
          verbs: [{ term: 'flex', vi: 'uốn cong, gập cơ bắp' }],
          adjectives: [
            { term: 'flexible', vi: 'linh hoạt' },
            { term: 'inflexible', vi: 'cứng nhắc, không linh hoạt' },
          ],
          adverbs: [{ term: 'flexibly', vi: 'một cách linh hoạt' }],
        },
        collocations: [
          {
            phrase: 'flexible working hours',
            vi: 'giờ làm việc linh hoạt',
            example: 'The company offers flexible working hours for software engineers.',
          },
        ],
        examples: [
          {
            en: 'Bamboo branches are extremely flexible and rarely snap under strong gusts of wind.',
            vi: 'Cành tre vô cùng mềm dẻo và hiếm khi gãy dưới những cơn gió giật mạnh.',
          },
        ],
        synonyms: [{ term: 'adaptable', vi: 'dễ thích nghi' }, { term: 'pliable', vi: 'mềm dẻo' }],
        antonyms: [{ term: 'rigid', vi: 'cứng nhắc' }, { term: 'stiff', vi: 'cứng đơ' }],
      },
    ],
  },

  // 4. Mit, Miss
  {
    id: 'mit_miss',
    rootName: 'Mit, Miss',
    variants: ['mit', 'miss'],
    meaningEn: 'to send, let go, release, pass',
    meaningVi: 'gửi đi, phái đi, phát ra, cho phép, chuyển giao',
    originLanguage: 'Latin',
    originWord: 'mittere (gửi đi) & missus (đã được phái đi)',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "mittere" (gửi đi, phái đi, thả cho đi). Gốc từ này tạo nên toàn bộ hệ thống từ vựng về trao đổi và truyền đạt: cho phép bước vào trong (admit), trao trọn tâm huyết cam kết (commit), phát ra ngắt quãng từng đợt (intermittent), để cho trôi đi bỏ sót (omit), cho phép thông qua (permit), gửi tiền kiều hối (remit), phái đi thực hiện sứ mệnh (mission/missile/emit), gửi từ dưới lên đệ trình quy phục (submit), và truyền phát tín hiệu xuyên không gian (transmit).',
    orderIndex: 4,
    words: [
      // 1. Admit (Ad + Mit)
      {
        id: 'admit',
        term: 'admit',
        partOfSpeech: 'v.',
        phoneticUs: '/ədˈmɪt/',
        phoneticUk: '/ədˈmɪt/',
        definitionVi: 'thừa nhận sự thật, cho phép vào (nhập viện, nhập học, vào cổng)',
        definitionEn: 'confess to be true; allow someone to enter a place or join an institution',
        cefrLevel: 'B1',
        roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi, cho phép' }],
        anatomy: {
          prefix: 'ad-',
          prefixVi: 'hướng đến (to, toward)',
          rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'cho vào, gửi' }],
          formula: 'ad- (hướng đến) + mit (cho vào) → admit (cho phép bước vào trong; dũng cảm nhận lỗi/thú nhận sự thật)',
          explanation: 'Mở cửa cho phép người hoặc sự thật được chấp nhận vào bên trong.',
        },
        wordFamily: {
          nouns: [
            { term: 'admission', vi: 'sự nhận vào, vé vào cửa, lời thú nhận' },
            { term: 'admittance', vi: 'quyền được vào cổng' },
          ],
          verbs: [{ term: 'admit', vi: 'thừa nhận, nhận vào' }],
          adjectives: [{ term: 'admissible', vi: 'hợp lệ, được chấp nhận trước tòa' }],
          adverbs: [{ term: 'admittedly', vi: 'phải công nhận rằng' }],
        },
        collocations: [
          {
            phrase: 'admit mistakes',
            vi: 'thừa nhận sai lầm',
            example: 'A great leader is never afraid to admit mistakes and correct course.',
          },
          {
            phrase: 'admit to the hospital',
            vi: 'nhập viện điều trị',
            example: 'The patient was admitted to the hospital for emergency surgery.',
          },
        ],
        examples: [
          {
            en: 'He admitted that he had made a significant calculation error in the report.',
            vi: 'Anh ấy thừa nhận rằng mình đã mắc một sai số tính toán nghiêm trọng trong bản báo cáo.',
          },
        ],
        synonyms: [
          { term: 'confess', vi: 'thú nhận' },
          { term: 'acknowledge', vi: 'công nhận' },
          { term: 'accept', vi: 'chấp nhận' },
        ],
        antonyms: [
          { term: 'deny', vi: 'phủ nhận' },
          { term: 'reject', vi: 'từ chối' },
        ],
      },

      // 2. Commit (Com + Mit)
      {
        id: 'commit',
        term: 'commit',
        partOfSpeech: 'v.',
        phoneticUs: '/kəˈmɪt/',
        phoneticUk: '/kəˈmɪt/',
        definitionVi: 'cam kết gắn bó, tận tụy; phạm tội / phạm sai lầm; ủy thác',
        definitionEn: 'pledge or bind to a certain course or policy; perpetrate or carry out a mistake or crime',
        cefrLevel: 'B1',
        roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi, gửi gắm' }],
        anatomy: {
          prefix: 'com-',
          prefixVi: 'trọn vẹn, cùng nhau (completely)',
          rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi gắm, trao' }],
          formula: 'com- (trọn vẹn) + mit (gửi gắm) → commit (trao gửi trọn vẹn tâm huyết → cam kết, cống hiến; dấn thân phạm lỗi)',
          explanation: 'Giao phó toàn bộ niềm tin và nỗ lực vào một mục tiêu hoặc nghĩa vụ.',
        },
        wordFamily: {
          nouns: [
            { term: 'commitment', vi: 'sự cam kết, sự tận tụy gắn bó' },
            { term: 'committee', vi: 'ủy ban chuyên trách' },
          ],
          verbs: [{ term: 'commit', vi: 'cam kết, phạm tội' }],
          adjectives: [
            { term: 'committed', vi: 'hết lòng tận tụy, cam kết sâu sắc' },
            { term: 'noncommittal', vi: 'lấp lửng, không cam kết' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'commit a crime / fraud',
            vi: 'phạm tội / gian lận',
            example: 'Anyone who commits financial fraud will face severe criminal prosecution.',
          },
          {
            phrase: 'commit to long-term goals',
            vi: 'cam kết với các mục tiêu dài hạn',
            example: 'Top athletes commit to rigorous daily training schedules.',
          },
        ],
        examples: [
          {
            en: 'The organization is deeply committed to protecting human rights across the globe.',
            vi: 'Tổ chức này cam kết sâu sắc đối với việc bảo vệ nhân quyền trên toàn cầu.',
          },
        ],
        synonyms: [
          { term: 'dedicate', vi: 'cống hiến' },
          { term: 'pledge', vi: 'thề nguyện cam kết' },
          { term: 'perpetrate', vi: 'gây ra tội ác' },
        ],
        antonyms: [
          { term: 'renege', vi: 'nuốt lời' },
          { term: 'neglect', vi: 'bỏ bê' },
        ],
      },

      // 3. Intermittent (Inter + Mit)
      {
        id: 'intermittent',
        term: 'intermittent',
        partOfSpeech: 'adj.',
        phoneticUs: '/ˌɪntərˈmɪtənt/',
        phoneticUk: '/ˌɪntəˈmɪtənt/',
        definitionVi: 'ngắt quãng, chập chờn, lúc có lúc không, gián đoạn từng hồi',
        definitionEn: 'occurring at irregular intervals; not continuous or steady',
        cefrLevel: 'C1',
        roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi, phát ra' }],
        anatomy: {
          prefix: 'inter-',
          prefixVi: 'ở giữa, xen kẽ (between)',
          rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'phát đi, thả' }],
          suffix: '-ent',
          suffixVi: 'tính từ',
          formula: 'inter- (xen kẽ) + mit (phát) + -ent → intermittent (phát ra từng đợt ngắt quãng xen kẽ → chập chờn, gián đoạn)',
          explanation: 'Một hiện tượng không diễn ra liên tục mà phát ra từng hồi gián đoạn.',
        },
        wordFamily: {
          nouns: [{ term: 'intermittence', vi: 'sự gián đoạn ngắt quãng' }],
          verbs: [],
          adjectives: [{ term: 'intermittent', vi: 'ngắt quãng, chập chờn' }],
          adverbs: [{ term: 'intermittently', vi: 'một cách chập chờn ngắt quãng' }],
        },
        collocations: [
          {
            phrase: 'intermittent fasting',
            vi: 'nhịn ăn gián đoạn (chế độ dinh dưỡng)',
            example: 'Intermittent fasting has become a popular method for metabolic health.',
          },
          {
            phrase: 'intermittent rain / showers',
            vi: 'mưa rào ngắt quãng',
            example: 'The forecast predicts overcast skies with intermittent rain throughout the afternoon.',
          },
        ],
        examples: [
          {
            en: 'Poor cellular reception resulted in intermittent phone connections during the road trip.',
            vi: 'Sóng di động yếu dẫn đến các cuộc gọi chập chờn ngắt quãng trong suốt chuyến đi phượt.',
          },
        ],
        synonyms: [
          { term: 'sporadic', vi: 'rải rác thưa thớt' },
          { term: 'periodic', vi: 'định kỳ từng đợt' },
          { term: 'fitful', vi: 'chập chờn từng cơn' },
        ],
        antonyms: [
          { term: 'continuous', vi: 'liên tục không dứt' },
          { term: 'constant', vi: 'liên tục bất biến' },
        ],
      },

      // 4. Omit (Om + Mit)
      {
        id: 'omit',
        term: 'omit',
        partOfSpeech: 'v.',
        phoneticUs: '/əˈmɪt/',
        phoneticUk: '/əˈmɪt/',
        definitionVi: 'bỏ sót, lược bỏ, không đưa vào danh sách',
        definitionEn: 'leave out or exclude someone or something, either intentionally or forgetfully',
        cefrLevel: 'B2',
        roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi, thả' }],
        anatomy: {
          prefix: 'om-',
          prefixVi: 'ra ngoài, bỏ qua (ob- biến âm thành om- trước m)',
          rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'thả đi' }],
          formula: 'om- (bỏ qua) + mit (thả) → omit (để cho trôi qua mà không đưa vào → bỏ sót, lược bỏ)',
          explanation: 'Không bao gồm một mục trong tài liệu hoặc danh sách.',
        },
        wordFamily: {
          nouns: [{ term: 'omission', vi: 'sự bỏ sót, lỗi thiếu sót' }],
          verbs: [{ term: 'omit', vi: 'bỏ sót, lược bỏ' }],
          adjectives: [{ term: 'omitted', vi: 'bị lược bỏ' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'omit unnecessary details',
            vi: 'lược bỏ các chi tiết không cần thiết',
            example: 'Keep your executive summary concise by omitting minor technical details.',
          },
          {
            phrase: 'errors of omission',
            vi: 'lỗi do bỏ sót thông tin',
            example: 'The audit discovered serious financial errors of omission in the tax filing.',
          },
        ],
        examples: [
          {
            en: 'You can safely omit the optional questions on section three of the exam.',
            vi: 'Bạn có thể an tâm bỏ qua các câu hỏi tùy chọn ở phần ba của bài thi.',
          },
        ],
        synonyms: [
          { term: 'exclude', vi: 'loại trừ' },
          { term: 'skip', vi: 'bỏ qua' },
          { term: 'leave out', vi: 'bỏ quên' },
        ],
        antonyms: [
          { term: 'include', vi: 'bao gồm' },
          { term: 'insert', vi: 'chèn vào' },
        ],
      },

      // 5. Permit (Per + Mit)
      {
        id: 'permit',
        term: 'permit',
        partOfSpeech: 'v., n.',
        phoneticUs: '/pərˈmɪt/ (v) /ˈpɜːrmɪt/ (n)',
        phoneticUk: '/pəˈmɪt/ (v) /ˈpɜːmɪt/ (n)',
        definitionVi: 'cho phép (v); giấy phép chính thức (n)',
        definitionEn: 'give authorization or consent to someone to do something; an official document giving authorization',
        cefrLevel: 'B1',
        roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi, thả cho đi' }],
        anatomy: {
          prefix: 'per-',
          prefixVi: 'xuyên suốt, thông qua (through)',
          rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'thả đi' }],
          formula: 'per- (thông qua) + mit (thả đi) → permit (cho phép đi qua cửa không bị cản trở → cho phép, cấp giấy phép)',
          explanation: 'Bắt nguồn từ tiếng Latin "permittere" (thả cho đi qua tự do).',
        },
        wordFamily: {
          nouns: [
            { term: 'permission', vi: 'sự cho phép' },
            { term: 'permit', vi: 'giấy phép chính thức' },
          ],
          verbs: [{ term: 'permit', vi: 'cho phép' }],
          adjectives: [
            { term: 'permissible', vi: 'được phép theo luật' },
            { term: 'permissive', vi: 'dễ dãi, buông lỏng' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'building / work permit',
            vi: 'giấy phép xây dựng / lao động',
            example: 'Foreign engineers must obtain an official work permit before starting employment.',
          },
          {
            phrase: 'weather permitting',
            vi: 'nếu thời tiết cho phép thuận lợi',
            example: 'The outdoor music festival will take place tomorrow, weather permitting.',
          },
        ],
        examples: [
          {
            en: 'Photography is strictly not permitted inside the ancient royal mausoleum.',
            vi: 'Nghiêm cấm chụp ảnh bên trong lăng tẩm hoàng gia cổ kính.',
          },
        ],
        synonyms: [
          { term: 'allow', vi: 'cho phép' },
          { term: 'authorize', vi: 'ủy quyền phê duyệt' },
          { term: 'grant', vi: 'cấp phép' },
        ],
        antonyms: [
          { term: 'forbid', vi: 'cấm đoán' },
          { term: 'prohibit', vi: 'ngăn cấm' },
        ],
      },

      // 6. Remit (Re + Mit)
      {
        id: 'remit',
        term: 'remit',
        partOfSpeech: 'v., n.',
        phoneticUs: '/rɪˈmɪt/',
        phoneticUk: '/rɪˈmɪt/',
        definitionVi: 'chuyển tiền kiều hối, giảm bớt án phạt (v); phạm vi thẩm quyền (n)',
        definitionEn: 'cancel or refrain from exacting a penalty; send money in payment or as a gift; the task or area of activity officially assigned',
        cefrLevel: 'C1',
        roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi' }],
        anatomy: {
          prefix: 're-',
          prefixVi: 'về lại, phía sau (back)',
          rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi' }],
          formula: 're- (về lại) + mit (gửi) → remit (gửi tiền về lại quê nhà; gửi trả lại sự tha thứ/giảm án; phạm vi công việc)',
          explanation: 'Chuyển tiền về địa chỉ gốc hoặc giảm nhẹ các hình phạt ràng buộc.',
        },
        wordFamily: {
          nouns: [
            { term: 'remittance', vi: 'tiền kiều hối gửi về' },
            { term: 'remission', vi: 'sự thuyên giảm bệnh tật / tha tội' },
            { term: 'remit', vi: 'phạm vi thẩm quyền' },
          ],
          verbs: [{ term: 'remit', vi: 'chuyển tiền, tha giảm án' }],
          adjectives: [],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'remit funds abroad',
            vi: 'chuyển tiền kiều hối ra nước ngoài',
            example: 'Migrant workers remit billions of dollars back to their home countries each year.',
          },
          {
            phrase: 'cancer in remission',
            vi: 'bệnh ung thư đã thuyên giảm',
            example: 'Doctors were thrilled to confirm that her leukemia is in full clinical remission.',
          },
        ],
        examples: [
          {
            en: 'Please remit payment within thirty days of receiving the invoice.',
            vi: 'Vui lòng thanh toán chuyển tiền trong vòng ba mươi ngày kể từ khi nhận được hóa đơn.',
          },
        ],
        synonyms: [
          { term: 'transfer money', vi: 'chuyển tiền' },
          { term: 'pardon', vi: 'tha thứ' },
          { term: 'alleviate', vi: 'làm thuyên giảm' },
        ],
        antonyms: [
          { term: 'withhold', vi: 'giữ lại' },
          { term: 'charge', vi: 'tính phí' },
        ],
      },

      // 7. Mission (Root Mit & Miss)
      {
        id: 'mission',
        term: 'mission',
        partOfSpeech: 'n.',
        phoneticUs: '/ˈmɪʃn/',
        phoneticUk: '/ˈmɪʃn/',
        definitionVi: 'sứ mệnh, nhiệm vụ thiêng liêng được giao phó; đoàn công tác',
        definitionEn: 'an important assignment given to a person or group; the vocation or calling of a religious organization',
        cefrLevel: 'B1',
        roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi, phái đi' }],
        anatomy: {
          rootParts: [{ text: 'miss', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'phái đi, gửi' }],
          suffix: '-ion',
          suffixVi: 'danh từ',
          formula: 'miss (phái đi) + -ion → mission (nhiệm vụ lớn lao được cử phái đi thực hiện; tên lửa - missile; phát xạ - emit)',
          explanation: 'Bắt nguồn từ tiếng Latin "missio" (hành động cử người đại diện lên đường làm nhiệm vụ).',
        },
        wordFamily: {
          nouns: [
            { term: 'mission', vi: 'sứ mệnh, nhiệm vụ' },
            { term: 'missionary', vi: 'nhà truyền giáo' },
            { term: 'missile', vi: 'tên lửa đạn đạo' },
            { term: 'emission', vi: 'khí thải, sự phát xạ' },
          ],
          verbs: [{ term: 'emit', vi: 'phát ra ánh sáng / âm thanh / nhiệt' }],
          adjectives: [{ term: 'missionary', vi: 'thuộc truyền giáo' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'space / lunar mission',
            vi: 'sứ mệnh không gian / mặt trăng',
            example: 'NASA launched a historic space mission to explore Mars.',
          },
          {
            phrase: 'mission statement',
            vi: 'tuyên ngôn sứ mệnh của doanh nghiệp',
            example: 'The company’s mission statement emphasizes sustainable green innovation.',
          },
        ],
        examples: [
          {
            en: 'Astronauts successfully completed their delicate repair mission on the International Space Station.',
            vi: 'Các phi hành gia đã hoàn thành xuất sắc nhiệm vụ sửa chữa tinh vi trên Trạm Vũ trụ Quốc tế.',
          },
        ],
        synonyms: [
          { term: 'assignment', vi: 'nhiệm vụ' },
          { term: 'calling', vi: 'tiếng gọi sứ mệnh' },
          { term: 'undertaking', vi: 'công cuộc đảm nhận' },
        ],
        antonyms: [],
      },

      // 8. Submit (Sus + Mit)
      {
        id: 'submit',
        term: 'submit',
        partOfSpeech: 'v.',
        phoneticUs: '/səbˈmɪt/',
        phoneticUk: '/səbˈmɪt/',
        definitionVi: 'nộp bài / đệ trình hồ sơ; chịu khuất phục, quy phục',
        definitionEn: 'present a proposal, application, or other document to a person or body for consideration; yield to superior force',
        cefrLevel: 'B1',
        roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi' }],
        anatomy: {
          prefix: 'sub-',
          prefixVi: 'từ dưới lên (under, below)',
          rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi' }],
          formula: 'sub- (dưới lên) + mit (gửi) → submit (gửi tài liệu từ cấp dưới lên cấp trên phê duyệt; cúi mình chịu khuất phục)',
          explanation: 'Bắt nguồn từ tiếng Latin "submittere" (hạ mình xuống, dâng nộp lên trên).',
        },
        wordFamily: {
          nouns: [
            { term: 'submission', vi: 'sự đệ trình hồ sơ, sự quy phục' },
          ],
          verbs: [{ term: 'submit', vi: 'nộp hồ sơ, quy phục' }],
          adjectives: [
            { term: 'submissive', vi: 'ngoan ngoãn, phục tùng' },
          ],
          adverbs: [{ term: 'submissively', vi: 'một cách phục tùng' }],
        },
        collocations: [
          {
            phrase: 'submit an application / essay',
            vi: 'nộp đơn ứng tuyển / bài luận',
            example: 'Students must submit their final essays online before midnight.',
          },
          {
            phrase: 'refuse to submit to tyranny',
            vi: 'từ chối khuất phục trước bạo quyền',
            example: 'Freedom fighters refused to submit to authoritarian rule.',
          },
        ],
        examples: [
          {
            en: 'Please submit your tax returns before the official annual deadline.',
            vi: 'Vui lòng nộp tờ khai thuế của bạn trước thời hạn thường niên chính thức.',
          },
        ],
        synonyms: [
          { term: 'hand in', vi: 'nộp' },
          { term: 'tender', vi: 'đệ trình' },
          { term: 'yield', vi: 'nhượng bộ' },
        ],
        antonyms: [
          { term: 'withhold', vi: 'giữ lại không nộp' },
          { term: 'resist', vi: 'kháng cự' },
        ],
      },

      // 9. Transmit (Trans + Mit)
      {
        id: 'transmit',
        term: 'transmit',
        partOfSpeech: 'v.',
        phoneticUs: '/trænzˈmɪt/',
        phoneticUk: '/trænzˈmɪt/',
        definitionVi: 'truyền phát tín hiệu/năng lượng, lây truyền bệnh',
        definitionEn: 'to pass something from one person or place to another; broadcast or send out an electrical signal',
        cefrLevel: 'B1',
        roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi, phóng' }],
        anatomy: {
          prefix: 'trans-',
          prefixVi: 'xuyên qua (across)',
          rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi' }],
          formula: 'trans- (xuyên qua) + mit (gửi) → transmit (truyền phát xuyên không gian và phương tiện)',
          explanation: 'Gửi tín hiệu hoặc dữ liệu đi qua một phương tiện truyền thông.',
        },
        wordFamily: {
          nouns: [
            { term: 'transmission', vi: 'sự truyền phát tín hiệu, hộp số xe' },
            { term: 'transmitter', vi: 'máy phát tín hiệu sóng' },
          ],
          verbs: [{ term: 'transmit', vi: 'truyền phát' }],
          adjectives: [{ term: 'transmissible', vi: 'có thể lây truyền được' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'transmit data / signals',
            vi: 'truyền dữ liệu / tín hiệu',
            example: 'Satellites transmit high-speed data across continents.',
          },
          {
            phrase: 'transmit infectious diseases',
            vi: 'lây truyền các bệnh truyền nhiễm',
            example: 'Mosquitoes transmit malaria in tropical rainforest climates.',
          },
        ],
        examples: [
          {
            en: 'Fiber optic cables transmit internet signals at the speed of light.',
            vi: 'Cáp quang truyền các tín hiệu internet với tốc độ ánh sáng.',
          },
        ],
        synonyms: [
          { term: 'broadcast', vi: 'phát sóng' },
          { term: 'relay', vi: 'chuyển tiếp' },
          { term: 'transfer', vi: 'chuyển tải' },
        ],
        antonyms: [
          { term: 'receive', vi: 'nhận lấy' },
          { term: 'block', vi: 'chặn đứng' },
        ],
      },
    ],
  },

  // 5. Pend, Pens
  {
    id: 'pend_pens',
    rootName: 'Pend, Pens',
    variants: ['pend', 'pens', 'pendul'],
    meaningEn: 'to hang, weigh, pay, balance',
    meaningVi: 'treo lên, cân đo đong đếm, chi trả, phụ thuộc',
    originLanguage: 'Latin',
    originWord: 'pendere (treo, cân đo) & pensum (đã chi trả)',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "pendere" (treo lên, cân đo trọng lượng vàng bạc trên bàn cân trước khi thanh toán). Gốc từ này phát triển thành các khái niệm phong phú: treo đính thêm vào đuôi (append/appendix), treo mình dựa vào người khác (depend), đang treo lơ lửng chờ giải quyết (pending), con lắc đu đưa đều đặn (pendulum), thả dây dọi thẳng đứng vuông góc (perpendicular), cân đo tiền bạc bù đắp (compensate/expense), và treo lơ lửng/đình chỉ công tác (suspend).',
    orderIndex: 5,
    words: [
      // 1. Append (App + Pend)
      {
        id: 'append',
        term: 'append',
        partOfSpeech: 'v.',
        phoneticUs: '/əˈpend/',
        phoneticUk: '/əˈpend/',
        definitionVi: 'đính kèm, chèn thêm vào cuối tài liệu/hợp đồng',
        definitionEn: 'add something as an attachment or supplement to the end of a written document or file',
        cefrLevel: 'C1',
        roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
        anatomy: {
          prefix: 'ap-',
          prefixVi: 'vào thêm (ad- biến âm thành ap- trước p)',
          rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
          formula: 'ap- (vào thêm) + pend (treo) → append (treo gắn thêm một phần tài liệu vào phía cuối → đính kèm, gắn thêm)',
          explanation: 'Gắn nối thêm một đoạn văn bản hoặc dữ liệu vào phần cuối của tệp hiện có.',
        },
        wordFamily: {
          nouns: [
            { term: 'appendage', vi: 'phần phụ, chi phụ của cơ thể' },
            { term: 'appendix', vi: 'phụ lục sách, ruột thừa' },
          ],
          verbs: [{ term: 'append', vi: 'đính kèm, chèn thêm' }],
          adjectives: [{ term: 'appended', vi: 'được đính kèm' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'append signature to a contract',
            vi: 'ký tên vào cuối hợp đồng',
            example: 'Both chief executives appended their signatures to the merger agreement.',
          },
          {
            phrase: 'append data to a log file',
            vi: 'ghi chèn thêm dữ liệu vào tệp nhật ký',
            example: 'The background script appends system metrics every minute.',
          },
        ],
        examples: [
          {
            en: 'The author appended a detailed bibliography at the end of the academic book.',
            vi: 'Tác giả đã đính kèm một thư mục tài liệu tham khảo chi tiết ở cuối cuốn sách học thuật.',
          },
        ],
        synonyms: [
          { term: 'attach', vi: 'đính kèm' },
          { term: 'affix', vi: 'gắn vào' },
          { term: 'annex', vi: 'sáp nhập thêm' },
        ],
        antonyms: [
          { term: 'detach', vi: 'tách rời' },
          { term: 'remove', vi: 'loại bỏ' },
        ],
      },

      // 2. Appendix (Appendix)
      {
        id: 'appendix',
        term: 'appendix',
        partOfSpeech: 'n.',
        phoneticUs: '/əˈpendɪks/',
        phoneticUk: '/əˈpendɪks/',
        definitionVi: 'phần phụ lục ở cuối sách/báo cáo; ruột thừa trong cơ thể',
        definitionEn: 'a section of additional information at the end of a book; a small pouch attached to the large intestine',
        cefrLevel: 'B2',
        roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
        anatomy: {
          prefix: 'ap-',
          prefixVi: 'vào thêm',
          rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
          suffix: '-ix',
          suffixVi: 'danh từ chỉ phần phụ',
          formula: 'ap- (vào) + pend (treo) + -ix → appendix (mẩu ruột nhỏ treo ở manh tràng; phần phụ lục treo thêm ở cuối sách)',
          explanation: 'Phần bổ sung nằm tách rời nhưng gắn liền vào cấu trúc chính.',
        },
        wordFamily: {
          nouns: [
            { term: 'appendix', vi: 'phụ lục, ruột thừa' },
            { term: 'appendices', vi: 'các phụ lục (số nhiều)' },
            { term: 'appendicitis', vi: 'bệnh viêm ruột thừa cấp' },
          ],
          verbs: [],
          adjectives: [],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'see Appendix B for details',
            vi: 'xem Phụ lục B để biết chi tiết',
            example: 'Full statistical tables are provided in Appendix B of the thesis.',
          },
          {
            phrase: 'inflamed appendix',
            vi: 'ruột thừa bị viêm sưng',
            example: 'Surgeons performed an emergency operation to remove his inflamed appendix.',
          },
        ],
        examples: [
          {
            en: 'The legal contract includes three technical appendices explaining compliance criteria.',
            vi: 'Hợp đồng pháp lý bao gồm ba phần phụ lục kỹ thuật giải thích các tiêu chuẩn tuân thủ.',
          },
        ],
        synonyms: [
          { term: 'supplement', vi: 'phần bổ sung' },
          { term: 'addendum', vi: 'phần phụ lục bổ sung' },
          { term: 'postscript', vi: 'tái bút' },
        ],
        antonyms: [
          { term: 'preface', vi: 'lời nói đầu' },
          { term: 'body', vi: 'thân bài chính' },
        ],
      },

      // 3. Depend (De + Pend)
      {
        id: 'depend',
        term: 'depend',
        partOfSpeech: 'v.',
        phoneticUs: '/dɪˈpend/',
        phoneticUk: '/dɪˈpend/',
        definitionVi: 'phụ thuộc, dựa vào, trông cậy, tùy thuộc vào hoàn cảnh',
        definitionEn: 'be controlled or determined by; rely on someone for financial or emotional support',
        cefrLevel: 'A2',
        roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
        anatomy: {
          prefix: 'de-',
          prefixVi: 'xuống dưới (downward)',
          rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
          formula: 'de- (xuống) + pend (treo) → depend (treo mình bám vào người khác → phụ thuộc, dựa vào)',
          explanation: 'Treo sự tồn tại của mình xuống sự nâng đỡ của một nguồn lực khác.',
        },
        wordFamily: {
          nouns: [
            { term: 'dependence', vi: 'sự phụ thuộc' },
            { term: 'independence', vi: 'nền độc lập, sự tự chủ' },
            { term: 'dependability', vi: 'sự đáng tin cậy' },
          ],
          verbs: [{ term: 'depend', vi: 'phụ thuộc' }],
          adjectives: [
            { term: 'dependent', vi: 'phụ thuộc vào' },
            { term: 'independent', vi: 'độc lập, tự lập' },
            { term: 'dependable', vi: 'đáng tin cậy' },
          ],
          adverbs: [
            { term: 'independently', vi: 'một cách độc lập' },
            { term: 'dependably', vi: 'một cách đáng tin cậy' },
          ],
        },
        collocations: [
          {
            phrase: 'depend on / upon',
            vi: 'phụ thuộc vào ai / cái gì',
            example: 'Our picnic plans depend entirely on the weekend weather.',
          },
          {
            phrase: 'depend on renewable energy',
            vi: 'dựa vào năng lượng tái tạo',
            example: 'Islands increasingly depend on solar and wind power for electricity.',
          },
        ],
        examples: [
          {
            en: 'Children depend on their parents for guidance, food, and emotional shelter.',
            vi: 'Trẻ em dựa vào cha mẹ để được chỉ dạy, nuôi dưỡng và chở che tinh thần.',
          },
        ],
        synonyms: [
          { term: 'rely', vi: 'trông cậy' },
          { term: 'hinge on', vi: 'xoay quanh phụ thuộc' },
          { term: 'count on', vi: 'tin tưởng cậy nhờ' },
        ],
        antonyms: [
          { term: 'stand alone', vi: 'tự lập' },
        ],
      },

      // 4. Pending (Pending)
      {
        id: 'pending',
        term: 'pending',
        partOfSpeech: 'adj., prep.',
        phoneticUs: '/ˈpendɪŋ/',
        phoneticUk: '/ˈpendɪŋ/',
        definitionVi: 'đang chờ xử lý / giải quyết (adj); trong khi chờ đợi (prep)',
        definitionEn: 'awaiting decision or settlement; about to happen; until (something) happens',
        cefrLevel: 'B2',
        roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
        anatomy: {
          rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
          suffix: '-ing',
          suffixVi: 'tính từ chỉ trạng thái',
          formula: 'pend (treo) + -ing → pending (vấn đề đang bị treo lơ lửng chưa chốt hạ → đang chờ xử lý)',
          explanation: 'Một quyết định hoặc thủ tục vẫn đang trong trạng thái treo chưa hoàn tất.',
        },
        wordFamily: {
          nouns: [],
          verbs: [{ term: 'pend', vi: 'chờ xử lý' }],
          adjectives: [{ term: 'pending', vi: 'đang chờ giải quyết, sắp xảy ra' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'pending approval / investigation',
            vi: 'đang chờ phê duyệt / điều tra',
            example: 'The trademark application is currently pending approval from the patent office.',
          },
          {
            phrase: 'pending the outcome of',
            vi: 'trong khi chờ đợi kết quả của',
            example: 'The trial was adjourned pending the outcome of forensic DNA tests.',
          },
        ],
        examples: [
          {
            en: 'The loan request has a pending status in the bank system.',
            vi: 'Yêu cầu vay vốn đang ở trạng thái chờ xử lý trong hệ thống ngân hàng.',
          },
        ],
        synonyms: [
          { term: 'awaiting', vi: 'đang ngóng chờ' },
          { term: 'unresolved', vi: 'chưa giải quyết' },
          { term: 'imminent', vi: 'sắp xảy ra' },
        ],
        antonyms: [
          { term: 'settled', vi: 'đã giải quyết xong' },
          { term: 'resolved', vi: 'đã hoàn tất' },
        ],
      },

      // 5. Pendulum (Pendulum)
      {
        id: 'pendulum',
        term: 'pendulum',
        partOfSpeech: 'n.',
        phoneticUs: '/ˈpendʒələm/',
        phoneticUk: '/ˈpendjələm/',
        definitionVi: 'con lắc đồng hồ; sự dao động qua lại giữa hai thái cực',
        definitionEn: 'a weight hung from a fixed point so that it can swing freely, especially in a clock mechanism',
        cefrLevel: 'B2',
        roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
        anatomy: {
          rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
          suffix: '-ulum',
          suffixVi: 'dụng cụ nhỏ (tiếng Latin)',
          formula: 'pend (treo) + -ulum → pendulum (quả nặng treo đu đưa nhịp nhàng → con lắc)',
          explanation: 'Vật thể treo tự do dao động qua lại do tác dụng của trọng lực.',
        },
        wordFamily: {
          nouns: [{ term: 'pendulum', vi: 'con lắc' }],
          verbs: [],
          adjectives: [
            { term: 'pendular', vi: 'dao động như con lắc' },
            { term: 'pendulous', vi: 'treo lủng lẳng' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'the pendulum swings',
            vi: 'con lắc dao động (thời thế/dư luận đảo chiều)',
            example: 'The political pendulum swung from conservative to liberal in the recent election.',
          },
          {
            phrase: 'pendulum clock',
            vi: 'đồng hồ quả lắc',
            example: 'The antique grandfather pendulum clock chimed every hour on the dot.',
          },
        ],
        examples: [
          {
            en: 'Galileo discovered that the period of a pendulum depends solely on its length.',
            vi: 'Galileo đã phát hiện ra rằng chu kỳ của một con lắc chỉ phụ thuộc duy nhất vào chiều dài của nó.',
          },
        ],
        synonyms: [
          { term: 'oscillator', vi: 'bộ dao động' },
          { term: 'swing', vi: 'sự đung đưa' },
        ],
        antonyms: [
          { term: 'equilibrium', vi: 'trạng thái cân bằng đứng yên' },
        ],
      },

      // 6. Perpendicular (Perpendicular)
      {
        id: 'perpendicular',
        term: 'perpendicular',
        partOfSpeech: 'adj., n.',
        phoneticUs: '/ˌpɜːrpənˈdɪkjələr/',
        phoneticUk: '/ˌpɜːpənˈdɪkjələ(r)/',
        definitionVi: 'vuông góc, thẳng đứng (adj); đường vuông góc (n)',
        definitionEn: 'at an angle of 90° to a given line, plane, or surface; vertical, straight up and down',
        cefrLevel: 'B2',
        roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
        anatomy: {
          prefix: 'per-',
          prefixVi: 'hoàn toàn, thấu suốt (thoroughly)',
          rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo (dây dọi)' }],
          suffix: '-icular',
          suffixVi: 'tính từ',
          formula: 'per- (hoàn toàn) + pend (thả dây dọi) + -icular → perpendicular (thả dây dọi thẳng đứng tạo góc 90 độ → vuông góc)',
          explanation: 'Bắt nguồn từ dụng cụ dây dọi có quả nặng treo của thợ nề La Mã để đo góc vuông thẳng đứng.',
        },
        wordFamily: {
          nouns: [
            { term: 'perpendicular', vi: 'đường vuông góc' },
            { term: 'perpendicularity', vi: 'tính vuông góc' },
          ],
          verbs: [],
          adjectives: [{ term: 'perpendicular', vi: 'vuông góc, thẳng đứng' }],
          adverbs: [{ term: 'perpendicularly', vi: 'một cách vuông góc' }],
        },
        collocations: [
          {
            phrase: 'perpendicular to the ground',
            vi: 'vuông góc với mặt đất',
            example: 'The steel support pillars must be strictly perpendicular to the concrete foundation.',
          },
          {
            phrase: 'perpendicular lines',
            vi: 'hai đường thẳng vuông góc',
            example: 'In Cartesian geometry, the X and Y axes are perpendicular lines.',
          },
        ],
        examples: [
          {
            en: 'The sheer cliff rose almost perpendicular above the crashing ocean waves.',
            vi: 'Vách đá dốc đứng sừng sững gần như vuông góc phía trên những con sóng biển cuộn trào.',
          },
        ],
        synonyms: [
          { term: 'vertical', vi: 'thẳng đứng' },
          { term: 'upright', vi: 'dựng đứng' },
          { term: 'orthogonal', vi: 'trực giao vuông góc' },
        ],
        antonyms: [
          { term: 'parallel', vi: 'song song' },
          { term: 'horizontal', vi: 'nằm ngang' },
        ],
      },

      // 7. Compensate (Root Pend & Pens)
      {
        id: 'compensate',
        term: 'compensate',
        partOfSpeech: 'v.',
        phoneticUs: '/ˈkɑːmpənseɪt/',
        phoneticUk: '/ˈkɒmpenseɪt/',
        definitionVi: 'bồi thường thiệt hại, đền bù, trả thù lao cân xứng',
        definitionEn: 'give someone something, typically money, in recognition of loss, suffering, or injury incurred; pay someone for work',
        cefrLevel: 'B2',
        roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
        anatomy: {
          prefix: 'com-',
          prefixVi: 'cùng nhau (together)',
          rootParts: [{ text: 'pens', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'cân đo, chi trả' }],
          suffix: '-ate',
          suffixVi: 'động từ',
          formula: 'com- (cùng) + pens (cân) + -ate → compensate (đặt vật tương đương lên đĩa cân đối trọng → bồi thường cân xứng)',
          explanation: 'Đặt một khoản tiền bồi thường lên bàn cân để lấy lại sự cân bằng cho những mất mát.',
        },
        wordFamily: {
          nouns: [
            { term: 'compensation', vi: 'tiền bồi thường, thù lao' },
            { term: 'pendant', vi: 'mặt dây chuyền ngọc' },
          ],
          verbs: [{ term: 'compensate', vi: 'bồi thường, bù đắp' }],
          adjectives: [{ term: 'compensatory', vi: 'mang tính đền bù' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'compensate for the loss / damage',
            vi: 'bồi thường cho những mất mát / thiệt hại',
            example: 'The insurance company agreed to compensate the homeowner for storm damage.',
          },
          {
            phrase: 'fair financial compensation',
            vi: 'khoản bồi thường tài chính thỏa đáng',
            example: 'Workers demanded fair compensation for overtime shifts.',
          },
        ],
        examples: [
          {
            en: 'Nothing can truly compensate a family for the tragic loss of a loved one.',
            vi: 'Không điều gì có thể thực sự bù đắp cho một gia đình trước sự mất mát bi thương của người thân.',
          },
        ],
        synonyms: [
          { term: 'reimburse', vi: 'hoàn trả' },
          { term: 'indemnify', vi: 'bảo đảm bồi thường' },
          { term: 'offset', vi: 'bù trừ' },
        ],
        antonyms: [
          { term: 'penalize', vi: 'xử phạt' },
          { term: 'deprive', vi: 'tước đoạt' },
        ],
      },

      // 8. Suspend (Sus + Pend)
      {
        id: 'suspend',
        term: 'suspend',
        partOfSpeech: 'v.',
        phoneticUs: '/səˈspend/',
        phoneticUk: '/səˈspend/',
        definitionVi: 'treo lơ lửng, đình chỉ học tập/công tác, tạm hoãn thi hành',
        definitionEn: 'hang something from somewhere; temporarily prevent from continuing or being in force; debar from an office or school',
        cefrLevel: 'B2',
        roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
        anatomy: {
          prefix: 'sus-',
          prefixVi: 'từ dưới lên, lơ lửng (sub- biến âm thành sus- trước p)',
          rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
          formula: 'sus- (lơ lửng) + pend (treo) → suspend (treo lơ lửng trên không trung; tạm ngưng hoạt động chờ xử lý)',
          explanation: 'Treo vật thể trên cao hoặc tạm thời đóng băng quyền hạn của một người.',
        },
        wordFamily: {
          nouns: [
            { term: 'suspension', vi: 'sự đình chỉ, hệ thống giảm xóc, cầu treo' },
            { term: 'suspense', vi: 'sự hồi hộp, kịch tính' },
          ],
          verbs: [{ term: 'suspend', vi: 'treo, đình chỉ' }],
          adjectives: [
            { term: 'suspended', vi: 'bị đình chỉ, treo lơ lửng' },
            { term: 'suspenseful', vi: 'đầy hồi hộp kịch tính' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'suspension bridge',
            vi: 'cầu treo dây võng',
            example: 'The Golden Gate Bridge is an iconic suspension bridge spanning the strait.',
          },
          {
            phrase: 'suspend operations / license',
            vi: 'tạm ngưng hoạt động / đình chỉ giấy phép',
            example: 'The airline was forced to suspend international flight operations during the storm.',
          },
          {
            phrase: 'keep in suspense',
            vi: 'khiến ai đó hồi hộp chờ đợi',
            example: 'The mystery novel keeps readers in nail-biting suspense until the final chapter.',
          },
        ],
        examples: [
          {
            en: 'The student was suspended from high school for three days due to fighting.',
            vi: 'Học sinh đó đã bị đình chỉ học ba ngày do đánh nhau.',
          },
        ],
        synonyms: [
          { term: 'hang', vi: 'treo' },
          { term: 'postpone', vi: 'hoãn lại' },
          { term: 'interrupt', vi: 'ngắt quãng' },
          { term: 'debar', vi: 'đình chỉ' },
        ],
        antonyms: [
          { term: 'reinstate', vi: 'phục hồi chức vụ' },
          { term: 'resume', vi: 'tiếp tục trở lại' },
        ],
      },
    ],
  },

  // 6. Press
  {
    id: 'press',
    rootName: 'Press',
    variants: ['press'],
    meaningEn: 'to push, squeeze, force, weigh down',
    meaningVi: 'ép, ấn, đè, nén, thúc ép, báo chí',
    originLanguage: 'Latin',
    originWord: 'premere, pressus',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "premere" (ấn đè, nén chặt) và dạng quá khứ "pressus". Gốc từ này tạo nên toàn bộ các sắc thái của lực nén: nén ép dữ liệu (compress), đè nặng tâm trạng chán nản (depress), ép suy nghĩ trong lòng tuôn ra ngoài bày tỏ (express), khắc sâu ấn tượng vào tâm trí (impress), dùng quyền lực bạo ngược đè nén (oppress), kìm nén cảm xúc cá nhân (repress), sức ép áp suất và báo chí (press/pressure), và đè bẹp dập tắt triệt để (suppress).',
    orderIndex: 6,
    words: [
      // 1. Compress (Com + Press)
      {
        id: 'compress',
        term: 'compress',
        partOfSpeech: 'v., n.',
        phoneticUs: '/kəmˈpres/ (v) /ˈkɑːmpres/ (n)',
        phoneticUk: '/kəmˈpres/ (v) /ˈkɒmpres/ (n)',
        definitionVi: 'nén ép lại, thu nhỏ dung lượng tệp tin (v); gạc ép y tế (n)',
        definitionEn: 'flatten by pressure; squeeze or force into a smaller space; reduce the size of a data file',
        cefrLevel: 'B2',
        roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
        anatomy: {
          prefix: 'com-',
          prefixVi: 'cùng nhau (together)',
          rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'nén, ép' }],
          formula: 'com- (cùng nhau) + press (ép) → compress (ép chặt các phần tử lại cùng nhau → nén, thu nhỏ dung lượng)',
          explanation: 'Tác dụng lực để giảm kích thước hoặc không gian chiếm dụng của một vật thể hay tập tin.',
        },
        wordFamily: {
          nouns: [
            { term: 'compression', vi: 'sự nén, thuật toán nén dữ liệu' },
            { term: 'compressor', vi: 'máy nén khí' },
            { term: 'compress', vi: 'gạc ép y tế' },
          ],
          verbs: [{ term: 'compress', vi: 'nén, ép lại' }],
          adjectives: [{ term: 'compressible', vi: 'có thể nén được' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'compress files into a zip archive',
            vi: 'nén các tệp tin vào kho lưu trữ zip',
            example: 'Software engineers compress large multimedia files to speed up web transfers.',
          },
          {
            phrase: 'cold compress',
            vi: 'gạc chườm lạnh',
            example: 'Apply a cold compress to the swollen ankle to reduce pain and inflammation.',
          },
        ],
        examples: [
          {
            en: 'The engine compresses the fuel-air mixture before ignition.',
            vi: 'Động cơ nén hỗn hợp nhiên liệu - không khí trước khi đánh lửa.',
          },
        ],
        synonyms: [
          { term: 'squeeze', vi: 'bóp chặt' },
          { term: 'condense', vi: 'cô đặc' },
          { term: 'compact', vi: 'làm nhỏ gọn' },
        ],
        antonyms: [
          { term: 'expand', vi: 'giãn nở' },
          { term: 'decompress', vi: 'giải nén' },
        ],
      },

      // 2. Depress (De + Press)
      {
        id: 'depress',
        term: 'depress',
        partOfSpeech: 'v.',
        phoneticUs: '/dɪˈpres/',
        phoneticUk: '/dɪˈpres/',
        definitionVi: 'làm chán nản, gây suy thoái kinh tế, ấn phím xuống',
        definitionEn: 'make someone feel utterly dispirited or dejected; reduce the level of trade or economic activity; push down',
        cefrLevel: 'B2',
        roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
        anatomy: {
          prefix: 'de-',
          prefixVi: 'xuống dưới (downward)',
          rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'đè, nén' }],
          formula: 'de- (xuống dưới) + press (đè) → depress (đè nặng tâm trạng hoặc nền kinh tế chìm xuống → làm trầm cảm, làm suy thoái, ấn phím)',
          explanation: 'Tác động kéo giảm tinh thần, thị trường hoặc bề mặt vật lý xuống dưới.',
        },
        wordFamily: {
          nouns: [
            { term: 'depression', vi: 'bệnh trầm cảm, cuộc đại suy thoái kinh tế' },
            { term: 'depressant', vi: 'thuốc ức chế thần kinh làm dịu' },
          ],
          verbs: [{ term: 'depress', vi: 'làm nản lòng, ấn xuống' }],
          adjectives: [
            { term: 'depressed', vi: 'chán nản, suy thoái' },
            { term: 'depressing', vi: 'ảm đạm, gây nản lòng' },
          ],
          adverbs: [{ term: 'depressingly', vi: 'một cách ảm đạm' }],
        },
        collocations: [
          {
            phrase: 'depress the economy',
            vi: 'làm suy thoái nền kinh tế',
            example: 'High inflation and trade tariffs severely depressed consumer spending.',
          },
          {
            phrase: 'clinical depression',
            vi: 'chứng trầm cảm lâm sàng',
            example: 'Psychotherapy and medication help patients recover from clinical depression.',
          },
        ],
        examples: [
          {
            en: 'Gloomy and rainy weather always seems to depress my mood.',
            vi: 'Thời tiết âm u và mưa gió dường như luôn làm tâm trạng tôi chùng xuống.',
          },
        ],
        synonyms: [
          { term: 'discourage', vi: 'làm nản lòng' },
          { term: 'sadden', vi: 'làm buồn rầu' },
          { term: 'devalue', vi: 'làm sụt giảm' },
        ],
        antonyms: [
          { term: 'cheer up', vi: 'cổ vũ làm vui' },
          { term: 'stimulate', vi: 'kích thích' },
          { term: 'boost', vi: 'thúc đẩy tăng trưởng' },
        ],
      },

      // 3. Express (Ex + Press)
      {
        id: 'express',
        term: 'express',
        partOfSpeech: 'v., adj., adv., n.',
        phoneticUs: '/ɪkˈspres/',
        phoneticUk: '/ɪkˈspres/',
        definitionVi: 'bày tỏ cảm xúc, thể hiện ý kiến (v); hỏa tốc, tốc hành (adj/adv)',
        definitionEn: 'convey a thought or feeling in words or by gestures and conduct; fast and direct without stops',
        cefrLevel: 'B1',
        roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
        anatomy: {
          prefix: 'ex-',
          prefixVi: 'ra ngoài (outward)',
          rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'ép, nén' }],
          formula: 'ex- (ra ngoài) + press (ép) → express (ép suy nghĩ trong lòng tuôn ra ngoài → bày tỏ; tàu chạy nhanh không dừng → tốc hành)',
          explanation: 'Đẩy những suy nghĩ ẩn sâu trong lòng ra ngoài thành lời nói hoặc cử chỉ.',
        },
        wordFamily: {
          nouns: [
            { term: 'expression', vi: 'sự biểu cảm, nét mặt, thành ngữ, biểu thức' },
            { term: 'expressiveness', vi: 'sự truyền cảm' },
            { term: 'express', vi: 'chuyến tàu tốc hành' },
          ],
          verbs: [{ term: 'express', vi: 'bày tỏ, thể hiện' }],
          adjectives: [
            { term: 'expressive', vi: 'truyền cảm, dồi dào biểu cảm' },
            { term: 'inexpressible', vi: 'không tả xiết' },
          ],
          adverbs: [
            { term: 'expressively', vi: 'một cách truyền cảm' },
            { term: 'expressly', vi: 'rõ ràng dứt khoát' },
          ],
        },
        collocations: [
          {
            phrase: 'express gratitude',
            vi: 'bày tỏ lòng biết ơn',
            example: 'I want to express my deepest gratitude to my dedicated mentors.',
          },
          {
            phrase: 'express delivery / train',
            vi: 'chuyển phát hỏa tốc / tàu tốc hành',
            example: 'The package was sent via express delivery and arrived the next morning.',
          },
        ],
        examples: [
          {
            en: 'Artists express profound emotions through their paintings.',
            vi: 'Các nghệ sĩ thể hiện những cảm xúc sâu sắc qua tranh vẽ của họ.',
          },
        ],
        synonyms: [
          { term: 'voice', vi: 'lên tiếng nói ra' },
          { term: 'convey', vi: 'truyền đạt' },
          { term: 'articulate', vi: 'phát biểu rành mạch' },
        ],
        antonyms: [
          { term: 'suppress', vi: 'kìm nén lại' },
          { term: 'conceal', vi: 'che giấu' },
        ],
      },

      // 4. Impress (Im + Press)
      {
        id: 'impress',
        term: 'impress',
        partOfSpeech: 'v.',
        phoneticUs: '/ɪmˈpres/',
        phoneticUk: '/ɪmˈpres/',
        definitionVi: 'gây ấn tượng sâu sắc, làm cảm phục, đóng dấu in nổi',
        definitionEn: 'make someone feel admiration and respect; apply a mark to something with pressure',
        cefrLevel: 'B1',
        roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
        anatomy: {
          prefix: 'im-',
          prefixVi: 'vào trong (into, upon)',
          rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'ấn, đóng dấu' }],
          formula: 'im- (vào trong) + press (ấn) → impress (khắc sâu một dấu ấn vào tâm trí người khác → gây ấn tượng sâu sắc)',
          explanation: 'Tạo nên một tác động tâm lý mạnh mẽ khiến người khác thán phục.',
        },
        wordFamily: {
          nouns: [
            { term: 'impression', vi: 'ấn tượng, cảm nhận đầu tiên' },
            { term: 'impressionism', vi: 'trường phái ấn tượng' },
          ],
          verbs: [{ term: 'impress', vi: 'gây ấn tượng' }],
          adjectives: [
            { term: 'impressive', vi: 'ấn tượng, hùng vĩ' },
            { term: 'unimpressed', vi: 'không hề ấn tượng' },
          ],
          adverbs: [{ term: 'impressively', vi: 'một cách ấn tượng' }],
        },
        collocations: [
          {
            phrase: 'make a good first impression',
            vi: 'tạo ấn tượng ban đầu tốt đẹp',
            example: 'Dressing professionally helps candidates make a great first impression during interviews.',
          },
          {
            phrase: 'impress upon someone',
            vi: 'nhấn mạnh cho ai hiểu rõ tầm quan trọng',
            example: 'The teacher impressed upon the students the importance of daily practice.',
          },
        ],
        examples: [
          {
            en: 'Her fluent speech and quick problem-solving skills impressed the entire interview panel.',
            vi: 'Khả năng ăn nói lưu loát và kỹ năng xử lý vấn đề nhanh nhạy của cô ấy đã gây ấn tượng với toàn bộ hội đồng phỏng vấn.',
          },
        ],
        synonyms: [
          { term: 'dazzle', vi: 'làm lóa mắt thán phục' },
          { term: 'awe', vi: 'làm kinh ngạc' },
          { term: 'influence', vi: 'gây ảnh hưởng' },
        ],
        antonyms: [
          { term: 'disappoint', vi: 'làm thất vọng' },
          { term: 'bore', vi: 'làm chán ngắt' },
        ],
      },

      // 5. Oppress (Op + Press)
      {
        id: 'oppress',
        term: 'oppress',
        partOfSpeech: 'v.',
        phoneticUs: '/əˈpres/',
        phoneticUk: '/əˈpres/',
        definitionVi: 'áp bức, đàn áp, bóc lột bằng bạo quyền',
        definitionEn: 'keep someone in subservience and hardship, especially by the unjust exercise of authority',
        cefrLevel: 'C1',
        roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
        anatomy: {
          prefix: 'op-',
          prefixVi: 'chống lại, đè nặng (ob- biến âm thành op- trước p)',
          rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'đè, ép' }],
          formula: 'op- (đè nặng) + press (ép) → oppress (dùng quyền lực bạo ngược đè nặng lên người dân → áp bức, đàn áp, bóc lột)',
          explanation: 'Sử dụng quyền lực độc tài đè nén tự do và quyền con người.',
        },
        wordFamily: {
          nouns: [
            { term: 'oppression', vi: 'sự áp bức, chế độ bạo quyền' },
            { term: 'oppressor', vi: 'kẻ áp bức, kẻ bóc lột' },
          ],
          verbs: [{ term: 'oppress', vi: 'áp bức, đàn áp' }],
          adjectives: [
            { term: 'oppressive', vi: 'áp bức bạo ngược, ngột ngạt khó thở' },
          ],
          adverbs: [{ term: 'oppressively', vi: 'một cách ngột ngạt' }],
        },
        collocations: [
          {
            phrase: 'oppressive regime / laws',
            vi: 'chế độ / luật lệ hà khắc áp bức',
            example: 'Citizens revolted against the corrupt and oppressive military regime.',
          },
          {
            phrase: 'oppressive heat and humidity',
            vi: 'cái nóng ẩm ngột ngạt đè nặng',
            example: 'The oppressive summer heat made it difficult to work outdoors.',
          },
        ],
        examples: [
          {
            en: 'Dictators use censorship and secret police to oppress political opposition.',
            vi: 'Những kẻ độc tài sử dụng sự kiểm duyệt và cảnh sát mật để đàn áp phe đối lập chính trị.',
          },
        ],
        synonyms: [
          { term: 'persecute', vi: 'ngược đãi đàn áp' },
          { term: 'tyrannize', vi: 'áp bức chuyên chế' },
          { term: 'subjugate', vi: 'khuất phục' },
        ],
        antonyms: [
          { term: 'liberate', vi: 'giải phóng' },
          { term: 'free', vi: 'trả tự do' },
        ],
      },

      // 6. Repress (Re + Press)
      {
        id: 'repress',
        term: 'repress',
        partOfSpeech: 'v.',
        phoneticUs: '/rɪˈpres/',
        phoneticUk: '/rɪˈpres/',
        definitionVi: 'kìm nén cảm xúc bản thân, trấn áp bạo loạn',
        definitionEn: 'subdue someone or something by force; restrain or prevent the expression or development of an emotion',
        cefrLevel: 'C1',
        roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
        anatomy: {
          prefix: 're-',
          prefixVi: 'ngược lại, kìm lại (back)',
          rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'đè, nén' }],
          formula: 're- (lùi lại) + press (đè) → repress (dùng ý chí đè lùi cảm xúc hoặc dùng vũ lực dập tắt bạo loạn → kìm nén, trấn áp)',
          explanation: 'Ngăn chặn không cho cảm xúc hoặc hành vi phản kháng bộc phát.',
        },
        wordFamily: {
          nouns: [
            { term: 'repression', vi: 'sự kìm nén tâm lý, sự trấn áp' },
          ],
          verbs: [{ term: 'repress', vi: 'kìm nén, trấn áp' }],
          adjectives: [
            { term: 'repressive', vi: 'có tính đàn áp, kìm hãm' },
            { term: 'repressed', vi: 'bị ức chế tâm lý' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'repress painful memories',
            vi: 'kìm nén những ký ức đau buồn',
            example: 'Trauma survivors often unconsciously repress painful childhood memories.',
          },
          {
            phrase: 'repress a rebellion',
            vi: 'trấn áp một cuộc nổi loạn',
            example: 'The royal army was sent to quickly repress the peasant rebellion.',
          },
        ],
        examples: [
          {
            en: 'She tried to repress her anger and maintain a polite smile during the meeting.',
            vi: 'Cô ấy cố kìm nén cơn giận và giữ nụ cười lịch thiệp trong suốt cuộc họp.',
          },
        ],
        synonyms: [
          { term: 'restrain', vi: 'kìm giữ' },
          { term: 'quell', vi: 'dẹp yên' },
          { term: 'subdue', vi: 'khống chế' },
        ],
        antonyms: [
          { term: 'express', vi: 'bày tỏ' },
          { term: 'vent', vi: 'xả ra' },
          { term: 'unleash', vi: 'bộc phát' },
        ],
      },

      // 7. Pressure (Root Press)
      {
        id: 'pressure',
        term: 'pressure',
        partOfSpeech: 'n., v.',
        phoneticUs: '/ˈpreʃər/',
        phoneticUk: '/ˈpreʃə(r)/',
        definitionVi: 'áp suất vật lý, áp lực tâm lý căng thẳng (n); gây sức ép (v)',
        definitionEn: 'continuous physical force exerted on or against an object; the use of persuasion or intimidation to make someone do something',
        cefrLevel: 'B1',
        roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
        anatomy: {
          rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'ấn, nén, ép' }],
          suffix: '-ure',
          suffixVi: 'danh từ chỉ lực / trạng thái',
          formula: 'press (nén ép) + -ure → pressure (lực ép vật lý, áp suất khí quyển, áp lực căng thẳng tâm lý)',
          explanation: 'Lực tác dụng vuông góc lên một đơn vị diện tích, hoặc gánh nặng tâm lý do kỳ vọng tạo ra.',
        },
        wordFamily: {
          nouns: [
            { term: 'pressure', vi: 'áp lực, áp suất' },
            { term: 'press', vi: 'máy in, báo chí truyền thông' },
          ],
          verbs: [{ term: 'pressure', vi: 'thúc ép, gây sức ép' }, { term: 'press', vi: 'ấn nút' }],
          adjectives: [{ term: 'pressurized', vi: 'được điều áp' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'blood pressure',
            vi: 'huyết áp',
            example: 'Regular cardiovascular exercise helps maintain healthy blood pressure levels.',
          },
          {
            phrase: 'under immense pressure',
            vi: 'chịu áp lực nặng nề',
            example: 'Surgeons work remarkably well under immense psychological pressure.',
          },
          {
            phrase: 'peer pressure',
            vi: 'áp lực từ bạn bè đồng trang lứa',
            example: 'Teenagers often succumb to peer pressure regarding fashion and habits.',
          },
        ],
        examples: [
          {
            en: 'Atmospheric pressure decreases as you climb higher up a mountain.',
            vi: 'Áp suất khí quyển giảm dần khi bạn leo lên càng cao trên đỉnh núi.',
          },
        ],
        synonyms: [
          { term: 'stress', vi: 'căng thẳng' },
          { term: 'strain', vi: 'sức căng' },
          { term: 'tension', vi: 'áp lực' },
        ],
        antonyms: [
          { term: 'relaxation', vi: 'thư giãn' },
          { term: 'relief', vi: 'sự giải tỏa' },
        ],
      },

      // 8. Suppress (Sus + Press)
      {
        id: 'suppress',
        term: 'suppress',
        partOfSpeech: 'v.',
        phoneticUs: '/səˈpres/',
        phoneticUk: '/səˈpres/',
        definitionVi: 'dập tắt (ngọn lửa/dịch bệnh), ức chế miễn dịch, ngăn chặn thông tin rò rỉ',
        definitionEn: 'forcibly put an end to; prevent the development, action, or expression of; prevent the dissemination of information',
        cefrLevel: 'B2',
        roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
        anatomy: {
          prefix: 'sus-',
          prefixVi: 'dưới đáy, chặn từ gốc (sub- biến âm thành sus- trước p)',
          rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'đè, nén' }],
          formula: 'sus- (dưới) + press (đè) → suppress (đè bẹp từ gốc không cho trồi lên → dập tắt ngọn lửa, ức chế miễn dịch, giấu kín thông tin)',
          explanation: 'Dập tắt hoàn toàn một tiến trình hoặc thông tin không cho phát triển.',
        },
        wordFamily: {
          nouns: [
            { term: 'suppression', vi: 'sự dập tắt, sự ức chế' },
            { term: 'suppressant', vi: 'thuốc ức chế (vd: thuốc giảm ho cough suppressant)' },
          ],
          verbs: [{ term: 'suppress', vi: 'dập tắt, ức chế' }],
          adjectives: [{ term: 'suppressive', vi: 'có tính ức chế' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'suppress the immune system',
            vi: 'ức chế hệ thống miễn dịch',
            example: 'Immunosuppressive drugs prevent organ rejection after transplant surgery.',
          },
          {
            phrase: 'suppress evidence / truth',
            vi: 'che giấu bằng chứng / sự thật',
            example: 'The corrupt corporation attempted to suppress critical safety test reports.',
          },
        ],
        examples: [
          {
            en: 'Firefighters used chemical foam to suppress the dangerous oil refinery blaze.',
            vi: 'Lực lượng lính cứu hỏa đã dùng bọt hóa chất để dập tắt đám cháy nguy hiểm tại nhà máy lọc dầu.',
          },
        ],
        synonyms: [
          { term: 'stifle', vi: 'làm nghẹt thở, dập tắt' },
          { term: 'extinguish', vi: 'dập tắt ngọn lửa' },
          { term: 'conceal', vi: 'che giấu' },
        ],
        antonyms: [
          { term: 'stimulate', vi: 'kích thích' },
          { term: 'disclose', vi: 'tiết lộ' },
          { term: 'foster', vi: 'nuôi dưỡng thúc đẩy' },
        ],
      },
    ],
  },

  // 7. Serv, Servare & Servus
  {
    id: 'serv_servare',
    rootName: 'Serv, Servare',
    variants: ['serv', 'servare', 'servus'],
    meaningEn: 'to keep, protect, guard, serve',
    meaningVi: 'gìn giữ, bảo tồn, bảo vệ (servare) & phục vụ (servus)',
    originLanguage: 'Latin',
    originWord: 'servare (giữ, bảo vệ) & servus (phục vụ)',
    etymologyStory: 'Gốc từ này gồm hai nhánh Latin rất thú vị:\n1. Nhánh SERVARE (giữ gìn, bảo vệ): cùng nhau giữ nguồn tài nguyên (conserve), giữ gìn từ trước không để hư hại (preserve), giữ lại dùng sau hoặc giữ cảm xúc kín đáo (reserve).\n2. Nhánh SERVUS (người hầu, phục vụ): phụng sự chăm sóc (serve), cống hiến tận tụy nên xứng đáng hưởng thành quả (deserve).',
    orderIndex: 7,
    words: [
      // 1. Conserve (Họ Servare)
      {
        id: 'conserve',
        term: 'conserve',
        partOfSpeech: 'v.',
        phoneticUs: '/kənˈsɜːrv/',
        phoneticUk: '/kənˈsɜːv/',
        definitionVi: 'bảo tồn, tiết kiệm nguồn tài nguyên / năng lượng',
        definitionEn: 'protect something from harm or destruction; prevent the wasteful overuse of a resource',
        cefrLevel: 'B2',
        roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ, bảo tồn' }],
        anatomy: {
          prefix: 'con-',
          prefixVi: 'cùng nhau (together)',
          rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'giữ, bảo vệ' }],
          formula: 'con- (cùng nhau) + servare (giữ) → conserve (cùng nhau chung tay gìn giữ nguồn tài nguyên để tránh cạn kiệt → bảo tồn, tiết kiệm)',
          explanation: 'Chủ động gìn giữ và bảo vệ môi trường, năng lượng khỏi sự hoang phí.',
        },
        wordFamily: {
          nouns: [
            { term: 'conservation', vi: 'sự bảo tồn thiên nhiên' },
            { term: 'conservationist', vi: 'nhà bảo tồn môi trường' },
            { term: 'conservatism', vi: 'chủ nghĩa bảo thủ' },
            { term: 'conservatory', vi: 'nhà kính trồng cây / nhạc viện bảo tồn âm nhạc' },
          ],
          verbs: [{ term: 'conserve', vi: 'bảo tồn, tiết kiệm' }],
          adjectives: [
            { term: 'conservative', vi: 'thận trọng, bảo thủ (muốn giữ lại cái cũ)' },
          ],
          adverbs: [{ term: 'conservatively', vi: 'theo cách ước tính thận trọng' }],
        },
        collocations: [
          {
            phrase: 'conserve energy / water',
            vi: 'tiết kiệm năng lượng / nước',
            example: 'Turn off household appliances when not in use to conserve electricity.',
          },
          {
            phrase: 'wildlife conservation',
            vi: 'bảo tồn động vật hoang dã',
            example: 'National parks play a critical role in global wildlife conservation.',
          },
        ],
        examples: [
          {
            en: 'Scientists urge governments to conserve natural rainforest habitats.',
            vi: 'Các nhà khoa học thúc giục các chính phủ bảo tồn môi trường sống rừng mưa tự nhiên.',
          },
        ],
        synonyms: [
          { term: 'save', vi: 'tiết kiệm' },
          { term: 'protect', vi: 'bảo vệ' },
          { term: 'sustain', vi: 'duy trì' },
        ],
        antonyms: [
          { term: 'waste', vi: 'lãng phí' },
          { term: 'squander', vi: 'phung phí' },
          { term: 'deplete', vi: 'làm cạn kiệt' },
        ],
      },

      // 2. Preserve (Họ Servare)
      {
        id: 'preserve',
        term: 'preserve',
        partOfSpeech: 'v., n.',
        phoneticUs: '/prɪˈzɜːrv/',
        phoneticUk: '/prɪˈzɜːv/',
        definitionVi: 'bảo quản thực phẩm/di sản, giữ gìn nguyên trạng (v); mứt quả, khu bảo tồn (n)',
        definitionEn: 'maintain something in its original or existing state; food preserved with sugar',
        cefrLevel: 'B1',
        roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ, bảo tồn' }],
        anatomy: {
          prefix: 'pre-',
          prefixVi: 'từ trước (before)',
          rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ' }],
          formula: 'pre- (trước) + serv (gìn giữ) → preserve (chủ động gìn giữ từ trước để không bị hư hại theo thời gian → bảo quản, gìn giữ di sản)',
          explanation: 'Chăm sóc và xử lý để giữ nguyên chất lượng ban đầu của hiện vật hoặc thực phẩm.',
        },
        wordFamily: {
          nouns: [
            { term: 'preservation', vi: 'sự bảo quản, sự gìn giữ di tích' },
            { term: 'preservative', vi: 'chất bảo quản thực phẩm' },
            { term: 'preserve', vi: 'khu bảo tồn thiên nhiên, mứt trái cây' },
          ],
          verbs: [{ term: 'preserve', vi: 'bảo quản, gìn giữ' }],
          adjectives: [
            { term: 'preserved', vi: 'được bảo quản nguyên vẹn' },
            { term: 'preservable', vi: 'có thể bảo quản được' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'preserve cultural heritage',
            vi: 'gìn giữ bảo tồn di sản văn hóa',
            example: 'The government launched a project to preserve ancient temple architecture.',
          },
          {
            phrase: 'free from preservatives',
            vi: 'không chứa chất bảo quản',
            example: 'Organic food is healthy because it is free from artificial preservatives.',
          },
        ],
        examples: [
          {
            en: 'Museum curators use climate-controlled vaults to preserve centuries-old manuscripts.',
            vi: 'Các chuyên viên bảo tàng sử dụng kho kiểm soát nhiệt độ để bảo tồn những bản thảo cổ.',
          },
        ],
        synonyms: [
          { term: 'protect', vi: 'bảo vệ' },
          { term: 'maintain', vi: 'duy trì' },
          { term: 'safeguard', vi: 'che chở' },
        ],
        antonyms: [
          { term: 'destroy', vi: 'phá hủy' },
          { term: 'spoil', vi: 'làm ôi thiu hỏng' },
        ],
      },

      // 3. Reserve (Họ Servare)
      {
        id: 'reserve',
        term: 'reserve',
        partOfSpeech: 'v., n.',
        phoneticUs: '/rɪˈzɜːrv/',
        phoneticUk: '/rɪˈzɜːv/',
        definitionVi: 'đặt trước (bàn/vé), dự trữ (v); nguồn dự trữ, khu bảo tồn, sự dè dặt (n)',
        definitionEn: 'refrain from using or disposing of; retain for future use; arrange for a seat or room to be kept for someone',
        cefrLevel: 'B1',
        roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ, bảo tồn' }],
        anatomy: {
          prefix: 're-',
          prefixVi: 'lại, phía sau (back, again)',
          rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'giữ' }],
          formula: 're- (lại) + serv (giữ) → reserve (giữ lại một phần cho tương lai → dự trữ, đặt trước chỗ; giữ cảm xúc kín đáo → dè dặt)',
          explanation: 'Không tiêu xài hay bộc lộ hết ngay lập tức mà giữ lại cho lúc cần thiết.',
        },
        wordFamily: {
          nouns: [
            { term: 'reservation', vi: 'sự đặt chỗ trước, khu bảo tồn, mối e ngại' },
            { term: 'reservoir', vi: 'hồ chứa nước nhân tạo / nơi tích tụ' },
            { term: 'reserve', vi: 'nguồn dự trữ' },
          ],
          verbs: [{ term: 'reserve', vi: 'đặt trước, dự trữ, bảo lưu' }],
          adjectives: [
            { term: 'reserved', vi: 'kín đáo, dè dặt (giữ lại cảm xúc); đã được đặt trước' },
          ],
          adverbs: [{ term: 'reservedly', vi: 'một cách kín đáo' }],
        },
        collocations: [
          {
            phrase: 'make a reservation',
            vi: 'đặt bàn / đặt phòng trước',
            example: 'We made a dinner reservation at the restaurant for Saturday evening.',
          },
          {
            phrase: 'foreign exchange reserves',
            vi: 'dự trữ ngoại hối',
            example: 'The central bank increased its foreign exchange reserves to stabilize the currency.',
          },
          {
            phrase: 'nature / game reserve',
            vi: 'khu bảo tồn thiên nhiên',
            example: 'Elephants roam freely inside the national wildlife game reserve.',
          },
        ],
        examples: [
          {
            en: 'He was a quiet and reserved gentleman who rarely spoke about his private life.',
            vi: 'Ông ấy là một quý ông điềm đạm và kín đáo, hiếm khi nói về đời sống riêng tư.',
          },
        ],
        synonyms: [
          { term: 'book', vi: 'đặt chỗ' },
          { term: 'withhold', vi: 'giữ lại' },
          { term: 'store', vi: 'lưu trữ' },
        ],
        antonyms: [
          { term: 'spend', vi: 'chi tiêu hết' },
          { term: 'release', vi: 'bộc lộ ra' },
        ],
      },

      // 4. Serve (Họ Servus)
      {
        id: 'serve',
        term: 'serve',
        partOfSpeech: 'v., n.',
        phoneticUs: '/sɜːrv/',
        phoneticUk: '/sɜːv/',
        definitionVi: 'phục vụ đồ ăn, phụng sự tổ quốc, đáp ứng nhu cầu (v); cú giao bóng (n)',
        definitionEn: 'perform duties or services for another person or an organization; provide food or drink',
        cefrLevel: 'A2',
        roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'phục vụ' }],
        anatomy: {
          rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'phục vụ (gốc servus)' }],
          formula: 'servus (người hầu, phục vụ) → serve (mang đồ ăn/sức lao động chăm sóc người khác → phục vụ, phụng sự)',
          explanation: 'Bắt nguồn từ tiếng Latin "servire" (làm việc phụng sự, hầu hạ, cống hiến).',
        },
        wordFamily: {
          nouns: [
            { term: 'service', vi: 'dịch vụ, sự phục vụ, buổi lễ' },
            { term: 'servant', vi: 'người hầu, người giúp việc' },
            { term: 'server', vi: 'người bồi bàn / máy chủ máy tính' },
            { term: 'servitude', vi: 'cảnh nô lệ, thân phận tôi tớ' },
          ],
          verbs: [{ term: 'serve', vi: 'phục vụ, phụng sự' }],
          adjectives: [{ term: 'serviceable', vi: 'dùng tốt, bền bỉ' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'serve in the military',
            vi: 'phục vụ trong quân đội',
            example: 'Citizens are proud to serve their nation in the armed forces.',
          },
          {
            phrase: 'customer service',
            vi: 'dịch vụ chăm sóc khách hàng',
            example: 'Good customer service builds long-term brand loyalty.',
          },
        ],
        examples: [
          {
            en: 'The restaurant serves authentic Italian pizza baked in wood-fired ovens.',
            vi: 'Nhà hàng phục vụ bánh pizza Ý truyền thống được nướng trong lò củi.',
          },
        ],
        synonyms: [
          { term: 'assist', vi: 'giúp đỡ' },
          { term: 'cater to', vi: 'phục vụ nhu cầu' },
          { term: 'attend', vi: 'chăm sóc' },
        ],
        antonyms: [
          { term: 'command', vi: 'ra lệnh sai bảo' },
          { term: 'neglect', vi: 'bỏ bê' },
        ],
      },

      // 5. Deserve (Họ Servus)
      {
        id: 'deserve',
        term: 'deserve',
        partOfSpeech: 'v.',
        phoneticUs: '/dɪˈzɜːrv/',
        phoneticUk: '/dɪˈzɜːv/',
        definitionVi: 'xứng đáng được nhận (phần thưởng, sự tôn trọng, cơ hội)',
        definitionEn: 'do something or have qualities worthy of reward, punishment, or attention',
        cefrLevel: 'B1',
        roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'phục vụ' }],
        anatomy: {
          prefix: 'de-',
          prefixVi: 'hoàn toàn, tận tâm (thoroughly)',
          rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'phục vụ (gốc servus)' }],
          formula: 'de- (hoàn toàn) + serv (phục vụ) → deserve (cống hiến phục vụ tận tâm trọn vẹn → xứng đáng được hưởng đền đáp)',
          explanation: 'Bắt nguồn từ tiếng Latin "deservire" (phục vụ tận tụy hết mình nên xứng đáng có phần thưởng).',
        },
        wordFamily: {
          nouns: [{ term: 'desert', vi: 'phần thưởng/hình phạt thích đáng' }],
          verbs: [{ term: 'deserve', vi: 'xứng đáng' }],
          adjectives: [
            { term: 'deserving', vi: 'xứng đáng được giúp đỡ/tuyên dương' },
            { term: 'deserved', vi: 'hoàn toàn xứng đáng' },
          ],
          adverbs: [{ term: 'deservedly', vi: 'một cách hoàn toàn xứng đáng' }],
        },
        collocations: [
          {
            phrase: 'deserve a promotion',
            vi: 'xứng đáng được thăng chức',
            example: 'Her exceptional sales performance proved she deserved the executive promotion.',
          },
          {
            phrase: 'richly deserve',
            vi: 'vô cùng xứng đáng',
            example: 'The Nobel laureate richly deserved the global recognition.',
          },
        ],
        examples: [
          {
            en: 'Every dedicated employee deserves fair compensation and workplace respect.',
            vi: 'Mỗi nhân viên tận tụy đều xứng đáng được nhận thù lao công bằng và sự tôn trọng tại nơi làm việc.',
          },
        ],
        synonyms: [
          { term: 'merit', vi: 'đáng được' },
          { term: 'warrant', vi: 'xứng đáng' },
          { term: 'earn', vi: 'giành được do nỗ lực' },
        ],
        antonyms: [
          { term: 'forfeit', vi: 'mất quyền hưởng' },
        ],
      },
    ],
  },

  // 8. Spect, Spic
  {
    id: 'spect_spic',
    rootName: 'Spect, Spic',
    variants: ['spect', 'spic', 'spec', 'spectat'],
    meaningEn: 'to look, see, observe, watch',
    meaningVi: 'nhìn, quan sát, ngắm nghía, soi xét, thị kiến',
    originLanguage: 'Latin',
    originWord: 'specere, spectare',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "specere" (nhìn, soi xét) và "spectare" (ngắm nhìn chăm chú). Gốc từ này là nguồn cội của các khái niệm thị giác phong phú: nhìn xung quanh cẩn trọng (circumspect), đập vào mắt nổi bật (conspicuous), ngóng nhìn mong đợi (expect), nhìn sâu vào trong kiểm tra (inspect), nhìn lại nội tâm (introspect), cái nhìn thấu suốt toàn cảnh (perspective), nhìn về tương lai (prospect), nhìn lại với sự kính phục (respect), nhìn ngược về quá khứ (retrospect), cảnh tượng kỳ vĩ (spectacle) và nhìn từ dưới lên với vẻ nghi ngờ (suspect).',
    orderIndex: 8,
    words: [
      // 1. Circumspect (Circum + Spect)
      {
        id: 'circumspect',
        term: 'circumspect',
        partOfSpeech: 'adj.',
        phoneticUs: '/ˈsɜːrkəmspekt/',
        phoneticUk: '/ˈsɜːkəmspekt/',
        definitionVi: 'thận trọng, cẩn trọng, nhìn trước ngó sau kỹ lưỡng',
        definitionEn: 'wary and unwilling to take risks; cautious and careful considering all circumstances',
        cefrLevel: 'C1',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 'circum-',
          prefixVi: 'xung quanh (around)',
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          formula: 'circum- (xung quanh) + spect (nhìn) → circumspect (nhìn trước ngó sau mọi phía trước khi quyết định → thận trọng, cẩn tắc vô ưu)',
          explanation: 'Người có thói quen quan sát toàn diện môi trường xung quanh để phòng ngừa rủi ro.',
        },
        wordFamily: {
          nouns: [{ term: 'circumspection', vi: 'sự thận trọng, tính cẩn tắc' }],
          verbs: [],
          adjectives: [{ term: 'circumspect', vi: 'thận trọng, dè dặt' }],
          adverbs: [{ term: 'circumspectly', vi: 'một cách thận trọng' }],
        },
        collocations: [
          {
            phrase: 'circumspect approach / attitude',
            vi: 'cách tiếp cận / thái độ thận trọng',
            example: 'Investors adopted a circumspect approach during turbulent market conditions.',
          },
        ],
        examples: [
          {
            en: 'Diplomats must be extremely circumspect when answering sensitive foreign policy questions.',
            vi: 'Các nhà ngoại giao phải cực kỳ thận trọng khi trả lời các câu hỏi chính sách đối ngoại nhạy cảm.',
          },
        ],
        synonyms: [
          { term: 'cautious', vi: 'cẩn thận' },
          { term: 'wary', vi: 'cảnh giác' },
          { term: 'prudent', vi: 'khôn ngoan thận trọng' },
        ],
        antonyms: [
          { term: 'reckless', vi: 'liều lĩnh' },
          { term: 'careless', vi: 'bất cẩn' },
        ],
      },

      // 2. Conspicuous (Con + Spect)
      {
        id: 'conspicuous',
        term: 'conspicuous',
        partOfSpeech: 'adj.',
        phoneticUs: '/kənˈspɪkjuəs/',
        phoneticUk: '/kənˈspɪkjuəs/',
        definitionVi: 'nổi bật, đập ngay vào mắt, dễ nhận thấy',
        definitionEn: 'standing out so as to be clearly visible; attracting notice or attention',
        cefrLevel: 'B2',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 'con-',
          prefixVi: 'rõ rệt, cùng nhau (intensifier)',
          rootParts: [{ text: 'spic', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          suffix: '-uous',
          suffixVi: 'tính từ',
          formula: 'con- (rõ ràng) + spic (nhìn) + -uous → conspicuous (đập ngay vào mắt khiến ai cũng thấy → nổi bật, hiển nhiên)',
          explanation: 'Bắt nguồn từ tiếng Latin "conspicuus" (có thể nhìn thấy rõ từ đằng xa).',
        },
        wordFamily: {
          nouns: [{ term: 'conspicuousness', vi: 'sự nổi bật, tính dễ thấy' }],
          verbs: [],
          adjectives: [
            { term: 'conspicuous', vi: 'nổi bật, đập vào mắt' },
            { term: 'inconspicuous', vi: 'kín đáo, không bắt mắt' },
          ],
          adverbs: [
            { term: 'conspicuously', vi: 'một cách nổi bật' },
            { term: 'inconspicuously', vi: 'một cách kín đáo' },
          ],
        },
        collocations: [
          {
            phrase: 'conspicuous consumption',
            vi: 'thói tiêu dùng xa xỉ phô trương',
            example: 'Conspicuous consumption of luxury sports cars is common among nouveau riche.',
          },
          {
            phrase: 'conspicuous by absence',
            vi: 'sự vắng mặt lộ rõ gây chú ý',
            example: 'The team leader was conspicuous by his absence at the annual meeting.',
          },
        ],
        examples: [
          {
            en: 'The bright red sports car was conspicuous among the rows of gray sedans.',
            vi: 'Chiếc xe thể thao màu đỏ tươi nổi bật rực rỡ giữa hàng loạt xe hơi màu xám.',
          },
        ],
        synonyms: [
          { term: 'prominent', vi: 'nổi trội' },
          { term: 'noticeable', vi: 'dễ nhận thấy' },
          { term: 'striking', vi: 'ấn tượng đập vào mắt' },
        ],
        antonyms: [
          { term: 'inconspicuous', vi: 'kín đáo' },
          { term: 'hidden', vi: 'ẩn giấu' },
        ],
      },

      // 3. Expect (Ex + Spect)
      {
        id: 'expect',
        term: 'expect',
        partOfSpeech: 'v.',
        phoneticUs: '/ɪkˈspekt/',
        phoneticUk: '/ɪkˈspekt/',
        definitionVi: 'kỳ vọng, mong đợi, dự kiến',
        definitionEn: 'regard something as likely to happen; look forward to something with anticipation',
        cefrLevel: 'A2',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 'ex-',
          prefixVi: 'ra ngoài, hướng ra xa (outward)',
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          formula: 'ex- (ra ngoài) + spect (nhìn) → expect (ngóng mắt nhìn ra xa chờ đợi người/sự việc sẽ đến → mong đợi, kỳ vọng)',
          explanation: 'Bắt nguồn từ tiếng Latin "expectare" (hướng tầm mắt chờ đợi).',
        },
        wordFamily: {
          nouns: [
            { term: 'expectation', vi: 'sự kỳ vọng, niềm mong đợi' },
            { term: 'expectancy', vi: 'sự ngóng chờ, tuổi thọ kỳ vọng' },
          ],
          verbs: [{ term: 'expect', vi: 'mong đợi, kỳ vọng' }],
          adjectives: [
            { term: 'expected', vi: 'được dự kiến' },
            { term: 'unexpected', vi: 'bất ngờ, không lường trước' },
          ],
          adverbs: [
            { term: 'expectedly', vi: 'đúng như dự đoán' },
            { term: 'unexpectedly', vi: 'một cách bất ngờ' },
          ],
        },
        collocations: [
          {
            phrase: 'exceed expectations',
            vi: 'vượt xa mọi kỳ vọng',
            example: 'Quarterly company earnings exceeded all financial analyst expectations.',
          },
          {
            phrase: 'life expectancy',
            vi: 'tuổi thọ kỳ vọng',
            example: 'Modern healthcare has significantly raised global life expectancy.',
          },
        ],
        examples: [
          {
            en: 'We expect heavy snowfall in the mountainous regions tomorrow morning.',
            vi: 'Chúng tôi dự kiến tuyết rơi dày ở các vùng núi vào sáng mai.',
          },
        ],
        synonyms: [
          { term: 'anticipate', vi: 'lường trước' },
          { term: 'await', vi: 'chờ đợi' },
          { term: 'foresee', vi: 'nhìn thấy trước' },
        ],
        antonyms: [
          { term: 'doubt', vi: 'nghi ngờ' },
          { term: 'disbelieve', vi: 'không tin tưởng' },
        ],
      },

      // 4. Inspect (In + Spect)
      {
        id: 'inspect',
        term: 'inspect',
        partOfSpeech: 'v.',
        phoneticUs: '/ɪnˈspekt/',
        phoneticUk: '/ɪnˈspekt/',
        definitionVi: 'thanh tra, kiểm tra kỹ lưỡng',
        definitionEn: 'to look at something closely, typically to assess its condition or discover shortcomings',
        cefrLevel: 'B1',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 'in-',
          prefixVi: 'vào bên trong (inside)',
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi' }],
          formula: 'in- (vào trong) + spect (nhìn) → inspect (soi xét vào tận bên trong để kiểm tra)',
          explanation: 'Nhìn sâu vào bên trong từng chi tiết để đánh giá chất lượng hoặc sai sót.',
        },
        wordFamily: {
          nouns: [
            { term: 'inspection', vi: 'cuộc thanh tra, việc kiểm tra chất lượng' },
            { term: 'inspector', vi: 'thanh tra viên, giám định viên' },
          ],
          verbs: [{ term: 'inspect', vi: 'thanh tra, kiểm tra' }],
          adjectives: [{ term: 'inspective', vi: 'có tính thanh tra' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'inspect food safety',
            vi: 'kiểm tra vệ sinh an toàn thực phẩm',
            example: 'Health officials regularly inspect restaurants for sanitary standards.',
          },
        ],
        examples: [
          {
            en: 'Engineers inspect the aircraft engines before every transatlantic flight.',
            vi: 'Các kỹ sư kiểm tra động cơ máy bay trước mỗi chuyến bay xuyên Đại Tây Dương.',
          },
        ],
        synonyms: [
          { term: 'examine', vi: 'khám xét' },
          { term: 'scrutinize', vi: 'soi xét kỹ' },
          { term: 'audit', vi: 'kiểm định' },
        ],
        antonyms: [
          { term: 'overlook', vi: 'bỏ qua' },
          { term: 'ignore', vi: 'phớt lờ' },
        ],
      },

      // 5. Introspect (Intro + Spect)
      {
        id: 'introspect',
        term: 'introspect',
        partOfSpeech: 'v.',
        phoneticUs: '/ˌɪntrəˈspekt/',
        phoneticUk: '/ˌɪntrəˈspekt/',
        definitionVi: 'tự quán chiếu, tự vấn lương tâm, suy ngẫm nội tâm',
        definitionEn: 'examine one’s own conscious thoughts and feelings',
        cefrLevel: 'C1',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 'intro-',
          prefixVi: 'vào sâu bên trong (inward, within)',
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          formula: 'intro- (vào trong) + spect (nhìn) → introspect (quay tầm mắt nhìn vào sâu trong tâm hồn → tự quán chiếu, tự vấn nội tâm)',
          explanation: 'Bắt nguồn từ tiếng Latin "introspicere" (nhìn vào bên trong tâm thức chính mình).',
        },
        wordFamily: {
          nouns: [{ term: 'introspection', vi: 'sự nội quan, sự tự quán chiếu tâm hồn' }],
          verbs: [{ term: 'introspect', vi: 'tự suy ngẫm nội tâm' }],
          adjectives: [{ term: 'introspective', vi: 'thích trầm ngâm suy xét nội tâm' }],
          adverbs: [{ term: 'introspectively', vi: 'về mặt nội tâm' }],
        },
        collocations: [
          {
            phrase: 'quiet introspection',
            vi: 'sự tĩnh lặng quán chiếu nội tâm',
            example: 'Meditation retreats provide space for quiet introspection and mental clarity.',
          },
        ],
        examples: [
          {
            en: 'Writers often introspect deeply to create authentic and emotionally resonant characters.',
            vi: 'Các nhà văn thường tự chiêm nghiệm nội tâm sâu sắc để tạo nên những nhân vật chân thực và rung cảm.',
          },
        ],
        synonyms: [
          { term: 'self-reflect', vi: 'tự soi xét' },
          { term: 'contemplate', vi: 'chiêm nghiệm' },
          { term: 'meditate', vi: 'thiền định' },
        ],
        antonyms: [
          { term: 'extrospect', vi: 'hướng ngoại' },
        ],
      },

      // 6. Perspective (Per + Spect)
      {
        id: 'perspective',
        term: 'perspective',
        partOfSpeech: 'n.',
        phoneticUs: '/pərˈspektɪv/',
        phoneticUk: '/pəˈspektɪv/',
        definitionVi: 'góc nhìn, quan điểm, viễn cảnh; nghệ thuật vẽ phối cảnh',
        definitionEn: 'a particular attitude toward or way of regarding something; a point of view; the art of drawing solid objects on a two-dimensional surface',
        cefrLevel: 'B2',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 'per-',
          prefixVi: 'xuyên qua, thấu suốt (through)',
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          suffix: '-ive',
          suffixVi: 'danh từ / tính từ',
          formula: 'per- (xuyên qua) + spect (nhìn) + -ive → perspective (cái nhìn xuyên suốt thấu đáo toàn cảnh → góc nhìn, quan điểm, luật phối cảnh)',
          explanation: 'Bắt nguồn từ tiếng Latin "perspicere" (nhìn xuyên suốt qua một thấu kính để thấy toàn cảnh).',
        },
        wordFamily: {
          nouns: [{ term: 'perspective', vi: 'góc nhìn, quan điểm, luật phối cảnh' }],
          verbs: [],
          adjectives: [{ term: 'perspectival', vi: 'thuộc về luật phối cảnh' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'from my perspective',
            vi: 'theo góc nhìn của tôi',
            example: 'From my perspective, continuous learning is essential for career growth.',
          },
          {
            phrase: 'gain a broader perspective',
            vi: 'có được góc nhìn rộng mở hơn',
            example: 'Traveling abroad helps people gain a broader global perspective.',
          },
        ],
        examples: [
          {
            en: 'Renaissance painters mastered optical perspective to create realistic three-dimensional depth.',
            vi: 'Các họa sĩ thời Phục hưng đã làm chủ luật phối cảnh quang học để tạo độ sâu 3D chân thực.',
          },
        ],
        synonyms: [
          { term: 'viewpoint', vi: 'quan điểm' },
          { term: 'outlook', vi: 'góc nhìn' },
          { term: 'standpoint', vi: 'lập trường' },
        ],
        antonyms: [
          { term: 'narrow-mindedness', vi: 'sự thiển cận hẹp hòi' },
        ],
      },

      // 7. Prospect (Pro + Spect)
      {
        id: 'prospect',
        term: 'prospect',
        partOfSpeech: 'n., v.',
        phoneticUs: '/ˈprɑːspekt/',
        phoneticUk: '/ˈprɒspekt/',
        definitionVi: 'triển vọng tương lai, tiềm năng (n); thăm dò mỏ quặng (v)',
        definitionEn: 'the possibility or likelihood of some future event occurring; search for mineral deposits in a region',
        cefrLevel: 'B2',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 'pro-',
          prefixVi: 'về phía trước (forward)',
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          formula: 'pro- (về phía trước) + spect (nhìn) → prospect (nhìn về phía trước tương lai → triển vọng, tiềm năng phát triển; thăm dò mỏ vàng)',
          explanation: 'Bắt nguồn từ tiếng Latin "prospectus" (tầm nhìn phóng ra phía trước đón đầu tương lai).',
        },
        wordFamily: {
          nouns: [
            { term: 'prospect', vi: 'triển vọng, tiềm năng' },
            { term: 'prospector', vi: 'người thăm dò quặng mỏ' },
            { term: 'prospectus', vi: 'bản cáo bạch dự án' },
          ],
          verbs: [{ term: 'prospect', vi: 'thăm dò khoáng sản' }],
          adjectives: [{ term: 'prospective', vi: 'tiềm năng, trong tương lai' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'career / job prospects',
            vi: 'triển vọng nghề nghiệp / việc làm',
            example: 'Graduates with data science skills enjoy excellent career prospects.',
          },
          {
            phrase: 'prospective client',
            vi: 'khách hàng tiềm năng',
            example: 'The sales team prepared customized product demos for prospective clients.',
          },
        ],
        examples: [
          {
            en: 'The economic prospects for renewable energy investments remain exceptionally bright.',
            vi: 'Triển vọng kinh tế đối với các khoản đầu tư năng lượng tái tạo vẫn vô cùng xán lạn.',
          },
        ],
        synonyms: [
          { term: 'potential', vi: 'tiềm năng' },
          { term: 'possibility', vi: 'khả năng' },
          { term: 'outlook', vi: 'viễn cảnh' },
        ],
        antonyms: [
          { term: 'hopelessness', vi: 'sự vô vọng' },
          { term: 'impossibility', vi: 'sự bất khả' },
        ],
      },

      // 8. Respect (Re + Spect)
      {
        id: 'respect',
        term: 'respect',
        partOfSpeech: 'n., v.',
        phoneticUs: '/rɪˈspekt/',
        phoneticUk: '/rɪˈspekt/',
        definitionVi: 'tôn trọng, kính trọng (v); sự kính nể, phương diện/khía cạnh (n)',
        definitionEn: 'a feeling of deep admiration for someone elicited by their abilities or qualities; due regard for the feelings or rights of others',
        cefrLevel: 'A2',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 're-',
          prefixVi: 'lại, lần nữa (again)',
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          formula: 're- (lại) + spect (nhìn) → respect (ngoái nhìn lại ai đó với ánh mắt kính phục → tôn trọng, kính trọng)',
          explanation: 'Bắt nguồn từ tiếng Latin "respicere" (nhìn lại, đoái hoài, quan tâm kính trọng).',
        },
        wordFamily: {
          nouns: [
            { term: 'respect', vi: 'sự tôn trọng' },
            { term: 'respectability', vi: 'sự đường hoàng, đáng kính' },
          ],
          verbs: [{ term: 'respect', vi: 'tôn trọng, kính trọng' }],
          adjectives: [
            { term: 'respectful', vi: 'lễ phép, kính cẩn' },
            { term: 'respectable', vi: 'đáng kính, chỉnh chu' },
            { term: 'respective', vi: 'tương ứng từng cái' },
          ],
          adverbs: [
            { term: 'respectfully', vi: 'một cách kính cẩn' },
            { term: 'respectively', vi: 'lần lượt tương ứng' },
          ],
        },
        collocations: [
          {
            phrase: 'mutual respect',
            vi: 'sự tôn trọng lẫn nhau',
            example: 'A successful partnership is built on mutual respect and transparent communication.',
          },
          {
            phrase: 'in this respect',
            vi: 'ở phương diện / khía cạnh này',
            example: 'In this respect, the new policy is much more progressive than the old law.',
          },
        ],
        examples: [
          {
            en: 'Students should treat their teachers and classmates with genuine respect.',
            vi: 'Học sinh nên đối xử với thầy cô và bạn học bằng sự tôn trọng chân thành.',
          },
        ],
        synonyms: [
          { term: 'esteem', vi: 'quý trọng' },
          { term: 'admire', vi: 'ngưỡng mộ' },
          { term: 'honor', vi: 'vinh danh' },
        ],
        antonyms: [
          { term: 'disrespect', vi: 'bất kính' },
          { term: 'scorn', vi: 'khinh thị' },
        ],
      },

      // 9. Retrospect (Retro + Spect)
      {
        id: 'retrospect',
        term: 'retrospect',
        partOfSpeech: 'n., v.',
        phoneticUs: '/ˈretrəspekt/',
        phoneticUk: '/ˈretrəspekt/',
        definitionVi: 'sự hồi tưởng, việc nhìn lại quá khứ dĩ vãng',
        definitionEn: 'a survey or review of a past course of events or period of time',
        cefrLevel: 'C1',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 'retro-',
          prefixVi: 'ngược về quá khứ (backward, past)',
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          formula: 'retro- (ngược về quá khứ) + spect (nhìn) → retrospect (nhìn ngược lại về quá khứ dĩ vãng → sự hồi tưởng, nhìn lại chặng đường đã qua)',
          explanation: 'Bắt nguồn từ tiếng Latin "retropicere" (nhìn ngược về phía sau lưng).',
        },
        wordFamily: {
          nouns: [
            { term: 'retrospect', vi: 'sự hồi tưởng' },
            { term: 'retrospection', vi: 'sự nhìn lại dĩ vãng' },
          ],
          verbs: [{ term: 'retrospect', vi: 'hồi tưởng' }],
          adjectives: [{ term: 'retrospective', vi: 'hồi tưởng, có hiệu lực hồi tố' }],
          adverbs: [{ term: 'retrospectively', vi: 'khi nhìn lại quá khứ' }],
        },
        collocations: [
          {
            phrase: 'in retrospect',
            vi: 'khi nhìn lại dĩ vãng',
            example: 'In retrospect, choosing to study software engineering was the best decision of my life.',
          },
          {
            phrase: 'retrospective exhibition',
            vi: 'triển lãm hồi tưởng sự nghiệp',
            example: 'The museum hosted a retrospective exhibition of Picasso’s masterpieces.',
          },
        ],
        examples: [
          {
            en: 'In retrospect, the economic warning signs were obvious months before the collapse.',
            vi: 'Khi nhìn lại, những dấu hiệu cảnh báo kinh tế đã lộ rõ từ hàng tháng trước sự sụp đổ.',
          },
        ],
        synonyms: [
          { term: 'hindsight', vi: 'suy xét sau việc đã rồi' },
          { term: 'reminiscence', vi: 'sự hồi tưởng' },
          { term: 'review', vi: 'sự nhìn lại' },
        ],
        antonyms: [
          { term: 'prospect', vi: 'nhìn về tương lai' },
          { term: 'foresight', vi: 'tầm nhìn đón đầu' },
        ],
      },

      // 10. Spectacle (Root Spect)
      {
        id: 'spectacle',
        term: 'spectacle',
        partOfSpeech: 'n.',
        phoneticUs: '/ˈspektəkl/',
        phoneticUk: '/ˈspektəkl/',
        definitionVi: 'cảnh tượng ngoạn mục kỳ vĩ; kính đeo mắt (số nhiều: spectacles)',
        definitionEn: 'a visually striking performance or display; glasses (plural: spectacles)',
        cefrLevel: 'B2',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          suffix: '-acle',
          suffixVi: 'cảnh tượng / phương tiện',
          formula: 'spect (nhìn) + -acle → spectacle (cảnh tượng kỳ vĩ đập vào mắt người xem; kính trợ thị)',
          explanation: 'Bắt nguồn từ tiếng Latin "spectaculum" (màn trình diễn công cộng quy mô lớn thu hút mọi ánh nhìn).',
        },
        wordFamily: {
          nouns: [
            { term: 'spectacle', vi: 'quang cảnh kỳ vĩ' },
            { term: 'spectacles', vi: 'kính đeo mắt' },
            { term: 'spectator', vi: 'khán giả xem trực tiếp' },
            { term: 'spectrum', vi: 'quang phổ' },
          ],
          verbs: [],
          adjectives: [{ term: 'spectacular', vi: 'hùng vĩ, ngoạn mục' }],
          adverbs: [{ term: 'spectacularly', vi: 'một cách ngoạn mục' }],
        },
        collocations: [
          {
            phrase: 'breathtaking spectacle',
            vi: 'quang cảnh đẹp đến nín thở',
            example: 'The solar eclipse was a breathtaking celestial spectacle.',
          },
          {
            phrase: 'spectator sport',
            vi: 'môn thể thao thu hút đông khán giả',
            example: 'Football is the most popular spectator sport in the world.',
          },
        ],
        examples: [
          {
            en: 'The New Year’s fireworks display over Sydney Harbour was a magnificent spectacle.',
            vi: 'Màn pháo hoa đón Năm Mới trên Cảng Sydney là một cảnh tượng vô cùng tráng lệ.',
          },
        ],
        synonyms: [
          { term: 'sight', vi: 'quang cảnh' },
          { term: 'marvel', vi: 'kỳ quan' },
          { term: 'display', vi: 'màn trình diễn' },
        ],
        antonyms: [
          { term: 'eyesore', vi: 'vật chướng mắt' },
        ],
      },

      // 11. Suspect (Sus + Spect)
      {
        id: 'suspect',
        term: 'suspect',
        partOfSpeech: 'v., n., adj.',
        phoneticUs: '/səˈspekt/ (v) /ˈsʌspekt/ (n, adj)',
        phoneticUk: '/səˈspekt/ (v) /ˈsʌspekt/ (n, adj)',
        definitionVi: 'nghi ngờ (v); kẻ tình nghi / nghi phạm (n); đáng ngờ (adj)',
        definitionEn: 'have an idea or impression of the existence, presence, or truth of something without certain proof; a person thought to be guilty of a crime',
        cefrLevel: 'B1',
        roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
        anatomy: {
          prefix: 'sus-',
          prefixVi: 'từ dưới lên, ngầm (sub- biến âm thành sus- trước p)',
          rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
          formula: 'sus- (từ dưới lên) + spect (nhìn) → suspect (liếc nhìn từ dưới lên với vẻ nghi ngờ dò xét → nghi ngờ, kẻ tình nghi)',
          explanation: 'Bắt nguồn từ tiếng Latin "suspicere" (ngước mắt lên nhìn với sự hoài nghi).',
        },
        wordFamily: {
          nouns: [
            { term: 'suspect', vi: 'kẻ tình nghi' },
            { term: 'suspicion', vi: 'sự nghi ngờ' },
          ],
          verbs: [{ term: 'suspect', vi: 'nghi ngờ' }],
          adjectives: [
            { term: 'suspicious', vi: 'khả nghi, đáng ngờ' },
            { term: 'unsuspecting', vi: 'ngây thơ không mảy may nghi ngờ' },
          ],
          adverbs: [{ term: 'suspiciously', vi: 'một cách khả nghi' }],
        },
        collocations: [
          {
            phrase: 'prime suspect',
            vi: 'nghi phạm số một / trọng phạm',
            example: 'Police identified the former business partner as the prime suspect.',
          },
          {
            phrase: 'under suspicion',
            vi: 'bị tình nghi',
            example: 'The cashier came under suspicion after store funds went missing.',
          },
        ],
        examples: [
          {
            en: 'Doctors suspect that the infection was caused by contaminated tap water.',
            vi: 'Các bác sĩ nghi ngờ rằng việc nhiễm trùng là do nguồn nước máy bị ô nhiễm.',
          },
        ],
        synonyms: [
          { term: 'doubt', vi: 'hoài nghi' },
          { term: 'distrust', vi: 'không tin cậy' },
          { term: 'presume', vi: 'phỏng đoán' },
        ],
        antonyms: [
          { term: 'trust', vi: 'tin tưởng' },
          { term: 'confide', vi: 'tin cậy' },
        ],
      },
    ],
  },

  // 9. Struct, Stru
  {
    id: 'struct_stru',
    rootName: 'Struct, Stru',
    variants: ['struct', 'stru'],
    meaningEn: 'to build, construct, arrange',
    meaningVi: 'xây dựng, kiến trúc, sắp đặt kết cấu',
    originLanguage: 'Latin',
    originWord: 'struere',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "struere" (xây đắp, xếp chồng lên nhau thành công trình).',
    orderIndex: 9,
    words: [
      {
        id: 'construct',
        term: 'construct',
        partOfSpeech: 'v.',
        phoneticUs: '/kənˈstrʌkt/',
        phoneticUk: '/kənˈstrʌkt/',
        definitionVi: 'xây dựng công trình, tạo lập học thuyết',
        definitionEn: 'to build or erect something, typically a building, road, or machine',
        cefrLevel: 'B1',
        roots: [{ rootId: 'struct_stru', rootName: 'Struct, Stru', meaningVi: 'xây dựng' }],
        anatomy: {
          prefix: 'con-',
          prefixVi: 'cùng nhau',
          rootParts: [{ text: 'struct', rootId: 'struct_stru', rootName: 'Struct, Stru', meaningVi: 'xây dựng' }],
          formula: 'con- (cùng nhau) + struct (xây dựng) → construct (xếp khối vật liệu lại cùng nhau để xây dựng)',
          explanation: 'Gắn kết các thành phần hoặc ý tưởng lại với nhau để dựng nên công trình.',
        },
        wordFamily: {
          nouns: [
            { term: 'construction', vi: 'công trình, sự xây dựng' },
            { term: 'constructor', vi: 'nhà thầu xây dựng' },
          ],
          verbs: [
            { term: 'construct', vi: 'xây dựng' },
            { term: 'reconstruct', vi: 'tái thiết' },
          ],
          adjectives: [
            { term: 'constructive', vi: 'mang tính xây dựng' },
          ],
          adverbs: [{ term: 'constructively', vi: 'một cách có tính xây dựng' }],
        },
        collocations: [
          {
            phrase: 'constructive feedback',
            vi: 'góp ý mang tính xây dựng',
            example: 'Constructive feedback helps employees improve without feeling discouraged.',
          },
        ],
        examples: [
          {
            en: 'The city council allocated funds to construct a modern suspension bridge.',
            vi: 'Hội đồng thành phố đã cấp ngân sách để xây dựng một cây cầu treo hiện đại.',
          },
        ],
        synonyms: [{ term: 'build', vi: 'xây cất' }],
        antonyms: [{ term: 'demolish', vi: 'san bằng' }],
      },
    ],
  },

  // 10. Vid, Vis
  {
    id: 'vid_vis',
    rootName: 'Vid, Vis',
    variants: ['vis', 'vid'],
    meaningEn: 'to see, look, perceive',
    meaningVi: 'nhìn thấy, tầm nhìn, thị giác, nhận thức',
    originLanguage: 'Latin',
    originWord: 'videre',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "videre" (nhìn thấy, thấu suốt). Các từ ngữ thuộc gốc này xoay quanh thị lực, tầm nhìn, sự chuẩn bị nhìn xa trông rộng (provide), giám sát từ trên cao (supervise), ôn tập nhìn lại (revise) và bằng chứng hiển hiện trước mắt (evident).',
    orderIndex: 10,
    words: [
      // 1. Vision
      {
        id: 'vision',
        term: 'vision',
        partOfSpeech: 'n.',
        phoneticUs: '/ˈvɪʒn/',
        phoneticUk: '/ˈvɪʒn/',
        definitionVi: 'tầm nhìn, thị lực; sự mường tượng trong tâm trí; khả năng nhìn xa trông rộng',
        definitionEn: 'the faculty or state of being able to see; the ability to think about or plan the future with imagination or wisdom',
        cefrLevel: 'B1',
        roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
        anatomy: {
          rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy' }],
          suffix: '-ion',
          suffixVi: 'danh từ chỉ trạng thái / khả năng',
          formula: 'vis (nhìn) + -ion → vision (thị lực, tầm nhìn, khả năng nhìn xa trông rộng)',
          explanation: 'Bắt nguồn từ tiếng Latin "visio" chỉ hành động nhìn, khả năng thị giác và sự tưởng tượng viễn cảnh tương lai.',
        },
        wordFamily: {
          nouns: [
            { term: 'vision', vi: 'tầm nhìn, thị lực' },
            { term: 'visualization', vi: 'sự hình dung, sự trực quan hóa' },
            { term: 'visionary', vi: 'người có tầm nhìn xa trông rộng' },
            { term: 'visibility', vi: 'độ nhìn rõ, tầm nhìn xa' },
          ],
          verbs: [
            { term: 'visualize', vi: 'hình dung, mường tượng ra hình ảnh' },
            { term: 'envision', vi: 'múc mộng, mường tượng tương lai' },
          ],
          adjectives: [
            { term: 'visual', vi: 'trực quan, thuộc về thị giác' },
            { term: 'visionary', vi: 'có tầm nhìn xa' },
            { term: 'visible', vi: 'hữu hình, có thể nhìn thấy' },
            { term: 'invisible', vi: 'vô hình' },
          ],
          adverbs: [
            { term: 'visually', vi: 'một cách trực quan' },
            { term: 'visibly', vi: 'thấy rõ ràng' },
          ],
        },
        collocations: [
          {
            phrase: 'clear vision',
            vi: 'tầm nhìn rõ ràng',
            example: 'The CEO has a clear vision for the company’s international expansion.',
          },
          {
            phrase: 'field of vision',
            vi: 'thị trường, tầm mắt bao quát',
            example: 'Keep both hands inside the driver’s field of vision.',
          },
          {
            phrase: 'night vision',
            vi: 'tầm nhìn ban đêm',
            example: 'Owls have exceptional night vision to hunt in complete darkness.',
          },
        ],
        examples: [
          {
            en: 'She has a 20/20 vision and has never needed to wear eyeglasses.',
            vi: 'Cô ấy có thị lực 10/10 và chưa bao giờ phải đeo kính.',
          },
          {
            en: 'Steve Jobs was a legendary visionary who revolutionized personal technology and mobile communication.',
            vi: 'Steve Jobs là một nhà có tầm nhìn huyền thoại đã cách mạng hóa công nghệ cá nhân và giao tiếp di động.',
          },
        ],
        synonyms: [
          { term: 'sight', vi: 'thị lực' },
          { term: 'foresight', vi: 'tầm nhìn xa' },
          { term: 'perception', vi: 'sự nhận thức' },
        ],
        antonyms: [
          { term: 'blindness', vi: 'sự mù lòa' },
          { term: 'shortsightedness', vi: 'sự thiển cận' },
        ],
      },

      // 2. Visible
      {
        id: 'visible',
        term: 'visible',
        partOfSpeech: 'adj.',
        phoneticUs: '/ˈvɪzəbl/',
        phoneticUk: '/ˈvɪzəbl/',
        definitionVi: 'hữu hình, có thể nhìn thấy được, rõ ràng hiển hiện',
        definitionEn: 'able to be seen; perceptible to the eye; clearly evident',
        cefrLevel: 'B1',
        roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
        anatomy: {
          rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy' }],
          suffix: '-ible',
          suffixVi: 'có thể được',
          formula: 'vis (nhìn thấy) + -ible (có thể) → visible (hữu hình, có thể nhìn thấy bằng mắt thường)',
          explanation: 'Vật thể phát ra hoặc phản xạ ánh sáng đủ để mắt người nhận diện.',
        },
        wordFamily: {
          nouns: [
            { term: 'visibility', vi: 'tầm nhìn xa, mức độ rõ nét' },
            { term: 'invisibility', vi: 'tính vô hình' },
          ],
          verbs: [{ term: 'visualize', vi: 'hình dung trong đầu' }],
          adjectives: [
            { term: 'visible', vi: 'hữu hình, nhìn thấy được' },
            { term: 'invisible', vi: 'vô hình' },
          ],
          adverbs: [
            { term: 'visibly', vi: 'một cách rõ rệt, thấy rõ' },
            { term: 'invisibly', vi: 'một cách vô hình' },
          ],
        },
        collocations: [
          {
            phrase: 'clearly visible',
            vi: 'nhìn thấy rất rõ ràng',
            example: 'The mountain peak was clearly visible against the morning sky.',
          },
          {
            phrase: 'poor visibility',
            vi: 'tầm nhìn xa kém do sương mù',
            example: 'Thick morning fog resulted in poor visibility for highway drivers.',
          },
        ],
        examples: [
          {
            en: 'The North Star is clearly visible in the clear night sky.',
            vi: 'Sao Bắc Đẩu có thể nhìn thấy rất rõ ràng trên bầu trời đêm quang đãng.',
          },
          {
            en: 'There has been a visible improvement in his pronunciation after daily practice.',
            vi: 'Đã có sự tiến bộ thấy rõ trong phát âm của anh ấy sau khi luyện tập hàng ngày.',
          },
        ],
        synonyms: [
          { term: 'noticeable', vi: 'dễ nhận thấy' },
          { term: 'perceptible', vi: 'có thể cảm nhận' },
          { term: 'observable', vi: 'có thể quan sát' },
        ],
        antonyms: [
          { term: 'invisible', vi: 'vô hình' },
          { term: 'hidden', vi: 'ẩn giấu' },
        ],
      },

      // 3. Provide (pro + vid = nhìn trước để chuẩn bị)
      {
        id: 'provide',
        term: 'provide',
        partOfSpeech: 'v.',
        phoneticUs: '/prəˈvaɪd/',
        phoneticUk: '/prəˈvaɪd/',
        definitionVi: 'cung cấp, chu cấp, trang bị sẵn',
        definitionEn: 'to make available for use; supply; to take precautions beforehand',
        cefrLevel: 'A2',
        roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
        anatomy: {
          prefix: 'pro-',
          prefixVi: 'trước (forward, beforehand)',
          rootParts: [{ text: 'vid', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy' }],
          formula: 'pro- (trước) + vid (nhìn) → provide (nhìn thấy trước nhu cầu tương lai để chuẩn bị sẵn → cung cấp, chu cấp)',
          explanation: 'Bắt nguồn từ tiếng Latin "providere" (pro = phía trước + videre = nhìn) mang nghĩa nhìn thấy trước nhu cầu tương lai để lo liệu chu cấp.',
        },
        wordFamily: {
          nouns: [
            { term: 'provision', vi: 'sự cung cấp, điều khoản' },
            { term: 'provider', vi: 'nhà cung cấp' },
            { term: 'provisions', vi: 'lương thực dự trữ' },
          ],
          verbs: [{ term: 'provide', vi: 'cung cấp, chu cấp' }],
          adjectives: [
            { term: 'provisional', vi: 'tạm thời, lâm thời' },
            { term: 'provided', vi: 'với điều kiện là' },
          ],
          adverbs: [{ term: 'provisionally', vi: 'một cách tạm thời' }],
        },
        collocations: [
          {
            phrase: 'provide information / support',
            vi: 'cung cấp thông tin / hỗ trợ',
            example: 'The website provides comprehensive information for new students.',
          },
          {
            phrase: 'service provider',
            vi: 'nhà cung cấp dịch vụ',
            example: 'They partnered with a leading cloud service provider.',
          },
          {
            phrase: 'provide for family',
            vi: 'chu cấp cho gia đình',
            example: 'He works tirelessly to provide for his family.',
          },
        ],
        examples: [
          {
            en: 'The community center provides free meals and warm clothing for homeless families.',
            vi: 'Trung tâm cộng đồng cung cấp các bữa ăn miễn phí và quần áo ấm cho các gia đình vô gia cư.',
          },
          {
            en: 'Solar panels provide clean and sustainable energy for the entire building.',
            vi: 'Tấm pin mặt trời cung cấp năng lượng sạch và bền vững cho toàn bộ tòa nhà.',
          },
        ],
        synonyms: [
          { term: 'supply', vi: 'cung ứng' },
          { term: 'furnish', vi: 'trang bị' },
          { term: 'cater', vi: 'phục vụ nhu cầu' },
        ],
        antonyms: [
          { term: 'withhold', vi: 'giữ lại, từ chối cấp' },
          { term: 'deprive', vi: 'tước đoạt' },
        ],
      },

      // 4. Supervise (super + vis = nhìn từ trên xuống)
      {
        id: 'supervise',
        term: 'supervise',
        partOfSpeech: 'v.',
        phoneticUs: '/ˈsuːpərvaɪz/',
        phoneticUk: '/ˈsuːpəvaɪz/',
        definitionVi: 'giám sát, quản lý, theo dõi chỉ đạo',
        definitionEn: 'to observe and direct the execution of a task, project, or activity',
        cefrLevel: 'B2',
        roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
        anatomy: {
          prefix: 'super-',
          prefixVi: 'ở trên, từ trên cao (above, over)',
          rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy' }],
          formula: 'super- (từ trên cao) + vis (nhìn) → supervise (đứng từ trên cao nhìn bao quát toàn bộ → giám sát, quản lý)',
          explanation: 'Bắt nguồn từ tiếng Latin "supervidere" (super = bên trên + videre = nhìn) với hình ảnh người quản đốc đứng từ trên cao nhìn bao quát toàn cảnh để chỉ đạo.',
        },
        wordFamily: {
          nouns: [
            { term: 'supervision', vi: 'sự giám sát, sự chỉ đạo' },
            { term: 'supervisor', vi: 'người giám sát, quản đốc' },
          ],
          verbs: [{ term: 'supervise', vi: 'giám sát, quản lý' }],
          adjectives: [
            { term: 'supervisory', vi: 'mang tính giám sát' },
            { term: 'supervised', vi: 'được giám sát' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'closely supervise',
            vi: 'giám sát chặt chẽ',
            example: 'Senior engineers closely supervise trainee technicians during high-voltage repairs.',
          },
          {
            phrase: 'under direct supervision',
            vi: 'dưới sự giám sát trực tiếp',
            example: 'Medical interns perform operations under the direct supervision of chief surgeons.',
          },
        ],
        examples: [
          {
            en: 'The project manager supervises a team of twenty skilled software developers.',
            vi: 'Trưởng dự án giám sát một nhóm gồm hai mươi lập trình viên lành nghề.',
          },
          {
            en: 'Young children must not swim in deep water without adult supervision.',
            vi: 'Trẻ nhỏ không được bơi ở vùng nước sâu mà không có sự giám sát của người lớn.',
          },
        ],
        synonyms: [
          { term: 'oversee', vi: 'trông nom' },
          { term: 'monitor', vi: 'theo dõi' },
          { term: 'direct', vi: 'chỉ đạo' },
        ],
        antonyms: [
          { term: 'neglect', vi: 'bỏ bê' },
          { term: 'ignore', vi: 'phớt lờ' },
        ],
      },

      // 5. Revise (re + vis = nhìn lại để sửa đổi)
      {
        id: 'revise',
        term: 'revise',
        partOfSpeech: 'v.',
        phoneticUs: '/rɪˈvaɪz/',
        phoneticUk: '/rɪˈvaɪz/',
        definitionVi: 'xem lại, ôn tập, sửa đổi tu chỉnh văn bản',
        definitionEn: 'to re-examine and make alterations to written or printed matter; to study again previously learned material',
        cefrLevel: 'B1',
        roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
        anatomy: {
          prefix: 're-',
          prefixVi: 'lại, một lần nữa (again)',
          rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy' }],
          formula: 're- (lại) + vis (nhìn) → revise (nhìn lại một lần nữa để phát hiện sai sót và sửa đổi → xem lại, ôn tập, tu chỉnh)',
          explanation: 'Bắt nguồn từ tiếng Latin "revisere" (re = lại + videre = nhìn) mang nghĩa nhìn lại, rà soát lại tài liệu và ôn lại kiến thức.',
        },
        wordFamily: {
          nouns: [
            { term: 'revision', vi: 'sự xem lại, sự ôn tập, bản sửa đổi' },
            { term: 'reviser', vi: 'người duyệt sửa bản thảo' },
          ],
          verbs: [{ term: 'revise', vi: 'xem lại, sửa đổi, ôn bài' }],
          adjectives: [
            { term: 'revised', vi: 'đã được chỉnh sửa' },
            { term: 'revisionary', vi: 'mang tính sửa đổi' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'revise for an exam',
            vi: 'ôn thi',
            example: 'Students are spending evenings revising for their final university exams.',
          },
          {
            phrase: 'revised edition',
            vi: 'bản tái bản có sửa chữa',
            example: 'The publisher released a revised edition of the dictionary with modern slang.',
          },
          {
            phrase: 'revise policy / forecast',
            vi: 'điều chỉnh chính sách / dự báo',
            example: 'Economists revised their inflation forecast upwards for the next quarter.',
          },
        ],
        examples: [
          {
            en: 'You should always revise your draft essay carefully before final submission.',
            vi: 'Bạn nên luôn đọc lại và sửa đổi bản nháp bài luận cẩn thận trước khi nộp chính thức.',
          },
          {
            en: 'Spaced repetition revision helps transfer new vocabulary into long-term memory.',
            vi: 'Ôn tập lặp lại ngắt quãng giúp chuyển từ vựng mới vào trí nhớ dài hạn.',
          },
        ],
        synonyms: [
          { term: 'review', vi: 'ôn tập, xem xét' },
          { term: 'amend', vi: 'tu chính' },
          { term: 'modify', vi: 'điều chỉnh' },
        ],
        antonyms: [
          { term: 'maintain', vi: 'duy trì giữ nguyên' },
          { term: 'preserve', vi: 'bảo lưu' },
        ],
      },

      // 6. Evident (e- + vid = lộ ra trước mắt)
      {
        id: 'evident',
        term: 'evident',
        partOfSpeech: 'adj.',
        phoneticUs: '/ˈevɪdənt/',
        phoneticUk: '/ˈevɪdənt/',
        definitionVi: 'rõ ràng, hiển nhiên, lộ rõ trước mắt',
        definitionEn: 'plain or obvious; clearly seen or understood',
        cefrLevel: 'B2',
        roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
        anatomy: {
          prefix: 'e-',
          prefixVi: 'ra ngoài, lộ ra (out, forth)',
          rootParts: [{ text: 'vid', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy' }],
          suffix: '-ent',
          suffixVi: 'tính từ chỉ trạng thái',
          formula: 'e- (lộ ra ngoài) + vid (nhìn) + -ent → evident (lộ ra trước mắt khiến ai cũng nhìn thấy → rõ ràng, hiển nhiên)',
          explanation: 'Bắt nguồn từ tiếng Latin "evidens" (e- = ra ngoài + videre = nhìn) mang nghĩa nhìn thấy rành rành ngay trước mắt, không thể che giấu.',
        },
        wordFamily: {
          nouns: [
            { term: 'evidence', vi: 'bằng chứng, chứng cứ' },
          ],
          verbs: [{ term: 'evidence', vi: 'chứng minh, làm chứng' }],
          adjectives: [
            { term: 'evident', vi: 'hiển nhiên, rõ rệt' },
            { term: 'evidential', vi: 'dựa trên bằng chứng' },
            { term: 'self-evident', vi: 'hiển nhiên tự chứng minh' },
          ],
          adverbs: [{ term: 'evidently', vi: 'rõ ràng là, hiển nhiên' }],
        },
        collocations: [
          {
            phrase: 'self-evident truth',
            vi: 'chân lý hiển nhiên',
            example: 'Freedom and equality are considered self-evident human rights.',
          },
          {
            phrase: 'become evident',
            vi: 'trở nên rõ ràng',
            example: 'It soon became evident that immediate action was required to prevent the crisis.',
          },
          {
            phrase: 'conclusive evidence',
            vi: 'chứng cứ xác thực thuyết phục',
            example: 'Detectives gathered conclusive evidence linking the suspect to the scene.',
          },
        ],
        examples: [
          {
            en: 'Her joy was evident from the sparkling look in her eyes.',
            vi: 'Niềm vui của cô ấy lộ rõ qua ánh mắt lấp lánh.',
          },
          {
            en: 'DNA testing provided undeniable evidence that proved his innocence.',
            vi: 'Xét nghiệm DNA đã cung cấp bằng chứng không thể chối cãi chứng minh sự vô tội của anh ấy.',
          },
        ],
        synonyms: [
          { term: 'obvious', vi: 'rõ ràng' },
          { term: 'apparent', vi: 'hiển nhiên' },
          { term: 'manifest', vi: 'rõ rệt' },
        ],
        antonyms: [
          { term: 'obscure', vi: 'mờ mịt, khó hiểu' },
          { term: 'concealed', vi: 'bị che giấu' },
          { term: 'doubtful', vi: 'nghi ngờ' },
        ],
      },
    ],
  },

  // 11. Volv, Volut
  {
    id: 'volv_volut',
    rootName: 'Volv, Volut',
    variants: ['volv', 'volut', 'volu'],
    meaningEn: 'to roll, turn around, coil, twist',
    meaningVi: 'cuộn, xoay tròn, biến chuyển, lôi cuốn',
    originLanguage: 'Latin',
    originWord: 'volvere, volutus',
    etymologyStory: 'Bắt nguồn từ tiếng Latin "volvere" (lăn tròn, cuộn lại, xoay vần theo chu kỳ) và dạng quá khứ "volutus" (đã cuộn lại).',
    orderIndex: 11,
    words: [
      // Con + Volve
      {
        id: 'convolve',
        term: 'convolve',
        partOfSpeech: 'v.',
        phoneticUs: '/kənˈvɑːlv/',
        phoneticUk: '/kənˈvɒlv/',
        definitionVi: 'cuộn xoắn lại với nhau; làm cho phức tạp, rối rắm',
        definitionEn: 'to roll or wind together; to make something complex or intricate',
        cefrLevel: 'C1',
        roots: [{ rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn, xoay tròn' }],
        anatomy: {
          prefix: 'con-',
          prefixVi: 'cùng nhau, xoắn lại',
          rootParts: [{ text: 'volve', rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn tròn' }],
          formula: 'con- (cùng nhau) + volve (cuộn) → convolve (cuộn xoắn các tầng lớp lại với nhau → phức tạp, rắc rối)',
          explanation: 'Nhiều nếp gấp cuộn xoắn chằng chịt vào nhau khiến sự việc trở nên quanh co, khó thấu tỏ.',
        },
        wordFamily: {
          nouns: [
            { term: 'convolution', vi: 'nếp cuộn não bộ, sự quanh co rắc rối' },
            { term: 'convolutedness', vi: 'tính chất phức tạp rối rắm' },
          ],
          verbs: [{ term: 'convolve', vi: 'cuộn xoắn, gấp nếp' }],
          adjectives: [
            { term: 'convoluted', vi: 'ngoằn ngoèo, cực kỳ phức tạp' },
          ],
          adverbs: [{ term: 'convolutedly', vi: 'một cách rắc rối quanh co' }],
        },
        collocations: [
          {
            phrase: 'convoluted plot / explanation',
            vi: 'cốt truyện / lời giải thích quanh co rối rắm',
            example: 'The movie had such a convoluted plot that viewers were completely lost.',
          },
          {
            phrase: 'convolutions of the brain',
            vi: 'các nếp cuộn của vỏ não',
            example: 'Brain convolutions increase surface area for complex cognitive functions.',
          },
        ],
        examples: [
          {
            en: 'The legal contract was written in such convoluted language that even experts were baffled.',
            vi: 'Bản hợp đồng pháp lý được viết bằng thứ ngôn từ rắc rối đến mức cả các chuyên gia cũng hoang mang.',
          },
        ],
        synonyms: [{ term: 'complicate', vi: 'làm phức tạp' }, { term: 'twist', vi: 'xoắn vặn' }],
        antonyms: [{ term: 'simplify', vi: 'đơn giản hóa' }],
      },

      // De + Volve
      {
        id: 'devolve',
        term: 'devolve',
        partOfSpeech: 'v.',
        phoneticUs: '/dɪˈvɑːlv/',
        phoneticUk: '/dɪˈvɒlv/',
        definitionVi: 'chuyển giao quyền lực xuống cấp dưới; thoái hóa, sa sút',
        definitionEn: 'to transfer or delegate power to a lower level; to degenerate into a worse state',
        cefrLevel: 'C1',
        roots: [{ rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn, xoay tròn' }],
        anatomy: {
          prefix: 'de-',
          prefixVi: 'xuống dưới',
          rootParts: [{ text: 'volve', rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'lăn, cuộn' }],
          formula: 'de- (xuống) + volve (lăn, cuộn) → devolve (lăn trách nhiệm xuống cấp dưới / trượt dốc thoái hóa)',
          explanation: 'Lăn cuộn quyền hạn từ cấp cao nhất xuống các tầng nấc địa phương bên dưới.',
        },
        wordFamily: {
          nouns: [
            { term: 'devolution', vi: 'sự phân quyền cho địa phương, sự chuyển giao quyền lực' },
          ],
          verbs: [{ term: 'devolve', vi: 'phân quyền cho cấp dưới, thoái hóa' }],
          adjectives: [
            { term: 'devolved', vi: 'được phân quyền cho địa phương' },
            { term: 'devolutionary', vi: 'thuộc về sự phân cấp quyền lực' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'devolve power / authority to',
            vi: 'chuyển giao quyền lực cho cấp dưới',
            example: 'The central government agreed to devolve more taxation powers to regional assemblies.',
          },
          {
            phrase: 'devolve into chaos',
            vi: 'trượt dốc thoái hóa thành mớ hỗn độn',
            example: 'Without clear leadership, the peaceful protest devolved into violence.',
          },
        ],
        examples: [
          {
            en: 'Healthcare administration was devolved to provincial councils to improve service delivery.',
            vi: 'Công tác quản lý y tế đã được phân cấp cho các hội đồng tỉnh nhằm cải thiện chất lượng phục vụ.',
          },
        ],
        synonyms: [{ term: 'delegate', vi: 'ủy quyền' }, { term: 'deteriorate', vi: 'sa sút' }],
        antonyms: [{ term: 'centralize', vi: 'tập quyền' }, { term: 'progress', vi: 'tiến bộ' }],
      },

      // E + Volve
      {
        id: 'evolve',
        term: 'evolve',
        partOfSpeech: 'v.',
        phoneticUs: '/ɪˈvɑːlv/',
        phoneticUk: '/ɪˈvɒlv/',
        definitionVi: 'tiến hóa, phát triển dần dần qua thời gian',
        definitionEn: 'to develop gradually, especially from a simple to a more complex form',
        cefrLevel: 'B2',
        roots: [{ rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn, xoay tròn' }],
        anatomy: {
          prefix: 'e-',
          prefixVi: 'ra ngoài',
          rootParts: [{ text: 'volve', rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn tròn' }],
          formula: 'e- (ra ngoài) + volve (cuộn) → evolve (mở bung cuộn ra dần dần → tiến hóa, phát triển)',
          explanation: 'Mở rộng những tiềm năng còn đang cuộn tròn bên trong để phát triển thành dạng thức hoàn thiện hơn.',
        },
        wordFamily: {
          nouns: [
            { term: 'evolution', vi: 'thuyết tiến hóa, sự phát triển dần dần' },
            { term: 'evolutionist', vi: 'nhà nghiên cứu thuyết tiến hóa' },
          ],
          verbs: [{ term: 'evolve', vi: 'tiến hóa, phát triển' }],
          adjectives: [
            { term: 'evolutionary', vi: 'thuộc về tiến hóa' },
            { term: 'evolved', vi: 'tiến hóa ở bậc cao' },
          ],
          adverbs: [{ term: 'evolutionarily', vi: 'về mặt tiến hóa' }],
        },
        collocations: [
          {
            phrase: 'evolve over millions of years',
            vi: 'tiến hóa qua hàng triệu năm',
            example: 'Mammals evolved from reptilian ancestors over millions of years.',
          },
          {
            phrase: 'rapidly evolving technology',
            vi: 'công nghệ đang phát triển vũ bão',
            example: 'Engineers must adapt constantly to rapidly evolving artificial intelligence.',
          },
        ],
        examples: [
          {
            en: 'Human language continues to evolve as new digital expressions enter daily communication.',
            vi: 'Ngôn ngữ loài người liên tục tiến hóa khi các thuật ngữ kỹ thuật số mới đi vào giao tiếp hàng ngày.',
          },
        ],
        synonyms: [{ term: 'develop', vi: 'phát triển' }, { term: 'adapt', vi: 'thích nghi' }],
        antonyms: [{ term: 'stagnate', vi: 'trì trệ' }],
      },

      // In + Volve
      {
        id: 'involve',
        term: 'involve',
        partOfSpeech: 'v.',
        phoneticUs: '/ɪnˈvɑːlv/',
        phoneticUk: '/ɪnˈvɒlv/',
        definitionVi: 'bao gồm, đòi hỏi; lôi cuốn vào, dính líu liên quan',
        definitionEn: 'to include or affect someone or something; to make someone take part in an activity',
        cefrLevel: 'B1',
        roots: [{ rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn, xoay tròn' }],
        anatomy: {
          prefix: 'in-',
          prefixVi: 'vào bên trong',
          rootParts: [{ text: 'volve', rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn' }],
          formula: 'in- (vào trong) + volve (cuộn) → involve (cuộn người khác vào trong vòng tròn của mình → lôi cuốn, dính líu)',
          explanation: 'Kéo một người hoặc sự việc vào sâu bên trong một quy trình hoặc mối liên kết.',
        },
        wordFamily: {
          nouns: [
            { term: 'involvement', vi: 'sự tham gia, mức độ gắn kết, sự dính líu' },
          ],
          verbs: [{ term: 'involve', vi: 'lôi cuốn vào, bao gồm' }],
          adjectives: [
            { term: 'involved', vi: 'có tham gia, dính líu; phức tạp' },
            { term: 'uninvolved', vi: 'không liên quan, thờ ơ đứng ngoài' },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'get actively involved in',
            vi: 'tích cực tham gia vào',
            example: 'Students are strongly encouraged to get actively involved in community service.',
          },
          {
            phrase: 'involve a high degree of risk',
            vi: 'chứa đựng mức độ rủi ro cao',
            example: 'Deep-sea exploration involves a high degree of technical risk.',
          },
        ],
        examples: [
          {
            en: 'The ambitious renewable energy initiative will involve scientists from twelve different nations.',
            vi: 'Sáng kiến năng lượng tái tạo đầy tham vọng sẽ có sự tham gia của các nhà khoa học đến từ 12 quốc gia.',
          },
        ],
        synonyms: [{ term: 'include', vi: 'bao gồm' }, { term: 'engage', vi: 'thu hút' }],
        antonyms: [{ term: 'exclude', vi: 'loại trừ' }],
      },

      // Re + Volve
      {
        id: 'revolve',
        term: 'revolve',
        partOfSpeech: 'v.',
        phoneticUs: '/rɪˈvɑːlv/',
        phoneticUk: '/rɪˈvɒlv/',
        definitionVi: 'xoay quanh trục, luân chuyển; xoay quanh trọng tâm',
        definitionEn: 'to move in a circular orbit around a central point; to have as a main theme',
        cefrLevel: 'B1',
        roots: [{ rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn, xoay tròn' }],
        anatomy: {
          prefix: 're-',
          prefixVi: 'lại, quay vòng',
          rootParts: [{ text: 'volve', rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn, lăn' }],
          formula: 're- (quay vòng) + volve (lăn, cuộn) → revolve (lăn quay vòng quanh một tâm điểm)',
          explanation: 'Chuyển động xoay tròn lặp đi lặp lại quanh một tâm điểm hoặc ý tưởng cốt lõi.',
        },
        wordFamily: {
          nouns: [
            { term: 'revolution', vi: 'cuộc cách mạng, một vòng quay hoàn chỉnh' },
            { term: 'revolutionary', vi: 'nhà cách mạng' },
            { term: 'revolver', vi: 'súng lục ổ quay' },
          ],
          verbs: [
            { term: 'revolve', vi: 'xoay quanh trục' },
            { term: 'revolutionize', vi: 'cách mạng hóa, đổi mới hoàn toàn' },
          ],
          adjectives: [
            { term: 'revolutionary', vi: 'mang tính cách mạng, đột phá' },
            { term: 'revolving', vi: 'xoay tròn' },
          ],
          adverbs: [{ term: 'revolutionarily', vi: 'một cách mang tính cách mạng' }],
        },
        collocations: [
          {
            phrase: 'revolve around the Sun',
            vi: 'quay quanh Mặt Trời',
            example: 'Planets in our solar system revolve around the Sun in elliptical orbits.',
          },
          {
            phrase: 'revolutionize the industry',
            vi: 'cách mạng hóa toàn bộ ngành công nghiệp',
            example: 'Electric vehicles have revolutionized the global automotive industry.',
          },
        ],
        examples: [
          {
            en: 'The entire discussion revolved around how to optimize database performance for millions of users.',
            vi: 'Toàn bộ cuộc thảo luận xoay quanh việc làm sao để tối ưu hóa hiệu năng cơ sở dữ liệu cho hàng triệu người dùng.',
          },
        ],
        synonyms: [{ term: 'rotate', vi: 'quay' }, { term: 'orbit', vi: 'chuyển động theo quỹ đạo' }],
        antonyms: [],
      },
    ],
  },

  // 12. Tract, Stract
  {
    id: 'tract_stract',
    rootName: 'Tract, Stract',
    variants: ['tract', 'stract', 'trah', 'tractus'],
    meaningEn: 'to pull, draw, drag, extract',
    meaningVi: 'kéo, lôi, rút ra, thu hút, co kéo',
    originLanguage: 'Latin',
    originWord: 'trahere, tractus',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "trahere" (kéo, lôi đi) và dạng quá khứ "tractus" (đã được kéo, rút ra). Gốc từ này là nền tảng của hàng loạt khái niệm then chốt: kéo tách khỏi thực tại (abstract), kéo về phía mình (attract), kéo lại gần nhau ký kết (contract), kéo làm xao nhãng (distract), kéo rút tinh chất (extract), kéo dài thời gian (protract), kéo lùi rút lại (retract), lực kéo bám đường (traction), và kéo trừ bớt đi (subtract).',
    orderIndex: 12,
    words: [
      // 1. Abstract (Ab + Stract)
      {
        id: 'abstract',
        term: 'abstract',
        partOfSpeech: 'adj., n., v.',
        phoneticUs: '/ˈæbstrækt/',
        phoneticUk: '/ˈæbstrækt/',
        definitionVi: 'trừu tượng (adj); bản tóm tắt đề tài nghiên cứu (n); rút ra, tách ra (v)',
        definitionEn: 'existing in thought or as an idea but not having a physical or concrete existence; a summary of the contents of a book, article, or formal speech',
        cefrLevel: 'B2',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          prefix: 'ab-',
          prefixVi: 'rời xa, tách ra (away from)',
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, rút' }],
          formula: 'ab- (tách ra) + tract (kéo) → abstract (kéo tách ý niệm ra khỏi vật thể hữu hình → trừu tượng, bản tóm tắt ý chính)',
          explanation: 'Ý tưởng được trừu tượng hóa bằng cách bóc tách các đặc điểm vật lý cụ thể để giữ lại bản chất tư duy thuần túy.',
        },
        wordFamily: {
          nouns: [
            { term: 'abstraction', vi: 'sự trừu tượng hóa, ý niệm trừu tượng' },
            { term: 'abstractness', vi: 'tính trừu tượng' },
            { term: 'abstract', vi: 'bản tóm tắt bài báo khoa học' },
          ],
          verbs: [{ term: 'abstract', vi: 'tóm tắt, trừu xuất ý niệm' }],
          adjectives: [
            { term: 'abstract', vi: 'trừu tượng' },
            { term: 'abstracted', vi: 'đăm chiêu, lơ đễnh' },
          ],
          adverbs: [{ term: 'abstractly', vi: 'về mặt trừu tượng, trên lý thuyết' }],
        },
        collocations: [
          {
            phrase: 'abstract concept / art',
            vi: 'khái niệm / nghệ thuật trừu tượng',
            example: 'Beauty and justice are abstract concepts that philosophers debate.',
          },
          {
            phrase: 'read the abstract',
            vi: 'đọc bản tóm tắt nghiên cứu',
            example: 'Always read the paper’s abstract before diving into the full study.',
          },
        ],
        examples: [
          {
            en: 'Mathematics deals with abstract structures and relationships between numbers.',
            vi: 'Toán học xử lý các cấu trúc trừu tượng và mối quan hệ giữa các con số.',
          },
          {
            en: 'The gallery is famous for its collection of 20th-century abstract paintings.',
            vi: 'Phòng trưng bày nổi tiếng với bộ sưu tập các bức tranh trừu tượng thế kỷ 20.',
          },
        ],
        synonyms: [
          { term: 'theoretical', vi: 'lý thuyết' },
          { term: 'conceptual', vi: 'khái niệm' },
          { term: 'summary', vi: 'tóm tắt' },
        ],
        antonyms: [
          { term: 'concrete', vi: 'cụ thể' },
          { term: 'tangible', vi: 'hữu hình' },
        ],
      },

      // 2. Attract (At + Stract)
      {
        id: 'attract',
        term: 'attract',
        partOfSpeech: 'v.',
        phoneticUs: '/əˈtrækt/',
        phoneticUk: '/əˈtrækt/',
        definitionVi: 'thu hút, lôi cuốn, hấp dẫn về phía mình',
        definitionEn: 'cause to come to a place or participate in a venture by offering something of interest, favorable conditions, or opportunities',
        cefrLevel: 'A2',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          prefix: 'at-',
          prefixVi: 'hướng về phía (ad- biến âm thành at- trước t)',
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, hút' }],
          formula: 'at- (về phía) + tract (kéo) → attract (kéo lôi cuốn mọi ánh nhìn và vật thể về phía mình → thu hút, hấp dẫn)',
          explanation: 'Bắt nguồn từ tiếng Latin "attrahere" (kéo lại gần mình).',
        },
        wordFamily: {
          nouns: [
            { term: 'attraction', vi: 'sự thu hút, điểm tham quan du lịch' },
            { term: 'attractiveness', vi: 'sức quyến rũ, nét hấp dẫn' },
          ],
          verbs: [{ term: 'attract', vi: 'thu hút, lôi cuốn' }],
          adjectives: [
            { term: 'attractive', vi: 'hấp dẫn, quyến rũ, bắt mắt' },
            { term: 'unattractive', vi: 'không thu hút' },
          ],
          adverbs: [{ term: 'attractively', vi: 'một cách hấp dẫn' }],
        },
        collocations: [
          {
            phrase: 'attract foreign investment',
            vi: 'thu hút đầu tư nước ngoài',
            example: 'Tax incentives help attract foreign direct investment into tech sectors.',
          },
          {
            phrase: 'tourist attraction',
            vi: 'điểm thu hút khách du lịch',
            example: 'The ancient citadel is the city’s top tourist attraction.',
          },
        ],
        examples: [
          {
            en: 'Magnets attract iron filings with invisible magnetic force.',
            vi: 'Nam châm hút các mạt sắt bằng từ lực vô hình.',
          },
          {
            en: 'The vibrant festival attracts thousands of international visitors every spring.',
            vi: 'Lễ hội rực rỡ thu hút hàng nghìn du khách quốc tế mỗi mùa xuân.',
          },
        ],
        synonyms: [
          { term: 'draw', vi: 'kéo về' },
          { term: 'allure', vi: 'quyến rũ' },
          { term: 'captivate', vi: 'mê hoặc' },
        ],
        antonyms: [
          { term: 'repel', vi: 'đẩy lùi' },
          { term: 'repulse', vi: 'khước từ' },
        ],
      },

      // 3. Contract (Con + Stract)
      {
        id: 'contract',
        term: 'contract',
        partOfSpeech: 'n., v.',
        phoneticUs: '/ˈkɑːntrækt/',
        phoneticUk: '/ˈkɒntrækt/',
        definitionVi: 'hợp đồng, giao kèo pháp lý (n); co lại, rút ngắn, ký hợp đồng, mắc bệnh (v)',
        definitionEn: 'a written or spoken agreement, especially one concerning employment, sales, or tenancy; decrease in size, number, or range; catch or develop a disease',
        cefrLevel: 'B1',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          prefix: 'con-',
          prefixVi: 'cùng nhau (together)',
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
          formula: 'con- (cùng nhau) + tract (kéo) → contract (kéo hai bên lại ràng buộc cam kết → hợp đồng; kéo các sợi cơ thắt lại → co lại)',
          explanation: 'Kéo hai bên cùng đi đến một thỏa thuận ràng buộc, hoặc kéo các phần tử co cụm lại.',
        },
        wordFamily: {
          nouns: [
            { term: 'contract', vi: 'hợp đồng' },
            { term: 'contraction', vi: 'sự co rút, từ viết tắt' },
            { term: 'contractor', vi: 'nhà thầu thi công' },
          ],
          verbs: [{ term: 'contract', vi: 'ký hợp đồng, co lại, mắc bệnh' }],
          adjectives: [
            { term: 'contractual', vi: 'thuộc về hợp đồng' },
            { term: 'contractible', vi: 'có thể co lại được' },
          ],
          adverbs: [{ term: 'contractually', vi: 'theo quy định hợp đồng' }],
        },
        collocations: [
          {
            phrase: 'sign a contract',
            vi: 'ký hợp đồng',
            example: 'Both parties signed a five-year service agreement contract.',
          },
          {
            phrase: 'expand and contract',
            vi: 'giãn nở và co lại',
            example: 'Metals expand when heated and contract when cooled.',
          },
        ],
        examples: [
          {
            en: 'Cold temperatures cause blood vessels to contract and preserve core heat.',
            vi: 'Nhiệt độ lạnh làm các mạch máu co lại để bảo tồn nhiệt độ cơ thể.',
          },
          {
            en: 'The construction company won a multi-million-dollar government contract.',
            vi: 'Công ty xây dựng đã trúng gói thầu hợp đồng chính phủ trị giá nhiều triệu đô la.',
          },
        ],
        synonyms: [
          { term: 'agreement', vi: 'thỏa thuận' },
          { term: 'shrink', vi: 'co lại' },
          { term: 'compress', vi: 'nén' },
        ],
        antonyms: [
          { term: 'expand', vi: 'giãn nở, mở rộng' },
          { term: 'breach', vi: 'vi phạm hợp đồng' },
        ],
      },

      // 4. Distract (De + Stract)
      {
        id: 'distract',
        term: 'distract',
        partOfSpeech: 'v.',
        phoneticUs: '/dɪˈstrækt/',
        phoneticUk: '/dɪˈstrækt/',
        definitionVi: 'làm xao nhãng, gây phân tâm, đánh lạc hướng chú ý',
        definitionEn: 'prevent someone from giving full attention to something; divert one’s attention',
        cefrLevel: 'B1',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          prefix: 'dis-',
          prefixVi: 'rời đi, sang hướng khác (apart, away)',
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
          formula: 'dis- (sang hướng khác) + tract (kéo) → distract (kéo lôi sự chú ý chệch sang chỗ khác → làm xao nhãng, phân tâm)',
          explanation: 'Kéo tâm trí rời khỏi đối tượng đang cần tập trung.',
        },
        wordFamily: {
          nouns: [{ term: 'distraction', vi: 'sự xao nhãng, điều gây mất tập trung, thú tiêu khiển' }],
          verbs: [{ term: 'distract', vi: 'làm xao nhãng' }],
          adjectives: [
            { term: 'distracted', vi: 'bị mất tập trung, lơ đãng' },
            { term: 'distracting', vi: 'gây phân tâm' },
          ],
          adverbs: [{ term: 'distractedly', vi: 'một cách lơ đãng' }],
        },
        collocations: [
          {
            phrase: 'avoid distractions',
            vi: 'tránh các yếu tố gây xao nhãng',
            example: 'Turn off phone notifications to avoid distractions while studying.',
          },
          {
            phrase: 'distract attention from',
            vi: 'đánh lạc hướng sự chú ý khỏi',
            example: 'The scandal was leaked to distract attention from government policy failures.',
          },
        ],
        examples: [
          {
            en: 'Loud background noise easily distracts students during online exams.',
            vi: 'Tiếng ồn nền lớn rất dễ làm học sinh mất tập trung trong các kỳ thi trực tuyến.',
          },
        ],
        synonyms: [
          { term: 'divert', vi: 'chuyển hướng' },
          { term: 'sidetrack', vi: 'đánh lạc hướng' },
        ],
        antonyms: [
          { term: 'focus', vi: 'tập trung' },
          { term: 'concentrate', vi: 'chú tâm' },
        ],
      },

      // 5. Extract (Ex + Stract)
      {
        id: 'extract',
        term: 'extract',
        partOfSpeech: 'v., n.',
        phoneticUs: '/ɪkˈstrækt/',
        phoneticUk: '/ɪkˈstrækt/',
        definitionVi: 'chiết xuất, trích xuất dữ liệu, nhổ răng (v); tinh chất chiết xuất, đoạn trích (n)',
        definitionEn: 'remove or take out, especially by effort or force; obtain a substance or information from something by a process',
        cefrLevel: 'B2',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          prefix: 'ex-',
          prefixVi: 'ra ngoài (out of)',
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, rút' }],
          formula: 'ex- (ra ngoài) + tract (kéo) → extract (kéo rút một phần tử / tinh chất từ trong ra ngoài → chiết xuất, trích xuất, nhổ)',
          explanation: 'Lấy một thành phần quý giá hoặc dữ liệu ra khỏi một khối tổng thể phức tạp.',
        },
        wordFamily: {
          nouns: [
            { term: 'extract', vi: 'tinh chất chiết xuất, đoạn trích' },
            { term: 'extraction', vi: 'quá trình chiết xuất, việc nhổ răng, nguồn gốc xuất thân' },
            { term: 'extractor', vi: 'thiết bị chiết xuất / máy hút' },
          ],
          verbs: [{ term: 'extract', vi: 'chiết xuất, trích xuất, nhổ' }],
          adjectives: [{ term: 'extractable', vi: 'có thể trích xuất được' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'vanilla / plant extract',
            vi: 'tinh chất vani / chiết xuất thực vật',
            example: 'Natural vanilla extract adds rich aroma to baked desserts.',
          },
          {
            phrase: 'extract data from database',
            vi: 'trích xuất dữ liệu từ cơ sở dữ liệu',
            example: 'Data analysts extract valuable business insights using SQL queries.',
          },
        ],
        examples: [
          {
            en: 'The dentist had to extract two damaged wisdom teeth.',
            vi: 'Nha sĩ đã phải nhổ hai chiếc răng khôn bị sâu hỏng.',
          },
          {
            en: 'Scientists extract medicinal compounds from rare rainforest plants.',
            vi: 'Các nhà khoa học chiết xuất các hợp chất dược liệu từ các loài cây rừng mưa quý hiếm.',
          },
        ],
        synonyms: [
          { term: 'withdraw', vi: 'rút ra' },
          { term: 'distill', vi: 'chưng cất' },
          { term: 'derive', vi: 'lấy ra từ' },
        ],
        antonyms: [
          { term: 'insert', vi: 'chèn vào' },
          { term: 'inject', vi: 'bơm vào' },
        ],
      },

      // 6. Intractable (In + Stract)
      {
        id: 'intractable',
        term: 'intractable',
        partOfSpeech: 'adj.',
        phoneticUs: '/ɪnˈtræktəbl/',
        phoneticUk: '/ɪnˈtræktəbl/',
        definitionVi: 'nan giải (vấn đề/bệnh tật), cứng đầu, khó bảo, khó quản lý',
        definitionEn: 'hard to control or deal with; stubborn; not easily managed or cured',
        cefrLevel: 'C1',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          prefix: 'in-',
          prefixVi: 'không (not)',
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, dắt' }],
          suffix: '-able',
          suffixVi: 'có thể',
          formula: 'in- (không) + tract (kéo dắt) + -able → intractable (không thể kéo dắt theo ý muốn → nan giải, bướng bỉnh, khó trị)',
          explanation: 'Hình ảnh con vật cứng đầu không chịu để người ta dắt dây kéo đi.',
        },
        wordFamily: {
          nouns: [{ term: 'intractability', vi: 'tính chất nan giải, sự bướng bỉnh khó bảo' }],
          verbs: [],
          adjectives: [
            { term: 'intractable', vi: 'nan giải, khó chữa, bướng bỉnh' },
            { term: 'tractable', vi: 'dễ bảo, dễ kiểm soát' },
          ],
          adverbs: [{ term: 'intractably', vi: 'một cách nan giải' }],
        },
        collocations: [
          {
            phrase: 'intractable problem / conflict',
            vi: 'vấn đề / xung đột nan giải',
            example: 'Poverty and systemic inequality remain intractable global challenges.',
          },
          {
            phrase: 'intractable pain',
            vi: 'cơn đau dai dẳng khó chữa',
            example: 'Doctors prescribed advanced therapeutics for patients with intractable pain.',
          },
        ],
        examples: [
          {
            en: 'The diplomatic negotiations broke down due to intractable political disputes.',
            vi: 'Các cuộc đàm phán ngoại giao đã đổ vỡ do những tranh chấp chính trị nan giải.',
          },
        ],
        synonyms: [
          { term: 'unmanageable', vi: 'không kiểm soát nổi' },
          { term: 'stubborn', vi: 'ương bướng' },
          { term: 'insoluble', vi: 'không thể giải quyết' },
        ],
        antonyms: [
          { term: 'tractable', vi: 'dễ uốn nắn' },
          { term: 'manageable', vi: 'dễ xử lý' },
        ],
      },

      // 7. Protract (Pro + Stract)
      {
        id: 'protract',
        term: 'protract',
        partOfSpeech: 'v.',
        phoneticUs: '/prəˈtrækt/',
        phoneticUk: '/prəˈtrækt/',
        definitionVi: 'kéo dài thời gian, làm kéo dài lê thê',
        definitionEn: 'prolong in time or space; extend the duration of',
        cefrLevel: 'C1',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          prefix: 'pro-',
          prefixVi: 'về phía trước, tiến xa (forward)',
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
          formula: 'pro- (về phía trước) + tract (kéo) → protract (kéo dãn dài thời gian về phía trước → kéo dài lê thê, trì hoãn)',
          explanation: 'Kéo dài một sự việc vượt quá thời gian cần thiết ban đầu.',
        },
        wordFamily: {
          nouns: [
            { term: 'protraction', vi: 'sự kéo dài lê thê' },
            { term: 'protractor', vi: 'thước đo độ góc' },
          ],
          verbs: [{ term: 'protract', vi: 'kéo dài thời gian' }],
          adjectives: [{ term: 'protracted', vi: 'kéo dài, dai dẳng lê thê' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'protracted legal battle',
            vi: 'cuộc chiến pháp lý kéo dài dai dẳng',
            example: 'The two tech giants engaged in a protracted patent dispute.',
          },
          {
            phrase: 'protracted negotiations',
            vi: 'các cuộc đàm phán kéo dài lê thê',
            example: 'Peace was finally achieved after months of protracted negotiations.',
          },
        ],
        examples: [
          {
            en: 'Do not protract the meeting unnecessarily when decisions have already been made.',
            vi: 'Đừng kéo dài cuộc họp một cách không cần thiết khi các quyết định đã được thông qua.',
          },
        ],
        synonyms: [
          { term: 'prolong', vi: 'kéo dài' },
          { term: 'extend', vi: 'gia hạn' },
          { term: 'lengthen', vi: 'làm dài ra' },
        ],
        antonyms: [
          { term: 'shorten', vi: 'rút ngắn' },
          { term: 'curtail', vi: 'cắt ngắn' },
        ],
      },

      // 8. Retract (Re + Stract)
      {
        id: 'retract',
        term: 'retract',
        partOfSpeech: 'v.',
        phoneticUs: '/rɪˈtrækt/',
        phoneticUk: '/rɪˈtrækt/',
        definitionVi: 'rút lại lời nói / tuyên bố; co thụt vào trong (móng vuốt/càng đáp)',
        definitionEn: 'draw or be drawn back or back in; withdraw a statement or accusation as untrue or unjustified',
        cefrLevel: 'C1',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          prefix: 're-',
          prefixVi: 'ngược lại, lùi lại (back)',
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
          formula: 're- (lùi lại) + tract (kéo) → retract (kéo thụt lùi lại vị trí ban đầu → rút lại lời nói, thụt móng vuốt vào)',
          explanation: 'Kéo lùi một vật hoặc lời tuyên bố về lại nơi xuất phát.',
        },
        wordFamily: {
          nouns: [{ term: 'retraction', vi: 'sự rút lại tuyên bố, lời đính chính' }],
          verbs: [{ term: 'retract', vi: 'rút lại lời, thụt vào' }],
          adjectives: [{ term: 'retractable', vi: 'có thể thụt thò vào trong' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'retract a statement / confession',
            vi: 'rút lại lời tuyên bố / lời thú tội',
            example: 'The politician was forced to retract his controversial remarks.',
          },
          {
            phrase: 'retractable roof / landing gear',
            vi: 'mái che di động / càng đáp máy bay có thể thụt vào',
            example: 'The stadium features a modern retractable roof for rainy days.',
          },
        ],
        examples: [
          {
            en: 'Cats retract their sharp claws when walking to move silently.',
            vi: 'Mèo co thụt những chiếc móng sắc nhọn vào trong khi đi để di chuyển êm không tiếng động.',
          },
          {
            en: 'The journal retracted the fraudulent paper after peer review failed.',
            vi: 'Tạp chí khoa học đã thu hồi bài báo giả mạo sau khi đánh giá bình duyệt thất bại.',
          },
        ],
        synonyms: [
          { term: 'withdraw', vi: 'thu hồi' },
          { term: 'recant', vi: 'rút lại ý kiến' },
          { term: 'disavow', vi: 'từ chối nhận' },
        ],
        antonyms: [
          { term: 'reaffirm', vi: 'tái khẳng định' },
          { term: 'extend', vi: 'thò ra, duỗi ra' },
        ],
      },

      // 9. Tract / Traction (Root Tract)
      {
        id: 'traction',
        term: 'traction',
        partOfSpeech: 'n.',
        phoneticUs: '/ˈtrækʃn/',
        phoneticUk: '/ˈtrækʃn/',
        definitionVi: 'lực kéo, độ bám đường của bánh xe; đà tăng trưởng thu hút khách hàng',
        definitionEn: 'the action of drawing or pulling a thing over a surface; the grip of a tire on a road; the extent to which an idea, product, etc., gains popularity or acceptance',
        cefrLevel: 'B2',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
          suffix: '-ion',
          suffixVi: 'danh từ chỉ lực/trạng thái',
          formula: 'tract (kéo) + -ion → traction (lực kéo tiếp xúc, độ ma sát bám đường, đà lôi cuốn thị trường)',
          explanation: 'Lực ma sát tiếp xúc giúp phương tiện kéo dịch chuyển về phía trước, hoặc đà thu hút người dùng của một sản phẩm.',
        },
        wordFamily: {
          nouns: [
            { term: 'traction', vi: 'lực kéo, độ bám đường, đà tăng trưởng' },
            { term: 'tractor', vi: 'máy kéo nông nghiệp' },
            { term: 'tract', vi: 'dải đất, hệ thống đường cơ quan' },
          ],
          verbs: [],
          adjectives: [{ term: 'tractive', vi: 'thuộc về lực kéo' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'gain traction in the market',
            vi: 'tạo được đà thu hút lớn trên thị trường',
            example: 'The new mobile app gained huge traction among university students.',
          },
          {
            phrase: 'lose traction on icy roads',
            vi: 'mất độ bám đường trên đường đóng băng',
            example: 'Winter tires prevent vehicles from losing traction on slippery ice.',
          },
        ],
        examples: [
          {
            en: 'Four-wheel drive provides superior traction on rough mountain terrain.',
            vi: 'Hệ dẫn động bốn bánh cung cấp lực bám đường vượt trội trên địa hình núi gồ ghề.',
          },
        ],
        synonyms: [
          { term: 'grip', vi: 'độ bám dính' },
          { term: 'momentum', vi: 'đà phát triển' },
          { term: 'pulling force', vi: 'lực kéo' },
        ],
        antonyms: [
          { term: 'slippage', vi: 'sự trơn trượt' },
          { term: 'stagnation', vi: 'sự đình trệ' },
        ],
      },

      // 10. Subtract (Sub + Stract)
      {
        id: 'subtract',
        term: 'subtract',
        partOfSpeech: 'v.',
        phoneticUs: '/səbˈtrækt/',
        phoneticUk: '/səbˈtrækt/',
        definitionVi: 'trừ đi, khấu trừ, bớt ra khỏi tổng thể',
        definitionEn: 'take away a number or an amount from another to calculate the difference',
        cefrLevel: 'A2',
        roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
        anatomy: {
          prefix: 'sub-',
          prefixVi: 'ở dưới, bớt đi (under, from below)',
          rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, rút' }],
          formula: 'sub- (bớt đi) + tract (kéo) → subtract (kéo rút bớt một lượng ra khỏi tổng số → trừ đi, làm phép trừ)',
          explanation: 'Bắt nguồn từ tiếng Latin "subtrahere" (rút bớt đi từ bên dưới).',
        },
        wordFamily: {
          nouns: [{ term: 'subtraction', vi: 'phép trừ, sự khấu trừ' }],
          verbs: [{ term: 'subtract', vi: 'trừ đi' }],
          adjectives: [{ term: 'subtractive', vi: 'mang tính trừ bớt' }],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'add and subtract',
            vi: 'cộng và trừ',
            example: 'Children learn to add and subtract single-digit numbers in primary school.',
          },
          {
            phrase: 'subtract tax from salary',
            vi: 'khấu trừ thuế từ tiền lương',
            example: 'Income tax is automatically subtracted from your monthly salary.',
          },
        ],
        examples: [
          {
            en: 'If you subtract 15 from 50, you get 35.',
            vi: 'Nếu bạn trừ 15 từ 50, bạn sẽ được 35.',
          },
        ],
        synonyms: [
          { term: 'deduct', vi: 'khấu trừ' },
          { term: 'remove', vi: 'loại bỏ' },
          { term: 'take away', vi: 'lấy đi' },
        ],
        antonyms: [
          { term: 'add', vi: 'cộng vào' },
          { term: 'include', vi: 'bao gồm' },
        ],
      },
    ],
  },

  // 13. Gulf, Golfe (kolpos)
  {
    id: 'gulf_kolpos',
    rootName: 'Gulf, Golfe',
    variants: ['gulf', 'golfe', 'kolp'],
    meaningEn: 'abyss, deep hollow, gulf, whirlpool',
    meaningVi: 'vực sâu, lòng hõm sâu, vịnh biển, miệng xoáy nuốt chửng',
    originLanguage: 'Greek / Old French',
    originWord: 'kolpos (Hy Lạp cổ: lòng hõm, vịnh sâu) → golfe (Pháp cổ: vịnh biển, vực xoáy)',
    etymologyStory:
      'Bắt nguồn từ tiếng Hy Lạp cổ "kolpos" (lòng hõm sâu, vịnh biển kín), sau đó chuyển qua tiếng Pháp cổ "golfe" để chỉ vùng vịnh biển sâu và vực thẳm xoáy nước nuốt chửng. Trong tiếng Anh, gốc từ này phát triển thành các từ miêu tả vực sâu thăm thẳm, khoảng cách ngăn cách mênh mông (gulf), và hành động bao bọc/nuốt chửng toàn diện (engulf).',
    orderIndex: 13,
    words: [
      // 1. Engulf
      {
        id: 'engulf',
        term: 'engulf',
        partOfSpeech: 'v.',
        phoneticUs: '/ɪnˈɡʌlf/',
        phoneticUk: '/ɪnˈɡʌlf/',
        definitionVi: 'nhấn chìm, bao trùm, nuốt chửng, thiêu rụi',
        detailedMeaningVi:
          'Bao phủ hoàn toàn một thứ gì đó, thường tạo cảm giác thứ bên ngoài to lớn nuốt trọn thứ bên trong (như biển lửa thiêu rụi tòa nhà, sóng thần cuốn phăng bờ biển, bóng tối bủa vây hoặc cảm xúc cực độ dâng trào nuốt chửng con người).',
        definitionEn: 'to sweep over something so as to surround or cover it completely',
        cefrLevel: 'C1',
        roots: [
          {
            rootId: 'gulf_kolpos',
            rootName: 'Gulf, Golfe',
            meaningVi: 'vực sâu, họng xoáy nuốt chửng',
          },
        ],
        anatomy: {
          prefix: 'en-',
          prefixVi: 'đưa vào trạng thái, đặt vào bên trong',
          rootParts: [
            {
              text: 'gulf',
              rootId: 'gulf_kolpos',
              rootName: 'Gulf, Golfe',
              meaningVi: 'vực sâu, miệng xoáy nước (kolpos → golfe)',
            },
          ],
          formula: 'en- (bao bọc, đưa vào) + gulf (vực xoáy sâu) → engulf (nuốt chửng, bao trùm hoàn toàn)',
          explanation:
            'Tiền tố "en-" kết hợp với danh từ "gulf" tạo nên động từ "engulf" – miêu tả cảm giác một thế lực bao la bên ngoài cuốn phăng và nuốt chửng hoàn toàn thực thể bên trong.',
        },
        wordFamily: {
          nouns: [
            {
              term: 'engulfment',
              vi: 'sự nhấn chìm, tình trạng bị bao trùm nuốt trọn',
              phonetic: '/ɪnˈɡʌlfmənt/',
              exampleEn: 'The total engulfment of the village by the landslide shocked the nation.',
              exampleVi: 'Sự vùi lấp hoàn toàn ngôi làng bởi trận sạt lở đã gây chấn động cả nước.',
            },
          ],
          verbs: [
            {
              term: 'engulf',
              vi: 'nhấn chìm, bao trùm, nuốt chửng',
              phonetic: '/ɪnˈɡʌlf/',
              exampleEn: 'The building was engulfed in flames within minutes.',
              exampleVi: 'Tòa nhà đã bị ngọn lửa bao trùm chỉ trong vài phút.',
            },
          ],
          adjectives: [
            {
              term: 'engulfed',
              vi: 'bị nhấn chìm, bị nuốt chửng',
              phonetic: '/ɪnˈɡʌlft/',
              exampleEn: 'The engulfed coastline suffered immense destruction.',
              exampleVi: 'Đường bờ biển bị nhấn chìm đã chịu sự tàn phá khủng khiếp.',
            },
            {
              term: 'engulfing',
              vi: 'có tính bao trùm, tràn ngập, cuồn cuộn',
              phonetic: '/ɪnˈɡʌlfɪŋ/',
              exampleEn: 'She felt an engulfing sense of panic.',
              exampleVi: 'Cô cảm thấy một nỗi hoảng loạn bao trùm lấy tâm trí.',
            },
          ],
          adverbs: [
            {
              term: 'engulfingly',
              vi: 'một cách bao trùm, ngập tràn',
              phonetic: '/ɪnˈɡʌlfɪŋli/',
              exampleEn: 'The darkness spread engulfingly across the valley.',
              exampleVi: 'Bóng tối lan tỏa một cách bao trùm khắp thung lũng.',
            },
          ],
        },
        collocations: [
          {
            phrase: 'engulf in flames',
            vi: 'bị ngọn lửa bao trùm / chìm trong biển lửa',
            example: 'The wooden house was engulfed in flames before firefighters arrived.',
          },
          {
            phrase: 'engulfed by darkness',
            vi: 'bị bóng đêm nuốt chửng',
            example: 'The entire forest was quickly engulfed by thick darkness.',
          },
          {
            phrase: 'engulfed with grief / fear',
            vi: 'bị nỗi đau buồn / sợ hãi nuốt trọn',
            example: 'She was engulfed with grief upon receiving the tragic news.',
          },
          {
            phrase: 'be engulfed by the ocean',
            vi: 'bị đại dương nhấn chìm hoàn toàn',
            example: 'The shipwreck was eventually engulfed by the churning ocean.',
          },
        ],
        examples: [
          {
            en: 'The building was engulfed in flames within minutes of the explosion.',
            vi: 'Tòa nhà đã bị ngọn lửa bao trùm chỉ trong vài phút sau vụ nổ.',
          },
          {
            en: 'Giant tsunami waves engulfed the coastal village, destroying everything in their path.',
            vi: 'Những đợt sóng thần khổng lồ đã nuốt chửng ngôi làng ven biển, phá hủy mọi thứ trên đường đi.',
          },
          {
            en: 'He was engulfed by a wave of nostalgic sadness as he looked at the old photographs.',
            vi: 'Anh ấy bị nhấn chìm bởi một làn sóng hoài niệm buồn man mác khi nhìn lại những tấm ảnh cũ.',
          },
        ],
        synonyms: [
          {
            term: 'submerge',
            vi: 'dìm sâu, ngập hoàn toàn dưới nước',
            phonetic: '/səbˈmɜːrdʒ/',
            exampleEn: 'The rising tide will submerge the stepping stones.',
            exampleVi: 'Thủy triều dâng sẽ làm ngập hoàn toàn các bậc đá.',
          },
          {
            term: 'inundate',
            vi: 'làm tràn ngập, ngập lụt quá tải',
            phonetic: '/ˈɪn.ʌn.deɪt/',
            exampleEn: 'The floodwaters inundated hundreds of homes.',
            exampleVi: 'Nước lũ đã làm ngập hàng trăm ngôi nhà.',
          },
          {
            term: 'swallow',
            vi: 'nuốt trọn, làm biến mất vào bên trong',
            phonetic: '/ˈswɑː.loʊ/',
            exampleEn: 'The ocean swallowed the small boat.',
            exampleVi: 'Đại dương đã nuốt chửng chiếc thuyền nhỏ.',
          },
        ],
        antonyms: [
          {
            term: 'emerge',
            vi: 'nhô lên, xuất hiện từ bên trong',
            phonetic: '/ɪˈmɜːrdʒ/',
            exampleEn: 'The sun emerged from behind the dark storm clouds.',
            exampleVi: 'Mặt trời nhô lên từ phía sau những đám mây giông đen kịt.',
          },
          {
            term: 'uncover',
            vi: 'hé lộ, để lộ ra ngoài',
            phonetic: '/ʌnˈkʌv.ɚ/',
            exampleEn: 'The strong wind uncovered the hidden ruins.',
            exampleVi: 'Cơn gió mạnh đã để lộ ra những tàn tích ẩn giấu.',
          },
        ],
      },

      // 2. Gulf
      {
        id: 'gulf',
        term: 'gulf',
        partOfSpeech: 'n.',
        phoneticUs: '/ɡʌlf/',
        phoneticUk: '/ɡʌlf/',
        definitionVi: 'vịnh biển sâu; vực thẳm ngăn cách, hố sâu khoảng cách',
        detailedMeaningVi:
          'Nghĩa địa lý là vùng biển rộng ăn sâu vào đất liền (như Vịnh Mexico, Vịnh Ba Tư); nghĩa bóng là hố sâu chia rẽ, khoảng cách bất đồng quá lớn không thể hàn gắn giữa hai thế hệ, hai quan điểm hoặc hai tầng lớp xã hội.',
        definitionEn: 'a deep inlet of the sea almost surrounded by land; a deep ravine, chasm, or wide separation',
        cefrLevel: 'B2',
        roots: [
          {
            rootId: 'gulf_kolpos',
            rootName: 'Gulf, Golfe',
            meaningVi: 'vực sâu, vịnh biển, lòng hõm sâu',
          },
        ],
        anatomy: {
          rootParts: [
            {
              text: 'gulf',
              rootId: 'gulf_kolpos',
              rootName: 'Gulf, Golfe',
              meaningVi: 'lòng hõm sâu, vực thẳm (tiếng Hy Lạp: kolpos → tiếng Pháp cổ: golfe)',
            },
          ],
          formula: 'kolpos (vùng nước sâu/lòng hõm) → golfe → gulf (vịnh biển sâu / vực thẳm ngăn cách)',
          explanation: 'Từ hình tượng một vịnh biển ăn sâu vào lục địa hoặc một khe nứt thăm thẳm chia cắt đôi bờ.',
        },
        wordFamily: {
          nouns: [
            {
              term: 'gulf',
              vi: 'vịnh biển, vực thẳm chia rẽ',
              phonetic: '/ɡʌlf/',
              exampleEn: 'A deep gulf separates the two political parties.',
              exampleVi: 'Một hố sâu ngăn cách đang chia rẽ hai đảng phái chính trị.',
            },
          ],
          verbs: [
            {
              term: 'engulf',
              vi: 'nhấn chìm, nuốt trọn',
              phonetic: '/ɪnˈɡʌlf/',
            },
          ],
          adjectives: [
            {
              term: 'gulfy',
              vi: 'sâu thẳm, đầy xoáy nước',
              phonetic: '/ˈɡʌl.fi/',
            },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'a widening gulf between rich and poor',
            vi: 'hố sâu khoảng cách ngày càng rộng giữa giàu và nghèo',
            example: 'Economic inequality has created a widening gulf between rich and poor.',
          },
          {
            phrase: 'bridge the gulf',
            vi: 'bắc cầu hàn gắn / thu hẹp khoảng cách ngăn cách',
            example: 'Diplomats worked tirelessly to bridge the gulf between the two warring nations.',
          },
          {
            phrase: 'generation gulf',
            vi: 'hố sâu khoảng cách thế hệ',
            example: 'Open communication is essential to overcome the generation gulf.',
          },
          {
            phrase: 'the Persian / Mexico Gulf',
            vi: 'Vịnh Ba Tư / Vịnh Mexico',
            example: 'Commercial shipping routes pass through the Persian Gulf.',
          },
        ],
        examples: [
          {
            en: 'There is a widening gulf between the rich and the poor in modern global cities.',
            vi: 'Có một hố sâu khoảng cách ngày càng rộng giữa người giàu và người nghèo trong các đô thị toàn cầu hiện đại.',
          },
          {
            en: 'The oil tanker navigated carefully through the narrow strait of the gulf.',
            vi: 'Tàu chở dầu đã di chuyển cẩn trọng qua eo biển hẹp của vùng vịnh.',
          },
          {
            en: 'A massive cultural gulf still separates the traditional elders from the younger digital generation.',
            vi: 'Một hố sâu khoảng cách văn hóa lớn vẫn đang ngăn cách các bậc tiền bối truyền thống với thế hệ trẻ số.',
          },
        ],
        synonyms: [
          {
            term: 'chasm',
            vi: 'vực thẳm sâu, sự rạn nứt lớn',
            phonetic: '/ˈkæz.əm/',
            exampleEn: 'A huge chasm opened up in the earth after the earthquake.',
            exampleVi: 'Một vực thẳm khổng lồ đã mở ra trong lòng đất sau trận động đất.',
          },
          {
            term: 'abyss',
            vi: 'vực sâu vô tận không đáy',
            phonetic: '/əˈbɪs/',
            exampleEn: 'The submarine plunged into the dark abyss of the ocean.',
            exampleVi: 'Tàu ngầm lao mình vào vực sâu tăm tối của đại dương.',
          },
          {
            term: 'rift',
            vi: 'sự rạn nứt, chia rẽ tình cảm',
            phonetic: '/rɪft/',
            exampleEn: 'The dispute caused a deep rift between the two founders.',
            exampleVi: 'Vụ tranh chấp đã tạo nên một vết rạn nứt sâu sắc giữa hai nhà sáng lập.',
          },
        ],
        antonyms: [
          {
            term: 'bridge',
            vi: 'cầu nối hàn gắn',
            phonetic: '/brɪdʒ/',
            exampleEn: 'Music served as a bridge between the different communities.',
            exampleVi: 'Âm nhạc đóng vai trò như chiếc cầu nối giữa các cộng đồng khác nhau.',
          },
          {
            term: 'union',
            vi: 'sự hợp nhất, hòa hợp',
            phonetic: '/ˈjuː.njən/',
            exampleEn: 'The treaty created a strong union among the neighboring states.',
            exampleVi: 'Hiệp ước đã tạo nên một khối liên minh vững mạnh giữa các quốc gia láng giềng.',
          },
        ],
      },

      // 3. Engulfment
      {
        id: 'engulfment',
        term: 'engulfment',
        partOfSpeech: 'n.',
        phoneticUs: '/ɪnˈɡʌlfmənt/',
        phoneticUk: '/ɪnˈɡʌlfmənt/',
        definitionVi: 'sự nhấn chìm, tình trạng bị vùi lấp / bao trùm nuốt trọn',
        detailedMeaningVi:
          'Hiện tượng hoặc trạng thái bị một khối chất lỏng, cát bụi, dung nham hoặc cảm xúc bao trùm và giam hãm hoàn toàn bên trong.',
        definitionEn: 'the action or state of being swept over, surrounded, or covered completely',
        cefrLevel: 'C2',
        roots: [
          {
            rootId: 'gulf_kolpos',
            rootName: 'Gulf, Golfe',
            meaningVi: 'vực sâu, họng xoáy nuốt chửng',
          },
        ],
        anatomy: {
          prefix: 'en-',
          prefixVi: 'đưa vào trạng thái',
          rootParts: [
            {
              text: 'gulf',
              rootId: 'gulf_kolpos',
              rootName: 'Gulf, Golfe',
              meaningVi: 'vực sâu',
            },
          ],
          suffix: '-ment',
          suffixVi: 'hậu tố danh từ chỉ trạng thái, kết quả hành động',
          formula: 'engulf (nuốt chửng) + -ment → engulfment (trạng thái bị bao trùm / nuốt trọn)',
          explanation: 'Danh từ hóa hành vi bị cuốn vào và vùi lấp trong hố sâu hoặc biển lửa.',
        },
        wordFamily: {
          nouns: [
            {
              term: 'engulfment',
              vi: 'sự nhấn chìm, sự vùi lấp nuốt trọn',
            },
          ],
          verbs: [
            {
              term: 'engulf',
              vi: 'nhấn chìm, bao trùm',
            },
          ],
          adjectives: [
            {
              term: 'engulfed',
              vi: 'bị nhấn chìm',
            },
          ],
          adverbs: [],
        },
        collocations: [
          {
            phrase: 'risk of engulfment',
            vi: 'nguy cơ bị vùi lấp / nhấn chìm',
            example: 'Grain silo workers face severe risk of engulfment if safety protocols fail.',
          },
          {
            phrase: 'fear of engulfment',
            vi: 'nỗi sợ bị phụ thuộc / nuốt chửng danh tính (tâm lý học)',
            example: 'In psychoanalysis, fear of engulfment refers to anxiety about losing one’s individuality.',
          },
        ],
        examples: [
          {
            en: 'Safety regulations were implemented to protect miners against engulfment by loose sand.',
            vi: 'Các quy định an toàn đã được thực thi để bảo vệ thợ mỏ khỏi nguy cơ bị vùi lấp bởi cát lún.',
          },
          {
            en: 'The engulfment of the tiny island by rising sea levels is a stark warning of climate change.',
            vi: 'Việc hòn đảo nhỏ bị nhấn chìm bởi mực nước biển dâng là lời cảnh báo đanh thép về biến đổi khí hậu.',
          },
        ],
        synonyms: [
          {
            term: 'immersion',
            vi: 'sự ngâm chìm',
            phonetic: '/ɪˈmɜːr.ʒən/',
          },
          {
            term: 'submersion',
            vi: 'sự dìm nước hoàn toàn',
            phonetic: '/səbˈmɜːr.ʒən/',
          },
        ],
        antonyms: [
          {
            term: 'emergence',
            vi: 'sự trỗi dậy, sự nhô lên thoát ra ngoài',
            phonetic: '/ɪˈmɜːr.dʒəns/',
          },
        ],
      },
    ],
  },
];

// ----------------------------------------------------
// 2. STANDALONE WORDS (WORDS NOT TIED TO COMMON ROOTS)
// ----------------------------------------------------
export const STANDALONE_WORDS_DATA: SupervocWord[] = [
  {
    id: 'academy',
    term: 'academy',
    partOfSpeech: 'n.',
    phoneticUs: '/əˈkædəmi/',
    phoneticUk: '/əˈkædəmi/',
    definitionVi: 'học viện, viện hàn lâm, trường chuyên nghiệp',
    definitionEn: 'a place of study or training in a special field; a society of distinguished scholars',
    cefrLevel: 'B1',
    roots: [],
    anatomy: {
      rootParts: [
        {
          text: 'Akadēmeia',
          rootId: 'origin_academy',
          rootName: 'Akadēmeia (Hy Lạp)',
          meaningVi: 'khu vườn thiêng của anh hùng Academus tại Athens cổ đại',
        },
      ],
      formula: 'Akadēmeia (khu vườn của Academus) → Academy (nơi Plato lập trường triết học đầu tiên)',
      explanation: 'Triết gia Plato đã chọn khu vườn cây bách của người anh hùng Hy Lạp Academus để giảng dạy triết học và khoa học, khai sinh ra khái niệm Viện Hàn Lâm trong lịch sử.',
    },
    wordFamily: {
      nouns: [
        { term: 'academy', vi: 'viện hàn lâm, học viện' },
        { term: 'academician', vi: 'viện sĩ hàn lâm' },
        { term: 'academia', vi: 'giới học thuật, môi trường đại học nghiên cứu' },
        { term: 'academic', vi: 'nhà nghiên cứu học thuật' },
      ],
      verbs: [],
      adjectives: [
        { term: 'academic', vi: 'mang tính học thuật, uyên bác' },
      ],
      adverbs: [
        { term: 'academically', vi: 'về phương diện học vấn/học thuật' },
      ],
    },
    collocations: [
      {
        phrase: 'academic achievement / excellence',
        vi: 'thành tích học tập xuất sắc',
        example: 'Scholarships are awarded to students demonstrating exceptional academic achievement.',
      },
      {
        phrase: 'military / police academy',
        vi: 'học viện quân sự / cảnh sát',
        example: 'Cadets undergo rigorous training at the national military academy.',
      },
    ],
    examples: [
      {
        en: 'The Royal Academy of Arts hosts an annual exhibition celebrating modern painters.',
        vi: 'Viện Hàn lâm Nghệ thuật Hoàng gia tổ chức triển lãm thường niên tôn vinh các họa sĩ hiện đại.',
      },
      {
        en: 'She left the corporate world to pursue a fulfilling career in academia.',
        vi: 'Cô ấy rời bỏ giới doanh nghiệp để theo đuổi sự nghiệp đầy ý nghĩa trong giới học thuật.',
      },
    ],
    synonyms: [{ term: 'institute', vi: 'học viện' }, { term: 'school', vi: 'trường' }],
    antonyms: [],
  },

  {
    id: 'algorithm',
    term: 'algorithm',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈælɡərɪðəm/',
    phoneticUk: '/ˈælɡərɪðəm/',
    definitionVi: 'thuật toán, quy trình từng bước giải quyết bài toán',
    definitionEn: 'a process or set of rules to be followed in calculations or problem-solving operations',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        {
          text: 'Al-Khwarizmi',
          rootId: 'origin_algorithm',
          rootName: 'Muhammad al-Khwarizmi (Ba Tư)',
          meaningVi: 'tên nhà toán học vĩ đại người Ba Tư thế kỷ thứ 9',
        },
      ],
      formula: 'Al-Khwarizmi (nhà toán học cha đẻ của Đại số) → Algoritmi (Latin hóa) → Algorithm (thuật toán)',
      explanation: 'Tên của nhà toán học Muhammad ibn Musa al-Khwarizmi được các học giả châu Âu thời Trung cổ phiên âm Latinh thành Algorismi và phát triển thành thuật ngữ Algorithm ngày nay.',
    },
    wordFamily: {
      nouns: [
        { term: 'algorithm', vi: 'thuật toán' },
      ],
      verbs: [],
      adjectives: [
        { term: 'algorithmic', vi: 'mang tính thuật toán, dựa trên thuật toán' },
      ],
      adverbs: [
        { term: 'algorithmically', vi: 'bằng phương pháp thuật toán' },
      ],
    },
    collocations: [
      {
        phrase: 'recommendation algorithm',
        vi: 'thuật toán gợi ý nội dung',
        example: 'Social media platforms rely heavily on recommendation algorithms to engage users.',
      },
      {
        phrase: 'sorting / search algorithm',
        vi: 'thuật toán sắp xếp / tìm kiếm',
        example: 'Binary search is an efficient search algorithm with logarithmic time complexity.',
      },
    ],
    examples: [
      {
        en: 'Machine learning algorithms continuously improve their predictions from training data.',
        vi: 'Các thuật toán học máy liên tục cải thiện độ chính xác dự đoán từ dữ liệu huấn luyện.',
      },
    ],
    synonyms: [{ term: 'procedure', vi: 'quy trình' }, { term: 'logic formula', vi: 'công thức logic' }],
    antonyms: [],
  },

  {
    id: 'paradox',
    term: 'paradox',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈpærədɑːks/',
    phoneticUk: '/ˈpærədɒks/',
    definitionVi: 'nghịch lý, điều tưởng chừng vô lý nhưng lại có thật',
    definitionEn: 'a seemingly absurd or self-contradictory statement that when investigated may prove to be well founded or true',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        {
          text: 'para- + doxa',
          rootId: 'origin_paradox',
          rootName: 'para- (vượt ngoài) + doxa (lẽ thường)',
          meaningVi: 'điều nằm ngoài những suy nghĩ thông thường',
        },
      ],
      formula: 'para- (vượt ra ngoài) + doxa (ý kiến thông thường) → paradox (nghịch lý)',
      explanation: 'Từ tiếng Hy Lạp "paradoxos" (vượt ra ngoài niềm tin thông thường của con người).',
    },
    wordFamily: {
      nouns: [{ term: 'paradox', vi: 'nghịch lý' }],
      verbs: [],
      adjectives: [{ term: 'paradoxical', vi: 'có tính nghịch lý, trái khoáy' }],
      adverbs: [{ term: 'paradoxically', vi: 'một cách trớ trêu, trắc trở nghịch lý' }],
    },
    collocations: [
      {
        phrase: 'apparent paradox',
        vi: 'nghịch lý rõ ràng thấy trước mắt',
        example: 'The apparent paradox of saving money by spending on quality equipment.',
      },
    ],
    examples: [
      {
        en: 'Paradoxically, the more choices customers have, the harder it becomes to decide.',
        vi: 'Nghịch lý thay, khách hàng càng có nhiều lựa chọn thì lại càng khó đưa ra quyết định.',
      },
    ],
    synonyms: [{ term: 'contradiction', vi: 'mâu thuẫn' }, { term: 'enigma', vi: 'điều bí ẩn' }],
    antonyms: [{ term: 'certainty', vi: 'điều chắc chắn' }],
  },

  {
    id: 'serendipity',
    term: 'serendipity',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌserənˈdɪpəti/',
    phoneticUk: '/ˌserənˈdɪpəti/',
    definitionVi: 'sự may mắn tình cờ khám phá ra điều quý giá',
    definitionEn: 'the occurrence and development of events by chance in a happy or beneficial way',
    cefrLevel: 'C1',
    roots: [],
    anatomy: {
      rootParts: [
        {
          text: 'Serendip',
          rootId: 'origin_serendipity',
          rootName: 'Serendip (Tích Lan / Sri Lanka cổ)',
          meaningVi: 'truyện cổ Ba Tư "Ba hoàng tử xứ Serendip"',
        },
      ],
      formula: 'Serendip (vùng đất may mắn) + -ity → serendipity (duyên may tình cờ phát hiện bảo vật)',
      explanation: 'Horace Walpole đặt ra từ này vào năm 1754 dựa trên câu chuyện về ba chàng hoàng tử luôn tình cờ phát hiện ra những thứ quý giá mà họ không hề tìm kiếm.',
    },
    wordFamily: {
      nouns: [{ term: 'serendipity', vi: 'sự may mắn tình cờ' }],
      verbs: [],
      adjectives: [{ term: 'serendipitous', vi: 'tình cờ may mắn' }],
      adverbs: [{ term: 'serendipitously', vi: 'một cách may mắn tình cờ' }],
    },
    collocations: [
      {
        phrase: 'pure serendipity',
        vi: 'hoàn toàn là do duyên may tình cờ',
        example: 'The discovery of penicillin was a matter of pure serendipity in Alexander Fleming’s lab.',
      },
    ],
    examples: [
      {
        en: 'Finding his future co-founder in a coffee shop was an extraordinary act of serendipity.',
        vi: 'Gặp được người đồng sáng lập tương lai trong quán cà phê quả là một cơ duyên tình cờ kỳ diệu.',
      },
    ],
    synonyms: [{ term: 'chance', vi: 'cơ duyên' }, { term: 'fortune', vi: 'vận may' }],
    antonyms: [{ term: 'misfortune', vi: 'vận rủi' }],
  },
];

// ----------------------------------------------------------------------
// EXHAUSTIVE DICTIONARY OF INDIVIDUAL DERIVATIVE WORDS (SIÊU TỪ ĐIỂN)
// ----------------------------------------------------------------------

export const OMNI_DERIVATIVE_WORDS: Record<string, SupervocWord> = {
  agriculturist: {
    id: 'agriculturist',
    term: 'agriculturist',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌæɡrɪˈkʌltʃərɪst/',
    phoneticUk: '/ˌæɡrɪˈkʌltʃərɪst/',
    definitionVi: 'nhà nông nghiệp, người làm nông hoặc chuyên gia kỹ thuật nông nghiệp',
    definitionEn: 'a person who practices, studies, or manages agricultural operations',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng, đất đai' },
      { rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, nuôi dưỡng' },
    ],
    anatomy: {
      rootParts: [
        { text: 'agri-', rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng' },
        { text: 'cultur-', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt' },
      ],
      suffix: '-ist',
      suffixVi: 'người chuyên làm / nghiên cứu',
      formula: 'agriculture (nông nghiệp) + -ist (người làm) → agriculturist (người làm nông nghiệp, nhà nông học)',
      explanation: 'Hậu tố danh từ chỉ người "-ist" ghép vào danh từ agriculture để chỉ chuyên gia hoặc người phụ trách canh tác.',
    },
    wordFamily: {
      nouns: [
        { term: 'agriculture', vi: 'ngành nông nghiệp' },
        { term: 'agriculturist', vi: 'người làm nông nghiệp, chuyên gia nông nghiệp' },
        { term: 'agriculturalist', vi: 'chuyên gia phát triển nông nghiệp' },
      ],
      verbs: [],
      adjectives: [{ term: 'agricultural', vi: 'thuộc về nông nghiệp' }],
      adverbs: [{ term: 'agriculturally', vi: 'về mặt nông nghiệp' }],
    },
    collocations: [
      {
        phrase: 'experienced agriculturist',
        vi: 'nhà nông học giàu kinh nghiệm',
        example: 'Experienced agriculturists advise farmers on sustainable crop rotation.',
      },
    ],
    examples: [
      {
        en: 'The agriculturist introduced drought-resistant seeds to local farming cooperatives.',
        vi: 'Nhà nông học đã giới thiệu các giống hạt chịu hạn cho các hợp tác xã nông nghiệp địa phương.',
      },
    ],
    synonyms: [
      { term: 'agronomist', vi: 'nhà khoa học nông nghiệp' },
      { term: 'cultivator', vi: 'người canh tác' },
      { term: 'farmer', vi: 'nông dân' },
    ],
    antonyms: [{ term: 'urbanite', vi: 'người thành thị' }],
  },

  agriculturalist: {
    id: 'agriculturalist',
    term: 'agriculturalist',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌæɡrɪˈkʌltʃərəlɪst/',
    phoneticUk: '/ˌæɡrɪˈkʌltʃərəlɪst/',
    definitionVi: 'chuyên gia nghiên cứu và phát triển chính sách nông nghiệp',
    definitionEn: 'an expert in the science and policies of agriculture',
    cefrLevel: 'C1',
    roots: [
      { rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng, đất đai' },
      { rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, nuôi dưỡng' },
    ],
    anatomy: {
      rootParts: [
        { text: 'agri-', rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng' },
        { text: 'cultur-', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt' },
      ],
      suffix: '-alist',
      suffixVi: 'nhà lý thuyết / chuyên gia',
      formula: 'agricultural (thuộc nông nghiệp) + -ist → agriculturalist (chuyên gia lý thuyết nông nghiệp)',
      explanation: 'Dạng từ chuyên ngành cao cấp hơn agriculturist, thường dùng trong nghiên cứu kinh tế nông nghiệp.',
    },
    wordFamily: {
      nouns: [
        { term: 'agriculture', vi: 'ngành nông nghiệp' },
        { term: 'agriculturalist', vi: 'chuyên gia nông nghiệp' },
        { term: 'agriculturist', vi: 'người làm nông nghiệp' },
      ],
      verbs: [],
      adjectives: [{ term: 'agricultural', vi: 'thuộc nông nghiệp' }],
      adverbs: [{ term: 'agriculturally', vi: 'về phương diện nông nghiệp' }],
    },
    collocations: [
      {
        phrase: 'prominent agriculturalist',
        vi: 'chuyên gia nông nghiệp lỗi lạc',
        example: 'Prominent agriculturalists convened to tackle global food security challenges.',
      },
    ],
    examples: [
      {
        en: 'Agriculturalists are developing bio-fortified crops to combat malnutrition.',
        vi: 'Các chuyên gia nông nghiệp đang phát triển các loại cây trồng bổ sung vi chất sinh học để chống suy dinh dưỡng.',
      },
    ],
    synonyms: [{ term: 'agronomist', vi: 'nhà nông học' }],
    antonyms: [],
  },

  agronomist: {
    id: 'agronomist',
    term: 'agronomist',
    partOfSpeech: 'n.',
    phoneticUs: '/əˈɡrɑːnəmɪst/',
    phoneticUk: '/əˈɡrɒnəmɪst/',
    definitionVi: 'nhà nông học, nhà khoa học chuyên sâu về đất đai và cây trồng',
    definitionEn: 'an expert in the science of soil management and crop production',
    cefrLevel: 'C1',
    roots: [{ rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng, đất đai' }],
    anatomy: {
      rootParts: [
        { text: 'agro-', rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng (Greek: agros)' },
        { text: '-nomy', rootId: 'agri_agro', rootName: 'Nom, Nomy', meaningVi: 'quy luật khoa học' },
      ],
      suffix: '-ist',
      suffixVi: 'nhà khoa học / chuyên gia',
      formula: 'agro- (đồng ruộng) + -nomy (khoa học) + -ist (nhà khoa học) → agronomist (nhà khoa học nông nghiệp)',
      explanation: 'Chuyên gia nghiên cứu vi sinh thái đất đai, quang hợp và kỹ thuật nông nghiệp công nghệ cao.',
    },
    wordFamily: {
      nouns: [
        { term: 'agronomy', vi: 'ngành nông học' },
        { term: 'agronomist', vi: 'nhà nông học' },
      ],
      verbs: [],
      adjectives: [{ term: 'agronomic', vi: 'thuộc về nông học' }],
      adverbs: [{ term: 'agronomically', vi: 'về mặt nông học' }],
    },
    collocations: [
      {
        phrase: 'certified agronomist',
        vi: 'nhà nông học được chứng nhận',
        example: 'Consulting a certified agronomist helps maximize annual crop yields.',
      },
    ],
    examples: [
      {
        en: 'The agronomist analyzed soil pH levels before recommending the ideal fertilizer blend.',
        vi: 'Nhà nông học đã phân tích độ pH của đất trước khi đề xuất hỗn hợp phân bón lý tưởng.',
      },
    ],
    synonyms: [{ term: 'soil scientist', vi: 'nhà khoa học đất' }, { term: 'agriculturist', vi: 'nhà nông nghiệp' }],
    antonyms: [],
  },

  horticulturist: {
    id: 'horticulturist',
    term: 'horticulturist',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌhɔːrtɪˈkʌltʃərɪst/',
    phoneticUk: '/ˌhɔːtɪˈkʌltʃərɪst/',
    definitionVi: 'nhà làm vườn, chuyên gia kỹ thuật trồng hoa quả và cây cảnh',
    definitionEn: 'an expert in garden cultivation and the management of flowers, fruits, and vegetables',
    cefrLevel: 'B2',
    roots: [{ rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, nuôi dưỡng' }],
    anatomy: {
      prefix: 'horti-',
      prefixVi: 'vườn tược (Latin: hortus)',
      rootParts: [
        { text: 'culture', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt' },
      ],
      suffix: '-ist',
      suffixVi: 'người chuyên làm',
      formula: 'horti- (vườn) + culture (trồng trọt) + -ist (người làm) → horticulturist (chuyên gia làm vườn cảnh)',
      explanation: 'Người chuyên nghiên cứu kỹ thuật chiết ghép, nuôi dưỡng các loài cây trong vườn nhà kính.',
    },
    wordFamily: {
      nouns: [
        { term: 'horticulture', vi: 'nghề làm vườn' },
        { term: 'horticulturist', vi: 'nhà làm vườn cảnh' },
      ],
      verbs: [],
      adjectives: [{ term: 'horticultural', vi: 'thuộc về nghề làm vườn' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'master horticulturist',
        vi: 'nghệ nhân làm vườn bậc thầy',
        example: 'The botanical garden was curated by a master horticulturist.',
      },
    ],
    examples: [
      {
        en: 'Horticulturists breed exotic orchids that bloom in controlled climates.',
        vi: 'Các nhà làm vườn nhân giống những loài phong lan quý hiếm nở hoa trong điều kiện vi khí hậu.',
      },
    ],
    synonyms: [{ term: 'gardener', vi: 'người làm vườn' }, { term: 'botanist', vi: 'nhà thực vật học' }],
    antonyms: [],
  },

  devolution: {
    id: 'devolution',
    term: 'devolution',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌdevəˈluːʃn/',
    phoneticUk: '/ˌdiːvəˈluːʃn/',
    definitionVi: 'sự phân quyền, sự chuyển giao quyền lực từ trung ương xuống địa phương',
    definitionEn: 'the transfer of powers and responsibilities from the central government to regional levels',
    cefrLevel: 'C1',
    roots: [{ rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn, xoay tròn' }],
    anatomy: {
      prefix: 'de-',
      prefixVi: 'xuống dưới',
      rootParts: [{ text: 'volut', rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'lăn, cuộn' }],
      suffix: '-ion',
      suffixVi: 'danh từ chỉ quá trình',
      formula: 'de- (xuống) + volut (lăn) + -ion → devolution (sự lăn chuyển giao quyền hạn xuống cấp dưới)',
      explanation: 'Quy trình hành chính phân tán quyền ra quyết định về cho các chính quyền cơ sở.',
    },
    wordFamily: {
      nouns: [{ term: 'devolution', vi: 'sự phân quyền cho địa phương' }],
      verbs: [{ term: 'devolve', vi: 'chuyển giao quyền lực, thoái hóa' }],
      adjectives: [{ term: 'devolved', vi: 'được phân cấp' }, { term: 'devolutionary', vi: 'thuộc về phân quyền' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'process of devolution',
        vi: 'tiến trình phân quyền',
        example: 'The process of devolution granted Scotland its own national parliament.',
      },
    ],
    examples: [
      {
        en: 'Devolution allows local authorities to respond much faster to community healthcare needs.',
        vi: 'Phân quyền cho phép chính quyền địa phương phản ứng nhanh hơn nhiều với nhu cầu y tế cộng đồng.',
      },
    ],
    synonyms: [{ term: 'decentralization', vi: 'phân cấp phi tập trung' }, { term: 'delegation', vi: 'sự ủy quyền' }],
    antonyms: [{ term: 'centralization', vi: 'sự tập quyền trung ương' }],
  },

  revolution: {
    id: 'revolution',
    term: 'revolution',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌrevəˈluːʃn/',
    phoneticUk: '/ˌrevəˈluːʃn/',
    definitionVi: 'cuộc cách mạng (chính trị / công nghệ); vòng quay hoàn chỉnh quanh trục',
    definitionEn: 'a dramatic and wide-reaching change in conditions or attitudes; one complete circular turn',
    cefrLevel: 'B1',
    roots: [{ rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn, xoay tròn' }],
    anatomy: {
      prefix: 're-',
      prefixVi: 'quay vòng lại',
      rootParts: [{ text: 'volut', rootId: 'volv_volut', rootName: 'Volv, Volut', meaningVi: 'cuộn, lăn' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 're- (quay lại) + volut (lăn tròn) + -ion → revolution (một vòng quay trọn vẹn đảo lộn trật tự cũ → cách mạng)',
      explanation: 'Sự quay ngoắt 360 độ làm thay đổi căn bản toàn bộ hệ thống từ gốc rễ.',
    },
    wordFamily: {
      nouns: [
        { term: 'revolution', vi: 'cuộc cách mạng, vòng quay hoàn chỉnh' },
        { term: 'revolutionary', vi: 'nhà cách mạng' },
        { term: 'revolver', vi: 'súng lục ổ quay' },
      ],
      verbs: [
        { term: 'revolve', vi: 'xoay quanh trục' },
        { term: 'revolutionize', vi: 'cách mạng hóa' },
      ],
      adjectives: [
        { term: 'revolutionary', vi: 'mang tính cách mạng đột phá' },
        { term: 'revolving', vi: 'xoay tròn' },
      ],
      adverbs: [{ term: 'revolutionarily', vi: 'theo cách thức cách mạng' }],
    },
    collocations: [
      {
        phrase: 'industrial / digital revolution',
        vi: 'cuộc cách mạng công nghiệp / kỹ thuật số',
        example: 'The artificial intelligence revolution is reshaping all modern professions.',
      },
    ],
    examples: [
      {
        en: 'The invention of the printing press sparked an unprecedented knowledge revolution across Europe.',
        vi: 'Phát minh máy in đã châm ngòi cho một cuộc cách mạng tri thức chưa từng có trên khắp châu Âu.',
      },
    ],
    synonyms: [{ term: 'transformation', vi: 'sự biến đổi sâu sắc' }, { term: 'rotation', vi: 'sự xoay vòng' }],
    antonyms: [{ term: 'stagnation', vi: 'sự đình trệ' }],
  },

  visual: {
    id: 'visual',
    term: 'visual',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˈvɪʒuəl/',
    phoneticUk: '/ˈvɪʒuəl/',
    definitionVi: 'trực quan, thuộc về thị giác, nhìn bằng mắt',
    definitionEn: 'relating to seeing or sight; attractive or appealing to the eye',
    cefrLevel: 'B1',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ual',
      suffixVi: 'thuộc về',
      formula: 'vis (nhìn) + -ual (thuộc về) → visual (trực quan, thuộc thị giác)',
      explanation: 'Liên quan đến hình ảnh và khả năng tiếp nhận thông tin qua đôi mắt.',
    },
    wordFamily: {
      nouns: [
        { term: 'vision', vi: 'thị lực' },
        { term: 'visuals', vi: 'hình ảnh minh họa' },
      ],
      verbs: [{ term: 'visualize', vi: 'hình dung' }],
      adjectives: [{ term: 'visual', vi: 'trực quan' }],
      adverbs: [{ term: 'visually', vi: 'về mặt thị giác' }],
    },
    collocations: [
      {
        phrase: 'visual aids / effects',
        vi: 'công cụ hỗ trợ trực quan / hiệu ứng kỹ xảo',
        example: 'The presenter used visual aids to engage the audience.',
      },
    ],
    examples: [
      {
        en: 'Graphic designers create strong visual identities for brands.',
        vi: 'Các nhà thiết kế đồ họa tạo ra bộ nhận diện trực quan mạnh mẽ cho thương hiệu.',
      },
    ],
    synonyms: [{ term: 'optic', vi: 'quang học' }, { term: 'graphic', vi: 'đồ họa' }],
    antonyms: [{ term: 'auditory', vi: 'thuộc thính giác' }, { term: 'non-visual', vi: 'phi thị giác' }],
  },

  visually: {
    id: 'visually',
    term: 'visually',
    partOfSpeech: 'adv.',
    phoneticUs: '/ˈvɪʒuəli/',
    phoneticUk: '/ˈvɪʒuəli/',
    definitionVi: 'một cách trực quan, về mặt thị giác',
    definitionEn: 'in a way that relates to seeing or sight; with the eyes',
    cefrLevel: 'B2',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ally',
      suffixVi: 'trạng từ',
      formula: 'visual (trực quan) + -ly → visually (một cách trực quan)',
      explanation: 'Diễn tả hành động hoặc tính chất được cảm nhận bằng đôi mắt.',
    },
    wordFamily: {
      nouns: [{ term: 'vision', vi: 'thị giác' }],
      verbs: [{ term: 'visualize', vi: 'hình dung' }],
      adjectives: [{ term: 'visual', vi: 'trực quan' }],
      adverbs: [{ term: 'visually', vi: 'một cách trực quan' }],
    },
    collocations: [
      {
        phrase: 'visually impaired',
        vi: 'khiếm thị',
        example: 'Audio descriptions assist visually impaired museum visitors.',
      },
      {
        phrase: 'visually appealing',
        vi: 'bắt mắt, thu hút thị giác',
        example: 'The minimalist UI design is visually appealing.',
      },
    ],
    examples: [
      {
        en: 'The film is visually stunning with breathtaking landscapes.',
        vi: 'Bộ phim tuyệt đẹp về mặt thị giác với những phong cảnh ngoạn mục.',
      },
    ],
    synonyms: [{ term: 'in appearance', vi: 'về diện mạo' }],
    antonyms: [],
  },

  visualize: {
    id: 'visualize',
    term: 'visualize',
    partOfSpeech: 'v.',
    phoneticUs: '/ˈvɪʒuəlaɪz/',
    phoneticUk: '/ˈvɪʒuəlaɪz/',
    definitionVi: 'hình dung, mường tượng ra hình ảnh trong tâm trí',
    definitionEn: 'form a mental image of; imagine; make visible to the mind',
    cefrLevel: 'B2',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ize',
      suffixVi: 'làm cho, tạo ra',
      formula: 'vis (nhìn) + -al + -ize → visualize (tạo ra hình ảnh trước mắt tâm trí → hình dung, mường tượng)',
      explanation: 'Tự vẽ ra khung cảnh hoặc đồ họa chi tiết trong suy nghĩ.',
    },
    wordFamily: {
      nouns: [{ term: 'visualization', vi: 'sự hình dung' }],
      verbs: [{ term: 'visualize', vi: 'mường tượng' }],
      adjectives: [{ term: 'visual', vi: 'trực quan' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'visualize success',
        vi: 'hình dung về thành công',
        example: 'Top athletes visualize success before every race.',
      },
      {
        phrase: 'visualize complex data',
        vi: 'trực quan hóa dữ liệu phức tạp',
        example: 'Dashboards help managers visualize sales trends.',
      },
    ],
    examples: [
      {
        en: 'Close your eyes and visualize a calm, sunny beach.',
        vi: 'Hãy nhắm mắt lại và hình dung một bãi biển đầy nắng êm đềm.',
      },
    ],
    synonyms: [{ term: 'imagine', vi: 'tưởng tượng' }, { term: 'picture', vi: 'hình dung' }, { term: 'envision', vi: 'mường tượng' }],
    antonyms: [{ term: 'ignore', vi: 'bỏ qua' }],
  },

  visualization: {
    id: 'visualization',
    term: 'visualization',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌvɪʒuələˈzeɪʃn/',
    phoneticUk: '/ˌvɪʒuəlaɪˈzeɪʃn/',
    definitionVi: 'sự hình dung, sự trực quan hóa dữ liệu bằng biểu đồ',
    definitionEn: 'the representation of an object, situation, or set of information as a chart or other image',
    cefrLevel: 'C1',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ation',
      suffixVi: 'danh từ chỉ quá trình',
      formula: 'visualize (hình dung) + -ation → visualization (sự hình dung, kỹ thuật trực quan hóa)',
      explanation: 'Kỹ thuật chuyển đổi dữ liệu số thô thành các biểu đồ và hình ảnh dễ hiểu.',
    },
    wordFamily: {
      nouns: [
        { term: 'visualization', vi: 'sự trực quan hóa' },
        { term: 'vision', vi: 'tầm nhìn' },
      ],
      verbs: [{ term: 'visualize', vi: 'hình dung' }],
      adjectives: [{ term: 'visual', vi: 'trực quan' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'data visualization',
        vi: 'trực quan hóa dữ liệu',
        example: 'Data visualization makes complex analytics accessible to executives.',
      },
    ],
    examples: [
      {
        en: 'Interactive 3D visualization helps architects preview buildings before construction.',
        vi: 'Trực quan hóa 3D tương tác giúp các kiến trúc sư xem trước công trình trước khi thi công.',
      },
    ],
    synonyms: [{ term: 'graphing', vi: 'vẽ đồ thị' }, { term: 'imaging', vi: 'tạo ảnh' }],
    antonyms: [],
  },

  visionary: {
    id: 'visionary',
    term: 'visionary',
    partOfSpeech: 'adj., n.',
    phoneticUs: '/ˈvɪʒəneri/',
    phoneticUk: '/ˈvɪʒənri/',
    definitionVi: 'có tầm nhìn xa trông rộng (adj); người có tầm nhìn chiến lược vĩ đại (n)',
    definitionEn: 'thinking about or planning the future with imagination or wisdom; a person with original and bold ideas',
    cefrLevel: 'C1',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ary',
      suffixVi: 'người / tính chất',
      formula: 'vision (tầm nhìn) + -ary → visionary (người có tầm nhìn xa trông rộng đón đầu tương lai)',
      explanation: 'Người có khả năng nhìn thấu xu hướng phát triển trước hàng thập kỷ.',
    },
    wordFamily: {
      nouns: [
        { term: 'vision', vi: 'tầm nhìn' },
        { term: 'visionary', vi: 'nhà có tầm nhìn' },
      ],
      verbs: [{ term: 'envision', vi: 'mường tượng' }],
      adjectives: [{ term: 'visionary', vi: 'có tầm nhìn xa' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'visionary leader / founder',
        vi: 'nhà lãnh đạo / sáng lập có tầm nhìn',
        example: 'The startup succeeded thanks to its visionary founder.',
      },
    ],
    examples: [
      {
        en: 'Visionary thinkers anticipate problems decades before they occur.',
        vi: 'Những nhà tư tưởng có tầm nhìn dự đoán trước các vấn đề hàng thập kỷ trước khi chúng xảy ra.',
      },
    ],
    synonyms: [{ term: 'innovator', vi: 'nhà đổi mới' }, { term: 'pioneer', vi: 'người tiên phong' }, { term: 'forward-thinking', vi: 'tư duy tiến bộ' }],
    antonyms: [{ term: 'shortsighted', vi: 'thiển cận' }, { term: 'traditionalist', vi: 'người bảo thủ' }],
  },

  invisible: {
    id: 'invisible',
    term: 'invisible',
    partOfSpeech: 'adj.',
    phoneticUs: '/ɪnˈvɪzəbl/',
    phoneticUk: '/ɪnˈvɪzəbl/',
    definitionVi: 'vô hình, không thể nhìn thấy bằng mắt thường',
    definitionEn: 'unable to be seen; not visible to the naked eye',
    cefrLevel: 'B1',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'không (not)',
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ible',
      suffixVi: 'có thể',
      formula: 'in- (không) + vis (nhìn) + -ible (có thể) → invisible (không thể nhìn thấy → vô hình)',
      explanation: 'Sóng ánh sáng truyền xuyên qua hoặc vượt ngoài phổ thị giác của con người.',
    },
    wordFamily: {
      nouns: [{ term: 'invisibility', vi: 'tính vô hình' }],
      verbs: [],
      adjectives: [
        { term: 'invisible', vi: 'vô hình' },
        { term: 'visible', vi: 'hữu hình' },
      ],
      adverbs: [{ term: 'invisibly', vi: 'một cách vô hình' }],
    },
    collocations: [
      {
        phrase: 'invisible hand of the market',
        vi: 'bàn tay vô hình của thị trường',
        example: 'Adam Smith described the invisible hand guiding market economies.',
      },
      {
        phrase: 'invisible to the naked eye',
        vi: 'vô hình trước mắt thường',
        example: 'Bacteria and viruses are invisible without a microscope.',
      },
    ],
    examples: [
      {
        en: 'Ultraviolet rays are invisible to human eyes but cause sunburn.',
        vi: 'Tia cực tím vô hình trước mắt người nhưng gây cháy nắng.',
      },
    ],
    synonyms: [{ term: 'unseen', vi: 'không nhìn thấy' }, { term: 'imperceptible', vi: 'không nhận thấy' }],
    antonyms: [{ term: 'visible', vi: 'hữu hình' }, { term: 'conspicuous', vi: 'nổi bật' }],
  },

  provision: {
    id: 'provision',
    term: 'provision',
    partOfSpeech: 'n.',
    phoneticUs: '/prəˈvɪʒn/',
    phoneticUk: '/prəˈvɪʒn/',
    definitionVi: 'sự cung cấp, sự chuẩn bị dự phòng; điều khoản hợp đồng; lương thực dự trữ',
    definitionEn: 'the action of providing or supplying something; a condition or requirement in a legal document',
    cefrLevel: 'B2',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      prefix: 'pro-',
      prefixVi: 'trước',
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'pro- (trước) + vis (nhìn) + -ion → provision (sự chuẩn bị chu cấp từ trước cho tương lai)',
      explanation: 'Việc nhìn xa trông rộng để lo liệu dự phòng đồ dùng hoặc điều khoản pháp lý.',
    },
    wordFamily: {
      nouns: [
        { term: 'provision', vi: 'sự cung cấp, điều khoản' },
        { term: 'provider', vi: 'nhà cung cấp' },
      ],
      verbs: [{ term: 'provide', vi: 'cung cấp' }],
      adjectives: [{ term: 'provisional', vi: 'tạm thời' }],
      adverbs: [{ term: 'provisionally', vi: 'tạm thời' }],
    },
    collocations: [
      {
        phrase: 'make provision for',
        vi: 'chuẩn bị dự phòng cho',
        example: 'Parents should make financial provision for their children’s education.',
      },
      {
        phrase: 'contractual provision',
        vi: 'điều khoản hợp đồng',
        example: 'The agreement contains a strict confidentiality provision.',
      },
    ],
    examples: [
      {
        en: 'Emergency provisions were airlifted to disaster-stricken villages.',
        vi: 'Lương thực thực phẩm khẩn cấp đã được thả từ máy bay xuống các ngôi làng bị thiên tai.',
      },
    ],
    synonyms: [{ term: 'supply', vi: 'sự cung cấp' }, { term: 'clause', vi: 'điều khoản' }, { term: 'stipulation', vi: 'quy định' }],
    antonyms: [{ term: 'deprivation', vi: 'sự thiếu thốn' }],
  },

  provider: {
    id: 'provider',
    term: 'provider',
    partOfSpeech: 'n.',
    phoneticUs: '/prəˈvaɪdər/',
    phoneticUk: '/prəˈvaɪdə(r)/',
    definitionVi: 'nhà cung cấp dịch vụ/sản phẩm; người gánh vác chu cấp kinh tế gia đình',
    definitionEn: 'a person or company that provides a service or product; someone who supports a family',
    cefrLevel: 'B1',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      prefix: 'pro-',
      prefixVi: 'trước',
      rootParts: [{ text: 'vid', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-er',
      suffixVi: 'người/đơn vị làm',
      formula: 'provide (cung cấp) + -er (người làm) → provider (nhà cung cấp, người chu cấp)',
      explanation: 'Đơn vị hoặc cá nhân đảm nhiệm việc chuẩn bị và đưa tài nguyên đến cho người khác.',
    },
    wordFamily: {
      nouns: [
        { term: 'provider', vi: 'nhà cung cấp' },
        { term: 'provision', vi: 'sự cung cấp' },
      ],
      verbs: [{ term: 'provide', vi: 'cung cấp' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'healthcare / internet provider',
        vi: 'nhà cung cấp dịch vụ y tế / mạng internet',
        example: 'She works for the country’s largest healthcare provider.',
      },
      {
        phrase: 'sole provider',
        vi: 'người trụ cột kinh tế duy nhất',
        example: 'After his father fell ill, he became the family’s sole provider.',
      },
    ],
    examples: [
      {
        en: 'Compare different insurance providers before buying a policy.',
        vi: 'Hãy so sánh các nhà cung cấp bảo hiểm khác nhau trước khi mua hợp đồng.',
      },
    ],
    synonyms: [{ term: 'supplier', vi: 'nhà cung ứng' }, { term: 'vendor', vi: 'nhà bán hàng' }, { term: 'breadwinner', vi: 'người trụ cột' }],
    antonyms: [{ term: 'consumer', vi: 'người tiêu dùng' }, { term: 'dependent', vi: 'người ăn theo' }],
  },

  supervision: {
    id: 'supervision',
    term: 'supervision',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌsuːpərˈvɪʒn/',
    phoneticUk: '/ˌsuːpəˈvɪʒn/',
    definitionVi: 'sự giám sát, sự trông nom, sự chỉ đạo thi hành',
    definitionEn: 'management by overseeing the performance or operation of a person or group',
    cefrLevel: 'B2',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      prefix: 'super-',
      prefixVi: 'ở trên',
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'super- (từ trên cao) + vis (nhìn) + -ion → supervision (sự đứng từ trên cao quan sát chỉ đạo → sự giám sát)',
      explanation: 'Quá trình theo dõi và kiểm soát hoạt động để đảm bảo đúng tiêu chuẩn và an toàn.',
    },
    wordFamily: {
      nouns: [
        { term: 'supervision', vi: 'sự giám sát' },
        { term: 'supervisor', vi: 'người giám sát' },
      ],
      verbs: [{ term: 'supervise', vi: 'giám sát' }],
      adjectives: [{ term: 'supervisory', vi: 'thuộc giám sát' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'close / strict supervision',
        vi: 'sự giám sát chặt chẽ',
        example: 'Construction sites operate under strict safety supervision.',
      },
      {
        phrase: 'parental supervision',
        vi: 'sự giám sát của phụ huynh',
        example: 'Online content should be accessed with parental supervision.',
      },
    ],
    examples: [
      {
        en: 'The laboratory experiment was conducted under rigorous supervision.',
        vi: 'Thí nghiệm phòng lab được tiến hành dưới sự giám sát nghiêm ngặt.',
      },
    ],
    synonyms: [{ term: 'oversight', vi: 'sự trông nom' }, { term: 'monitoring', vi: 'sự theo dõi' }, { term: 'surveillance', vi: 'sự theo dõi giám sát' }],
    antonyms: [{ term: 'neglect', vi: 'sự bỏ bê' }],
  },

  supervisor: {
    id: 'supervisor',
    term: 'supervisor',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈsuːpərvaɪzər/',
    phoneticUk: '/ˈsuːpəvaɪzə(r)/',
    definitionVi: 'người giám sát, quản đốc, người hướng dẫn nghiên cứu sinh',
    definitionEn: 'a person who stands over or directs a worker, student, or other person',
    cefrLevel: 'B2',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      prefix: 'super-',
      prefixVi: 'ở trên',
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-or',
      suffixVi: 'người làm',
      formula: 'supervise (giám sát) + -or (người làm) → supervisor (người giám sát, quản đốc)',
      explanation: 'Người chịu trách nhiệm theo dõi và hướng dẫn cấp dưới hoàn thành nhiệm vụ.',
    },
    wordFamily: {
      nouns: [
        { term: 'supervisor', vi: 'quản đốc' },
        { term: 'supervision', vi: 'sự giám sát' },
      ],
      verbs: [{ term: 'supervise', vi: 'giám sát' }],
      adjectives: [{ term: 'supervisory', vi: 'có thẩm quyền giám sát' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'academic supervisor',
        vi: 'giáo sư hướng dẫn học thuật',
        example: 'Her PhD thesis supervisor provided invaluable feedback.',
      },
      {
        phrase: 'immediate supervisor',
        vi: 'cấp trên trực tiếp',
        example: 'Report any equipment malfunction to your immediate supervisor.' },
    ],
    examples: [
      {
        en: 'The shift supervisor ensures factory operations run smoothly.',
        vi: 'Quản đốc ca trực đảm bảo hoạt động nhà máy diễn ra suôn sẻ.',
      },
    ],
    synonyms: [{ term: 'manager', vi: 'quản lý' }, { term: 'overseer', vi: 'người trông nom' }, { term: 'mentor', vi: 'người hướng dẫn' }],
    antonyms: [{ term: 'subordinate', vi: 'cấp dưới' }, { term: 'trainee', vi: 'người thực tập' }],
  },

  revision: {
    id: 'revision',
    term: 'revision',
    partOfSpeech: 'n.',
    phoneticUs: '/rɪˈvɪʒn/',
    phoneticUk: '/rɪˈvɪʒn/',
    definitionVi: 'sự xem lại, ôn tập bài vở; bản sửa đổi hoàn thiện văn bản',
    definitionEn: 'the act of revising or altering; a revised edition or form of something; studying previously learned material',
    cefrLevel: 'B1',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      prefix: 're-',
      prefixVi: 'lại',
      rootParts: [{ text: 'vis', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 're- (lại) + vis (nhìn) + -ion → revision (sự nhìn lại kiểm tra để sửa đổi → ôn tập, tu chỉnh)',
      explanation: 'Quá trình xem xét lại toàn bộ kiến thức hoặc chỉnh lý văn kiện.',
    },
    wordFamily: {
      nouns: [{ term: 'revision', vi: 'sự ôn tập, bản sửa đổi' }],
      verbs: [{ term: 'revise', vi: 'ôn tập, sửa đổi' }],
      adjectives: [{ term: 'revised', vi: 'đã sửa đổi' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'exam revision',
        vi: 'việc ôn thi',
        example: 'Exam revision timetable helps students manage study hours.',
      },
      {
        phrase: 'major / minor revision',
        vi: 'sửa đổi lớn / nhỏ',
        example: 'The manuscript required only minor revisions before publication.',
      },
    ],
    examples: [
      {
        en: 'Daily revision prevents vocabulary from slipping away.',
        vi: 'Ôn tập hàng ngày ngăn từ vựng không bị trôi đi mất.',
      },
    ],
    synonyms: [{ term: 'review', vi: 'sự xem xét lại' }, { term: 'amendment', vi: 'sự tu chính' }, { term: 'alteration', vi: 'sự biến đổi' }],
    antonyms: [{ term: 'original version', vi: 'bản gốc ban đầu' }],
  },

  evidence: {
    id: 'evidence',
    term: 'evidence',
    partOfSpeech: 'n., v.',
    phoneticUs: '/ˈevɪdəns/',
    phoneticUk: '/ˈevɪdəns/',
    definitionVi: 'bằng chứng, chứng cứ rành rành; chứng minh (v)',
    definitionEn: 'the available body of facts or information indicating whether a belief or proposition is true or valid',
    cefrLevel: 'B1',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      prefix: 'e-',
      prefixVi: 'ra ngoài, lộ ra',
      rootParts: [{ text: 'vid', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ence',
      suffixVi: 'danh từ',
      formula: 'e- (lộ ra) + vid (nhìn) + -ence → evidence (vật chứng lộ rõ ra trước mắt ai cũng thấy được → bằng chứng, chứng cứ)',
      explanation: 'Những dữ kiện thực tế hiển hiện không thể chối cãi để chứng minh sự thật.',
    },
    wordFamily: {
      nouns: [{ term: 'evidence', vi: 'bằng chứng' }],
      verbs: [{ term: 'evidence', vi: 'chứng minh' }],
      adjectives: [
        { term: 'evident', vi: 'rõ ràng' },
        { term: 'evidential', vi: 'mang tính chứng cứ' },
      ],
      adverbs: [{ term: 'evidently', vi: 'hiển nhiên là' }],
    },
    collocations: [
      {
        phrase: 'scientific evidence',
        vi: 'bằng chứng khoa học',
        example: 'There is overwhelming scientific evidence supporting renewable energy.',
      },
      {
        phrase: 'evidence-based',
        vi: 'dựa trên bằng chứng',
        example: 'Doctors rely on evidence-based medicine for safe treatments.',
      },
    ],
    examples: [
      {
        en: 'Forensic investigators collected fingerprint evidence from the window frame.',
        vi: 'Các điều tra viên pháp y đã thu thập bằng chứng dấu vân tay từ khung cửa sổ.',
      },
    ],
    synonyms: [{ term: 'proof', vi: 'bằng chứng' }, { term: 'testimony', vi: 'lời khai làm chứng' }, { term: 'confirmation', vi: 'sự xác nhận' }],
    antonyms: [{ term: 'disproof', vi: 'sự bác bỏ' }, { term: 'hearsay', vi: 'tin đồn vô căn cứ' }],
  },

  evidently: {
    id: 'evidently',
    term: 'evidently',
    partOfSpeech: 'adv.',
    phoneticUs: '/ˈevɪdəntli/',
    phoneticUk: '/ˈevɪdəntli/',
    definitionVi: 'rõ ràng là, hiển nhiên là, theo như thấy rõ',
    definitionEn: 'in a way that is clearly seen or understood; plainly; according to what is observed',
    cefrLevel: 'B2',
    roots: [{ rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn thấy, tầm nhìn' }],
    anatomy: {
      prefix: 'e-',
      prefixVi: 'lộ ra',
      rootParts: [{ text: 'vid', rootId: 'vid_vis', rootName: 'Vid, Vis', meaningVi: 'nhìn' }],
      suffix: '-ently',
      suffixVi: 'trạng từ',
      formula: 'evident (rõ ràng) + -ly → evidently (rõ ràng là, hiển nhiên là)',
      explanation: 'Được kết luận dựa trên những biểu hiện hoặc chứng cứ hiển hiện ra bên ngoài.',
    },
    wordFamily: {
      nouns: [{ term: 'evidence', vi: 'bằng chứng' }],
      verbs: [],
      adjectives: [{ term: 'evident', vi: 'rõ ràng' }],
      adverbs: [{ term: 'evidently', vi: 'rõ ràng là' }],
    },
    collocations: [
      {
        phrase: 'evidently clear',
        vi: 'rõ ràng rành mạch',
        example: 'The instructions were evidently clear to everyone.',
      },
    ],
    examples: [
      {
        en: 'He was evidently pleased with the unexpected test results.',
        vi: 'Anh ấy rõ ràng là rất hài lòng với kết quả bài kiểm tra bất ngờ.',
      },
    ],
    synonyms: [{ term: 'obviously', vi: 'rõ ràng' }, { term: 'plainly', vi: 'rành rọt' }, { term: 'apparently', vi: 'dường như rõ thấy' }],
    antonyms: [{ term: 'doubtfully', vi: 'ngờ vực' }, { term: 'obscurely', vi: 'mờ ám' }],
  },

  abstraction: {
    id: 'abstraction',
    term: 'abstraction',
    partOfSpeech: 'n.',
    phoneticUs: '/æbˈstrækʃn/',
    phoneticUk: '/æbˈstrækʃn/',
    definitionVi: 'sự trừu tượng hóa, khái niệm trừu tượng; sự lơ đễnh',
    definitionEn: 'the quality of dealing with ideas rather than events; freedom from representational qualities in art',
    cefrLevel: 'C1',
    roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
    anatomy: {
      prefix: 'ab-',
      prefixVi: 'tách ra',
      rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'abstract + -ion → abstraction (quá trình trừu tượng hóa các nguyên lý)',
      explanation: 'Việc khái quát hóa từ các trường hợp riêng lẻ thành một nguyên lý bao quát.',
    },
    wordFamily: {
      nouns: [{ term: 'abstraction', vi: 'sự trừu tượng hóa' }, { term: 'abstract', vi: 'bản tóm tắt' }],
      verbs: [{ term: 'abstract', vi: 'tóm tắt' }],
      adjectives: [{ term: 'abstract', vi: 'trừu tượng' }],
      adverbs: [{ term: 'abstractly', vi: 'về mặt trừu tượng' }],
    },
    collocations: [
      {
        phrase: 'levels of abstraction',
        vi: 'các tầng mức trừu tượng hóa (trong khoa học máy tính)',
        example: 'High-level programming languages provide powerful abstractions over hardware.',
      },
    ],
    examples: [
      {
        en: 'Concepts like justice and freedom are philosophical abstractions.',
        vi: 'Các khái niệm như công lý và tự do là những khái niệm trừu tượng mang tính triết học.',
      },
    ],
    synonyms: [{ term: 'generalization', vi: 'sự khái quát hóa' }, { term: 'concept', vi: 'khái niệm' }],
    antonyms: [{ term: 'concreteness', vi: 'tính cụ thể' }],
  },

  attraction: {
    id: 'attraction',
    term: 'attraction',
    partOfSpeech: 'n.',
    phoneticUs: '/əˈtrækʃn/',
    phoneticUk: '/əˈtrækʃn/',
    definitionVi: 'sự thu hút, sức hấp dẫn, điểm tham quan du lịch',
    definitionEn: 'the action or power of evoking interest or liking; a place which draws visitors',
    cefrLevel: 'B1',
    roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
    anatomy: {
      prefix: 'at-',
      prefixVi: 'hướng về',
      rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'attract + -ion → attraction (lực kéo lôi cuốn người hoặc vật về phía mình)',
      explanation: 'Sức hấp dẫn tạo ra động lực hướng tâm lôi kéo mọi người tìm đến.',
    },
    wordFamily: {
      nouns: [{ term: 'attraction', vi: 'sự thu hút' }, { term: 'attractiveness', vi: 'vẻ hấp dẫn' }],
      verbs: [{ term: 'attract', vi: 'thu hút' }],
      adjectives: [{ term: 'attractive', vi: 'quyến rũ' }],
      adverbs: [{ term: 'attractively', vi: 'hấp dẫn' }],
    },
    collocations: [
      {
        phrase: 'gravitational attraction',
        vi: 'lực hút hấp dẫn',
        example: 'The Moon orbits Earth due to gravitational attraction.',
      },
      {
        phrase: 'major tourist attraction',
        vi: 'điểm tham quan du lịch trọng điểm',
        example: 'The Eiffel Tower is a major global tourist attraction.',
      },
    ],
    examples: [
      {
        en: 'The city’s rich cultural heritage is its greatest attraction.',
        vi: 'Di sản văn hóa phong phú của thành phố chính là sức hút lớn nhất của nó.',
      },
    ],
    synonyms: [{ term: 'appeal', vi: 'sức hấp dẫn' }, { term: 'charm', vi: 'nét quyến rũ' }, { term: 'magnetism', vi: 'sức hút' }],
    antonyms: [{ term: 'repulsion', vi: 'sự đẩy lùi' }],
  },

  attractive: {
    id: 'attractive',
    term: 'attractive',
    partOfSpeech: 'adj.',
    phoneticUs: '/əˈtræktɪv/',
    phoneticUk: '/əˈtræktɪv/',
    definitionVi: 'hấp dẫn, quyến rũ, bắt mắt, lôi cuốn',
    definitionEn: 'pleasing or appealing to the senses; having qualities that arouse interest and enthusiasm',
    cefrLevel: 'A2',
    roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
    anatomy: {
      prefix: 'at-',
      prefixVi: 'hướng về',
      rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
      suffix: '-ive',
      suffixVi: 'tính từ',
      formula: 'attract + -ive → attractive (có khả năng lôi cuốn mọi ánh nhìn)',
      explanation: 'Mang những phẩm chất khiến người khác muốn tiếp cận và gắn kết.',
    },
    wordFamily: {
      nouns: [{ term: 'attraction', vi: 'sự thu hút' }],
      verbs: [{ term: 'attract', vi: 'thu hút' }],
      adjectives: [{ term: 'attractive', vi: 'hấp dẫn' }, { term: 'unattractive', vi: 'kém hấp dẫn' }],
      adverbs: [{ term: 'attractively', vi: 'một cách hấp dẫn' }],
    },
    collocations: [
      {
        phrase: 'attractive offer / salary',
        vi: 'lời đề nghị / mức lương hấp dẫn',
        example: 'The tech company offered an exceptionally attractive salary package.',
      },
    ],
    examples: [
      {
        en: 'The apartment is in an attractive neighborhood close to parks and schools.',
        vi: 'Căn hộ nằm trong một khu dân cư đáng sống, gần công viên và trường học.',
      },
    ],
    synonyms: [{ term: 'appealing', vi: 'lôi cuốn' }, { term: 'charming', vi: 'duyên dáng' }, { term: 'alluring', vi: 'quyến rũ' }],
    antonyms: [{ term: 'unattractive', vi: 'xấu xí' }, { term: 'repulsive', vi: 'đáng ghét' }],
  },

  contraction: {
    id: 'contraction',
    term: 'contraction',
    partOfSpeech: 'n.',
    phoneticUs: '/kənˈtrækʃn/',
    phoneticUk: '/kənˈtrækʃn/',
    definitionVi: 'sự co lại, sự thu hẹp quy mô kinh tế; từ viết tắt',
    definitionEn: 'the process of becoming smaller; a shortened form of a word or words',
    cefrLevel: 'B2',
    roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
    anatomy: {
      prefix: 'con-',
      prefixVi: 'cùng nhau',
      rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'contract (co lại) + -ion → contraction (quá trình co ngắn lại)',
      explanation: 'Sự rút bớt kích thước hoặc rút gọn các chữ cái trong ngôn ngữ.',
    },
    wordFamily: {
      nouns: [{ term: 'contraction', vi: 'sự co rút' }, { term: 'contract', vi: 'hợp đồng' }],
      verbs: [{ term: 'contract', vi: 'co lại' }],
      adjectives: [{ term: 'contractile', vi: 'có khả năng co rút' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'muscle contraction',
        vi: 'sự co cơ bắp',
        example: 'Calcium ions trigger muscle contraction during exercise.',
      },
      {
        phrase: 'economic contraction',
        vi: 'sự suy giảm / co hẹp kinh tế',
        example: 'Rising interest rates led to a brief economic contraction.',
      },
    ],
    examples: [
      {
        en: '"Don’t" is a common contraction of "do not".',
        vi: '"Don’t" là dạng viết tắt phổ biến của "do not".',
      },
    ],
    synonyms: [{ term: 'shrinkage', vi: 'sự co ngắn' }, { term: 'reduction', vi: 'sự cắt giảm' }],
    antonyms: [{ term: 'expansion', vi: 'sự giãn nở' }],
  },

  contractor: {
    id: 'contractor',
    term: 'contractor',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈkɑːntræktər/',
    phoneticUk: '/kənˈtræktə(r)/',
    definitionVi: 'nhà thầu, người hoặc công ty nhận hợp đồng thi công dự án',
    definitionEn: 'a person or company that undertakes a contract to provide materials or labor for a project',
    cefrLevel: 'B2',
    roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
    anatomy: {
      prefix: 'con-',
      prefixVi: 'cùng nhau',
      rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
      suffix: '-or',
      suffixVi: 'người/đơn vị làm',
      formula: 'contract (hợp đồng) + -or → contractor (nhà thầu nhận thi công theo hợp đồng)',
      explanation: 'Đơn vị đứng ra ký kết hợp đồng pháp lý để cam kết bàn giao công trình.',
    },
    wordFamily: {
      nouns: [{ term: 'contractor', vi: 'nhà thầu' }, { term: 'contract', vi: 'hợp đồng' }],
      verbs: [{ term: 'contract', vi: 'ký hợp đồng' }],
      adjectives: [{ term: 'contractual', vi: 'thuộc hợp đồng' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'building / general contractor',
        vi: 'tổng thầu xây dựng',
        example: 'The general contractor hired specialized subcontractors for plumbing.',
      },
    ],
    examples: [
      {
        en: 'The government hired an independent contractor to build the highway.',
        vi: 'Chính phủ đã thuê một nhà thầu độc lập để xây dựng tuyến đường cao tốc.',
      },
    ],
    synonyms: [{ term: 'builder', vi: 'người xây dựng' }, { term: 'supplier', vi: 'nhà cung ứng' }],
    antonyms: [],
  },

  distraction: {
    id: 'distraction',
    term: 'distraction',
    partOfSpeech: 'n.',
    phoneticUs: '/dɪˈstrækʃn/',
    phoneticUk: '/dɪˈstrækʃn/',
    definitionVi: 'sự xao nhãng, điều gây mất tập trung, hoạt động giải trí tiêu khiển',
    definitionEn: 'a thing that prevents someone from giving full attention to something else; an extreme agitation of the mind',
    cefrLevel: 'B1',
    roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
    anatomy: {
      prefix: 'dis-',
      prefixVi: 'rời đi',
      rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'distract + -ion → distraction (sự lôi kéo tâm trí lệch khỏi mục tiêu)',
      explanation: 'Bất kỳ tác nhân nào kéo sự chú ý của con người ra khỏi việc chính.',
    },
    wordFamily: {
      nouns: [{ term: 'distraction', vi: 'sự xao nhãng' }],
      verbs: [{ term: 'distract', vi: 'làm xao nhãng' }],
      adjectives: [{ term: 'distracted', vi: 'mất tập trung' }, { term: 'distracting', vi: 'gây phân tâm' }],
      adverbs: [{ term: 'distractedly', vi: 'một cách lơ đãng' }],
    },
    collocations: [
      {
        phrase: 'free from distractions',
        vi: 'không bị xao nhãng',
        example: 'A quiet library environment is free from digital distractions.',
      },
    ],
    examples: [
      {
        en: 'Social media notifications are the biggest distraction for modern students.',
        vi: 'Thông báo mạng xã hội là yếu tố gây xao nhãng lớn nhất đối với học sinh thời nay.',
      },
    ],
    synonyms: [{ term: 'diversion', vi: 'sự chuyển hướng' }, { term: 'interruption', vi: 'sự gián đoạn' }],
    antonyms: [{ term: 'concentration', vi: 'sự tập trung' }, { term: 'focus', vi: 'sự chú tâm' }],
  },

  extraction: {
    id: 'extraction',
    term: 'extraction',
    partOfSpeech: 'n.',
    phoneticUs: '/ɪkˈstrækʃn/',
    phoneticUk: '/ɪkˈstrækʃn/',
    definitionVi: 'sự chiết xuất, quá trình khai thác khoáng sản; việc nhổ răng; nguồn gốc dòng dõi',
    definitionEn: 'the action of taking out something, especially using effort or force; ethnic or national origin',
    cefrLevel: 'B2',
    roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
    anatomy: {
      prefix: 'ex-',
      prefixVi: 'ra ngoài',
      rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'extract + -ion → extraction (quá trình kéo rút tinh chất / vật phẩm ra ngoài)',
      explanation: 'Công đoạn tách riêng một thành phần quý từ lòng đất hoặc hợp chất.',
    },
    wordFamily: {
      nouns: [{ term: 'extraction', vi: 'sự chiết xuất, việc nhổ răng' }, { term: 'extractor', vi: 'máy hút' }],
      verbs: [{ term: 'extract', vi: 'chiết xuất' }],
      adjectives: [{ term: 'extractable', vi: 'có thể chiết xuất' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'oil / mineral extraction',
        vi: 'khai thác dầu mỏ / khoáng sản',
        example: 'Deep-sea oil extraction requires advanced underwater robotics.',
      },
      {
        phrase: 'of French / Asian extraction',
        vi: 'có gốc gác Pháp / Châu Á',
        example: 'She is an American citizen of Vietnamese extraction.',
      },
    ],
    examples: [
      {
        en: 'The dentist performed a painless tooth extraction under local anesthesia.',
        vi: 'Nha sĩ đã thực hiện ca nhổ răng không đau dưới sự gây tê cục bộ.',
      },
    ],
    synonyms: [{ term: 'removal', vi: 'sự loại bỏ' }, { term: 'derivation', vi: 'sự bắt nguồn' }, { term: 'ancestry', vi: 'dòng dõi' }],
    antonyms: [{ term: 'insertion', vi: 'sự đưa vào' }],
  },

  tractor: {
    id: 'tractor',
    term: 'tractor',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈtræktər/',
    phoneticUk: '/ˈtræktə(r)/',
    definitionVi: 'máy kéo, đầu kéo nông nghiệp/công nghiệp',
    definitionEn: 'a powerful motor vehicle with large rear wheels, used chiefly on farms for hauling equipment and trailers',
    cefrLevel: 'B1',
    roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
    anatomy: {
      rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
      suffix: '-or',
      suffixVi: 'cỗ máy / vật làm',
      formula: 'tract (kéo) + -or → tractor (cỗ máy dùng để kéo cày bừa trên đồng ruộng)',
      explanation: 'Phương tiện cơ giới có lực kéo cực mạnh phục vụ nông nghiệp và xây dựng.',
    },
    wordFamily: {
      nouns: [{ term: 'tractor', vi: 'máy kéo' }, { term: 'traction', vi: 'lực kéo' }],
      verbs: [],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'drive a tractor',
        vi: 'lái máy kéo',
        example: 'Modern farmers use GPS-guided tractors to plow fields with precision.',
      },
    ],
    examples: [
      {
        en: 'The tractor pulled a heavy plow across the fertile farmland.',
        vi: 'Chiếc máy kéo đã kéo một chiếc cày nặng băng qua cánh đồng phì nhiêu.',
      },
    ],
    synonyms: [{ term: 'hauler', vi: 'xe kéo' }, { term: 'farm vehicle', vi: 'xe nông dụng' }],
    antonyms: [],
  },

  subtraction: {
    id: 'subtraction',
    term: 'subtraction',
    partOfSpeech: 'n.',
    phoneticUs: '/səbˈtrækʃn/',
    phoneticUk: '/səbˈtrækʃn/',
    definitionVi: 'phép trừ, sự khấu trừ, sự bớt đi',
    definitionEn: 'the process or skill of taking one number or amount away from another',
    cefrLevel: 'B1',
    roots: [{ rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo, lôi, rút ra' }],
    anatomy: {
      prefix: 'sub-',
      prefixVi: 'bớt đi, ở dưới',
      rootParts: [{ text: 'tract', rootId: 'tract_stract', rootName: 'Tract, Stract', meaningVi: 'kéo' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'subtract + -ion → subtraction (phép toán kéo bớt một phần ra khỏi tổng số)',
      explanation: 'Một trong bốn phép toán cơ bản của số học để tìm khoảng chênh lệch.',
    },
    wordFamily: {
      nouns: [{ term: 'subtraction', vi: 'phép trừ' }],
      verbs: [{ term: 'subtract', vi: 'làm phép trừ' }],
      adjectives: [{ term: 'subtractive', vi: 'có tính trừ bớt' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'addition and subtraction',
        vi: 'phép cộng và phép trừ',
        example: 'Mastering addition and subtraction is the foundation of elementary mathematics.',
      },
    ],
    examples: [
      {
        en: 'Simple subtraction shows that our monthly savings increased by twenty percent.',
        vi: 'Một phép trừ đơn giản cho thấy khoản tiết kiệm hàng tháng của chúng ta đã tăng hai mươi phần trăm.',
      },
    ],
    synonyms: [{ term: 'deduction', vi: 'sự khấu trừ' }, { term: 'diminution', vi: 'sự giảm bớt' }],
    antonyms: [{ term: 'addition', vi: 'phép cộng' }],
  },

  circumspection: {
    id: 'circumspection',
    term: 'circumspection',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌsɜːrkəmˈspekʃn/',
    phoneticUk: '/ˌsɜːkəmˈspekʃn/',
    definitionVi: 'sự thận trọng, tính cẩn mật, sự cẩn tắc chu đáo',
    definitionEn: 'the quality of being wary and unwilling to take risks; prudence',
    cefrLevel: 'C1',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      prefix: 'circum-',
      prefixVi: 'xung quanh',
      rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'circumspect + -ion → circumspection (thói quen quan sát bốn bề cẩn trọng)',
      explanation: 'Phẩm chất thận trọng suy xét mọi ngóc ngách trước khi quyết định.',
    },
    wordFamily: {
      nouns: [{ term: 'circumspection', vi: 'sự thận trọng' }],
      verbs: [],
      adjectives: [{ term: 'circumspect', vi: 'thận trọng' }],
      adverbs: [{ term: 'circumspectly', vi: 'một cách thận trọng' }],
    },
    collocations: [
      {
        phrase: 'exercise circumspection',
        vi: 'thực hiện sự thận trọng tối đa',
        example: 'Executives must exercise great circumspection when negotiating cross-border mergers.',
      },
    ],
    examples: [
      {
        en: 'This sensitive diplomatic situation calls for extreme circumspection.',
        vi: 'Tình huống ngoại giao nhạy cảm này đòi hỏi sự thận trọng cao độ.',
      },
    ],
    synonyms: [{ term: 'prudence', vi: 'sự cẩn trọng' }, { term: 'caution', vi: 'sự cảnh giác' }],
    antonyms: [{ term: 'recklessness', vi: 'sự liều lĩnh' }, { term: 'indiscretion', vi: 'sự bồng bột' }],
  },

  inconspicuous: {
    id: 'inconspicuous',
    term: 'inconspicuous',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˌɪnkənˈspɪkjuəs/',
    phoneticUk: '/ˌɪnkənˈspɪkjuəs/',
    definitionVi: 'kín đáo, không gây chú ý, không nổi bật',
    definitionEn: 'not clearly visible or attracting attention',
    cefrLevel: 'B2',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'không',
      rootParts: [{ text: 'spic', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-uous',
      suffixVi: 'tính từ',
      formula: 'in- (không) + conspicuous (nổi bật) → inconspicuous (kín đáo, hòa lẫn vào đám đông)',
      explanation: 'Không gây sự chú ý của mắt thường.',
    },
    wordFamily: {
      nouns: [{ term: 'conspicuousness', vi: 'sự nổi bật' }],
      verbs: [],
      adjectives: [{ term: 'inconspicuous', vi: 'kín đáo' }, { term: 'conspicuous', vi: 'nổi bật' }],
      adverbs: [{ term: 'inconspicuously', vi: 'một cách kín đáo' }],
    },
    collocations: [
      {
        phrase: 'inconspicuous camera / location',
        vi: 'camera ngụy trang kín đáo / địa điểm kín đáo',
        example: 'The security camera was placed in an inconspicuous corner of the lobby.',
      },
    ],
    examples: [
      {
        en: 'Undercover detectives tried to remain as inconspicuous as possible in the crowd.',
        vi: 'Các thám tử chìm đã cố gắng giữ mình kín đáo nhất có thể trong đám đông.',
      },
    ],
    synonyms: [{ term: 'unobtrusive', vi: 'khiêm tốn kín đáo' }, { term: 'unnoticeable', vi: 'khó nhận thấy' }],
    antonyms: [{ term: 'conspicuous', vi: 'nổi bật' }, { term: 'prominent', vi: 'nổi trội' }],
  },

  expectation: {
    id: 'expectation',
    term: 'expectation',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌekspekˈteɪʃn/',
    phoneticUk: '/ˌekspekˈteɪʃn/',
    definitionVi: 'sự kỳ vọng, niềm mong đợi, tiêu chuẩn mong muốn',
    definitionEn: 'a strong belief that something will happen or be the case in the future',
    cefrLevel: 'B1',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      prefix: 'ex-',
      prefixVi: 'ra ngoài',
      rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-ation',
      suffixVi: 'danh từ',
      formula: 'expect + -ation → expectation (sự ngóng đợi hướng về tương lai)',
      explanation: 'Niềm tin và mong mỏi về kết quả tốt đẹp trong tương lai.',
    },
    wordFamily: {
      nouns: [{ term: 'expectation', vi: 'sự kỳ vọng' }, { term: 'expectancy', vi: 'sự mong chờ' }],
      verbs: [{ term: 'expect', vi: 'kỳ vọng' }],
      adjectives: [{ term: 'expected', vi: 'dự kiến' }, { term: 'unexpected', vi: 'bất ngờ' }],
      adverbs: [{ term: 'expectedly', vi: 'đúng dự kiến' }, { term: 'unexpectedly', vi: 'bất ngờ' }],
    },
    collocations: [
      {
        phrase: 'meet / live up to expectations',
        vi: 'đáp ứng kỳ vọng',
        example: 'The new smartphone camera lived up to customer expectations.',
      },
    ],
    examples: [
      {
        en: 'Parents often have high academic expectations for their children.',
        vi: 'Cha mẹ thường đặt nhiều kỳ vọng học tập lớn lao vào con cái.',
      },
    ],
    synonyms: [{ term: 'anticipation', vi: 'sự đón chờ' }, { term: 'hope', vi: 'hy vọng' }, { term: 'prospect', vi: 'viễn cảnh' }],
    antonyms: [{ term: 'disappointment', vi: 'sự thất vọng' }],
  },

  inspection: {
    id: 'inspection',
    term: 'inspection',
    partOfSpeech: 'n.',
    phoneticUs: '/ɪnˈspekʃn/',
    phoneticUk: '/ɪnˈspekʃn/',
    definitionVi: 'cuộc thanh tra, việc kiểm tra chất lượng, giám định kỹ thuật',
    definitionEn: 'careful examination or scrutiny',
    cefrLevel: 'B1',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'vào trong',
      rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'inspect + -ion → inspection (hoạt động soi xét kiểm tra vào bên trong)',
      explanation: 'Quy trình kiểm tra chi tiết để xác định mức độ tuân thủ tiêu chuẩn an toàn.',
    },
    wordFamily: {
      nouns: [{ term: 'inspection', vi: 'cuộc thanh tra' }, { term: 'inspector', vi: 'thanh tra viên' }],
      verbs: [{ term: 'inspect', vi: 'thanh tra' }],
      adjectives: [{ term: 'inspective', vi: 'thuộc thanh tra' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'on closer inspection',
        vi: 'khi nhìn / kiểm tra kỹ hơn',
        example: 'On closer inspection, the painting turned out to be a masterfully crafted forgery.',
      },
      {
        phrase: 'routine inspection',
        vi: 'kiểm tra định kỳ',
        example: 'The building passed its routine fire safety inspection.',
      },
    ],
    examples: [
      {
        en: 'The elevator undergoes a strict mechanical inspection every six months.',
        vi: 'Thang máy phải trải qua đợt kiểm định cơ khí nghiêm ngặt mỗi sáu tháng một lần.',
      },
    ],
    synonyms: [{ term: 'examination', vi: 'sự kiểm tra' }, { term: 'scrutiny', vi: 'sự soi xét kỹ' }, { term: 'audit', vi: 'kiểm toán' }],
    antonyms: [{ term: 'negligence', vi: 'sự chểnh mảng' }],
  },

  inspector: {
    id: 'inspector',
    term: 'inspector',
    partOfSpeech: 'n.',
    phoneticUs: '/ɪnˈspektər/',
    phoneticUk: '/ɪnˈspektə(r)/',
    definitionVi: 'thanh tra viên, giám định viên, thanh tra cảnh sát',
    definitionEn: 'an official employed to ensure that official regulations are being obeyed',
    cefrLevel: 'B1',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'vào trong',
      rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-or',
      suffixVi: 'người thực hiện',
      formula: 'inspect + -or → inspector (người chuyên soi xét kiểm tra quy chuẩn)',
      explanation: 'Chuyên gia có thẩm quyền kiểm tra và giám định.',
    },
    wordFamily: {
      nouns: [{ term: 'inspector', vi: 'thanh tra viên' }, { term: 'inspection', vi: 'sự thanh tra' }],
      verbs: [{ term: 'inspect', vi: 'thanh tra' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'health / building inspector',
        vi: 'thanh tra y tế / xây dựng',
        example: 'The building inspector approved the foundation structure.',
      },
    ],
    examples: [
      {
        en: 'The police inspector questioned all witnesses at the crime scene.',
        vi: 'Viên thanh tra cảnh sát đã thẩm vấn mọi nhân chứng tại hiện trường vụ án.',
      },
    ],
    synonyms: [{ term: 'examiner', vi: 'người thẩm tra' }, { term: 'auditor', vi: 'kiểm toán viên' }],
    antonyms: [],
  },

  introspection: {
    id: 'introspection',
    term: 'introspection',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌɪntrəˈspekʃn/',
    phoneticUk: '/ˌɪntrəˈspekʃn/',
    definitionVi: 'sự nội quan, sự tự soi chiếu tâm hồn, tự kiểm điểm nội tâm',
    definitionEn: 'the examination or observation of one’s own mental and emotional processes',
    cefrLevel: 'C1',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      prefix: 'intro-',
      prefixVi: 'vào trong',
      rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'intro- (vào trong) + spect (nhìn) + -ion → introspection (sự quay nhìn vào chiều sâu tâm thức)',
      explanation: 'Phương pháp tự quan sát và phân tích cảm xúc, tư duy của chính mình.',
    },
    wordFamily: {
      nouns: [{ term: 'introspection', vi: 'sự nội quan' }],
      verbs: [{ term: 'introspect', vi: 'tự quán chiếu' }],
      adjectives: [{ term: 'introspective', vi: 'nội tâm' }],
      adverbs: [{ term: 'introspectively', vi: 'về nội tâm' }],
    },
    collocations: [
      {
        phrase: 'deep introspection',
        vi: 'sự nội quan sâu sắc',
        example: 'After the crisis, the leadership team engaged in deep introspection.',
      },
    ],
    examples: [
      {
        en: 'A period of quiet introspection helped him discover his true life purpose.',
        vi: 'Một khoảng thời gian tĩnh lặng để tự soi chiếu tâm hồn đã giúp anh tìm ra mục đích sống đích thực.',
      },
    ],
    synonyms: [{ term: 'self-analysis', vi: 'sự tự phân tích' }, { term: 'soul-searching', vi: 'sự tự vấn tâm can' }],
    antonyms: [{ term: 'extroversion', vi: 'tính hướng ngoại' }],
  },

  spectacular: {
    id: 'spectacular',
    term: 'spectacular',
    partOfSpeech: 'adj.',
    phoneticUs: '/spekˈtækjələr/',
    phoneticUk: '/spekˈtækjələ(r)/',
    definitionVi: 'ngoạn mục, hùng vĩ, tuyệt đẹp đập vào mắt người xem',
    definitionEn: 'beautiful in a dramatic and eye-catching way; strikingly large or obvious',
    cefrLevel: 'B1',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-ular',
      suffixVi: 'tính từ',
      formula: 'spect (nhìn) + -ular → spectacular (có vẻ đẹp hùng vĩ lôi cuốn mọi ánh mắt)',
      explanation: 'Mang vẻ đẹp gây choáng ngợp thị giác.',
    },
    wordFamily: {
      nouns: [{ term: 'spectacle', vi: 'quang cảnh kỳ vĩ' }, { term: 'spectator', vi: 'khán giả' }],
      verbs: [],
      adjectives: [{ term: 'spectacular', vi: 'ngoạn mục' }],
      adverbs: [{ term: 'spectacularly', vi: 'một cách ngoạn mục' }],
    },
    collocations: [
      {
        phrase: 'spectacular view / scenery',
        vi: 'tầm nhìn / phong cảnh ngoạn mục',
        example: 'The mountain peak offers a spectacular view of the entire valley.',
      },
      {
        phrase: 'spectacular success',
        vi: 'thành công vang dội',
        example: 'The product launch was a spectacular success worldwide.',
      },
    ],
    examples: [
      {
        en: 'The Grand Canyon is one of the most spectacular natural wonders on Earth.',
        vi: 'Hẻm núi Grand Canyon là một trong những kỳ quan thiên nhiên ngoạn mục nhất trên Trái Đất.',
      },
    ],
    synonyms: [{ term: 'breathtaking', vi: 'đẹp nín thở' }, { term: 'stunning', vi: 'tuyệt mỹ' }, { term: 'magnificent', vi: 'tráng lệ' }],
    antonyms: [{ term: 'unimpressive', vi: 'không ấn tượng' }, { term: 'mediocre', vi: 'bình thường' }],
  },

  spectator: {
    id: 'spectator',
    term: 'spectator',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈspekteɪtər/',
    phoneticUk: '/spekˈteɪtə(r)/',
    definitionVi: 'khán giả xem trực tiếp (tại sân vận động, sự kiện thể thao)',
    definitionEn: 'a person who watches at a show, game, or other event',
    cefrLevel: 'B1',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-ator',
      suffixVi: 'người xem',
      formula: 'spect (nhìn) + -ator → spectator (người đến tận nơi ngắm nhìn trực tiếp trận đấu)',
      explanation: 'Người trực tiếp có mặt để theo dõi một sự kiện thể thao hoặc trình diễn.',
    },
    wordFamily: {
      nouns: [{ term: 'spectator', vi: 'khán giả sân vận động' }, { term: 'spectacle', vi: 'quang cảnh' }],
      verbs: [],
      adjectives: [{ term: 'spectacular', vi: 'ngoạn mục' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'spectator sports',
        vi: 'các môn thể thao thu hút đông người xem',
        example: 'Baseball and basketball are premier spectator sports in America.',
      },
    ],
    examples: [
      {
        en: 'Over eighty thousand spectators packed the stadium for the championship final.',
        vi: 'Hơn tám mươi nghìn khán giả đã chật kín sân vận động cho trận chung kết vô địch.',
      },
    ],
    synonyms: [{ term: 'viewer', vi: 'người xem' }, { term: 'onlooker', vi: 'người đứng xem' }, { term: 'watcher', vi: 'người theo dõi' }],
    antonyms: [{ term: 'participant', vi: 'người tham gia thi đấu' }],
  },

  spectrum: {
    id: 'spectrum',
    term: 'spectrum',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈspektrəm/',
    phoneticUk: '/ˈspektrəm/',
    definitionVi: 'quang phổ (dải màu ánh sáng); chuỗi phân bổ đa dạng, phổ rộng',
    definitionEn: 'a band of colors, as seen in a rainbow; a wide range of varied but related ideas or objects',
    cefrLevel: 'B2',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      rootParts: [{ text: 'spect', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-um',
      suffixVi: 'danh từ Latin',
      formula: 'spect (nhìn thấy) + -um → spectrum (dải quang phổ màu sắc mắt nhìn thấy được)',
      explanation: 'Dải màu sắc của ánh sáng khi tán sắc qua lăng kính, hoặc một thang đo trải dài nhiều cung bậc.',
    },
    wordFamily: {
      nouns: [{ term: 'spectrum', vi: 'quang phổ, dải phân bổ' }],
      verbs: [],
      adjectives: [{ term: 'spectral', vi: 'thuộc về quang phổ' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'across the political spectrum',
        vi: 'trên toàn bộ các phe phái chính trị',
        example: 'The bill received bipartisan support across the political spectrum.',
      },
      {
        phrase: 'electromagnetic spectrum',
        vi: 'phổ sóng điện từ',
        example: 'Visible light is only a tiny fraction of the electromagnetic spectrum.',
      },
    ],
    examples: [
      {
        en: 'A glass prism separates white sunlight into a brilliant spectrum of rainbow colors.',
        vi: 'Một lăng kính thủy tinh phân tách ánh sáng mặt trời thành một dải quang phổ màu sắc rực rỡ.',
      },
    ],
    synonyms: [{ term: 'range', vi: 'phạm vi' }, { term: 'gamut', vi: 'toàn bộ thang bậc' }, { term: 'span', vi: 'khoảng trải dài' }],
    antonyms: [],
  },

  suspicious: {
    id: 'suspicious',
    term: 'suspicious',
    partOfSpeech: 'adj.',
    phoneticUs: '/səˈspɪʃəs/',
    phoneticUk: '/səˈspɪʃəs/',
    definitionVi: 'khả nghi, đáng ngờ, đầy hoài nghi',
    definitionEn: 'having or showing a cautious distrust of someone or something',
    cefrLevel: 'B1',
    roots: [{ rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn, soi xét' }],
    anatomy: {
      prefix: 'sus-',
      prefixVi: 'ngầm, từ dưới',
      rootParts: [{ text: 'spic', rootId: 'spect_spic', rootName: 'Spect, Spic', meaningVi: 'nhìn' }],
      suffix: '-ious',
      suffixVi: 'tính từ',
      formula: 'sus- (từ dưới) + spic (nhìn) + -ious → suspicious (nhìn liếc với vẻ ngờ vực)',
      explanation: 'Thái độ ngờ vực, nghi ngại về động cơ hoặc tính xác thực.',
    },
    wordFamily: {
      nouns: [{ term: 'suspicion', vi: 'sự nghi ngờ' }, { term: 'suspect', vi: 'kẻ tình nghi' }],
      verbs: [{ term: 'suspect', vi: 'nghi ngờ' }],
      adjectives: [{ term: 'suspicious', vi: 'khả nghi' }, { term: 'unsuspecting', vi: 'không nghi ngờ' }],
      adverbs: [{ term: 'suspiciously', vi: 'một cách đáng ngờ' }],
    },
    collocations: [
      {
        phrase: 'suspicious behavior / activity',
        vi: 'hành vi / hoạt động khả nghi',
        example: 'Neighbors reported suspicious behavior near the bank late at night.',
      },
      {
        phrase: 'be suspicious of',
        vi: 'hoài nghi về',
        example: 'Consumers are increasingly suspicious of unsolicited emails requesting passwords.',
      },
    ],
    examples: [
      {
        en: 'The security guards stopped a suspicious man trying to enter the restricted area.',
        vi: 'Các nhân viên an ninh đã chặn một người đàn ông khả nghi đang cố đột nhập khu vực cấm.',
      },
    ],
    synonyms: [{ term: 'distrustful', vi: 'nghi ngại' }, { term: 'dubious', vi: 'mờ ám' }, { term: 'shady', vi: 'đáng ngờ' }],
    antonyms: [{ term: 'trusting', vi: 'tin cậy' }, { term: 'innocent', vi: 'trong sạch vô tội' }],
  },

  conservation: {
    id: 'conservation',
    term: 'conservation',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌkɑːnsərˈveɪʃn/',
    phoneticUk: '/ˌkɒnsəˈveɪʃn/',
    definitionVi: 'sự bảo tồn thiên nhiên, bảo vệ môi trường, tiết kiệm tài nguyên',
    definitionEn: 'prevention of wasteful use of a resource; preservation and protection of wildlife and environment',
    cefrLevel: 'B2',
    roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ, bảo tồn' }],
    anatomy: {
      prefix: 'con-',
      prefixVi: 'cùng nhau',
      rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'giữ, bảo vệ' }],
      suffix: '-ation',
      suffixVi: 'danh từ',
      formula: 'conserve + -ation → conservation (sự cùng nhau gìn giữ tài nguyên thiên nhiên)',
      explanation: 'Hành động bảo vệ sinh thái và môi trường sống của muôn loài.',
    },
    wordFamily: {
      nouns: [
        { term: 'conservation', vi: 'sự bảo tồn' },
        { term: 'conservationist', vi: 'nhà bảo tồn học' },
        { term: 'conservatism', vi: 'chủ nghĩa bảo thủ' },
      ],
      verbs: [{ term: 'conserve', vi: 'bảo tồn' }],
      adjectives: [{ term: 'conservative', vi: 'bảo thủ, thận trọng' }],
      adverbs: [{ term: 'conservatively', vi: 'một cách dè dặt' }],
    },
    collocations: [
      {
        phrase: 'energy conservation',
        vi: 'tiết kiệm năng lượng',
        example: 'Energy conservation reduces carbon footprint and electricity bills.',
      },
      {
        phrase: 'marine conservation',
        vi: 'bảo tồn sinh vật biển',
        example: 'Marine conservation projects protect fragile coral reef ecosystems.',
      },
    ],
    examples: [
      {
        en: 'The wildlife conservation program successfully saved the rare mountain gorilla from extinction.',
        vi: 'Chương trình bảo tồn động vật hoang dã đã cứu thành công loài khỉ đột núi quý hiếm khỏi nguy cơ tuyệt chủng.',
      },
    ],
    synonyms: [{ term: 'preservation', vi: 'sự gìn giữ' }, { term: 'protection', vi: 'sự bảo vệ' }, { term: 'maintenance', vi: 'sự duy trì' }],
    antonyms: [{ term: 'destruction', vi: 'sự tàn phá' }, { term: 'waste', vi: 'sự lãng phí' }],
  },

  conservative: {
    id: 'conservative',
    term: 'conservative',
    partOfSpeech: 'adj., n.',
    phoneticUs: '/kənˈsɜːrvətɪv/',
    phoneticUk: '/kənˈsɜːvətɪv/',
    definitionVi: 'thận trọng, bảo thủ (muốn giữ lại cái cũ) (adj); người có quan điểm bảo thủ (n)',
    definitionEn: 'averse to change or innovation and holding traditional values; cautious and moderate',
    cefrLevel: 'B2',
    roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ, bảo tồn' }],
    anatomy: {
      prefix: 'con-',
      prefixVi: 'cùng nhau',
      rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'giữ' }],
      suffix: '-ative',
      suffixVi: 'tính từ / danh từ',
      formula: 'conserve + -ative → conservative (người luôn muốn giữ gìn các giá trị và thể chế truyền thống cũ)',
      explanation: 'Xu hướng thiên về ổn định, ngần ngại trước những thay đổi nhanh chóng.',
    },
    wordFamily: {
      nouns: [{ term: 'conservatism', vi: 'chủ nghĩa bảo thủ' }, { term: 'conservative', vi: 'người bảo thủ' }],
      verbs: [{ term: 'conserve', vi: 'bảo tồn' }],
      adjectives: [{ term: 'conservative', vi: 'bảo thủ, thận trọng' }],
      adverbs: [{ term: 'conservatively', vi: 'một cách thận trọng' }],
    },
    collocations: [
      {
        phrase: 'conservative estimate',
        vi: 'ước tính thận trọng',
        example: 'At a conservative estimate, repairing the roof will cost five thousand dollars.',
      },
      {
        phrase: 'conservative dress / suit',
        vi: 'trang phục lịch sự kín đáo',
        example: 'Lawyers usually wear conservative suits in court.',
      },
    ],
    examples: [
      {
        en: 'Older generations often hold more conservative views on societal issues.',
        vi: 'Các thế hệ lớn tuổi thường có quan điểm bảo thủ hơn về các vấn đề xã hội.',
      },
    ],
    synonyms: [{ term: 'traditional', vi: 'truyền thống' }, { term: 'cautious', vi: 'thận trọng' }, { term: 'conventional', vi: 'quy ước' }],
    antonyms: [{ term: 'progressive', vi: 'tiến bộ' }, { term: 'liberal', vi: 'phóng khoáng' }, { term: 'radical', vi: 'cấp tiến' }],
  },

  conservatory: {
    id: 'conservatory',
    term: 'conservatory',
    partOfSpeech: 'n.',
    phoneticUs: '/kənˈsɜːrvətɔːri/',
    phoneticUk: '/kənˈsɜːvətri/',
    definitionVi: 'nhà kính trồng cây (giữ ấm); nhạc viện / học viện âm nhạc (giữ gìn nghệ thuật)',
    definitionEn: 'a room with a glass roof and walls, used as a sunroom or for growing delicate plants; a college for the study of classical music or other arts',
    cefrLevel: 'C1',
    roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ, bảo tồn' }],
    anatomy: {
      prefix: 'con-',
      prefixVi: 'cùng nhau',
      rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'giữ' }],
      suffix: '-atory',
      suffixVi: 'nơi chốn',
      formula: 'conserve + -atory → conservatory (nơi gìn giữ cây cỏ nhiệt đới hoặc bảo tồn nghệ thuật âm nhạc đỉnh cao)',
      explanation: 'Không gian chuyên biệt để ươm trồng hoặc nuôi dưỡng tài năng nghệ thuật.',
    },
    wordFamily: {
      nouns: [{ term: 'conservatory', vi: 'nhà kính / nhạc viện' }],
      verbs: [{ term: 'conserve', vi: 'bảo tồn' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'music conservatory',
        vi: 'nhạc viện âm nhạc',
        example: 'She earned a prestigious scholarship to study violin at the national music conservatory.',
      },
    ],
    examples: [
      {
        en: 'The botanical garden features a giant glass conservatory housing rare tropical orchids.',
        vi: 'Vườn bách thảo có một nhà kính khổng lồ bằng thủy tinh nuôi dưỡng những loài phong lan nhiệt đới quý hiếm.',
      },
    ],
    synonyms: [{ term: 'greenhouse', vi: 'nhà kính' }, { term: 'music academy', vi: 'học viện âm nhạc' }],
    antonyms: [],
  },

  preservative: {
    id: 'preservative',
    term: 'preservative',
    partOfSpeech: 'n., adj.',
    phoneticUs: '/prɪˈzɜːrvətɪv/',
    phoneticUk: '/prɪˈzɜːvətɪv/',
    definitionVi: 'chất bảo quản thực phẩm/gỗ (n); có tính bảo quản (adj)',
    definitionEn: 'a substance used to preserve foodstuffs, wood, or other materials against decay',
    cefrLevel: 'B2',
    roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ, bảo tồn' }],
    anatomy: {
      prefix: 'pre-',
      prefixVi: 'từ trước',
      rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'giữ' }],
      suffix: '-ative',
      suffixVi: 'chất / chất phụ gia',
      formula: 'preserve + -ative → preservative (hóa chất giúp giữ thực phẩm không bị thối rữa theo thời gian)',
      explanation: 'Chất phụ gia ngăn chặn sự phát triển của vi khuẩn và nấm mốc.',
    },
    wordFamily: {
      nouns: [{ term: 'preservative', vi: 'chất bảo quản' }, { term: 'preservation', vi: 'sự bảo quản' }],
      verbs: [{ term: 'preserve', vi: 'bảo quản' }],
      adjectives: [{ term: 'preservative', vi: 'mang tính bảo quản' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'no artificial preservatives',
        vi: 'không chứa chất bảo quản nhân tạo',
        example: 'This fresh orange juice contains no artificial preservatives or added sugars.',
      },
    ],
    examples: [
      {
        en: 'Salt and vinegar are traditional natural preservatives used for pickling vegetables.',
        vi: 'Muối và giấm là những chất bảo quản tự nhiên truyền thống dùng để muối chua rau củ.',
      },
    ],
    synonyms: [{ term: 'additive', vi: 'chất phụ gia' }, { term: 'stabilizer', vi: 'chất ổn định' }],
    antonyms: [],
  },

  reservation: {
    id: 'reservation',
    term: 'reservation',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌrezərˈveɪʃn/',
    phoneticUk: '/ˌrezəˈveɪʃn/',
    definitionVi: 'sự đặt chỗ trước (bàn/phòng); khu bảo tồn; sự e ngại ngập ngừng',
    definitionEn: 'an arrangement to secure accommodations in advance; an area of land held for an indigenous group or wildlife; a feeling of doubt',
    cefrLevel: 'B1',
    roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ, bảo tồn' }],
    anatomy: {
      prefix: 're-',
      prefixVi: 'lại',
      rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'giữ' }],
      suffix: '-ation',
      suffixVi: 'danh từ',
      formula: 'reserve + -ation → reservation (việc giữ chỗ trước hoặc giữ mối nghi ngại trong lòng)',
      explanation: 'Hành động đăng ký giữ lại phòng/ghế trước ngày sử dụng.',
    },
    wordFamily: {
      nouns: [{ term: 'reservation', vi: 'sự đặt chỗ, khu bảo tồn' }, { term: 'reserve', vi: 'nguồn dự trữ' }],
      verbs: [{ term: 'reserve', vi: 'đặt trước, giữ lại' }],
      adjectives: [{ term: 'reserved', vi: 'đã đặt trước' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'confirm a hotel reservation',
        vi: 'xác nhận việc đặt phòng khách sạn',
        example: 'Please call the front desk to confirm your room reservation before arrival.',
      },
      {
        phrase: 'have serious reservations about',
        vi: 'có những e ngại sâu sắc về',
        example: 'The board expressed serious reservations about the risky investment proposal.',
      },
    ],
    examples: [
      {
        en: 'We made a dinner reservation for four at the rooftop restaurant.',
        vi: 'Chúng tôi đã đặt một bàn ăn tối cho bốn người tại nhà hàng trên tầng thượng.',
      },
    ],
    synonyms: [{ term: 'booking', vi: 'sự đặt chỗ' }, { term: 'qualm', vi: 'sự e ngại' }, { term: 'sanctuary', vi: 'khu bảo tồn' }],
    antonyms: [{ term: 'cancellation', vi: 'sự hủy bỏ' }],
  },

  reservoir: {
    id: 'reservoir',
    term: 'reservoir',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈrezərvwɑːr/',
    phoneticUk: '/ˈrezəvwɑː(r)/',
    definitionVi: 'hồ chứa nước sinh hoạt / thủy điện; kho tích trữ lớn',
    definitionEn: 'a large natural or artificial lake used as a source of water supply; a supply or source of something',
    cefrLevel: 'B2',
    roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'gìn giữ, bảo tồn' }],
    anatomy: {
      prefix: 're-',
      prefixVi: 'lại',
      rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'giữ' }],
      suffix: '-oir',
      suffixVi: 'nơi chứa (tiếng Pháp)',
      formula: 'reserve + -oir → reservoir (công trình giữ nước quy mô lớn)',
      explanation: 'Hồ tích trữ nước để cung cấp cho sinh hoạt thành phố hoặc chạy tuabin thủy điện.',
    },
    wordFamily: {
      nouns: [{ term: 'reservoir', vi: 'hồ chứa nước' }],
      verbs: [{ term: 'reserve', vi: 'dự trữ' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'water reservoir',
        vi: 'hồ chứa nước sinh hoạt',
        example: 'Heavy rainfall replenished the city’s main water reservoirs after the drought.',
      },
      {
        phrase: 'reservoir of knowledge / talent',
        vi: 'kho tàng tri thức / nguồn tài năng dồi dào',
        example: 'Universities serve as a vast reservoir of scientific talent.',
      },
    ],
    examples: [
      {
        en: 'The hydroelectric dam created an enormous reservoir that flooded the mountain valley.',
        vi: 'Con đập thủy điện đã tạo nên một hồ chứa khổng lồ nhấn chìm thung lũng trên núi.',
      },
    ],
    synonyms: [{ term: 'lake', vi: 'hồ' }, { term: 'basin', vi: 'bể chứa' }, { term: 'depot', vi: 'kho chứa' }],
    antonyms: [],
  },

  service: {
    id: 'service',
    term: 'service',
    partOfSpeech: 'n., v.',
    phoneticUs: '/ˈsɜːrvɪs/',
    phoneticUk: '/ˈsɜːvɪs/',
    definitionVi: 'dịch vụ, sự phục vụ, công tác bảo dưỡng xe (n); bảo dưỡng máy móc (v)',
    definitionEn: 'the action of helping or doing work for someone; periodic maintenance of a vehicle or machine',
    cefrLevel: 'A1',
    roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'phục vụ' }],
    anatomy: {
      rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'phục vụ (gốc servus)' }],
      suffix: '-ice',
      suffixVi: 'danh từ',
      formula: 'serve + -ice → service (ngành nghề hoặc hành động cung cấp sự phục vụ)',
      explanation: 'Hành động đáp ứng các nhu cầu của xã hội hoặc khách hàng.',
    },
    wordFamily: {
      nouns: [{ term: 'service', vi: 'dịch vụ' }, { term: 'servant', vi: 'người phục vụ' }],
      verbs: [{ term: 'service', vi: 'bảo dưỡng' }, { term: 'serve', vi: 'phục vụ' }],
      adjectives: [{ term: 'serviceable', vi: 'dùng tốt' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'public / civil service',
        vi: 'dịch vụ công / ngành công chức',
        example: 'Working in public service is a noble way to give back to the community.',
      },
      {
        phrase: 'service the car',
        vi: 'bảo dưỡng xe định kỳ',
        example: 'Take the car to the garage to service the brakes and engine.',
      },
    ],
    examples: [
      {
        en: 'The hotel provides exceptional room service and 24-hour concierge assistance.',
        vi: 'Khách sạn cung cấp dịch vụ phòng xuất sắc và hỗ trợ lễ tân 24/7.',
      },
    ],
    synonyms: [{ term: 'assistance', vi: 'sự hỗ trợ' }, { term: 'maintenance', vi: 'bảo trì' }, { term: 'utility', vi: 'tiện ích' }],
    antonyms: [{ term: 'disservice', vi: 'sự làm hại' }],
  },

  servant: {
    id: 'servant',
    term: 'servant',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈsɜːrvənt/',
    phoneticUk: '/ˈsɜːvənt/',
    definitionVi: 'người hầu, người giúp việc nhà, công bộc của dân',
    definitionEn: 'a person who performs duties for others, especially in domestic employment or public office',
    cefrLevel: 'B1',
    roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'phục vụ' }],
    anatomy: {
      rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'phục vụ (gốc servus)' }],
      suffix: '-ant',
      suffixVi: 'người làm việc',
      formula: 'serve + -ant → servant (người làm công việc phục vụ)',
      explanation: 'Người thực hiện các công việc nhà hoặc công việc phụng sự nhân dân.',
    },
    wordFamily: {
      nouns: [{ term: 'servant', vi: 'người hầu, công bộc' }, { term: 'service', vi: 'sự phục vụ' }],
      verbs: [{ term: 'serve', vi: 'phục vụ' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'civil / public servant',
        vi: 'công chức / công bộc của nhân dân',
        example: 'Public servants are expected to act with integrity and impartiality.',
      },
      {
        phrase: 'domestic servant',
        vi: 'người giúp việc gia đình',
        example: 'Victorian estates employed dozens of domestic servants.',
      },
    ],
    examples: [
      {
        en: 'Elected officials should always remember that they are public servants.',
        vi: 'Các quan chức dân cử phải luôn ghi nhớ rằng họ chính là công bộc của nhân dân.',
      },
    ],
    synonyms: [{ term: 'attendant', vi: 'người phục vụ' }, { term: 'helper', vi: 'người giúp việc' }, { term: 'aide', vi: 'trợ lý' }],
    antonyms: [{ term: 'master', vi: 'chủ nhân' }, { term: 'boss', vi: 'ông chủ' }],
  },

  servitude: {
    id: 'servitude',
    term: 'servitude',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈsɜːrvɪtuːd/',
    phoneticUk: '/ˈsɜːvɪtjuːd/',
    definitionVi: 'cảnh nô lệ, thân phận tôi tớ khổ ải',
    definitionEn: 'the state of being a slave or completely subject to someone more powerful',
    cefrLevel: 'C1',
    roots: [{ rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'phục vụ' }],
    anatomy: {
      rootParts: [{ text: 'serv', rootId: 'serv_servare', rootName: 'Serv, Servare', meaningVi: 'tôi tớ (gốc servus)' }],
      suffix: '-itude',
      suffixVi: 'tình trạng / thân phận',
      formula: 'servus (nô lệ) + -itude → servitude (tình trạng bị tước đoạt tự do phải làm tôi tớ)',
      explanation: 'Tình trạng bị áp bức, phục dịch mất hết quyền tự do con người.',
    },
    wordFamily: {
      nouns: [{ term: 'servitude', vi: 'cảnh nô lệ' }, { term: 'servant', vi: 'người hầu' }],
      verbs: [{ term: 'serve', vi: 'phục vụ' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'penal servitude',
        vi: 'khổ sai phạt tù',
        example: 'Convicts in the 19th century were sentenced to penal servitude in overseas colonies.',
      },
      {
        phrase: 'escape from servitude',
        vi: 'thoát khỏi kiếp nô lệ tôi tớ',
        example: 'Abolitionists fought tirelessly to free millions from racial servitude.',
      },
    ],
    examples: [
      {
        en: 'The universal declaration of human rights strictly prohibits all forms of slavery and servitude.',
        vi: 'Tuyên ngôn quốc tế nhân quyền nghiêm cấm mọi hình thức nô lệ và kiếp tôi tớ khổ sai.',
      },
    ],
    synonyms: [{ term: 'slavery', vi: 'chế độ nô lệ' }, { term: 'bondage', vi: 'kiếp gông cùm' }, { term: 'subjection', vi: 'sự khuất phục' }],
    antonyms: [{ term: 'freedom', vi: 'sự tự do' }, { term: 'liberty', vi: 'quyền tự do' }],
  },

  compression: {
    id: 'compression',
    term: 'compression',
    partOfSpeech: 'n.',
    phoneticUs: '/kəmˈpreʃn/',
    phoneticUk: '/kəmˈpreʃn/',
    definitionVi: 'sự nén ép, thuật toán nén dung lượng tệp tin',
    definitionEn: 'the action of compressing or being compressed; the reduction in volume of data in order to save space',
    cefrLevel: 'B2',
    roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
    anatomy: {
      prefix: 'com-',
      prefixVi: 'cùng nhau',
      rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'nén, ép' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'compress + -ion → compression (quá trình nén ép các khối lại gần nhau)',
      explanation: 'Hành động ép chặt để giảm thể tích hoặc dung lượng lưu trữ.',
    },
    wordFamily: {
      nouns: [{ term: 'compression', vi: 'sự nén' }, { term: 'compressor', vi: 'máy nén khí' }],
      verbs: [{ term: 'compress', vi: 'nén ép' }],
      adjectives: [{ term: 'compressible', vi: 'có thể nén' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'data / video compression',
        vi: 'nén dữ liệu / video',
        example: 'Lossless data compression preserves full audio fidelity without file bloat.',
      },
    ],
    examples: [
      {
        en: 'The compression of air in the cylinder generates immense mechanical heat.',
        vi: 'Sự nén không khí trong xi lanh tạo ra nhiệt cơ học khổng lồ.',
      },
    ],
    synonyms: [{ term: 'condensation', vi: 'sự ngưng tụ nén ép' }, { term: 'compaction', vi: 'sự đầm chặt' }],
    antonyms: [{ term: 'expansion', vi: 'sự giãn nở' }, { term: 'decompression', vi: 'sự giải nén' }],
  },

  depression: {
    id: 'depression',
    term: 'depression',
    partOfSpeech: 'n.',
    phoneticUs: '/dɪˈpreʃn/',
    phoneticUk: '/dɪˈpreʃn/',
    definitionVi: 'bệnh trầm cảm tâm lý; cuộc đại suy thoái kinh tế; vùng áp thấp nhiệt đới',
    definitionEn: 'feelings of severe despondency and dejection; a long and severe recession in an economy or market',
    cefrLevel: 'B1',
    roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
    anatomy: {
      prefix: 'de-',
      prefixVi: 'xuống dưới',
      rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'đè, nén' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'depress + -ion → depression (trạng thái tâm trí hoặc nền kinh tế bị đè chìm xuống)',
      explanation: 'Tình trạng sụt giảm nghiêm trọng về tâm lý hoặc hoạt động thương mại.',
    },
    wordFamily: {
      nouns: [{ term: 'depression', vi: 'bệnh trầm cảm, suy thoái' }, { term: 'depressant', vi: 'thuốc an thần' }],
      verbs: [{ term: 'depress', vi: 'làm suy sụp' }],
      adjectives: [{ term: 'depressed', vi: 'trầm cảm' }, { term: 'depressing', vi: 'ảm đạm' }],
      adverbs: [{ term: 'depressingly', vi: 'ảm đạm' }],
    },
    collocations: [
      {
        phrase: 'The Great Depression',
        vi: 'Cuộc Đại suy thoái (thập niên 1930)',
        example: 'The Great Depression caused widespread unemployment across the globe.',
      },
      {
        phrase: 'suffer from severe depression',
        vi: 'chịu đựng chứng trầm cảm nặng',
        example: 'Early intervention is vital for teenagers who suffer from severe depression.',
      },
    ],
    examples: [
      {
        en: 'Exercise and social connection help alleviate symptoms of mild depression.',
        vi: 'Tập thể dục và kết nối xã hội giúp làm thuyên giảm các triệu chứng của trầm cảm nhẹ.',
      },
    ],
    synonyms: [{ term: 'despair', vi: 'sự tuyệt vọng' }, { term: 'slump', vi: 'suy thoái ảm đạm' }, { term: 'melancholy', vi: 'nỗi u sầu' }],
    antonyms: [{ term: 'boom', vi: 'sự bùng nổ tăng trưởng' }, { term: 'euphoria', vi: 'sự phấn khích tột cùng' }],
  },

  impression: {
    id: 'impression',
    term: 'impression',
    partOfSpeech: 'n.',
    phoneticUs: '/ɪmˈpreʃn/',
    phoneticUk: '/ɪmˈpreʃn/',
    definitionVi: 'ấn tượng sâu sắc, cảm nhận đầu tiên; dấu ấn in nổi',
    definitionEn: 'an idea, feeling, or opinion about something formed without conscious thought; an imitation of someone',
    cefrLevel: 'B1',
    roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
    anatomy: {
      prefix: 'im-',
      prefixVi: 'vào trong',
      rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'ấn' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'impress + -ion → impression (dấu ấn được khắc sâu vào tâm trí)',
      explanation: 'Hình ảnh hoặc cảm giác lắng đọng lại sau khi tiếp xúc một đối tượng.',
    },
    wordFamily: {
      nouns: [{ term: 'impression', vi: 'ấn tượng' }, { term: 'impressionism', vi: 'trường phái ấn tượng' }],
      verbs: [{ term: 'impress', vi: 'gây ấn tượng' }],
      adjectives: [{ term: 'impressive', vi: 'ấn tượng' }],
      adverbs: [{ term: 'impressively', vi: 'một cách ấn tượng' }],
    },
    collocations: [
      {
        phrase: 'leave a lasting impression',
        vi: 'để lại ấn tượng sâu đậm khó phai',
        example: 'His keynote presentation left a lasting impression on the delegates.',
      },
    ],
    examples: [
      {
        en: 'My first impression of the university campus was extremely positive.',
        vi: 'Ấn tượng đầu tiên của tôi về khuôn viên trường đại học là vô cùng tích cực.',
      },
    ],
    synonyms: [{ term: 'impact', vi: 'tác động' }, { term: 'feeling', vi: 'cảm nhận' }, { term: 'imprint', vi: 'dấu ấn' }],
    antonyms: [],
  },

  impressive: {
    id: 'impressive',
    term: 'impressive',
    partOfSpeech: 'adj.',
    phoneticUs: '/ɪmˈpresɪv/',
    phoneticUk: '/ɪmˈpresɪv/',
    definitionVi: 'gây ấn tượng mạnh, hùng vĩ, xuất sắc đáng khâm phục',
    definitionEn: 'evoking admiration through size, quality, or skill; grand or imposing',
    cefrLevel: 'B1',
    roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
    anatomy: {
      prefix: 'im-',
      prefixVi: 'vào trong',
      rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'ấn' }],
      suffix: '-ive',
      suffixVi: 'tính từ',
      formula: 'impress + -ive → impressive (có khả năng tạo nên dấu ấn sâu đậm)',
      explanation: 'Sở hữu những đặc tính xuất sắc khiến người khác phải ngưỡng mộ.',
    },
    wordFamily: {
      nouns: [{ term: 'impression', vi: 'ấn tượng' }],
      verbs: [{ term: 'impress', vi: 'gây ấn tượng' }],
      adjectives: [{ term: 'impressive', vi: 'ấn tượng' }, { term: 'unimpressed', vi: 'không ấn tượng' }],
      adverbs: [{ term: 'impressively', vi: 'một cách ấn tượng' }],
    },
    collocations: [
      {
        phrase: 'impressive achievement / track record',
        vi: 'thành tựu / bề dày thành tích ấn tượng',
        example: 'Winning three Olympic gold medals is an undeniably impressive achievement.',
      },
    ],
    examples: [
      {
        en: 'The cathedral features impressive Gothic stone arches and stained glass windows.',
        vi: 'Nhà thờ có những mái vòm đá phong cách Gothic và cửa sổ kính màu vô cùng ấn tượng.',
      },
    ],
    synonyms: [{ term: 'magnificent', vi: 'tráng lệ' }, { term: 'remarkable', vi: 'đáng chú ý' }, { term: 'imposing', vi: 'uy nghi' }],
    antonyms: [{ term: 'unimpressive', vi: 'mờ nhạt' }, { term: 'mediocre', vi: 'tầm thường' }],
  },

  oppression: {
    id: 'oppression',
    term: 'oppression',
    partOfSpeech: 'n.',
    phoneticUs: '/əˈpreʃn/',
    phoneticUk: '/əˈpreʃn/',
    definitionVi: 'sự áp bức, chế độ bạo quyền tàn bạo, nỗi u uất đè nặng',
    definitionEn: 'prolonged cruel or unjust treatment or control; the state of being subject to unjust treatment',
    cefrLevel: 'C1',
    roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
    anatomy: {
      prefix: 'op-',
      prefixVi: 'đè nặng',
      rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'ép' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'oppress + -ion → oppression (sự dùng quyền lực tàn bạo đè nén người dân)',
      explanation: 'Sự chà đạp lên tự do và quyền con người bởi các chế độ độc tài.',
    },
    wordFamily: {
      nouns: [{ term: 'oppression', vi: 'sự áp bức' }, { term: 'oppressor', vi: 'kẻ áp bức' }],
      verbs: [{ term: 'oppress', vi: 'áp bức' }],
      adjectives: [{ term: 'oppressive', vi: 'hà khắc' }],
      adverbs: [{ term: 'oppressively', vi: 'ngột ngạt' }],
    },
    collocations: [
      {
        phrase: 'fight against oppression',
        vi: 'đấu tranh chống áp bức',
        example: 'Civil rights movements worldwide continue to fight against racial oppression.',
      },
    ],
    examples: [
      {
        en: 'Generations struggled courageously to throw off the yoke of foreign oppression.',
        vi: 'Nhiều thế hệ đã dũng cảm đấu tranh để lật đổ ách áp bức ngoại bang.',
      },
    ],
    synonyms: [{ term: 'tyranny', vi: 'chế độ chuyên chế' }, { term: 'persecution', vi: 'sự bức hại' }, { term: 'subjugation', vi: 'sự nô dịch' }],
    antonyms: [{ term: 'liberation', vi: 'sự giải phóng' }, { term: 'emancipation', vi: 'sự giải phóng nô lệ' }],
  },

  repression: {
    id: 'repression',
    term: 'repression',
    partOfSpeech: 'n.',
    phoneticUs: '/rɪˈpreʃn/',
    phoneticUk: '/rɪˈpreʃn/',
    definitionVi: 'sự kìm nén cảm xúc tâm lý; sự trấn áp chính trị bạo lực',
    definitionEn: 'the restraint, prevention, or inhibition of a feeling; the action of subduing someone or something by force',
    cefrLevel: 'C1',
    roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
    anatomy: {
      prefix: 're-',
      prefixVi: 'ngược lại',
      rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'đè' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'repress + -ion → repression (việc đè lùi cảm xúc hoặc trấn áp bạo động)',
      explanation: 'Hành động dùng vũ lực ngăn chặn nổi dậy hoặc dùng ý thức kiềm giữ cảm xúc tiêu cực.',
    },
    wordFamily: {
      nouns: [{ term: 'repression', vi: 'sự kìm nén' }],
      verbs: [{ term: 'repress', vi: 'kìm nén' }],
      adjectives: [{ term: 'repressive', vi: 'có tính đàn áp' }, { term: 'repressed', vi: 'bị ức chế' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'political repression',
        vi: 'sự trấn áp chính trị',
        example: 'Human rights organizations condemned the regime’s violent political repression.',
      },
      {
        phrase: 'emotional repression',
        vi: 'sự kìm nén cảm xúc',
        example: 'Chronic emotional repression can manifest as physical illness.',
      },
    ],
    examples: [
      {
        en: 'Psychologists examine how subconscious repression affects adult behavior.',
        vi: 'Các nhà tâm lý học nghiên cứu cách sự kìm nén trong tiềm thức ảnh hưởng đến hành vi của người trưởng thành.',
      },
    ],
    synonyms: [{ term: 'suppression', vi: 'sự triệt tiêu' }, { term: 'quelling', vi: 'sự dẹp yên' }, { term: 'containment', vi: 'sự kiềm chế' }],
    antonyms: [{ term: 'expression', vi: 'sự bày tỏ' }, { term: 'freedom', vi: 'sự tự do' }],
  },

  suppression: {
    id: 'suppression',
    term: 'suppression',
    partOfSpeech: 'n.',
    phoneticUs: '/səˈpreʃn/',
    phoneticUk: '/səˈpreʃn/',
    definitionVi: 'sự dập tắt (đám cháy/dịch bệnh), sự ức chế phản xạ/miễn dịch, sự ngăn chặn thông tin',
    definitionEn: 'the action of suppressing something such as an activity or publication; stopping or restraining',
    cefrLevel: 'B2',
    roots: [{ rootId: 'press', rootName: 'Press', meaningVi: 'ép, ấn, đè' }],
    anatomy: {
      prefix: 'sus-',
      prefixVi: 'dưới đáy',
      rootParts: [{ text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'đè' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'suppress + -ion → suppression (hành động đè bẹp triệt để không cho trỗi dậy)',
      explanation: 'Việc dập tắt hoàn toàn một hiện tượng từ gốc rễ.',
    },
    wordFamily: {
      nouns: [{ term: 'suppression', vi: 'sự dập tắt' }, { term: 'suppressant', vi: 'thuốc ức chế' }],
      verbs: [{ term: 'suppress', vi: 'dập tắt' }],
      adjectives: [{ term: 'suppressive', vi: 'có tính ức chế' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'fire suppression system',
        vi: 'hệ thống chữa cháy / dập lửa tự động',
        example: 'Data centers install gas fire suppression systems to protect servers from water damage.',
      },
      {
        phrase: 'immune suppression',
        vi: 'ức chế miễn dịch',
        example: 'Chemotherapy results in temporary immune suppression in cancer patients.',
      },
    ],
    examples: [
      {
        en: 'The rapid suppression of the disease outbreak prevented a nationwide health emergency.',
        vi: 'Việc dập tắt nhanh chóng ổ dịch bệnh đã ngăn chặn một tình trạng khẩn cấp y tế trên toàn quốc.',
      },
    ],
    synonyms: [{ term: 'extinction', vi: 'sự dập tắt' }, { term: 'inhibition', vi: 'sự ức chế' }, { term: 'stifling', vi: 'sự bóp nghẹt' }],
    antonyms: [{ term: 'activation', vi: 'sự kích hoạt' }, { term: 'stimulation', vi: 'sự thúc đẩy' }],
  },

  appendage: {
    id: 'appendage',
    term: 'appendage',
    partOfSpeech: 'n.',
    phoneticUs: '/əˈpendɪdʒ/',
    phoneticUk: '/əˈpendɪdʒ/',
    definitionVi: 'phần phụ, chi phụ của sinh vật (càng, vây, đuôi); phần đính kèm',
    definitionEn: 'a thing that is added or attached to something larger or more important; a projecting part of an organism',
    cefrLevel: 'C1',
    roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
    anatomy: {
      prefix: 'ap-',
      prefixVi: 'vào thêm',
      rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
      suffix: '-age',
      suffixVi: 'danh từ',
      formula: 'append + -age → appendage (phần cơ quan treo đính thêm vào thân chính)',
      explanation: 'Bộ phận phụ trợ nhô ra từ thân cơ thể sinh vật.',
    },
    wordFamily: {
      nouns: [{ term: 'appendage', vi: 'phần phụ, chi phụ' }, { term: 'appendix', vi: 'phụ lục' }],
      verbs: [{ term: 'append', vi: 'đính kèm' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'bodily appendage',
        vi: 'chi phụ của cơ thể',
        example: 'Crabs use their specialized front appendages to grasp food.',
      },
    ],
    examples: [
      {
        en: 'The small advisory committee felt like a mere appendage to the powerful executive board.',
        vi: 'Ủy ban cố vấn nhỏ bé có cảm giác như chỉ là một phần phụ kèm theo hội đồng quản trị quyền lực.',
      },
    ],
    synonyms: [{ term: 'attachment', vi: 'phần đính kèm' }, { term: 'limb', vi: 'chi thể' }, { term: 'extension', vi: 'phần mở rộng' }],
    antonyms: [{ term: 'body', vi: 'thân chính' }],
  },

  dependence: {
    id: 'dependence',
    term: 'dependence',
    partOfSpeech: 'n.',
    phoneticUs: '/dɪˈpendəns/',
    phoneticUk: '/dɪˈpendəns/',
    definitionVi: 'sự phụ thuộc, tình trạng lệ thuộc kinh tế/năng lượng/chất kích thích',
    definitionEn: 'the state of relying on or being controlled by someone or something else',
    cefrLevel: 'B2',
    roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
    anatomy: {
      prefix: 'de-',
      prefixVi: 'xuống',
      rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
      suffix: '-ence',
      suffixVi: 'danh từ',
      formula: 'depend + -ence → dependence (tình trạng treo số phận của mình dựa vào đối tượng khác)',
      explanation: 'Sự lệ thuộc vào nguồn lực bên ngoài để duy trì sự sống hoặc hoạt động.',
    },
    wordFamily: {
      nouns: [{ term: 'dependence', vi: 'sự phụ thuộc' }, { term: 'independence', vi: 'nền độc lập' }],
      verbs: [{ term: 'depend', vi: 'phụ thuộc' }],
      adjectives: [{ term: 'dependent', vi: 'phụ thuộc' }, { term: 'independent', vi: 'tự lập' }],
      adverbs: [{ term: 'independently', vi: 'độc lập' }],
    },
    collocations: [
      {
        phrase: 'reduce dependence on fossil fuels',
        vi: 'giảm sự phụ thuộc vào nhiên liệu hóa thạch',
        example: 'Investments in solar grids help reduce our dependence on imported crude oil.',
      },
    ],
    examples: [
      {
        en: 'Developing nations strive to break their economic dependence on foreign aid.',
        vi: 'Các quốc gia đang phát triển nỗ lực phá vỡ sự lệ thuộc kinh tế vào viện trợ nước ngoài.',
      },
    ],
    synonyms: [{ term: 'reliance', vi: 'sự trông cậy' }, { term: 'addiction', vi: 'sự nghiện lệ thuộc' }],
    antonyms: [{ term: 'independence', vi: 'sự tự chủ độc lập' }, { term: 'self-reliance', vi: 'sự tự lực cánh sinh' }],
  },

  independence: {
    id: 'independence',
    term: 'independence',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌɪndɪˈpendəns/',
    phoneticUk: '/ˌɪndɪˈpendəns/',
    definitionVi: 'nền độc lập, sự tự do tự chủ, tính tự lập không phụ thuộc',
    definitionEn: 'the fact or state of being independent; freedom from outside control or support',
    cefrLevel: 'B1',
    roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'không (not)',
      rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
      suffix: '-ence',
      suffixVi: 'danh từ',
      formula: 'in- (không) + depend (treo mình phụ thuộc) + -ence → independence (không bị treo lệ thuộc vào ai → độc lập, tự chủ)',
      explanation: 'Trạng thái hoàn toàn tự do tự quyết số phận mà không bị chi phối bởi ngoại lực.',
    },
    wordFamily: {
      nouns: [{ term: 'independence', vi: 'sự độc lập' }, { term: 'dependence', vi: 'sự phụ thuộc' }],
      verbs: [{ term: 'depend', vi: 'phụ thuộc' }],
      adjectives: [{ term: 'independent', vi: 'độc lập' }],
      adverbs: [{ term: 'independently', vi: 'một cách độc lập' }],
    },
    collocations: [
      {
        phrase: 'Declaration of Independence',
        vi: 'Tuyên ngôn Độc lập',
        example: 'The nation celebrates the anniversary of its historic Declaration of Independence.',
      },
      {
        phrase: 'financial independence',
        vi: 'sự tự do / độc lập tài chính',
        example: 'Saving early is the cornerstone of achieving long-term financial independence.',
      },
    ],
    examples: [
      {
        en: 'Young adults gain confidence as they learn independence and life skills at university.',
        vi: 'Thanh niên trở nên tự tin hơn khi họ học được tính tự lập và các kỹ năng sống tại đại học.',
      },
    ],
    synonyms: [{ term: 'freedom', vi: 'tự do' }, { term: 'autonomy', vi: 'quyền tự trị' }, { term: 'liberty', vi: 'quyền tự do' }],
    antonyms: [{ term: 'dependence', vi: 'sự phụ thuộc' }, { term: 'subjugation', vi: 'sự lệ thuộc nô dịch' }],
  },

  pendant: {
    id: 'pendant',
    term: 'pendant',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈpendənt/',
    phoneticUk: '/ˈpendənt/',
    definitionVi: 'mặt dây chuyền (ngọc, vàng treo ở cổ áo); đèn chùm treo',
    definitionEn: 'a piece of jewelry that hangs from a chain worn around the neck',
    cefrLevel: 'B2',
    roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
    anatomy: {
      rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
      suffix: '-ant',
      suffixVi: 'vật',
      formula: 'pend (treo) + -ant → pendant (món trang sức ngọc treo lủng lẳng trên sợi dây chuyền)',
      explanation: 'Món đồ trang sức được thiết kế để đung đưa treo trên cổ.',
    },
    wordFamily: {
      nouns: [{ term: 'pendant', vi: 'mặt dây chuyền' }],
      verbs: [{ term: 'pend', vi: 'treo' }],
      adjectives: [{ term: 'pendulous', vi: 'treo lủng lẳng' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'diamond / gold pendant',
        vi: 'mặt dây chuyền kim cương / vàng',
        example: 'She wore a delicate gold necklace with a sapphire pendant.',
      },
    ],
    examples: [
      {
        en: 'The heirloom diamond pendant was passed down through four generations.',
        vi: 'Mặt dây chuyền kim cương gia bảo đã được truyền qua bốn thế hệ.',
      },
    ],
    synonyms: [{ term: 'necklace charm', vi: 'mặt dây' }, { term: 'locket', vi: 'mặt dây chuyền có nắp mở' }],
    antonyms: [],
  },

  compensation: {
    id: 'compensation',
    term: 'compensation',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌkɑːmpenˈseɪʃn/',
    phoneticUk: '/ˌkɒmpenˈseɪʃn/',
    definitionVi: 'khoản tiền bồi thường thiệt hại; chế độ lương bổng thù lao',
    definitionEn: 'something, typically money, awarded to someone as a recompense for loss, injury, or suffering; payment received for work',
    cefrLevel: 'B2',
    roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
    anatomy: {
      prefix: 'com-',
      prefixVi: 'cùng nhau',
      rootParts: [{ text: 'pens', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'cân đo, chi trả' }],
      suffix: '-ation',
      suffixVi: 'danh từ',
      formula: 'compensate + -ation → compensation (khoản tiền đặt lên bàn cân đối trọng bù đắp thiệt hại)',
      explanation: 'Khoản đền bù tài chính để khôi phục lại sự công bằng và thăng bằng.',
    },
    wordFamily: {
      nouns: [{ term: 'compensation', vi: 'tiền bồi thường' }],
      verbs: [{ term: 'compensate', vi: 'bồi thường' }],
      adjectives: [{ term: 'compensatory', vi: 'có tính bù đắp' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'financial compensation',
        vi: 'khoản bồi thường tài chính',
        example: 'The court ordered the company to pay substantial financial compensation to the victims.',
      },
      {
        phrase: 'executive compensation package',
        vi: 'gói thù lao cho ban điều hành',
        example: 'Tech firms offer stock options as part of competitive compensation packages.',
      },
    ],
    examples: [
      {
        en: 'Injured workers are entitled to full medical care and disability compensation.',
        vi: 'Người lao động bị thương tật có quyền được chăm sóc y tế toàn diện và nhận tiền bồi thường thương tật.',
      },
    ],
    synonyms: [{ term: 'reimbursement', vi: 'sự hoàn trả' }, { term: 'indemnity', vi: 'tiền bồi thường' }, { term: 'remuneration', vi: 'thù lao' }],
    antonyms: [{ term: 'fine', vi: 'tiền phạt' }, { term: 'penalty', vi: 'hình phạt' }],
  },

  suspension: {
    id: 'suspension',
    term: 'suspension',
    partOfSpeech: 'n.',
    phoneticUs: '/səˈspenʃn/',
    phoneticUk: '/səˈspenʃn/',
    definitionVi: 'sự đình chỉ công tác/học tập; hệ thống giảm xóc xe hơi; cầu treo',
    definitionEn: 'the temporary prevention of something from continuing or being in force; the system of springs and shock absorbers in a vehicle',
    cefrLevel: 'B2',
    roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
    anatomy: {
      prefix: 'sus-',
      prefixVi: 'lơ lửng, từ dưới lên',
      rootParts: [{ text: 'pend', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'suspend + -ion → suspension (trạng thái bị treo lơ lửng hoặc hệ thống dây cáp treo nâng đỡ)',
      explanation: 'Sự tạm ngưng quyền hạn hoặc kết cấu treo chịu lực.',
    },
    wordFamily: {
      nouns: [{ term: 'suspension', vi: 'sự đình chỉ, hệ thống giảm xóc' }, { term: 'suspense', vi: 'sự hồi hộp' }],
      verbs: [{ term: 'suspend', vi: 'đình chỉ, treo' }],
      adjectives: [{ term: 'suspended', vi: 'bị đình chỉ' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'suspension of driver’s license',
        vi: 'sự đình chỉ / tước bằng lái xe',
        example: 'Reckless driving resulted in the immediate suspension of his driver’s license.',
      },
      {
        phrase: 'car suspension system',
        vi: 'hệ thống giảm xóc xe hơi',
        example: 'A multi-link suspension system ensures a smooth ride over bumpy roads.',
      },
    ],
    examples: [
      {
        en: 'The referee announced the suspension of the football match due to severe lightning.',
        vi: 'Trọng tài đã thông báo tạm hoãn trận đấu bóng đá do sấm sét dữ dội.',
      },
    ],
    synonyms: [{ term: 'postponement', vi: 'sự trì hoãn' }, { term: 'debarment', vi: 'sự đình chỉ' }, { term: 'interruption', vi: 'sự ngắt quãng' }],
    antonyms: [{ term: 'reinstatement', vi: 'sự phục chức' }, { term: 'continuation', vi: 'sự tiếp diễn' }],
  },

  suspense: {
    id: 'suspense',
    term: 'suspense',
    partOfSpeech: 'n.',
    phoneticUs: '/səˈspens/',
    phoneticUk: '/səˈspens/',
    definitionVi: 'sự hồi hộp, cảm giác thắc thỏm chờ đợi kịch tính',
    definitionEn: 'a state or feeling of excited or anxious uncertainty about what may happen',
    cefrLevel: 'B2',
    roots: [{ rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo, cân đo' }],
    anatomy: {
      prefix: 'sus-',
      prefixVi: 'lơ lửng',
      rootParts: [{ text: 'pens', rootId: 'pend_pens', rootName: 'Pend, Pens', meaningVi: 'treo' }],
      formula: 'sus- (lơ lửng) + pens (treo) → suspense (tâm trạng bị treo lơ lửng thắc thỏm không biết kết cục ra sao → sự hồi hộp kịch tính)',
      explanation: 'Trạng thái cảm xúc bị kéo căng vì sự bất định gay cấn của diễn biến.',
    },
    wordFamily: {
      nouns: [{ term: 'suspense', vi: 'sự hồi hộp kịch tính' }],
      verbs: [{ term: 'suspend', vi: 'treo' }],
      adjectives: [{ term: 'suspenseful', vi: 'đầy hồi hộp gay cấn' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'master of suspense',
        vi: 'bậc thầy phim giật gân / hồi hộp (vd: Alfred Hitchcock)',
        example: 'Alfred Hitchcock is universally revered as the cinematic master of suspense.',
      },
      {
        phrase: 'the suspense is killing me',
        vi: 'sự hồi hộp này đang làm tôi nghẹt thở',
        example: 'Please open the award envelope quickly—the suspense is killing me!',
      },
    ],
    examples: [
      {
        en: 'The thriller movie built suspense gradually until its shocking twist ending.',
        vi: 'Bộ phim giật gân đã đẩy sự hồi hộp lên từng nấc cho đến cú bẻ ngoặt bất ngờ ở đoạn kết.',
      },
    ],
    synonyms: [{ term: 'tension', vi: 'sự căng thẳng' }, { term: 'anticipation', vi: 'sự háo hức ngóng chờ' }, { term: 'uncertainty', vi: 'sự bất định' }],
    antonyms: [{ term: 'calmness', vi: 'sự bình thản' }, { term: 'certainty', vi: 'sự chắc chắn' }],
  },

  admission: {
    id: 'admission',
    term: 'admission',
    partOfSpeech: 'n.',
    phoneticUs: '/ədˈmɪʃn/',
    phoneticUk: '/ədˈmɪʃn/',
    definitionVi: 'sự nhận vào (đại học/bệnh viện), tiền vé vào cửa; sự thú nhận sự thật',
    definitionEn: 'the process or fact of entering or being allowed to enter a place or organization; a statement acknowledging the truth',
    cefrLevel: 'B1',
    roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi, cho phép' }],
    anatomy: {
      prefix: 'ad-',
      prefixVi: 'hướng đến',
      rootParts: [{ text: 'miss', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'cho vào' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'admit + -ion → admission (hành động cho phép một người bước vào cổng hoặc thừa nhận sự thật)',
      explanation: 'Sự tiếp nhận vào một môi trường mới hoặc sự công nhận sự thật.',
    },
    wordFamily: {
      nouns: [{ term: 'admission', vi: 'sự nhận vào, vé vào cửa' }, { term: 'admittance', vi: 'quyền vào cổng' }],
      verbs: [{ term: 'admit', vi: 'thừa nhận, nhận vào' }],
      adjectives: [{ term: 'admissible', vi: 'hợp lệ' }],
      adverbs: [{ term: 'admittedly', vi: 'phải công nhận rằng' }],
    },
    collocations: [
      {
        phrase: 'university admission criteria',
        vi: 'tiêu chí tuyển sinh đại học',
        example: 'Top Ivy League universities maintain extremely selective admission criteria.',
      },
      {
        phrase: 'free admission',
        vi: 'vào cửa miễn phí',
        example: 'The national art gallery offers free admission to all students on weekends.',
      },
    ],
    examples: [
      {
        en: 'By his own admission, he was not qualified for the technical project management position.',
        vi: 'Theo như chính lời anh ấy tự thú nhận, anh không đủ năng lực cho vị trí quản lý dự án kỹ thuật.',
      },
    ],
    synonyms: [{ term: 'entry', vi: 'sự vào' }, { term: 'access', vi: 'quyền tiếp cận' }, { term: 'confession', vi: 'lời thú tội' }],
    antonyms: [{ term: 'exclusion', vi: 'sự loại trừ' }, { term: 'denial', vi: 'sự phủ nhận' }],
  },

  commitment: {
    id: 'commitment',
    term: 'commitment',
    partOfSpeech: 'n.',
    phoneticUs: '/kəˈmɪtmənt/',
    phoneticUk: '/kəˈmɪtmənt/',
    definitionVi: 'sự cam kết, lòng tận tụy trung thành, nghĩa vụ ràng buộc',
    definitionEn: 'the state or quality of being dedicated to a cause or activity; an engagement or obligation that restricts freedom of action',
    cefrLevel: 'B1',
    roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi gắm' }],
    anatomy: {
      prefix: 'com-',
      prefixVi: 'trọn vẹn',
      rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi gắm' }],
      suffix: '-ment',
      suffixVi: 'danh từ',
      formula: 'commit + -ment → commitment (sự gửi trọn tâm trí và nghĩa vụ vào một mục tiêu)',
      explanation: 'Sự tận hiến và giữ vững lời thề trong công việc hay tình cảm.',
    },
    wordFamily: {
      nouns: [{ term: 'commitment', vi: 'sự cam kết' }, { term: 'committee', vi: 'ủy ban' }],
      verbs: [{ term: 'commit', vi: 'cam kết' }],
      adjectives: [{ term: 'committed', vi: 'tận tụy' }, { term: 'noncommittal', vi: 'lấp lửng' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'show deep commitment to',
        vi: 'thể hiện sự tận tụy sâu sắc đối với',
        example: 'Teachers show deep commitment to nurturing their students’ intellectual curiosity.',
      },
      {
        phrase: 'financial commitment',
        vi: 'cam kết nghĩa vụ tài chính',
        example: 'Buying a family home is a substantial long-term financial commitment.',
      },
    ],
    examples: [
      {
        en: 'Achieving fluency in a foreign language requires unwavering daily commitment.',
        vi: 'Để đạt được sự lưu loát trong một ngoại ngữ đòi hỏi sự kiên định cam kết luyện tập mỗi ngày.',
      },
    ],
    synonyms: [{ term: 'dedication', vi: 'sự cống hiến' }, { term: 'devotion', vi: 'lòng tận tụy' }, { term: 'pledge', vi: 'lời cam kết' }],
    antonyms: [{ term: 'indifference', vi: 'sự thờ ơ' }, { term: 'apathy', vi: 'sự vô cảm' }],
  },

  omission: {
    id: 'omission',
    term: 'omission',
    partOfSpeech: 'n.',
    phoneticUs: '/əˈmɪʃn/',
    phoneticUk: '/əˈmɪʃn/',
    definitionVi: 'sự bỏ sót, lỗi thiếu sót, điều bị lược bỏ',
    definitionEn: 'someone or something that has been left out or excluded; the action of excluding or leaving out',
    cefrLevel: 'B2',
    roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'thả đi, bỏ qua' }],
    anatomy: {
      prefix: 'om-',
      prefixVi: 'bỏ qua',
      rootParts: [{ text: 'miss', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'thả' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'omit + -ion → omission (hành động thả cho trôi qua không đưa vào danh sách)',
      explanation: 'Sự sơ suất không liệt kê một yếu tố quan trọng.',
    },
    wordFamily: {
      nouns: [{ term: 'omission', vi: 'sự bỏ sót' }],
      verbs: [{ term: 'omit', vi: 'bỏ sót, lược bỏ' }],
      adjectives: [{ term: 'omitted', vi: 'bị bỏ sót' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'accidental omission',
        vi: 'sơ suất bỏ sót vô tình',
        example: 'The missing name on the guest list was merely an accidental omission.',
      },
    ],
    examples: [
      {
        en: 'There were several glaring omissions of fact in the sensational news article.',
        vi: 'Có một vài sự bỏ sót sự thật hết sức rõ rành rành trong bài báo giật gân đó.',
      },
    ],
    synonyms: [{ term: 'exclusion', vi: 'sự loại trừ' }, { term: 'gap', vi: 'khoảng trống thiếu hụt' }, { term: 'oversight', vi: 'sự sơ suất' }],
    antonyms: [{ term: 'inclusion', vi: 'sự bao gồm' }, { term: 'addition', vi: 'sự thêm vào' }],
  },

  permission: {
    id: 'permission',
    term: 'permission',
    partOfSpeech: 'n.',
    phoneticUs: '/pərˈmɪʃn/',
    phoneticUk: '/pəˈmɪʃn/',
    definitionVi: 'sự cho phép, sự ưng thuận, giấy phép chấp thuận',
    definitionEn: 'consent; authorization granted by someone in authority',
    cefrLevel: 'A2',
    roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'thả cho đi' }],
    anatomy: {
      prefix: 'per-',
      prefixVi: 'thông qua',
      rootParts: [{ text: 'miss', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'thả đi' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'permit + -ion → permission (hành động chính thức cho phép ai đó đi qua thực hiện)',
      explanation: 'Sự chấp thuận từ cấp trên hoặc cơ quan có thẩm quyền.',
    },
    wordFamily: {
      nouns: [{ term: 'permission', vi: 'sự cho phép' }, { term: 'permit', vi: 'giấy phép' }],
      verbs: [{ term: 'permit', vi: 'cho phép' }],
      adjectives: [{ term: 'permissible', vi: 'được phép' }, { term: 'permissive', vi: 'dễ dãi' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'ask for / grant permission',
        vi: 'xin phép / cấp phép',
        example: 'You must obtain written permission from your landlord before painting the walls.',
      },
      {
        phrase: 'without prior permission',
        vi: 'khi chưa có sự cho phép trước',
        example: 'Unauthorized personnel cannot enter the laboratory without prior permission.',
      },
    ],
    examples: [
      {
        en: 'The city council granted permission to construct the new public library.',
        vi: 'Hội đồng thành phố đã cấp phép xây dựng thư viện công cộng mới.',
      },
    ],
    synonyms: [{ term: 'authorization', vi: 'sự ủy quyền' }, { term: 'consent', vi: 'sự ưng thuận' }, { term: 'approval', vi: 'sự phê chuẩn' }],
    antonyms: [{ term: 'prohibition', vi: 'sự cấm đoán' }, { term: 'refusal', vi: 'sự từ chối' }],
  },

  remittance: {
    id: 'remittance',
    term: 'remittance',
    partOfSpeech: 'n.',
    phoneticUs: '/rɪˈmɪtns/',
    phoneticUk: '/rɪˈmɪtns/',
    definitionVi: 'tiền kiều hối gửi về nước; khoản tiền thanh toán gửi qua bưu điện/ngân hàng',
    definitionEn: 'a sum of money sent, especially by mail or electronic transfer, in payment for goods or services or as a gift',
    cefrLevel: 'C1',
    roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi' }],
    anatomy: {
      prefix: 're-',
      prefixVi: 'về lại',
      rootParts: [{ text: 'mit', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi' }],
      suffix: '-ance',
      suffixVi: 'danh từ',
      formula: 'remit + -ance → remittance (khoản tiền được chuyển gửi về lại quê nhà)',
      explanation: 'Dòng tiền do lao động ở nước ngoài chuyển về quê hương hỗ trợ người thân.',
    },
    wordFamily: {
      nouns: [{ term: 'remittance', vi: 'tiền kiều hối' }, { term: 'remission', vi: 'sự thuyên giảm bệnh' }],
      verbs: [{ term: 'remit', vi: 'gửi tiền' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'inward remittance',
        vi: 'nguồn kiều hối gửi về từ nước ngoài',
        example: 'Inward remittances from overseas workers provide crucial economic stability.',
      },
    ],
    examples: [
      {
        en: 'Many developing economies rely heavily on remittances sent home by migrant family members.',
        vi: 'Nhiều nền kinh tế đang phát triển dựa nhiều vào các khoản kiều hối do các thành viên gia đình đi làm ăn xa gửi về.',
      },
    ],
    synonyms: [{ term: 'money transfer', vi: 'chuyển khoản tiền' }, { term: 'payment', vi: 'khoản thanh toán' }],
    antonyms: [],
  },

  emission: {
    id: 'emission',
    term: 'emission',
    partOfSpeech: 'n.',
    phoneticUs: '/ɪˈmɪʃn/',
    phoneticUk: '/ɪˈmɪʃn/',
    definitionVi: 'sự phát thải khí / phát xạ năng lượng; lượng khí thải nhà kính',
    definitionEn: 'the production and discharge of something, especially gas or radiation',
    cefrLevel: 'B2',
    roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'phát ra, gửi đi' }],
    anatomy: {
      prefix: 'e-',
      prefixVi: 'ra ngoài (ex- biến âm thành e- trước m)',
      rootParts: [{ text: 'miss', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'phát đi' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'emit + -ion → emission (quá trình phun xả khói khí hoặc bức xạ ra môi trường)',
      explanation: 'Sự tỏa ra các hạt vật chất hoặc sóng năng lượng vào không gian.',
    },
    wordFamily: {
      nouns: [{ term: 'emission', vi: 'khí thải, sự phát xạ' }],
      verbs: [{ term: 'emit', vi: 'phát ra, tỏa ra' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'carbon / greenhouse gas emissions',
        vi: 'khí thải carbon / khí nhà kính',
        example: 'Electric vehicles help slash urban carbon emissions significantly.',
      },
      {
        phrase: 'zero emissions target',
        vi: 'mục tiêu phát thải ròng bằng không (Net Zero)',
        example: 'Nations worldwide committed to achieving net-zero emissions by 2050.',
      },
    ],
    examples: [
      {
        en: 'Industrial factories must comply with strict national regulations on harmful gas emissions.',
        vi: 'Các nhà máy công nghiệp phải tuân thủ các quy định quốc gia nghiêm ngặt về phát thải khí độc hại.',
      },
    ],
    synonyms: [{ term: 'discharge', vi: 'sự xả thải' }, { term: 'radiation', vi: 'sự phát xạ' }, { term: 'release', vi: 'sự giải phóng tỏa ra' }],
    antonyms: [{ term: 'absorption', vi: 'sự hấp thụ' }],
  },

  submission: {
    id: 'submission',
    term: 'submission',
    partOfSpeech: 'n.',
    phoneticUs: '/səbˈmɪʃn/',
    phoneticUk: '/səbˈmɪʃn/',
    definitionVi: 'sự nộp bài / nộp hồ sơ dự thi; sự quy phục, sự khuất phục',
    definitionEn: 'the action or fact of accepting or yielding to a superior force or authority; the action of presenting a proposal or document',
    cefrLevel: 'B2',
    roots: [{ rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi đi, dâng nộp' }],
    anatomy: {
      prefix: 'sub-',
      prefixVi: 'từ dưới lên',
      rootParts: [{ text: 'miss', rootId: 'mit_miss', rootName: 'Mit, Miss', meaningVi: 'gửi' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'submit + -ion → submission (hành động dâng nộp giấy tờ từ cấp dưới lên hoặc cúi đầu quy phục)',
      explanation: 'Sự chuyển giao tài liệu hoặc thái độ chấp nhận sự kiểm soát của quyền lực.',
    },
    wordFamily: {
      nouns: [{ term: 'submission', vi: 'sự nộp hồ sơ, sự quy phục' }],
      verbs: [{ term: 'submit', vi: 'nộp, quy phục' }],
      adjectives: [{ term: 'submissive', vi: 'ngoan ngoãn quy phục' }],
      adverbs: [{ term: 'submissively', vi: 'một cách phục tùng' }],
    },
    collocations: [
      {
        phrase: 'deadline for submission',
        vi: 'hạn chót nộp hồ sơ / bài vở',
        example: 'The final deadline for grant proposal submission is this Friday at 5 PM.',
      },
      {
        phrase: 'beat into submission',
        vi: 'đánh cho phải khuất phục',
        example: 'The oppressive ruler attempted to starve the rebellious province into submission.',
      },
    ],
    examples: [
      {
        en: 'The online portal received over ten thousand submissions for the coding competition.',
        vi: 'Cổng thông tin trực tuyến đã nhận được hơn mười ngàn bài dự thi cho cuộc thi lập trình.',
      },
    ],
    synonyms: [{ term: 'presentation', vi: 'sự trình nộp' }, { term: 'compliance', vi: 'sự tuân thủ' }, { term: 'surrender', vi: 'sự đầu hàng' }],
    antonyms: [{ term: 'defiance', vi: 'sự bất tuân thách thức' }, { term: 'resistance', vi: 'sự kháng cự' }],
  },
};

/**
 * Returns all distinct words from roots, expanded lexicon, and standalone library
 */
// =============================================================================
// PRE-INDEXED O(1) HIGH PERFORMANCE CACHE & LOOKUP HASH MAP
// =============================================================================
let _CACHED_BASE_LEXICON: SupervocWord[] | null = null;
let _TERM_LOOKUP_MAP: Map<string, SupervocWord> | null = null;

function buildGlobalLexiconIndex(roots?: SupervocRoot[]) {
  const map = new Map<string, SupervocWord>();
  const termMap = new Map<string, SupervocWord>();

  const safeRoots = roots || SUPERVOC_ROOTS_DATA || [];

  // 1. Root words
  for (const root of safeRoots) {
    if (root && root.words) {
      for (const word of root.words) {
        if (word && !map.has(word.id)) {
          map.set(word.id, word);
          termMap.set(word.term.toLowerCase(), word);
          termMap.set(word.id.toLowerCase(), word);
        }
      }
    }
  }

  // 2. Expanded lexicon
  for (const [id, word] of Object.entries(OMNI_EXPANDED_LEXICON)) {
    if (word && !map.has(id)) {
      map.set(id, word);
      termMap.set(word.term.toLowerCase(), word);
      termMap.set(id.toLowerCase(), word);
    }
  }

  // 3. Oxford B2 words
  for (const word of OXFORD_B2_HEALTH_MIND_WORDS) {
    if (word && !map.has(word.id)) {
      map.set(word.id, word);
      termMap.set(word.term.toLowerCase(), word);
      termMap.set(word.id.toLowerCase(), word);
    }
  }
  for (const word of OXFORD_B2_EDUCATION_ACADEMICS_WORDS) {
    if (word && !map.has(word.id)) {
      map.set(word.id, word);
      termMap.set(word.term.toLowerCase(), word);
      termMap.set(word.id.toLowerCase(), word);
    }
  }

  // 4. Standalone words
  for (const word of STANDALONE_WORDS_DATA) {
    if (word && !map.has(word.id)) {
      map.set(word.id, word);
      termMap.set(word.term.toLowerCase(), word);
      termMap.set(word.id.toLowerCase(), word);
    }
  }

  // 5. Dedicated Synonyms & Antonyms
  for (const [id, word] of Object.entries(SYNONYMS_ANTONYMS_LEXICON)) {
    if (word && !map.has(id)) {
      map.set(id, word);
      termMap.set(word.term.toLowerCase(), word);
      termMap.set(id.toLowerCase(), word);
    }
  }

  // 6. Derivatives
  for (const [id, word] of Object.entries(OMNI_DERIVATIVE_WORDS)) {
    if (word && !map.has(id)) {
      map.set(id, word);
      termMap.set(word.term.toLowerCase(), word);
      termMap.set(id.toLowerCase(), word);
    }
  }

  _CACHED_BASE_LEXICON = Array.from(map.values());
  _TERM_LOOKUP_MAP = termMap;
  return { lexicon: _CACHED_BASE_LEXICON, lookup: _TERM_LOOKUP_MAP };
}

export function getAllLexiconWords(roots?: SupervocRoot[]): SupervocWord[] {
  if (!roots && _CACHED_BASE_LEXICON) {
    return _CACHED_BASE_LEXICON;
  }
  const { lexicon } = buildGlobalLexiconIndex(roots);
  return lexicon;
}

export function getOmniWordProfile(
  term: string,
  roots?: SupervocRoot[]
): SupervocWord {
  const clean = (term || '').toLowerCase().trim();

  // Fast O(1) Lookup
  if (!_TERM_LOOKUP_MAP) {
    buildGlobalLexiconIndex(roots);
  }

  const directHit = _TERM_LOOKUP_MAP?.get(clean);
  if (directHit) {
    return directHit;
  }

  const safeRoots = roots || SUPERVOC_ROOTS_DATA || [];

  // Helper to detect suffix and morphological role
  const detectSuffixRole = (w: string): { suffix: string; suffixVi: string; pos: string } => {
    if (w.endsWith('ism')) return { suffix: '-ism', suffixVi: 'học thuyết, chủ nghĩa, phong trào', pos: 'n.' };
    if (w.endsWith('ist')) return { suffix: '-ist', suffixVi: 'chuyên gia, người theo học thuyết', pos: 'n.' };
    if (w.endsWith('tion') || w.endsWith('sion')) return { suffix: '-tion / -sion', suffixVi: 'quá trình, trạng thái, sự việc', pos: 'n.' };
    if (w.endsWith('ment')) return { suffix: '-ment', suffixVi: 'kết quả, hành động, sự việc', pos: 'n.' };
    if (w.endsWith('ity') || w.endsWith('ty')) return { suffix: '-ity / -ty', suffixVi: 'tính chất, phẩm chất, tình trạng', pos: 'n.' };
    if (w.endsWith('ness')) return { suffix: '-ness', suffixVi: 'tính chất, mức độ', pos: 'n.' };
    if (w.endsWith('ance') || w.endsWith('ence')) return { suffix: '-ance / -ence', suffixVi: 'trạng thái, tính chất', pos: 'n.' };
    if (w.endsWith('er') || w.endsWith('or')) return { suffix: '-er / -or', suffixVi: 'người / vật thực hiện hành động', pos: 'n.' };
    if (w.endsWith('ize') || w.endsWith('ise')) return { suffix: '-ize / -ise', suffixVi: 'làm cho, biến thành, hóa', pos: 'v.' };
    if (w.endsWith('ate')) return { suffix: '-ate', suffixVi: 'thực hiện hành động', pos: 'v.' };
    if (w.endsWith('ify')) return { suffix: '-ify', suffixVi: 'làm cho trở nên', pos: 'v.' };
    if (w.endsWith('able') || w.endsWith('ible')) return { suffix: '-able / -ible', suffixVi: 'có thể, đáng được', pos: 'adj.' };
    if (w.endsWith('ive')) return { suffix: '-ive', suffixVi: 'có xu hướng, mang tính chất', pos: 'adj.' };
    if (w.endsWith('al') || w.endsWith('ial')) return { suffix: '-al / -ial', suffixVi: 'thuộc về, mang tính', pos: 'adj.' };
    if (w.endsWith('ic') || w.endsWith('ical')) return { suffix: '-ic / -ical', suffixVi: 'mang tính chất, thuộc lĩnh vực', pos: 'adj.' };
    if (w.endsWith('ous') || w.endsWith('ious')) return { suffix: '-ous / -ious', suffixVi: 'đặc trưng bởi, chứa nhiều', pos: 'adj.' };
    if (w.endsWith('ful')) return { suffix: '-ful', suffixVi: 'đầy, tràn ngập', pos: 'adj.' };
    if (w.endsWith('less')) return { suffix: '-less', suffixVi: 'không có, thiếu', pos: 'adj.' };
    if (w.endsWith('ly')) return { suffix: '-ly', suffixVi: 'một cách, theo phương thức', pos: 'adv.' };
    return { suffix: '', suffixVi: '', pos: 'n.' };
  };

  // 7. Search in Word Families across ALL words (Roots + Expanded + Standalone + Synonyms)
  const allSearchableWords: SupervocWord[] = [
    ...safeRoots.flatMap((r) => r.words || []),
    ...Object.values(OMNI_EXPANDED_LEXICON),
    ...Object.values(SYNONYMS_ANTONYMS_LEXICON),
    ...STANDALONE_WORDS_DATA,
  ];

  for (const baseWord of allSearchableWords) {
    if (!baseWord) continue;
    const fam = baseWord.wordFamily || { nouns: [], verbs: [], adjectives: [], adverbs: [] };
    const allMembers = [
      ...(fam.nouns || []).map((n) => ({ ...n, pos: 'n.' })),
      ...(fam.verbs || []).map((v) => ({ ...v, pos: 'v.' })),
      ...(fam.adjectives || []).map((a) => ({ ...a, pos: 'adj.' })),
      ...(fam.adverbs || []).map((adv) => ({ ...adv, pos: 'adv.' })),
    ];

    const foundMember = allMembers.find((m) => m.term && m.term.toLowerCase() === clean);
    if (foundMember) {
      const { suffix, suffixVi, pos } = detectSuffixRole(clean);
      const parentRoot = baseWord.roots?.[0];
      const rootName = parentRoot?.rootName;
      const meaningVi = parentRoot?.meaningVi;

      return {
        id: clean.replace(/\s+/g, '_'),
        term: foundMember.term,
        partOfSpeech: foundMember.pos || pos,
        phoneticUs: baseWord.phoneticUs ? `/${clean}/` : `/${clean}/`,
        phoneticUk: baseWord.phoneticUk,
        definitionVi: foundMember.vi || `${foundMember.term} (dạng ${foundMember.pos || pos} của ${baseWord.term})`,
        definitionEn: `the ${foundMember.pos || pos} form belonging to the lexical family of "${baseWord.term}"`,
        cefrLevel: baseWord.cefrLevel || 'B2',
        roots: baseWord.roots && baseWord.roots.length > 0 ? baseWord.roots : [],
        anatomy: {
          prefix: baseWord.anatomy?.prefix,
          prefixVi: baseWord.anatomy?.prefixVi,
          rootParts: baseWord.anatomy?.rootParts && baseWord.anatomy.rootParts.length > 0
            ? baseWord.anatomy.rootParts
            : [{ text: baseWord.term, rootId: parentRoot?.rootId || 'term_origin', rootName: rootName || 'Nguồn gốc từ', meaningVi: meaningVi || '' }],
          suffix: suffix || baseWord.anatomy?.suffix,
          suffixVi: suffixVi || baseWord.anatomy?.suffixVi,
          formula: suffix
            ? `${baseWord.term} + ${suffix} (${suffixVi}) → ${foundMember.term}`
            : `${baseWord.term} → họ từ: ${foundMember.term}`,
          explanation: rootName
            ? `Từ "${foundMember.term}" (${foundMember.vi}) là dạng ${foundMember.pos || pos} trong họ từ của "${baseWord.term}", phát triển từ gốc ${rootName} (${meaningVi}).`
            : `Từ "${foundMember.term}" (${foundMember.vi}) là dạng ${foundMember.pos || pos} trong họ từ vựng của "${baseWord.term}".`,
        },
        wordFamily: baseWord.wordFamily || { nouns: [], verbs: [], adjectives: [], adverbs: [] },
        collocations: baseWord.collocations || [],
        examples: baseWord.examples && baseWord.examples.length > 0
          ? baseWord.examples
          : [
              {
                en: `The term "${foundMember.term}" is frequently used in modern English contexts related to ${baseWord.term}.`,
                vi: `Từ "${foundMember.term}" (${foundMember.vi}) thường được sử dụng trong các ngữ cảnh tiếng Anh hiện đại liên quan đến ${baseWord.term}.`,
              },
              {
                en: `Mastering "${foundMember.term}" enriches your descriptive vocabulary in both writing and speaking.`,
                vi: `Nắm vững từ "${foundMember.term}" giúp làm giàu vốn từ miêu tả của bạn trong cả văn viết lẫn văn nói.`,
              },
            ],
        synonyms: baseWord.synonyms || [],
        antonyms: baseWord.antonyms || [],
      };
    }
  }

  // 8. Linguistic Affix Decomposer Fallback with Authentic Examples & Phonetics
  const { suffix, suffixVi, pos } = detectSuffixRole(clean);
  return {
    id: clean.replace(/\s+/g, '_'),
    term: term || '',
    partOfSpeech: pos,
    phoneticUs: `/${clean}/`,
    definitionVi: `Từ vựng "${term}" trong mạng lưới siêu từ điển SuperVoc`,
    definitionEn: `lexical entry for "${term}" within the SuperVoc network`,
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [{ text: term || '', rootId: 'origin_gen', rootName: 'Từ Vựng Liên Kết', meaningVi: 'Từ vựng tiếng Anh' }],
      suffix: suffix || undefined,
      suffixVi: suffixVi || undefined,
      formula: suffix ? `${clean.replace(new RegExp(suffix + '$'), '')} + ${suffix} (${suffixVi}) → ${term}` : `${term} → Siêu từ điển SuperVoc`,
      explanation: `Dữ liệu phân tích hình thái và ngữ nghĩa liên thông cho từ "${term}".`,
    },
    wordFamily: { nouns: [{ term: clean, vi: 'dạng từ vựng' }], verbs: [], adjectives: [], adverbs: [] },
    collocations: [
      {
        phrase: `use of ${term}`,
        vi: `cách sử dụng từ ${term}`,
        example: `The precise use of "${term}" improves clarity in professional communication.`,
      },
    ],
    examples: [
      {
        en: `The word "${term}" is commonly encountered in academic, technical, and everyday discussions.`,
        vi: `Từ "${term}" thường được bắt gặp trong các bài thảo luận học thuật, kỹ thuật và đời sống hàng ngày.`,
      },
      {
        en: `Using "${term}" in proper context demonstrates a strong grasp of expressive vocabulary.`,
        vi: `Sử dụng "${term}" trong đúng ngữ cảnh thể hiện sự hiểu biết vững vàng về từ vựng biểu cảm.`,
      },
    ],
    synonyms: [],
    antonyms: [],
  };
}




