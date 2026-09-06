export interface SuffixItem {
  id: string;
  suffix: string;
  targetPos: 'noun' | 'verb' | 'adjective' | 'adverb';
  meaningEn: string;
  meaningVi: string;
  origin: string;
  examples: Array<{ word: string; vi: string }>;
}

export const SUFFIXES_DATABASE: Record<string, SuffixItem> = {
  tion_sion: {
    id: 'tion_sion',
    suffix: '-tion / -sion',
    targetPos: 'noun',
    meaningEn: 'act of, state of, process of',
    meaningVi: 'hành động, trạng thái, quá trình tạo danh từ',
    origin: 'Latin',
    examples: [
      { word: 'construction', vi: 'sự xây dựng' },
      { word: 'prediction', vi: 'lời tiên đoán' },
      { word: 'attraction', vi: 'sức hấp dẫn, điểm tham quan' },
      { word: 'conclusion', vi: 'kết luận' },
    ],
  },
  ment: {
    id: 'ment',
    suffix: '-ment',
    targetPos: 'noun',
    meaningEn: 'action, result of, state of',
    meaningVi: 'kết quả, hành động, sự việc',
    origin: 'Latin / French',
    examples: [
      { word: 'development', vi: 'sự phát triển' },
      { word: 'movement', vi: 'sự chuyển động, phong trào' },
      { word: 'agreement', vi: 'sự đồng thuận, thỏa ước' },
      { word: 'punishment', vi: 'hình phạt' },
    ],
  },
  er_or_ist: {
    id: 'er_or_ist',
    suffix: '-er / -or / -ist',
    targetPos: 'noun',
    meaningEn: 'one who does an action, specialist',
    meaningVi: 'người thực hiện hành động, chuyên gia',
    origin: 'Old English / Latin / Greek',
    examples: [
      { word: 'actor', vi: 'nam diễn viên' },
      { word: 'instructor', vi: 'người hướng dẫn, giảng viên' },
      { word: 'scientist', vi: 'nhà khoa học' },
      { word: 'builder', vi: 'người xây dựng, thợ xây' },
    ],
  },
  ity_ty: {
    id: 'ity_ty',
    suffix: '-ity / -ty',
    targetPos: 'noun',
    meaningEn: 'state or quality of being',
    meaningVi: 'tính chất, phẩm chất, tình trạng',
    origin: 'Latin',
    examples: [
      { word: 'activity', vi: 'hoạt động' },
      { word: 'clarity', vi: 'sự rõ ràng, trong trẻo' },
      { word: 'creativity', vi: 'tính sáng tạo' },
      { word: 'security', vi: 'an ninh, sự an toàn' },
    ],
  },
  ness: {
    id: 'ness',
    suffix: '-ness',
    targetPos: 'noun',
    meaningEn: 'state, condition, or quality of',
    meaningVi: 'trạng thái, tính chất (tạo danh từ từ tính từ)',
    origin: 'Old English',
    examples: [
      { word: 'darkness', vi: 'bóng tối' },
      { word: 'kindness', vi: 'lòng tốt' },
      { word: 'calmness', vi: 'sự điềm tĩnh' },
      { word: 'happiness', vi: 'hạnh phúc' },
    ],
  },
  able_ible: {
    id: 'able_ible',
    suffix: '-able / -ible',
    targetPos: 'adjective',
    meaningEn: 'capable of, worthy of, fit for',
    meaningVi: 'có thể được, xứng đáng được',
    origin: 'Latin',
    examples: [
      { word: 'portable', vi: 'có thể xách tay mang theo' },
      { word: 'predictable', vi: 'có thể dự đoán trước' },
      { word: 'affordable', vi: 'vừa túi tiền, chi trả được' },
      { word: 'visible', vi: 'có thể nhìn thấy được' },
    ],
  },
  ive_ative: {
    id: 'ive_ative',
    suffix: '-ive / -ative',
    targetPos: 'adjective',
    meaningEn: 'tending to, performing, having nature of',
    meaningVi: 'có tính chất, có xu hướng',
    origin: 'Latin',
    examples: [
      { word: 'active', vi: 'năng động, chủ động' },
      { word: 'attractive', vi: 'thu hút, hấp dẫn' },
      { word: 'constructive', vi: 'mang tính xây dựng' },
      { word: 'creative', vi: 'sáng tạo' },
    ],
  },
  al_ial: {
    id: 'al_ial',
    suffix: '-al / -ial',
    targetPos: 'adjective',
    meaningEn: 'relating to, characterized by',
    meaningVi: 'thuộc về, liên quan đến',
    origin: 'Latin',
    examples: [
      { word: 'structural', vi: 'thuộc về kết cấu' },
      { word: 'educational', vi: 'mang tính giáo dục' },
      { word: 'traditional', vi: 'thuộc về truyền thống' },
      { word: 'continental', vi: 'thuộc về lục địa' },
    ],
  },
  ful_less: {
    id: 'ful_less',
    suffix: '-ful (full of) / -less (without)',
    targetPos: 'adjective',
    meaningEn: 'full of / lacking, without',
    meaningVi: 'tràn đầy / không có, thiếu vắng',
    origin: 'Old English',
    examples: [
      { word: 'hopeful', vi: 'đầy hy vọng' },
      { word: 'hopeless', vi: 'vô vọng' },
      { word: 'careful', vi: 'cẩn thận' },
      { word: 'careless', vi: 'bất cẩn' },
    ],
  },
  ize_ise: {
    id: 'ize_ise',
    suffix: '-ize / -ise',
    targetPos: 'verb',
    meaningEn: 'to make, to become, to cause to be',
    meaningVi: 'làm cho trở thành, hóa (công nghiệp hóa...)',
    origin: 'Greek / Latin',
    examples: [
      { word: 'summarize', vi: 'tóm tắt lại' },
      { word: 'organize', vi: 'tổ chức, sắp đặt' },
      { word: 'specialize', vi: 'chuyên môn hóa' },
      { word: 'modernize', vi: 'hiện đại hóa' },
    ],
  },
  ify_fy: {
    id: 'ify_fy',
    suffix: '-ify / -fy',
    targetPos: 'verb',
    meaningEn: 'to make, cause to become',
    meaningVi: 'làm cho trở thành',
    origin: 'Latin',
    examples: [
      { word: 'clarify', vi: 'làm sáng tỏ' },
      { word: 'simplify', vi: 'đơn giản hóa' },
      { word: 'identify', vi: 'nhận diện' },
      { word: 'beautify', vi: 'làm đẹp' },
    ],
  },
  ly: {
    id: 'ly',
    suffix: '-ly',
    targetPos: 'adverb',
    meaningEn: 'in the manner of, at intervals of',
    meaningVi: 'một cách (tạo trạng từ từ tính từ)',
    origin: 'Old English',
    examples: [
      { word: 'actively', vi: 'một cách tích cực, chủ động' },
      { word: 'constructively', vi: 'một cách xây dựng' },
      { word: 'clearly', vi: 'một cách rõ ràng' },
      { word: 'rapidly', vi: 'một cách nhanh chóng' },
    ],
  },
};
