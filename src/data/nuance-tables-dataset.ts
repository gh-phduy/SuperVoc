import { SupervocNuanceTable } from './supervoc-roots-dataset';

// =============================================================================
// 1. NHÓM SẮC THÁI: BAO TRÙM, NHẤN CHÌM & NUỐT TRỌN
// =============================================================================
export const NUANCE_TABLE_ENGULF: SupervocNuanceTable = {
  topicVi: 'Phân biệt Sắc thái: Bao trùm, Nhấn chìm & Nuốt trọn',
  summaryVi:
    'Cùng mang nét nghĩa "ngập, chìm, nuốt", nhưng khác nhau hoàn toàn về tác nhân (nước, lửa, bóng tối, số lượng) và hình ảnh bản chất.',
  items: [
    {
      term: 'engulf',
      partOfSpeech: 'v.',
      phonetic: '/ɪnˈɡʌlf/',
      coreNuanceVi: 'Bao trùm hoàn toàn, nuốt trọn từ bên ngoài vào trong; tạo cảm giác một thế lực to lớn cuốn phăng và vùi lấp thực thể bên trong.',
      contextVi: 'Biển lửa thiêu rụi, sóng thần cuồn cuộn, bóng tối dày đặc, nỗi đau buồn bủa vây',
      intensity: 'Cực độ',
      exampleEn: 'The entire wooden cottage was engulfed in flames within minutes.',
      exampleVi: 'Toàn bộ ngôi nhà gỗ đã bị ngọn lửa bao trùm chỉ trong vài phút.',
    },
    {
      term: 'submerge',
      partOfSpeech: 'v.',
      phonetic: '/səbˈmɜːrdʒ/',
      coreNuanceVi: 'Dìm sâu hoặc chìm hẳn hoàn toàn dưới bề mặt chất lỏng (nước); nhấn mạnh vào vị trí nằm sâu bên dưới tầng nước.',
      contextVi: 'Tàu ngầm lặn, xe cộ ngập trong nước lũ, thợ lặn, cảm xúc kìm nén sâu bên trong',
      intensity: 'Vừa',
      exampleEn: 'The floodwaters completely submerged the lower levels of the parking garage.',
      exampleVi: 'Nước lũ đã nhấn chìm hoàn toàn các tầng dưới của nhà để xe.',
    },
    {
      term: 'inundate',
      partOfSpeech: 'v.',
      phonetic: '/ˈɪn.ʌn.deɪt/',
      coreNuanceVi: 'Tràn ngập dồn dập vượt quá sức chứa chịu đựng; nghĩa đen là nước lũ tràn đê, nghĩa bóng là khối lượng công việc/yêu cầu ập đến ồ ạt.',
      contextVi: 'Lũ lụt diện rộng, email khiếu nại, cuộc gọi tổng đài, công việc quá tải',
      intensity: 'Cực độ',
      exampleEn: 'The customer service desk was inundated with thousands of complaints.',
      exampleVi: 'Bàn chăm sóc khách hàng đã bị ngập tràn hàng ngàn lời khiếu nại.',
    },
    {
      term: 'swallow',
      partOfSpeech: 'v.',
      phonetic: '/ˈswɑː.loʊ/',
      coreNuanceVi: 'Nuốt chửng vào bên trong họng hoặc lòng đất sâu thẳm, khiến thực thể biến mất hoàn toàn không còn dấu vết.',
      contextVi: 'Đại dương sâu thẳm, hố sụt cát lún, nuốt trọn thức ăn hoặc kìm nén nỗi giận',
      intensity: 'Vừa',
      exampleEn: 'The dark stormy ocean seemed to swallow the small fishing vessel whole.',
      exampleVi: 'Đại dương giông bão tăm tối dường như đã nuốt chửng chiếc tàu đánh cá nhỏ.',
    },
    {
      term: 'overwhelm',
      partOfSpeech: 'v.',
      phonetic: '/ˌoʊ.vɚˈwelm/',
      coreNuanceVi: 'Áp đảo đè bẹp cả về thể xác lẫn tinh thần, khiến đối phương choáng ngợp hoàn toàn không còn sức chống đỡ hay xoay xở.',
      contextVi: 'Lực lượng quân số áp đảo, cảm xúc mãnh liệt (xúc động/lo sợ), áp lực công việc khổng lồ',
      intensity: 'Cực độ',
      exampleEn: 'She was overwhelmed by the unexpected outpouring of community support.',
      exampleVi: 'Cô cảm thấy vô cùng choáng ngợp trước sự ủng hộ nồng nhiệt bất ngờ từ cộng đồng.',
    },
  ],
};

