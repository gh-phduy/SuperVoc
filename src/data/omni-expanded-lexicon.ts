import type { SupervocWord } from './supervoc-roots-dataset';
import {
  NUANCE_TABLE_ENGULF,
  NUANCE_TABLE_RELENT,
  NUANCE_TABLE_PERSEVERANCE,
  NUANCE_TABLE_RURAL,
} from './nuance-tables-dataset';

export const OMNI_EXPANDED_LEXICON: Record<string, SupervocWord> = {
  // ===========================================================================
  // 1. NHÓM NÔNG NGHIỆP, RUỘNG ĐẤT, NÔNG THÔN (AGRI, AGRO / CULT / RUS / URBS)
  // ===========================================================================
  rural: {
    id: 'rural',
    term: 'rural',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˈrʊr.əl/',
    phoneticUk: '/ˈrʊə.rəl/',
    definitionVi: 'thuộc về nông thôn, đồng quê, làng xóm dân dã',
    detailedMeaningVi:
      'Chỉ vị trí địa lý, dân cư và hạ tầng thuộc về vùng thôn quê (phân biệt thuần túy về mặt không gian với thành thị - urban), ví dụ như đường xá, bệnh viện, đời sống vùng sâu vùng xa.',
    definitionEn: 'in, relating to, or characteristic of the countryside rather than the town',
    cefrLevel: 'B1',
    roots: [
      { rootId: 'rus_ruris', rootName: 'Rus, Ruris', meaningVi: 'đồng quê, nông thôn (Latin)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'rus / rur-', rootId: 'rus_ruris', rootName: 'Rus, Ruris', meaningVi: 'đồng quê, làng quê' },
      ],
      suffix: '-al',
      suffixVi: 'hậu tố tạo tính từ (thuộc về)',
      formula: 'rur- (đồng quê) + -al (thuộc về) → rural (thuộc về cảnh quan hoặc lối sống nông thôn)',
      explanation: 'Bắt nguồn từ tiếng Latinh "ruralis" (từ danh từ "rus" nghĩa là vùng nông thôn, đồng ruộng).',
    },
    wordFamily: {
      nouns: [
        { term: 'rurality', vi: 'nét thôn dã, tính chất đồng quê' },
        { term: 'ruralism', vi: 'lối sống nông thôn, phong trào yêu thích nông thôn' },
      ],
      verbs: [
        { term: 'ruralize', vi: 'nông thôn hóa, biến thành vùng quê' },
      ],
      adjectives: [
        { term: 'rural', vi: 'thuộc về nông thôn' },
      ],
      adverbs: [
        { term: 'rurally', vi: 'về mặt nông thôn, theo phong cách đồng quê' },
      ],
    },
    collocations: [
      {
        phrase: 'rural area / community',
        vi: 'vùng nông thôn / cộng đồng làng quê',
        example: 'Many rural areas still lack reliable high-speed internet access.',
      },
      {
        phrase: 'rural-urban migration',
        vi: 'dòng di cư từ nông thôn ra thành thị',
        example: 'Rapid rural-urban migration has put immense pressure on city infrastructure.',
      },
      {
        phrase: 'rural economy / development',
        vi: 'kinh tế / phát triển nông thôn',
        example: 'The government launched new initiatives to boost the rural economy.',
      },
    ],
    examples: [
      {
        en: 'She grew up in a quiet rural village surrounded by rolling green hills.',
        vi: 'Cô lớn lên ở một ngôi làng nông thôn yên bình được bao bọc bởi những ngọn đồi xanh nhấp nhô.',
      },
      {
        en: 'Improving healthcare services in rural regions remains a national priority.',
        vi: 'Nâng cao dịch vụ y tế tại các vùng nông thôn vẫn là một ưu tiên quốc gia.',
      },
    ],
    synonyms: [
      { term: 'rustic', vi: 'mộc mạc, thôn dã' },
      { term: 'pastoral', vi: 'đồng quê, thanh bình' },
      { term: 'countryside', vi: 'miền quê' },
      { term: 'provincial', vi: 'thuộc tỉnh lẻ' },
    ],
    antonyms: [
      { term: 'urban', vi: 'thuộc thành thị' },
      { term: 'metropolitan', vi: 'thuộc đô thị lớn' },
      { term: 'city', vi: 'thành phố' },
    ],
    nuanceTable: NUANCE_TABLE_RURAL,
  },

  agrarianism: {
    id: 'agrarianism',
    term: 'agrarianism',
    partOfSpeech: 'n.',
    phoneticUs: '/əˈɡrer.i.ə.nɪz.əm/',
    phoneticUk: '/əˈɡreə.ri.ə.nɪz.əm/',
    definitionVi: 'chủ nghĩa trọng nông, học thuyết coi trọng nông nghiệp và cải cách ruộng đất',
    detailedMeaningVi:
      'Học thuyết chính trị - xã hội đề cao giá trị đạo đức và kinh tế của tầng lớp nông dân độc lập, ủng hộ việc sở hữu ruộng đất công bằng và xem nông nghiệp là nền tảng tối thượng của quốc gia.',
    definitionEn: 'a social or political philosophy which values rural society as superior to urban society and advocates for agrarian reform and farmers',
    cefrLevel: 'C2',
    roots: [
      { rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng, đất đai' },
    ],
    anatomy: {
      rootParts: [
        { text: 'agr-', rootId: 'agri_agro', rootName: 'Agri, Agro', meaningVi: 'đồng ruộng (Latin: ager)' },
      ],
      suffix: '-ism',
      suffixVi: 'hậu tố danh từ chỉ học thuyết, chủ nghĩa, phong trào tư tưởng',
      formula: 'agrarian (thuộc về ruộng đất) + -ism (chủ nghĩa) → agrarianism (chủ nghĩa đề cao nông nghiệp & người làm nông)',
      explanation: 'Học thuyết chính trị xã hội tin rằng việc canh tác đất đai tự do mang lại phẩm hạnh đạo đức và sự tự chủ cao nhất cho con người.',
    },
    wordFamily: {
      nouns: [
        { term: 'agrarianism', vi: 'chủ nghĩa trọng nông, phong trào ruộng đất' },
        { term: 'agrarian', vi: 'người ủng hộ cải cách ruộng đất' },
      ],
      verbs: [],
      adjectives: [
        { term: 'agrarian', vi: 'thuộc về ruộng đất, nông nghiệp' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'philosophy of agrarianism',
        vi: 'triết lý của chủ nghĩa trọng nông',
        example: 'Thomas Jefferson strongly championed the philosophy of agrarianism for the young republic.',
      },
      {
        phrase: 'radical agrarianism',
        vi: 'phong trào trọng nông cấp tiến',
        example: 'Radical agrarianism demanded the redistribution of large estates to landless peasant families.',
      },
    ],
    examples: [
      {
        en: 'Classical agrarianism viewed independent farmers as the backbone of democratic society.',
        vi: 'Chủ nghĩa trọng nông cổ điển xem những nông dân tự chủ là xương sống của một xã hội dân chủ.',
      },
    ],
    synonyms: [
      { term: 'physiocracy', vi: 'học phái trọng nông' },
      { term: 'agriculturalism', vi: 'chủ nghĩa phát triển nông nghiệp' },
    ],
    antonyms: [
      { term: 'industrialism', vi: 'chủ nghĩa kỹ nghệ / công nghiệp hóa' },
      { term: 'urbanism', vi: 'chủ nghĩa đô thị' },
    ],
    nuanceTable: NUANCE_TABLE_RURAL,
  },

  rustic: {
    id: 'rustic',
    term: 'rustic',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˈrʌs.tɪk/',
    phoneticUk: '/ˈrʌs.tɪk/',
    definitionVi: 'mộc mạc, chất phác, mang nét thôn quê đơn sơ',
    detailedMeaningVi:
      'Chỉ vẻ đẹp thô mộc, tự nhiên, giản dị không cầu kỳ hoa mỹ (thường dùng để miêu tả đồ gỗ thô, kiến trúc mộc, nếp sống chân chất hoặc phong thái mộc mạc của người thôn quê).',
    definitionEn: 'relating to the countryside; rural; made in a plain and simple style suitable for the countryside',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'rus_ruris', rootName: 'Rus, Ruris', meaningVi: 'đồng quê, nông thôn' },
    ],
    anatomy: {
      rootParts: [
        { text: 'rust-', rootId: 'rus_ruris', rootName: 'Rus, Ruris', meaningVi: 'người nông thôn (Latin: rusticus)' },
      ],
      suffix: '-ic',
      suffixVi: 'tính từ (mang tính chất)',
      formula: 'rust- (nông dân, miền quê) + -ic → rustic (mộc mạc, chân chất như miền quê)',
      explanation: 'Từ Latinh "rusticus" mô tả những gì thuộc về người vùng quê mộc mạc.',
    },
    wordFamily: {
      nouns: [
        { term: 'rusticity', vi: 'nét mộc mạc thôn quê' },
        { term: 'rustic', vi: 'người thôn quê chất phác' },
      ],
      verbs: [
        { term: 'rusticate', vi: 'về sống ở thôn quê, làm cho mộc mạc' },
      ],
      adjectives: [
        { term: 'rustic', vi: 'mộc mạc, thôn dã' },
      ],
      adverbs: [
        { term: 'rustically', vi: 'một cách mộc mạc, đơn sơ' },
      ],
    },
    collocations: [
      {
        phrase: 'rustic charm',
        vi: 'vẻ quyến rũ mộc mạc',
        example: 'The cottage retained its old-world rustic charm with exposed wooden beams.',
      },
      {
        phrase: 'rustic furniture',
        vi: 'nội thất phong cách mộc tự nhiên',
        example: 'They furnished their mountain lodge with handmade rustic furniture.',
      },
    ],
    examples: [
      {
        en: 'The restaurant offers simple, hearty food in a warm, rustic setting.',
        vi: 'Nhà hàng phục vụ các món ăn đơn giản, thịnh soạn trong một không gian mộc mạc và ấm cúng.',
      },
    ],
    synonyms: [
      { term: 'rural', vi: 'thuộc nông thôn' },
      { term: 'homely', vi: 'giản dị, ấm cúng' },
      { term: 'unrefined', vi: 'mộc tự nhiên' },
    ],
    antonyms: [
      { term: 'sophisticated', vi: 'tinh xảo, cầu kỳ' },
      { term: 'urban', vi: 'thành thị' },
      { term: 'modern', vi: 'hiện đại' },
    ],
    nuanceTable: NUANCE_TABLE_RURAL,
  },

  pastoral: {
    id: 'pastoral',
    term: 'pastoral',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˈpæs.tər.əl/',
    phoneticUk: '/ˈpɑː.stər.əl/',
    definitionVi: 'thuộc về đồng quê, mục đồng, thanh bình êm ả',
    definitionEn: 'used for or related to the keeping or grazing of sheep or cattle; portraying country life in a romanticized, peaceful way',
    cefrLevel: 'C1',
    roots: [
      { rootId: 'pastor', rootName: 'Pastor', meaningVi: 'người chăn cừu, chăn thả (Latin)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'pastor', rootId: 'pastor', rootName: 'Pastor', meaningVi: 'người chăn thả gia súc' },
      ],
      suffix: '-al',
      suffixVi: 'thuộc về',
      formula: 'pastor (mục đồng) + -al → pastoral (mang cảnh tượng đồng cỏ thanh bình, chăn thả thơ mộng)',
      explanation: 'Bắt nguồn từ "pascere" (cho gặm cỏ), từ đó sinh ra "pastor" (người chăn bầy).',
    },
    wordFamily: {
      nouns: [
        { term: 'pastoralist', vi: 'người sống bằng nghề chăn thả du mục' },
        { term: 'pastoralism', vi: 'lối sống chăn thả gia súc du mục' },
      ],
      verbs: [],
      adjectives: [
        { term: 'pastoral', vi: 'thuộc đồng quê, mục đồng' },
      ],
      adverbs: [
        { term: 'pastorally', vi: 'theo cách thanh bình đồng quê' },
      ],
    },
    collocations: [
      {
        phrase: 'pastoral landscape / scene',
        vi: 'phong cảnh đồng quê thanh bình',
        example: 'The painting depicts a tranquil pastoral scene of sheep grazing beneath willow trees.',
      },
    ],
    examples: [
      {
        en: 'Beethoven composed his famous Pastoral Symphony inspired by his long walks in the countryside.',
        vi: 'Beethoven đã soạn bản Giao hưởng Đồng quê nổi tiếng lấy cảm hứng từ những chuyến đi dạo dài ở ngoại ô.',
      },
    ],
    synonyms: [
      { term: 'rural', vi: 'nông thôn' },
      { term: 'bucolic', vi: 'thanh bình, đồng nội' },
      { term: 'idyllic', vi: 'đẹp như tranh vẽ' },
    ],
    antonyms: [
      { term: 'industrial', vi: 'công nghiệp' },
      { term: 'urban', vi: 'thành thị xô bồ' },
    ],
    nuanceTable: NUANCE_TABLE_RURAL,
  },

  urban: {
    id: 'urban',
    term: 'urban',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˈɝː.bən/',
    phoneticUk: '/ˈɜː.bən/',
    definitionVi: 'thuộc về thành thị, khu vực đô thị đông đúc',
    definitionEn: 'in, relating to, or characteristic of a town or city',
    cefrLevel: 'B1',
    roots: [
      { rootId: 'urbs_urbis', rootName: 'Urbs, Urbis', meaningVi: 'thành phố, đô thành (Latin)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'urb-', rootId: 'urbs_urbis', rootName: 'Urbs, Urbis', meaningVi: 'thành phố (Latin: urbs)' },
      ],
      suffix: '-an',
      suffixVi: 'tính từ (thuộc về)',
      formula: 'urb- (thành phố) + -an → urban (thuộc về đô thị)',
      explanation: 'Gốc từ tiếng Latin "urbs" dùng để chỉ thành phố Rome hoa lệ thời cổ đại.',
    },
    wordFamily: {
      nouns: [
        { term: 'urbanite', vi: 'người sống ở đô thị' },
        { term: 'urbanization', vi: 'quá trình đô thị hóa' },
        { term: 'suburb', vi: 'vùng ngoại ô' },
      ],
      verbs: [
        { term: 'urbanize', vi: 'đô thị hóa một vùng' },
      ],
      adjectives: [
        { term: 'urban', vi: 'thuộc đô thị' },
        { term: 'suburban', vi: 'thuộc ngoại ô' },
      ],
      adverbs: [
        { term: 'urbanly', vi: 'theo lối sống thành thị' },
      ],
    },
    collocations: [
      {
        phrase: 'urban sprawl',
        vi: 'sự mở rộng đô thị tự phát',
        example: 'Rapid urban sprawl has swallowed up vast tracts of surrounding agricultural land.',
      },
      {
        phrase: 'urban planning / renewal',
        vi: 'quy hoạch / chỉnh trang đô thị',
        example: 'Smart urban planning helps reduce traffic congestion and carbon footprints.',
      },
    ],
    examples: [
      {
        en: 'More than half of the world’s population now lives in urban environments.',
        vi: 'Hơn một nửa dân số thế giới hiện đang sinh sống trong các môi trường đô thị.',
      },
    ],
    synonyms: [
      { term: 'metropolitan', vi: 'đô thị lớn' },
      { term: 'civic', vi: 'thuộc công dân thành phố' },
      { term: 'municipal', vi: 'thuộc chính quyền đô thị' },
    ],
    antonyms: [
      { term: 'rural', vi: 'nông thôn' },
      { term: 'rustic', vi: 'thôn dã' },
      { term: 'provincial', vi: 'tỉnh lẻ' },
    ],
  },

  urbanization: {
    id: 'urbanization',
    term: 'urbanization',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌɝː.bən.əˈzeɪ.ʃən/',
    phoneticUk: '/ˌɜː.bən.aɪˈzeɪ.ʃən/',
    definitionVi: 'quá trình đô thị hóa, sự phát triển mở rộng của các thành phố',
    definitionEn: 'the process by which more and more people leave the countryside to live in cities, making them grow larger',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'urbs_urbis', rootName: 'Urbs, Urbis', meaningVi: 'thành phố, đô thành' },
    ],
    anatomy: {
      rootParts: [
        { text: 'urban', rootId: 'urbs_urbis', rootName: 'Urbs, Urbis', meaningVi: 'thành thị' },
      ],
      suffix: '-ization',
      suffixVi: 'quá trình, sự việc',
      formula: 'urban + -ize (biến thành) + -ation (quá trình) → urbanization (quá trình đô thị hóa)',
      explanation: 'Sự chuyển đổi từ lối sống nông nghiệp sang lối sống đô thị công nghiệp.',
    },
    wordFamily: {
      nouns: [
        { term: 'urbanization', vi: 'quá trình đô thị hóa' },
        { term: 'urbanite', vi: 'người thành thị' },
      ],
      verbs: [
        { term: 'urbanize', vi: 'đô thị hóa' },
      ],
      adjectives: [
        { term: 'urbanized', vi: 'đã được đô thị hóa' },
        { term: 'urban', vi: 'thuộc đô thị' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'rapid rate of urbanization',
        vi: 'tốc độ đô thị hóa nhanh chóng',
        example: 'Southeast Asian countries are experiencing an unprecedented rate of urbanization.',
      },
    ],
    examples: [
      {
        en: 'Unplanned urbanization can lead to severe environmental degradation and overcrowding.',
        vi: 'Đô thị hóa không có quy hoạch có thể dẫn đến suy thoái môi trường nghiêm trọng và quá tải dân cư.',
      },
    ],
    synonyms: [
      { term: 'city development', vi: 'phát triển thành phố' },
    ],
    antonyms: [
      { term: 'ruralization', vi: 'nông thôn hóa' },
    ],
  },

  farming: {
    id: 'farming',
    term: 'farming',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈfɑːr.mɪŋ/',
    phoneticUk: '/ˈfɑː.mɪŋ/',
    definitionVi: 'nghề làm nông, việc canh tác trồng trọt và chăn nuôi gia súc',
    definitionEn: 'the business or activity of growing crops and raising animals on a farm',
    cefrLevel: 'A2',
    roots: [
      { rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, chăm sóc' },
    ],
    anatomy: {
      rootParts: [
        { text: 'farm', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trang trại nông trang' },
      ],
      suffix: '-ing',
      suffixVi: 'danh động từ chỉ ngành nghề / hoạt động',
      formula: 'farm (trang trại) + -ing → farming (nghề làm trang trại nông nghiệp)',
      explanation: 'Bắt nguồn từ tiếng Pháp cổ "ferme" (hợp đồng cho thuê đất canh tác cố định).',
    },
    wordFamily: {
      nouns: [
        { term: 'farming', vi: 'nghề làm nông' },
        { term: 'farmer', vi: 'nông dân' },
        { term: 'farm', vi: 'trang trại' },
      ],
      verbs: [
        { term: 'farm', vi: 'canh tác, chăn nuôi' },
      ],
      adjectives: [
        { term: 'farmed', vi: 'được nuôi trồng' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'organic farming',
        vi: 'nông nghiệp hữu cơ',
        example: 'Organic farming avoids the use of synthetic chemical pesticides.',
      },
    ],
    examples: [
      {
        en: 'Modern farming relies heavily on automated machinery and precision GPS data.',
        vi: 'Nghề làm nông hiện đại phụ thuộc nhiều vào máy móc tự động hóa và dữ liệu GPS chính xác.',
      },
    ],
    synonyms: [
      { term: 'agriculture', vi: 'nông nghiệp' },
      { term: 'cultivation', vi: 'canh tác' },
    ],
    antonyms: [
      { term: 'manufacturing', vi: 'sản xuất công nghiệp' },
    ],
  },

  cultivation: {
    id: 'cultivation',
    term: 'cultivation',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌkʌl.təˈveɪ.ʃən/',
    phoneticUk: '/ˌkʌl.tɪˈveɪ.ʃən/',
    definitionVi: 'sự canh tác, trồng trọt đất đai; sự trau dồi rèn luyện phẩm chất',
    definitionEn: 'the act of preparing land and growing crops on it; the development of a skill or relationship through care and effort',
    cefrLevel: 'B1',
    roots: [
      { rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'trồng trọt, chăm sóc, nuôi dưỡng' },
    ],
    anatomy: {
      rootParts: [
        { text: 'cultiv-', rootId: 'cult_cultura', rootName: 'Cult, Cultura', meaningVi: 'chăm bón (Latin: colere)' },
      ],
      suffix: '-ation',
      suffixVi: 'quá trình, hành động',
      formula: 'cultivate + -ion → cultivation (quá trình cày xới, chăm sóc đất để thu hoạch)',
      explanation: 'Mở rộng nghĩa từ việc chăm bón cây cối sang việc trau dồi tri thức và đạo đức.',
    },
    wordFamily: {
      nouns: [
        { term: 'cultivation', vi: 'sự canh tác, sự trau dồi' },
        { term: 'cultivator', vi: 'người canh tác, máy xới đất' },
        { term: 'culture', vi: 'văn hóa, sự nuôi cấy' },
      ],
      verbs: [
        { term: 'cultivate', vi: 'canh tác, trau dồi' },
      ],
      adjectives: [
        { term: 'cultivated', vi: 'được canh tác; có học thức tao nhã' },
        { term: 'cultivable', vi: 'có thể trồng trọt được' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'land under cultivation',
        vi: 'diện tích đất đang được canh tác',
        example: 'The total area of land under rice cultivation expanded this season.',
      },
    ],
    examples: [
      {
        en: 'The fertile river delta is ideal for intensive crop cultivation throughout the year.',
        vi: 'Vùng đồng bằng châu thổ màu mỡ là nơi lý tưởng để thâm canh cây trồng quanh năm.',
      },
    ],
    synonyms: [
      { term: 'farming', vi: 'làm nông' },
      { term: 'tillage', vi: 'cày cấy đất' },
    ],
    antonyms: [
      { term: 'neglect', vi: 'sự bỏ bê' },
    ],
  },

  // ===========================================================================
  // 2. NHÓM UỐN LƯỢN, LINH HOẠT (FLEX, FLECT)
  // ===========================================================================
  inflexible: {
    id: 'inflexible',
    term: 'inflexible',
    partOfSpeech: 'adj.',
    phoneticUs: '/ɪnˈflek.sə.bəl/',
    phoneticUk: '/ɪnˈflek.sɪ.bəl/',
    definitionVi: 'cứng nhắc, không linh hoạt; không thể uốn cong',
    definitionEn: 'unwilling to change or compromise; not able to be bent easily without breaking',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn cong, gập lại' },
    ],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'tiền tố phủ định (không, bất-)',
      rootParts: [
        { text: 'flex', rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn cong (Latin: flectere)' },
      ],
      suffix: '-ible',
      suffixVi: 'có thể',
      formula: 'in- (không) + flex (uốn) + -ible (có thể) → inflexible (không thể uốn cong → cứng nhắc, bảo thủ)',
      explanation: 'Sự đối lập hoàn toàn với tính linh hoạt (flexible).',
    },
    wordFamily: {
      nouns: [
        { term: 'inflexibility', vi: 'tính cứng nhắc, sự bảo thủ' },
        { term: 'flexibility', vi: 'tính linh hoạt' },
      ],
      verbs: [
        { term: 'flex', vi: 'uốn cong, co cơ' },
      ],
      adjectives: [
        { term: 'inflexible', vi: 'cứng nhắc' },
        { term: 'flexible', vi: 'linh hoạt' },
      ],
      adverbs: [
        { term: 'inflexibly', vi: 'một cách cứng nhắc' },
      ],
    },
    collocations: [
      {
        phrase: 'inflexible attitude / rules',
        vi: 'thái độ / quy định cứng nhắc',
        example: 'His inflexible attitude made negotiations reach a dead end.',
      },
    ],
    examples: [
      {
        en: 'The company suffered due to its inflexible organizational hierarchy.',
        vi: 'Công ty đã chịu thiệt hại do hệ thống cấp bậc tổ chức quá cứng nhắc.',
      },
    ],
    synonyms: [
      { term: 'rigid', vi: 'cứng rắn, khắt khe' },
      { term: 'unyielding', vi: 'không khoan nhượng' },
      { term: 'stubborn', vi: 'bướng bỉnh' },
    ],
    antonyms: [
      { term: 'flexible', vi: 'linh hoạt' },
      { term: 'adaptable', vi: 'dễ thích nghi' },
      { term: 'pliable', vi: 'mềm dẻo' },
    ],
  },

  reflection: {
    id: 'reflection',
    term: 'reflection',
    partOfSpeech: 'n.',
    phoneticUs: '/rɪˈflek.ʃən/',
    phoneticUk: '/rɪˈflek.ʃən/',
    definitionVi: 'sự phản chiếu ánh sáng/hình ảnh; sự suy ngẫm, chiêm nghiệm sâu sắc',
    definitionEn: 'the throwing back by a body or surface of light, heat, or sound; serious and careful thought about a past event or experience',
    cefrLevel: 'B1',
    roots: [
      { rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn cong, bẻ gập tia sáng lại' },
    ],
    anatomy: {
      prefix: 're-',
      prefixVi: 'ngược lại, trở lại',
      rootParts: [
        { text: 'flect', rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn, bẻ cong' },
      ],
      suffix: '-ion',
      suffixVi: 'danh từ chỉ sự việc / quá trình',
      formula: 're- (ngược lại) + flect (uốn cong) + -ion → reflection (tia sáng bị bẻ gập dội ngược lại → bóng phản chiếu / tâm trí uốn ngược dòng suy nghĩ → sự suy ngẫm)',
      explanation: 'Hình ảnh tia sáng đập vào gương rồi dội ngược lại mắt người nhìn.',
    },
    wordFamily: {
      nouns: [
        { term: 'reflection', vi: 'sự phản chiếu, sự suy ngẫm' },
        { term: 'reflector', vi: 'kính phản quang' },
      ],
      verbs: [
        { term: 'reflect', vi: 'phản chiếu, suy ngẫm' },
      ],
      adjectives: [
        { term: 'reflective', vi: 'mang tính suy ngẫm; phản quang' },
      ],
      adverbs: [
        { term: 'reflectively', vi: 'một cách trầm ngâm, chiêm nghiệm' },
      ],
    },
    collocations: [
      {
        phrase: 'on reflection',
        vi: 'sau khi suy ngẫm kỹ lưỡng',
        example: 'On reflection, I realize that I made a hasty decision.',
      },
      {
        phrase: 'mirror reflection',
        vi: 'hình ảnh phản chiếu trong gương',
        example: 'She stared at her own reflection in the calm surface of the lake.',
      },
    ],
    examples: [
      {
        en: 'Your writing should show evidence of critical thinking and self-reflection.',
        vi: 'Bài viết của bạn cần thể hiện tư duy phản biện và sự tự chiêm nghiệm bản thân.',
      },
    ],
    synonyms: [
      { term: 'mirror image', vi: 'ảnh phản chiếu' },
      { term: 'contemplation', vi: 'sự trầm tư chiêm nghiệm' },
      { term: 'meditation', vi: 'sự suy tưởng' },
    ],
    antonyms: [
      { term: 'absorption', vi: 'sự hấp thụ tia sáng' },
      { term: 'impulsiveness', vi: 'sự bốc đồng không suy nghĩ' },
    ],
  },

  deflect: {
    id: 'deflect',
    term: 'deflect',
    partOfSpeech: 'v.',
    phoneticUs: '/dɪˈflekt/',
    phoneticUk: '/dɪˈflekt/',
    definitionVi: 'làm lệch hướng, đánh lạc hướng chú ý, chệch khỏi quỹ đạo',
    definitionEn: 'cause something to change direction by interposing something; turn aside from a straight course or subject',
    cefrLevel: 'C1',
    roots: [
      { rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn cong, bẻ lái' },
    ],
    anatomy: {
      prefix: 'de-',
      prefixVi: 'rời khỏi, chệch sang bên',
      rootParts: [
        { text: 'flect', rootId: 'flex_flect', rootName: 'Flex, Flect', meaningVi: 'uốn cong (Latin: flectere)' },
      ],
      formula: 'de- (chệch đi) + flect (uốn cong) → deflect (bẻ cong đường đi sang hướng khác)',
      explanation: 'Sự thay đổi đường đi của vật thể hoặc né tránh câu hỏi nhạy cảm.',
    },
    wordFamily: {
      nouns: [
        { term: 'deflection', vi: 'sự làm lệch hướng, sự đánh trống lảng' },
        { term: 'deflector', vi: 'tấm chắn chuyển hướng' },
      ],
      verbs: [
        { term: 'deflect', vi: 'làm lệch hướng' },
      ],
      adjectives: [
        { term: 'deflective', vi: 'có khả năng làm lệch hướng' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'deflect criticism / blame',
        vi: 'né tránh chỉ trích / đùn đẩy trách nhiệm',
        example: 'The politician tried to deflect criticism by bringing up past achievements.',
      },
    ],
    examples: [
      {
        en: 'The goalkeeper managed to deflect the powerful shot over the crossbar.',
        vi: 'Thủ môn đã kịp dùng tay làm chệch hướng cú sút uy lực qua xà ngang.',
      },
    ],
    synonyms: [
      { term: 'divert', vi: 'chuyển hướng' },
      { term: 'sidetrack', vi: 'đánh lạc hướng' },
      { term: 'parry', vi: 'gạt đòn, né tránh' },
    ],
    antonyms: [
      { term: 'aim directly', vi: 'nhắm thẳng vào' },
      { term: 'absorb', vi: 'hứng trọn' },
    ],
  },

  // ===========================================================================
  // 4. NHÓM TỪ VỰNG BAO TRÙM, NHẤN CHÌM, NUỐT CHỬNG (ENGULF & PHẢ HỆ)
  // ===========================================================================
  engulf: {
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
      { rootId: 'gulf_origin', rootName: 'Gulf (vịnh/vực sâu)', meaningVi: 'vực thẳm sâu không đáy' },
    ],
    anatomy: {
      prefix: 'en-',
      prefixVi: 'đưa vào trạng thái, làm cho thành',
      rootParts: [
        { text: 'gulf', rootId: 'gulf_origin', rootName: 'Gulf', meaningVi: 'vực sâu, dòng xoáy nuốt chửng (tiếng Pháp cổ: golfe)' },
      ],
      formula: 'en- (bao bọc, đưa vào) + gulf (vực xoáy sâu) → engulf (nuốt chửng, bao trùm hoàn toàn)',
      explanation:
        'Tiền tố "en-" (gốc Pháp/Latin mang nghĩa đặt vào bên trong) kết hợp với danh từ "gulf" (vực sâu/họng xoáy), tạo nên động từ "engulf" – miêu tả cảm giác một thế lực bao la bên ngoài cuốn phăng và nuốt chửng hoàn toàn thực thể bên trong.',
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
          exampleEn: 'The engulfed coastline suffered immense destruction during the storm.',
          exampleVi: 'Đường bờ biển bị nhấn chìm đã chịu sự tàn phá khủng khiếp trong cơn bão.',
        },
        {
          term: 'engulfing',
          vi: 'có tính bao trùm, tràn ngập, cuồn cuộn',
          phonetic: '/ɪnˈɡʌlfɪŋ/',
          exampleEn: 'She felt an engulfing sense of panic take over her mind.',
          exampleVi: 'Cô cảm thấy một nỗi hoảng loạn bao trùm lấy tâm trí.',
        },
      ],
      adverbs: [
        {
          term: 'engulfingly',
          vi: 'một cách bao trùm, ngập tràn',
          phonetic: '/ɪnˈɡʌlfɪŋli/',
          exampleEn: 'The darkness spread engulfingly across the valley as night fell.',
          exampleVi: 'Bóng tối lan tỏa một cách bao trùm khắp thung lũng khi đêm buông xuống.',
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
      {
        phrase: 'engulf the entire town',
        vi: 'nuốt trọn / bao phủ toàn bộ thị trấn',
        example: 'A blanket of smog engulfed the entire city during the winter.',
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
      {
        en: 'A thick, mysterious fog engulfed the mountain pass at dawn.',
        vi: 'Màn sương mù dày đặc, huyền bí đã bao trùm lấy con đèo trên núi vào lúc rạng đông.',
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
        exampleEn: 'The deep cave seemed to swallow the explorers whole.',
        exampleVi: 'Hang động sâu thẳm dường như nuốt trọn các nhà thám hiểm.',
      },
      {
        term: 'overwhelm',
        vi: 'áp đảo, làm cho choáng ngợp không kháng cự nổi',
        phonetic: '/ˌoʊ.vɚˈwelm/',
        exampleEn: 'The soldiers were overwhelmed by enemy forces.',
        exampleVi: 'Những người lính bị áp đảo bởi lực lượng quân địch.',
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
        exampleEn: 'The strong wind uncovered the hidden ruins beneath the sand.',
        exampleVi: 'Cơn gió mạnh đã để lộ ra những tàn tích ẩn giấu dưới lớp cát.',
      },
      {
        term: 'release',
        vi: 'giải thoát, phóng thích',
        phonetic: '/rɪˈliːs/',
        exampleEn: 'He was finally released from the suffocating anxiety.',
        exampleVi: 'Cuối cùng anh ấy cũng được giải thoát khỏi nỗi lo lắng ngột ngạt.',
      },
    ],
    nuanceTable: NUANCE_TABLE_ENGULF,
  },

  // ===========================================================================
  // 5. TỪ VỰNG MỚI: RELENT (MỀM LÒNG, DỊU BỚT, NHƯỢNG BỘ)
  // ===========================================================================
  relent: {
    id: 'relent',
    term: 'relent',
    partOfSpeech: 'v.',
    phoneticUs: '/rɪˈlent/',
    phoneticUk: '/rɪˈlent/',
    definitionVi: 'mềm lòng, nguôi ngoai, nhượng bộ; dịu bớt, ngớt đi (mưa bão, thời tiết, cơn đau)',
    detailedMeaningVi:
      'Từ bỏ thái độ nghiêm khắc, gay gắt ban đầu để trở nên nhân nhượng, động lòng trắc ẩn tha thứ hoặc đồng ý (về mặt con người); hoặc cường độ một hiện tượng khắc nghiệt dữ dội (như bão tuyết, cái nóng thiêu đốt, cơn đau hành hạ) giảm dần sức tàn phá và dịu bớt đi.',
    definitionEn:
      'to act in a less severe manner towards someone and sincerely forgive or give in; (of something unpleasant) to become less intense, severe, or cruel',
    cefrLevel: 'C1',
    roots: [
      {
        rootId: 'lent_origin',
        rootName: 'Lentus (Latin: dẻo dai, chậm lại, mềm mại)',
        meaningVi: 'mềm dẻo, dịu lại',
      },
    ],
    anatomy: {
      prefix: 're-',
      prefixVi: 'trở lại trạng thái, tăng cường',
      rootParts: [
        {
          text: 'lent',
          rootId: 'lent_origin',
          rootName: 'Lentus',
          meaningVi: 'mềm mại, chùng xuống, chậm lại (Latin: lentus)',
        },
      ],
      formula: 're- (trở lại) + lent (mềm dẻo, chùng lại) → relent (chùng lòng xuống → mềm lòng, dịu bớt gay gắt)',
      explanation:
        'Gốc Latin "lentus" mang nghĩa mềm mại, uốn dẻo được, không còn căng cứng. Khi kết hợp với tiền tố "re-", động từ "relent" diễn tả sự chuyển hóa từ trạng thái cứng rắn, căng thẳng sang trạng thái chùng xuống, động lòng trắc ẩn hoặc ngớt dần cơn giận dữ / bão tố.',
    },
    wordFamily: {
      nouns: [
        {
          term: 'relentlessness',
          vi: 'sự không ngừng nghỉ, tính chất gay gắt không khoan nhượng',
          phonetic: '/rɪˈlent.ləs.nəs/',
          exampleEn: 'The relentlessness of the economic crisis tested the resilience of every business.',
          exampleVi: 'Sự không ngừng nghỉ của cuộc khủng hoảng kinh tế đã thử thách sức bền của mọi doanh nghiệp.',
        },
        {
          term: 'relentment',
          vi: 'sự mềm lòng, sự dịu đi',
          phonetic: '/rɪˈlent.mənt/',
        },
      ],
      verbs: [
        {
          term: 'relent',
          vi: 'mềm lòng, nguôi ngoai, dịu bớt',
          phonetic: '/rɪˈlent/',
          exampleEn: 'Her mother finally relented and allowed her to join the art camp.',
          exampleVi: 'Mẹ cô cuối cùng cũng mềm lòng và cho phép cô tham gia trại nghệ thuật.',
        },
      ],
      adjectives: [
        {
          term: 'relentless',
          vi: 'không ngừng nghỉ, gay gắt liên tục, không khoan nhượng',
          phonetic: '/rɪˈlent.ləs/',
          exampleEn: 'The team faced relentless pressure to meet the tight deadline.',
          exampleVi: 'Cả nhóm phải đối mặt với áp lực không ngừng nghỉ để kịp hạn chót ngặt nghèo.',
        },
        {
          term: 'relenting',
          vi: 'có xu hướng mềm lòng, đang dịu dần',
          phonetic: '/rɪˈlen.tɪŋ/',
        },
      ],
      adverbs: [
        {
          term: 'relentlessly',
          vi: 'một cách không ngừng nghỉ, kiên quyết không lùi bước',
          phonetic: '/rɪˈlent.ləs.li/',
          exampleEn: 'Scientists worked relentlessly to find a viable vaccine.',
          exampleVi: 'Các nhà khoa học đã làm việc không ngừng nghỉ để tìm ra loại vắc-xin khả thi.',
        },
      ],
    },
    collocations: [
      {
        phrase: 'finally relent',
        vi: 'cuối cùng cũng mềm lòng / chịu nhượng bộ',
        example: 'After days of pleading, the landlord finally relented and lowered the rent.',
      },
      {
        phrase: 'refuse to relent',
        vi: 'kiên quyết không mềm lòng / không chịu nhượng bộ',
        example: 'The harsh general refused to relent despite the severe winter conditions.',
      },
      {
        phrase: 'the storm / heat relents',
        vi: 'cơn bão / đợt nắng nóng ngớt dần, dịu bớt',
        example: 'By late evening, the fierce thunderstorm had finally relented.',
      },
      {
        phrase: 'relent under pressure',
        vi: 'chịu nhượng bộ trước áp lực lớn',
        example: 'The board of directors refused to relent under public pressure.',
      },
    ],
    examples: [
      {
        en: 'Her parents initially strictly said no, but they finally relented after seeing her determination.',
        vi: 'Ban đầu bố mẹ cô kiên quyết từ chối, nhưng cuối cùng họ đã mềm lòng sau khi nhìn thấy sự quyết tâm của cô.',
      },
      {
        en: 'After three days of howling blizzard winds, the bitter cold finally began to relent.',
        vi: 'Sau ba ngày gió bão tuyết gầm rú, cái lạnh buốt giá cuối cùng cũng bắt đầu dịu bớt.',
      },
      {
        en: 'The security guards showed no sign of relenting as the crowd surged forward.',
        vi: 'Lực lượng an ninh không hề tỏ ra nhượng bộ khi đám đông tràn về phía trước.',
      },
      {
        en: 'The scorching summer sun relented as thick rain clouds covered the sky.',
        vi: 'Ánh mặt trời mùa hè gay gắt đã dịu đi khi những đám mây mưa dày đặc che phủ bầu trời.',
      },
    ],
    synonyms: [
      {
        term: 'yield',
        vi: 'nhượng bộ, chịu khuất phục',
        phonetic: '/jiːld/',
        exampleEn: 'He refused to yield to the blackmailer’s demands.',
        exampleVi: 'Anh ấy kiên quyết không nhượng bộ trước các yêu cầu của kẻ tống tiền.',
      },
      {
        term: 'abate',
        vi: 'thuyên giảm, ngớt đi (cường độ gió bão, cơn đau)',
        phonetic: '/əˈbeɪt/',
        exampleEn: 'The storm suddenly abated at midnight.',
        exampleVi: 'Cơn bão bất ngờ ngớt đi vào lúc nửa đêm.',
      },
      {
        term: 'concede',
        vi: 'thừa nhận, chịu nhường bước',
        phonetic: '/kənˈsiːd/',
        exampleEn: 'The candidate was forced to concede defeat.',
        exampleVi: 'Ứng cử viên đã buộc phải thừa nhận thất bại.',
      },
      {
        term: 'soften',
        vi: 'làm mềm lòng, dịu lại',
        phonetic: '/ˈsɑːf.ən/',
        exampleEn: 'Her stern expression softened into a warm smile.',
        exampleVi: 'Vẻ mặt nghiêm nghị của cô đã dịu lại thành một nụ cười ấm áp.',
      },
    ],
    antonyms: [
      {
        term: 'persist',
        vi: 'kiên trì, dai dẳng không ngừng',
        phonetic: '/pɚˈsɪst/',
        exampleEn: 'If the symptoms persist, consult a medical doctor immediately.',
        exampleVi: 'Nếu các triệu chứng vẫn dai dẳng tiếp diễn, hãy tham khảo ý kiến bác sĩ ngay.',
      },
      {
        term: 'intensify',
        vi: 'gia tăng mãnh liệt, dữ dội hơn',
        phonetic: '/ɪnˈten.sə.faɪ/',
        exampleEn: 'The fighting intensified along the border region.',
        exampleVi: 'Các cuộc giao tranh đã gia tăng dữ dội dọc theo khu vực biên giới.',
      },
      {
        term: 'harden',
        vi: 'trở nên sắt đá, cứng rắn hơn',
        phonetic: '/ˈhɑːr.dən/',
        exampleEn: 'Her heart hardened against their pleas.',
        exampleVi: 'Trái tim cô trở nên sắt đá trước những lời van nài của họ.',
      },
    ],
    nuanceTable: NUANCE_TABLE_RELENT,
  },

  // ===========================================================================
  // 6. TỪ VỰNG MỚI: PERSEVERANCE (SỰ KIÊN TRÌ, TÍNH BỀN BỈ)
  // ===========================================================================
  perseverance: {
    id: 'perseverance',
    term: 'perseverance',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌpɜːr.səˈvɪr.əns/',
    phoneticUk: '/ˌpɜː.sɪˈvɪə.rəns/',
    definitionVi: 'sự kiên trì, tính kiên nhẫn bền bỉ, ý chí không bỏ cuộc',
    detailedMeaningVi:
      'Phẩm chất ý chí và nỗ lực bền bỉ tiếp tục thực hiện một mục tiêu hoặc công việc gian khó trong một thời gian dài, bất chấp muôn vàn trở ngại, sự thất bại tạm thời hoặc việc chưa thấy ngay kết quả; nhấn mạnh vào tính kỷ luật và sức chịu đựng thử thách khắc nghiệt.',
    definitionEn:
      'persistence in doing something despite difficulty or delay in achieving success; steadfast effort and determination',
    cefrLevel: 'C1',
    roots: [
      {
        rootId: 'severus_origin',
        rootName: 'Severus (Latin: nghiêm khắc, khắc nghiệt)',
        meaningVi: 'nghiêm khắc, kỷ luật thép',
      },
    ],
    anatomy: {
      prefix: 'per-',
      prefixVi: 'xuyên suốt, triệt để, đến cùng (Latin: per-)',
      rootParts: [
        {
          text: 'sever',
          rootId: 'severus_origin',
          rootName: 'Severus',
          meaningVi: 'nghiêm ngặt, khắc nghiệt (Latin: severus)',
        },
      ],
      suffix: '-ance',
      suffixVi: 'hậu tố danh từ chỉ trạng thái, phẩm chất',
      formula: 'per- (đến cùng) + sever- (khắc nghiệt, kỷ luật thép) + -ance → perseverance (sự kiên định kỷ luật vượt qua mọi gian khó)',
      explanation:
        'Gốc Latin "severus" (nghiêm ngặt, khắt khe) kết hợp với "per-" (đến cùng) tạo nên động từ "persevere" và danh từ "perseverance" – biểu thị phẩm chất kỷ luật sắt đá và ý chí bền gan bám đuổi mục tiêu qua mọi thử thách khắc nghiệt nhất.',
    },
    wordFamily: {
      nouns: [
        {
          term: 'perseverance',
          vi: 'sự kiên trì, tính bền bỉ',
          phonetic: '/ˌpɜːr.səˈvɪr.əns/',
          exampleEn: 'Her perseverance was rewarded when she finally passed the bar exam.',
          exampleVi: 'Sự kiên trì của cô đã được đền đáp khi cô cuối cùng đã vượt qua kỳ thi luật sư.',
        },
        {
          term: 'perseverer',
          vi: 'người kiên trì, người bền bỉ không bỏ cuộc',
          phonetic: '/ˌpɜːr.səˈvɪr.ɚ/',
        },
      ],
      verbs: [
        {
          term: 'persevere',
          vi: 'kiên trì, bền chí vượt khó',
          phonetic: '/ˌpɜːr.səˈvɪr/',
          exampleEn: 'You must persevere even when things seem hopeless.',
          exampleVi: 'Bạn phải kiên trì ngay cả khi mọi thứ dường như vô vọng.',
        },
      ],
      adjectives: [
        {
          term: 'persevering',
          vi: 'có tính kiên trì, nhẫn nại',
          phonetic: '/ˌpɜːr.səˈvɪr.ɪŋ/',
          exampleEn: 'He is a persevering student who never gives up on difficult math problems.',
          exampleVi: 'Cậu ấy là một học sinh kiên trì, không bao giờ bỏ cuộc trước những bài toán khó.',
        },
        {
          term: 'perseverant',
          vi: 'kiên định, bền gan',
          phonetic: '/ˌpɜːr.səˈvɪr.ənt/',
        },
      ],
      adverbs: [
        {
          term: 'perseveringly',
          vi: 'một cách kiên trì, bền bỉ',
          phonetic: '/ˌpɜːr.səˈvɪr.ɪŋ.li/',
          exampleEn: 'They perseveringly worked day and night to rebuild the destroyed bridge.',
          exampleVi: 'Họ đã kiên trì làm việc ngày đêm để xây dựng lại cây cầu bị phá hủy.',
        },
      ],
    },
    collocations: [
      {
        phrase: 'through sheer perseverance',
        vi: 'nhờ vào sự kiên trì tuyệt đối / nỗ lực phi thường',
        example: 'Through sheer perseverance, he transformed a tiny startup into a global enterprise.',
      },
      {
        phrase: 'show great perseverance',
        vi: 'thể hiện sự kiên trì to lớn',
        example: 'The athletes showed great perseverance during the grueling marathon.',
      },
      {
        phrase: 'perseverance in the face of adversity',
        vi: 'lòng kiên trì trước nghịch cảnh',
        example: 'Her perseverance in the face of adversity inspired everyone around her.',
      },
      {
        phrase: 'reward of perseverance',
        vi: 'phần thưởng của lòng kiên trì',
        example: 'Graduating at the top of the class was the ultimate reward of his perseverance.',
      },
    ],
    examples: [
      {
        en: 'Through sheer perseverance and hard work, she eventually achieved her dream of becoming a neurosurgeon.',
        vi: 'Nhờ vào sự kiên trì bền bỉ phi thường và chăm chỉ, cuối cùng cô đã đạt được ước mơ trở thành bác sĩ phẫu thuật thần kinh.',
      },
      {
        en: 'The scientific project required immense perseverance in the face of repeated lab failures.',
        vi: 'Dự án khoa học đòi hỏi sự kiên trì to lớn trước những thất bại lặp đi lặp lại trong phòng thí nghiệm.',
      },
      {
        en: 'Success in mastering a complex foreign language is more about consistent perseverance than innate talent.',
        vi: 'Thành công trong việc làm chủ một ngoại ngữ phức tạp phụ thuộc vào sự kiên trì đều đặn hơn là tài năng bẩm sinh.',
      },
      {
        en: 'His remarkable perseverance inspired the entire expedition to reach the summit despite frostbite.',
        vi: 'Lòng kiên trì phi thường của anh ấy đã truyền cảm hứng cho toàn bộ đoàn thám hiểm chinh phục đỉnh núi dù bị cước cóng.',
      },
    ],
    synonyms: [
      {
        term: 'persistence',
        vi: 'sự bền bỉ, tính dai dẳng không ngừng',
        phonetic: '/pɚˈsɪs.təns/',
        exampleEn: 'Skill comes with practice, patience, and persistence.',
        exampleVi: 'Kỹ năng đến từ sự luyện tập, tính kiên nhẫn và sự bền bỉ.',
      },
      {
        term: 'tenacity',
        vi: 'sự ngoan cường, tính kiên cường bám trụ',
        phonetic: '/təˈnæs.ə.t̬i/',
        exampleEn: 'Her tenacity in investigative journalism uncovered the corruption scandal.',
        exampleVi: 'Sự ngoan cường của cô trong nghề báo điều tra đã phanh phui vụ bê bối tham nhũng.',
      },
      {
        term: 'grit',
        vi: 'sự gan góc, ý chí bền chí trước khó khăn',
        phonetic: '/ɡrɪt/',
        exampleEn: 'True champions are defined by grit and resilience.',
        exampleVi: 'Những nhà vô địch thực thụ được định nghĩa bởi sự gan góc và khả năng kiên cường phục hồi.',
      },
      {
        term: 'endurance',
        vi: 'sức chịu đựng, sức bền',
        phonetic: '/ɪnˈdʊr.əns/',
        exampleEn: 'Marathon runners require extraordinary mental endurance.',
        exampleVi: 'Những vận động viên chạy marathon đòi hỏi sức bền tinh thần phi thường.',
      },
    ],
    antonyms: [
      {
        term: 'giving up',
        vi: 'sự từ bỏ, sự buông xuôi',
        phonetic: '/ˈɡɪv.ɪŋ ʌp/',
        exampleEn: 'Giving up was never an option for the determined leader.',
        exampleVi: 'Từ bỏ chưa bao giờ là một lựa chọn đối với người lãnh đạo quyết đoán.',
      },
      {
        term: 'hesitation',
        vi: 'sự do dự, ngập ngừng',
        phonetic: '/ˌhez.əˈteɪ.ʃən/',
        exampleEn: 'Any hesitation could cost them the opportunity.',
        exampleVi: 'Bất kỳ sự do dự nào cũng có thể khiến họ đánh mất cơ hội.',
      },
      {
        term: 'surrender',
        vi: 'sự đầu hàng, quy phục',
        phonetic: '/səˈren.dɚ/',
        exampleEn: 'The army chose defiance over surrender.',
        exampleVi: 'Quân đội đã chọn sự bất khuất thay vì đầu hàng.',
      },
    ],
    nuanceTable: NUANCE_TABLE_PERSEVERANCE,
  },
};
