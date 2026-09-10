import type { SupervocWord } from './supervoc-roots-dataset';

// 40 Chi tiết từ vựng chuyên sâu cho bộ từ Oxford B2 Extended: Education, Academics, Science & Research
export const OXFORD_B2_EDUCATION_ACADEMICS_WORDS: SupervocWord[] = [
  // 1. accuracy (n.)
  {
    id: 'accuracy',
    term: 'accuracy',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈæk.jɚ.ə.si/',
    phoneticUk: '/ˈæk.jə.rə.si/',
    definitionVi: 'sự chính xác, độ chuẩn xác, tính xác thực không có sai sót',
    detailedMeaningVi:
      'Trạng thái chuẩn xác, đúng đắn tuyệt đối với thực tế hoặc chuẩn mực đo lường; nhấn mạnh vào việc không có lỗi hay độ lệch trong tính toán và kết quả thí nghiệm.',
    definitionEn: 'the quality or state of being correct or precise; degree of conformity to truth or standard',
    cefrLevel: 'B2',
    roots: [{ rootId: 'cura_care', rootName: 'Cura (chăm sóc, chú ý)', meaningVi: 'cẩn thận, chăm sóc (Latin)' }],
    anatomy: {
      prefix: 'ad- (biến âm thành ac-)',
      prefixVi: 'hướng tới, gắn liền với',
      rootParts: [{ text: 'cura', rootId: 'cura', rootName: 'Cura', meaningVi: 'chăm sóc, cẩn thận (Latin)' }],
      suffix: '-acy',
      suffixVi: 'hậu tố tạo danh từ chỉ trạng thái, phẩm chất',
      formula: 'ac- (hướng tới) + cura (cẩn thận) + -acy → accuracy (làm việc cẩn trọng tối đa để đạt sự chuẩn xác)',
      explanation: 'Sự chú ý cẩn thận tỉ mỉ đến từng chi tiết nhỏ nhất loại bỏ hoàn toàn sai số.',
    },
    wordFamily: {
      nouns: [{ term: 'accuracy', vi: 'sự chính xác' }, { term: 'inaccuracy', vi: 'sự không chính xác' }],
      verbs: [],
      adjectives: [{ term: 'accurate', vi: 'chính xác, chuẩn xác' }, { term: 'inaccurate', vi: 'sai lệch' }],
      adverbs: [{ term: 'accurately', vi: 'một cách chính xác' }, { term: 'inaccurately', vi: 'một cách sai lệch' }],
    },
    collocations: [
      { phrase: 'pinpoint / high accuracy', vi: 'độ chính xác tuyệt đối / rất cao', example: 'The laser guided system operates with pinpoint accuracy.' },
      { phrase: 'guarantee / check accuracy', vi: 'đảm bảo / kiểm tra độ chính xác', example: 'Every calculation was double-checked to guarantee accuracy.' },
    ],
    examples: [
      { en: 'The scientific instrument measures atmospheric pressure with high accuracy.', vi: 'Thiết bị khoa học đo áp suất khí quyển với độ chính xác rất cao.' },
      { en: 'Historical records must be scrutinized to establish factual accuracy.', vi: 'Các ghi chép lịch sử phải được xem xét kỹ lưỡng để xác định độ chính xác thực tế.' },
    ],
    synonyms: [
      { term: 'precision', vi: 'độ tinh chuẩn', phonetic: '/prəˈsɪʒ.ən/' },
      { term: 'exactness', vi: 'tính xác thực', phonetic: '/ɪɡˈzækt.nəs/' },
      { term: 'correctness', vi: 'sự đúng đắn', phonetic: '/kəˈrekt.nəs/' },
    ],
    antonyms: [
      { term: 'inaccuracy', vi: 'sự sai lệch', phonetic: '/ɪnˈæk.jɚ.ə.si/' },
      { term: 'error', vi: 'sai sót', phonetic: '/ˈer.ɚ/' },
    ],
  },

  // 2. analyst (n.)
  {
    id: 'analyst',
    term: 'analyst',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈæn.ə.lɪst/',
    phoneticUk: '/ˈæn.ə.lɪst/',
    definitionVi: 'nhà phân tích, chuyên viên nghiên cứu và đánh giá dữ liệu',
    detailedMeaningVi:
      'Người chuyên nghiên cứu, mổ xẻ một vấn đề, hệ thống hoặc tập dữ liệu phức tạp thành các phần nhỏ để hiểu rõ bản chất và đưa ra khuyến nghị.',
    definitionEn: 'a person who conducts analysis; examines data or a system methodically and in detail',
    cefrLevel: 'B2',
    roots: [{ rootId: 'ana_lysis', rootName: 'Analysis (Hy Lạp: bóc tách, tháo gỡ)', meaningVi: 'tháo rời, phân tích' }],
    anatomy: {
      prefix: 'ana-',
      prefixVi: 'lên trên, xuyên suốt, tách rời (Hy Lạp)',
      rootParts: [{ text: 'lyst', rootId: 'lysis', rootName: 'Lysis', meaningVi: 'nới lỏng, tháo gỡ (Hy Lạp)' }],
      suffix: '-ist',
      suffixVi: 'người hành nghề, chuyên gia',
      formula: 'ana- (tách rời) + lyst (tháo gỡ) + -ist → analyst (chuyên gia tháo rời dữ liệu để phân tích)',
      explanation: 'Người chuyên tháo gỡ các mối liên hệ phức tạp để nhìn rõ cơ chế cốt lõi bên trong.',
    },
    wordFamily: {
      nouns: [{ term: 'analyst', vi: 'nhà phân tích' }, { term: 'analysis', vi: 'sự phân tích' }],
      verbs: [{ term: 'analyze', vi: 'phân tích' }],
      adjectives: [{ term: 'analytical', vi: 'có tính phân tích' }],
      adverbs: [{ term: 'analytically', vi: 'theo cách phân tích' }],
    },
    collocations: [
      { phrase: 'financial / data analyst', vi: 'nhà phân tích tài chính / dữ liệu', example: 'She works as a senior financial analyst on Wall Street.' },
      { phrase: 'political analyst', vi: 'nhà phân tích chính trị', example: 'Political analysts offered insightful commentary on election trends.' },
    ],
    examples: [
      { en: 'The data analyst identified a key demographic trend in consumer behavior.', vi: 'Nhà phân tích dữ liệu đã xác định một xu hướng nhân khẩu học then chốt trong hành vi người tiêu dùng.' },
      { en: 'Systems analysts are designing a more efficient software workflow.', vi: 'Các nhà phân tích hệ thống đang thiết kế một quy trình phần mềm hiệu quả hơn.' },
    ],
    synonyms: [
      { term: 'researcher', vi: 'nhà nghiên cứu', phonetic: '/riːˈsɝː.tʃɚ/' },
      { term: 'examiner', vi: 'người thẩm định', phonetic: '/ɪɡˈzæm.ə.nɚ/' },
      { term: 'investigator', vi: 'người điều tra', phonetic: '/ɪnˈves.tə.ɡeɪ.t̬ɚ/' },
    ],
    antonyms: [],
  },

  // 3. carbon (n.)
  {
    id: 'carbon',
    term: 'carbon',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈkɑːr.bən/',
    phoneticUk: '/ˈkɑː.bən/',
    definitionVi: 'nguyên tố các-bon, nguyên tố cơ bản của sự sống hữu cơ',
    detailedMeaningVi:
      'Nguyên tố phi kim số 6 trong bảng tuần hoàn; là thành phần cấu tạo cốt lõi của mọi hợp chất sinh học và là trung tâm của các nghiên cứu sinh thái khí hậu.',
    definitionEn: 'the chemical element of atomic number 6, a nonmetal forming the basis of all organic chemistry',
    cefrLevel: 'B2',
    roots: [{ rootId: 'carbo_latin', rootName: 'Carbo (than đá)', meaningVi: 'than, mẩu than cháy (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'carbon', rootId: 'carbo', rootName: 'Carbo', meaningVi: 'than đá (Latin: carbo)' }],
      formula: 'carbo (than) → carbon (nguyên tố hóa học cấu tạo nên than đá và sự sống)',
      explanation: 'Đặt tên từ tiếng Latin "carbo" vì nó là thành phần chính của than củi và than đá.',
    },
    wordFamily: {
      nouns: [{ term: 'carbon', vi: 'các-bon' }, { term: 'carbonate', vi: 'muối cacbonat' }],
      verbs: [{ term: 'carbonize', vi: 'cacbon hóa, làm cháy thành than' }],
      adjectives: [{ term: 'carboniferous', vi: 'chứa than đá' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'carbon footprint', vi: 'dấu chân các-bon (lượng phát thải)', example: 'Eco-conscious consumers strive to reduce their carbon footprint.' },
      { phrase: 'carbon dioxide emission', vi: 'khí thải đi-ô-xít các-bon', example: 'Strict regulations were introduced to curb carbon dioxide emissions.' },
    ],
    examples: [
      { en: 'Radiocarbon dating measures the decay of carbon-14 in ancient organic fossils.', vi: 'Phương pháp định tuổi bằng carbon phóng xạ đo độ phân rã của carbon-14 trong các hóa thạch hữu cơ cổ đại.' },
      { en: 'All organic molecules essential for biological life contain carbon atoms.', vi: 'Mọi phân tử hữu cơ thiết yếu cho sự sống sinh học đều chứa các nguyên tử các-bon.' },
    ],
    synonyms: [],
    antonyms: [],
  },

  // 4. certificate (n.)
  {
    id: 'certificate',
    term: 'certificate',
    partOfSpeech: 'n.',
    phoneticUs: '/sɚˈtɪf.ə.kət/',
    phoneticUk: '/səˈtɪf.ɪ.kət/',
    definitionVi: 'chứng chỉ, văn bằng, giấy chứng nhận chính thức',
    detailedMeaningVi:
      'Tài liệu văn bản có tính pháp lý hoặc học thuật xác nhận một sự kiện, việc hoàn thành khóa đào tạo hoặc đạt chuẩn kỹ năng chuyên môn.',
    definitionEn: 'an official document attesting a certain fact, qualification, or completion of a course',
    cefrLevel: 'B2',
    roots: [{ rootId: 'certus_facere', rootName: 'Certus (chắc chắn) + Facere (làm)', meaningVi: 'xác thực làm cho chắc chắn' }],
    anatomy: {
      rootParts: [
        { text: 'certi', rootId: 'certus', rootName: 'Certus', meaningVi: 'chắc chắn, xác thực (Latin)' },
        { text: 'ficate', rootId: 'facere', rootName: 'Facere', meaningVi: 'làm ra, tạo ra (Latin)' },
      ],
      formula: 'certus (chắc chắn) + facere (làm ra) → certificate (giấy tờ làm cho điều gì được xác nhận chắc chắn)',
      explanation: 'Văn bản chứng minh sự thật một cách không thể chối cãi.',
    },
    wordFamily: {
      nouns: [{ term: 'certificate', vi: 'chứng chỉ' }, { term: 'certification', vi: 'sự cấp chứng chỉ' }],
      verbs: [{ term: 'certify', vi: 'chứng nhận, xác thực' }],
      adjectives: [{ term: 'certified', vi: 'được chứng nhận' }, { term: 'certifiable', vi: 'có thể chứng nhận' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'certificate of completion', vi: 'chứng chỉ hoàn thành khóa học', example: 'Graduates receive an accredited certificate of completion.' },
      { phrase: 'medical / birth certificate', vi: 'giấy chứng nhận y tế / giấy khai sinh', example: 'Please submit a certified copy of your birth certificate.' },
    ],
    examples: [
      { en: 'She earned a prestigious professional certificate in cybersecurity management.', vi: 'Cô đã đạt được chứng chỉ chuyên môn danh giá về quản trị an ninh mạng.' },
      { en: 'The laboratory was granted an international certificate of quality assurance.', vi: 'Phòng thí nghiệm đã được trao chứng chỉ quốc tế về đảm bảo chất lượng.' },
    ],
    synonyms: [
      { term: 'credential', vi: 'văn bằng chứng chỉ', phonetic: '/krɪˈden.ʃəl/' },
      { term: 'diploma', vi: 'bằng tốt nghiệp', phonetic: '/dɪˈploʊ.mə/' },
      { term: 'qualification', vi: 'chứng chỉ năng lực', phonetic: '/ˌkwɑː.lə.fəˈkeɪ.ʃən/' },
    ],
    antonyms: [],
  },

  // 5. clarify (v.)
  {
    id: 'clarify',
    term: 'clarify',
    partOfSpeech: 'v.',
    phoneticUs: '/ˈkler.ə.faɪ/',
    phoneticUk: '/ˈklær.ɪ.faɪ/',
    definitionVi: 'làm rõ, giải thích tường minh để không còn hiểu lầm',
    detailedMeaningVi:
      'Diễn giải, trình bày lại một khái niệm, số liệu hoặc quy định nhằm xua tan sự mơ hồ, giúp người nghe nắm bắt bản chất một cách sáng tỏ.',
    definitionEn: 'make (a statement or situation) less confused and more clearly comprehensible',
    cefrLevel: 'B2',
    roots: [{ rootId: 'clarus_latin', rootName: 'Clarus (trong sáng, rõ ràng)', meaningVi: 'trong trẻo, rõ nét (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'clar', rootId: 'clarus', rootName: 'Clarus', meaningVi: 'sáng rõ (Latin: clarus)' }],
      suffix: '-ify',
      suffixVi: 'hậu tố động từ (làm cho trở nên)',
      formula: 'clar- (sáng tỏ) + -ify (làm cho) → clarify (làm cho vấn đề trở nên sáng tỏ)',
      explanation: 'Biến những điều mờ mịt thành trong vắt, dễ hiểu.',
    },
    wordFamily: {
      nouns: [{ term: 'clarification', vi: 'sự làm rõ, lời giải thích' }, { term: 'clarity', vi: 'sự rõ ràng, tính minh bạch' }],
      verbs: [{ term: 'clarify', vi: 'làm rõ' }],
      adjectives: [{ term: 'clear', vi: 'rõ ràng' }, { term: 'clarified', vi: 'đã được làm rõ' }],
      adverbs: [{ term: 'clearly', vi: 'một cách rõ ràng' }],
    },
    collocations: [
      { phrase: 'clarify a misunderstanding', vi: 'làm rõ một hiểu lầm', example: 'The press release aimed to clarify a widespread misunderstanding.' },
      { phrase: 'clarify a scientific position', vi: 'làm sáng tỏ quan điểm khoa học', example: 'The lead researcher spoke to clarify the team’s position.' },
    ],
    examples: [
      { en: 'The instructor used diagrams to clarify how cellular respiration functions.', vi: 'Giảng viên đã dùng sơ đồ để làm rõ cơ chế hô hấp tế bào hoạt động như thế nào.' },
      { en: 'Could you clarify the research methodology section before we begin testing?', vi: 'Bạn có thể làm rõ phần phương pháp nghiên cứu trước khi chúng tôi tiến hành thử nghiệm không?' },
    ],
    synonyms: [
      { term: 'elucidate', vi: 'làm sáng tỏ', phonetic: '/iˈluː.sə.deɪt/' },
      { term: 'explain', vi: 'giải thích', phonetic: '/ɪkˈspleɪn/' },
      { term: 'illuminate', vi: 'chiếu sáng, giải thích', phonetic: '/ɪˈluː.mə.neɪt/' },
    ],
    antonyms: [
      { term: 'confuse', vi: 'gây hoang mang', phonetic: '/kənˈfjuːz/' },
      { term: 'obscure', vi: 'làm che khuất, làm mờ mịt', phonetic: '/əbˈskjʊr/' },
    ],
  },

  // 6. classify (v.)
  {
    id: 'classify',
    term: 'classify',
    partOfSpeech: 'v.',
    phoneticUs: '/ˈklæs.ə.faɪ/',
    phoneticUk: '/ˈklæs.ɪ.faɪ/',
    definitionVi: 'phân loại, xếp các đối tượng vào nhóm có cùng tính chất',
    detailedMeaningVi:
      'Sắp xếp các cá thể, mẫu vật, dữ liệu thành các lớp hoặc danh mục theo tiêu chuẩn khoa học khách quan để thuận tiện nghiên cứu và đối chiếu.',
    definitionEn: 'assign (someone or something) to a particular class or category according to shared characteristics',
    cefrLevel: 'B2',
    roots: [{ rootId: 'classis_latin', rootName: 'Classis (tầng lớp, nhóm)', meaningVi: 'hạng, tầng lớp (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'class', rootId: 'classis', rootName: 'Classis', meaningVi: 'nhóm, hạng (Latin)' }],
      suffix: '-ify',
      suffixVi: 'hậu tố động từ (làm thành)',
      formula: 'class (nhóm) + -ify (tạo thành) → classify (chia tách sắp xếp thành các nhóm lớp)',
      explanation: 'Sắp xếp trật tự các sự vật theo hệ thống phân cấp.',
    },
    wordFamily: {
      nouns: [{ term: 'classification', vi: 'hệ thống phân loại' }, { term: 'class', vi: 'lớp, nhóm' }],
      verbs: [{ term: 'classify', vi: 'phân loại' }],
      adjectives: [{ term: 'classified', vi: 'đã phân loại; bí mật' }, { term: 'classifiable', vi: 'có thể phân loại' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'classify into categories', vi: 'phân loại thành các danh mục', example: 'Astronomers classify stars into spectral categories based on temperature.' },
      { phrase: 'classify as endangered', vi: 'xếp vào nhóm có nguy cơ tuyệt chủng', example: 'Biologists classified the rare bird species as endangered.' },
    ],
    examples: [
      { en: 'Zoologists classify vertebrates into mammals, birds, reptiles, amphibians, and fish.', vi: 'Các nhà động vật học phân loại động vật có xương sống thành thú, chim, bò sát, lưỡng cư và cá.' },
      { en: 'The algorithm automatically classifies incoming email messages into distinct folders.', vi: 'Thuật toán tự động phân loại các thư điện tử gửi đến vào các thư mục riêng biệt.' },
    ],
    synonyms: [
      { term: 'categorize', vi: 'chia nhóm', phonetic: '/ˈkæt̬.ə.ɡə.raɪz/' },
      { term: 'sort', vi: 'phân loại', phonetic: '/sɔːrt/' },
      { term: 'catalog', vi: 'lập danh mục', phonetic: '/ˈkæt̬.əl.ɑːɡ/' },
    ],
    antonyms: [
      { term: 'jumble', vi: 'xáo trộn', phonetic: '/ˈdʒʌm.bəl/' },
      { term: 'disorder', vi: 'làm mất trật tự', phonetic: '/dɪˈsɔːr.dɚ/' },
    ],
  },

  // 7. curriculum (n.)
  {
    id: 'curriculum',
    term: 'curriculum',
    partOfSpeech: 'n.',
    phoneticUs: '/kəˈrɪk.jə.ləm/',
    phoneticUk: '/kəˈrɪk.jə.ləm/',
    definitionVi: 'chương trình giảng dạy, lộ trình học tập toàn diện của trường học',
    detailedMeaningVi:
      'Hệ thống toàn bộ mục tiêu, nội dung kiến thức, môn học và phương pháp đánh giá được thiết kế có cấu trúc cho một cấp học hoặc chuyên ngành đào tạo.',
    definitionEn: 'the subjects comprising a course of study in a school or college; overall educational program',
    cefrLevel: 'B2',
    roots: [{ rootId: 'currere_latin', rootName: 'Currere (chạy)', meaningVi: 'chạy, đường chạy (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'curri', rootId: 'currere', rootName: 'Currere', meaningVi: 'chạy (Latin: currere)' }],
      suffix: '-culum',
      suffixVi: 'hậu tố Latin chỉ công cụ, lộ trình, trường đua',
      formula: 'currere (chạy) + -culum (đường đua) → curriculum (đường đua kiến thức → lộ trình học tập trọn vẹn)',
      explanation: 'Nguyên gốc là đường đua xe ngựa, tượng trưng cho lộ trình người học phải vượt qua.',
    },
    wordFamily: {
      nouns: [{ term: 'curriculum', vi: 'chương trình học' }, { term: 'curricula', vi: 'các chương trình học (số nhiều)' }],
      verbs: [],
      adjectives: [{ term: 'curricular', vi: 'thuộc chương trình chính khóa' }, { term: 'extracurricular', vi: 'ngoại khóa' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'national / core curriculum', vi: 'chương trình giảng dạy quốc gia / cốt lõi', example: 'All state schools are required to follow the national curriculum.' },
      { phrase: 'curriculum development / reform', vi: 'phát triển / cải cách chương trình học', example: 'Curriculum reform emphasizes critical thinking over rote memorization.' },
    ],
    examples: [
      { en: 'The medical school revamped its curriculum to integrate hands-on clinical training earlier.', vi: 'Trường y đã đổi mới chương trình giảng dạy để lồng ghép việc thực hành lâm sàng sớm hơn.' },
      { en: 'Computer programming was recently incorporated into the elementary school curriculum.', vi: 'Lập trình máy tính gần đây đã được đưa vào chương trình giảng dạy của trường tiểu học.' },
    ],
    synonyms: [
      { term: 'syllabus', vi: 'đề cương môn học', phonetic: '/ˈsɪl.ə.bəs/' },
      { term: 'course of study', vi: 'khóa học', phonetic: '/kɔːrs əv ˈstʌd.i/' },
      { term: 'program', vi: 'chương trình đào tạo', phonetic: '/ˈproʊ.ɡræm/' },
    ],
    antonyms: [],
  },

  // 8. database (n.)
  {
    id: 'database',
    term: 'database',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈdeɪ.t̬ə.beɪs/',
    phoneticUk: '/ˈdeɪ.tə.beɪs/',
    definitionVi: 'cơ sở dữ liệu, kho lưu trữ dữ liệu điện tử có cấu trúc',
    detailedMeaningVi:
      'Hệ thống lưu trữ và quản lý thông tin được tổ chức khoa học trên máy tính, cho phép truy vấn, cập nhật và chia sẻ dữ liệu với độ tin cậy cao.',
    definitionEn: 'a structured set of data held in a computer, especially one that is accessible in various ways',
    cefrLevel: 'B2',
    roots: [{ rootId: 'dare_latin', rootName: 'Dare (cho, trao tặng) → Data', meaningVi: 'dữ liệu đã cho (Latin)' }],
    anatomy: {
      rootParts: [
        { text: 'data', rootId: 'data', rootName: 'Data', meaningVi: 'dữ liệu (Latin: datum)' },
        { text: 'base', rootId: 'base', rootName: 'Base', meaningVi: 'nền tảng, căn cứ' },
      ],
      formula: 'data (dữ liệu) + base (nền tảng) → database (kho nền móng lưu trữ dữ liệu)',
      explanation: 'Nền tảng kỹ thuật số để tổ chức và truy cập các thông tin rời rạc.',
    },
    wordFamily: {
      nouns: [{ term: 'database', vi: 'cơ sở dữ liệu' }, { term: 'data', vi: 'dữ liệu' }],
      verbs: [],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      { phrase: 'relational database', vi: 'cơ sở dữ liệu quan hệ', example: 'Most enterprise architectures rely heavily on a relational database.' },
      { phrase: 'query a database', vi: 'truy vấn cơ sở dữ liệu', example: 'Researchers wrote SQL scripts to query the patient database efficiently.' },
    ],
    examples: [
      { en: 'The genomic database contains DNA profiles of millions of diverse biological species.', vi: 'Cơ sở dữ liệu bộ gen chứa hồ sơ DNA của hàng triệu loài sinh vật đa dạng.' },
      { en: 'University libraries provide subscribed access to a global academic database.', vi: 'Thư viện trường đại học cung cấp quyền truy cập thuê bao vào cơ sở dữ liệu học thuật toàn cầu.' },
    ],
    synonyms: [
      { term: 'repository', vi: 'kho lưu trữ dữ liệu', phonetic: '/rɪˈpɑː.zə.tɔːr.i/' },
      { term: 'databank', vi: 'ngân hàng dữ liệu', phonetic: '/ˈdeɪ.t̬ə.bæŋk/' },
      { term: 'archive', vi: 'kho tư liệu', phonetic: '/ˈɑːr.kaɪv/' },
    ],
    antonyms: [],
  },

  // 9. elementary (adj.)
  {
    id: 'elementary',
    term: 'elementary',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˌel.əˈmen.t̬ɚ.i/',
    phoneticUk: '/ˌel.ɪˈmen.tər.i/',
    definitionVi: 'cơ bản, sơ cấp, thuộc về những yếu tố vỡ lòng đầu tiên',
    detailedMeaningVi:
      'Chỉ những khái niệm, kiến thức nền tảng đơn giản nhất của một bộ môn, đóng vai trò viên gạch đầu tiên trước khi tiếp cận mức độ chuyên sâu.',
    definitionEn: 'relating to the basic or rudimentary aspects of a subject; simple and uncomplicated',
    cefrLevel: 'B2',
    roots: [{ rootId: 'elementum_latin', rootName: 'Elementum (nguyên tố, vỡ lòng)', meaningVi: 'yếu tố cơ bản (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'element', rootId: 'elementum', rootName: 'Elementum', meaningVi: 'nguyên tố, phần tử sơ khai' }],
      suffix: '-ary',
      suffixVi: 'hậu tố tính từ (thuộc về)',
      formula: 'element (nguyên tố cơ bản) + -ary → elementary (thuộc về mức sơ đẳng vỡ lòng)',
      explanation: 'Gắn liền với những viên gạch sơ khởi nhất của tri thức.',
    },
    wordFamily: {
      nouns: [{ term: 'element', vi: 'nguyên tố, yếu tố' }],
      verbs: [],
      adjectives: [{ term: 'elementary', vi: 'cơ bản, sơ cấp' }, { term: 'elemental', vi: 'thuộc về nguyên tố' }],
      adverbs: [{ term: 'elementarily', vi: 'một cách cơ bản' }],
    },
    collocations: [
      { phrase: 'elementary school', vi: 'trường tiểu học', example: 'Children acquire foundational reading literacy in elementary school.' },
      { phrase: 'elementary mistake / principle', vi: 'sai lầm ngớ ngẩn cơ bản / nguyên tắc vỡ lòng', example: 'Skipping unit verification was an elementary mistake.' },
    ],
    examples: [
      { en: 'The workshop begins with elementary principles before advancing to machine learning algorithms.', vi: 'Hội thảo bắt đầu với các nguyên tắc cơ bản trước khi tiến đến các thuật toán máy học.' },
      { en: 'Even with an elementary understanding of physics, one can grasp this simple experiment.', vi: 'Ngay cả với một sự hiểu biết sơ cấp về vật lý, người ta vẫn có thể nắm bắt thí nghiệm đơn giản này.' },
    ],
    synonyms: [
      { term: 'rudimentary', vi: 'sơ khai, cơ bản', phonetic: '/ˌruː.dəˈmen.tər.i/' },
      { term: 'fundamental', vi: 'nền tảng', phonetic: '/ˌfʌn.dəˈmen.t̬əl/' },
      { term: 'introductory', vi: 'nhập môn', phonetic: '/ˌɪn.trəˈdʌk.tər.i/' },
    ],
    antonyms: [
      { term: 'advanced', vi: 'nâng cao', phonetic: '/ədˈvænst/' },
      { term: 'complex', vi: 'phức tạp', phonetic: '/ˈkɑːm.pleks/' },
    ],
  },

  // 10. ethic (n.)
  {
    id: 'ethic',
    term: 'ethic',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈeθ.ɪk/',
    phoneticUk: '/ˈeθ.ɪk/',
    definitionVi: 'chuẩn mực đạo đức, quy tắc ứng xử chuẩn chỉ',
    detailedMeaningVi:
      'Tập hợp các nguyên tắc luân lý dẫn dắt phán đoán đúng sai của một cá nhân, một nghề nghiệp (như đạo đức y khoa, đạo đức nghiên cứu) hoặc một nền văn hóa.',
    definitionEn: 'a set of moral principles, especially relating to a specified field or form of conduct',
    cefrLevel: 'B2',
    roots: [{ rootId: 'ethos_greek', rootName: 'Ethos (tính cách, phong tục tập quán)', meaningVi: 'đạo đức, phong tục (Hy Lạp)' }],
    anatomy: {
      rootParts: [{ text: 'eth', rootId: 'ethos', rootName: 'Ethos', meaningVi: 'đặc tính đạo đức (Hy Lạp)' }],
      suffix: '-ic',
      suffixVi: 'tính chất / danh từ trừu tượng',
      formula: 'ethos (tính cách nhân phẩm) → ethic (hệ quy chuẩn đạo đức)',
      explanation: 'Quy chuẩn hành vi hình thành nên nhân cách và sự tín nhiệm xã hội.',
    },
    wordFamily: {
      nouns: [{ term: 'ethic', vi: 'chuẩn mực đạo đức' }, { term: 'ethics', vi: 'đạo đức học' }],
      verbs: [],
      adjectives: [{ term: 'ethical', vi: 'hợp đạo đức' }, { term: 'unethical', vi: 'vô đạo đức' }],
      adverbs: [{ term: 'ethically', vi: 'về mặt đạo đức' }, { term: 'unethically', vi: 'trái đạo đức' }],
    },
    collocations: [
      { phrase: 'work ethic', vi: 'tinh thần trách nhiệm với công việc', example: 'Her tireless work ethic earned admiration across the entire research lab.' },
      { phrase: 'code of ethics', vi: 'bộ quy tắc đạo đức', example: 'All clinical trials must strictly comply with the medical code of ethics.' },
    ],
    examples: [
      { en: 'Academic research requires an unwavering ethic of honesty and transparency.', vi: 'Nghiên cứu học thuật đòi hỏi một chuẩn mực đạo đức kiên định về sự trung thực và minh bạch.' },
      { en: 'The board questioned the environmental ethic guiding the corporation’s waste disposal policy.', vi: 'Hội đồng đã chất vấn chuẩn mực đạo đức môi trường dẫn dắt chính sách xử lý chất thải của tập đoàn.' },
    ],
    synonyms: [
      { term: 'moral principle', vi: 'nguyên tắc luân lý', phonetic: '/ˈmɔːr.əl ˈprɪn.sə.pəl/' },
      { term: 'integrity', vi: 'sự chính trực', phonetic: '/ɪnˈteɡ.rə.t̬i/' },
    ],
    antonyms: [
      { term: 'corruption', vi: 'sự tha hóa, hối lộ', phonetic: '/kəˈrʌp.ʃən/' },
      { term: 'immorality', vi: 'sự vô luân', phonetic: '/ˌɪm.əˈræl.ə.t̬i/' },
    ],
  },

  // 11. evaluation (n.)
  {
    id: 'evaluation',
    term: 'evaluation',
    partOfSpeech: 'n.',
    phoneticUs: '/ɪˌvæl.juˈeɪ.ʃən/',
    phoneticUk: '/ɪˌvæl.juˈeɪ.ʃn/',
    definitionVi: 'sự đánh giá, quá trình thẩm định giá trị hoặc chất lượng',
    detailedMeaningVi:
      'Hành động thu thập chứng cứ và phân tích một cách có phương pháp để phán đoán mức độ thành công, tính xác thực hoặc hiệu quả của một đề án hay năng lực con người.',
    definitionEn: 'the making of a judgment about the amount, number, or value of something; assessment',
    cefrLevel: 'B2',
    roots: [{ rootId: 'valere_latin', rootName: 'Valere (mạnh mẽ, có giá trị)', meaningVi: 'giá trị, đáng giá (Latin)' }],
    anatomy: {
      prefix: 'e- (biến thể ex-)',
      prefixVi: 'ra ngoài, triệt để',
      rootParts: [{ text: 'valua', rootId: 'valere', rootName: 'Valere', meaningVi: 'giá trị (Latin)' }],
      suffix: '-tion',
      suffixVi: 'danh từ chỉ quá trình, hành động',
      formula: 'e- (rõ ràng) + valua (định giá) + -tion → evaluation (quá trình định giá và đưa ra kết luận về phẩm chất)',
      explanation: 'Thẩm định rõ ràng chân giá trị của một đối tượng.',
    },
    wordFamily: {
      nouns: [{ term: 'evaluation', vi: 'sự đánh giá' }, { term: 'evaluator', vi: 'người đánh giá' }],
      verbs: [{ term: 'evaluate', vi: 'đánh giá, thẩm định' }],
      adjectives: [{ term: 'evaluative', vi: 'mang tính đánh giá' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'conduct an evaluation', vi: 'tiến hành đánh giá', example: 'External auditors conducted a rigorous evaluation of the university finances.' },
      { phrase: 'peer evaluation', vi: 'sự đánh giá đồng cấp', example: 'Peer evaluation plays a pivotal role in maintaining scholarly publication standards.' },
    ],
    examples: [
      { en: 'A thorough clinical evaluation determined that the patient was fully cured.', vi: 'Một cuộc thẩm định lâm sàng kỹ lưỡng đã xác định rằng bệnh nhân đã hoàn toàn bình phục.' },
      { en: 'Program evaluation metrics must be designed before implementing educational reforms.', vi: 'Các chỉ số đánh giá chương trình phải được thiết kế trước khi triển khai cải cách giáo dục.' },
    ],
    synonyms: [
      { term: 'assessment', vi: 'sự thẩm định', phonetic: '/əˈses.mənt/' },
      { term: 'appraisal', vi: 'sự định giá, đánh giá', phonetic: '/əˈpreɪ.zəl/' },
      { term: 'judgment', vi: 'sự phán xét', phonetic: '/ˈdʒʌdʒ.mənt/' },
    ],
    antonyms: [],
  },

  // 12. evolution (n.)
  {
    id: 'evolution',
    term: 'evolution',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌev.əˈluː.ʃən/',
    phoneticUk: '/ˌiː.vəˈluː.ʃn/',
    definitionVi: 'sự tiến hóa, quá trình biến đổi phát triển tuần tự',
    detailedMeaningVi:
      'Trong sinh học là sự biến đổi di truyền của quần thể sinh vật qua các thế hệ nối tiếp; trong nghĩa rộng là sự chuyển hóa từng bước từ đơn sơ đến phức tạp tinh vi.',
    definitionEn: 'the process of gradual development of organisms or ideas over long periods of time',
    cefrLevel: 'B2',
    roots: [{ rootId: 'volvere_latin', rootName: 'Volvere (cuộn, xoay)', meaningVi: 'cuộn lại, mở cuộn (Latin)' }],
    anatomy: {
      prefix: 'e- (từ ex-)',
      prefixVi: 'ra ngoài',
      rootParts: [{ text: 'volu', rootId: 'volvere', rootName: 'Volvere', meaningVi: 'cuộn, mở cuộn (Latin)' }],
      suffix: '-tion',
      suffixVi: 'danh từ chỉ sự biến chuyển',
      formula: 'e- (ra) + volu (mở cuộn) + -tion → evolution (mở từng lớp cuộn giấy ra → tiến hóa theo thời gian)',
      explanation: 'Từng bước mở ra những dạng thái mới từ nền tảng trước đó.',
    },
    wordFamily: {
      nouns: [{ term: 'evolution', vi: 'sự tiến hóa' }, { term: 'evolutionist', vi: 'nhà nghiên cứu thuyết tiến hóa' }],
      verbs: [{ term: 'evolve', vi: 'tiến hóa, phát triển dần' }],
      adjectives: [{ term: 'evolutionary', vi: 'thuộc tiến hóa' }],
      adverbs: [{ term: 'evolutionarily', vi: 'theo cách tiến hóa' }],
    },
    collocations: [
      { phrase: 'theory of evolution', vi: 'thuyết tiến hóa', example: 'Darwin’s theory of evolution fundamentally transformed modern biological sciences.' },
      { phrase: 'human evolution', vi: 'tiến hóa loài người', example: 'Fossil discoveries shed fresh light on the timeline of early human evolution.' },
    ],
    examples: [
      { en: 'The evolution of antibiotic resistance in bacteria poses a formidable challenge to healthcare.', vi: 'Sự tiến hóa kháng kháng sinh ở vi khuẩn đặt ra một thách thức ghê gớm cho y tế.' },
      { en: 'Language witnesses constant evolution as digital communication introduces novel vocabularies.', vi: 'Ngôn ngữ chứng kiến sự biến đổi không ngừng khi giao tiếp số giới thiệu các từ vựng mới mẻ.' },
    ],
    synonyms: [
      { term: 'development', vi: 'sự phát triển', phonetic: '/dɪˈvel.əp.mənt/' },
      { term: 'adaptation', vi: 'sự thích nghi', phonetic: '/ˌæd.əpˈteɪ.ʃən/' },
      { term: 'progression', vi: 'sự tiến triển', phonetic: '/prəˈɡreʃ.ən/' },
    ],
    antonyms: [
      { term: 'devolution', vi: 'sự thoái hóa', phonetic: '/ˌdev.əˈluː.ʃən/' },
      { term: 'stagnation', vi: 'sự đình trệ', phonetic: '/stæɡˈneɪ.ʃən/' },
    ],
  },

  // 13. expertise (n.)
  {
    id: 'expertise',
    term: 'expertise',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌek.spɝːˈtiːz/',
    phoneticUk: '/ˌek.spɜːˈtiːz/',
    definitionVi: 'chuyên môn sâu, năng lực tinh thông trong một lĩnh vực',
    detailedMeaningVi:
      'Trình độ hiểu biết và tay nghề điêu luyện vượt bậc có được sau nhiều năm học tập, rèn luyện và kinh qua thực tiễn trong một chuyên ngành hẹp.',
    definitionEn: 'expert skill or specialized knowledge in a particular field',
    cefrLevel: 'B2',
    roots: [{ rootId: 'experiri_latin', rootName: 'Experiri (thử nghiệm, trải qua)', meaningVi: 'trải nghiệm (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'expert', rootId: 'experiri', rootName: 'Experiri', meaningVi: 'người giàu kinh nghiệm (Latin)' }],
      suffix: '-ise',
      suffixVi: 'hậu tố danh từ mượn từ tiếng Pháp (chỉ phẩm chất cao cấp)',
      formula: 'expert (chuyên gia) + -ise → expertise (năng lực và tầm vóc của một chuyên gia tinh thông)',
      explanation: 'Vốn tri thức được tinh lọc sau muôn vàn thử nghiệm và trải nghiệm thực tế.',
    },
    wordFamily: {
      nouns: [{ term: 'expertise', vi: 'chuyên môn' }, { term: 'expert', vi: 'chuyên gia' }],
      verbs: [],
      adjectives: [{ term: 'expert', vi: 'thông thạo' }],
      adverbs: [{ term: 'expertly', vi: 'một cách điêu luyện' }],
    },
    collocations: [
      { phrase: 'technical / scientific expertise', vi: 'chuyên môn kỹ thuật / khoa học', example: 'The advisory panel provides independent scientific expertise to lawmakers.' },
      { phrase: 'area of expertise', vi: 'lĩnh vực chuyên môn', example: 'Artificial neural networks represent her primary area of expertise.' },
    ],
    examples: [
      { en: 'We hired an independent auditor renowned for his expertise in international tax law.', vi: 'Chúng tôi đã thuê một kiểm toán viên độc lập nổi tiếng vì chuyên môn sâu về luật thuế quốc tế.' },
      { en: 'Sharing medical expertise across international borders saved countless lives during the pandemic.', vi: 'Việc chia sẻ chuyên môn y tế xuyên biên giới đã cứu sống vô số sinh mạng trong đại dịch.' },
    ],
    synonyms: [
      { term: 'mastery', vi: 'sự làm chủ, tinh thông', phonetic: '/ˈmæs.tɚ.i/' },
      { term: 'proficiency', vi: 'sự thành thạo', phonetic: '/prəˈfɪʃ.ən.si/' },
      { term: 'know-how', vi: 'bí quyết thực tế', phonetic: '/ˈnoʊ.haʊ/' },
    ],
    antonyms: [
      { term: 'incompetence', vi: 'sự bất tài, thiếu chuyên môn', phonetic: '/ɪnˈkɑːm.pə.t̬əns/' },
      { term: 'amateurism', vi: 'tính chất nghiệp dư', phonetic: '/ˈæm.ə.tʃɚ.ɪ.zəm/' },
    ],
  },

  // 14. fossil (n.)
  {
    id: 'fossil',
    term: 'fossil',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈfɑː.səl/',
    phoneticUk: '/ˈfɒs.l/',
    definitionVi: 'hóa thạch, di tích sinh vật thời tiền sử bị hóa đá',
    detailedMeaningVi:
      'Dấu tích hoặc xác của động thực vật tiền sử được bảo tồn nguyên vẹn bên trong các tầng đá trầm tích qua hàng triệu năm biến đổi địa chất.',
    definitionEn: 'the preserved remains or traces of animals, plants, and other organisms from the remote past',
    cefrLevel: 'B2',
    roots: [{ rootId: 'fodere_latin', rootName: 'Fodere (đào lên)', meaningVi: 'đào xới (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'fossilis', rootId: 'fodere', rootName: 'Fodere', meaningVi: 'được đào lên từ lòng đất (Latin)' }],
      formula: 'fossilis (đào từ đất đá) → fossil (di tích cổ đại được khai quật từ lòng đất)',
      explanation: 'Tất cả những gì cổ xưa nằm sâu dưới lòng đất được con người khai quật.',
    },
    wordFamily: {
      nouns: [{ term: 'fossil', vi: 'hóa thạch' }, { term: 'fossilization', vi: 'sự hóa thạch' }],
      verbs: [{ term: 'fossilize', vi: 'hóa thạch' }],
      adjectives: [{ term: 'fossilized', vi: 'đã bị hóa thạch' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'fossil fuel', vi: 'nhiên liệu hóa thạch (than đá, dầu mỏ)', example: 'Transitioning away from fossil fuels is imperative for a sustainable future.' },
      { phrase: 'fossil record', vi: 'hồ sơ địa tầng hóa thạch', example: 'Gaps in the fossil record challenge evolutionary biologists.' },
    ],
    examples: [
      { en: 'The paleontologist discovered an intact fossil of a prehistoric marine reptile.', vi: 'Nhà cổ sinh vật học đã phát hiện một hóa thạch nguyên vẹn của loài bò sát biển thời tiền sử.' },
      { en: 'Microscopic plant fossils provide valuable clues about historical climate shifts.', vi: 'Hóa thạch thực vật vi mô cung cấp những manh mối quý giá về các đợt biến đổi khí hậu trong lịch sử.' },
    ],
    synonyms: [
      { term: 'petrification', vi: 'sự hóa đá', phonetic: '/ˌpet.rə.fəˈkeɪ.ʃən/' },
      { term: 'relic', vi: 'di tích', phonetic: '/ˈrel.ɪk/' },
    ],
    antonyms: [],
  },

  // 15. foundation (n.)
  {
    id: 'foundation',
    term: 'foundation',
    partOfSpeech: 'n.',
    phoneticUs: '/faʊnˈdeɪ.ʃən/',
    phoneticUk: '/faʊnˈdeɪ.ʃn/',
    definitionVi: 'nền móng công trình; cơ sở lý luận ban đầu; quỹ tài trợ',
    detailedMeaningVi:
      'Bộ phận chịu lực dưới cùng của kiến trúc; hoặc nguyên lý cốt lõi làm chỗ dựa cho toàn bộ học thuyết; hoặc một tổ chức tài trợ từ thiện được thành lập với mục tiêu xã hội.',
    definitionEn: 'the lowest load-bearing part of a building; an underlying basis or principle; an endowed institution',
    cefrLevel: 'B2',
    roots: [{ rootId: 'fundus_latin', rootName: 'Fundus (đáy, nền đất)', meaningVi: 'đáy, nền móng (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'found', rootId: 'fundus', rootName: 'Fundus', meaningVi: 'đặt nền (Latin: fundare)' }],
      suffix: '-ation',
      suffixVi: 'danh từ chỉ sự thiết lập',
      formula: 'fundus (đáy) + -ation → foundation (hành động đặt nền móng chịu lực)',
      explanation: 'Chỗ đứng vững chắc nhất nâng đỡ toàn bộ cấu trúc phía trên.',
    },
    wordFamily: {
      nouns: [{ term: 'foundation', vi: 'nền móng, quỹ' }, { term: 'founder', vi: 'người sáng lập' }],
      verbs: [{ term: 'found', vi: 'thành lập, đặt nền móng' }],
      adjectives: [{ term: 'foundational', vi: 'mang tính nền móng' }, { term: 'unfounded', vi: 'vô căn cứ' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'solid foundation', vi: 'nền móng vững chắc', example: 'Mastering grammar provides a solid foundation for language fluency.' },
      { phrase: 'charitable foundation', vi: 'quỹ tài trợ từ thiện', example: 'The philanthropic foundation donated millions to university medical research.' },
    ],
    examples: [
      { en: 'Newtonian mechanics laid the foundation for modern classical engineering.', vi: 'Cơ học Newton đã đặt nền móng cho kỹ thuật cổ điển hiện đại.' },
      { en: 'Rumors claiming the lab had closed were entirely without foundation.', vi: 'Những tin đồn cho rằng phòng thí nghiệm đã đóng cửa hoàn toàn không có căn cứ.' },
    ],
    synonyms: [
      { term: 'basis', vi: 'nền tảng', phonetic: '/ˈbeɪ.sɪs/' },
      { term: 'cornerstone', vi: 'viên đá góc tường, nền tảng', phonetic: '/ˈkɔːr.nɚ.stoʊn/' },
      { term: 'bedrock', vi: 'nền tảng vững chắc', phonetic: '/ˈbed.rɑːk/' },
    ],
    antonyms: [
      { term: 'superstructure', vi: 'kết cấu bên trên', phonetic: '/ˈsuː.pɚˌstrʌk.tʃɚ/' },
    ],
  },

  // 16. founder (n.)
  {
    id: 'founder',
    term: 'founder',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈfaʊn.dɚ/',
    phoneticUk: '/ˈfaʊn.də(r)/',
    definitionVi: 'nhà sáng lập, người đặt nền móng khai sinh tổ chức',
    detailedMeaningVi:
      'Người khởi xướng, xây dựng và khai sinh một trường đại học, viện nghiên cứu, doanh nghiệp hoặc một phong trào tư tưởng.',
    definitionEn: 'a person who establishes an institution, organization, or business',
    cefrLevel: 'B2',
    roots: [{ rootId: 'fundus_latin', rootName: 'Fundus (đáy, nền)', meaningVi: 'đặt nền móng (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'found', rootId: 'fundus', rootName: 'Fundus', meaningVi: 'đặt móng (Latin: fundare)' }],
      suffix: '-er',
      suffixVi: 'người thực hiện hành động',
      formula: 'found (đặt móng) + -er → founder (người đặt viên gạch đầu tiên)',
      explanation: 'Người biến ý tưởng ban đầu thành một thể chế hiện hữu.',
    },
    wordFamily: {
      nouns: [{ term: 'founder', vi: 'nhà sáng lập' }, { term: 'co-founder', vi: 'đồng sáng lập' }],
      verbs: [{ term: 'found', vi: 'sáng lập' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      { phrase: 'co-founder of the institute', vi: 'người đồng sáng lập viện nghiên cứu', example: 'She served as co-founder of the cancer research institute.' },
      { phrase: 'visionary founder', vi: 'nhà sáng lập có tầm nhìn xa', example: 'The visionary founder foresaw the rise of renewable technology.' },
    ],
    examples: [
      { en: 'The founder of the academy believed higher education should be accessible to all social strata.', vi: 'Nhà sáng lập học viện tin rằng giáo dục bậc cao phải mở rộng cho mọi tầng lớp xã hội.' },
      { en: 'A commemorative statue of the university founder stands at the heart of the historic campus.', vi: 'Một bức tượng kỷ niệm người sáng lập trường đại học được đặt tại trung tâm của khuôn viên lịch sử.' },
    ],
    synonyms: [
      { term: 'creator', vi: 'người kiến tạo', phonetic: '/kriˈeɪ.t̬ɚ/' },
      { term: 'pioneer', vi: 'người tiên phong', phonetic: '/ˌpaɪəˈnɪr/' },
      { term: 'originator', vi: 'người khởi xướng', phonetic: '/əˈrɪdʒ.ə.neɪ.t̬ɚ/' },
    ],
    antonyms: [
      { term: 'successor', vi: 'người kế vị', phonetic: '/səkˈses.ɚ/' },
    ],
  },

  // 17. fraction (n.)
  {
    id: 'fraction',
    term: 'fraction',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈfræk.ʃən/',
    phoneticUk: '/ˈfræk.ʃn/',
    definitionVi: 'phân số trong toán học; một phần nhỏ của tổng thể',
    detailedMeaningVi:
      'Một đại lượng số học không nguyên biểu thị tỷ lệ một phần trên toàn bộ; hoặc một phân đoạn cực kỳ nhỏ của chi phí, thời gian hay không gian.',
    definitionEn: 'a numerical representation of part of a whole; a tiny proportion or part of something',
    cefrLevel: 'B2',
    roots: [{ rootId: 'frangere_latin', rootName: 'Frangere (làm gãy, bẻ vụn)', meaningVi: 'vỡ vụn, gãy (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'fract', rootId: 'frangere', rootName: 'Frangere', meaningVi: 'bẻ gãy (Latin: fractus)' }],
      suffix: '-ion',
      suffixVi: 'danh từ chỉ kết quả hành động',
      formula: 'fract (bẻ gãy) + -ion → fraction (mảnh vỡ nhỏ tách ra từ khối tổng thể)',
      explanation: 'Hình tượng một vật nguyên vẹn bị bẻ gãy thành các mảnh nhỏ tỷ lệ.',
    },
    wordFamily: {
      nouns: [{ term: 'fraction', vi: 'phân số, mảnh nhỏ' }, { term: 'fracture', vi: 'vết gãy xương' }],
      verbs: [],
      adjectives: [{ term: 'fractional', vi: 'thuộc phân số, rất nhỏ' }],
      adverbs: [{ term: 'fractionally', vi: 'chút ít, tí tẹo' }],
    },
    collocations: [
      { phrase: 'fraction of a second', vi: 'trong tích tắc, một phần giây', example: 'The camera shutter captured the hummingbird wing in a fraction of a second.' },
      { phrase: 'fraction of the cost', vi: 'một phần nhỏ chi phí', example: 'Generic medicines produce the same health outcomes at a fraction of the cost.' },
    ],
    examples: [
      { en: 'Only a small fraction of clinical trials result in FDA-approved prescription medicines.', vi: 'Chỉ một phần nhỏ các thử nghiệm lâm sàng dẫn đến các loại thuốc kê đơn được FDA phê duyệt.' },
      { en: 'Students learned how to convert complex fractions into decimals during algebra class.', vi: 'Học sinh đã học cách chuyển đổi các phân số phức tạp thành số thập phân trong giờ đại số.' },
    ],
    synonyms: [
      { term: 'proportion', vi: 'tỷ lệ, phần', phonetic: '/prəˈpɔːr.ʃən/' },
      { term: 'segment', vi: 'phân đoạn', phonetic: '/ˈseɡ.mənt/' },
      { term: 'fragment', vi: 'mảnh vỡ', phonetic: '/ˈfræɡ.mənt/' },
    ],
    antonyms: [
      { term: 'whole', vi: 'toàn bộ', phonetic: '/hoʊl/' },
      { term: 'entirety', vi: 'sự toàn vẹn', phonetic: '/ɪnˈtaɪr.ə.t̬i/' },
    ],
  },

  // 18. gene (n.)
  {
    id: 'gene',
    term: 'gene',
    partOfSpeech: 'n.',
    phoneticUs: '/dʒiːn/',
    phoneticUk: '/dʒiːn/',
    definitionVi: 'gen di truyền, đơn vị vật lý cơ bản của sự di truyền',
    detailedMeaningVi:
      'Một đoạn trình tự phân tử ADN trên nhiễm sắc thể mang thông tin mã hóa cấu trúc protein, quyết định đặc điểm hình thái và sinh lý của sinh vật.',
    definitionEn: 'a unit of heredity transferred from a parent to offspring and held to determine some characteristic of the offspring',
    cefrLevel: 'B2',
    roots: [{ rootId: 'genos_greek', rootName: 'Genos (nguồn gốc, giống nòi)', meaningVi: 'sinh ra, nguồn gốc (Hy Lạp)' }],
    anatomy: {
      rootParts: [{ text: 'gene', rootId: 'genos', rootName: 'Genos', meaningVi: 'sinh sản, nguồn gốc (Hy Lạp)' }],
      formula: 'genos (nguồn gốc sinh thành) → gene (đơn vị vật chất lưu giữ mã sinh thành di truyền)',
      explanation: 'Hạt nhân lưu giữ toàn bộ công thức sinh học tạo nên cơ thể sinh vật.',
    },
    wordFamily: {
      nouns: [{ term: 'gene', vi: 'gen' }, { term: 'genetics', vi: 'di truyền học' }, { term: 'genome', vi: 'bộ gen' }],
      verbs: [],
      adjectives: [{ term: 'genetic', vi: 'thuộc di truyền' }],
      adverbs: [{ term: 'genetically', vi: 'về mặt di truyền' }],
    },
    collocations: [
      { phrase: 'gene editing technology', vi: 'công nghệ chỉnh sửa gen', example: 'CRISPR gene editing technology has revolutionized biomedical research.' },
      { phrase: 'inherited / mutant gene', vi: 'gen di truyền / gen đột biến', example: 'The mutant gene was identified as the primary catalyst for tumor growth.' },
    ],
    examples: [
      { en: 'Scientists have pinpointed the specific gene linked to hereditary cardiovascular diseases.', vi: 'Các nhà khoa học đã xác định chính xác gen cụ thể liên quan đến các bệnh tim mạch di truyền.' },
      { en: 'Each human cell contains thousands of active genes governing complex biochemical pathways.', vi: 'Mỗi tế bào của con người chứa hàng ngàn gen hoạt động điều chỉnh các con đường hóa sinh phức tạp.' },
    ],
    synonyms: [],
    antonyms: [],
  },

  // 19. genetic (adj.)
  {
    id: 'genetic',
    term: 'genetic',
    partOfSpeech: 'adj.',
    phoneticUs: '/dʒəˈnet̬.ɪk/',
    phoneticUk: '/dʒəˈnet.ɪk/',
    definitionVi: 'thuộc về di truyền học, liên quan đến gen và bộ gen',
    detailedMeaningVi:
      'Liên quan đến cấu trúc, chức năng hoặc sự truyền thừa của các đoạn mã ADN từ thế hệ cha mẹ sang con cái.',
    definitionEn: 'relating to genes or heredity; relating to origin or biological genesis',
    cefrLevel: 'B2',
    roots: [{ rootId: 'genesis_greek', rootName: 'Genesis (sự sinh thành)', meaningVi: 'nguồn cội, sinh ra (Hy Lạp)' }],
    anatomy: {
      rootParts: [{ text: 'genet', rootId: 'genesis', rootName: 'Genesis', meaningVi: 'sinh sôi, gốc rễ (Hy Lạp)' }],
      suffix: '-ic',
      suffixVi: 'hậu tố tính từ (thuộc về)',
      formula: 'genet- (sinh thành di truyền) + -ic → genetic (thuộc về đặc tính di truyền học)',
      explanation: 'Gắn liền với cội nguồn sinh học của sinh thể.',
    },
    wordFamily: {
      nouns: [{ term: 'gene', vi: 'gen' }, { term: 'geneticist', vi: 'nhà di truyền học' }, { term: 'genetics', vi: 'môn di truyền học' }],
      verbs: [],
      adjectives: [{ term: 'genetic', vi: 'thuộc di truyền' }],
      adverbs: [{ term: 'genetically', vi: 'về mặt di truyền' }],
    },
    collocations: [
      { phrase: 'genetic disorder / code', vi: 'rối loạn di truyền / mã di truyền', example: 'Cystic fibrosis is a chronic genetic disorder caused by a single faulty gene.' },
      { phrase: 'genetically modified organism', vi: 'sinh vật biến đổi gen (GMO)', example: 'Debates continue regarding the safety of genetically modified agricultural crops.' },
    ],
    examples: [
      { en: 'Genetic screening can detect prospective chromosomal abnormalities before birth.', vi: 'Sàng lọc di truyền có thể phát hiện các bất thường nhiễm sắc thể tiềm ẩn trước khi sinh.' },
      { en: 'Identical twins share virtually identical genetic profiles derived from one fertilized egg.', vi: 'Các cặp song sinh cùng trứng chia sẻ bộ hồ sơ di truyền gần như y hệt nhau có nguồn gốc từ một trứng thụ tinh.' },
    ],
    synonyms: [
      { term: 'hereditary', vi: 'mang tính di truyền', phonetic: '/həˈred.ə.ter.i/' },
      { term: 'inborn', vi: 'bẩm sinh', phonetic: '/ˌɪnˈbɔːrn/' },
    ],
    antonyms: [
      { term: 'acquired', vi: 'mắc phải do môi trường', phonetic: '/əˈkwaɪɚd/' },
      { term: 'environmental', vi: 'thuộc môi trường ngoài', phonetic: '/ɪnˌvaɪ.rənˈmen.t̬əl/' },
    ],
  },

  // 20. genius (n.)
  {
    id: 'genius',
    term: 'genius',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈdʒiː.njəs/',
    phoneticUk: '/ˈdʒiː.ni.əs/',
    definitionVi: 'thiên tài, năng lực trí tuệ và sáng tạo xuất chúng phi thường',
    detailedMeaningVi:
      'Khả năng tư duy, thấu hiểu hoặc sáng tạo độc đáo vượt bậc nằm ở tầm vóc hiếm có; hoặc người sở hữu trí tuệ siêu phàm như vậy.',
    definitionEn: 'exceptional intellectual or creative power or other natural ability; an exceptionally intelligent person',
    cefrLevel: 'B2',
    roots: [{ rootId: 'gignere_latin', rootName: 'Gignere (sinh ra, sinh thành)', meaningVi: 'thần hộ mệnh ban tài bẩm sinh (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'genius', rootId: 'gignere', rootName: 'Gignere', meaningVi: 'linh hồn hộ mệnh ban tặng tài năng (Latin)' }],
      formula: 'genius (vị thần ban trí tuệ bẩm sinh khi sinh ra) → genius (thiên tài xuất chúng)',
      explanation: 'Người La Mã tin mỗi người có một vị thần "genius" ban phát tài năng thiên bẩm.',
    },
    wordFamily: {
      nouns: [{ term: 'genius', vi: 'thiên tài' }, { term: 'ingenuity', vi: 'sự khéo léo tài tình' }],
      verbs: [],
      adjectives: [{ term: 'ingenious', vi: 'tài tình, thông minh sắc sảo' }],
      adverbs: [{ term: 'ingeniously', vi: 'một cách tài tình' }],
    },
    collocations: [
      { phrase: 'mathematical / musical genius', vi: 'thiên tài toán học / âm nhạc', example: 'Mozart was widely regarded as a musical genius from early childhood.' },
      { phrase: 'stroke of genius', vi: 'một ý tưởng xuất thần, tài tình', example: 'Introducing the modular architecture proved to be a stroke of genius.' },
    ],
    examples: [
      { en: 'Einstein’s scientific genius lay in questioning assumptions that others took for granted.', vi: 'Thiên tài khoa học của Einstein nằm ở việc chất vấn những giả định mà người khác coi là đương nhiên.' },
      { en: 'True artistic genius demands not only talent but also relentless dedication and discipline.', vi: 'Thiên tài nghệ thuật thực thụ đòi hỏi không chỉ tài năng mà còn cả sự tận tụy và kỷ luật không ngừng nghỉ.' },
    ],
    synonyms: [
      { term: 'prodigy', vi: 'thần đồng', phonetic: '/ˈprɑː.də.dʒi/' },
      { term: 'mastermind', vi: 'bộ óc siêu việt', phonetic: '/ˈmæs.tɚ.maɪnd/' },
      { term: 'luminary', vi: 'danh nhân kiệt xuất', phonetic: '/ˈluː.mə.ner.i/' },
    ],
    antonyms: [
      { term: 'fool', vi: 'kẻ ngốc', phonetic: '/fuːl/' },
      { term: 'mediocrity', vi: 'sự tầm thường', phonetic: '/ˌmiː.diˈɑː.krə.t̬i/' },
    ],
  },

  // 21. guideline (n.)
  {
    id: 'guideline',
    term: 'guideline',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈɡaɪd.laɪn/',
    phoneticUk: '/ˈɡaɪd.laɪn/',
    definitionVi: 'hướng dẫn chỉ đạo, quy tắc định hướng hành động',
    detailedMeaningVi:
      'Quy tắc, chỉ dẫn khái quát do cơ quan có thẩm quyền ban hành để định hướng chính sách, phương thức hành nghề hoặc tiến trình thực hiện công việc.',
    definitionEn: 'a general rule, principle, or piece of advice outlining practical policies or procedures',
    cefrLevel: 'B2',
    roots: [{ rootId: 'guider_french', rootName: 'Guider (dẫn lối)', meaningVi: 'chỉ dẫn đường (Pháp/Germanic)' }],
    anatomy: {
      rootParts: [
        { text: 'guide', rootId: 'guide', rootName: 'Guide', meaningVi: 'dẫn dắt, chỉ hướng' },
        { text: 'line', rootId: 'line', rootName: 'Line', meaningVi: 'đường ranh giới' },
      ],
      formula: 'guide (dẫn lối) + line (đường ranh) → guideline (đường ranh chỉ dẫn ranh giới hoạt động đúng đắn)',
      explanation: 'Sợi dây chỉ lối giúp người thực hiện không bị đi chệch khỏi quy chuẩn.',
    },
    wordFamily: {
      nouns: [{ term: 'guideline', vi: 'hướng dẫn chỉ đạo' }, { term: 'guidance', vi: 'sự hướng dẫn' }],
      verbs: [{ term: 'guide', vi: 'dẫn dắt' }],
      adjectives: [{ term: 'guiding', vi: 'mang tính dẫn dắt' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'issue / publish guidelines', vi: 'ban hành / xuất bản hướng dẫn', example: 'The health ministry issued updated dietary guidelines for adolescents.' },
      { phrase: 'follow / adhere to guidelines', vi: 'tuân theo các hướng dẫn chỉ đạo', example: 'Researchers must strictly adhere to biosafety guidelines inside the laboratory.' },
    ],
    examples: [
      { en: 'The academic department drafted new ethical guidelines for conducting qualitative interviews.', vi: 'Khoa học thuật đã soạn thảo các nguyên tắc chỉ đạo đạo đức mới cho việc phỏng vấn định tính.' },
      { en: 'Clear style guidelines ensure consistent terminology throughout the collaborative manuscript.', vi: 'Các hướng dẫn về văn phong rõ ràng đảm bảo thuật ngữ nhất quán xuyên suốt bản thảo hợp tác.' },
    ],
    synonyms: [
      { term: 'directive', vi: 'chỉ thị', phonetic: '/daɪˈrek.tɪv/' },
      { term: 'recommendation', vi: 'khuyến nghị', phonetic: '/ˌrek.ə.menˈdeɪ.ʃən/' },
      { term: 'benchmark', vi: 'tiêu chuẩn đối sánh', phonetic: '/ˈbentʃ.mɑːrk/' },
    ],
    antonyms: [],
  },

  // 22. hypothesis (n.)
  {
    id: 'hypothesis',
    term: 'hypothesis',
    partOfSpeech: 'n.',
    phoneticUs: '/haɪˈpɑː.θə.sɪs/',
    phoneticUk: '/haɪˈpɒθ.ə.sɪs/',
    definitionVi: 'giả thuyết khoa học, luận điểm dự kiến cần kiểm chứng',
    detailedMeaningVi:
      'Một lời giải thích khả dĩ được đề xuất cho một hiện tượng tự nhiên hay dữ liệu quan sát, đóng vai trò là điểm xuất phát để xây dựng thực nghiệm kiểm tra.',
    definitionEn: 'a proposed explanation for a phenomenon made as a starting point for further scientific investigation',
    cefrLevel: 'B2',
    roots: [{ rootId: 'hypo_thesis_greek', rootName: 'Hypo (dưới) + Thesis (luận điểm)', meaningVi: 'đặt nền tảng bên dưới (Hy Lạp)' }],
    anatomy: {
      prefix: 'hypo-',
      prefixVi: 'bên dưới, nền tảng (Hy Lạp)',
      rootParts: [{ text: 'thesis', rootId: 'thesis', rootName: 'Thesis', meaningVi: 'đặt xuống, luận điểm (Hy Lạp)' }],
      formula: 'hypo- (ở dưới) + thesis (luận điểm) → hypothesis (luận điểm nền móng giả định chờ kiểm chứng)',
      explanation: 'Viên gạch giả định được đặt tạm ở dưới để thử nghiệm xem tòa lâu đài lý thuyết có đứng vững.',
    },
    wordFamily: {
      nouns: [{ term: 'hypothesis', vi: 'giả thuyết' }, { term: 'hypotheses', vi: 'các giả thuyết (số nhiều)' }],
      verbs: [{ term: 'hypothesize', vi: 'đưa ra giả thuyết' }],
      adjectives: [{ term: 'hypothetical', vi: 'mang tính giả định' }],
      adverbs: [{ term: 'hypothetically', vi: 'về mặt giả thuyết' }],
    },
    collocations: [
      { phrase: 'formulate a hypothesis', vi: 'xây dựng / đặt ra một giả thuyết', example: 'Investigators formulated a testable hypothesis prior to launching the field survey.' },
      { phrase: 'support / refute a hypothesis', vi: 'ủng hộ / bác bỏ giả thuyết', example: 'Empirical experimental data completely refuted the initial working hypothesis.' },
    ],
    examples: [
      { en: 'The laboratory experiment was explicitly designed to test the neurochemical hypothesis.', vi: 'Thí nghiệm phòng lab được thiết kế cụ thể để kiểm tra giả thuyết hóa thần kinh.' },
      { en: 'A valid scientific hypothesis must be capable of being falsified through empirical evidence.', vi: 'Một giả thuyết khoa học hợp lệ phải có khả năng bị phản nghiệm thông qua bằng chứng thực nghiệm.' },
    ],
    synonyms: [
      { term: 'postulate', vi: 'tiên đề, giả định', phonetic: '/ˈpɑːs.tʃə.leɪt/' },
      { term: 'proposition', vi: 'luận điểm', phonetic: '/ˌprɑː.pəˈzɪʃ.ən/' },
      { term: 'conjecture', vi: 'phỏng đoán', phonetic: '/kənˈdʒek.tʃɚ/' },
    ],
    antonyms: [
      { term: 'fact', vi: 'sự thật hiển nhiên', phonetic: '/fækt/' },
      { term: 'certainty', vi: 'sự chắc chắn', phonetic: '/ˈsɝː.tən.ti/' },
    ],
  },

  // 23. index (n.)
  {
    id: 'index',
    term: 'index',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈɪn.deks/',
    phoneticUk: '/ˈɪn.deks/',
    definitionVi: 'mục lục tra cứu; chỉ số đo lường thống kê',
    detailedMeaningVi:
      'Danh sách các từ khóa hoặc chủ đề xếp theo thứ tự bảng chữ cái kèm số trang ở cuối cuốn sách; hoặc một con số tổng hợp biểu thị mức độ biến động trong kinh tế/khoa học.',
    definitionEn: 'an alphabetical list of names, subjects, or keywords with references; an indicator, sign, or measure of something',
    cefrLevel: 'B2',
    roots: [{ rootId: 'indicare_latin', rootName: 'Indicare (chỉ ra, ngón tay trỏ)', meaningVi: 'ngón trỏ, chỉ điểm (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'index', rootId: 'indicare', rootName: 'Indicare', meaningVi: 'ngón trỏ chỉ dẫn (Latin)' }],
      formula: 'indicare (chỉ ra) → index (ngón tay chỉ điểm $\rightarrow$ bảng tra cứu / con số chỉ báo)',
      explanation: 'Ngón tay trỏ hướng người đọc đến chính xác vị trí kiến thức cần tìm.',
    },
    wordFamily: {
      nouns: [{ term: 'index', vi: 'mục lục, chỉ số' }, { term: 'indices', vi: 'các chỉ số (số nhiều)' }],
      verbs: [{ term: 'index', vi: 'lập mục lục, lập chỉ mục' }],
      adjectives: [{ term: 'indexed', vi: 'đã lập chỉ mục' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'consumer price index', vi: 'chỉ số giá tiêu dùng (CPI)', example: 'The consumer price index serves as a primary barometer for national inflation.' },
      { phrase: 'subject index', vi: 'mục lục theo chủ đề', example: 'Consult the comprehensive subject index at the end of the encyclopedia.' },
    ],
    examples: [
      { en: 'The air quality index indicated hazardous pollution levels throughout the metropolitan valley.', vi: 'Chỉ số chất lượng không khí cho thấy mức ô nhiễm nguy hại khắp thung lũng đô thị.' },
      { en: 'Search engines continuously index billions of web pages to enable instantaneous querying.', vi: 'Các công cụ tìm kiếm liên tục lập chỉ mục hàng tỷ trang web để phục vụ việc truy vấn tức thì.' },
    ],
    synonyms: [
      { term: 'indicator', vi: 'chỉ báo', phonetic: '/ˈɪn.də.keɪ.t̬ɚ/' },
      { term: 'metric', vi: 'thước đo', phonetic: '/ˈmet.rɪk/' },
      { term: 'directory', vi: 'danh bạ, thư mục', phonetic: '/daɪˈrek.tɚ.i/' },
    ],
    antonyms: [],
  },

  // 24. indication (n.)
  {
    id: 'indication',
    term: 'indication',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌɪn.dəˈkeɪ.ʃən/',
    phoneticUk: '/ˌɪn.dɪˈkeɪ.ʃn/',
    definitionVi: 'dấu hiệu chỉ ra, biểu hiện cho thấy điều gì',
    detailedMeaningVi:
      'Một triệu chứng, hiện tượng hoặc thông tin quan sát được giúp suy đoán về sự hiện diện, nguyên nhân hoặc chiều hướng biến chuyển của sự vật.',
    definitionEn: 'a sign, symptom, or piece of information indicating that something exists or is likely to happen',
    cefrLevel: 'B2',
    roots: [{ rootId: 'indicare_latin', rootName: 'Indicare (tuyên bố, chỉ điểm)', meaningVi: 'chỉ ra (Latin)' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'vào, hướng về',
      rootParts: [{ text: 'dica', rootId: 'indicare', rootName: 'Indicare', meaningVi: 'nói, chỉ ra (Latin: dicere)' }],
      suffix: '-tion',
      suffixVi: 'danh từ chỉ dấu hiệu / biểu hiện',
      formula: 'in- (hướng về) + dica (nói rõ) + -tion → indication (dấu hiệu cất tiếng chỉ ra sự thật)',
      explanation: 'Manh mối gợi mở bản chất đang ẩn giấu bên trong.',
    },
    wordFamily: {
      nouns: [{ term: 'indication', vi: 'dấu hiệu chỉ ra' }, { term: 'indicator', vi: 'vật chỉ báo' }],
      verbs: [{ term: 'indicate', vi: 'chỉ ra, báo hiệu' }],
      adjectives: [{ term: 'indicative', vi: 'mang tính chỉ báo' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'give every indication', vi: 'cho thấy mọi dấu hiệu', example: 'The patient gave every indication of making a rapid, complete recovery.' },
      { phrase: 'early indication', vi: 'dấu hiệu sớm', example: 'Survey data gave an early indication of shifts in voter preferences.' },
    ],
    examples: [
      { en: 'Microscopic cellular abnormalities provided an early indication of impending infection.', vi: 'Các bất thường tế bào vi mô đã cung cấp một dấu hiệu sớm về tình trạng nhiễm trùng sắp xảy ra.' },
      { en: 'There was no clear indication that the mathematical model was flawed until stress-tested.', vi: 'Không có dấu hiệu rõ ràng nào cho thấy mô hình toán học bị lỗi cho đến khi được thử nghiệm chịu tải.' },
    ],
    synonyms: [
      { term: 'sign', vi: 'dấu hiệu', phonetic: '/saɪn/' },
      { term: 'symptom', vi: 'triệu chứng', phonetic: '/ˈsɪmp.təm/' },
      { term: 'clue', vi: 'manh mối', phonetic: '/kluː/' },
    ],
    antonyms: [
      { term: 'misdirection', vi: 'sự dẫn sai hướng', phonetic: '/ˌmɪs.daɪˈrek.ʃən/' },
    ],
  },

  // 25. infer (v.)
  {
    id: 'infer',
    term: 'infer',
    partOfSpeech: 'v.',
    phoneticUs: '/ɪnˈfɝː/',
    phoneticUk: '/ɪnˈfɜː(r)/',
    definitionVi: 'suy ra, luận ra từ bằng chứng và logic gián tiếp',
    detailedMeaningVi:
      'Rút ra kết luận hợp lý về một sự việc dựa trên những dữ kiện, dấu hiệu hoặc manh mối gián tiếp chứ không phải từ lời tuyên bố trực tiếp.',
    definitionEn: 'deduce or conclude (information) from evidence and reasoning rather than from explicit statements',
    cefrLevel: 'B2',
    roots: [{ rootId: 'inferre_latin', rootName: 'In- (vào) + Ferre (mang)', meaningVi: 'mang vào trong tâm trí (Latin)' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'vào trong',
      rootParts: [{ text: 'fer', rootId: 'ferre', rootName: 'Ferre', meaningVi: 'mang lại, đưa đến (Latin: ferre)' }],
      formula: 'in- (vào trong) + fer (mang lại) → infer (đưa các dữ kiện vào trí óc để đúc kết ra kết luận)',
      explanation: 'Bộ não tự kết nối các mảnh ghép để tạo thành bức tranh hoàn chỉnh.',
    },
    wordFamily: {
      nouns: [{ term: 'inference', vi: 'sự suy luận, kết luận rút ra' }],
      verbs: [{ term: 'infer', vi: 'suy ra' }],
      adjectives: [{ term: 'inferential', vi: 'dựa trên suy luận' }, { term: 'inferable', vi: 'có thể suy ra được' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'infer from context', vi: 'suy ra từ ngữ cảnh', example: 'Foreign language readers often infer unknown word meanings from context.' },
      { phrase: 'reasonably infer', vi: 'suy luận một cách hợp lý', example: 'From the experimental data, scientists can reasonably infer a causal connection.' },
    ],
    examples: [
      { en: 'From the fossil tooth wear patterns, archeologists inferred the herbivorous diet of the creature.', vi: 'Từ các vết mòn trên răng hóa thạch, các nhà khảo cổ đã suy ra chế độ ăn thực vật của sinh vật.' },
      { en: 'We can safely infer from his published remarks that he questions the new curriculum design.', vi: 'Chúng ta có thể suy luận chắc chắn từ các phát biểu được xuất bản của ông rằng ông chất vấn thiết kế chương trình học mới.' },
    ],
    synonyms: [
      { term: 'deduce', vi: 'khấu trừ suy luận', phonetic: '/dɪˈduːs/' },
      { term: 'conclude', vi: 'kết luận', phonetic: '/kənˈkluːd/' },
      { term: 'extrapolate', vi: 'ngoại suy', phonetic: '/ɪkˈstræp.ə.leɪt/' },
    ],
    antonyms: [
      { term: 'state explicitly', vi: 'nói toạc móng heo, tuyên bố thẳng', phonetic: '/steɪt ɪkˈsplɪs.ɪt.li/' },
    ],
  },

  // 26. input (n.)
  {
    id: 'input',
    term: 'input',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈɪn.pʊt/',
    phoneticUk: '/ˈɪn.pʊt/',
    definitionVi: 'dữ liệu đầu vào; ý kiến đóng góp trí tuệ',
    detailedMeaningVi:
      'Dữ liệu, thông tin, tài nguyên đưa vào một hệ thống hoặc máy tính để xử lý; hoặc sự tham gia đóng góp công sức, ý kiến chuyên môn vào một đề án.',
    definitionEn: 'what is put in, taken in, or operated on by any process or system; contribution of information or ideas',
    cefrLevel: 'B2',
    roots: [{ rootId: 'input_english', rootName: 'In (trong) + Put (đặt để)', meaningVi: 'đặt vào trong (English)' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'vào trong',
      rootParts: [{ text: 'put', rootId: 'put', rootName: 'Put', meaningVi: 'đặt, nạp vào' }],
      formula: 'in (vào trong) + put (đặt để) → input (dữ liệu hoặc ý kiến được nạp vào)',
      explanation: 'Nguồn cấp nhiên liệu hoặc dữ liệu đầu vào nuôi sống quy trình vận hành.',
    },
    wordFamily: {
      nouns: [{ term: 'input', vi: 'đầu vào' }],
      verbs: [{ term: 'input', vi: 'nhập dữ liệu' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      { phrase: 'valuable input', vi: 'đóng góp ý kiến quý báu', example: 'We warmly thank the academic panel for their valuable input on the draft.' },
      { phrase: 'data input', vi: 'việc nhập dữ liệu', example: 'Automated optical scanning minimizes human error during data input.' },
    ],
    examples: [
      { en: 'The machine learning model generates outputs directly correlated with the quality of its training input.', vi: 'Mô hình máy học tạo ra các kết quả đầu ra tương quan trực tiếp với chất lượng của dữ liệu đầu vào huấn luyện.' },
      { en: 'Student input was solicited through an anonymous digital survey before adopting new textbooks.', vi: 'Ý kiến đóng góp của sinh viên đã được trưng cầu qua một cuộc khảo sát số ẩn danh trước khi áp dụng sách giáo khoa mới.' },
    ],
    synonyms: [
      { term: 'data', vi: 'dữ liệu', phonetic: '/ˈdeɪ.t̬ə/' },
      { term: 'contribution', vi: 'sự đóng góp', phonetic: '/ˌkɑːn.trəˈbjuː.ʃən/' },
      { term: 'feed', vi: 'nguồn cấp', phonetic: '/fiːd/' },
    ],
    antonyms: [
      { term: 'output', vi: 'kết quả đầu ra', phonetic: '/ˈaʊt.pʊt/' },
    ],
  },

  // 27. installation (n.)
  {
    id: 'installation',
    term: 'installation',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌɪn.stəˈleɪ.ʃən/',
    phoneticUk: '/ˌɪn.stəˈleɪ.ʃn/',
    definitionVi: 'sự lắp đặt máy móc; việc cài đặt phần mềm máy tính',
    detailedMeaningVi:
      'Quy trình ráp nối trang thiết bị khoa học vào đúng vị trí kỹ thuật sẵn sàng vận hành; hoặc đưa tệp phần mềm vào hệ điều hành máy vi tính.',
    definitionEn: 'the action of setting up equipment or software for use; a large piece of equipment set up',
    cefrLevel: 'B2',
    roots: [{ rootId: 'stall_germanic', rootName: 'Stall (vị trí, chỗ đứng)', meaningVi: 'đặt vào vị trí (Germanic/Latin)' }],
    anatomy: {
      prefix: 'in-',
      prefixVi: 'vào trong',
      rootParts: [{ text: 'stall', rootId: 'stall', rootName: 'Stall', meaningVi: 'vị trí cố định (Latin: installare)' }],
      suffix: '-ation',
      suffixVi: 'danh từ chỉ hành động / kết quả',
      formula: 'in- (vào) + stall (vị trí định sẵn) + -ation → installation (hành động đưa trang thiết bị vào vị trí chuẩn)',
      explanation: 'Cố định thiết bị hay phần mềm vào hệ sinh thái sẵn có.',
    },
    wordFamily: {
      nouns: [{ term: 'installation', vi: 'sự cài đặt / lắp đặt' }, { term: 'installer', vi: 'người / phần mềm cài đặt' }],
      verbs: [{ term: 'install', vi: 'cài đặt, lắp ráp' }],
      adjectives: [{ term: 'installed', vi: 'đã cài đặt' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'software installation', vi: 'cài đặt phần mềm', example: 'Software installation takes only a few seconds on solid-state drives.' },
      { phrase: 'equipment installation', vi: 'lắp đặt thiết bị', example: 'The safe installation of high-voltage laboratory equipment requires certified electricians.' },
    ],
    examples: [
      { en: 'The successful installation of the electron microscope enhances the campus nanotechnology capabilities.', vi: 'Việc lắp đặt thành công kính hiển vi điện tử nâng cao năng lực công nghệ nano của khuôn viên trường.' },
      { en: 'Follow the on-screen prompts carefully throughout the operating system installation process.', vi: 'Hãy làm theo cẩn thận các lời nhắc trên màn hình xuyên suốt quá trình cài đặt hệ điều hành.' },
    ],
    synonyms: [
      { term: 'setup', vi: 'sự thiết lập', phonetic: '/ˈset.ʌp/' },
      { term: 'assembly', vi: 'sự lắp ráp', phonetic: '/əˈsem.bli/' },
      { term: 'fitting', vi: 'việc gắn ghép', phonetic: '/ˈfɪt̬.ɪŋ/' },
    ],
    antonyms: [
      { term: 'removal', vi: 'sự tháo gỡ', phonetic: '/rɪˈmuː.vəl/' },
      { term: 'uninstallation', vi: 'việc gỡ cài đặt', phonetic: '/ˌʌn.ɪn.stəˈleɪ.ʃən/' },
    ],
  },

  // 28. intellectual (adj.)
  {
    id: 'intellectual',
    term: 'intellectual',
    partOfSpeech: 'adj.',
    phoneticUs: '/ˌɪn.t̬əlˈek.tʃu.əl/',
    phoneticUk: '/ˌɪn.təˈlek.tʃu.əl/',
    definitionVi: 'thuộc về trí óc, tư duy trí tuệ sâu sắc; thuộc giới trí thức',
    detailedMeaningVi:
      'Gắn liền với năng lực suy nghĩ trừu tượng, phán đoán logic, triết học và học thuật; đòi hỏi tư duy đầu óc hơn là thể lực cơ bắp.',
    definitionEn: 'relating to the intellect, reason, and capacity for higher forms of thought; highly cultured and knowledgeable',
    cefrLevel: 'B2',
    roots: [{ rootId: 'inter_legere', rootName: 'Inter (giữa) + Legere (chọn lọc, đọc)', meaningVi: 'phân định chọn lọc giữa các ý tưởng (Latin)' }],
    anatomy: {
      prefix: 'inter-',
      prefixVi: 'ở giữa, qua lại',
      rootParts: [{ text: 'lect', rootId: 'legere', rootName: 'Legere', meaningVi: 'chọn lọc, đọc hiểu (Latin: legere)' }],
      suffix: '-ual',
      suffixVi: 'hậu tố tính từ (thuộc về)',
      formula: 'inter- (giữa) + lect (chọn lọc chân lý) + -ual → intellectual (thuộc về năng lực trí tuệ phân biệt đúng sai)',
      explanation: 'Năng lực tinh tế của tâm trí có khả năng chọn lọc tri thức từ thế giới hỗn độn.',
    },
    wordFamily: {
      nouns: [{ term: 'intellectual', vi: 'nhà trí thức' }, { term: 'intellect', vi: 'trí tuệ' }, { term: 'intellectualism', vi: 'chủ nghĩa trí thức' }],
      verbs: [{ term: 'intellectualize', vi: 'trí tuệ hóa' }],
      adjectives: [{ term: 'intellectual', vi: 'thuộc trí óc' }],
      adverbs: [{ term: 'intellectually', vi: 'về mặt trí tuệ' }],
    },
    collocations: [
      { phrase: 'intellectual property (IP)', vi: 'sở hữu trí tuệ', example: 'Universities establish patent offices to safeguard intellectual property produced by faculty.' },
      { phrase: 'intellectual curiosity', vi: 'sự ham hiểu biết trí tuệ', example: 'A genuine scientist is driven by insatiable intellectual curiosity.' },
    ],
    examples: [
      { en: 'Participating in debate clubs stimulated students’ intellectual maturity and analytical stamina.', vi: 'Tham gia các câu lạc bộ tranh biện kích thích sự trưởng thành về trí tuệ và sức bền phân tích của sinh viên.' },
      { en: 'The conference gathered eminent intellectuals to debate the ethical frontiers of artificial consciousness.', vi: 'Hội nghị quy tụ các trí thức kiệt xuất để tranh luận về ranh giới đạo đức của ý thức nhân tạo.' },
    ],
    synonyms: [
      { term: 'cerebral', vi: 'thuộc về não bộ, lý trí', phonetic: '/səˈriː.brəl/' },
      { term: 'scholarly', vi: 'uyên bác học thuật', phonetic: '/ˈskɑː.lɚ.li/' },
      { term: 'academic', vi: 'mang tính học thuật', phonetic: '/ˌæk.əˈdem.ɪk/' },
    ],
    antonyms: [
      { term: 'anti-intellectual', vi: 'chống trí thức', phonetic: '/ˌæn.t̬i.ɪn.t̬əlˈek.tʃu.əl/' },
      { term: 'unthinking', vi: 'vô tâm, thiếu suy nghĩ', phonetic: '/ʌnˈθɪŋ.kɪŋ/' },
    ],
  },

  // 29. interpretation (n.)
  {
    id: 'interpretation',
    term: 'interpretation',
    partOfSpeech: 'n.',
    phoneticUs: '/ɪnˌtɝː.prəˈteɪ.ʃən/',
    phoneticUk: '/ɪnˌtɜː.prɪˈteɪ.ʃn/',
    definitionVi: 'sự diễn giải, cách lý giải phân tích ý nghĩa',
    detailedMeaningVi:
      'Hành động giải thích ý nghĩa ẩn giấu đằng sau một văn bản, biểu đồ số liệu, quy luật pháp lý hoặc tác phẩm nghệ thuật dưới một góc nhìn cụ thể.',
    definitionEn: 'the action of explaining the meaning of something; a stylistic representation or point of view',
    cefrLevel: 'B2',
    roots: [{ rootId: 'interpretes_latin', rootName: 'Interpretes (người thông ngôn, thương lượng)', meaningVi: 'làm trung gian truyền tải (Latin)' }],
    anatomy: {
      prefix: 'inter-',
      prefixVi: 'ở giữa',
      rootParts: [{ text: 'pret', rootId: 'interpretes', rootName: 'Interpretes', meaningVi: 'giải nghĩa, làm cầu nối (Latin)' }],
      suffix: '-ation',
      suffixVi: 'danh từ chỉ sự diễn dịch',
      formula: 'inter- (ở giữa) + pret (truyền tải) + -ation → interpretation (quá trình đứng ở giữa để thông giải ý nghĩa)',
      explanation: 'Cầu nối giúp những thông điệp trừu tượng trở nên sáng tỏ với con người.',
    },
    wordFamily: {
      nouns: [{ term: 'interpretation', vi: 'sự diễn giải' }, { term: 'interpreter', vi: 'thông dịch viên' }],
      verbs: [{ term: 'interpret', vi: 'diễn giải, phiên dịch' }],
      adjectives: [{ term: 'interpretive', vi: 'mang tính diễn giải' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'data interpretation', vi: 'diễn giải số liệu', example: 'Statistical training prevents flawed data interpretation in behavioral research.' },
      { phrase: 'open to interpretation', vi: 'mở rộng cho nhiều cách hiểu', example: 'The historical treaty wording remains open to conflicting legal interpretations.' },
    ],
    examples: [
      { en: 'Different scholars offered competing interpretations of the newly unearthed Mayan hieroglyphs.', vi: 'Các học giả khác nhau đã đưa ra những cách diễn giải đối nghịch về các chữ tượng hình Maya mới được khai quật.' },
      { en: 'The visual artist’s bold interpretation of the classic myth captivated museum visitors.', vi: 'Cách diễn giải táo bạo của nghệ sĩ thị giác về câu chuyện thần thoại kinh điển đã mê hoặc khách tham quan bảo tàng.' },
    ],
    synonyms: [
      { term: 'elucidation', vi: 'sự làm sáng tỏ', phonetic: '/iˌluː.səˈdeɪ.ʃən/' },
      { term: 'analysis', vi: 'sự phân tích', phonetic: '/əˈnæl.ə.sɪs/' },
      { term: 'reading', vi: 'cách hiểu văn bản', phonetic: '/ˈriː.dɪŋ/' },
    ],
    antonyms: [
      { term: 'misinterpretation', vi: 'sự diễn giải sai', phonetic: '/ˌmɪs.ɪn.tɝː.prəˈteɪ.ʃən/' },
    ],
  },

  // 30. notebook (n.)
  {
    id: 'notebook',
    term: 'notebook',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈnoʊt.bʊk/',
    phoneticUk: '/ˈnəʊt.bʊk/',
    definitionVi: 'cuốn sổ tay, tập vở ghi chép nhật ký nghiên cứu',
    detailedMeaningVi:
      'Tập giấy đóng gáy dùng để ghi chép dữ liệu thí nghiệm, phác thảo ý tưởng học thuật; hoặc máy tính xách tay nhỏ gọn tiện mang theo.',
    definitionEn: 'a book with blank or ruled pages for notes and sketches; a portable personal computer',
    cefrLevel: 'B2',
    roots: [{ rootId: 'nota_boc_english', rootName: 'Note (ghi chép) + Book (sách vở)', meaningVi: 'sách ghi chú (English)' }],
    anatomy: {
      rootParts: [
        { text: 'note', rootId: 'nota', rootName: 'Nota', meaningVi: 'ghi chú, dấu ấn (Latin)' },
        { text: 'book', rootId: 'boc', rootName: 'Boc', meaningVi: 'cuốn sách (Old English)' },
      ],
      formula: 'note (ghi chép) + book (cuốn sách) → notebook (cuốn sổ đóng sẵn để lưu chép thông tin)',
      explanation: 'Người bạn đồng hành trung thành của nhà khoa học tại hiện trường.',
    },
    wordFamily: {
      nouns: [{ term: 'notebook', vi: 'sổ tay ghi chép' }, { term: 'note', vi: 'ghi chú' }],
      verbs: [{ term: 'note', vi: 'ghi nhận' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      { phrase: 'lab notebook', vi: 'sổ nhật ký phòng thí nghiệm', example: 'Maintaining a tamper-proof lab notebook is legally mandatory in pharmaceutical R&D.' },
      { phrase: 'jot down in a notebook', vi: 'ghi nhanh vào sổ tay', example: 'He quickly jotted down the sudden flash of inspiration in his pocket notebook.' },
    ],
    examples: [
      { en: 'Leonardo da Vinci famously filled thousands of notebook pages with groundbreaking engineering sketches.', vi: 'Leonardo da Vinci nổi tiếng với việc viết kín hàng ngàn trang sổ tay bằng các bản phác thảo kỹ thuật đột phá.' },
      { en: 'Field biologists rely on waterproof notebooks when cataloging species in tropical rainforests.', vi: 'Các nhà sinh học thực địa dựa vào những cuốn sổ tay chống nước khi lập danh mục các loài trong rừng mưa nhiệt đới.' },
    ],
    synonyms: [
      { term: 'journal', vi: 'nhật ký nghiên cứu', phonetic: '/ˈdʒɝː.nəl/' },
      { term: 'notepad', vi: 'tập giấy ghi chép', phonetic: '/ˈnoʊt.pæd/' },
      { term: 'logbook', vi: 'sổ theo dõi', phonetic: '/ˈlɑːɡ.bʊk/' },
    ],
    antonyms: [],
  },

  // 31. probability (n.)
  {
    id: 'probability',
    term: 'probability',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌprɑː.bəˈbɪl.ə.t̬i/',
    phoneticUk: '/ˌprɒb.əˈbɪl.ə.ti/',
    definitionVi: 'xác suất toán học, mức độ khả dĩ có thể xảy ra của biến cố',
    detailedMeaningVi:
      'Thước đo định lượng bằng số từ 0 đến 1 thể hiện mức độ chắc chắn một sự kiện ngẫu nhiên sẽ xảy ra trong điều kiện xác định.',
    definitionEn: 'the extent to which an event is likely to occur, measured by the ratio of favorable cases to the whole number of cases possible',
    cefrLevel: 'B2',
    roots: [{ rootId: 'probare_latin', rootName: 'Probare (kiểm tra, chứng minh)', meaningVi: 'đáng tin, có thể kiểm chứng (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'probab', rootId: 'probare', rootName: 'Probare', meaningVi: 'có thể kiểm chứng (Latin: probabilis)' }],
      suffix: '-ity',
      suffixVi: 'hậu tố danh từ chỉ độ đo, tính chất',
      formula: 'probabilis (có thể tin cậy) + -ity → probability (độ đo tính khả dĩ một điều sẽ diễn ra)',
      explanation: 'Tính toán sự bất định của thế giới tự nhiên bằng toán học.',
    },
    wordFamily: {
      nouns: [{ term: 'probability', vi: 'xác suất' }],
      verbs: [],
      adjectives: [{ term: 'probable', vi: 'có khả năng xảy ra' }, { term: 'improbable', vi: 'khó xảy ra' }],
      adverbs: [{ term: 'probably', vi: 'có lẽ, hầu như chắc chắn' }, { term: 'improbably', vi: 'khó tin' }],
    },
    collocations: [
      { phrase: 'high / low probability', vi: 'xác suất cao / thấp', example: 'Meteorologists announced a high probability of torrential rainfall tomorrow.' },
      { phrase: 'probability distribution', vi: 'phân phối xác suất', example: 'A standard Gaussian curve illustrates a normal probability distribution.' },
    ],
    examples: [
      { en: 'Quantum mechanics models subatomic particles via wave functions describing probability densities.', vi: 'Cơ học lượng tử mô hình hóa các hạt hạ nguyên tử qua các hàm sóng miêu tả mật độ xác suất.' },
      { en: 'Actuaries calculate the probability of accidents to determine fair insurance policy premiums.', vi: 'Các chuyên gia định phí bảo hiểm tính toán xác suất tai nạn để định mức phí bảo hiểm công bằng.' },
    ],
    synonyms: [
      { term: 'likelihood', vi: 'khả năng xảy ra', phonetic: '/ˈlaɪ.kli.hʊd/' },
      { term: 'odds', vi: 'tỷ lệ cược, khả năng', phonetic: '/ɑːdz/' },
      { term: 'chances', vi: 'cơ hội', phonetic: '/ˈtʃæn.sɪz/' },
    ],
    antonyms: [
      { term: 'impossibility', vi: 'sự bất khả thi', phonetic: '/ɪmˌpɑː.səˈbɪl.ə.t̬i/' },
      { term: 'certainty', vi: 'sự chắc chắn', phonetic: '/ˈsɝː.tən.ti/' },
    ],
  },

  // 32. questionnaire (n.)
  {
    id: 'questionnaire',
    term: 'questionnaire',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌkwes.tʃəˈner/',
    phoneticUk: '/ˌkwes.tʃəˈneə(r)/',
    definitionVi: 'bảng câu hỏi khảo sát, phiếu điều tra thu thập thông tin',
    detailedMeaningVi:
      'Biểu mẫu gồm danh sách các câu hỏi trắc nghiệm hoặc tự luận được thiết kế khoa học để thu thập phản hồi định lượng/định tính từ nhóm đối tượng mẫu.',
    definitionEn: 'a set of printed or written questions with a choice of answers, devised for the purposes of a survey or statistical study',
    cefrLevel: 'B2',
    roots: [{ rootId: 'quaerere_latin', rootName: 'Quaerere (tìm kiếm, hỏi)', meaningVi: 'tìm hiểu, tra hỏi (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'question', rootId: 'quaerere', rootName: 'Quaerere', meaningVi: 'câu hỏi (Latin: quaestio)' }],
      suffix: '-naire',
      suffixVi: 'hậu tố mượn tiếng Pháp (chỉ tập tài liệu biểu mẫu)',
      formula: 'question (câu hỏi) + -naire (bộ hồ sơ) → questionnaire (phiếu biểu mẫu tập hợp các câu hỏi khảo sát)',
      explanation: 'Công cụ kinh điển của ngành khoa học xã hội và điều tra dịch tễ.',
    },
    wordFamily: {
      nouns: [{ term: 'questionnaire', vi: 'bảng câu hỏi' }, { term: 'question', vi: 'câu hỏi' }],
      verbs: [{ term: 'question', vi: 'chất vấn, hỏi' }],
      adjectives: [{ term: 'questioning', vi: 'thắc mắc, tò mò' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'fill out / complete a questionnaire', vi: 'điền vào bảng câu hỏi', example: 'Participants were requested to complete an anonymous questionnaire online.' },
      { phrase: 'administer a questionnaire', vi: 'phát phiếu khảo sát', example: 'Sociologists administered the questionnaire across ten public high schools.' },
    ],
    examples: [
      { en: 'The research questionnaire assessed participant sleeping patterns and perceived workplace stress levels.', vi: 'Bảng câu hỏi nghiên cứu đã đánh giá thói quen ngủ của người tham gia và mức độ căng thẳng nơi làm việc.' },
      { en: 'Pilot testing of the questionnaire helped researchers eliminate ambiguous and leading questions.', vi: 'Thử nghiệm sơ bộ bảng câu hỏi đã giúp các nhà nghiên cứu loại bỏ những câu hỏi mơ hồ và định hướng.' },
    ],
    synonyms: [
      { term: 'survey', vi: 'khảo sát', phonetic: '/ˈsɝː.veɪ/' },
      { term: 'poll', vi: 'thăm dò ý kiến', phonetic: '/poʊl/' },
      { term: 'inventory', vi: 'bảng kiểm kê tâm lý', phonetic: '/ˈɪn.vən.tɔːr.i/' },
    ],
    antonyms: [],
  },

  // 33. radiation (n.)
  {
    id: 'radiation',
    term: 'radiation',
    partOfSpeech: 'n.',
    phoneticUs: '/ˌreɪ.diˈeɪ.ʃən/',
    phoneticUk: '/ˌreɪ.diˈeɪ.ʃn/',
    definitionVi: 'sự bức xạ năng lượng, tia phát xạ hoặc sóng phóng xạ',
    detailedMeaningVi:
      'Sự phát tán và truyền đi của năng lượng dưới dạng sóng điện từ (ánh sáng, tia X) hoặc các chùm hạt hạ nguyên tử xuyên qua không gian hoặc vật chất.',
    definitionEn: 'the emission of energy as electromagnetic waves or as moving subatomic particles',
    cefrLevel: 'B2',
    roots: [{ rootId: 'radius_latin', rootName: 'Radius (tia sáng, nan hoa bánh xe)', meaningVi: 'nan hoa, tia tỏa ra (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'radi', rootId: 'radius', rootName: 'Radius', meaningVi: 'tia tỏa tròn (Latin: radius)' }],
      suffix: '-ation',
      suffixVi: 'danh từ chỉ sự phát tán năng lượng',
      formula: 'radi- (tia tỏa ra) + -ation → radiation (quá trình năng lượng bắn tỏa ra theo các tia xuyên suốt)',
      explanation: 'Năng lượng lan tỏa theo hình nan hoa bánh xe từ một tâm điểm.',
    },
    wordFamily: {
      nouns: [{ term: 'radiation', vi: 'bức xạ' }, { term: 'radiator', vi: 'lò sưởi, bộ tản nhiệt' }],
      verbs: [{ term: 'radiate', vi: 'tỏa ra, phát xạ' }],
      adjectives: [{ term: 'radioactive', vi: 'phóng xạ' }, { term: 'radiant', vi: 'rạng rỡ, phát sáng' }],
      adverbs: [{ term: 'radiantly', vi: 'một cách rực rỡ' }],
    },
    collocations: [
      { phrase: 'solar / cosmic radiation', vi: 'bức xạ mặt trời / vũ trụ', example: 'Spacecraft require robust shielding against lethal solar radiation.' },
      { phrase: 'radiation therapy', vi: 'xạ trị điều trị ung thư', example: 'Targeted radiation therapy shrinks localized tumors while sparing healthy tissues.' },
    ],
    examples: [
      { en: 'Geiger counters detect ionizing radiation by measuring electrical conductivity in gas.', vi: 'Ống đếm Geiger phát hiện bức xạ ion hóa bằng cách đo độ dẫn điện trong chất khí.' },
      { en: 'Thermal radiation emitted by warm objects can be visualized using infrared thermal cameras.', vi: 'Bức xạ nhiệt do các vật thể ấm phát ra có thể được hiển thị bằng máy quay ảnh nhiệt hồng ngoại.' },
    ],
    synonyms: [
      { term: 'emission', vi: 'sự phát xạ, tỏa nhiệt', phonetic: '/iˈmɪʃ.ən/' },
      { term: 'radioactivity', vi: 'tính phóng xạ', phonetic: '/ˌreɪ.di.oʊ.ækˈtɪv.ə.t̬i/' },
    ],
    antonyms: [
      { term: 'absorption', vi: 'sự hấp thụ năng lượng', phonetic: '/əbˈzɔːrp.ʃən/' },
    ],
  },

  // 34. scholar (n.)
  {
    id: 'scholar',
    term: 'scholar',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈskɑː.lɚ/',
    phoneticUk: '/ˈskɒl.ə(r)/',
    definitionVi: 'học giả, nhà nghiên cứu uyên bác dành trọn đời cho học thuật',
    detailedMeaningVi:
      'Chuyên gia xuất chúng có học vấn sâu rộng trong một ngành học thuật cụ thể (đặc biệt là khoa học xã hội, nhân văn và văn hóa cổ điển).',
    definitionEn: 'a distinguished academic specialist in a particular branch of study; a highly learned person',
    cefrLevel: 'B2',
    roots: [{ rootId: 'schole_greek', rootName: 'Schole (thời gian nhàn rỗi để học hỏi)', meaningVi: 'nhàn rỗi học thuật (Hy Lạp)' }],
    anatomy: {
      rootParts: [{ text: 'schol', rootId: 'schole', rootName: 'Schole', meaningVi: 'trường học, học giả (Hy Lạp)' }],
      suffix: '-ar',
      suffixVi: 'hậu tố chỉ người chuyên tâm nghiên cứu',
      formula: 'schole (trường học tri thức) + -ar → scholar (người dành trọn cuộc đời cho việc nghiên cứu ở trường học)',
      explanation: 'Người biến sự tự do tinh thần thành kho tàng học vấn uyên thâm.',
    },
    wordFamily: {
      nouns: [{ term: 'scholar', vi: 'học giả' }, { term: 'scholarship', vi: 'học bổng; học thuật' }],
      verbs: [],
      adjectives: [{ term: 'scholarly', vi: 'uyên bác, đậm chất học thuật' }],
      adverbs: [{ term: 'scholarly', vi: 'theo phong cách học giả' }],
    },
    collocations: [
      { phrase: 'visiting scholar', vi: 'học giả thỉnh giảng', example: 'A visiting scholar from Kyoto delivered a lecture on ancient maritime trade routes.' },
      { phrase: 'renowned / eminent scholar', vi: 'học giả lừng danh / kiệt xuất', example: 'Eminent scholars contributed chapters to the peer-reviewed Cambridge history volume.' },
    ],
    examples: [
      { en: 'The literary scholar devoted three decades to decoding unpublished manuscripts of Shakespeare.', vi: 'Học giả văn học đã cống hiến ba thập kỷ để giải mã những bản thảo chưa công bố của Shakespeare.' },
      { en: 'Scholars from fifty countries convened at the symposium to debate global governance ethics.', vi: 'Các học giả từ năm mươi quốc gia đã họp mặt tại hội nghị chuyên đề để tranh luận về đạo đức quản trị toàn cầu.' },
    ],
    synonyms: [
      { term: 'academic', vi: 'nhà nghiên cứu học viện', phonetic: '/ˌæk.əˈdem.ɪk/' },
      { term: 'intellectual', vi: 'nhà trí thức', phonetic: '/ˌɪn.t̬əlˈek.tʃu.əl/' },
      { term: 'savant', vi: 'nhà bác học', phonetic: '/sævˈɑːnt/' },
    ],
    antonyms: [
      { term: 'layman', vi: 'người không chuyên', phonetic: '/ˈleɪ.mən/' },
      { term: 'novice', vi: 'người mới bắt đầu', phonetic: '/ˈnɑː.vɪs/' },
    ],
  },

  // 35. scholarship (n.)
  {
    id: 'scholarship',
    term: 'scholarship',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈskɑː.lɚ.ʃɪp/',
    phoneticUk: '/ˈskɒl.ə.ʃɪp/',
    definitionVi: 'học bổng tài trợ học tập; nền học thuật uyên bác',
    detailedMeaningVi:
      'Khoản trợ cấp tài chính trao cho sinh viên xuất sắc để trang trải học phí; hoặc thành quả nghiên cứu học vấn nghiêm cẩn, uyên thâm của giới hàn lâm.',
    definitionEn: 'a grant or financial award supporting student education; academic achievement of high learning',
    cefrLevel: 'B2',
    roots: [{ rootId: 'schole_greek', rootName: 'Schole (học tập)', meaningVi: 'học thuật (Hy Lạp)' }],
    anatomy: {
      rootParts: [{ text: 'scholar', rootId: 'schole', rootName: 'Schole', meaningVi: 'học giả, người học' }],
      suffix: '-ship',
      suffixVi: 'hậu tố chỉ cương vị, thành tựu, trợ cấp',
      formula: 'scholar (học giả) + -ship (phẩm vị / trợ cấp) → scholarship (khoản tài trợ học vấn hoặc thành tựu học thuật)',
      explanation: 'Sự vinh danh hoặc bệ phóng tài chính nuôi dưỡng nhân tài học vấn.',
    },
    wordFamily: {
      nouns: [{ term: 'scholarship', vi: 'học bổng; học thuật' }, { term: 'scholar', vi: 'học giả' }],
      verbs: [],
      adjectives: [{ term: 'scholarly', vi: 'thuộc học thuật' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'win / be awarded a scholarship', vi: 'giành được / được trao học bổng', example: 'Through academic excellence, she was awarded a full scholarship to Harvard.' },
      { phrase: 'rigorous scholarship', vi: 'nền học thuật nghiêm cẩn', example: 'The peer review process ensures that only works of rigorous scholarship reach publication.' },
    ],
    examples: [
      { en: 'The merit-based scholarship covers all tuition, laboratory fees, and living accommodations.', vi: 'Học bổng dựa trên thành tích chi trả toàn bộ học phí, chi phí phòng thí nghiệm và chỗ ở.' },
      { en: 'His monograph stands as a masterpiece of rigorous historical and linguistic scholarship.', vi: 'Chuyên khảo của ông sừng sững như một kiệt tác của nền học thuật lịch sử và ngôn ngữ nghiêm cẩn.' },
    ],
    synonyms: [
      { term: 'bursary', vi: 'học bổng trợ cấp', phonetic: '/ˈbɝː.sɚ.i/' },
      { term: 'grant', vi: 'khoản tài trợ', phonetic: '/ɡrænt/' },
      { term: 'fellowship', vi: 'học bổng nghiên cứu sinh', phonetic: '/ˈfel.oʊ.ʃɪp/' },
    ],
    antonyms: [],
  },

  // 36. seminar (n.)
  {
    id: 'seminar',
    term: 'seminar',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈsem.ə.nɑːr/',
    phoneticUk: '/ˈsem.ɪ.nɑː(r)/',
    definitionVi: 'hội thảo chuyên đề, buổi sinh hoạt học thuật nhóm nhỏ',
    detailedMeaningVi:
      'Lớp học hoặc buổi họp quy mô nhỏ tại trường đại học nơi giáo sư và sinh viên/học giả thảo luận chuyên sâu về một đề tài nghiên cứu nâng cao.',
    definitionEn: 'a meeting for discussion or training; a specialized university class focused on advanced research debate',
    cefrLevel: 'B2',
    roots: [{ rootId: 'semen_latin', rootName: 'Semen (hạt giống tri thức)', meaningVi: 'hạt giống, mầm mống (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'semin', rootId: 'semen', rootName: 'Semen', meaningVi: 'hạt mầm (Latin: seminarium)' }],
      suffix: '-ar',
      suffixVi: 'nơi chốn, cuộc gặp',
      formula: 'semen (hạt giống) + -ar → seminar (vườn ươm mầm các hạt giống tư tưởng tri thức mới)',
      explanation: 'Nơi những ý tưởng non trẻ được gieo mầm và tranh luận để nảy nở thành học thuyết vững chắc.',
    },
    wordFamily: {
      nouns: [{ term: 'seminar', vi: 'hội thảo chuyên đề' }],
      verbs: [],
      adjectives: [{ term: 'seminal', vi: 'mang tính khai sáng hạt giống' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'conduct / hold a seminar', vi: 'tổ chức một buổi hội thảo', example: 'The department holds an interdisciplinary seminar every Thursday afternoon.' },
      { phrase: 'seminar presentation', vi: 'bài thuyết trình tại hội thảo', example: 'Doctoral students deliver a seminar presentation on their ongoing dissertation research.' },
    ],
    examples: [
      { en: 'Participants in the seminar actively debated the socioeconomic impacts of automated robotics.', vi: 'Những người tham gia hội thảo đã tranh luận sôi nổi về các tác động kinh tế xã hội của robot tự động hóa.' },
      { en: 'The visiting Nobel laureate led an inspiring three-day master seminar on astrophysics.', vi: 'Vị học giả đoạt giải Nobel thỉnh giảng đã dẫn dắt một hội thảo bậc thầy đầy cảm hứng kéo dài ba ngày về vật lý thiên văn.' },
    ],
    synonyms: [
      { term: 'symposium', vi: 'hội nghị chuyên đề', phonetic: '/sɪmˈpoʊ.zi.əm/' },
      { term: 'colloquium', vi: 'buổi tọa đàm học thuật', phonetic: '/kəˈloʊ.kwi.əm/' },
      { term: 'workshop', vi: 'hội thảo thực hành', phonetic: '/ˈwɝːk.ʃɑːp/' },
    ],
    antonyms: [],
  },

  // 37. testing (n.)
  {
    id: 'testing',
    term: 'testing',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈtes.tɪŋ/',
    phoneticUk: '/ˈtes.tɪŋ/',
    definitionVi: 'sự thử nghiệm, quá trình kiểm tra đánh giá độ tin cậy',
    detailedMeaningVi:
      'Quy trình khoa học nhằm kiểm định chất lượng, độ bền, tính an toàn hoặc hiệu năng của sản phẩm, phần mềm hay thuốc men trước khi triển khai rộng rãi.',
    definitionEn: 'the procedure of establishing the quality, performance, or reliability of something before widespread adoption',
    cefrLevel: 'B2',
    roots: [{ rootId: 'testum_latin', rootName: 'Testum (chén nung bằng đất nung)', meaningVi: 'chén nung thử vàng (Latin)' }],
    anatomy: {
      rootParts: [{ text: 'test', rootId: 'testum', rootName: 'Testum', meaningVi: 'bình nung luyện kim để thử độ tinh khiết' }],
      suffix: '-ing',
      suffixVi: 'danh động từ chỉ quá trình hành động',
      formula: 'testum (chén nung thử vàng) + -ing → testing (quá trình tôi luyện kiểm nghiệm chất lượng thực tế)',
      explanation: 'Thử lửa để loại bỏ tạp chất và chứng minh độ chuẩn xác.',
    },
    wordFamily: {
      nouns: [{ term: 'testing', vi: 'sự thử nghiệm' }, { term: 'test', vi: 'bài kiểm tra' }, { term: 'tester', vi: 'người kiểm thử' }],
      verbs: [{ term: 'test', vi: 'kiểm tra, thử nghiệm' }],
      adjectives: [{ term: 'tested', vi: 'đã qua kiểm nghiệm' }, { term: 'testing', vi: 'đầy thử thách cam go' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'clinical testing', vi: 'thử nghiệm lâm sàng', example: 'Phase III clinical testing demonstrated exceptional therapeutic efficacy with minimal side effects.' },
      { phrase: 'undergo rigorous testing', vi: 'trải qua thử nghiệm nghiêm ngặt', example: 'The aerospace prototype underwent months of rigorous wind-tunnel testing.' },
    ],
    examples: [
      { en: 'Automated software testing caught a severe memory leak flaw before the system launched.', vi: 'Kiểm thử phần mềm tự động đã phát hiện một lỗi rò rỉ bộ nhớ nghiêm trọng trước khi hệ thống được ra mắt.' },
      { en: 'Diagnostic blood testing verified that viral antibody titers had stabilized safely.', vi: 'Xét nghiệm máu chẩn đoán đã xác minh rằng nồng độ kháng thể virus đã ổn định an toàn.' },
    ],
    synonyms: [
      { term: 'experimentation', vi: 'sự thử nghiệm', phonetic: '/ɪkˌsper.ə.menˈteɪ.ʃən/' },
      { term: 'trial', vi: 'sự dùng thử, thử thách', phonetic: '/traɪəl/' },
      { term: 'assessment', vi: 'sự đánh giá', phonetic: '/əˈses.mənt/' },
    ],
    antonyms: [],
  },

  // 38. textbook (n.)
  {
    id: 'textbook',
    term: 'textbook',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈtekst.bʊk/',
    phoneticUk: '/ˈtekst.bʊk/',
    definitionVi: 'sách giáo khoa, tài liệu học tập chuẩn mực',
    detailedMeaningVi:
      'Sách chuyên khảo được biên soạn chuẩn chỉ theo chương trình đào tạo chính khóa; trong nghĩa tính từ là hành động chuẩn mực kiểu mẫu.',
    definitionEn: 'a book used as a standard work for the study of a particular subject; exemplary or typical',
    cefrLevel: 'B2',
    roots: [{ rootId: 'textus_latin', rootName: 'Textus (dệt, văn bản dệt nên)', meaningVi: 'văn bản được dệt chữ (Latin)' }],
    anatomy: {
      rootParts: [
        { text: 'text', rootId: 'textus', rootName: 'Textus', meaningVi: 'văn bản (Latin: textus)' },
        { text: 'book', rootId: 'book', rootName: 'Book', meaningVi: 'cuốn sách' },
      ],
      formula: 'text (văn bản học thuật) + book (sách) → textbook (cuốn sách giáo khoa quy chuẩn)',
      explanation: 'Cuốn sách chắt lọc kiến thức chuẩn mực nhất trao cho thế hệ sau.',
    },
    wordFamily: {
      nouns: [{ term: 'textbook', vi: 'sách giáo khoa' }, { term: 'text', vi: 'văn bản' }],
      verbs: [],
      adjectives: [{ term: 'textbook', vi: 'chuẩn mực, điển hình (adj)' }],
      adverbs: [],
    },
    collocations: [
      { phrase: 'standard textbook', vi: 'sách giáo khoa chuẩn mực', example: 'This volume has served as the standard textbook in biochemistry for two decades.' },
      { phrase: 'textbook example', vi: 'ví dụ điển hình mẫu mực', example: 'The corporate restructuring was a textbook example of crisis management.' },
    ],
    examples: [
      { en: 'Digital interactive textbooks are increasingly supplanting traditional heavy printed manuals.', vi: 'Sách giáo khoa tương tác kỹ thuật số đang ngày càng thay thế các cẩm nang in ấn dày cộp truyền thống.' },
      { en: 'Each chapter in the textbook concludes with comprehensive problem sets and case studies.', vi: 'Mỗi chương trong sách giáo khoa kết thúc với các bộ bài tập và tình huống nghiên cứu toàn diện.' },
    ],
    synonyms: [
      { term: 'coursebook', vi: 'sách bài học', phonetic: '/ˈkɔːrs.bʊk/' },
      { term: 'manual', vi: 'cẩm nang giáo trình', phonetic: '/ˈmæn.ju.əl/' },
      { term: 'primer', vi: 'sách vỡ lòng nhập môn', phonetic: '/ˈpraɪ.mɚ/' },
    ],
    antonyms: [],
  },

  // 39. thesis (n.)
  {
    id: 'thesis',
    term: 'thesis',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈθiː.sɪs/',
    phoneticUk: '/ˈθiː.sɪs/',
    definitionVi: 'luận văn tốt nghiệp; luận điểm cốt lõi bảo vệ',
    detailedMeaningVi:
      'Công trình nghiên cứu học thuật công phu do ứng viên học vị thạc sĩ/tiến sĩ trình bày để bảo vệ trước hội đồng; hoặc luận đề chính của một bài nghị luận.',
    definitionEn: 'a long essay or dissertation involving personal research, written for a degree; a proposition to be maintained or proved',
    cefrLevel: 'B2',
    roots: [{ rootId: 'thesis_greek_root', rootName: 'Thesis (đặt xuống, xác lập)', meaningVi: 'luận điểm vững chãi (Hy Lạp)' }],
    anatomy: {
      rootParts: [{ text: 'thesis', rootId: 'thesis', rootName: 'Thesis', meaningVi: 'đặt định một mệnh đề (Hy Lạp: tithenai)' }],
      formula: 'tithenai (đặt ra một mệnh đề) → thesis (luận điểm vững chắc cần bảo vệ)',
      explanation: 'Mệnh đề được đặt lên bàn học thuật để bảo vệ bằng lý lẽ thép.',
    },
    wordFamily: {
      nouns: [{ term: 'thesis', vi: 'luận văn, luận điểm' }, { term: 'theses', vi: 'các luận văn (số nhiều)' }],
      verbs: [],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      { phrase: 'defend a thesis', vi: 'bảo vệ luận văn', example: 'She successfully defended her doctoral thesis before an international committee of professors.' },
      { phrase: 'thesis statement', vi: 'câu chủ đề / câu nêu luận điểm', example: 'Your introductory paragraph should articulate a concise, persuasive thesis statement.' },
    ],
    examples: [
      { en: 'His master’s thesis explored the economic viability of offshore wind farms along coastlines.', vi: 'Luận văn thạc sĩ của anh đã khám phá tính khả thi kinh tế của các trang trại điện gió ngoài khơi dọc bờ biển.' },
      { en: 'The central thesis of the sociological paper asserts that urban density fosters creative synergy.', vi: 'Luận điểm trung tâm của bài báo xã hội học khẳng định rằng mật độ đô thị thúc đẩy sự cộng hưởng sáng tạo.' },
    ],
    synonyms: [
      { term: 'dissertation', vi: 'luận án tiến sĩ', phonetic: '/ˌdɪs.ɚˈteɪ.ʃən/' },
      { term: 'treatise', vi: 'chuyên khảo', phonetic: '/ˈtriː.t̬ɪs/' },
      { term: 'proposition', vi: 'mệnh đề lập luận', phonetic: '/ˌprɑː.pəˈzɪʃ.ən/' },
    ],
    antonyms: [
      { term: 'antithesis', vi: 'phản đề', phonetic: '/ænˈtɪθ.ə.sɪs/' },
    ],
  },

  // 40. workshop (n.)
  {
    id: 'workshop',
    term: 'workshop',
    partOfSpeech: 'n.',
    phoneticUs: '/ˈwɝːk.ʃɑːp/',
    phoneticUk: '/ˈwɜːk.ʃɒp/',
    definitionVi: 'xưởng thực hành chế tạo; buổi hội thảo tập huấn thực chiến',
    detailedMeaningVi:
      'Không gian phân xưởng cơ khí/nghệ thuật; hoặc cuộc họp nhóm chuyên sâu nơi người tham gia bắt tay trực tiếp thực hành một kỹ năng cụ thể.',
    definitionEn: 'a room or building in which goods are made or repaired; an interactive meeting where participants engage in hands-on learning',
    cefrLevel: 'B2',
    roots: [{ rootId: 'weorc_scoppa', rootName: 'Work (làm việc) + Shop (công xưởng)', meaningVi: 'phân xưởng làm việc (Old English)' }],
    anatomy: {
      rootParts: [
        { text: 'work', rootId: 'work', rootName: 'Work', meaningVi: 'lao động, chế tác' },
        { text: 'shop', rootId: 'shop', rootName: 'Shop', meaningVi: 'xưởng, nhà xưởng' },
      ],
      formula: 'work (lao động thực hành) + shop (nhà xưởng) → workshop (nơi bắt tay vào hành động thực tiễn)',
      explanation: 'Không chỉ nghe lý thuyết mà trực tiếp nhúng tay vào rèn giũa kỹ năng.',
    },
    wordFamily: {
      nouns: [{ term: 'workshop', vi: 'xưởng, hội thảo thực hành' }],
      verbs: [{ term: 'workshop', vi: 'đem ra hội thảo để cùng trau chuốt (v)' }],
      adjectives: [],
      adverbs: [],
    },
    collocations: [
      { phrase: 'hands-on / practical workshop', vi: 'buổi hội thảo thực hành thực chiến', example: 'The academy hosted a hands-on workshop on mobile app development.' },
      { phrase: 'workshop participants', vi: 'những người tham gia hội thảo', example: 'Workshop participants collaborated in small groups to solve engineering challenges.' },
    ],
    examples: [
      { en: 'Graduate teaching assistants attended a dynamic two-day workshop on pedagogical techniques.', vi: 'Các trợ giảng cao học đã tham dự một buổi hội thảo năng động kéo dài hai ngày về các kỹ thuật sư phạm.' },
      { en: 'The mechanical engineering department houses an advanced robotic fabrication workshop.', vi: 'Khoa kỹ thuật cơ khí có một xưởng chế tạo robot tiên tiến.' },
    ],
    synonyms: [
      { term: 'masterclass', vi: 'lớp học bậc thầy', phonetic: '/ˈmæs.tɚ.klæs/' },
      { term: 'clinic', vi: 'buổi rèn luyện chuyên đề', phonetic: '/ˈklɪn.ɪk/' },
      { term: 'studio', vi: 'xưởng nghệ thuật', phonetic: '/ˈstuː.di.oʊ/' },
    ],
    antonyms: [],
  },
];
