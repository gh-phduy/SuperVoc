# SuperVoc - Siêu Từ Điển Gốc Từ & Sắc Thái Từ Vựng

Ứng dụng học từ vựng tiếng Anh chuyên sâu trên nền tảng **React Native (Expo SDK)** kết hợp với **Supabase Cloud**, tập trung vào phương pháp học theo **Gốc từ (Etymology)**, **Phả hệ gia đình từ (Word Family Matrix)**, **Sắc thái nghĩa chuyên sâu (Detailed Nuance & Semantic Imagery)** và các bộ từ chọn lọc **Oxford 5000**.

---

## ✨ Tính Năng Nổi Bật

- 🏛️ **Gốc từ & Phân tích hình thái (Etymology & Word Anatomy):**
  - Khám phá nguồn gốc sâu xa của từ từ tiếng Latinh, Hy Lạp cổ.
  - Phân tích chi tiết tiền tố (Prefix), gốc từ (Root) và hậu tố (Suffix) theo công thức trực quan.
- 🎯 **Sắc thái nghĩa chuyên sâu (Detailed Semantic Nuance):**
  - Giải mã sự khác biệt tinh tế giữa các từ đồng nghĩa (như *engulf* vs *submerge* vs *inundate*).
  - Khắc họa hình ảnh và bản chất cảm xúc đằng sau từng từ vựng.
- 🌳 **Phả hệ gia đình từ (Word Family Matrix):**
  - Liên kết toàn diện danh từ (Noun), động từ (Verb), tính từ (Adjective) và phó từ (Adverb) kèm phiên âm IPA chuẩn và câu ví dụ.
- 🏥 **Bộ từ vựng Oxford 5000 chuẩn hóa:**
  - Tích hợp các bộ từ chuyên đề theo cấp độ CEFR (như *Oxford B2 Extended: Health, Medicine, Mind & Psychology*).
- 🔗 **Mạng lưới từ đồng nghĩa & trái nghĩa liên thông:**
  - Chạm vào bất kỳ từ nào để mở ngay hồ sơ đầy đủ với độ trễ 0ms ($O(1)$ Hash Map Cache).
- 🔊 **Phát âm US & UK:**
  - Tích hợp phát âm chuẩn giọng Anh-Mỹ và Anh-Anh kèm phiên âm IPA chi tiết.
- 📱 **Giao diện hiện đại & Safe Area thông minh:**
  - Tối ưu 60 FPS, hỗ trợ mọi loại màn hình (tai thỏ, đục lỗ Dynamic Island) trên cả Android và iOS.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** React Native, Expo SDK, TypeScript
- **Icons & UI:** `lucide-react-native`, `react-native-safe-area-context`
- **Backend & Database:** Supabase (PostgreSQL), Supabase JS Client
- **Build Tool:** EAS CLI (Expo Application Services)

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Cài đặt dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Cấu hình biến môi trường
Tạo tệp `.env` tại thư mục gốc dựa trên `.env.example`:
```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Chạy ứng dụng ở môi trường phát triển
```bash
npx expo start
```

### 4. Đồng bộ dữ liệu lên Supabase
```bash
npx tsx scripts/seed-supervoc-supabase.mjs
```

### 5. Đóng gói kiểm tra / Build APK
```bash
# Kiểm tra bundle
npx expo export --no-minify

# Build APK xem trước trên Android
npx eas-cli build -p android --profile preview
```
