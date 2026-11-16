# Changelog

## 2026-11-16 — Initiatives theo Figma 4072:319

- Cho phép cuộn toàn màn Initiatives, bỏ thu nhỏ nội dung để vừa chiều cao. Đây là ngoại lệ mới cho yêu cầu màn cố định bên dưới.
- Card dùng Google Sans Flex: tiêu đề 22px/700, tracking 0.44px, mô tả 16px/400 với line-height 1.6; padding 24px, gap 16px.
- Ảnh có khung 80×80px, bo 8px và crop theo từng ảnh Figma; mũi tên hướng sang phải. Giữ border nối liền và chỉ bo góc ngoài.
- Cập nhật kiểm tra vùng cuộn và hướng dẫn README.

## 2026-11-16 — Responsive theo Figma, mobile dưới 970px

### Kế hoạch đã thống nhất

- Nguồn thiết kế: [SAFRA — Mobile - 13 Nov 2026](https://www.figma.com/design/MiTUccF1JLzDrenWoASYkH/-SAFRA--Tech-handover?node-id=3978-269&m=dev), frame tham chiếu 393 × 852.
- Dùng UI mobile khi chiều rộng <970px, desktop từ 970px; không phụ thuộc cảm ứng. Giữ section/story khi đổi kích thước và xoay màn hình.
- Responsive theo chiều rộng/chiều cao thực tế; đối chiếu masthead, At a glance, 5 chủ đề, các story, membership, facilities, Looking forward, gallery/video và CTA với Figma. Nội dung dài phải cuộn được trước khi chuyển màn.
- Dùng chung nội dung và animation desktop/mobile: intro, reveal chữ/ảnh, bộ đếm, thanh tiến trình, mở chủ đề, menu, gallery; điều chỉnh hình học theo mobile. Chuyển tương tác hover sang chạm/xuất hiện, duy trì reduced motion.
- Hoàn thiện 4 + 4 + 6 story và Back/Next, menu, URL trực tiếp, lịch sử trình duyệt; chặn một gesture nhảy qua nhiều màn.
- Kiểm tra bằng computer use tại 320, 375, 390, 393, 430, 768, 820, 969, 970, 971, 1024, 1280, 1440, 1920px; thêm màn thấp, landscape, resize, menu/gallery, cuộn hai chiều.
- Chạy kiểm tra điều hướng/cuộn và bản build. Ghi rõ phạm vi mô phỏng và kiểm tra thiết bị thật.

### Hiện trạng trước cập nhật

- 393px và 969px vẫn hiển thị desktop thu nhỏ: điều kiện cũ yêu cầu ≤767px và `(hover: none) and (pointer: coarse)`.
- Mobile cố định 390 × 844; thiếu story và một số chủ đề. README mô tả khác mã thực tế.
- Kiểm tra hiện có: 2 đạt, 4 chưa đạt (cuộn, điều hướng mobile và thiếu requestAnimationFrame trong môi trường test).

### Yêu cầu bổ sung trong quá trình thực hiện

- Mỗi màn phải nằm trọn trong một khung cố định; không có cuộn nội bộ. Chỉ `#clubs-and-facilities` được phép cuộn. Bố cục/co giãn theo chiều cao khả dụng, kể cả khi mở accordion.
- Không thêm cụm Previous / số thứ tự / Next ở cuối story hoặc nút Continue; dùng vuốt/cuộn để chuyển màn. Giữ nút Back. Theo ảnh phản hồi tiếp theo, bỏ cả nhãn NEXT: [tên chủ đề] ở cuối màn mobile.

- Ngoại lệ được bổ sung: khối Top Picks cuộn nội bộ khi mở accordion; toàn màn Rewarding privileges vẫn cố định. Gesture cuộn phải kết thúc trước khi gesture mới chuyển màn.

### Đã thực hiện

- Đổi lựa chọn layout thành mobile `<970px`, desktop `≥970px`, không kiểm tra loại con trỏ. Dùng kích thước viewport thực tế và khôi phục section/story/gallery qua URL khi đổi layout.
- Làm lại template mobile: masthead, 3 panel At a glance, 5 chủ đề, đủ 14 story, Rewarding privileges, Clubs & Facilities, Looking forward và CTA. Dùng chung bản nội dung, bộ đếm, ảnh/gallery/video và logic animation với desktop.
- Mỗi màn mobile được đo lại bằng ResizeObserver và co giãn đồng tỷ lệ để nằm trọn trong khung, kể cả khi đổi chiều hoặc mở accordion. Màn Clubs & Facilities cuộn natively và lưu/khôi phục offset trong URL.
- Top Picks có vùng cuộn nội bộ, bốn accordion mở/đóng tại chỗ, mặc định đóng theo ghi chú Figma. Hiển thị đầy đủ ảnh ưu đãi và đúng biểu tượng cộng/trừ.
- Bỏ Previous / số thứ tự / Next, các nhãn Next-topic và nút Continue ở mobile theo phản hồi. Giữ nút Back và menu. Vuốt, wheel/trackpad và phím mũi tên/Page điều hướng màn; gesture đã dùng để cuộn không tiếp tục nhảy màn.
- Chuyển tương tác hover phù hợp sang trạng thái chạm/focus; giữ reveal chữ/ảnh, bộ đếm, thanh tiến trình, chuyển accordion, mở gallery và reduced motion. Desktop tiếp tục dùng template và bố cục cũ.
- Tải ảnh/biểu tượng từ Figma về dự án; tối ưu ảnh JPEG tối đa 1200px, không dùng URL ảnh Figma tạm thời. Bổ sung MobileGlance.jsx để tái sử dụng các thẻ và số liệu live.
- Cập nhật README theo breakpoint và hành vi cuộn thực tế.

### Kiểm tra

- Computer use trong Chrome và trình duyệt tích hợp: đối chiếu At a glance, danh sách chủ đề, các story, accordion Top Picks, Clubs & Facilities, Looking forward, ảnh và video gallery.
- Xác minh breakpoint tại 320, 375, 390, 393, 430, 768, 820, 969, 970, 971, 1024, 1280, 1440 và 1920px. Mobile đúng đến 969px; desktop từ 970px. Resize mobile → desktop → mobile giữ story đang xem.
- Kiểm tra thêm 320×568, 393×600, 844×390 (landscape), 969×600 và 393×852. Năm chủ đề vẫn nằm trong khung; màn cố định không có cuộn nội bộ.
- Xác minh video Gratitude in Bloom mở trong gallery, có 4 thumbnail; đóng gallery quay lại đúng story. Ảnh và nội dung các màn kiểm tra không thiếu file.
- Bộ kiểm tra tự động bao gồm điều hướng URL/history, toàn bộ 14 story và gallery, ảnh local, vùng cuộn được phép, gesture ở biên và thứ tự các accordion ưu tiên: 9/9 đạt.
- Bản build mặc định, UAT và production được kiểm tra. Vite có cảnh báo kích thước gói JavaScript; không có lỗi build.
- Phạm vi kiểm tra thiết bị: viewport mô phỏng trên trình duyệt máy tính; chưa kiểm tra trực tiếp trên iPhone/Android thật.

### Tệp liên quan

- `src/App.jsx`, `src/artboard/templateMobile.jsx`, `src/artboard/MobileGlance.jsx`.
- `src/artboard/ArtboardLogic.js`, `src/artboard/routes.js`.
- `src/styles/mobile.css`, `src/styles/app.css`, `public/assets/mobile-*`.
- `tests/artboard-routes.test.js`, `tests/initiatives-scroll.test.js`, `tests/mobile-render.test.js`, `README.md`.