// =============================================================================
// 2. NHÓM SẮC THÁI: NHƯỢNG BỘ, MỀM LÒNG & THUYÊN GIẢM
// =============================================================================
export const NUANCE_TABLE_RELENT: SupervocNuanceTable = {
  topicVi: 'Phân biệt Sắc thái: Nhượng bộ, Mềm lòng & Thuyên giảm',
  summaryVi:
    'Cùng thể hiện sự dịu lại hoặc lùi bước, nhưng khác nhau rõ rệt giữa việc động lòng tha thứ, chịu thua đối thủ, hay bão tố tự giảm cường độ.',
  items: [
    {
      term: 'relent',
      partOfSpeech: 'v.',
      phonetic: '/rɪˈlent/',
      coreNuanceVi: 'Mềm lòng từ bỏ thái độ nghiêm khắc ban đầu để trở nên nhân nhượng tha thứ; hoặc hiện tượng dữ dội (bão táp, nắng nóng) dịu bớt sức tàn phá.',
      contextVi: 'Cha mẹ đổi ý cho phép con cái, cai ngục nới lỏng, bão tuyết ngớt gió, nắng hè hạ nhiệt',
      intensity: 'Vừa',
      exampleEn: 'Her parents initially refused, but they finally relented and let her go on the trip.',
      exampleVi: 'Ban đầu bố mẹ cô từ chối, nhưng cuối cùng họ đã mềm lòng và cho phép cô đi dã ngoại.',
    },
    {
      term: 'yield',
      partOfSpeech: 'v.',
      phonetic: '/jiːld/',
      coreNuanceVi: 'Chịu nhường bước hoặc khuất phục trước sức ép/áp lực của đối phương; hoặc trả về sản lượng thành quả.',
      contextVi: 'Tranh luận chính trị, đầu hàng trước cám dỗ, nhường đường giao thông, sản lượng mùa màng',
      intensity: 'Vừa',
      exampleEn: 'After hours of negotiation, the union leaders finally yielded on wage demands.',
      exampleVi: 'Sau nhiều giờ đàm phán, các lãnh đạo công đoàn cuối cùng đã nhượng bộ về yêu sách tiền lương.',
    },
    {
      term: 'abate',
      partOfSpeech: 'v.',
      phonetic: '/əˈbeɪt/',
      coreNuanceVi: 'Thuyên giảm dần về mặt cường độ, quy mô hay mức độ dữ dội; hầu như chỉ dùng cho hiện tượng tự nhiên hoặc trạng thái tiêu cực.',
      contextVi: 'Gió bão ngớt, tiếng ồn giảm dần, cơn đau buốt thuyên giảm, mức độ ô nhiễm hạ xuống',
      intensity: 'Nhẹ',
      exampleEn: 'We waited patiently in the shelter until the howling hurricane had abated.',
      exampleVi: 'Chúng tôi kiên nhẫn chờ trong nơi trú ẩn cho đến khi cơn bão gầm rú thuyên giảm.',
    },
    {
      term: 'concede',
      partOfSpeech: 'v.',
      phonetic: '/kənˈsiːd/',
      coreNuanceVi: 'Miễn cưỡng thừa nhận một sự thật/thất bại mà mình không muốn, hoặc chịu nhường một phần quyền lợi/lợi thế trong tranh đấu.',
      contextVi: 'Thừa nhận thất bại trong bầu cử, nhượng bàn thua trong thể thao, nhượng bộ điều khoản hợp đồng',
      intensity: 'Vừa',
      exampleEn: 'The candidate conceded defeat after all official ballots were counted.',
      exampleVi: 'Ứng cử viên đã thừa nhận thất bại sau khi toàn bộ phiếu bầu chính thức được kiểm đếm.',
    },
    {
      term: 'soften',
      partOfSpeech: 'v.',
      phonetic: '/ˈsɑːf.ən/',
      coreNuanceVi: 'Làm dịu đi nét mặt, giọng điệu hoặc thái độ gay gắt; mang lại cảm giác ấm áp, thấu cảm hơn.',
      contextVi: 'Ánh mắt nghiêm nghị dịu lại, giọng điệu hòa giải, lập trường bớt cứng nhắc',
      intensity: 'Nhẹ',
      exampleEn: 'His strict expression softened into a gentle smile when he saw his daughter.',
      exampleVi: 'Vẻ mặt nghiêm nghị của ông đã dịu lại thành một nụ cười trìu mến khi nhìn thấy con gái.',
    },
  ],
};

