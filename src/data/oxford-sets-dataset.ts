import type { SupervocWord } from './supervoc-roots-dataset';
import { OXFORD_B2_EDUCATION_ACADEMICS_WORDS } from './oxford-education-academics-dataset';

export { OXFORD_B2_EDUCATION_ACADEMICS_WORDS };

export interface OxfordWordSet {
  id: string;
  title: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  termsCount: number;
  description: string;
  category: string;
  author?: string;
  daysAgo?: string;
  words: SupervocWord[];
}

// 40 Chi tiết từ vựng chuyên sâu cho bộ từ Oxford B2 Extended: Health, Medicine, Mind & Psychology
export const OXFORD_B2_HEALTH_MIND_WORDS: SupervocWord[] = [
  {
    id: 'addiction',
    term: 'addiction',
    partOfSpeech: 'n.',
    phoneticUs: '/əˈdɪk.ʃən/',
    phoneticUk: '/əˈdɪk.ʃn/',
    definitionVi: 'thói nghiện ngập, sự phụ thuộc không thể kiềm chế vào chất kích thích hoặc hành vi',
    definitionEn: 'the fact or condition of being addicted to a particular substance, thing, or activity',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'dic_dict', rootName: 'Dic, Dict', meaningVi: 'nói, tuyên bố, phán quyết (Latin: dicere)' },
    ],
    anatomy: {
      prefix: 'ad-',
      prefixVi: 'hướng tới, gắn chặt vào',
      rootParts: [
        { text: 'dict', rootId: 'dic_dict', rootName: 'Dic, Dict', meaningVi: 'tuyên bố, giao phó' },
      ],
      suffix: '-ion',
      suffixVi: 'danh từ chỉ tình trạng / quá trình',
      formula: 'ad- (hướng về) + dict (giao phó) + -ion → addiction (bị phán quyết/gắn chặt số phận vào một chất gây nghiện)',
      explanation: 'Trong luật La Mã, "addictus" là người bị tòa tuyên bố trao cho chủ nợ làm nô lệ để gán nợ.',
    },
    wordFamily: {
      nouns: [
        { term: 'addiction', vi: 'thói nghiện ngập, sự nghiện' },
        { term: 'addict', vi: 'người nghiện' },
      ],
      verbs: [
        { term: 'addict', vi: 'làm cho nghiện, đắm chìm vào' },
      ],
      adjectives: [
        { term: 'addicted', vi: 'bị nghiện, mê mẩn' },
        { term: 'addictive', vi: 'có tính gây nghiện' },
      ],
      adverbs: [
        { term: 'addictively', vi: 'một cách gây nghiện' },
      ],
    },
    collocations: [
      {
        phrase: 'drug / alcohol addiction',
        vi: 'chứng nghiện ma túy / rượu',
        example: 'Effective rehabilitation programs help individuals overcome severe drug addiction.',
      },
      {
        phrase: 'battle / overcome an addiction',
        vi: 'chiến đấu / vượt qua cơn nghiện',
        example: 'She spent years battling a smartphone addiction that disrupted her sleep.',
      },
    ],
    examples: [
      {
        en: 'Social media addiction among teenagers has become a serious public mental health concern.',
        vi: 'Chứng nghiện mạng xã hội trong giới thanh thiếu niên đã trở thành một mối lo ngại nghiêm trọng về sức khỏe tâm thần cộng đồng.',
      },
    ],
    synonyms: [
      { term: 'dependency', vi: 'sự lệ thuộc' },
      { term: 'craving', vi: 'sự thèm muốn mãnh liệt' },
      { term: 'obsession', vi: 'sự ám ảnh' },
    ],
    antonyms: [
      { term: 'abstinence', vi: 'sự kiêng khem' },
      { term: 'moderation', vi: 'sự điều độ' },
    ],
  },

  {
    id: 'aids',
    term: 'AIDS',
    partOfSpeech: 'n.',
    phoneticUs: '/eɪdz/',
    phoneticUk: '/eɪdz/',
    definitionVi: 'bệnh AIDS, hội chứng suy giảm miễn dịch mắc phải do virus HIV gây ra',
    definitionEn: 'Acquired Immune Deficiency Syndrome: a serious disease of the immune system caused by infection with HIV',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'A.I.D.S.', rootId: 'acronym_med', rootName: 'Thuật ngữ Y khoa', meaningVi: 'Từ viết tắt Acquired Immune Deficiency Syndrome' },
      ],
      formula: 'Acquired + Immune + Deficiency + Syndrome → AIDS',
      explanation: 'Viết tắt của Acquired Immune Deficiency Syndrome (Hội chứng suy giảm miễn dịch mắc phải).',
    },
    wordFamily: {
      nouns: [
        { term: 'AIDS', vi: 'bệnh AIDS' },
        { term: 'HIV', vi: 'virus gây suy giảm miễn dịch ở người' },
      ],
      verbs: [],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'AIDS epidemic / crisis',
        vi: 'đại dịch / cuộc khủng hoảng bệnh AIDS',
        example: 'Global health organizations continue to fund the fight against the AIDS epidemic.',
      },
      {
        phrase: 'treatments for AIDS',
        vi: 'các phương pháp điều trị bệnh AIDS',
        example: 'Antiretroviral therapy provides life-saving treatments for people living with AIDS.',
      },
    ],
    examples: [
      {
        en: 'Advances in medical research have transformed AIDS from a fatal illness into a manageable chronic condition.',
        vi: 'Những tiến bộ trong nghiên cứu y học đã biến AIDS từ một căn bệnh tử vong thành một bệnh mãn tính có thể kiểm soát được.',
      },
    ],
    synonyms: [
      { term: 'acquired immune deficiency', vi: 'suy giảm miễn dịch mắc phải' },
    ],
    antonyms: [],
  },

  {
    id: 'ambulance',
    term: 'ambulance',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈæm.bjə.ləns/',
    phoneticUk: '/ˈæm.bjə.ləns/',
    definitionVi: 'xe cứu thương, xe cấp cứu chuyên dụng chở bệnh nhân',
    definitionEn: 'a vehicle equipped for taking sick or injured people to and from the hospital, especially in emergencies',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'ambul', rootName: 'Ambul', meaningVi: 'đi lại, di chuyển (Latin: ambulare)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'ambul-', rootId: 'ambul', rootName: 'Ambul', meaningVi: 'đi lại, di chuyển (Latin: ambulare)' },
      ],
      suffix: '-ance',
      suffixVi: 'danh từ chỉ công cụ / sự việc',
      formula: 'ambul- (di động) + -ance → ambulance (bệnh viện dã chiến di động → xe cấp cứu)',
      explanation: 'Bắt nguồn từ cụm từ tiếng Pháp "hôpital ambulant" (bệnh viện di động trên chiến trường).',
    },
    wordFamily: {
      nouns: [
        { term: 'ambulance', vi: 'xe cứu thương' },
        { term: 'ambulatory', vi: 'khu bệnh nhân có thể đi lại được' },
      ],
      verbs: [
        { term: 'ambulate', vi: 'đi lại, di chuyển' },
      ],
      adjectives: [
        { term: 'ambulatory', vi: 'có thể tự đi lại được, lưu động' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'call an ambulance',
        vi: 'gọi xe cấp cứu',
        example: 'Witnesses immediately called an ambulance after the two cars collided.',
      },
      {
        phrase: 'ambulance sirens',
        vi: 'còi báo động của xe cứu thương',
        example: 'The loud ambulance sirens pierced through the dense evening traffic.',
      },
    ],
    examples: [
      {
        en: 'Paramedics inside the ambulance administered first aid while speeding towards the hospital.',
        vi: 'Các nhân viên cấp cứu trên xe cứu thương đã thực hiện sơ cứu trong khi lao nhanh về phía bệnh viện.',
      },
    ],
    synonyms: [
      { term: 'emergency vehicle', vi: 'phương tiện khẩn cấp' },
      { term: 'rescue vehicle', vi: 'xe cứu hộ' },
    ],
    antonyms: [],
  },

  {
    id: 'anxiety',
    term: 'anxiety',
    partOfSpeech: 'n.',
    phoneticUs: '/æŋˈzaɪ.ə.t̬i/',
    phoneticUk: '/æŋˈzaɪ.ə.ti/',
    definitionVi: 'sự lo âu, cảm giác bồn chồn, bất an hoặc trạng thái rối loạn lo âu',
    definitionEn: 'a feeling of worry, nervousness, or unease, typically about an imminent event or something with an uncertain outcome',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'angh', rootName: 'Angh', meaningVi: 'thắt nghẹt, bóp chặt (Gốc Ấn-Âu)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'anx-', rootId: 'angh', rootName: 'Angh', meaningVi: 'bị bóp nghẹt lòng (Latin: anxius)' },
      ],
      suffix: '-iety',
      suffixVi: 'tình trạng, trạng thái',
      formula: 'anx- (nghẹt thở, lo sợ) + -iety → anxiety (trạng thái bồn chồn thắt ruột gan)',
      explanation: 'Gốc từ diễn tả cảm giác ngực bị bóp nghẹt khi đối mặt với hiểm nguy hoặc bất an.',
    },
    wordFamily: {
      nouns: [
        { term: 'anxiety', vi: 'sự lo âu, nỗi bất an' },
        { term: 'anxiousness', vi: 'tính bồn chồn' },
      ],
      verbs: [],
      adjectives: [
        { term: 'anxious', vi: 'lo lắng, bồn chồn' },
      ],
      adverbs: [
        { term: 'anxiously', vi: 'một cách đầy lo âu' },
      ],
    },
    collocations: [
      {
        phrase: 'acute / severe anxiety',
        vi: 'cơn lo âu cấp tính / nghiêm trọng',
        example: 'Deep breathing exercises help calm severe anxiety during stressful moments.',
      },
      {
        phrase: 'anxiety disorder',
        vi: 'hội chứng rối loạn lo âu',
        example: 'Generalized anxiety disorder affects millions of adults worldwide.',
      },
    ],
    examples: [
      {
        en: 'Students often experience heightened levels of anxiety before major university entrance exams.',
        vi: 'Học sinh thường trải qua mức độ lo âu gia tăng trước các kỳ thi tuyển sinh đại học quan trọng.',
      },
    ],
    synonyms: [
      { term: 'worry', vi: 'sự lo lắng' },
      { term: 'apprehension', vi: 'sự âu lo, e ngại' },
      { term: 'unease', vi: 'nỗi bất an' },
      { term: 'nervousness', vi: 'sự hồi hộp' },
    ],
    antonyms: [
      { term: 'calmness', vi: 'sự bình tĩnh' },
      { term: 'serenity', vi: 'sự thanh thản' },
      { term: 'tranquility', vi: 'sự yên bình' },
    ],
  },

  {
    id: 'biological',
    term: 'biological',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˌbaɪ.əˈlɑː.dʒɪ.kəl/',
    phoneticUk: '/ˌbaɪ.əˈlɒdʒ.ɪ.kl/',
    definitionVi: 'thuộc về sinh học, liên quan đến các sinh vật sống và quá trình sống',
    definitionEn: 'relating to biology or living organisms and vital life processes',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'bio', rootName: 'Bio', meaningVi: 'sự sống, sinh vật (Hy Lạp: bios)' },
      { rootId: 'logy', rootName: 'Logy', meaningVi: 'học thuyết, ngành học (Hy Lạp: logos)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'bio-', rootId: 'bio', rootName: 'Bio', meaningVi: 'sự sống (Hy Lạp: bios)' },
        { text: 'log-', rootId: 'logy', rootName: 'Logy', meaningVi: 'ngành học, lý thuyết' },
      ],
      suffix: '-ical',
      suffixVi: 'tính từ (thuộc về)',
      formula: 'bio (sự sống) + logy (khoa học) + -ical → biological (thuộc về khoa học sinh học)',
      explanation: 'Từ ghép gốc Hy Lạp kết hợp "bios" (sự sống) và "logos" (lời nói, ngành nghiên cứu).',
    },
    wordFamily: {
      nouns: [
        { term: 'biology', vi: 'sinh học' },
        { term: 'biologist', vi: 'nhà sinh học' },
      ],
      verbs: [],
      adjectives: [
        { term: 'biological', vi: 'thuộc sinh học' },
      ],
      adverbs: [
        { term: 'biologically', vi: 'về mặt sinh học' },
      ],
    },
    collocations: [
      {
        phrase: 'biological clock',
        vi: 'đồng hồ sinh học của cơ thể',
        example: 'Jet lag temporarily disrupts the human body’s internal biological clock.',
      },
      {
        phrase: 'biological parent / mother',
        vi: 'cha mẹ / mẹ ruột (về mặt sinh học)',
        example: 'She decided to search for her biological parents after turning eighteen.',
      },
    ],
    examples: [
      {
        en: 'The human immune system produces complex biological responses to fight off infections.',
        vi: 'Hệ miễn dịch của con người tạo ra các phản ứng sinh học phức tạp để chống lại nhiễm trùng.',
      },
    ],
    synonyms: [
      { term: 'organic', vi: 'hữu cơ' },
      { term: 'living', vi: 'sống' },
    ],
    antonyms: [
      { term: 'inorganic', vi: 'vô cơ' },
      { term: 'synthetic', vi: 'tổng hợp, nhân tạo' },
    ],
  },

  {
    id: 'cheek',
    term: 'cheek',
    partOfSpeech: 'n.',
    phoneticUs: '/tʃiːk/',
    phoneticUk: '/tʃiːk/',
    definitionVi: 'gò má, hai bên khuôn mặt dưới mắt; thái độ xấc láo, trơ tráo',
    definitionEn: 'either side of the face below the eye and to the side of the nose and mouth; talk or behavior regarded as rude or disrespectful',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'cheek', rootId: 'origin_oe', rootName: 'Old English', meaningVi: 'xương hàm, gò má (ceace)' },
      ],
      formula: 'ceace (tiếng Anh cổ) → cheek (gò má)',
      explanation: 'Từ gốc Anh Cổ dùng để chỉ phần má và hàm hai bên khuôn mặt.',
    },
    wordFamily: {
      nouns: [
        { term: 'cheek', vi: 'gò má, sự trơ tráo' },
        { term: 'cheekiness', vi: 'tính xấc xược' },
      ],
      verbs: [],
      adjectives: [
        { term: 'cheeky', vi: 'hỗn xược, tinh nghịch' },
      ],
      adverbs: [
        { term: 'cheekily', vi: 'một cách xấc xược, láu lỉnh' },
      ],
    },
    collocations: [
      {
        phrase: 'rosy / flushed cheeks',
        vi: 'đôi má ửng hồng / đỏ bừng',
        example: 'The brisk winter breeze left the children with bright rosy cheeks.',
      },
      {
        phrase: 'kiss on the cheek',
        vi: 'hôn lên má',
        example: 'He gave his grandmother a gentle kiss on the cheek to say goodbye.',
      },
    ],
    examples: [
      {
        en: 'Tears of joy rolled down her cheeks as she held her newborn baby for the first time.',
        vi: 'Những giọt nước mắt hạnh phúc lăn dài trên đôi má cô khi lần đầu tiên được ôm đứa con mới sinh.',
      },
    ],
    synonyms: [
      { term: 'jowl', vi: 'má dưới' },
      { term: 'audacity', vi: 'sự trơ tráo (nghĩa bóng)' },
    ],
    antonyms: [],
  },

  {
    id: 'clinic',
    term: 'clinic',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈklɪn.ɪk/',
    phoneticUk: '/ˈklɪn.ɪk/',
    definitionVi: 'phòng khám bệnh tư nhân/chuyên khoa, bệnh xá',
    definitionEn: 'an establishment or hospital department where outpatients are given medical treatment or advice',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'clin', rootName: 'Clin', meaningVi: 'ngả lưng, nằm giường (Hy Lạp: kline)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'clin-', rootId: 'clin', rootName: 'Clin', meaningVi: 'giường bệnh (Hy Lạp: kline)' },
      ],
      suffix: '-ic',
      suffixVi: 'nơi chốn / chuyên ngành',
      formula: 'clin- (giường khám bệnh) + -ic → clinic (nơi bác sĩ thăm khám bệnh nhân bên giường)',
      explanation: 'Bắt nguồn từ tiếng Hy Lạp "klinike" (việc thực hành y học bên giường bệnh nhân).',
    },
    wordFamily: {
      nouns: [
        { term: 'clinic', vi: 'phòng khám, bệnh xá' },
        { term: 'clinician', vi: 'bác sĩ lâm sàng' },
      ],
      verbs: [],
      adjectives: [
        { term: 'clinical', vi: 'thuộc lâm sàng, lạnh lùng khách quan' },
      ],
      adverbs: [
        { term: 'clinically', vi: 'về mặt lâm sàng' },
      ],
    },
    collocations: [
      {
        phrase: 'dental / outpatient clinic',
        vi: 'phòng khám nha khoa / phòng khám ngoại trú',
        example: 'She booked an appointment at the local dental clinic for a routine checkup.',
      },
      {
        phrase: 'walk-in clinic',
        vi: 'phòng khám không cần hẹn trước',
        example: 'Walk-in clinics provide convenient care for minor medical emergencies.',
      },
    ],
    examples: [
      {
        en: 'The community clinic offers free health screenings and vaccinations for low-income families.',
        vi: 'Phòng khám cộng đồng cung cấp dịch vụ khám sàng lọc sức khỏe và tiêm chủng miễn phí cho các gia đình thu nhập thấp.',
      },
    ],
    synonyms: [
      { term: 'infirmary', vi: 'bệnh xá' },
      { term: 'dispensary', vi: 'phòng phát thuốc/khám bệnh' },
      { term: 'medical center', vi: 'trung tâm y tế' },
    ],
    antonyms: [],
  },

  {
    id: 'depression',
    term: 'depression',
    partOfSpeech: 'n.',
    phoneticUs: '/dɪˈpreʃ.ən/',
    phoneticUk: '/dɪˈpreʃ.n/',
    definitionVi: 'sự trầm cảm, bệnh trầm cảm; sự suy thoái kinh tế; chỗ lõm xuống',
    definitionEn: 'a mental health disorder characterized by persistently depressed mood or loss of interest in activities; a severe economic slump',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'press', rootName: 'Press', meaningVi: 'ấn, ép, đè nặng (Latin: premere)' },
    ],
    anatomy: {
      prefix: 'de-',
      prefixVi: 'xuống dưới, làm giảm',
      rootParts: [
        { text: 'press', rootId: 'press', rootName: 'Press', meaningVi: 'đè, nén' },
      ],
      suffix: '-ion',
      suffixVi: 'danh từ chỉ tình trạng / quá trình',
      formula: 'de- (xuống) + press (đè nặng) + -ion → depression (tâm trạng bị đè nặng sụp xuống → trầm cảm)',
      explanation: 'Mô tả trạng thái tâm lý bị đè nén, suy sụp tinh thần hoặc nền kinh tế bị tụt dốc.',
    },
    wordFamily: {
      nouns: [
        { term: 'depression', vi: 'sự trầm cảm, suy thoái' },
        { term: 'depressant', vi: 'thuốc an thần, chất ức chế' },
      ],
      verbs: [
        { term: 'depress', vi: 'làm trầm cảm, làm sụt giảm' },
      ],
      adjectives: [
        { term: 'depressed', vi: 'bị trầm cảm, tuyệt vọng' },
        { term: 'depressive', vi: 'mang tính trầm cảm' },
      ],
      adverbs: [
        { term: 'depressingly', vi: 'một cách buồn bã, thảm hại' },
      ],
    },
    collocations: [
      {
        phrase: 'clinical depression',
        vi: 'chứng trầm cảm lâm sàng',
        example: 'Clinical depression is a serious condition that requires professional psychiatric support.',
      },
      {
        phrase: 'suffer from depression',
        vi: 'chịu đựng căn bệnh trầm cảm',
        example: 'Many artists suffered from depression throughout their creative careers.',
      },
    ],
    examples: [
      {
        en: 'Regular physical exercise and therapy can significantly alleviate the symptoms of depression.',
        vi: 'Tập thể dục đều đặn và trị liệu tâm lý có thể làm giảm đáng kể các triệu chứng của bệnh trầm cảm.',
      },
    ],
    synonyms: [
      { term: 'melancholy', vi: 'nỗi u sầu' },
      { term: 'despair', vi: 'sự tuyệt vọng' },
      { term: 'gloom', vi: 'sự ảm đạm' },
    ],
    antonyms: [
      { term: 'euphoria', vi: 'sự phấn khích tột độ' },
      { term: 'happiness', vi: 'sự hạnh phúc' },
      { term: 'prosperity', vi: 'sự thịnh vượng kinh tế' },
    ],
  },

  {
    id: 'disability',
    term: 'disability',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌdɪs.əˈbɪl.ə.t̬i/',
    phoneticUk: '/ˌdɪs.əˈbɪl.ə.ti/',
    definitionVi: 'sự tàn tật, tình trạng khuyết tật về thể chất hoặc trí tuệ',
    definitionEn: 'a physical or mental condition that limits a person’s movements, senses, or activities',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'hab_habil', rootName: 'Hab, Habil', meaningVi: 'nắm giữ, có khả năng (Latin: habilis)' },
    ],
    anatomy: {
      prefix: 'dis-',
      prefixVi: 'không, mất đi, phủ định',
      rootParts: [
        { text: 'abil-', rootId: 'hab_habil', rootName: 'Hab, Habil', meaningVi: 'có khả năng (ability)' },
      ],
      suffix: '-ity',
      suffixVi: 'tình trạng, phẩm chất',
      formula: 'dis- (mất đi) + ability (khả năng) → disability (tình trạng suy giảm hoặc mất đi chức năng vốn có)',
      explanation: 'Sự suy giảm một phần hoặc toàn bộ chức năng cơ thể so với người bình thường.',
    },
    wordFamily: {
      nouns: [
        { term: 'disability', vi: 'sự tàn tật, khuyết tật' },
        { term: 'ability', vi: 'khả năng, năng lực' },
      ],
      verbs: [
        { term: 'disable', vi: 'vô hiệu hóa, làm tàn tật' },
        { term: 'enable', vi: 'cho phép, tạo điều kiện' },
      ],
      adjectives: [
        { term: 'disabled', vi: 'bị khuyết tật' },
        { term: 'able', vi: 'có năng lực' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'people with disabilities',
        vi: 'người khuyết tật',
        example: 'Public buildings must provide wheelchair ramps for people with disabilities.',
      },
      {
        phrase: 'learning / physical disability',
        vi: 'khuyết tật học tập / thể chất',
        example: 'Special education programs are designed for children with learning disabilities.',
      },
    ],
    examples: [
      {
        en: 'The Paralympics celebrates the extraordinary athletic achievements of athletes with disabilities.',
        vi: 'Thế vận hội Paralympic tôn vinh những thành tựu thể thao phi thường của các vận động viên khuyết tật.',
      },
    ],
    synonyms: [
      { term: 'impairment', vi: 'sự suy giảm chức năng' },
      { term: 'handicap', vi: 'sự bất lợi, thương tật' },
    ],
    antonyms: [
      { term: 'ability', vi: 'khả năng' },
      { term: 'capability', vi: 'năng lực hoàn chỉnh' },
    ],
  },

  {
    id: 'disabled',
    term: 'disabled',
    partOfSpeech: 'adj.',
    phoneticUs: '/dɪˈseɪ.bəld/',
    phoneticUk: '/dɪˈseɪ.bld/',
    definitionVi: 'bị tàn tật, bị khuyết tật; bị vô hiệu hóa',
    definitionEn: 'having a physical or mental condition that limits movements, senses, or activities',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'hab_habil', rootName: 'Hab, Habil', meaningVi: 'nắm giữ, có khả năng' },
    ],
    anatomy: {
      prefix: 'dis-',
      prefixVi: 'không, mất đi',
      rootParts: [
        { text: 'able', rootId: 'hab_habil', rootName: 'Hab, Habil', meaningVi: 'có năng lực' },
      ],
      suffix: '-ed',
      suffixVi: 'tính từ ở dạng bị động',
      formula: 'dis- + able + -ed → disabled (bị suy giảm năng lực hoạt động)',
      explanation: 'Tính từ mô tả người hoặc thiết bị đã bị mất đi chức năng thông thường.',
    },
    wordFamily: {
      nouns: [
        { term: 'disability', vi: 'sự khuyết tật' },
      ],
      verbs: [
        { term: 'disable', vi: 'vô hiệu hóa' },
      ],
      adjectives: [
        { term: 'disabled', vi: 'bị khuyết tật' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'disabled access',
        vi: 'lối đi dành cho người khuyết tật',
        example: 'All newly constructed subway stations are required to have disabled access.',
      },
      {
        phrase: 'severely disabled',
        vi: 'bị khuyết tật nặng',
        example: 'He received 24-hour specialized care after becoming severely disabled.',
      },
    ],
    examples: [
      {
        en: 'The charity provides customized wheelchairs and vocational training for disabled veterans.',
        vi: 'Tổ chức từ thiện cung cấp xe lăn thiết kế riêng và đào tạo nghề cho các thương binh bị khuyết tật.',
      },
    ],
    synonyms: [
      { term: 'impaired', vi: 'bị suy giảm chức năng' },
      { term: 'handicapped', vi: 'bị tật nguyền' },
    ],
    antonyms: [
      { term: 'able-bodied', vi: 'khỏe mạnh, lành lặn' },
    ],
  },

  {
    id: 'disorder',
    term: 'disorder',
    partOfSpeech: 'n.',
    phoneticUs: '/dɪˈsɔːr.dɚ/',
    phoneticUk: '/dɪsˈɔː.dər/',
    definitionVi: 'sự rối loạn chức năng (bệnh lý/tâm thần); sự lộn xộn, mất trật tự',
    definitionEn: 'a disruption of normal physical or mental functions; a state of confusion or lack of order',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'ordin', rootName: 'Ordin', meaningVi: 'thứ tự, hàng lối (Latin: ordo)' },
    ],
    anatomy: {
      prefix: 'dis-',
      prefixVi: 'ngược lại, phá vỡ',
      rootParts: [
        { text: 'order', rootId: 'ordin', rootName: 'Ordin', meaningVi: 'trật tự, hàng ngũ (Latin: ordo)' },
      ],
      formula: 'dis- (phá vỡ) + order (trật tự) → disorder (sự đảo lộn trật tự sinh học bình thường)',
      explanation: 'Sự sai lệch, hoạt động bất thường của một cơ quan hoặc tâm trí con người.',
    },
    wordFamily: {
      nouns: [
        { term: 'disorder', vi: 'sự rối loạn, sự lộn xộn' },
        { term: 'order', vi: 'trật tự, mệnh lệnh' },
      ],
      verbs: [
        { term: 'disorder', vi: 'làm xáo trộn, gây rối loạn' },
      ],
      adjectives: [
        { term: 'disordered', vi: 'bị rối loạn' },
        { term: 'disorderly', vi: 'mất trật tự, hỗn loạn' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'genetic / sleep disorder',
        vi: 'rối loạn di truyền / rối loạn giấc ngủ',
        example: 'Chronic insomnia is recognized as a debilitating sleep disorder.',
      },
      {
        phrase: 'eating disorder',
        vi: 'chứng rối loạn ăn uống',
        example: 'Therapists help patients recover from anorexia and other eating disorders.',
      },
    ],
    examples: [
      {
        en: 'Bipolar disorder is characterized by dramatic shifts in mood, energy, and activity levels.',
        vi: 'Rối loạn lưỡng cực được đặc trưng bởi những thay đổi mạnh mẽ về tâm trạng, năng lượng và mức độ hoạt động.',
      },
    ],
    synonyms: [
      { term: 'ailment', vi: 'chứng bệnh' },
      { term: 'condition', vi: 'tình trạng bệnh lý' },
      { term: 'malfunction', vi: 'sự trục trặc' },
    ],
    antonyms: [
      { term: 'order', vi: 'trật tự' },
      { term: 'harmony', vi: 'sự hài hòa cân bằng' },
    ],
  },

  {
    id: 'elbow',
    term: 'elbow',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈel.boʊ/',
    phoneticUk: '/ˈel.bəʊ/',
    definitionVi: 'khuỷu tay, cùi chỏ (khớp nối giữa cánh tay và cẳng tay)',
    definitionEn: 'the joint between the forearm and the upper arm',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'ell- (cánh tay) + bow (uốn cong)', rootId: 'origin_oe', rootName: 'Old English', meaningVi: 'chỗ uốn cong của cánh tay (elnboga)' },
      ],
      formula: 'eln (cánh tay) + boga (uốn cong) → elbow (khuỷu tay)',
      explanation: 'Bắt nguồn từ tiếng Anh Cổ "elnboga", nghĩa đen là điểm uốn cong của cánh tay.',
    },
    wordFamily: {
      nouns: [
        { term: 'elbow', vi: 'khuỷu tay' },
      ],
      verbs: [
        { term: 'elbow', vi: 'chen lấn huých cùi chỏ' },
      ],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'bend / flex the elbow',
        vi: 'gập / uốn cong khuỷu tay',
        example: 'The physiotherapist asked him to slowly bend his injured elbow.',
      },
      {
        phrase: 'elbow grease',
        vi: 'sức lực, sự lao động chân tay vất vả (thành ngữ)',
        example: 'Cleaning this rusted stove requires a lot of elbow grease.',
      },
    ],
    examples: [
      {
        en: 'Tennis elbow is a common painful condition caused by repetitive overuse of forearm muscles.',
        vi: 'Hội chứng viêm lồi cầu ngoài xương cánh tay (Tennis elbow) là một chấn thương phổ biến do dùng cơ cẳng tay quá mức lặp đi lặp lại.',
      },
    ],
    synonyms: [
      { term: 'arm joint', vi: 'khớp cánh tay' },
    ],
    antonyms: [],
  },

  {
    id: 'fever',
    term: 'fever',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈfiː.vɚ/',
    phoneticUk: '/ˈfiː.vər/',
    definitionVi: 'cơn sốt, tình trạng thân nhiệt tăng cao bất thường; cơn cuồng nhiệt',
    definitionEn: 'an abnormally high body temperature, usually accompanied by shivering, headache, and in severe instances, delirium',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'febr', rootName: 'Febr', meaningVi: 'nhiệt độ, cơn sốt (Latin: febris)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'fevr-', rootId: 'febr', rootName: 'Febr', meaningVi: 'sốt (Latin: febris)' },
      ],
      formula: 'febris (Latin) → fever (thân nhiệt tăng cao)',
      explanation: 'Phản ứng phòng vệ tự nhiên của cơ thể bằng cách tăng nhiệt độ để tiêu diệt vi khuẩn.',
    },
    wordFamily: {
      nouns: [
        { term: 'fever', vi: 'cơn sốt, sự cuồng nhiệt' },
      ],
      verbs: [],
      adjectives: [
        { term: 'feverish', vi: 'sốt cao, cuồng nhiệt bồn chồn' },
      ],
      adverbs: [
        { term: 'feverishly', vi: 'một cách cuống cuồng, sốt sắng' },
      ],
    },
    collocations: [
      {
        phrase: 'run a high fever',
        vi: 'bị sốt cao',
        example: 'The toddler started running a high fever of over 39 degrees Celsius.',
      },
      {
        phrase: 'reduce / bring down a fever',
        vi: 'hạ sốt',
        example: 'Paracetamol is widely used to bring down a fever safely.',
      },
    ],
    examples: [
      {
        en: 'A persistent high fever accompanied by chills may indicate a serious bacterial infection.',
        vi: 'Một cơn sốt cao kéo dài đi kèm ớn lạnh có thể là dấu hiệu của việc nhiễm trùng vi khuẩn nghiêm trọng.',
      },
    ],
    synonyms: [
      { term: 'pyrexia', vi: 'chứng sốt (thuật ngữ y học)' },
      { term: 'high temperature', vi: 'nhiệt độ cơ thể cao' },
    ],
    antonyms: [
      { term: 'hypothermia', vi: 'chứng hạ thân nhiệt' },
    ],
  },

  {
    id: 'heal',
    term: 'heal',
    partOfSpeech: 'v.',
    phoneticUs: '/hiːl/',
    phoneticUk: '/hiːl/',
    definitionVi: 'chữa lành vết thương, làm lành lặn, hồi phục sức khỏe/tâm hồn',
    definitionEn: 'become sound or healthy again; cause a wound, injury, or person to become healthy again',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'haelan', rootId: 'origin_oe', rootName: 'Old English', meaningVi: 'làm cho lành lặn, toàn vẹn (haelan)' },
      ],
      formula: 'haelan (toàn vẹn) → heal (làm cho lành lại như ban đầu)',
      explanation: 'Cùng gốc với từ "whole" (toàn vẹn) và "health" (sức khỏe).',
    },
    wordFamily: {
      nouns: [
        { term: 'healer', vi: 'người chữa bệnh, thầy thuốc' },
        { term: 'healing', vi: 'quá trình chữa lành' },
      ],
      verbs: [
        { term: 'heal', vi: 'chữa lành' },
      ],
      adjectives: [
        { term: 'healed', vi: 'đã lành lặn' },
        { term: 'healing', vi: 'mang tính chữa lành' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'heal completely / naturally',
        vi: 'lành lặn hoàn toàn / tự nhiên',
        example: 'With proper rest and clean bandages, the deep cut healed completely.',
      },
      {
        phrase: 'heal emotional wounds',
        vi: 'chữa lành những tổn thương tình cảm',
        example: 'Time and supportive friends helped him heal deep emotional wounds.',
      },
    ],
    examples: [
      {
        en: 'The surgeon assured the patient that the fracture would take about six weeks to heal.',
        vi: 'Bác sĩ phẫu thuật trấn an bệnh nhân rằng chỗ xương gãy sẽ mất khoảng sáu tuần để lành lại.',
      },
    ],
    synonyms: [
      { term: 'cure', vi: 'chữa khỏi' },
      { term: 'remedy', vi: 'khắc phục, điều trị' },
      { term: 'recover', vi: 'hồi phục' },
    ],
    antonyms: [
      { term: 'wound', vi: 'làm bị thương' },
      { term: 'injure', vi: 'làm tổn hại' },
      { term: 'worsen', vi: 'làm trầm trọng thêm' },
    ],
  },

  {
    id: 'healthcare',
    term: 'healthcare',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈhelθ.ker/',
    phoneticUk: '/ˈhelθ.keər/',
    definitionVi: 'dịch vụ chăm sóc sức khỏe, hệ thống y tế công cộng và tư nhân',
    definitionEn: 'the organized provision of medical care to individuals or a community',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'health (sức khỏe) + care (sự chăm sóc)', rootId: 'compound_med', rootName: 'Từ ghép Y khoa', meaningVi: 'chăm sóc sức khỏe' },
      ],
      formula: 'health (sức khỏe) + care (chăm sóc) → healthcare (ngành y tế chăm sóc sức khỏe)',
      explanation: 'Từ ghép chỉ toàn bộ ngành công nghiệp và dịch vụ bảo vệ sức khỏe cộng đồng.',
    },
    wordFamily: {
      nouns: [
        { term: 'healthcare', vi: 'ngành y tế, chăm sóc sức khỏe' },
        { term: 'health', vi: 'sức khỏe' },
      ],
      verbs: [],
      adjectives: [
        { term: 'healthy', vi: 'khỏe mạnh' },
      ],
      adverbs: [
        { term: 'healthily', vi: 'một cách lành mạnh' },
      ],
    },
    collocations: [
      {
        phrase: 'healthcare system / provider',
        vi: 'hệ thống y tế / nhà cung cấp dịch vụ y tế',
        example: 'Universal healthcare systems ensure that every citizen has access to doctors.',
      },
      {
        phrase: 'healthcare professionals / workers',
        vi: 'các y bác sĩ / nhân viên y tế',
        example: 'Healthcare workers worked tirelessly during the global pandemic.',
      },
    ],
    examples: [
      {
        en: 'Investing in preventive healthcare drastically lowers overall national medical expenditures.',
        vi: 'Đầu tư vào y tế phòng ngừa giúp giảm đáng kể chi tiêu y tế quốc gia nói chung.',
      },
    ],
    synonyms: [
      { term: 'medical care', vi: 'chăm sóc y tế' },
      { term: 'health services', vi: 'các dịch vụ y tế' },
    ],
    antonyms: [],
  },

  {
    id: 'hip',
    term: 'hip',
    partOfSpeech: 'n.',
    phoneticUs: '/hɪp/',
    phoneticUk: '/hɪp/',
    definitionVi: 'hông, khớp háng (phần nhô ra ở hai bên xương chậu)',
    definitionEn: 'a projection of the pelvis and upper thigh bone on each side of the body in human beings and quadrupeds',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'hype', rootId: 'origin_oe', rootName: 'Old English', meaningVi: 'xương hông (hype)' },
      ],
      formula: 'hype (tiếng Anh cổ) → hip (khớp hông)',
      explanation: 'Bộ phận chịu tải trọng chính của phần thân trên kết nối với hai chân.',
    },
    wordFamily: {
      nouns: [
        { term: 'hip', vi: 'hông, khớp hông' },
      ],
      verbs: [],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'hip replacement surgery',
        vi: 'phẫu thuật thay khớp háng',
        example: 'Elderly patients often undergo hip replacement surgery to restore mobility.',
      },
      {
        phrase: 'hands on hips',
        vi: 'chống hai tay lên hông',
        example: 'She stood with her hands on her hips, watching the children play.',
      },
    ],
    examples: [
      {
        en: 'He fractured his hip in a slip-and-fall accident on the icy sidewalk.',
        vi: 'Ông đã bị gãy xương hông trong một vụ tai nạn trượt ngã trên vỉa hè đóng băng.',
      },
    ],
    synonyms: [
      { term: 'pelvis joint', vi: 'khớp xương chậu' },
      { term: 'haunch', vi: 'bắp đùi hông' },
    ],
    antonyms: [],
  },

  {
    id: 'hunger',
    term: 'hunger',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈhʌŋ.ɡɚ/',
    phoneticUk: '/ˈhʌŋ.ɡər/',
    definitionVi: 'cơn đói, sự đói khát; nạn đói; khao khát cháy bỏng',
    definitionEn: 'a feeling of discomfort or weakness caused by lack of food, coupled with the desire to eat; a severe lack of food',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'hungor', rootId: 'origin_oe', rootName: 'Old English', meaningVi: 'nạn đói, sự thèm ăn (hungor)' },
      ],
      formula: 'hungor (tiếng Anh cổ) → hunger (cơn đói khát)',
      explanation: 'Cảm giác sinh học thúc đẩy sinh vật tìm kiếm năng lượng dinh dưỡng.',
    },
    wordFamily: {
      nouns: [
        { term: 'hunger', vi: 'cơn đói, sự khao khát' },
      ],
      verbs: [
        { term: 'hunger', vi: 'khao khát, thèm muốn' },
      ],
      adjectives: [
        { term: 'hungry', vi: 'đói bụng' },
      ],
      adverbs: [
        { term: 'hungrily', vi: 'một cách đói ngấu nghiến' },
      ],
    },
    collocations: [
      {
        phrase: 'satisfy / satisfy one’s hunger',
        vi: 'làm no bụng, thỏa mãn cơn đói',
        example: 'A warm bowl of soup was enough to satisfy his hunger.',
      },
      {
        phrase: 'world hunger',
        vi: 'nạn đói toàn cầu',
        example: 'Eradicating world hunger remains one of the United Nations key sustainable goals.',
      },
    ],
    examples: [
      {
        en: 'Drought and war pushed millions of civilians into acute hunger and malnutrition.',
        vi: 'Hạn hán và chiến tranh đã đẩy hàng triệu thường dân vào cảnh đói khát gay gắt và suy dinh dưỡng.',
      },
    ],
    synonyms: [
      { term: 'starvation', vi: 'nạn đói nghiêm trọng' },
      { term: 'famine', vi: 'nạn đói kém' },
      { term: 'appetite', vi: 'sự thèm ăn' },
    ],
    antonyms: [
      { term: 'fullness', vi: 'sự no nê' },
      { term: 'satiety', vi: 'trạng thái no đủ' },
    ],
  },

  {
    id: 'immune',
    term: 'immune',
    partOfSpeech: 'adj.',
    phoneticUs: '/ɪˈmjuːn/',
    phoneticUk: '/ɪˈmjuːn/',
    definitionVi: 'miễn dịch, có khả năng kháng bệnh; được miễn trừ trách nhiệm/hình phạt',
    definitionEn: 'resistant to a particular infection or toxin owing to the presence of specific antibodies; protected or exempt, especially from an obligation or the effects of something',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'mun', rootName: 'Mun', meaningVi: 'nghĩa vụ, thuế khóa, phục vụ (Latin: munus)' },
    ],
    anatomy: {
      prefix: 'in- (biến âm im-)',
      prefixVi: 'không, miễn trừ',
      rootParts: [
        { text: 'mun-', rootId: 'mun', rootName: 'Mun', meaningVi: 'nghĩa vụ, cống nạp (Latin: munus)' },
      ],
      formula: 'im- (miễn) + mun- (nghĩa vụ/tổn thương) → immune (được miễn trừ khỏi sự tấn công của mầm bệnh)',
      explanation: 'Thời La Mã, "immunis" dùng để chỉ người được miễn đóng thuế hoặc nghĩa vụ quân sự.',
    },
    wordFamily: {
      nouns: [
        { term: 'immunity', vi: 'sự miễn dịch, quyền miễn trừ' },
        { term: 'immunization', vi: 'sự tiêm chủng tạo miễn dịch' },
        { term: 'immunology', vi: 'miễn dịch học' },
      ],
      verbs: [
        { term: 'immunize', vi: 'tiêm chủng tạo miễn dịch' },
      ],
      adjectives: [
        { term: 'immune', vi: 'miễn dịch, miễn nhiễm' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'immune system',
        vi: 'hệ thống miễn dịch',
        example: 'Vitamin C and adequate rest help bolster your immune system.',
      },
      {
        phrase: 'immune response',
        vi: 'phản ứng miễn dịch',
        example: 'Vaccines stimulate a strong immune response against viral pathogens.',
      },
      {
        phrase: 'immune to criticism',
        vi: 'miễn nhiễm với những lời chỉ trích',
        example: 'The experienced leader seemed completely immune to unfair criticism.',
      },
    ],
    examples: [
      {
        en: 'People who recovered from the virus developed antibodies that made them temporarily immune.',
        vi: 'Những người đã hồi phục sau khi nhiễm virus đã tạo ra các kháng thể giúp họ có khả năng miễn dịch tạm thời.',
      },
    ],
    synonyms: [
      { term: 'resistant', vi: 'có sức đề kháng' },
      { term: 'invulnerable', vi: 'không thể bị tổn thương' },
      { term: 'exempt', vi: 'được miễn trừ' },
    ],
    antonyms: [
      { term: 'susceptible', vi: 'dễ bị lây nhiễm / tổn thương' },
      { term: 'vulnerable', vi: 'yếu ớt, dễ bị công kích' },
    ],
  },

  {
    id: 'medication',
    term: 'medication',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌmed.əˈkeɪ.ʃən/',
    phoneticUk: '/ˌmed.ɪˈkeɪ.ʃn/',
    definitionVi: 'thuốc men, dược phẩm được bác sĩ kê đơn để chữa bệnh',
    definitionEn: 'a substance used for medical treatment, especially a drug or drugs taken for illness',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'med', rootName: 'Med', meaningVi: 'chữa trị, xem xét (Latin: mederi)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'medic-', rootId: 'med', rootName: 'Med', meaningVi: 'thầy thuốc, chữa bệnh (Latin: medicus)' },
      ],
      suffix: '-ation',
      suffixVi: 'danh từ chỉ chất / quá trình',
      formula: 'medicate + -ion → medication (dược chất dùng để chữa trị bệnh)',
      explanation: 'Bắt nguồn từ tiếng Latin "mederi" (chữa bệnh, săn sóc).',
    },
    wordFamily: {
      nouns: [
        { term: 'medication', vi: 'dược phẩm, thuốc điều trị' },
        { term: 'medicine', vi: 'thuốc, y học' },
      ],
      verbs: [
        { term: 'medicate', vi: 'dùng thuốc, điều trị bằng thuốc' },
      ],
      adjectives: [
        { term: 'medical', vi: 'thuộc về y tế' },
        { term: 'medicated', vi: 'có tẩm thuốc' },
      ],
      adverbs: [
        { term: 'medically', vi: 'về mặt y khoa' },
      ],
    },
    collocations: [
      {
        phrase: 'prescribe medication',
        vi: 'kê đơn thuốc',
        example: 'The doctor prescribed strong antibiotic medication for the chest infection.',
      },
      {
        phrase: 'take medication regularly',
        vi: 'uống thuốc đều đặn',
        example: 'It is essential to take hypertension medication regularly as directed.',
      },
    ],
    examples: [
      {
        en: 'Always consult your pharmacist regarding possible side effects before starting any new medication.',
        vi: 'Hãy luôn hỏi ý kiến dược sĩ về các tác dụng phụ có thể xảy ra trước khi bắt đầu dùng bất kỳ loại thuốc mới nào.',
      },
    ],
    synonyms: [
      { term: 'pharmaceutical', vi: 'dược phẩm' },
      { term: 'remedy', vi: 'phương thuốc chữa bệnh' },
      { term: 'prescription drug', vi: 'thuốc kê đơn' },
    ],
    antonyms: [],
  },

  {
    id: 'nutrition',
    term: 'nutrition',
    partOfSpeech: 'n.',
    phoneticUs: '/nuːˈtrɪʃ.ən/',
    phoneticUk: '/njuːˈtrɪʃ.n/',
    definitionVi: 'sự dinh dưỡng, các chất dinh dưỡng cần thiết cho sự sống và phát triển',
    definitionEn: 'the process of providing or obtaining the food necessary for health and growth',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'nutri', rootName: 'Nutri', meaningVi: 'nuôi dưỡng, bú sữa (Latin: nutrire)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'nutr-', rootId: 'nutri', rootName: 'Nutri', meaningVi: 'nuôi dưỡng (Latin: nutrire)' },
      ],
      suffix: '-ition',
      suffixVi: 'quá trình, trạng thái',
      formula: 'nutrire (nuôi nấng) + -ition → nutrition (quá trình hấp thụ dưỡng chất nuôi cơ thể)',
      explanation: 'Gốc từ tiếng Latin "nutrire" sinh ra các từ như nurse (y tá, cho bú), nurture (nuôi dưỡng).',
    },
    wordFamily: {
      nouns: [
        { term: 'nutrition', vi: 'dinh dưỡng' },
        { term: 'nutrient', vi: 'chất dinh dưỡng' },
        { term: 'nutritionist', vi: 'chuyên gia dinh dưỡng' },
        { term: 'malnutrition', vi: 'sự suy dinh dưỡng' },
      ],
      verbs: [
        { term: 'nourish', vi: 'nuôi dưỡng, bồi bổ' },
      ],
      adjectives: [
        { term: 'nutritional', vi: 'thuộc về dinh dưỡng' },
        { term: 'nutritious', vi: 'bổ dưỡng, giàu dinh dưỡng' },
      ],
      adverbs: [
        { term: 'nutritionally', vi: 'về phương diện dinh dưỡng' },
      ],
    },
    collocations: [
      {
        phrase: 'proper / balanced nutrition',
        vi: 'chế độ dinh dưỡng hợp lý / cân bằng',
        example: 'Proper nutrition is critical for the physical and cognitive development of children.',
      },
      {
        phrase: 'poor nutrition',
        vi: 'dinh dưỡng kém cỏi',
        example: 'Poor nutrition can weaken the immune system and increase vulnerability to disease.',
      },
    ],
    examples: [
      {
        en: 'The school implemented a new cafeteria menu focusing on fresh vegetables and optimal nutrition.',
        vi: 'Trường học đã áp dụng thực đơn căng tin mới tập trung vào rau củ tươi và chế độ dinh dưỡng tối ưu.',
      },
    ],
    synonyms: [
      { term: 'nourishment', vi: 'sự nuôi dưỡng' },
      { term: 'sustenance', vi: 'chất duy trì sự sống' },
      { term: 'food intake', vi: 'lượng thức ăn nạp vào' },
    ],
    antonyms: [
      { term: 'malnutrition', vi: 'suy dinh dưỡng' },
    ],
  },

  {
    id: 'obesity',
    term: 'obesity',
    partOfSpeech: 'n.',
    phoneticUs: '/oʊˈbiː.sə.t̬i/',
    phoneticUk: '/əʊˈbiː.sə.ti/',
    definitionVi: 'bệnh béo phì, tình trạng tích tụ mỡ thừa nghiêm trọng gây hại cho sức khỏe',
    definitionEn: 'the state or condition of being grossly fat or overweight, to the extent that it endangers health',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'ed_es', rootName: 'Ed, Es', meaningVi: 'ăn, nuốt (Latin: edere)' },
    ],
    anatomy: {
      prefix: 'ob-',
      prefixVi: 'quá mức, hoàn toàn',
      rootParts: [
        { text: 'es-', rootId: 'ed_es', rootName: 'Ed, Es', meaningVi: 'ăn (Latin: obesus - ăn đến đẫy đà)' },
      ],
      suffix: '-ity',
      suffixVi: 'tình trạng, trạng thái',
      formula: 'ob- (quá độ) + es- (ăn) + -ity → obesity (tình trạng cơ thể tích mỡ do dung nạp năng lượng quá mức)',
      explanation: 'Bắt nguồn từ tiếng Latin "obesus" (người đã ăn quá nhiều).',
    },
    wordFamily: {
      nouns: [
        { term: 'obesity', vi: 'bệnh béo phì' },
      ],
      verbs: [],
      adjectives: [
        { term: 'obese', vi: 'bị béo phì' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'childhood obesity',
        vi: 'bệnh béo phì ở trẻ em',
        example: 'Childhood obesity rates have tripled over the past three decades.',
      },
      {
        phrase: 'combat / tackle obesity',
        vi: 'chống lại / giải quyết nạn béo phì',
        example: 'Public health campaigns promote active lifestyles to combat rising obesity.',
      },
    ],
    examples: [
      {
        en: 'Obesity significantly elevates the risk of cardiovascular disease, stroke, and type 2 diabetes.',
        vi: 'Bệnh béo phì làm tăng đáng kể nguy cơ mắc bệnh tim mạch, đột quỵ và tiểu đường tuýp 2.',
      },
    ],
    synonyms: [
      { term: 'corpulence', vi: 'sự đẫy đà béo tốt' },
      { term: 'overweight', vi: 'thừa cân' },
    ],
    antonyms: [
      { term: 'underweight', vi: 'thiếu cân' },
      { term: 'leanness', vi: 'sự thon gọn, gầy' },
      { term: 'emaciation', vi: 'sự gầy còm đói ăn' },
    ],
  },

  {
    id: 'palm',
    term: 'palm',
    partOfSpeech: 'n.',
    phoneticUs: '/pɑːm/',
    phoneticUk: '/pɑːm/',
    definitionVi: 'lòng bàn tay; cây cọ, cây dừa',
    definitionEn: 'the inner surface of the hand between the wrist and the bases of the fingers; an unbranched evergreen tree of tropical and warm regions',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'palm', rootName: 'Palm', meaningVi: 'phẳng, rộng (Latin: palma)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'palma', rootId: 'palm', rootName: 'Palm', meaningVi: 'lòng bàn tay phẳng rộng (Latin: palma)' },
      ],
      formula: 'palma (lòng bàn tay xòe ra) → palm (lòng bàn tay / cây cọ lá xòe như bàn tay)',
      explanation: 'Cây cọ được đặt tên là "palm tree" vì các phiến lá xòe rộng trông giống như lòng bàn tay mở.',
    },
    wordFamily: {
      nouns: [
        { term: 'palm', vi: 'lòng bàn tay, cây cọ' },
        { term: 'palmist', vi: 'thầy xem bói tướng tay' },
        { term: 'palmistry', vi: 'thuật xem chỉ tay' },
      ],
      verbs: [
        { term: 'palm', vi: 'giấu vật gì vào lòng bàn tay' },
      ],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'sweaty / clammy palms',
        vi: 'lòng bàn tay đổ mồ hôi do lo lắng',
        example: 'His sweaty palms revealed how nervous he felt before giving the speech.',
      },
      {
        phrase: 'in the palm of one’s hand',
        vi: 'nằm gọn trong lòng bàn tay (hoàn toàn kiểm soát)',
        example: 'The skilled negotiator held the outcome of the deal in the palm of her hand.',
      },
    ],
    examples: [
      {
        en: 'She rested her chin in the palm of her hand while gazing out the rain-streaked window.',
        vi: 'Cô chống cằm vào lòng bàn tay trong khi nhìn ra ngoài khung cửa sổ ướt đẫm nước mưa.',
      },
    ],
    synonyms: [
      { term: 'hand surface', vi: 'mặt trong bàn tay' },
    ],
    antonyms: [
      { term: 'back of hand', vi: 'mu bàn tay' },
    ],
  },

  {
    id: 'panic',
    term: 'panic',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈpæn.ɪk/',
    phoneticUk: '/ˈpæn.ɪk/',
    definitionVi: 'sự hoảng loạn, cơn kinh sợ đột ngột làm mất khả năng phán đoán',
    definitionEn: 'sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'pan_god', rootName: 'Pan', meaningVi: 'Thần rừng Pan trong thần thoại Hy Lạp' },
    ],
    anatomy: {
      rootParts: [
        { text: 'Pan', rootId: 'pan_god', rootName: 'Pan', meaningVi: 'Thần rừng gieo rắc nỗi khiếp đảm vô cớ (Hy Lạp: Panikos)' },
      ],
      suffix: '-ic',
      suffixVi: 'thuộc về',
      formula: 'Pan (thần rừng) + -ic → panic (nỗi sợ hãi kinh hoàng do thần Pan tạo ra)',
      explanation: 'Thần thoại Hy Lạp kể rằng thần Pan hay phát ra tiếng hét làm người đi lạc trong rừng hoảng sợ tột độ.',
    },
    wordFamily: {
      nouns: [
        { term: 'panic', vi: 'sự hoảng loạn' },
      ],
      verbs: [
        { term: 'panic', vi: 'hoảng loạn, hốt hoảng' },
      ],
      adjectives: [
        { term: 'panicky', vi: 'dễ hoảng hốt, sợ sệt' },
        { term: 'panicked', vi: 'đang trong trạng thái hoảng loạn' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'panic attack',
        vi: 'cơn hoảng loạn cấp tính',
        example: 'Symptoms of a panic attack include shortness of breath and a racing heartbeat.',
      },
      {
        phrase: 'cause / trigger widespread panic',
        vi: 'gây ra sự hoảng loạn trên diện rộng',
        example: 'False alarm sirens triggered widespread panic in the crowded subway station.',
      },
    ],
    examples: [
      {
        en: 'Stay calm and avoid panic during an emergency evacuation to ensure everyone escapes safely.',
        vi: 'Hãy giữ bình tĩnh và tránh hoảng loạn trong khi sơ tán khẩn cấp để đảm bảo mọi người thoát hiểm an toàn.',
      },
    ],
    synonyms: [
      { term: 'terror', vi: 'sự kinh hoàng' },
      { term: 'hysteria', vi: 'sự hoảng loạn cuồng loạn' },
      { term: 'frenzy', vi: 'sự điên cuồng' },
    ],
    antonyms: [
      { term: 'calm', vi: 'sự bình tĩnh' },
      { term: 'composure', vi: 'sự điềm tĩnh' },
    ],
  },

  {
    id: 'patience',
    term: 'patience',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈpeɪ.ʃəns/',
    phoneticUk: '/ˈpeɪ.ʃns/',
    definitionVi: 'sự nhẫn nại, lòng kiên nhẫn, khả năng chịu đựng khó khăn không nóng vội',
    definitionEn: 'the capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'pati', rootName: 'Pati', meaningVi: 'chịu đựng, đau đớn (Latin: pati)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'pati-', rootId: 'pati', rootName: 'Pati', meaningVi: 'chịu đựng (Latin: pati)' },
      ],
      suffix: '-ence',
      suffixVi: 'danh từ chỉ đức tính / phẩm chất',
      formula: 'pati- (chịu đựng) + -ence → patience (phẩm chất chịu đựng nhẫn nại mà không than phiền)',
      explanation: 'Cùng gốc Latin với từ "patient" (bệnh nhân - người đang chịu đựng cơn đau).',
    },
    wordFamily: {
      nouns: [
        { term: 'patience', vi: 'sự kiên nhẫn' },
        { term: 'impatience', vi: 'sự nóng vội, thiếu kiên nhẫn' },
        { term: 'patient', vi: 'bệnh nhân' },
      ],
      verbs: [],
      adjectives: [
        { term: 'patient', vi: 'kiên nhẫn, nhẫn nại' },
        { term: 'impatient', vi: 'sốt ruột, nôn nóng' },
      ],
      adverbs: [
        { term: 'patiently', vi: 'một cách kiên nhẫn' },
        { term: 'impatiently', vi: 'một cách sốt ruột' },
      ],
    },
    collocations: [
      {
        phrase: 'lose one’s patience',
        vi: 'mất kiên nhẫn',
        example: 'The teacher lost his patience after explaining the formula five times.',
      },
      {
        phrase: 'require enormous patience',
        vi: 'đòi hỏi sự kiên nhẫn to lớn',
        example: 'Teaching young children to read requires enormous patience and encouragement.',
      },
    ],
    examples: [
      {
        en: 'Patience and persistence are essential virtues for conducting long-term scientific research.',
        vi: 'Sự kiên nhẫn và bền bỉ là những đức tính thiết yếu để tiến hành nghiên cứu khoa học dài hạn.',
      },
    ],
    synonyms: [
      { term: 'forbearance', vi: 'sự chịu đựng nhẫn nhịn' },
      { term: 'tolerance', vi: 'sự khoan dung chịu đựng' },
      { term: 'endurance', vi: 'sức bền bỉ' },
    ],
    antonyms: [
      { term: 'impatience', vi: 'sự nóng vội' },
      { term: 'irritability', vi: 'sự cáu bẳn' },
    ],
  },

  {
    id: 'pill',
    term: 'pill',
    partOfSpeech: 'n.',
    phoneticUs: '/pɪl/',
    phoneticUk: '/pɪl/',
    definitionVi: 'viên thuốc nén, viên thuốc uống dạng tròn hoặc bầu dục',
    definitionEn: 'a small round or oval mass of solid medicine to be swallowed whole',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'pil', rootName: 'Pil', meaningVi: 'quả cầu nhỏ, viên bi (Latin: pila / pilula)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'pilula', rootId: 'pil', rootName: 'Pil', meaningVi: 'quả cầu nhỏ (Latin: pilula)' },
      ],
      formula: 'pilula (viên cầu nhỏ) → pill (viên thuốc nén)',
      explanation: 'Bắt nguồn từ tiếng Latin "pilula", dạng thu nhỏ của "pila" (quả bóng nhỏ).',
    },
    wordFamily: {
      nouns: [
        { term: 'pill', vi: 'viên thuốc' },
      ],
      verbs: [],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'swallow a pill',
        vi: 'nuốt một viên thuốc',
        example: 'Drink a full glass of water when swallowing a vitamin pill.',
      },
      {
        phrase: 'sleeping / diet pill',
        vi: 'thuốc ngủ / thuốc giảm cân',
        example: 'Doctors caution against the long-term reliance on sleeping pills.',
      },
      {
        phrase: 'a bitter pill to swallow',
        vi: 'sự thật cay đắng phải chấp nhận (thành ngữ)',
        example: 'Failing the final interview was a bitter pill to swallow for the candidate.',
      },
    ],
    examples: [
      {
        en: 'The doctor instructed her to take two painkiller pills every eight hours after meals.',
        vi: 'Bác sĩ hướng dẫn cô uống hai viên thuốc giảm đau mỗi tám tiếng sau bữa ăn.',
      },
    ],
    synonyms: [
      { term: 'tablet', vi: 'viên thuốc dẹt' },
      { term: 'capsule', vi: 'viên thuốc nang' },
      { term: 'lozenge', vi: 'viên thuốc ngậm' },
    ],
    antonyms: [],
  },

  {
    id: 'protein',
    term: 'protein',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈproʊ.tiːn/',
    phoneticUk: '/ˈprəʊ.tiːn/',
    definitionVi: 'chất đạm, protein (hợp chất hữu cơ thiết yếu cấu tạo nên cơ bắp và mô tế bào)',
    definitionEn: 'any of a class of nitrogenous organic compounds that are an essential part of all living organisms',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'prot', rootName: 'Prot', meaningVi: 'đầu tiên, đứng hàng đầu, nguyên thủy (Hy Lạp: protos)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'proteios', rootId: 'prot', rootName: 'Prot', meaningVi: 'đứng hàng đầu, quan trọng nhất (Hy Lạp: proteios)' },
      ],
      suffix: '-in',
      suffixVi: 'hậu tố hóa học chỉ protein/chất',
      formula: 'proteios (tối quan trọng) + -in → protein (hợp chất quan trọng hàng đầu của sự sống)',
      explanation: 'Nhà hóa học Mulder đặt tên vào năm 1838 để chỉ chất hữu cơ thiết yếu hàng đầu.',
    },
    wordFamily: {
      nouns: [
        { term: 'protein', vi: 'chất đạm' },
      ],
      verbs: [],
      adjectives: [
        { term: 'proteinaceous', vi: 'giàu chất đạm' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'high-protein diet',
        vi: 'chế độ ăn giàu đạm',
        example: 'Athletes often follow a high-protein diet to accelerate muscle recovery.',
      },
      {
        phrase: 'protein synthesis',
        vi: 'sự tổng hợp protein trong tế bào',
        example: 'Ribosomes are the cellular organelles responsible for protein synthesis.',
      },
    ],
    examples: [
      {
        en: 'Eggs, lean meats, beans, and nuts are excellent dietary sources of protein.',
        vi: 'Trứng, thịt nạc, các loại đậu và hạt là những nguồn cung cấp protein tuyệt vời trong khẩu phần ăn.',
      },
    ],
    synonyms: [
      { term: 'amino acid chain', vi: 'chuỗi axit amin' },
    ],
    antonyms: [],
  },

  {
    id: 'psychological',
    term: 'psychological',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˌsaɪ.kəˈlɑː.dʒɪ.kəl/',
    phoneticUk: '/ˌsaɪ.kəˈlɒdʒ.ɪ.kl/',
    definitionVi: 'thuộc về tâm lý học, liên quan đến tinh thần và hành vi của con người',
    definitionEn: 'related to the mental and emotional state of a person; of or relating to the study of psychology',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'psycho', rootName: 'Psycho', meaningVi: 'tâm hồn, tâm trí, hơi thở (Hy Lạp: psyche)' },
      { rootId: 'logy', rootName: 'Logy', meaningVi: 'ngành học (Hy Lạp: logos)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'psyche-', rootId: 'psycho', rootName: 'Psycho', meaningVi: 'tâm trí (Hy Lạp: psyche)' },
        { text: 'log-', rootId: 'logy', rootName: 'Logy', meaningVi: 'ngành học' },
      ],
      suffix: '-ical',
      suffixVi: 'tính từ',
      formula: 'psyche (tâm trí) + logy (ngành học) + -ical → psychological (thuộc về khoa học tâm lý)',
      explanation: 'Trong thần thoại Hy Lạp, Psyche là hiện thân của tâm hồn và linh hồn con người.',
    },
    wordFamily: {
      nouns: [
        { term: 'psychology', vi: 'tâm lý học' },
        { term: 'psychologist', vi: 'nhà tâm lý học' },
        { term: 'psychiatry', vi: 'tâm thần học' },
      ],
      verbs: [],
      adjectives: [
        { term: 'psychological', vi: 'thuộc tâm lý' },
        { term: 'psychiatric', vi: 'thuộc tâm thần' },
      ],
      adverbs: [
        { term: 'psychologically', vi: 'về mặt tâm lý' },
      ],
    },
    collocations: [
      {
        phrase: 'psychological trauma / distress',
        vi: 'tổn thương / đau khổ về mặt tâm lý',
        example: 'Survivors of the natural disaster received counseling for psychological trauma.',
      },
      {
        phrase: 'psychological evaluation / assessment',
        vi: 'đánh giá / thẩm định tâm lý',
        example: 'Candidates underwent a comprehensive psychological assessment during screening.',
      },
    ],
    examples: [
      {
        en: 'Chronic stress can lead to profound psychological and physical health issues over time.',
        vi: 'Căng thẳng mãn tính có thể dẫn đến những vấn đề sức khỏe thể chất và tâm lý sâu sắc theo thời gian.',
      },
    ],
    synonyms: [
      { term: 'mental', vi: 'thuộc tinh thần' },
      { term: 'emotional', vi: 'thuộc cảm xúc' },
      { term: 'cognitive', vi: 'thuộc nhận thức' },
    ],
    antonyms: [
      { term: 'physical', vi: 'thuộc thể chất' },
      { term: 'somatic', vi: 'thuộc cơ thể' },
    ],
  },

  {
    id: 'recovery',
    term: 'recovery',
    partOfSpeech: 'n.',
    phoneticUs: '/rɪˈkʌv.ɚ.i/',
    phoneticUk: '/rɪˈkʌv.ər.i/',
    definitionVi: 'sự phục hồi sức khỏe sau bệnh tật; sự lấy lại tài sản/kinh tế',
    definitionEn: 'a return to a normal state of health, mind, or strength; the action or process of regaining possession or control of something lost',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'cap_cip', rootName: 'Cap, Cip', meaningVi: 'bắt lấy, giữ lấy (Latin: capere)' },
    ],
    anatomy: {
      prefix: 're-',
      prefixVi: 'lại, quay trở lại',
      rootParts: [
        { text: 'cuper-', rootId: 'cap_cip', rootName: 'Cap, Cip', meaningVi: 'lấy lại (Latin: recuperare)' },
      ],
      suffix: '-y',
      suffixVi: 'danh từ chỉ sự việc',
      formula: 're- (lại) + cuper (lấy lại sức lực) + -y → recovery (quá trình lấy lại trạng thái khỏe mạnh ban đầu)',
      explanation: 'Bắt nguồn từ tiếng Pháp cổ "recovrer" (lấy lại những gì đã mất).',
    },
    wordFamily: {
      nouns: [
        { term: 'recovery', vi: 'sự phục hồi' },
      ],
      verbs: [
        { term: 'recover', vi: 'hồi phục, lấy lại' },
      ],
      adjectives: [
        { term: 'recoverable', vi: 'có thể phục hồi được' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'make a full / speedy recovery',
        vi: 'hồi phục hoàn toàn / nhanh chóng',
        example: 'Doctors expect the athlete to make a full recovery after knee surgery.',
      },
      {
        phrase: 'recovery room',
        vi: 'phòng hồi sức sau phẫu thuật',
        example: 'The patient was monitored in the recovery room until the anesthesia wore off.',
      },
    ],
    examples: [
      {
        en: 'Physical therapy plays a pivotal role in accelerating the recovery of stroke patients.',
        vi: 'Vật lý trị liệu đóng vai trò then chốt trong việc đẩy nhanh sự hồi phục của bệnh nhân đột quỵ.',
      },
    ],
    synonyms: [
      { term: 'recuperation', vi: 'sự tĩnh dưỡng hồi sức' },
      { term: 'rehabilitation', vi: 'sự phục hồi chức năng' },
      { term: 'restoration', vi: 'sự phục hồi trạng thái cũ' },
    ],
    antonyms: [
      { term: 'deterioration', vi: 'sự xấu đi, suy giảm' },
      { term: 'relapse', vi: 'sự tái phát bệnh' },
    ],
  },

  {
    id: 'relieve',
    term: 'relieve',
    partOfSpeech: 'v.',
    phoneticUs: '/rɪˈliːv/',
    phoneticUk: '/rɪˈliːv/',
    definitionVi: 'làm dịu bớt cơn đau/căng thẳng; giải tỏa nỗi lo; thay ca trực',
    definitionEn: 'cause pain, distress, or difficulty to become less severe or serious; release someone from duty',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'lev', rootName: 'Lev', meaningVi: 'nâng lên, làm cho nhẹ đi (Latin: levis)' },
    ],
    anatomy: {
      prefix: 're-',
      prefixVi: 'lại, nâng lên',
      rootParts: [
        { text: 'liev-', rootId: 'lev', rootName: 'Lev', meaningVi: 'nhẹ bớt (Latin: levare)' },
      ],
      formula: 're- (lại) + levare (nhấc bổng gánh nặng lên) → relieve (làm nhẹ bớt áp lực/nỗi đau)',
      explanation: 'Hình ảnh nhấc bớt gánh nặng trên vai người khác để họ thấy nhẹ nhõm.',
    },
    wordFamily: {
      nouns: [
        { term: 'relief', vi: 'sự nhẹ nhõm, cứu trợ' },
        { term: 'reliever', vi: 'thuốc giảm đau, người thay ca' },
      ],
      verbs: [
        { term: 'relieve', vi: 'làm dịu, giải tỏa' },
      ],
      adjectives: [
        { term: 'relieved', vi: 'cảm thấy nhẹ nhõm' },
        { term: 'relieving', vi: 'có tính giải tỏa' },
      ],
      adverbs: [
        { term: 'relievedly', vi: 'với vẻ nhẹ nhõm' },
      ],
    },
    collocations: [
      {
        phrase: 'relieve pain / symptoms',
        vi: 'làm dịu cơn đau / triệu chứng',
        example: 'A warm compress can effectively relieve tension headaches.',
      },
      {
        phrase: 'relieve stress / anxiety',
        vi: 'giải tỏa căng thẳng / lo âu',
        example: 'Mindfulness meditation helps relieve workplace stress.',
      },
    ],
    examples: [
      {
        en: 'The new analgesic was clinically proven to relieve acute arthritis pain within thirty minutes.',
        vi: 'Loại thuốc giảm đau mới đã được chứng minh lâm sàng là làm dịu cơn đau viêm khớp cấp tính trong vòng ba mươi phút.',
      },
    ],
    synonyms: [
      { term: 'alleviate', vi: 'làm nhẹ bớt' },
      { term: 'soothe', vi: 'xoa dịu' },
      { term: 'ease', vi: 'làm cho dễ chịu' },
      { term: 'mitigate', vi: 'giảm nhẹ' },
    ],
    antonyms: [
      { term: 'aggravate', vi: 'làm trầm trọng thêm' },
      { term: 'intensify', vi: 'làm tăng cường độ đau' },
    ],
  },

  {
    id: 'relieved',
    term: 'relieved',
    partOfSpeech: 'adj.',
    phoneticUs: '/rɪˈliːvd/',
    phoneticUk: '/rɪˈliːvd/',
    definitionVi: 'cảm thấy nhẹ nhõm, an tâm, trút bỏ được gánh nặng âu lo',
    definitionEn: 'no longer feeling distressed or anxious; feeling reassurance and peace of mind',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'lev', rootName: 'Lev', meaningVi: 'nâng lên, làm cho nhẹ' },
    ],
    anatomy: {
      prefix: 're-',
      prefixVi: 'nhấc lên',
      rootParts: [
        { text: 'liev-', rootId: 'lev', rootName: 'Lev', meaningVi: 'nhẹ nhõm' },
      ],
      suffix: '-ed',
      suffixVi: 'tính từ chỉ cảm xúc',
      formula: 'relieve + -ed → relieved (trạng thái cảm thấy gánh nặng trong lòng đã được trút bỏ)',
      explanation: 'Cảm giác thở phào nhẹ nhõm khi một điều nguy hiểm hay khó khăn đã qua đi.',
    },
    wordFamily: {
      nouns: [
        { term: 'relief', vi: 'sự nhẹ nhõm' },
      ],
      verbs: [
        { term: 'relieve', vi: 'làm nhẹ bớt' },
      ],
      adjectives: [
        { term: 'relieved', vi: 'nhẹ nhõm' },
      ],
      adverbs: [
        { term: 'relievedly', vi: 'một cách nhẹ nhõm' },
      ],
    },
    collocations: [
      {
        phrase: 'relieved to hear / know',
        vi: 'nhẹ nhõm khi nghe / biết rằng',
        example: 'She was enormously relieved to hear that her biopsy results were negative.',
      },
      {
        phrase: 'a relieved sigh / smile',
        vi: 'tiếng thở phào / nụ cười nhẹ nhõm',
        example: 'He let out a relieved sigh when the plane landed safely.',
      },
    ],
    examples: [
      {
        en: 'The worried parents felt deeply relieved when the surgeon announced the operation was a success.',
        vi: 'Các bậc cha mẹ đang lo lắng đã cảm thấy vô cùng nhẹ nhõm khi bác sĩ phẫu thuật thông báo ca mổ đã thành công.',
      },
    ],
    synonyms: [
      { term: 'reassured', vi: 'được trấn an' },
      { term: 'comforted', vi: 'được an ủi' },
      { term: 'unburdened', vi: 'được trút bỏ gánh nặng' },
    ],
    antonyms: [
      { term: 'anxious', vi: 'lo lắng bồn chồn' },
      { term: 'worried', vi: 'âu lo' },
      { term: 'distressed', vi: 'đau khổ, hoảng sợ' },
    ],
  },

  {
    id: 'skull',
    term: 'skull',
    partOfSpeech: 'n.',
    phoneticUs: '/skʌl/',
    phoneticUk: '/skʌl/',
    definitionVi: 'hộp sọ, xương sọ (bộ khung xương bảo vệ bộ não)',
    definitionEn: 'a framework of bone or cartilage enclosing the brain of a vertebrate',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'skulle', rootId: 'origin_scand', rootName: 'Old Norse', meaningVi: 'vỏ, gáo, hộp sọ (skalli)' },
      ],
      formula: 'skulle (vỏ cứng) → skull (hộp sọ bảo vệ não)',
      explanation: 'Bắt nguồn từ tiếng Bắc Âu cổ chỉ lớp vỏ bọc bảo vệ phần đầu.',
    },
    wordFamily: {
      nouns: [
        { term: 'skull', vi: 'xương sọ' },
      ],
      verbs: [],
      adjectives: [
        { term: 'cranial', vi: 'thuộc về hộp sọ (thuật ngữ y học)' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'fracture the skull',
        vi: 'làm nứt / vỡ hộp sọ',
        example: 'Helmets prevent severe impacts from fracturing the skull during cycling accidents.',
      },
      {
        phrase: 'skull and crossbones',
        vi: 'biểu tượng đầu lâu xương chéo (chỉ chất độc/cướp biển)',
        example: 'The toxic chemical container was marked with a skull and crossbones warning.',
      },
    ],
    examples: [
      {
        en: 'The human skull consists of twenty-two bones that fuse together to shield the brain.',
        vi: 'Hộp sọ người bao gồm hai mươi hai mảnh xương gắn kết lại với nhau để che chở cho bộ não.',
      },
    ],
    synonyms: [
      { term: 'cranium', vi: 'hộp sọ (thuật ngữ giải phẫu học)' },
      { term: 'braincase', vi: 'khoang sọ' },
    ],
    antonyms: [],
  },

  {
    id: 'starve',
    term: 'starve',
    partOfSpeech: 'v.',
    phoneticUs: '/stɑːrv/',
    phoneticUk: '/stɑːv/',
    definitionVi: 'bị chết đói, chịu đói khổ; bỏ đói ai đó',
    definitionEn: 'suffer severely or die from hunger; cause someone to suffer or die from lack of food',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'steorfan', rootId: 'origin_oe', rootName: 'Old English', meaningVi: 'chết, diệt vong (steorfan)' },
      ],
      formula: 'steorfan (chết) → starve (chết vì thiếu thức ăn)',
      explanation: 'Ban đầu trong tiếng Anh Cổ nghĩa là "chết nói chung", sau này thu hẹp lại thành "chết đói".',
    },
    wordFamily: {
      nouns: [
        { term: 'starvation', vi: 'nạn chết đói, sự đói lả' },
      ],
      verbs: [
        { term: 'starve', vi: 'chết đói, bỏ đói' },
      ],
      adjectives: [
        { term: 'starving', vi: 'đang đói lả' },
        { term: 'starved', vi: 'bị bỏ đói' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'starve to death',
        vi: 'chết đói',
        example: 'Without emergency international food drops, isolated villagers would starve to death.',
      },
      {
        phrase: 'starve the body of nutrients',
        vi: 'làm cơ thể thiếu hụt dưỡng chất',
        example: 'Extreme crash diets starve the body of vital vitamins and minerals.',
      },
    ],
    examples: [
      {
        en: 'Aid agencies delivered emergency grain supplies to prevent thousands from starving.',
        vi: 'Các cơ quan cứu trợ đã vận chuyển các chuyến hàng lương thực khẩn cấp để ngăn hàng nghìn người chết đói.',
      },
    ],
    synonyms: [
      { term: 'famish', vi: 'bị đói khổ' },
      { term: 'perish from hunger', vi: 'bỏ mạng vì đói' },
    ],
    antonyms: [
      { term: 'feed', vi: 'cho ăn' },
      { term: 'nourish', vi: 'nuôi nấng bồi dưỡng' },
      { term: 'feast', vi: 'ăn uống linh đình' },
    ],
  },

  {
    id: 'stroke',
    term: 'stroke',
    partOfSpeech: 'n.',
    phoneticUs: '/stroʊk/',
    phoneticUk: '/strəʊk/',
    definitionVi: 'cơn đột quỵ, tai biến mạch máu não; cú đánh/vuốt ve',
    definitionEn: 'a sudden disabling attack or loss of consciousness caused by an interruption in the flow of blood to the brain',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'stroke', rootId: 'origin_oe', rootName: 'Old English', meaningVi: 'đòn đánh bất ngờ (stroc)' },
      ],
      formula: 'stroc (đòn giáng sấm sét) → stroke (cơn đột quỵ ập đến bất ngờ như đòn trời giáng)',
      explanation: 'Thuật ngữ mô tả căn bệnh ập đến đột ngột như một cú đánh bất thình lình làm tê liệt cơ thể.',
    },
    wordFamily: {
      nouns: [
        { term: 'stroke', vi: 'cơn đột quỵ, cú đánh' },
      ],
      verbs: [
        { term: 'stroke', vi: 'vuốt ve nhẹ nhàng' },
      ],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'suffer / have a stroke',
        vi: 'bị đột quỵ',
        example: 'He was rushed to the neurological unit after having a mild stroke.',
      },
      {
        phrase: 'stroke symptoms',
        vi: 'các triệu chứng đột quỵ (méo miệng, yếu tay, khó nói)',
        example: 'Recognizing early stroke symptoms using the FAST method saves lives.',
      },
    ],
    examples: [
      {
        en: 'Prompt medical intervention within the first three hours of a stroke minimizes permanent brain damage.',
        vi: 'Sự can thiệp y tế kịp thời trong ba giờ đầu tiên của cơn đột quỵ sẽ giảm thiểu tối đa tổn thương não vĩnh viễn.',
      },
    ],
    synonyms: [
      { term: 'cerebrovascular accident', vi: 'tai biến mạch máu não (CVA)' },
      { term: 'brain attack', vi: 'cơn đột quỵ não' },
    ],
    antonyms: [],
  },

  {
    id: 'suffering',
    term: 'suffering',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈsʌf.ɚ.ɪŋ/',
    phoneticUk: '/ˈsʌf.ər.ɪŋ/',
    definitionVi: 'sự đau đớn, nỗi thống khổ, sự chịu đựng tổn thương về thể xác hoặc tinh thần',
    definitionEn: 'the state of undergoing pain, distress, or hardship',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'fer', rootName: 'Fer', meaningVi: 'mang, vác, chịu đựng (Latin: ferre)' },
    ],
    anatomy: {
      prefix: 'sub- (biến âm suf-)',
      prefixVi: 'từ bên dưới',
      rootParts: [
        { text: 'fer-', rootId: 'fer', rootName: 'Fer', meaningVi: 'gánh vác (Latin: ferre)' },
      ],
      suffix: '-ing',
      suffixVi: 'danh động từ chỉ trạng thái',
      formula: 'suf- (từ dưới) + fer (gánh vác) + -ing → suffering (trạng thái oằn mình gánh chịu đau đớn)',
      explanation: 'Bắt nguồn từ tiếng Latin "sufferre" (chống đỡ sức nặng từ bên dưới).',
    },
    wordFamily: {
      nouns: [
        { term: 'suffering', vi: 'nỗi thống khổ, sự đau đớn' },
        { term: 'sufferer', vi: 'người chịu cảnh đau ốm' },
      ],
      verbs: [
        { term: 'suffer', vi: 'chịu đựng đau khổ' },
      ],
      adjectives: [
        { term: 'insufferable', vi: 'không thể chịu nổi' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'alleviate / ease human suffering',
        vi: 'làm giảm bớt nỗi đau khổ của nhân loại',
        example: 'Humanitarian organizations aim to alleviate suffering in war-torn regions.',
      },
      {
        phrase: 'intense physical suffering',
        vi: 'nỗi đau đớn thể xác dữ dội',
        example: 'Morphine was administered to ease the patient’s intense physical suffering.',
      },
    ],
    examples: [
      {
        en: 'The documentary highlighted the immense suffering endured by refugees fleeing the conflict.',
        vi: 'Bộ phim tài liệu đã nêu bật nỗi thống khổ to lớn mà những người tị nạn phải chịu đựng khi chạy trốn khỏi cuộc xung đột.',
      },
    ],
    synonyms: [
      { term: 'anguish', vi: 'nỗi thống khổ tột cùng' },
      { term: 'agony', vi: 'cơn đau đớn quằn quại' },
      { term: 'misery', vi: 'nỗi khốn cùng' },
      { term: 'torment', vi: 'sự dày vò' },
    ],
    antonyms: [
      { term: 'bliss', vi: 'niềm hạnh phúc tột đỉnh' },
      { term: 'comfort', vi: 'sự an ủi, thoải mái' },
      { term: 'joy', vi: 'niềm vui sướng' },
    ],
  },

  {
    id: 'surgeon',
    term: 'surgeon',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈsɝː.dʒən/',
    phoneticUk: '/ˈsɜː.dʒən/',
    definitionVi: 'bác sĩ phẫu thuật, chuyên gia y khoa thực hiện các ca mổ',
    definitionEn: 'a medical practitioner qualified to practice surgery',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'chir', rootName: 'Chir', meaningVi: 'bàn tay (Hy Lạp: cheir)' },
      { rootId: 'erg', rootName: 'Erg', meaningVi: 'công việc, lao động (Hy Lạp: ergon)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'cheir (tay) + ergon (việc làm)', rootId: 'chir', rootName: 'Chir', meaningVi: 'người làm việc bằng đôi bàn tay khéo léo (Hy Lạp: kheirourgos)' },
      ],
      suffix: '-on',
      suffixVi: 'người làm nghề',
      formula: 'cheir (bàn tay) + ergon (thao tác) → surgeon (người thực hiện thủ thuật khéo léo bằng tay)',
      explanation: 'Bắt nguồn từ tiếng Hy Lạp cổ "kheirourgos" (thợ thủ công chữa bệnh bằng đôi tay).',
    },
    wordFamily: {
      nouns: [
        { term: 'surgeon', vi: 'bác sĩ phẫu thuật' },
        { term: 'surgery', vi: 'khoa phẫu thuật, ca phẫu thuật' },
      ],
      verbs: [],
      adjectives: [
        { term: 'surgical', vi: 'thuộc về phẫu thuật' },
      ],
      adverbs: [
        { term: 'surgically', vi: 'bằng phương pháp phẫu thuật' },
      ],
    },
    collocations: [
      {
        phrase: 'orthopedic / cardiac surgeon',
        vi: 'bác sĩ phẫu thuật chỉnh hình / tim mạch',
        example: 'A team of cardiac surgeons successfully performed the ten-hour heart transplant.',
      },
      {
        phrase: 'skilled / leading surgeon',
        vi: 'bác sĩ phẫu thuật lành nghề / hàng đầu',
        example: 'She is recognized as one of the country’s leading neurosurgeons.',
      },
    ],
    examples: [
      {
        en: 'The surgeon used minimally invasive robotic instruments to perform the delicate operation.',
        vi: 'Bác sĩ phẫu thuật đã sử dụng các thiết bị robot xâm lấn tối thiểu để thực hiện ca mổ tinh vi.',
      },
    ],
    synonyms: [
      { term: 'operating physician', vi: 'bác sĩ mổ' },
      { term: 'surgical specialist', vi: 'chuyên gia ngoại khoa' },
    ],
    antonyms: [],
  },

  {
    id: 'survival',
    term: 'survival',
    partOfSpeech: 'n.',
    phoneticUs: '/sɚˈvaɪ.vəl/',
    phoneticUk: '/səˈvaɪ.vl/',
    definitionVi: 'sự sống sót, sự sinh tồn, khả năng vượt qua hiểm cảnh',
    definitionEn: 'the state or fact of continuing to live or exist, typically in spite of an accident, ordeal, or difficult circumstances',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'viv_vit', rootName: 'Viv, Vit', meaningVi: 'sống, sinh tồn (Latin: vivere)' },
    ],
    anatomy: {
      prefix: 'sur- (super-)',
      prefixVi: 'vượt lên trên',
      rootParts: [
        { text: 'viv-', rootId: 'viv_vit', rootName: 'Viv, Vit', meaningVi: 'sống (Latin: vivere)' },
      ],
      suffix: '-al',
      suffixVi: 'danh từ chỉ sự việc',
      formula: 'sur- (vượt lên) + viv (sống) + -al → survival (sống vượt qua nghịch cảnh)',
      explanation: 'Khả năng duy trì sự sống sau khi vượt qua thử thách nguy hiểm tính mạng.',
    },
    wordFamily: {
      nouns: [
        { term: 'survival', vi: 'sự sống sót' },
        { term: 'survivor', vi: 'người sống sót' },
        { term: 'survivalist', vi: 'người rèn luyện kỹ năng sinh tồn' },
      ],
      verbs: [
        { term: 'survive', vi: 'sống sót, qua khỏi' },
      ],
      adjectives: [
        { term: 'surviving', vi: 'còn sống sót' },
        { term: 'survivable', vi: 'có thể qua khỏi được' },
      ],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'survival rate',
        vi: 'tỷ lệ sống sót',
        example: 'Early detection of cancer significantly increases the five-year survival rate.',
      },
      {
        phrase: 'survival kit / skills',
        vi: 'bộ đồ dùng / kỹ năng sinh tồn',
        example: 'Hikers should always carry an emergency survival kit containing a compass and water purification tablets.',
      },
    ],
    examples: [
      {
        en: 'In extreme wilderness environments, access to clean drinking water is essential for basic survival.',
        vi: 'Trong môi trường hoang dã khắc nghiệt, việc tiếp cận nguồn nước uống sạch là điều cốt yếu để sinh tồn cơ bản.',
      },
    ],
    synonyms: [
      { term: 'continuation', vi: 'sự tiếp diễn sự sống' },
      { term: 'persistence', vi: 'sự tồn tại bền bỉ' },
      { term: 'endurance', vi: 'sự dẻo dai chống chọi' },
    ],
    antonyms: [
      { term: 'extinction', vi: 'sự tuyệt chủng' },
      { term: 'death', vi: 'cái chết' },
      { term: 'demise', vi: 'sự lụi tàn' },
    ],
  },

  {
    id: 'therapist',
    term: 'therapist',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈθer.ə.pɪst/',
    phoneticUk: '/ˈθer.ə.pɪst/',
    definitionVi: 'bác sĩ trị liệu, chuyên gia trị liệu tâm lý hoặc vật lý trị liệu',
    definitionEn: 'a person trained in methods of treatment and rehabilitation other than the use of drugs or surgery',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'therap', rootName: 'Therap', meaningVi: 'chăm sóc, chữa trị (Hy Lạp: therapeia)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'therap-', rootId: 'therap', rootName: 'Therap', meaningVi: 'chữa trị (Hy Lạp: therapeuein)' },
      ],
      suffix: '-ist',
      suffixVi: 'chuyên gia thực hiện',
      formula: 'therap (chữa trị) + -ist → therapist (chuyên gia chăm sóc và phục hồi sức khỏe)',
      explanation: 'Bắt nguồn từ tiếng Hy Lạp "therapeutes" (người phục vụ, săn sóc người ốm).',
    },
    wordFamily: {
      nouns: [
        { term: 'therapist', vi: 'chuyên gia trị liệu' },
        { term: 'therapy', vi: 'liệu pháp điều trị' },
        { term: 'physiotherapist', vi: 'chuyên viên vật lý trị liệu' },
        { term: 'psychotherapist', vi: 'chuyên gia tâm lý trị liệu' },
      ],
      verbs: [],
      adjectives: [
        { term: 'therapeutic', vi: 'mang tính chữa lành, trị liệu' },
      ],
      adverbs: [
        { term: 'therapeutically', vi: 'theo phương pháp trị liệu' },
      ],
    },
    collocations: [
      {
        phrase: 'speech / physical therapist',
        vi: 'chuyên gia ngôn ngữ trị liệu / vật lý trị liệu',
        example: 'A physical therapist helped the athlete rebuild knee strength after surgery.',
      },
      {
        phrase: 'see a therapist',
        vi: 'đi khám / gặp chuyên gia tâm lý',
        example: 'Seeing a licensed therapist helped him manage chronic anxiety and grief.',
      },
    ],
    examples: [
      {
        en: 'The occupational therapist assisted stroke survivors in relearning essential daily tasks like writing.',
        vi: 'Chuyên gia hoạt động trị liệu đã hỗ trợ những người sống sót sau đột quỵ học lại các công việc thường nhật như viết lách.',
      },
    ],
    synonyms: [
      { term: 'counselor', vi: 'người tư vấn tâm lý' },
      { term: 'healer', vi: 'thầy thuốc chữa lành' },
      { term: 'practitioner', vi: 'người hành nghề y' },
    ],
    antonyms: [],
  },

  {
    id: 'thumb',
    term: 'thumb',
    partOfSpeech: 'n.',
    phoneticUs: '/θʌm/',
    phoneticUk: '/θʌm/',
    definitionVi: 'ngón tay cái (ngón ngắn và to nhất trên bàn tay)',
    definitionEn: 'the short, thick first digit of the human hand, opposable to each of the other four digits',
    cefrLevel: 'B2',
    roots: [],
    anatomy: {
      rootParts: [
        { text: 'thuma', rootId: 'origin_oe', rootName: 'Old English', meaningVi: 'ngón tay mập dày (thuma)' },
      ],
      formula: 'thuma (ngón dày) → thumb (ngón tay cái đối diện)',
      explanation: 'Đặc điểm tiến hóa then chốt của con người cho phép cầm nắm đồ vật chính xác.',
    },
    wordFamily: {
      nouns: [
        { term: 'thumb', vi: 'ngón tay cái' },
        { term: 'thumbnail', vi: 'hình thu nhỏ, móng ngón cái' },
      ],
      verbs: [
        { term: 'thumb', vi: 'lật giở nhanh các trang sách; đi nhờ xe' },
      ],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'thumbs up / down',
        vi: 'giơ ngón cái lên (tán thành) / chúc xuống (phản đối)',
        example: 'The board gave the new product proposal an enthusiastic thumbs up.',
      },
      {
        phrase: 'rule of thumb',
        vi: 'quy tắc kinh nghiệm thực tế (thành ngữ)',
        example: 'As a general rule of thumb, drink at least two liters of water daily.',
      },
    ],
    examples: [
      {
        en: 'Opposable thumbs allow humans and primates to grasp tools with extraordinary precision.',
        vi: 'Ngón tay cái đối diện cho phép con người và các loài linh trưởng cầm nắm công cụ với độ chính xác phi thường.',
      },
    ],
    synonyms: [
      { term: 'first digit', vi: 'ngón tay thứ nhất' },
      { term: 'pollex', vi: 'ngón tay cái (thuật ngữ giải phẫu học)' },
    ],
    antonyms: [],
  },

  {
    id: 'tissue',
    term: 'tissue',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈtɪʃ.uː/',
    phoneticUk: '/ˈtɪʃ.uː/',
    definitionVi: 'mô tế bào sinh học; khăn giấy mềm, giấy lụa',
    definitionEn: 'any of the distinct types of material of which animals or plants are made, consisting of specialized cells; absorbent paper used for cleaning',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'tex_text', rootName: 'Tex, Text', meaningVi: 'dệt, đan xen (Latin: texere)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'tissu', rootId: 'tex_text', rootName: 'Tex, Text', meaningVi: 'vải dệt mỏng (Pháp cổ: tissu / Latin: texere)' },
      ],
      formula: 'texere (dệt đan xen) → tissu (tấm vải dệt) → tissue (mô liên kết tế bào dệt vào nhau / khăn giấy mỏng)',
      explanation: 'Trong sinh học, các tế bào kết hợp với nhau giống như sợi chỉ dệt nên tấm vải.',
    },
    wordFamily: {
      nouns: [
        { term: 'tissue', vi: 'mô tế bào, khăn giấy' },
      ],
      verbs: [],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'muscle / brain tissue',
        vi: 'mô cơ bắp / mô não',
        example: 'Biopsies involve extracting a small sample of muscle tissue for laboratory examination.',
      },
      {
        phrase: 'a box of tissues',
        vi: 'một hộp khăn giấy',
        example: 'She kept a box of tissues on her desk during flu season.',
      },
    ],
    examples: [
      {
        en: 'Scar tissue forms naturally over damaged areas during the body’s wound-healing process.',
        vi: 'Mô sẹo hình thành một cách tự nhiên trên các vùng bị tổn thương trong quá trình chữa lành vết thương của cơ thể.',
      },
    ],
    synonyms: [
      { term: 'cellular structure', vi: 'cấu trúc tế bào' },
      { term: 'paper handkerchief', vi: 'khăn tay giấy' },
    ],
    antonyms: [],
  },

  {
    id: 'wrist',
    term: 'wrist',
    partOfSpeech: 'n.',
    phoneticUs: '/rɪst/',
    phoneticUk: '/rɪst/',
    definitionVi: 'cổ tay (khớp nối giữa bàn tay và cẳng tay)',
    definitionEn: 'the joint connecting the hand with the forearm',
    cefrLevel: 'B2',
    roots: [
      { rootId: 'wer', rootName: 'Wer', meaningVi: 'xoay, uốn (Gốc Ấn-Âu)' },
    ],
    anatomy: {
      rootParts: [
        { text: 'wrist', rootId: 'wer', rootName: 'Wer', meaningVi: 'chỗ có thể xoay chuyển được (Old English: wrist)' },
      ],
      formula: 'writhan (xoay, vặn) → wrist (khớp cổ tay xoay chuyển linh hoạt)',
      explanation: 'Bắt nguồn từ gốc từ cổ chỉ bộ phận có khả năng xoay và uốn dẻo.',
    },
    wordFamily: {
      nouns: [
        { term: 'wrist', vi: 'cổ tay' },
        { term: 'wristband', vi: 'vòng đeo cổ tay' },
        { term: 'wristwatch', vi: 'đồng hồ đeo tay' },
      ],
      verbs: [],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      {
        phrase: 'sprain / break one’s wrist',
        vi: 'bong gân / gãy cổ tay',
        example: 'He wore a supportive splint after spraining his wrist during basketball practice.',
      },
      {
        phrase: 'check someone’s pulse at the wrist',
        vi: 'bắt mạch ở cổ tay',
        example: 'The nurse placed two fingers on his wrist to check his resting heart rate.',
      },
      {
        phrase: 'a slap on the wrist',
        vi: 'hình phạt nhẹ mang tính cảnh cáo (thành ngữ)',
        example: 'The corrupt executive received only a slap on the wrist instead of prison time.',
      },
    ],
    examples: [
      {
        en: 'Carpal tunnel syndrome causes numbness, tingling, and weakness in the wrist and hand.',
        vi: 'Hội chứng ống cổ tay gây ra cảm giác tê bì, châm chích và yếu ở vùng cổ tay và bàn tay.',
      },
    ],
    synonyms: [
      { term: 'carpus', vi: 'cổ tay (thuật ngữ giải phẫu học)' },
      { term: 'wrist joint', vi: 'khớp cổ tay' },
    ],
    antonyms: [],
  },
];

// Danh mục tất cả các bộ từ Oxford 5000 hiển thị ở trang Hub (như Hình 1)
export const OXFORD_5000_SETS: OxfordWordSet[] = [
  {
    id: 'oxford_b2_education_academics',
    title: 'Oxford B2 Extended - Education, Academics, Science & Research',
    level: 'B2',
    termsCount: 40,
    description: 'Academic study, scientific research, learning methodology, and analysis.',
    category: 'Education & Science',
    author: 'Demo User',
    daysAgo: '22 days ago',
    words: OXFORD_B2_EDUCATION_ACADEMICS_WORDS,
  },
  {
    id: 'oxford_b2_health_mind',
    title: 'Oxford B2 Extended - Health, Medicine, Mind & Psychology',
    level: 'B2',
    termsCount: 40,
    description: 'Mental health, medical conditions, anatomy, bodily sensations, and healthcare.',
    category: 'Health & Science',
    author: 'SuperVoc / Oxford 5000',
    daysAgo: '14 days ago',
    words: OXFORD_B2_HEALTH_MIND_WORDS,
  },
];
