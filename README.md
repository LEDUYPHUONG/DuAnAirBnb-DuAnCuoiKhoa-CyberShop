  ## Mô tả "Dự Án AirBnB - HKP"
  ### Link deploy: https://cybershop-airbnb-hkp.vercel.app/
  
#### `I.Các chức năng:`
#### 1. Các chức năng ở trang home:
- Xem tất cả các vị trí có thể đặt phòng ( lúc mới vào trang chủ hoặc bấm vào Icon "Tất cả phòng" trên carousel của trang chủ).
- Xem nhanh các vị trí theo gợi ý (Phân trang vị trí khi tìm kiếm vị trí đặt phòng) bằng cách ấn vào các icon trên carousel. Bấm vào chữ Icon (A) thì tìm được những vị trí có chữ A trong đó (Nếu có API phân trang theo đặc điểm của các vị trí thì sẽ làm được y như trang airBnB). Bấm vào nút next hoặc prev để chuyển sang những gợi ý khác.
- bấm vào Thanh Search (Địa điểm bất kỳ | Tuần bất kỳ | Thêm Khách) sẽ mở ra modal có thanh search địa điểm để người dùng gõ từ khóa tìm vị trí có thể đặt phòng. Xuất hiện danh sách vị trí có vị trí chứa từ khóa đã gõ vào để người dùng click vào chọn. Bấm Icon Tìm kiếm để chuyển qua trang roomlist, người dùng sẽ tìm thấy những địa điểm còn phòng có thể đặt ở vị trí đã search.
- Bấm vào Icon "Hiện Bản đồ" để link qua bản đồ vị trí đặt phòng. Cái này phải có tài khoản google map Api, đóng phí hàng tháng để sử dụng nên chỉ dừng ở mức hiện bản đồ chứ trên bản đồ không có hiện ra vị trí đặt phòng.
- Người Dùng có thể click vào button phía sau dòng chữ "Trở thành chủ nhà" chọn mục SignIn hoặc Join để chuyển qua trang đăng nhập hoặc đăng ký.
#### 2. Các chức năng ở trang đăng nhập: 
- Người dùng có thể thao tác trên trang admin và trang manage sau khi đăng nhập thành công bằng email và password đã đăng ký.
#### 3. Các chức năng ở trang đăng ký: 
- Người dùng có thể đăng ký 1 tài khoản bằng 1 email chưa từng được sử dụng để đăng ký trước đó. Sau khi đăng ký thành công, sẽ chuyển ngay sang trang đăng nhập.
#### 4. Các chức năng ở trang roomlist:
- Người dùng có thể nhìn thấy ở vị trí hiện tại có bao nhiêu phòng có thể đặt ở bên trái giao diện, vài thông tin cơ bản của phòng như: địa chỉ của phòng, giá thuê phòng 1 đêm, hình ảnh phòng, tiện ích của phòng ... Ở bên phải giao diện trang roomlist là bản đồ cho biết vị trí những nhà có phòng có thể thuê ở vị trí đã search. Hiện phần google map Api có thu phí khi sử dụng nên chỉ hiện tạm bản đồ tượng trưng.
-  Người dùng có thể click vào các phòng trên giao diện để chuyển qua trang detailroom để xem chi tiết phòng và đặt phòng.
#### 5. Các chức năng ở trang detailroom:
- Hiển thị thông tin của phòng: tên phòng, hình ảnh, mô tả phòng, các tiện ích, các comment đánh giá (hiện tại api lỗi nên check render comment mentor vào các trang roomdetail/9 ; roomdetail/13; v.v.. để xem nha)...
- Chức năng đặt phòng qua chọn ngày đến, ngày rời và số người lưu trú.
- Comment đánh giá.
#### 6 Các chức năng ở trang admin:
- khi đăng nhập thành công, người dùng sẽ được chuyển sang trang admin(nếu là admin) hoặc chuyển về trang detailroom nếu là user. 
- Ở trang admin này, mặc định mới vào là ở trang quản lý người dùng, người dùng có thể thêm 1 admin khác, có thể xem, xóa, sửa thông tin cá nhân của user/admin khác có trong danh sách. Tương tự với các thẻ còn lại có trong trang admin.
#### `II. Thành viên: 3 người (BC30)`
  1. Lê Duy Phương.
  2. Hưng GN.
  3. Nguyễn Hoàng Khang.
      
 #### `III. Phần công việc:`
  1. **Lê Duy Phương**:   `home (layout, call api)`,   `admin(layout, call api)`
  2. **Đinh Tiến Hưng**:  `detailroom (layout, call api)`,   `Signup (layout, call Api)`,    `Singin (layout, call api)`
  3. **Nguyễn Hoàng Khang**:    `roomlist (layout, call api)`,   `Information (layout, call api)`.
  #### `IV. Test, Fix, Complete project:`
  **Lê Duy Phương**:   fix lay out; responsive; test, làm thêm và fix bug chức năng api; hoàn thiện dự án.
  ID:admin@gmail.com
  pass:1234