// =============================================================================
// 3. NHÓM SẮC THÁI: KIÊN TRÌ, BỀN BỈ & GAN GÓC
// =============================================================================
export const NUANCE_TABLE_PERSEVERANCE: SupervocNuanceTable = {
  topicVi: 'Phân biệt Sắc thái: Kiên trì, Bền bỉ & Gan góc',
  summaryVi:
    'Đều chỉ ý chí không bỏ cuộc, nhưng khác nhau giữa việc kiên định với kỷ luật sắt đá, sự lì lợm dai dẳng, lòng ngoan cường bám chặt hay sức chịu đựng thể lực.',
  items: [
    {
      term: 'perseverance',
      partOfSpeech: 'n.',
      phonetic: '/ˌpɜːr.səˈvɪr.əns/',
      coreNuanceVi: 'Nỗ lực bền bỉ và ý chí kiên định theo đuổi mục tiêu lớn qua kỷ luật bản thân nghiêm ngặt, bất chấp thất bại hay thời gian kéo dài.',
      contextVi: 'Học tập nghiên cứu nhiều năm, vượt qua nghịch cảnh cuộc đời, khởi nghiệp gian nan',
      intensity: 'Vừa',
      exampleEn: 'Through sheer perseverance, she overcame numerous rejections to publish her novel.',
      exampleVi: 'Nhờ vào sự kiên trì phi thường, cô đã vượt qua vô số lần bị từ chối để xuất bản cuốn tiểu thuyết.',
    },
    {
      term: 'persistence',
      partOfSpeech: 'n.',
      phonetic: '/pɚˈsɪs.təns/',
      coreNuanceVi: 'Sự tiếp tục liên tục không dừng lại; nhấn mạnh vào tính dai dẳng, lặp đi lặp lại (đôi khi có sắc thái lì lợm hoặc khó chịu nếu cố chấp).',
      contextVi: 'Gõ cửa xin việc liên tục, gọi điện mời chào, cơn ho dai dẳng không dứt',
      intensity: 'Vừa',
      exampleEn: 'His relentless persistence in following up on leads secured the major contract.',
      exampleVi: 'Sự kiên trì bám sát các đầu mối liên tục của anh ấy đã mang lại hợp đồng lớn.',
    },
    {
      term: 'tenacity',
      partOfSpeech: 'n.',
      phonetic: '/təˈnæs.ə.t̬i/',
      coreNuanceVi: 'Sự ngoan cường bám chặt lấy mục tiêu như hàm chó săn, quyết không chịu buông tay dù bị tấn công hay chịu áp lực ngàn cân.',
      contextVi: 'Thám tử điều tra án hóc búa, luật sư bảo vệ thân chủ, nhà hoạt động xã hội bảo vệ rừng',
      intensity: 'Cực độ',
      exampleEn: 'The defense attorney fought for her client’s innocence with ferocious tenacity.',
      exampleVi: 'Nữ luật sư bào chữa đã đấu tranh cho sự vô tội của thân chủ với sự ngoan cường quyết liệt.',
    },
    {
      term: 'grit',
      partOfSpeech: 'n.',
      phonetic: '/ɡrɪt/',
      coreNuanceVi: 'Bản lĩnh gan góc, cứng cỏi và dũng khí sắt đá; không bị nghiền nát trước chấn thương hay bi kịch đau đớn.',
      contextVi: 'Vận động viên nén đau thi đấu tiếp, người lính trên chiến trường, vượt qua khủng hoảng phá sản',
      intensity: 'Cực độ',
      exampleEn: 'True champions demonstrate mental grit when trailing behind in the final minutes.',
      exampleVi: 'Những nhà vô địch thực thụ thể hiện bản lĩnh gan góc khi bị dẫn trước ở những phút cuối cùng.',
    },
    {
      term: 'endurance',
      partOfSpeech: 'n.',
      phonetic: '/ɪnˈdʊr.əns/',
      coreNuanceVi: 'Sức chịu đựng dẻo dai của cơ bắp hoặc thần kinh trong một khoảng thời gian dài khắc nghiệt mà không gục ngã.',
      contextVi: 'Chạy marathon đường dài, leo núi tuyết cực nhọc, chịu đựng tra tấn hay điều kiện sống khắc nghiệt',
      intensity: 'Vừa',
      exampleEn: 'Marathon runners need extraordinary physical stamina and psychological endurance.',
      exampleVi: 'Những vận động viên chạy marathon cần thể lực phi thường và sức bền tâm lý dẻo dai.',
    },
  ],
};

