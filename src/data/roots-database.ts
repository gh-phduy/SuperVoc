export interface WordAnatomy {
  prefix?: string;
  prefixMeaning?: string;
  root: string;
  rootMeaning: string;
  suffix?: string;
  suffixMeaning?: string;
  formula: string;
  explanation: string;
}

export interface WordFamilyItem {
  term: string;
  vi: string;
}

export interface DerivedWord {
  term: string;
  partOfSpeech: string;
  phoneticUs: string;
  phoneticUk?: string;
  cefrLevel: string;
  definitionVi: string;
  anatomy: WordAnatomy;
  wordFamily: {
    nouns: WordFamilyItem[];
    verbs: WordFamilyItem[];
    adjectives: WordFamilyItem[];
    adverbs: WordFamilyItem[];
  };
  synonyms: WordFamilyItem[];
  antonyms: WordFamilyItem[];
  collocations: Array<{ phrase: string; vi: string; example: string }>;
  examples: Array<{ en: string; vi: string }>;
}

export interface TreeNode {
  id: string;
  label: string;
  type: 'root' | 'prefix' | 'stem' | 'suffix' | 'word';
  meaningVi?: string;
  children?: TreeNode[];
}

export interface RootItem {
  id: string;
  root: string;
  variants: string[];
  meaningEn: string;
  meaningVi: string;
  origin: 'Latin' | 'Greek' | 'Germanic' | 'French';
  etymologyStory: string;
  derivedWordsCount: number;
  genealogyTree: TreeNode;
  words: DerivedWord[];
}

