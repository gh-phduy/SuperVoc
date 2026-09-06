import type { SupervocWord } from './supervoc-roots-dataset';

export const SYNONYMS_ANTONYMS_LEXICON: Record<string, SupervocWord> = {
  // =========================================================================
  // 1. CÁC TỪ ĐỒNG NGHĨA & TRÁI NGHĨA CỦA OXFORD B2 HEALTH & MIND
  // =========================================================================
  craving: {
    id: 'craving',
    term: 'craving',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈkreɪ.vɪŋ/',
    phoneticUk: '/ˈkreɪ.vɪŋ/',
    definitionVi: 'sự khao khát mãnh liệt, cơn thèm muốn cồn cào',
    definitionEn: 'a powerful and intense desire for something, especially food or a substance',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [{ text: 'crave', rootId: 'origin_oe', rootName: 'Old English', meaningVi: 'đòi hỏi, cầu xin (crafian)' }],
      suffix: '-ing',
      suffixVi: 'hậu tố tạo danh từ hành động / trạng thái',
      formula: 'crave (thèm muốn) + -ing → craving (cơn thèm muốn mãnh liệt)',
      explanation: 'Trạng thái thôi thúc sinh lý hoặc tâm lý khiến con người bức bối tìm kiếm điều mình thèm muốn.',
    },
    wordFamily: {
      nouns: [{ term: 'craving', vi: 'cơn thèm muốn' }],
      verbs: [{ term: 'crave', vi: 'thèm thuồng, khao khát' }],
      adjectives: [{ term: 'craved', vi: 'được khao khát' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'satisfy / resist a craving',
        vi: 'thỏa mãn / cưỡng lại cơn thèm muốn',
        example: 'She drank a glass of water to resist a craving for late-night sweets.',
      },
      {
        phrase: 'intense sugar craving',
        vi: 'cơn thèm đồ ngọt dữ dội',
        example: 'Stress often triggers intense sugar cravings in the brain.',
      },
    ],
    examples: [
      {
        en: 'Pregnant women frequently report sudden cravings for unusual food combinations.',
        vi: 'Phụ nữ mang thai thường xuyên cho biết họ có những cơn thèm đồ ăn kết hợp bất thường.',
      },
      {
        en: 'Overcoming drug cravings requires comprehensive psychological therapy and social support.',
        vi: 'Vượt qua những cơn thèm thuốc đòi hỏi trị liệu tâm lý toàn diện và sự hỗ trợ từ xã hội.',
      },
    ],
    synonyms: [
      { term: 'desire', vi: 'sự khao khát' },
      { term: 'appetite', vi: 'sự thèm ăn' },
      { term: 'urge', vi: 'sự thôi thúc' },
    ],
    antonyms: [
      { term: 'aversion', vi: 'sự ghê tởm, ác cảm' },
      { term: 'disgust', vi: 'sự chán ghét' },
    ],
  },

  sobriety: {
    id: 'sobriety',
    term: 'sobriety',
    partOfSpeech: 'n.',
    phoneticUs: '/səˈbraɪ.ə.t̬i/',
    phoneticUk: '/səˈbraɪ.ə.ti/',
    definitionVi: 'sự tỉnh táo, trạng thái cai nghiện không dùng rượu bia/chất kích thích; sự trầm tĩnh',
    definitionEn: 'the state of being sober; the condition of not being under the influence of alcohol or drugs',
    cefrLevel: 'C1',
    roots: [],
    anatomy: {
      rootParts: [{ text: 'sobrius', rootId: 'origin_latin', rootName: 'Latin', meaningVi: 'tỉnh táo, chừng mực' }],
      suffix: '-ity',
      suffixVi: 'hậu tố chỉ phẩm chất, trạng thái',
      formula: 'sober (tỉnh táo) + -ity → sobriety (sự tỉnh táo, tiết chế)',
      explanation: 'Trạng thái tâm trí sáng suốt, làm chủ hành vi và không bị chi phối bởi chất kích thích.',
    },
    wordFamily: {
      nouns: [{ term: 'sobriety', vi: 'sự tỉnh táo' }],
      verbs: [{ term: 'sober', vi: 'làm tỉnh táo lại' }],
      adjectives: [{ term: 'sober', vi: 'tỉnh táo, điềm đạm' }],
      adverbs: [{ term: 'soberly', vi: 'một cách tỉnh táo, trầm tĩnh' }],
    },
    collocations: [
      {
        phrase: 'maintain / achieve sobriety',
        vi: 'duy trì / đạt được sự tỉnh táo',
        example: 'He celebrated five years of continuous sobriety after completing rehab.',
      },
      {
        phrase: 'sobriety checkpoint / test',
        vi: 'chốt kiểm tra nồng độ cồn / bài kiểm tra sự tỉnh táo',
        example: 'Police conducted random sobriety tests along the highway.',
      },
    ],
    examples: [
      {
        en: 'The support group helps former addicts maintain their hard-won sobriety.',
        vi: 'Nhóm hỗ trợ giúp những người từng nghiện ngập duy trì sự tỉnh táo mà họ đã rất vất vả mới giành được.',
      },
      {
        en: 'A period of sobriety allowed him to rebuild his career and family relationships.',
        vi: 'Một quãng thời gian sống tỉnh táo đã cho phép anh ấy gầy dựng lại sự nghiệp và tình cảm gia đình.',
      },
    ],
    synonyms: [
      { term: 'abstinence', vi: 'sự kiêng khem' },
      { term: 'moderation', vi: 'sự chừng mực' },
      { term: 'temperance', vi: 'sự tiết độ' },
    ],
    antonyms: [
      { term: 'addiction', vi: 'thói nghiện ngập' },
      { term: 'intoxication', vi: 'sự say sưa, nhiễm độc' },
      { term: 'drunkenness', vi: 'tình trạng say rượu' },
    ],
  },

  apprehension: {
    id: 'apprehension',
    term: 'apprehension',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌæp.rəˈhen.ʃən/',
    phoneticUk: '/ˌæp.rɪˈhen.ʃn/',
    definitionVi: 'sự âu lo, e ngại về tương lai; sự thấu hiểu; sự bắt giữ can phạm',
    definitionEn: 'anxiety or fear that something bad or unpleasant will happen; understanding; arrest of a criminal',
    cefrLevel: 'C1',
    roots: [{ rootId: 'prehend', rootName: 'Prehend', meaningVi: 'nắm bắt, thấu hiểu (Latin: prehendere)' }],
    anatomy: {
      prefix: 'ad- (biến âm ap-)',
      prefixVi: 'hướng về',
      rootParts: [{ text: 'prehens', rootId: 'prehend', rootName: 'Prehend', meaningVi: 'nắm lấy, tóm bắt' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 'ap- (hướng về) + prehens (nắm lấy) + -ion → apprehension (tâm trạng nắm bắt trước tai họa → âu lo)',
      explanation: 'Tâm lý phán đoán và dự cảm về mối nguy hiểm hoặc điều không may sắp ập đến.',
    },
    wordFamily: {
      nouns: [{ term: 'apprehension', vi: 'sự âu lo, sự hiểu biết' }],
      verbs: [{ term: 'apprehend', vi: 'bắt giữ, lo sợ, thấu hiểu' }],
      adjectives: [{ term: 'apprehensive', vi: 'lo âu, e sợ' }],
      adverbs: [{ term: 'apprehensively', vi: 'một cách e ngại' }],
    },
    collocations: [
      {
        phrase: 'deep sense of apprehension',
        vi: 'cảm giác âu lo sâu sắc',
        example: 'She entered the examination hall with a deep sense of apprehension.',
      },
      {
        phrase: 'face the future with apprehension',
        vi: 'đối diện tương lai với sự lo sợ',
        example: 'Workers faced the company restructuring with considerable apprehension.',
      },
    ],
    examples: [
      {
        en: 'Despite her apprehensions, the medical procedure went smoothly without complications.',
        vi: 'Bất chấp những âu lo của cô, thủ thuật y tế đã diễn ra suôn sẻ mà không gặp biến chứng nào.',
      },
      {
        en: 'There is growing apprehension that inflation will erode workers purchasing power.',
        vi: 'Đang có sự âu lo ngày càng tăng rằng lạm phát sẽ bào mòn sức mua của người lao động.',
      },
    ],
    synonyms: [
      { term: 'anxiety', vi: 'sự lo âu' },
      { term: 'dread', vi: 'nỗi sợ hãi' },
      { term: 'foreboding', vi: 'linh cảm xấu' },
    ],
    antonyms: [
      { term: 'calmness', vi: 'sự bình tĩnh' },
      { term: 'confidence', vi: 'sự tự tin' },
      { term: 'serenity', vi: 'sự thanh thản' },
    ],
  },

  serenity: {
    id: 'serenity',
    term: 'serenity',
    partOfSpeech: 'n.',
    phoneticUs: '/səˈren.ə.t̬i/',
    phoneticUk: '/səˈren.ə.ti/',
    definitionVi: 'sự thanh thản, cảnh thanh bình, trạng thái an yên tĩnh lặng',
    definitionEn: 'the state of being calm, peaceful, and untroubled',
    cefrLevel: 'C1',
    roots: [],
    anatomy: {
      rootParts: [{ text: 'serenus', rootId: 'origin_latin', rootName: 'Latin', meaningVi: 'trong trẻo, quang đãng (serenus)' }],
      suffix: '-ity',
      suffixVi: 'chất lượng, trạng thái',
      formula: 'serene (an yên) + -ity → serenity (sự thanh thản, an lành)',
      explanation: 'Tâm thái trong trẻo, không bị xáo trộn bởi âu lo hay áp lực cuộc sống.',
    },
    wordFamily: {
      nouns: [{ term: 'serenity', vi: 'sự an yên, thanh thản' }],
      verbs: [],
      adjectives: [{ term: 'serene', vi: 'thanh bình, tĩnh lặng' }],
      adverbs: [{ term: 'serenely', vi: 'một cách thanh thản' }],
    },
    collocations: [
      {
        phrase: 'inner serenity and peace',
        vi: 'sự thanh thản và bình yên nội tâm',
        example: 'Meditation practice cultivates lasting inner serenity and emotional balance.',
      },
      {
        phrase: 'breathtaking serenity of nature',
        vi: 'sự thanh bình choáng ngợp của thiên nhiên',
        example: 'We were amazed by the breathtaking serenity of the mountain lake.',
      },
    ],
    examples: [
      {
        en: 'Her face radiated profound serenity despite the chaotic situation around her.',
        vi: 'Gương mặt bà tỏa ra sự thanh thản sâu sắc bất chấp hoàn cảnh hỗn loạn xung quanh.',
      },
      {
        en: 'Finding moments of quiet serenity is essential for mental health in modern cities.',
        vi: 'Tìm kiếm những khoảnh khắc thanh thản tĩnh lặng là điều tối quan trọng cho sức khỏe tâm thần trong các đô thị hiện đại.',
      },
    ],
    synonyms: [
      { term: 'tranquility', vi: 'sự tĩnh lặng' },
      { term: 'peacefulness', vi: 'sự bình yên' },
      { term: 'calm', vi: 'sự êm đềm' },
    ],
    antonyms: [
      { term: 'anxiety', vi: 'sự lo âu' },
      { term: 'panic', vi: 'sự hoảng loạn' },
      { term: 'turmoil', vi: 'sự xáo động, hỗn loạn' },
    ],
  },

  alleviate: {
    id: 'alleviate',
    term: 'alleviate',
    partOfSpeech: 'v.',
    phoneticUs: '/əˈliː.vi.eɪt/',
    phoneticUk: '/əˈliː.vi.eɪt/',
    definitionVi: 'làm nhẹ bớt, xoa dịu nỗi đau, giảm bớt gánh nặng hay sự thống khổ',
    definitionEn: 'make suffering, deficiency, or a problem less severe or more bearable',
    cefrLevel: 'C1',
    roots: [{ rootId: 'lev', rootName: 'Lev, Levis', meaningVi: 'nhẹ, nâng lên (Latin: levis)' }],
    anatomy: {
      prefix: 'ad- (biến âm al-)',
      prefixVi: 'hướng tới, làm cho',
      rootParts: [{ text: 'levi-', rootId: 'lev', rootName: 'Lev, Levis', meaningVi: 'nhẹ nhàng (levis)' }],
      suffix: '-ate',
      suffixVi: 'động từ',
      formula: 'al- (làm cho) + levi (nhẹ) + -ate → alleviate (làm cho nhẹ nhõm bớt → xoa dịu)',
      explanation: 'Giúp hạ bớt độ nặng nề của cơn đau, căng thẳng hoặc áp lực tài chính.',
    },
    wordFamily: {
      nouns: [{ term: 'alleviation', vi: 'sự xoa dịu, sự giảm nhẹ' }],
      verbs: [{ term: 'alleviate', vi: 'xoa dịu, làm nhẹ bớt' }],
      adjectives: [{ term: 'alleviative', vi: 'có tính xoa dịu' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'alleviate chronic pain / suffering',
        vi: 'xoa dịu cơn đau mãn tính / nỗi thống khổ',
        example: 'Acupuncture was used to alleviate severe chronic back pain.',
      },
      {
        phrase: 'alleviate poverty / congestion',
        vi: 'giảm nhẹ đói nghèo / giảm ùn tắc giao thông',
        example: 'Targeted subsidies helped alleviate extreme poverty in rural areas.',
      },
    ],
    examples: [
      {
        en: 'The doctor prescribed a new medication to alleviate the symptoms of arthritis.',
        vi: 'Bác sĩ kê một loại thuốc mới để xoa dịu các triệu chứng của bệnh viêm khớp.',
      },
      {
        en: 'International aid worked tirelessly to alleviate the humanitarian crisis after the earthquake.',
        vi: 'Viện trợ quốc tế đã hoạt động không mệt mỏi để xoa dịu cuộc khủng hoảng nhân đạo sau trận động đất.',
      },
    ],
    synonyms: [
      { term: 'relieve', vi: 'làm dịu bớt' },
      { term: 'ease', vi: 'làm nhẹ bớt' },
      { term: 'soothe', vi: 'xoa dịu êm ái' },
      { term: 'mitigate', vi: 'giảm nhẹ tác hại' },
    ],
    antonyms: [
      { term: 'aggravate', vi: 'làm trầm trọng thêm' },
      { term: 'worsen', vi: 'làm tồi tệ hơn' },
      { term: 'intensify', vi: 'làm gia tăng gay gắt' },
    ],
  },

  aggravate: {
    id: 'aggravate',
    term: 'aggravate',
    partOfSpeech: 'v.',
    phoneticUs: '/ˈæɡ.rə.veɪt/',
    phoneticUk: '/ˈæɡ.rə.veɪt/',
    definitionVi: 'làm trầm trọng thêm, làm bệnh tình hoặc tình hình tồi tệ hơn; chọc giận',
    definitionEn: 'make a problem, injury, or offense worse or more serious; annoy or exasperate someone',
    cefrLevel: 'B2',
    roots: [{ rootId: 'grav', rootName: 'Grav, Gravis', meaningVi: 'nặng nề, nghiêm trọng (Latin: gravis)' }],
    anatomy: {
      prefix: 'ad- (biến âm ag-)',
      prefixVi: 'hướng tới, làm tăng',
      rootParts: [{ text: 'grav-', rootId: 'grav', rootName: 'Grav, Gravis', meaningVi: 'nặng, nghiêm trọng (gravis)' }],
      suffix: '-ate',
      suffixVi: 'động từ',
      formula: 'ag- (làm cho) + grav (nặng) + -ate → aggravate (làm cho nặng nề hơn → làm trầm trọng thêm)',
      explanation: 'Làm gia tăng mức độ nghiêm trọng hoặc làm bùng phát vết thương, căn bệnh.',
    },
    wordFamily: {
      nouns: [{ term: 'aggravation', vi: 'sự làm trầm trọng, sự phiền toái' }],
      verbs: [{ term: 'aggravate', vi: 'làm trầm trọng, chọc tức' }],
      adjectives: [{ term: 'aggravating', vi: 'gây bực mình, làm trầm trọng' }],
      adverbs: [{ term: 'aggravatingly', vi: 'một cách bực bội' }],
    },
    collocations: [
      {
        phrase: 'aggravate an existing injury',
        vi: 'làm trầm trọng thêm vết thương có sẵn',
        example: 'Playing football prematurely could aggravate his damaged knee ligaments.',
      },
      {
        phrase: 'aggravate the crisis / problem',
        vi: 'làm cuộc khủng hoảng / vấn đề thêm tồi tệ',
        example: 'Lack of clear communication only served to aggravate the public crisis.',
      },
    ],
    examples: [
      {
        en: 'Polluted air and smoking will severely aggravate respiratory conditions such as asthma.',
        vi: 'Không khí ô nhiễm và hút thuốc sẽ làm trầm trọng thêm nghiêm trọng các bệnh về hô hấp như hen suyễn.',
      },
      {
        en: 'His sarcastic remarks only aggravated the tense atmosphere in the meeting room.',
        vi: 'Những lời châm biếm của anh ta chỉ làm bầu không khí căng thẳng trong phòng họp thêm gay gắt.',
      },
    ],
    synonyms: [
      { term: 'worsen', vi: 'làm tồi tệ hơn' },
      { term: 'exacerbate', vi: 'làm trầm trọng thêm' },
      { term: 'inflame', vi: 'kích động, thổi bùng' },
    ],
    antonyms: [
      { term: 'relieve', vi: 'giải tỏa, làm dịu' },
      { term: 'alleviate', vi: 'xoa dịu' },
      { term: 'improve', vi: 'cải thiện' },
    ],
  },

  recuperation: {
    id: 'recuperation',
    term: 'recuperation',
    partOfSpeech: 'n.',
    phoneticUs: '/rɪˌkuː.pəˈreɪ.ʃən/',
    phoneticUk: '/rɪˌkuː.pərˈeɪ.ʃn/',
    definitionVi: 'sự hồi phục sức khỏe, quá trình tịnh dưỡng và lấy lại năng lượng',
    definitionEn: 'recovery from illness, exertion, or financial loss',
    cefrLevel: 'C1',
    roots: [],
    anatomy: {
      prefix: 're-',
      prefixVi: 'lại, lấy lại',
      rootParts: [{ text: 'cuperare', rootId: 'origin_latin', rootName: 'Latin', meaningVi: 'giành lại, đạt lại (recuperare)' }],
      suffix: '-ion',
      suffixVi: 'danh từ',
      formula: 're- (lại) + cuper (giành lại) + -ation → recuperation (sự lấy lại thể lực sau bạo bệnh)',
      explanation: 'Giai đoạn cơ thể tự sửa chữa và hồi sinh sức khỏe sau phẫu thuật hay đau ốm.',
    },
    wordFamily: {
      nouns: [{ term: 'recuperation', vi: 'sự hồi phục' }],
      verbs: [{ term: 'recuperate', vi: 'hồi phục, dưỡng sức' }],
      adjectives: [{ term: 'recuperative', vi: 'có tác dụng hồi phục' }],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'period of recuperation',
        vi: 'thời kỳ tịnh dưỡng hồi phục',
        example: 'The patient spent a two-week period of recuperation at a peaceful lakeside resort.',
      },
      {
        phrase: 'recuperative powers of the body',
        vi: 'khả năng tự phục hồi của cơ thể',
        example: 'Good nutrition and restful sleep boost the natural recuperative powers of the body.',
      },
    ],
    examples: [
      {
        en: 'After major surgery, several weeks of quiet recuperation were necessary for full healing.',
        vi: 'Sau ca đại phẫu, vài tuần tịnh dưỡng yên tĩnh là điều cần thiết để lành lặn hoàn toàn.',
      },
      {
        en: 'The thermal mineral baths are renowned for their remarkable powers of recuperation.',
        vi: 'Các suối khoáng nóng nổi tiếng vì khả năng giúp phục hồi thể lực kỳ diệu.',
      },
    ],
    synonyms: [
      { term: 'recovery', vi: 'sự phục hồi' },
      { term: 'convalescence', vi: 'thời kỳ dưỡng bệnh' },
      { term: 'rehabilitation', vi: 'sự phục hồi chức năng' },
    ],
    antonyms: [
      { term: 'relapse', vi: 'sự tái phát bệnh' },
      { term: 'deterioration', vi: 'sự suy thoái' },
      { term: 'worsening', vi: 'sự trở nặng' },
    ],
  },

  vertical: {
    id: 'vertical',
    term: 'vertical',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˈvɝː.t̬ɪ.kəl/',
    phoneticUk: '/ˈvɜː.tɪ.kəl/',
    definitionVi: 'thẳng đứng, vuông góc với đường chân trời; phương đứng',
    definitionEn: 'at right angles to a horizontal plane; in a direction, or having an alignment, such that the top is directly above the bottom',
    cefrLevel: 'B2',
    roots: [{ rootId: 'volv_volut', rootName: 'Volv, Vert', meaningVi: 'quay, chuyển hướng (Latin: vertere)' }],
    anatomy: {
      rootParts: [{ text: 'vert-', rootId: 'volv_volut', rootName: 'Vert, Vers', meaningVi: 'đỉnh đầu, hướng quay (vertex)' }],
      suffix: '-ical',
      suffixVi: 'tính từ',
      formula: 'vertex (đỉnh) + -ical → vertical (hướng theo phương đỉnh đầu → thẳng đứng)',
      explanation: 'Phương hướng chạy thẳng từ đỉnh xuống đáy, vuông góc với mặt phẳng đất.',
    },
    wordFamily: {
      nouns: [{ term: 'verticality', vi: 'phương thẳng đứng' }, { term: 'vertex', vi: 'đỉnh chóp' }],
      verbs: [],
      adjectives: [{ term: 'vertical', vi: 'thẳng đứng' }],
      adverbs: [{ term: 'vertically', vi: 'theo chiều thẳng đứng' }],
    },
    collocations: [
      {
        phrase: 'vertical axis / line',
        vi: 'trục thẳng đứng / đường kẻ dọc',
        example: 'The Y-axis represents the vertical line on a standard coordinate graph.',
      },
      {
        phrase: 'vertical farming',
        vi: 'nông nghiệp thẳng đứng (canh tác nhiều tầng)',
        example: 'Vertical farming maximizes crop yield inside high-density urban towers.',
      },
    ],
    examples: [
      {
        en: 'The rock climbers scaled the sheer vertical face of the granite cliff.',
        vi: 'Những người leo núi đã chinh phục bề mặt thẳng đứng hiểm trở của vách đá hoa cương.',
      },
      {
        en: 'Ensure the wooden support beams are completely vertical before fastening the bolts.',
        vi: 'Hãy đảm bảo các thanh dầm gỗ hoàn toàn thẳng đứng trước khi siết chặt bu-lông.',
      },
    ],
    synonyms: [
      { term: 'upright', vi: 'dựng đứng' },
      { term: 'perpendicular', vi: 'vuông góc' },
      { term: 'plumb', vi: 'thẳng đứng chuẩn mực' },
    ],
    antonyms: [
      { term: 'horizontal', vi: 'nằm ngang' },
      { term: 'parallel', vi: 'song song' },
      { term: 'flat', vi: 'bằng phẳng' },
    ],
  },

  parallel: {
    id: 'parallel',
    term: 'parallel',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˈper.ə.lel/',
    phoneticUk: '/ˈpær.ə.lel/',
    definitionVi: 'song song, tương đồng, xảy ra đồng thời cùng lúc',
    definitionEn: 'side by side and having the same distance continuously between them; occurring at the same time or in a similar manner',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      prefix: 'para-',
      prefixVi: 'bên cạnh, song hành (Greek: para)',
      rootParts: [{ text: 'allelon', rootId: 'origin_greek', rootName: 'Greek', meaningVi: 'lẫn nhau, đối nhau' }],
      formula: 'para- (bên cạnh) + allelon (lẫn nhau) → parallel (chạy bên cạnh nhau nhưng không bao giờ cắt nhau → song song)',
      explanation: 'Hai đường thẳng hoặc hai hiện tượng phát triển song hành có cùng khoảng cách hoặc quy luật tương đồng.',
    },
    wordFamily: {
      nouns: [{ term: 'parallel', vi: 'đường song song, điểm tương đồng' }, { term: 'parallelism', vi: 'tính song song' }],
      verbs: [{ term: 'parallel', vi: 'song hành, tương đương với' }],
      adjectives: [{ term: 'parallel', vi: 'song song, đồng thời' }],
      adverbs: [{ term: 'parallel', vi: 'theo cách song song' }],
    },
    collocations: [
      {
        phrase: 'draw a parallel between',
        vi: 'vạch ra điểm tương đồng giữa',
        example: 'Historians often draw parallels between the two economic collapses.',
      },
      {
        phrase: 'parallel lines / processing',
        vi: 'đường thẳng song song / xử lý dữ liệu song song',
        example: 'Modern computer processors utilize parallel processing to execute tasks faster.',
      },
    ],
    examples: [
      {
        en: 'The railway tracks run parallel to the highway for over fifty kilometers.',
        vi: 'Đường ray xe lửa chạy song song với đường cao tốc suốt hơn 50 cây số.',
      },
      {
        en: 'The novel tells two parallel stories set in different historical centuries.',
        vi: 'Cuốn tiểu thuyết kể hai câu chuyện song song diễn ra ở hai thế kỷ lịch sử khác nhau.',
      },
    ],
    synonyms: [
      { term: 'aligned', vi: 'thẳng hàng' },
      { term: 'equivalent', vi: 'tương đương' },
      { term: 'concurrent', vi: 'đồng thời' },
    ],
    antonyms: [
      { term: 'perpendicular', vi: 'vuông góc' },
      { term: 'intersecting', vi: 'cắt nhau' },
      { term: 'divergent', vi: 'phân kỳ, rẽ nhánh' },
    ],
  },

  // =========================================================================
  // 3. TỪ ĐỒNG NGHĨA & TRÁI NGHĨA CỦA ENGULF
  // =========================================================================
  submerge: {
    id: 'submerge',
    term: 'submerge',
    partOfSpeech: 'v.',
    phoneticUs: '/səbˈmɜːrdʒ/',
    phoneticUk: '/səbˈmɜːdʒ/',
    definitionVi: 'dìm sâu, lặn xuống, ngập hoàn toàn dưới nước',
    detailedMeaningVi:
      'Đặt chìm hẳn hoặc bị phủ lấp hoàn toàn dưới bề mặt chất lỏng (nước), nhấn mạnh vào vị trí thực thể nằm sâu dưới mặt nước.',
    definitionEn: 'cause to be under water; completely cover or obscure',
    cefrLevel: 'B2',
    roots: [{ rootId: 'sub_merge', rootName: 'Sub (dưới) + Mergere (lặn)', meaningVi: 'nhấn chìm dưới nước' }],
    anatomy: {
      prefix: 'sub-',
      prefixVi: 'ở dưới, bên dưới',
      rootParts: [{ text: 'merge', rootId: 'mergere', rootName: 'Mergere', meaningVi: 'lặn, dìm vào chất lỏng (Latin)' }],
      formula: 'sub- (bên dưới) + merge (dìm xuống) → submerge (dìm hẳn xuống dưới mặt nước)',
      explanation: 'Miêu tả hành động chìm hoàn toàn xuống dưới tầng nước.',
    },
    wordFamily: {
      nouns: [{ term: 'submergence', vi: 'sự dìm nước, sự ngập lụt' }, { term: 'submersion', vi: 'sự dìm chìm hoàn toàn' }],
      verbs: [{ term: 'submerge', vi: 'nhấn chìm dưới nước' }],
      adjectives: [{ term: 'submerged', vi: 'bị ngập dưới nước' }, { term: 'submersible', vi: 'có thể lặn được' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'fully submerged in water', vi: 'chìm hoàn toàn trong nước', example: 'The submarine was fully submerged in water.' },
      { phrase: 'submerged feelings', vi: 'những cảm xúc bị kìm nén sâu bên dưới', example: 'Therapy helped her express submerged feelings.' },
    ],
    examples: [
      { en: 'The rising floodwaters completely submerged the town square.', vi: 'Nước lũ dâng cao đã nhấn chìm hoàn toàn quảng trường thị trấn.' },
      { en: 'Hippos can remain submerged underwater for several minutes.', vi: 'Hà mã có thể ở chìm dưới nước trong vài phút liên tục.' },
    ],
    synonyms: [
      { term: 'engulf', vi: 'nhấn chìm, nuốt chửng', phonetic: '/ɪnˈɡʌlf/' },
      { term: 'immerse', vi: 'nhúng ngập vào chất lỏng', phonetic: '/ɪˈmɜːrs/' },
    ],
    antonyms: [
      { term: 'emerge', vi: 'nhô lên khỏi mặt nước', phonetic: '/ɪˈmɜːrdʒ/' },
      { term: 'surface', vi: 'nổi lên bề mặt', phonetic: '/ˈsɜːr.fɪs/' },
    ],
  },

  inundate: {
    id: 'inundate',
    term: 'inundate',
    partOfSpeech: 'v.',
    phoneticUs: '/ˈɪn.ʌn.deɪt/',
    phoneticUk: '/ˈɪn.ʌn.deɪt/',
    definitionVi: 'làm tràn ngập, làm ngập lụt, dồn dập áp đảo',
    detailedMeaningVi:
      'Gây ngập lụt diện rộng bằng dòng nước lũ, hoặc ẩn dụ là tràn ngập dồn dập khối lượng thông tin/yêu cầu/công việc khiến người tiếp nhận bị quá tải không xoay xở kịp.',
    definitionEn: 'overwhelm (someone) with things or people to be dealt with; flood',
    cefrLevel: 'C1',
    roots: [{ rootId: 'in_unda', rootName: 'Unda (làn sóng)', meaningVi: 'sóng dâng, sóng tràn' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'vào trong, lên trên',
      rootParts: [{ text: 'undate', rootId: 'unda', rootName: 'Unda', meaningVi: 'làn sóng (Latin)' }],
      formula: 'in- (tràn vào) + unda (làn sóng) → inundate (sóng nước dâng tràn làm ngập)',
      explanation: 'Sóng nước lũ ập vào cuốn trôi đê điều hoặc hàng loạt yêu cầu tràn vào đồng loạt.',
    },
    wordFamily: {
      nouns: [{ term: 'inundation', vi: 'sự tràn ngập, nạn ngập lụt' }],
      verbs: [{ term: 'inundate', vi: 'làm ngập lụt, dồn dập' }],
      adjectives: [{ term: 'inundated', vi: 'bị ngập lụt, bị quá tải' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'inundated with calls / emails', vi: 'bị ngập tràn trong các cuộc gọi / thư từ', example: 'The helpline was inundated with calls after the announcement.' },
      { phrase: 'inundate the low-lying areas', vi: 'làm ngập các vùng trũng thấp', example: 'Monsoon rains inundated the low-lying delta.' },
    ],
    examples: [
      { en: 'The customer service desk was inundated with complaints.', vi: 'Bàn chăm sóc khách hàng đã bị ngập tràn các khiếu nại.' },
      { en: 'Torrential rains inundated the agricultural valley.', vi: 'Mưa như trút nước đã làm ngập thung lũng nông nghiệp.' },
    ],
    synonyms: [
      { term: 'overwhelm', vi: 'làm cho choáng ngợp, áp đảo', phonetic: '/ˌoʊ.vɚˈwelm/' },
      { term: 'swamp', vi: 'làm ngập úng, làm quá tải', phonetic: '/swɑːmp/' },
    ],
    antonyms: [
      { term: 'drain', vi: 'rút cạn nước', phonetic: '/dreɪn/' },
      { term: 'parch', vi: 'làm khô cằn, hạn hán', phonetic: '/pɑːrtʃ/' },
    ],
  },

  emerge: {
    id: 'emerge',
    term: 'emerge',
    partOfSpeech: 'v.',
    phoneticUs: '/ɪˈmɜːrdʒ/',
    phoneticUk: '/ɪˈmɜːdʒ/',
    definitionVi: 'nhô lên, xuất hiện, lộ diện từ bên trong',
    detailedMeaningVi:
      'Chui ra hoặc nổi lên từ một nơi ẩn khuất/tăm tối/bị bao phủ; hoặc dần dần được biết đến sau giai đoạn bị che giấu hoặc khó khăn.',
    definitionEn: 'move out of or away from something and come into view',
    cefrLevel: 'B2',
    roots: [{ rootId: 'ex_mergere', rootName: 'Ex- (ra ngoài) + Mergere (lặn)', meaningVi: 'từ chỗ chìm nhô ra ngoài' }],
    anatomy: {
      prefix: 'e- / ex-',
      prefixVi: 'ra ngoài, hướng lên',
      rootParts: [{ text: 'merge', rootId: 'mergere', rootName: 'Mergere', meaningVi: 'lặn, chìm (Latin)' }],
      formula: 'e- (ra khỏi) + merge (lặn chìm) → emerge (thoát khỏi trạng thái chìm → nhô lên)',
      explanation: 'Hành động nổi lên từ bóng tối, làn nước hoặc hoàn cảnh khó khăn để lộ diện.',
    },
    wordFamily: {
      nouns: [{ term: 'emergence', vi: 'sự nổi lên, sự xuất hiện' }, { term: 'emergency', vi: 'tình trạng khẩn cấp' }],
      verbs: [{ term: 'emerge', vi: 'nhô lên, lộ diện' }],
      adjectives: [{ term: 'emerging', vi: 'mới nổi, đang phát triển' }, { term: 'emergent', vi: 'bất ngờ xuất hiện' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'emerge from darkness / shadows', vi: 'bước ra từ bóng tối', example: 'A lone figure emerged from the shadows.' },
      { phrase: 'emerging economies / markets', vi: 'các nền kinh tế / thị trường mới nổi', example: 'Investment is surging in emerging markets.' },
    ],
    examples: [
      { en: 'The swimmer emerged from the pool, gasping for air.', vi: 'Người bơi nhô lên khỏi hồ bơi, thở dốc tìm không khí.' },
      { en: 'New evidence has emerged that could change the trial outcome.', vi: 'Bằng chứng mới đã lộ diện có thể thay đổi kết quả phiên tòa.' },
    ],
    synonyms: [
      { term: 'appear', vi: 'xuất hiện', phonetic: '/əˈpɪr/' },
      { term: 'arise', vi: 'phát sinh, nổi lên', phonetic: '/əˈraɪz/' },
    ],
    antonyms: [
      { term: 'engulf', vi: 'nuốt chửng, bao trùm', phonetic: '/ɪnˈɡʌlf/' },
      { term: 'submerge', vi: 'dìm sâu xuống', phonetic: '/səbˈmɜːrdʒ/' },
      { term: 'disappear', vi: 'biến mất', phonetic: '/ˌdɪs.əˈpɪr/' },
    ],
  },

  chasm: {
    id: 'chasm',
    term: 'chasm',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈkæz.əm/',
    phoneticUk: '/ˈkæz.əm/',
    definitionVi: 'vực thẳm sâu, khe nứt lớn; sự bất đồng sâu sắc',
    detailedMeaningVi:
      'Khe nứt địa chất sâu hun hút trong lòng đất hoặc vách đá; hoặc khoảng cách cách biệt quá lớn về quan điểm, văn hóa hay kinh tế giữa hai bên.',
    definitionEn: 'a deep fissure in the earth, rock, or another surface; a profound difference between people, viewpoints, or feelings',
    cefrLevel: 'C1',
    roots: [{ rootId: 'gulf_kolpos', rootName: 'Gulf, Golfe', meaningVi: 'vực sâu, lòng hõm sâu' }],
    anatomy: {
      rootParts: [{ text: 'chasma', rootId: 'greek_chasma', rootName: 'Chasma (Hy Lạp)', meaningVi: 'khe nứt sâu, miệng hố mở rộng' }],
      formula: 'chasma (Hy Lạp) → chasm (vực thẳm sâu / vết nứt chia rẽ)',
      explanation: 'Hình ảnh mặt đất bị nứt toác tạo thành khe vực không thể bước qua.',
    },
    wordFamily: {
      nouns: [{ term: 'chasm', vi: 'vực thẳm' }],
      verbs: [],
      adjectives: [{ term: 'chasmic', vi: 'sâu như vực thẳm' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'yawning chasm', vi: 'vực thẳm sâu hoắm mở rộng', example: 'They stood at the edge of a yawning chasm.' },
      { phrase: 'bridge the chasm', vi: 'hàn gắn hố sâu ngăn cách', example: 'Both sides sought to bridge the ideological chasm.' },
    ],
    examples: [
      { en: 'A huge chasm opened up across the road after the earthquake.', vi: 'Một vực thẳm lớn đã mở ra cắt ngang con đường sau trận động đất.' },
      { en: 'The chasm between public expectations and government actions is growing.', vi: 'Hố sâu ngăn cách giữa kỳ vọng của người dân và hành động của chính phủ ngày càng lớn.' },
    ],
    synonyms: [
      { term: 'gulf', vi: 'vực thẳm ngăn cách, vịnh sâu', phonetic: '/ɡʌlf/' },
      { term: 'abyss', vi: 'vực sâu vô tận', phonetic: '/əˈbɪs/' },
      { term: 'gorge', vi: 'hẻm núi sâu', phonetic: '/ɡɔːrdʒ/' },
    ],
    antonyms: [
      { term: 'bridge', vi: 'chiếc cầu nối', phonetic: '/brɪdʒ/' },
      { term: 'closure', vi: 'sự khép lại, hàn gắn', phonetic: '/ˈkloʊ.ʒɚ/' },
    ],
  },

  abyss: {
    id: 'abyss',
    term: 'abyss',
    partOfSpeech: 'n.',
    phoneticUs: '/əˈbɪs/',
    phoneticUk: '/əˈbɪs/',
    definitionVi: 'vực thẳm không đáy, vực sâu vô tận, cảnh ngộ tuyệt vọng',
    detailedMeaningVi:
      'Vùng không gian tăm tối sâu không đáy (như đáy đại dương thăm thẳm); hoặc trạng thái rơi vào bờ vực bi kịch, sụp đổ hoàn toàn về tinh thần hoặc tài chính.',
    definitionEn: 'a deep or seemingly bottomless chasm; a wide or profound difference; a catastrophic situation',
    cefrLevel: 'C1',
    roots: [{ rootId: 'gulf_kolpos', rootName: 'Gulf, Golfe', meaningVi: 'vực sâu không đáy' }],
    anatomy: {
      prefix: 'a-',
      prefixVi: 'không, không có (tiếng Hy Lạp: an- / a-)',
      rootParts: [{ text: 'byssos', rootId: 'greek_byssos', rootName: 'Byssos (Hy Lạp)', meaningVi: 'đáy, độ sâu' }],
      formula: 'a- (không có) + byssos (đáy) → abyss (vực sâu không đáy / vực thẳm vô tận)',
      explanation: 'Không gian thăm thẳm đến mức cảm giác như không bao giờ chạm tới đáy.',
    },
    wordFamily: {
      nouns: [{ term: 'abyss', vi: 'vực thẳm vô tận' }],
      verbs: [],
      adjectives: [{ term: 'abyssal', vi: 'thuộc về vùng biển sâu không đáy' }, { term: 'abysmal', vi: 'tồi tệ cùng cực' }],
      adverbs: [{ term: 'abysmally', vi: 'một cách tồi tệ cùng cực' }],
    },
    collocations: [
      { phrase: 'edge of the abyss', vi: 'bờ vực thẳm / bờ vực sụp đổ', example: 'The country was standing on the edge of an economic abyss.' },
      { phrase: 'stare into the abyss', vi: 'nhìn sâu vào vực thẳm', example: 'He stared into the dark abyss beneath the cliff.' },
    ],
    examples: [
      { en: 'The submarine descended into the dark oceanic abyss.', vi: 'Tàu ngầm lặn sâu xuống vực thẳm đại dương tối tăm.' },
      { en: 'The nation was saved from the abyss of financial ruin.', vi: 'Quốc gia đã được cứu thoát khỏi bờ vực sụp đổ tài chính.' },
    ],
    synonyms: [
      { term: 'gulf', vi: 'vực thẳm ngăn cách, vịnh sâu', phonetic: '/ɡʌlf/' },
      { term: 'chasm', vi: 'khe nứt vực thẳm', phonetic: '/ˈkæz.əm/' },
    ],
    antonyms: [
      { term: 'peak', vi: 'đỉnh cao', phonetic: '/piːk/' },
      { term: 'summit', vi: 'đỉnh núi, thượng đỉnh', phonetic: '/ˈsʌm.ɪt/' },
    ],
  },

  // =========================================================================
  // 4. TỪ ĐỒNG NGHĨA & TRÁI NGHĨA CỦA RELENT
  // =========================================================================
  abate: {
    id: 'abate',
    term: 'abate',
    partOfSpeech: 'v.',
    phoneticUs: '/əˈbeɪt/',
    phoneticUk: '/əˈbeɪt/',
    definitionVi: 'thuyên giảm, ngớt đi, dịu bớt (cơn bão, tiếng ồn, cơn đau, ô nhiễm)',
    detailedMeaningVi:
      'Hiện tượng giảm dần về mặt cường độ, mức độ dữ dội hoặc số lượng (thường dùng cho hiện tượng tự nhiên như mưa bão, dịch bệnh, tiếng ồn, ô nhiễm hay cơn đau buốt).',
    definitionEn: 'become less intense or widespread',
    cefrLevel: 'C1',
    roots: [{ rootId: 'batuere_origin', rootName: 'Batuere (Latin: đánh đập)', meaningVi: 'đánh bạt đi, làm giảm bớt' }],
    anatomy: {
      prefix: 'a- (ad-)',
      prefixVi: 'hướng tới, tác động vào',
      rootParts: [{ text: 'bate', rootId: 'batuere', rootName: 'Batuere', meaningVi: 'đánh bạt, làm suy giảm (Latin: abattre)' }],
      formula: 'a- + bate (đánh bạt đi) → abate (làm cho giảm bớt cường độ)',
      explanation: 'Sự suy yếu dần của một lực lượng hoặc hiện tượng dữ dội.',
    },
    wordFamily: {
      nouns: [{ term: 'abatement', vi: 'sự thuyên giảm, sự giảm bớt thuế/ô nhiễm' }],
      verbs: [{ term: 'abate', vi: 'thuyên giảm, ngớt đi' }],
      adjectives: [{ term: 'unabated', vi: 'không hề suy giảm, vẫn dữ dội như cũ' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'storm / noise abates', vi: 'cơn bão / tiếng ồn ngớt đi', example: 'We waited until the ferocious storm had abated.' },
      { phrase: 'pollution abatement', vi: 'sự giảm thiểu ô nhiễm môi trường', example: 'The new policy provides funding for air pollution abatement.' },
    ],
    examples: [
      { en: 'The fierce blizzard showed no signs of abating.', vi: 'Trận bão tuyết dữ dội không có dấu hiệu thuyên giảm.' },
      { en: 'Taking the medication helped abate the throbbing headache.', vi: 'Uống thuốc đã giúp làm dịu bớt cơn đau đầu nhức nhối.' },
    ],
    synonyms: [
      { term: 'relent', vi: 'dịu bớt, mềm lòng', phonetic: '/rɪˈlent/' },
      { term: 'subside', vi: 'lắng xuống, rút đi', phonetic: '/səbˈsaɪd/' },
      { term: 'diminish', vi: 'thu nhỏ, giảm bớt', phonetic: '/dɪˈmɪn.ɪʃ/' },
    ],
    antonyms: [
      { term: 'intensify', vi: 'gia tăng mãnh liệt', phonetic: '/ɪnˈten.sə.faɪ/' },
      { term: 'escalate', vi: 'leo thang căng thẳng', phonetic: '/ˈes.kə.leɪt/' },
    ],
  },

  yield: {
    id: 'yield',
    term: 'yield',
    partOfSpeech: 'v., n.',
    phoneticUs: '/jiːld/',
    phoneticUk: '/jiːld/',
    definitionVi: 'nhượng bộ, chịu khuất phục (v); sinh ra sản lượng / lợi tức (v, n)',
    detailedMeaningVi:
      'Chịu nhường bước, từ bỏ sự kháng cự trước sức ép hoặc đối thủ; hoặc trong nông nghiệp / tài chính là mang lại sản lượng mùa màng hay tỷ suất sinh lời.',
    definitionEn: 'give way to arguments, demands, or pressure; produce or provide a natural, agricultural, or financial product',
    cefrLevel: 'B2',
    roots: [{ rootId: 'geld_origin', rootName: 'Old English: gieldan', meaningVi: 'chi trả, dâng nộp' }],
    anatomy: {
      rootParts: [{ text: 'yield', rootId: 'gieldan', rootName: 'Gieldan', meaningVi: 'dâng nộp, trả về' }],
      formula: 'gieldan → yield (dâng quyền kiểm soát lại / nộp sản lượng ra)',
      explanation: 'Hành động nhường quyền kiểm soát cho đối phương hoặc đất đai trả lại thành quả hoa màu.',
    },
    wordFamily: {
      nouns: [{ term: 'yield', vi: 'sản lượng, lợi tức tài chính' }],
      verbs: [{ term: 'yield', vi: 'nhượng bộ, sinh lời' }],
      adjectives: [{ term: 'yielding', vi: 'dễ bảo, mềm mỏng' }, { term: 'unyielding', vi: 'cứng rắn, không chịu khuất phục' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'yield to temptation / pressure', vi: 'khuất phục trước cám dỗ / áp lực', example: 'He refused to yield to corrupt temptations.' },
      { phrase: 'high crop / dividend yield', vi: 'sản lượng mùa màng / tỷ suất cổ tức cao', example: 'The new organic fertilizer resulted in high crop yields.' },
    ],
    examples: [
      { en: 'After several hours of intense debate, the opposition yielded to the majority vote.', vi: 'Sau nhiều giờ tranh luận căng thẳng, phe đối lập đã nhượng bộ trước đa số phiếu bầu.' },
      { en: 'The agricultural research yielded impressive breakthrough results.', vi: 'Nghiên cứu nông nghiệp đã mang lại những kết quả đột phá đầy ấn tượng.' },
    ],
    synonyms: [
      { term: 'relent', vi: 'mềm lòng, nhượng bộ', phonetic: '/rɪˈlent/' },
      { term: 'surrender', vi: 'đầu hàng', phonetic: '/səˈren.dɚ/' },
      { term: 'concede', vi: 'nhường bước', phonetic: '/kənˈsiːd/' },
    ],
    antonyms: [
      { term: 'resist', vi: 'kháng cự', phonetic: '/rɪˈzɪst/' },
      { term: 'withstand', vi: 'chống chọi, trụ vững', phonetic: '/wɪðˈstænd/' },
    ],
  },

  persist: {
    id: 'persist',
    term: 'persist',
    partOfSpeech: 'v.',
    phoneticUs: '/pɚˈsɪst/',
    phoneticUk: '/pəˈsɪst/',
    definitionVi: 'kiên trì, bền bỉ; dai dẳng kéo dài không dứt',
    detailedMeaningVi:
      'Tiếp tục làm một điều gì đó dù gặp muôn vàn khó khăn, trở ngại; hoặc một tình trạng xấu (mưa gió, bệnh tật, khó khăn) cứ kéo dài dai dẳng không chịu biến mất.',
    definitionEn: 'continue firmly or obstinately in an opinion or course of action in spite of difficulty or opposition; continue to exist',
    cefrLevel: 'B2',
    roots: [{ rootId: 'per_sistere', rootName: 'Per- (xuyên suốt) + Sistere (đứng vững)', meaningVi: 'đứng vững xuyên suốt' }],
    anatomy: {
      prefix: 'per-',
      prefixVi: 'xuyên suốt, triệt để',
      rootParts: [{ text: 'sist', rootId: 'sistere', rootName: 'Sistere', meaningVi: 'đứng yên, trụ vững (Latin)' }],
      formula: 'per- (xuyên suốt) + sist (đứng vững) → persist (trụ vững bền bỉ xuyên suốt mọi thử thách)',
      explanation: 'Thái độ giữ nguyên lập trường không lay chuyển trước mọi gian nan.',
    },
    wordFamily: {
      nouns: [{ term: 'persistence', vi: 'sự kiên trì, sự dai dẳng' }],
      verbs: [{ term: 'persist', vi: 'kiên trì, dai dẳng' }],
      adjectives: [{ term: 'persistent', vi: 'bền bỉ, dai dẳng' }],
      adverbs: [{ term: 'persistently', vi: 'một cách kiên trì dai dẳng' }],
    },
    collocations: [
      { phrase: 'persist in doing something', vi: 'khăng khăng / kiên trì làm việc gì', example: 'She persisted in her studies despite working late shifts.' },
      { phrase: 'persistent cough / rain', vi: 'cơn ho / cơn mưa dai dẳng kéo dài', example: 'The persistent rain caused major landslides in the mountain area.' },
    ],
    examples: [
      { en: 'If the acute pain persists for more than two days, visit the doctor immediately.', vi: 'Nếu cơn đau nhức nhối kéo dài dai dẳng hơn hai ngày, hãy đi khám bác sĩ ngay.' },
      { en: 'Her success is proof that dedication and persistence will overcome all hurdles.', vi: 'Thành công của cô là minh chứng cho thấy sự tận tụy và kiên trì sẽ vượt qua mọi rào cản.' },
    ],
    synonyms: [
      { term: 'persevere', vi: 'kiên trì bền chí', phonetic: '/ˌpɜːr.səˈvɪr/' },
      { term: 'continue', vi: 'tiếp tục', phonetic: '/kənˈtɪn.juː/' },
      { term: 'endure', vi: 'chịu đựng, tồn tại lâu bền', phonetic: '/ɪnˈdʊr/' },
    ],
    antonyms: [
      { term: 'relent', vi: 'mềm lòng, ngớt đi', phonetic: '/rɪˈlent/' },
      { term: 'give up', vi: 'bỏ cuộc', phonetic: '/ɡɪv ʌp/' },
      { term: 'cease', vi: 'ngừng hẳn', phonetic: '/siːs/' },
    ],
  },

  // =========================================================================
  // 5. TỪ ĐỒNG NGHĨA CỦA PERSEVERANCE
  // =========================================================================
  tenacity: {
    id: 'tenacity',
    term: 'tenacity',
    partOfSpeech: 'n.',
    phoneticUs: '/təˈnæs.ə.t̬i/',
    phoneticUk: '/təˈnæs.ə.ti/',
    definitionVi: 'sự ngoan cường, tính kiên cường bám trụ, sự dai sức',
    detailedMeaningVi:
      'Phẩm chất bám chặt lấy mục tiêu hoặc quan điểm với quyết tâm mãnh liệt, không chịu buông tay dù bị tấn công hay gặp nghịch cảnh gay gắt.',
    definitionEn: 'the quality or fact of being able to grip something firmly; the quality or fact of being very determined; determination',
    cefrLevel: 'C1',
    roots: [{ rootId: 'tenere_origin', rootName: 'Tenere (Latin: nắm giữ, bám chặt)', meaningVi: 'nắm giữ chặt chẽ' }],
    anatomy: {
      rootParts: [{ text: 'tenax / tenere', rootId: 'tenere', rootName: 'Tenere', meaningVi: 'nắm giữ (Latin)' }],
      suffix: '-ity',
      suffixVi: 'hậu tố danh từ chỉ phẩm chất',
      formula: 'tenax (bám chặt) + -ity → tenacity (phẩm chất bám trụ ngoan cường)',
      explanation: 'Hình tượng nắm chặt không buông cho đến khi đạt được kết quả.',
    },
    wordFamily: {
      nouns: [{ term: 'tenacity', vi: 'sự ngoan cường' }, { term: 'tenaciousness', vi: 'tính ngoan cường' }],
      verbs: [],
      adjectives: [{ term: 'tenacious', vi: 'ngoan cường, bám dai' }],
      adverbs: [{ term: 'tenaciously', vi: 'một cách ngoan cường' }],
    },
    collocations: [
      { phrase: 'dogged tenacity', vi: 'sự kiên cường bền bỉ như loài chó săn', example: 'His dogged tenacity eventually paid off.' },
      { phrase: 'tenacity of purpose', vi: 'sự kiên định với mục đích', example: 'Great leaders demonstrate extraordinary tenacity of purpose.' },
    ],
    examples: [
      { en: 'The detective pursued the investigation with ferocious tenacity.', vi: 'Viên thám tử đã theo đuổi cuộc điều tra với sự ngoan cường quyết liệt.' },
      { en: 'Thanks to the tenacity of local activists, the ancient forest was saved.', vi: 'Nhờ vào sự kiên cường của các nhà hoạt động địa phương, khu rừng cổ thụ đã được cứu sống.' },
    ],
    synonyms: [
      { term: 'perseverance', vi: 'sự kiên trì', phonetic: '/ˌpɜːr.səˈvɪr.əns/' },
      { term: 'persistence', vi: 'sự bền bỉ', phonetic: '/pɚˈsɪs.təns/' },
      { term: 'grit', vi: 'sự gan góc', phonetic: '/ɡrɪt/' },
    ],
    antonyms: [
      { term: 'irresolution', vi: 'sự do dự thiếu quyết đoán', phonetic: '/ɪˌrez.əˈluː.ʃən/' },
      { term: 'weakness', vi: 'sự yếu đuối, dễ bỏ cuộc', phonetic: '/ˈwiːk.nəs/' },
    ],
  },

  grit: {
    id: 'grit',
    term: 'grit',
    partOfSpeech: 'n.',
    phoneticUs: '/ɡrɪt/',
    phoneticUk: '/ɡrɪt/',
    definitionVi: 'sự gan góc, ý chí bền chí và dũng khí trước gian nan; hạt cát nhỏ',
    detailedMeaningVi:
      'Lòng can đảm và nghị lực bền bỉ phi thường của tính cách, giúp một người tiếp tục chiến đấu và chịu đựng áp lực khắc nghiệt trong thời gian dài để đạt mục tiêu lớn.',
    definitionEn: 'courage and resolve; strength of character; small loose particles of stone or sand',
    cefrLevel: 'B2',
    roots: [{ rootId: 'grit_origin', rootName: 'Old English: greot', meaningVi: 'cát sạn, sỏi đá cứng cỏi' }],
    anatomy: {
      rootParts: [{ text: 'greot', rootId: 'greot', rootName: 'Old English', meaningVi: 'sỏi đá thô ráp' }],
      formula: 'greot (hạt sạn cứng) → grit (tính cách gan góc, cứng cỏi như đá)',
      explanation: 'Phẩm chất cứng cỏi, không bị nghiền nát trước áp lực lớn như hạt sỏi đá.',
    },
    wordFamily: {
      nouns: [{ term: 'grit', vi: 'sự gan góc, hạt cát sạn' }],
      verbs: [{ term: 'grit', vi: 'nghiến răng chịu đựng (grit one’s teeth)' }],
      adjectives: [{ term: 'gritty', vi: 'gan góc, kiên cường; có sạn' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'true grit', vi: 'bản lĩnh gan góc đích thực', example: 'The injured player showed true grit by finishing the match.' },
      { phrase: 'grit one’s teeth', vi: 'nghiến răng chịu đựng vượt qua khó khăn', example: 'She gritted her teeth and pushed through the final kilometer.' },
    ],
    examples: [
      { en: 'Psychologists identify grit as a key predictor of long-term life success.', vi: 'Các nhà tâm lý học xác định sự gan góc là yếu tố then chốt dự báo thành công lâu dài trong cuộc sống.' },
      { en: 'It takes real grit to rebuild your life after losing everything.', vi: 'Cần có một nghị lực gan góc thực sự để xây dựng lại cuộc sống sau khi mất tất cả.' },
    ],
    synonyms: [
      { term: 'perseverance', vi: 'sự kiên trì', phonetic: '/ˌpɜːr.səˈvɪr.əns/' },
      { term: 'courage', vi: 'lòng can đảm', phonetic: '/ˈkɜːr.ɪdʒ/' },
      { term: 'tenacity', vi: 'sự ngoan cường', phonetic: '/təˈnæs.ə.t̬i/' },
    ],
    antonyms: [
      { term: 'cowardice', vi: 'sự hèn nhát', phonetic: '/ˈkaʊ.ɚ.dɪs/' },
      { term: 'fragility', vi: 'sự mong manh dễ vỡ', phonetic: '/frəˈdʒɪl.ə.t̬i/' },
    ],
  },
};