// =============================================================================
// 4. NHÓM SẮC THÁI: NÔNG THÔN, THÔN DÃ & RUỘNG ĐẤT
// =============================================================================
export const NUANCE_TABLE_RURAL: SupervocNuanceTable = {
  topicVi: 'Phân biệt Sắc thái: Nông thôn, Thôn dã & Ruộng đất',
  summaryVi:
    'Cùng liên quan đến miền quê, nhưng phân biệt rạch ròi giữa vị trí địa lý, nét thẩm mỹ mộc mạc, cảnh sắc thi vị, tính chất tỉnh lẻ hay thể chế đất đai.',
  items: [
    {
      term: 'rural',
      partOfSpeech: 'adj.',
      phonetic: '/ˈrʊr.əl/',
      coreNuanceVi: 'Thuần túy chỉ vị trí địa lý, dân cư và cơ sở hạ tầng vùng nông thôn (đối lập hoàn toàn với thành thị - urban).',
      contextVi: 'Đường sá thôn quê, y tế vùng nông thôn, di cư nông thôn - thành thị',
      intensity: 'Nhẹ',
      exampleEn: 'Many rural communities still lack convenient access to high-speed internet.',
      exampleVi: 'Nhiều cộng đồng nông thôn vẫn còn thiếu khả năng tiếp cận internet tốc độ cao thuận tiện.',
    },
    {
      term: 'rustic',
      partOfSpeech: 'adj.',
      phonetic: '/ˈrʌs.tɪk/',
      coreNuanceVi: 'Vẻ thô mộc, đơn sơ, chân chất tự nhiên của làng quê; thường dùng trong thẩm mỹ kiến trúc hoặc tính cách con người.',
      contextVi: 'Nội thất bàn ghế gỗ thô mộc, nhà gỗ trong rừng, nếp sống chân chất giản dị',
      intensity: 'Nhẹ',
      exampleEn: 'The mountain cabin was decorated in a cozy rustic style using reclaimed wood.',
      exampleVi: 'Căn nhà gỗ trên núi được bài trí theo phong cách mộc mạc ấm cúng bằng gỗ tái chế.',
    },
    {
      term: 'pastoral',
      partOfSpeech: 'adj.',
      phonetic: '/ˈpæs.tər.əl/',
      coreNuanceVi: 'Vẻ đẹp thanh bình, êm ả và thi vị như tranh vẽ của vùng đồng cỏ chăn cừu; mang đậm chất nghệ thuật lãng mạn.',
      contextVi: 'Tranh phong cảnh đồng quê thanh bình, thơ ca đồng nội, cuộc sống chăn thả yên ả',
      intensity: 'Nhẹ',
      exampleEn: 'The painting depicts an idyllic pastoral scene with grazing sheep beside a sparkling stream.',
      exampleVi: 'Bức tranh miêu tả một khung cảnh đồng quê thanh bình với đàn cừu gặm cỏ bên dòng suối lấp lánh.',
    },
    {
      term: 'provincial',
      partOfSpeech: 'adj.',
      phonetic: '/prəˈvɪn.ʃəl/',
      coreNuanceVi: 'Thuộc về tỉnh lẻ ngoại ô; thường mang hàm ý thiển cận, hạn hẹp về tư duy hoặc thiếu sự sành điệu so với thủ đô/đô thị lớn.',
      contextVi: 'Báo chí địa phương tỉnh lẻ, tư duy tỉnh lẻ hạn hẹp, lối sống xa rời thủ đô',
      intensity: 'Vừa',
      exampleEn: 'He found the cultural life in the small provincial town rather limited and conservative.',
      exampleVi: 'Anh cảm thấy đời sống văn hóa ở thị trấn tỉnh lẻ nhỏ này khá hạn chế và bảo thủ.',
    },
    {
      term: 'agrarian',
      partOfSpeech: 'adj.',
      phonetic: '/əˈɡrer.i.ən/',
      coreNuanceVi: 'Thuộc về cơ cấu kinh tế ruộng đất, chính sách canh tác nông nghiệp và quyền sở hữu đất đai của nông dân.',
      contextVi: 'Cải cách ruộng đất (agrarian reform), xã hội kinh tế thuần nông, đạo luật nông nghiệp',
      intensity: 'Vừa',
      exampleEn: 'The country transitioned successfully from a traditional agrarian economy to an industrial powerhouse.',
      exampleVi: 'Quốc gia đã chuyển đổi thành công từ một nền kinh tế thuần nông truyền thống sang một cường quốc công nghiệp.',
    },
  ],
};