export const ROOTS_DATABASE: Record<string, RootItem> = {
  struct: {
    id: 'struct',
    root: 'STRUCT',
    variants: ['struct', 'stru'],
    meaningEn: 'to build, construct, arrange',
    meaningVi: 'xây dựng, kiến trúc, sắp đặt',
    origin: 'Latin',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "struere" có nghĩa là xây đắp, xếp chồng lên nhau thành công trình.',
    derivedWordsCount: 8,
    genealogyTree: {
      id: 'root-struct',
      label: 'STRUCT (Xây dựng)',
      type: 'root',
      meaningVi: 'gốc từ: xây dựng',
      children: [
        {
          id: 'stem-construct',
          label: 'con- + struct',
          type: 'stem',
          meaningVi: 'xây cùng nhau → xây dựng',
          children: [
            { id: 'w-construct', label: 'construct (v.)', type: 'word', meaningVi: 'xây dựng' },
            { id: 'w-construction', label: 'construction (n.)', type: 'word', meaningVi: 'sự xây dựng' },
            { id: 'w-constructive', label: 'constructive (adj.)', type: 'word', meaningVi: 'mang tính xây dựng' },
          ],
        },
        {
          id: 'stem-destruct',
          label: 'de- + struct',
          type: 'stem',
          meaningVi: 'phá dỡ xuống → phá hủy',
          children: [
            { id: 'w-destruct', label: 'destruct (v.)', type: 'word', meaningVi: 'phá hủy' },
            { id: 'w-destruction', label: 'destruction (n.)', type: 'word', meaningVi: 'sự tàn phá' },
            { id: 'w-destructive', label: 'destructive (adj.)', type: 'word', meaningVi: 'có tính phá hoại' },
          ],
        },
        {
          id: 'stem-instruct',
          label: 'in- + struct',
          type: 'stem',
          meaningVi: 'xây kiến thức vào trong → hướng dẫn',
          children: [
            { id: 'w-instruct', label: 'instruct (v.)', type: 'word', meaningVi: 'hướng dẫn, chỉ bảo' },
            { id: 'w-instruction', label: 'instruction (n.)', type: 'word', meaningVi: 'lời chỉ dẫn' },
            { id: 'w-instructor', label: 'instructor (n.)', type: 'word', meaningVi: 'người hướng dẫn' },
          ],
        },
        {
          id: 'stem-structure',
          label: 'struct + -ure',
          type: 'stem',
          meaningVi: 'kết cấu công trình',
          children: [
            { id: 'w-structure', label: 'structure (n., v.)', type: 'word', meaningVi: 'cấu trúc, kết cấu' },
            { id: 'w-structural', label: 'structural (adj.)', type: 'word', meaningVi: 'thuộc về kết cấu' },
          ],
        },
      ],
    },
    words: [
      {
        term: 'construct',
        partOfSpeech: 'v.',
        phoneticUs: '/kənˈstrʌkt/',
        phoneticUk: '/kənˈstrʌkt/',
        cefrLevel: 'B1',
        definitionVi: 'xây dựng, kiến tạo công trình/học thuyết',
        anatomy: {
          prefix: 'con-',
          prefixMeaning: 'together (cùng nhau)',
          root: 'STRUCT',
          rootMeaning: 'to build (xây dựng)',
          formula: 'con- (cùng nhau) + struct (xây dựng) → construct (xây dựng)',
          explanation: 'Xếp các khối vật liệu hoặc ý tưởng lại với nhau để dựng nên công trình.',
        },
        wordFamily: {
          nouns: [
            { term: 'construction', vi: 'công trình, sự xây dựng' },
            { term: 'constructor', vi: 'nhà thầu xây dựng' },
          ],
          verbs: [
            { term: 'construct', vi: 'xây dựng' },
            { term: 'reconstruct', vi: 'tái thiết' },
            { term: 'deconstruct', vi: 'giải cấu trúc' },
          ],
          adjectives: [
            { term: 'constructive', vi: 'mang tính xây dựng' },
          ],
          adverbs: [
            { term: 'constructively', vi: 'một cách xây dựng' },
          ],
        },
        synonyms: [
          { term: 'build', vi: 'xây cất' },
          { term: 'erect', vi: 'dựng lên' },
          { term: 'assemble', vi: 'lắp ráp' },
        ],
        antonyms: [
          { term: 'destroy', vi: 'phá hủy' },
          { term: 'demolish', vi: 'san bằng' },
        ],
        collocations: [
          {
            phrase: 'construct a bridge / building',
            vi: 'xây dựng cầu / tòa nhà',
            example: 'Engineers worked for three years to construct the suspension bridge.',
          },
          {
            phrase: 'constructive criticism / feedback',
            vi: 'những lời góp ý mang tính xây dựng',
            example: 'We always welcome constructive feedback from our users.',
          },
        ],
        examples: [
          {
            en: 'The city plans to construct a modern subway line to ease traffic jams.',
            vi: 'Thành phố có kế hoạch xây dựng một tuyến tàu điện ngầm hiện đại để giảm ùn tắc giao thông.',
          },
        ],
      },
      {
        term: 'destruction',
        partOfSpeech: 'n.',
        phoneticUs: '/dɪˈstrʌkʃn/',
        phoneticUk: '/dɪˈstrʌkʃn/',
        cefrLevel: 'B1',
        definitionVi: 'sự tàn phá, sự hủy diệt',
        anatomy: {
          prefix: 'de-',
          prefixMeaning: 'down, away (phá xuống)',
          root: 'STRUCT',
          rootMeaning: 'to build (xây dựng)',
          suffix: '-tion',
          suffixMeaning: 'noun of action (danh từ chỉ hành động)',
          formula: 'de- (phá xuống) + struct (xây dựng) + -tion (sự) → destruction (sự tàn phá)',
          explanation: 'Hành động kéo đổ cấu trúc đã xây dựng xuống đất.',
        },
        wordFamily: {
          nouns: [{ term: 'destruction', vi: 'sự tàn phá' }],
          verbs: [{ term: 'destruct', vi: 'phá hủy' }],
          adjectives: [
            { term: 'destructive', vi: 'có tính phá hoại' },
            { term: 'indestructible', vi: 'không thể phá hủy' },
          ],
          adverbs: [{ term: 'destructively', vi: 'một cách tàn phá' }],
        },
        synonyms: [
          { term: 'ruin', vi: 'sự tàn lụi' },
          { term: 'devastation', vi: 'sự tàn phá khủng khiếp' },
        ],
        antonyms: [
          { term: 'construction', vi: 'sự xây dựng' },
          { term: 'creation', vi: 'sự tạo dựng' },
        ],
        collocations: [
          {
            phrase: 'weapons of mass destruction',
            vi: 'vũ khí hủy diệt hàng loạt',
            example: 'International treaties ban weapons of mass destruction.',
          },
        ],
        examples: [
          {
            en: 'The hurricane left a trail of severe destruction across coastal towns.',
            vi: 'Cơn bão đã để lại một vệt tàn phá nặng nề khắp các thị trấn ven biển.',
          },
        ],
      },
      {
        term: 'instruct',
        partOfSpeech: 'v.',
        phoneticUs: '/ɪnˈstrʌkt/',
        phoneticUk: '/ɪnˈstrʌkt/',
        cefrLevel: 'B1',
        definitionVi: 'hướng dẫn, chỉ dẫn, dạy bảo',
        anatomy: {
          prefix: 'in-',
          prefixMeaning: 'in, into (vào bên trong)',
          root: 'STRUCT',
          rootMeaning: 'to build (xây dựng)',
          formula: 'in- (vào trong) + struct (xây dựng) → instruct (hướng dẫn)',
          explanation: 'Xây dựng nền tảng tri thức vào trong tâm trí người học.',
        },
        wordFamily: {
          nouns: [
            { term: 'instruction', vi: 'lời chỉ dẫn, sự dạy dỗ' },
            { term: 'instructor', vi: 'người hướng dẫn, giảng viên' },
          ],
          verbs: [{ term: 'instruct', vi: 'hướng dẫn' }],
          adjectives: [{ term: 'instructive', vi: 'bổ ích, mang tính giáo huấn' }],
          adverbs: [{ term: 'instructively', vi: 'một cách bổ ích' }],
        },
        synonyms: [
          { term: 'teach', vi: 'dạy' },
          { term: 'guide', vi: 'chỉ dẫn' },
          { term: 'direct', vi: 'chỉ đạo' },
        ],
        antonyms: [{ term: 'mislead', vi: 'chỉ dẫn sai' }],
        collocations: [
          {
            phrase: 'follow the instructions',
            vi: 'làm theo các hướng dẫn',
            example: 'Read and follow the operating instructions carefully.',
          },
        ],
        examples: [
          {
            en: 'The flight attendant instructed passengers on emergency procedures.',
            vi: 'Tiếp viên hàng không đã hướng dẫn hành khách các quy trình khẩn cấp.',
          },
        ],
      },
      {
        term: 'structure',
        partOfSpeech: 'n., v.',
        phoneticUs: '/ˈstrʌktʃər/',
        phoneticUk: '/ˈstrʌktʃə(r)/',
        cefrLevel: 'B1',
        definitionVi: 'cấu trúc, kết cấu, tòa công trình',
        anatomy: {
          root: 'STRUCT',
          rootMeaning: 'to build (xây dựng)',
          suffix: '-ure',
          suffixMeaning: 'result or process (kết quả/quá trình)',
          formula: 'struct (xây dựng) + -ure (kết quả) → structure (cấu trúc)',
          explanation: 'Kết quả của việc xây dựng và sắp đặt các thành phần.',
        },
        wordFamily: {
          nouns: [
            { term: 'structure', vi: 'cấu trúc' },
            { term: 'infrastructure', vi: 'cơ sở hạ tầng' },
          ],
          verbs: [{ term: 'structure', vi: 'cấu trúc hóa' }],
          adjectives: [{ term: 'structural', vi: 'thuộc về kết cấu' }],
          adverbs: [{ term: 'structurally', vi: 'về mặt cấu trúc' }],
        },
        synonyms: [
          { term: 'framework', vi: 'khung sườn' },
          { term: 'organization', vi: 'cơ cấu tổ chức' },
        ],
        antonyms: [{ term: 'disorder', vi: 'sự hỗn loạn' }],
        collocations: [
          {
            phrase: 'social / economic structure',
            vi: 'cơ cấu xã hội / kinh tế',
            example: 'The reform changed the economic structure of the country.',
          },
        ],
        examples: [
          {
            en: 'The Eiffel Tower is an iconic iron structure in Paris.',
            vi: 'Tháp Eiffel là một công trình kiến trúc bằng sắt mang tính biểu tượng ở Paris.',
          },
        ],
      },
    ],
  },

  dict: {
    id: 'dict',
    root: 'DICT',
    variants: ['dict', 'dic'],
    meaningEn: 'to say, speak, declare',
    meaningVi: 'nói, tuyên bố, phát biểu',
    origin: 'Latin',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "dicere" (nói, phát ngôn), là nguồn gốc của các từ liên quan đến ngôn từ, mệnh lệnh và từ điển.',
    derivedWordsCount: 7,
    genealogyTree: {
      id: 'root-dict',
      label: 'DICT (Nói, Phát ngôn)',
      type: 'root',
      meaningVi: 'gốc từ: lời nói, phát ngôn',
      children: [
        {
          id: 'stem-predict',
          label: 'pre- + dict',
          type: 'stem',
          meaningVi: 'nói trước → tiên đoán',
          children: [
            { id: 'w-predict', label: 'predict (v.)', type: 'word', meaningVi: 'tiên đoán, dự báo' },
            { id: 'w-prediction', label: 'prediction (n.)', type: 'word', meaningVi: 'lời dự đoán' },
            { id: 'w-predictable', label: 'predictable (adj.)', type: 'word', meaningVi: 'dễ đoán' },
          ],
        },
        {
          id: 'stem-contradict',
          label: 'contra- + dict',
          type: 'stem',
          meaningVi: 'nói ngược lại → mâu thuẫn, cãi lại',
          children: [
            { id: 'w-contradict', label: 'contradict (v.)', type: 'word', meaningVi: 'mâu thuẫn, cãi lại' },
            { id: 'w-contradiction', label: 'contradiction (n.)', type: 'word', meaningVi: 'sự mâu thuẫn' },
          ],
        },
        {
          id: 'stem-dictionary',
          label: 'dict + -ionary',
          type: 'stem',
          meaningVi: 'sách tập hợp lời nói → từ điển',
          children: [
            { id: 'w-dictionary', label: 'dictionary (n.)', type: 'word', meaningVi: 'cuốn từ điển' },
            { id: 'w-dictate', label: 'dictate (v.)', type: 'word', meaningVi: 'đọc chính tả, ra lệnh' },
          ],
        },
      ],
    },
    words: [
      {
        term: 'predict',
        partOfSpeech: 'v.',
        phoneticUs: '/prɪˈdɪkt/',
        phoneticUk: '/prɪˈdɪkt/',
        cefrLevel: 'B1',
        definitionVi: 'tiên đoán, dự báo trước',
        anatomy: {
          prefix: 'pre-',
          prefixMeaning: 'before, in advance (trước)',
          root: 'DICT',
          rootMeaning: 'to speak (nói)',
          formula: 'pre- (trước) + dict (nói) → predict (nói trước điều sẽ xảy ra)',
          explanation: 'Phát biểu về một sự kiện trước khi nó thực sự diễn ra.',
        },
        wordFamily: {
          nouns: [
            { term: 'prediction', vi: 'lời tiên đoán, sự dự báo' },
            { term: 'predictor', vi: 'chỉ số dự báo' },
          ],
          verbs: [{ term: 'predict', vi: 'dự báo' }],
          adjectives: [
            { term: 'predictable', vi: 'có thể đoán trước' },
            { term: 'unpredictable', vi: 'không thể lường trước' },
          ],
          adverbs: [
            { term: 'predictably', vi: 'đúng như dự đoán' },
          ],
        },
        synonyms: [
          { term: 'forecast', vi: 'dự báo thời tiết/kinh tế' },
          { term: 'foresee', vi: 'nhìn thấy trước' },
        ],
        antonyms: [{ term: 'recount', vi: 'kể lại việc đã qua' }],
        collocations: [
          {
            phrase: 'predict the future / outcome',
            vi: 'tiên đoán tương lai / kết quả',
            example: 'Economists attempt to predict the economic outcome of the policy.',
          },
        ],
        examples: [
          {
            en: 'Scientists use complex satellite models to predict weather patterns.',
            vi: 'Các nhà khoa học sử dụng mô hình vệ tinh phức tạp để dự báo quy luật thời tiết.',
          },
        ],
      },
      {
        term: 'dictate',
        partOfSpeech: 'v., n.',
        phoneticUs: '/ˈdɪkteɪt/',
        phoneticUk: '/dɪkˈteɪt/',
        cefrLevel: 'B1',
        definitionVi: 'đọc chính tả cho viết, ra lệnh độc đoán',
        anatomy: {
          root: 'DICT',
          rootMeaning: 'to speak (nói)',
          suffix: '-ate',
          suffixMeaning: 'verb action (thực hiện hành động)',
          formula: 'dict (nói) + -ate (làm) → dictate (đọc lời nói / ra lệnh)',
          explanation: 'Nói ra những lời mà người khác bắt buộc phải ghi lại hoặc tuân theo.',
        },
        wordFamily: {
          nouns: [
            { term: 'dictation', vi: 'bài chính tả' },
            { term: 'dictator', vi: 'kẻ độc tài' },
            { term: 'dictatorship', vi: 'chế độ độc tài' },
          ],
          verbs: [{ term: 'dictate', vi: 'đọc chính tả, ra lệnh' }],
          adjectives: [{ term: 'dictatorial', vi: 'độc tài hách dịch' }],
          adverbs: [],
        },
        synonyms: [
          { term: 'command', vi: 'ra lệnh' },
          { term: 'impose', vi: 'áp đặt' },
        ],
        antonyms: [{ term: 'obey', vi: 'vâng lời' }],
        collocations: [
          {
            phrase: 'dictate terms',
            vi: 'áp đặt các điều khoản thỏa thuận',
            example: 'The winning nation dictated the terms of the peace treaty.',
          },
        ],
        examples: [
          {
            en: 'The manager dictated a formal letter to his executive assistant.',
            vi: 'Người quản lý đã đọc một bức thư trang trọng cho trợ lý của mình viết lại.',
          },
        ],
      },
    ],
  },

  port: {
    id: 'port',
    root: 'PORT',
    variants: ['port'],
    meaningEn: 'to carry, bear, bring',
    meaningVi: 'mang, vác, vận chuyển, bến cảng',
    origin: 'Latin',
    etymologyStory: 'Bắt nguồn từ động từ Latin "portare" (mang vác, chuyên chở) và "portus" (bến cảng nơi tàu thuyền cập bến chở hàng).',
    derivedWordsCount: 8,
    genealogyTree: {
      id: 'root-port',
      label: 'PORT (Mang vác, Vận chuyển)',
      type: 'root',
      meaningVi: 'gốc từ: mang vác, chuyên chở',
      children: [
        {
          id: 'stem-transport',
          label: 'trans- + port',
          type: 'stem',
          meaningVi: 'chở xuyên qua → giao thông vận tải',
          children: [
            { id: 'w-transport', label: 'transport (v., n.)', type: 'word', meaningVi: 'vận chuyển' },
            { id: 'w-transportation', label: 'transportation (n.)', type: 'word', meaningVi: 'ngành giao thông vận tải' },
          ],
        },
        {
          id: 'stem-export-import',
          label: 'ex- / im- + port',
          type: 'stem',
          meaningVi: 'chở ra ngoài / chở vào trong',
          children: [
            { id: 'w-export', label: 'export (v., n.)', type: 'word', meaningVi: 'xuất khẩu' },
            { id: 'w-import', label: 'import (v., n.)', type: 'word', meaningVi: 'nhập khẩu' },
          ],
        },
        {
          id: 'stem-portable',
          label: 'port + -able',
          type: 'stem',
          meaningVi: 'có thể xách tay mang theo',
          children: [
            { id: 'w-portable', label: 'portable (adj.)', type: 'word', meaningVi: 'di động, xách tay' },
            { id: 'w-portal', label: 'portal (n.)', type: 'word', meaningVi: 'cổng thông tin, cánh cổng' },
          ],
        },
      ],
    },
    words: [
      {
        term: 'transport',
        partOfSpeech: 'v., n.',
        phoneticUs: '/ˈtrænspɔːrt/',
        phoneticUk: '/ˈtrænspɔːt/',
        cefrLevel: 'B1',
        definitionVi: 'vận chuyển, chuyên chở hàng hóa/hành khách',
        anatomy: {
          prefix: 'trans-',
          prefixMeaning: 'across, beyond (xuyên qua)',
          root: 'PORT',
          rootMeaning: 'to carry (mang vác)',
          formula: 'trans- (xuyên qua) + port (mang vác) → transport (vận chuyển qua lại)',
          explanation: 'Chuyên chở con người hoặc hàng hóa từ địa điểm này qua địa điểm khác.',
        },
        wordFamily: {
          nouns: [
            { term: 'transport', vi: 'sự chuyên chở' },
            { term: 'transportation', vi: 'phương tiện giao thông' },
          ],
          verbs: [{ term: 'transport', vi: 'vận chuyển' }],
          adjectives: [{ term: 'transportable', vi: 'có thể vận chuyển được' }],
          adverbs: [],
        },
        synonyms: [
          { term: 'convey', vi: 'chuyển tải' },
          { term: 'haul', vi: 'kéo chở hàng' },
        ],
        antonyms: [{ term: 'remain', vi: 'ở yên tại chỗ' }],
        collocations: [
          {
            phrase: 'public transport',
            vi: 'phương tiện giao thông công cộng',
            example: 'Using public transport helps reduce traffic congestion.',
          },
        ],
        examples: [
          {
            en: 'Cargo trains transport thousands of tons of coal and grain every day.',
            vi: 'Những đoàn tàu chở hàng vận chuyển hàng ngàn tấn than và ngũ cốc mỗi ngày.',
          },
        ],
      },
      {
        term: 'portable',
        partOfSpeech: 'adj.',
        phoneticUs: '/ˈpɔːrtəbl/',
        phoneticUk: '/ˈpɔːtəbl/',
        cefrLevel: 'B1',
        definitionVi: 'di động, xách tay, dễ dàng mang theo',
        anatomy: {
          root: 'PORT',
          rootMeaning: 'to carry (mang vác)',
          suffix: '-able',
          suffixMeaning: 'capable of (có thể)',
          formula: 'port (mang vác) + -able (có thể) → portable (có thể xách tay mang theo)',
          explanation: 'Đặc điểm của đồ vật nhỏ gọn đủ để mang đi khắp mọi nơi.',
        },
        wordFamily: {
          nouns: [{ term: 'portability', vi: 'tính di động tiện lợi' }],
          verbs: [],
          adjectives: [{ term: 'portable', vi: 'xách tay, di động' }],
          adverbs: [],
        },
        synonyms: [
          { term: 'movable', vi: 'di chuyển được' },
          { term: 'compact', vi: 'nhỏ gọn' },
        ],
        antonyms: [
          { term: 'fixed', vi: 'cố định một chỗ' },
          { term: 'immovable', vi: 'bất động' },
        ],
        collocations: [
          {
            phrase: 'portable charger / laptop',
            vi: 'sạc dự phòng di động / máy tính xách tay',
            example: 'Always bring a portable charger when going on long journeys.',
          },
        ],
        examples: [
          {
            en: 'This compact acoustic guitar is highly portable and perfect for camping trips.',
            vi: 'Cây đàn guitar thùng nhỏ gọn này rất dễ mang theo và hoàn hảo cho các chuyến cắm trại.',
          },
        ],
      },
    ],
  },

  tract: {
    id: 'tract',
    root: 'TRACT',
    variants: ['tract', 'tra'],
    meaningEn: 'to pull, draw, drag',
    meaningVi: 'kéo, lôi, rút ra',
    origin: 'Latin',
    etymologyStory: 'Bắt nguồn từ động từ tiếng Latin "trahere" (kéo lê, lôi cuốn), tạo ra các từ liên quan đến sự thu hút, trừu tượng và hợp đồng.',
    derivedWordsCount: 7,
    genealogyTree: {
      id: 'root-tract',
      label: 'TRACT (Kéo, Rút ra)',
      type: 'root',
      meaningVi: 'gốc từ: kéo, lôi cuốn',
      children: [
        {
          id: 'stem-attract',
          label: 'ad- + tract',
          type: 'stem',
          meaningVi: 'kéo về phía mình → thu hút',
          children: [
            { id: 'w-attract', label: 'attract (v.)', type: 'word', meaningVi: 'thu hút, hấp dẫn' },
            { id: 'w-attraction', label: 'attraction (n.)', type: 'word', meaningVi: 'sức hút, điểm tham quan' },
            { id: 'w-attractive', label: 'attractive (adj.)', type: 'word', meaningVi: 'quyến rũ, bắt mắt' },
          ],
        },
        {
          id: 'stem-contract',
          label: 'con- + tract',
          type: 'stem',
          meaningVi: 'kéo lại gần nhau → hợp đồng, co rút',
          children: [
            { id: 'w-contract', label: 'contract (n., v.)', type: 'word', meaningVi: 'hợp đồng, co rút lại' },
            { id: 'w-contraction', label: 'contraction (n.)', type: 'word', meaningVi: 'sự co rút' },
          ],
        },
        {
          id: 'stem-extract',
          label: 'ex- + tract',
          type: 'stem',
          meaningVi: 'kéo rút ra ngoài → chiết xuất',
          children: [
            { id: 'w-extract', label: 'extract (v., n.)', type: 'word', meaningVi: 'chiết xuất, trích đoạn' },
            { id: 'w-distract', label: 'distract (v.)', type: 'word', meaningVi: 'kéo hướng chú ý đi chỗ khác' },
          ],
        },
      ],
    },
    words: [
      {
        term: 'attract',
        partOfSpeech: 'v.',
        phoneticUs: '/əˈtrækt/',
        phoneticUk: '/əˈtrækt/',
        cefrLevel: 'B1',
        definitionVi: 'thu hút, lôi cuốn, hấp dẫn',
        anatomy: {
          prefix: 'ad- (at-)',
          prefixMeaning: 'to, toward (về phía)',
          root: 'TRACT',
          rootMeaning: 'to pull (kéo)',
          formula: 'at- (về phía) + tract (kéo) → attract (kéo sự chú ý về phía mình)',
          explanation: 'Lực kéo tâm trí hoặc vật thể về phía một tâm điểm.',
        },
        wordFamily: {
          nouns: [
            { term: 'attraction', vi: 'sự thu hút, điểm du lịch' },
            { term: 'attractiveness', vi: 'vẻ quyến rũ' },
          ],
          verbs: [{ term: 'attract', vi: 'thu hút' }],
          adjectives: [
            { term: 'attractive', vi: 'quyến rũ, hấp dẫn' },
            { term: 'unattractive', vi: 'không thu hút' },
          ],
          adverbs: [{ term: 'attractively', vi: 'một cách quyến rũ' }],
        },
        synonyms: [
          { term: 'captivate', vi: 'làm mê hoặc' },
          { term: 'allure', vi: 'lôi cuốn' },
        ],
        antonyms: [{ term: 'repel', vi: 'đẩy lùi, làm chán ghét' }],
        collocations: [
          {
            phrase: 'tourist attraction',
            vi: 'địa điểm thu hút khách du lịch',
            example: 'Ha Long Bay is a world-famous tourist attraction in northern Vietnam.',
          },
        ],
        examples: [
          {
            en: 'Brightly colored flower blossoms attract bees and butterflies for pollination.',
            vi: 'Những bông hoa rực rỡ sắc màu thu hút ong bướm đến để thụ phấn.',
          },
        ],
      },
      {
        term: 'contract',
        partOfSpeech: 'n., v.',
        phoneticUs: '/ˈkɑːntrækt/',
        phoneticUk: '/ˈkɒntrækt/',
        cefrLevel: 'B1',
        definitionVi: 'bản hợp đồng, co rút lại, ký kết',
        anatomy: {
          prefix: 'con-',
          prefixMeaning: 'together (cùng nhau)',
          root: 'TRACT',
          rootMeaning: 'to pull (kéo)',
          formula: 'con- (cùng nhau) + tract (kéo) → contract (kéo lại gần nhau / ràng buộc)',
          explanation: 'Hai bên cùng kéo lại gần nhau để lập bản thỏa ước ràng buộc pháp lý.',
        },
        wordFamily: {
          nouns: [
            { term: 'contract', vi: 'hợp đồng' },
            { term: 'contractor', vi: 'nhà thầu' },
            { term: 'contraction', vi: 'sự co thắt, dạng rút gọn' },
          ],
          verbs: [{ term: 'contract', vi: 'ký hợp đồng, co rút' }],
          adjectives: [{ term: 'contractual', vi: 'theo hợp đồng' }],
          adverbs: [],
        },
        synonyms: [
          { term: 'agreement', vi: 'thỏa thuận' },
          { term: 'shrink', vi: 'co lại' },
        ],
        antonyms: [{ term: 'expand', vi: 'nở rộng ra' }],
        collocations: [
          {
            phrase: 'sign a contract',
            vi: 'ký kết hợp đồng kinh tế',
            example: 'Both companies signed a multi-million-dollar partnership contract.',
          },
        ],
        examples: [
          {
            en: 'Metals contract when they are cooled down to freezing temperatures.',
            vi: 'Kim loại co rút lại khi chúng được làm lạnh xuống nhiệt độ đóng băng.',
          },
        ],
      },
    ],
  },
};
