# 🎂 Web chúc mừng sinh nhật — Bầu trời sao

Một trang web chúc mừng sinh nhật lãng mạn, viết bằng **HTML + CSS + JavaScript thuần** (không cần cài thư viện, không cần server). Người nhận mở một lá thư, đọc lời chúc chạy từng chữ, rồi bước vào một **bầu trời sao 360°** đầy pháo hoa, bóng bay và ảnh kỷ niệm.

## ✨ Trang web có gì

- 💌 **Lá thư + đếm ngược** đến ngày sinh nhật, bấm vào phong thư để mở.
- ✍️ **Thiệp thư tay**: lời chúc hiện dần từng chữ như đang được viết.
- 🌌 **Bầu trời sao 360°** vẽ bằng WebGL: kéo chuột (hoặc xoay điện thoại ở chế độ la bàn 🧭) để nhìn quanh, chạm vào bầu trời để thả tim.
- 🎆 Pháo hoa, confetti, mưa tim và dòng chữ xếp bằng các vì sao.
- 🎈 **Vòm bóng bay hồng vàng** chạy dọc hai bên màn hình (bóng tròn, bóng trong suốt kim tuyến, bóng bạc hình tim và sao), cùng những quả bóng bay lên khi bấm vào sẽ nổ.
- 🎂 **Ảnh bánh sinh nhật** ở giữa, hai bên là khung iPhone và ảnh polaroid, ảnh tự đổi qua lại nhẹ nhàng.
- ⭐ **Ngôi sao bí mật** giấu trên bầu trời: tìm thấy và bấm vào sẽ hiện một lời nhắn riêng.
- 🎵 **Nhạc nền** phát lặp liên tục đến khi đóng trang, có nút bật/tắt ở góc phải.
- 📱 Hiển thị tốt trên máy tính, máy tính bảng và điện thoại.

## 📁 Cấu trúc thư mục

```
WEB_HBBD_NTN/
├── index.html      # khung trang
├── style.css       # giao diện, màu sắc, bố cục
├── script.js       # nội dung (khối CONFIG ở đầu file) + hiệu ứng
├── README.md       # file này
├── image/          # ảnh bánh (cake.jpg) và ảnh kỷ niệm
└── music/          # file nhạc nền .mp3
```

> Tất cả đường dẫn trong code đều là **đường dẫn tương đối** (`image/...`, `music/...`), nên chép cả thư mục sang máy khác hay đưa lên GitHub Pages vẫn chạy bình thường.

## 🚀 Chạy trên máy

Cách đơn giản nhất: **mở file `index.html` bằng Chrome** (nhấp đúp hoặc kéo thả vào trình duyệt). Cần có Internet để tải phông chữ Google Fonts, nếu không trang vẫn chạy nhưng dùng phông dự phòng.

Nếu muốn chạy qua server nội bộ:

```bash
python -m http.server 8000
# rồi mở http://localhost:8000
```

## ✏️ Chỉnh nội dung (chỉ cần sửa khối `CONFIG` ở đầu `script.js`)

| Mục | Ý nghĩa |
| --- | --- |
| `name`, `shortName` | Tên đầy đủ và tên gọi thân mật của người nhận |
| `birthDate` | Ngày sinh gốc (`YYYY-MM-DD`), dùng để tính tuổi mới |
| `birthday` | Thời điểm sinh nhật để đếm ngược (`YYYY-MM-DDTHH:mm`), để `""` nếu không cần |
| `from` | Tên/biệt danh của bạn ở cuối lời chúc, để `""` nếu muốn ẩn |
| `introTitle`, `introSub` | Tiêu đề và dòng chữ nhỏ ở màn lá thư |
| `wishTitle`, `wishes` | Tiêu đề và các đoạn lời chúc |
| `letterGreeting`, `letterBefore`, `letterAfter`, `letterEnd`, `letterBtn` | Nội dung thiệp thư tay (dùng `{date}` cho ngày sinh nhật, `{age}` cho tuổi mới) |
| `typeSpeed` | Tốc độ chữ chạy (mili-giây mỗi chữ, càng lớn càng chậm) |
| `music` | Danh sách file nhạc `files`, âm lượng `volume`, `loop`, giây bắt đầu `startAt` |
| `cakeCaption`, `cakePhotos` | Dòng chữ và ảnh bánh sinh nhật |
| `phonePhotos` | Danh sách ảnh hai bên (xem bên dưới) |
| `skyBanner` | Dòng chữ xếp bằng các vì sao trên bầu trời |
| `loveNotes` | Những câu nhắn lơ lửng trong vũ trụ |
| `secretTitle`, `secretMessages` | Lời nhắn của ngôi sao bí mật |

### 🖼️ Thay ảnh

- **Ảnh bánh**: thay ảnh mới vào `image/cake.jpg` (hoặc sửa `src` trong `cakePhotos`).
- **Ảnh hai bên**: bỏ ảnh vào thư mục `image/` rồi ghi `{ src: "image/ten-file.jpg" }` trong `phonePhotos`. Thứ tự: iPhone trái, iPhone phải, polaroid trên-trái, trên-phải, dưới-trái, dưới-phải.
- Có thể thêm `pos: "50% 30%"` để chọn phần ảnh nằm giữa khung; riêng 4 ảnh polaroid còn có `zoom` (phóng to, ví dụ `1.5`) và `at` (vị trí khuôn mặt, ví dụ `"50% 40%"`).
- Nhiều hơn 6 ảnh thì các khung sẽ lần lượt đổi ảnh. Ảnh nào lỗi hoặc thiếu sẽ tự bị bỏ qua.

### 🎵 Đổi nhạc

Bỏ file `.mp3` vào thư mục `music/` rồi sửa tên ở dòng `files` trong `music`. Nên đặt tên file **không dấu, không dấu cách** (ví dụ `happy-birthday.mp3`) cho an toàn.

## 🌐 Đưa lên GitHub Pages

1. Đẩy toàn bộ thư mục lên GitHub (nhớ đủ cả `image/` và `music/`):
   ```bash
   git add -A
   git commit -m "Cap nhat web sinh nhat"
   git push
   ```
2. Vào repo trên GitHub → **Settings → Pages**.
3. Ở **Build and deployment**, chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, rồi **Save**.
4. Chờ khoảng 1–2 phút, trang sẽ chạy tại địa chỉ:
   `https://<tên-người-dùng-GitHub>.github.io/<tên-repo>/`

Lưu ý khi deploy:

- GitHub Pages **phân biệt chữ hoa/thường**: tên file trong code phải khớp từng ký tự với tên file trong repo.
- `index.html` phải nằm ở thư mục gốc của repo.
- Sau khi cập nhật, nhấn **Ctrl + F5** để trình duyệt tải bản mới. Nếu ảnh hoặc nhạc không hiện, mở F12 → tab Network để xem file nào báo 404.

## 💡 Mẹo nhỏ

- Trình duyệt chỉ cho phát nhạc sau khi người dùng chạm vào trang, nên nhạc bắt đầu khi bấm mở phong thư.
- Nếu máy bật chế độ giảm chuyển động, các hiệu ứng sẽ tự dịu lại.
- Trang không có máy chủ riêng và không thu thập dữ liệu của người xem, mọi thứ chạy ngay trong trình duyệt (chỉ tải phông chữ từ Google Fonts).

## 🛠️ Công nghệ

HTML5, CSS3, JavaScript (WebGL, Canvas, SVG), Google Fonts (Baloo 2, Pacifico, Dancing Script). Không dùng framework hay thư viện ngoài.

---

Làm bằng tất cả tấm lòng 💖
