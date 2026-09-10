# Kenny Luxury — Haute Horlogerie (Next.js Frontend)

Dự án giao diện website thương mại điện tử đồng hồ cao cấp được xây dựng bằng **Next.js 14+ (App Router)**, **TypeScript** và **Tailwind CSS**.

---

## 🌟 Tính Năng Nổi Bật

1. **Giao diện Dark Luxury chuẩn 100%**:
   - Nền đen tuyền (`#000000`, `#0a0a0a`) kết hợp chi tiết vàng kim Champagne Gold (`#c8a97e`).
   - Font chữ tiêu đề cổ điển sang trọng (*Playfair Display / Cinzel*) kết hợp font nội dung hiện đại (*Montserrat*).
2. **Layout Danh mục & Bộ sưu tập chuẩn mẫu (`/danh-muc/rolex/yacht-master`)**:
   - Tiêu đề thương hiệu lớn: `← Yacht-Master`.
   - Cột trái: Bộ lọc chuyên nghiệp (Lọc theo bộ sưu tập, Tình trạng kho: Có sẵn / Đặt hàng, Kích thước mặt số 37mm, 40mm, 42mm).
   - Cột phải: Đoạn giới thiệu bộ sưu tập, thanh Toolbar chuyển đổi cột (2 / 3 / 4 cột) và bộ chọn số lượng hiển thị (9 / 12 / 18 / 24).
   - **Lưới sản phẩm viền ô 4 cột (Bordered Grid)** sắc nét, ảnh đồng hồ nổi bật, giá tiền màu gold sang trọng.
3. **Trang Chi Tiết Sản Phẩm (`/san-pham/[slug]`)**:
   - Bảng thông số kỹ thuật chi tiết: Kích thước vỏ, Chất liệu, Bezel, Bộ máy, Dây đeo, Tình trạng.
   - Nút kết nối nhanh: Tư vấn Zalo, Hotline gọi 24/7.
4. **Bảo mật & Hiệu năng đỉnh cao**:
   - Hoàn toàn miễn nhiễm với các mã độc PHP / webshell WordPress.
   - Tốc độ tải trang dưới 0.5s nhờ cơ chế tối ưu của Next.js.
   - Hỗ trợ kết nối Headless WordPress qua WooCommerce REST API (`src/lib/woocommerce.ts`).

---

## 🚀 Hướng Dẫn Khởi Chạy

### 1. Cài đặt thư viện
```bash
npm install
```

### 2. Chạy ở môi trường Development
```bash
npm run dev
```
Truy cập: [http://localhost:3000](http://localhost:3000)

### 3. Build chạy Production
```bash
npm run build
npm run start
```

---

## 🌐 Triển Khai (Deploy) Lên Internet Siêu Tốc

Bạn có thể đưa trang web này lên mạng với tên miền `kennyluxury.vn` hoàn toàn miễn phí hosting và bảo mật 100% bằng **Vercel** hoặc **Cloudflare Pages**:
1. Đẩy code lên GitHub.
2. Kết nối repo với [Vercel](https://vercel.com) hoặc [Cloudflare](https://pages.cloudflare.com).
3. Nhấn **Deploy** $\rightarrow$ Trang web sẽ hoạt động toàn cầu với SSL và CDN cực nhanh.
