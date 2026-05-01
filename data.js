const quizSets = [
  {
    "id": "c1-t1",
    "title": "Chủ đề 1 - Bài Test 1",
    "topic": "Chủ đề 1",
    "questions": [
      {
        "id": 1,
        "question": "Chọn từng loại quyền truy cập tập tin phù hợp với định nghĩa tương ứng.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Xem hoặc truy cập nội dung tập tin",
            "choices": [
              "Đọc &amp; Thực thi",
              "Ghi (Write)",
              "Đọc (Read)",
              "Sửa (Modify)"
            ]
          },
          {
            "text": "Thêm dữ liệu vào tập tin và đọc hoặc thay đổi các thuộc tính của tập tin",
            "choices": [
              "Đọc &amp; Thực thi",
              "Ghi (Write)",
              "Đọc (Read)",
              "Sửa (Modify)"
            ]
          },
          {
            "text": "Xem hoặc truy cập nội dung tập tin và chạy tập tin nếu đó là một chương trình",
            "choices": [
              "Đọc &amp; Thực thi",
              "Ghi (Write)",
              "Đọc (Read)",
              "Sửa (Modify)"
            ]
          },
          {
            "text": "Xem nội dung tập tin, thêm dữ liệu vào tập tin và xóa tập tin",
            "choices": [
              "Đọc &amp; Thực thi",
              "Ghi (Write)",
              "Đọc (Read)",
              "Sửa (Modify)"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đọc (Read)",
          "1": "Ghi (Write)",
          "2": "Đọc &amp; Thực thi",
          "3": "Sửa (Modify)"
        },
        "explanation": "Giống như khi cô giáo phát cho em một quyển sách:\nQuyền \"Đọc\": Em chỉ được xem chữ bằng mắt.\n\"Đọc & Thực thi\": Em xem sách và làm theo hướng dẫn gấp hạc giấy trong đó.\n\"Ghi\": Em được phép lấy bút viết thêm chữ vào sách.\n\"Sửa\": Quyền \"trùm\" nhất, em được xem, được viết thêm, và được cầm cục tẩy xóa chữ đi luôn."
      },
      {
        "id": 2,
        "question": "Với mỗi câu phát biểu về hệ thống lưu trữ dữ liệu trung tâm, hãy chọn Đúng hoặc Sai",
        "type": "matching",
        "options": [
          {
            "text": "Bạn có thể sử dụng chương trình FTP để tải lên và tải xuống các tập tin từ hệ thống lưu trữ dữ liệu trung tâm.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Nhiều hệ thống lưu trữ dữ liệu trung tâm có thể tự động sao lưu các tập tin từ máy tính và cập nhật phiên bản tập tin mới nhất cho máy tính của bạn.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Khi bạn tải một tập tin lên hệ thống lưu trữ dữ liệu trung tâm, tập tin sẽ bị xóa khỏi máy tính của bạn.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Sai"
        },
        "explanation": "Tưởng tượng \"hệ thống lưu trữ\" giống như một kho chứa đồ khổng lồ trên mạng (như Google Drive).\nPhần mềm FTP giống như xe tải chở đồ từ máy tính lên kho (Đúng).\nNhà kho thông minh có robot tự động sao chép tài liệu để không bao giờ bị mất (Đúng).\nKhi tải ảnh lên kho, máy tính chỉ \"photocopy\" bản chính gửi đi thôi, bản gốc trong máy em vẫn còn nguyên chứ không bị xóa đi (Sai)."
      },
      {
        "id": 3,
        "question": "Những cài đặt nào được lưu trữ trong phần Autofill của Google Chrome? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Usernames",
          "Phrases",
          "Passwords",
          "Payment methods",
          "Address information"
        ],
        "correctAnswers": [
          "Address information",
          "Passwords",
          "Payment methods"
        ],
        "explanation": "\"Autofill\" là \"Tự động điền\". Chrome giống như một người thư ký thông minh giúp em nhớ sẵn 3 thứ quan trọng: Địa chỉ nhà em (để giao hàng), Mật khẩu (để vào game), và Thẻ ngân hàng (để trả tiền). Mỗi lần cần gõ, thư ký sẽ tự động viết ra giúp em trong vòng 1 giây!"
      },
      {
        "id": 4,
        "question": "Các nhà cung cấp bán nhiều hàng hóa và dịch vụ trực tuyến. Tùy chọn nào sau đây là dịch vụ? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Tai nghe Samsung (Samsung earbuds)",
          "Hỗ trợ iPhone (iPhone Support)",
          "Microsoft Office 365",
          "Apple iPad"
        ],
        "correctAnswers": [
          "Hỗ trợ iPhone (iPhone Support)",
          "Microsoft Office 365"
        ],
        "explanation": "(Giống câu 11). \"Dịch vụ\" là sự giúp đỡ hoặc phần mềm cho thuê, em không cầm trên tay được. Việc nhờ người sửa lỗi iPhone qua mạng và thuê phần mềm gõ chữ Office 365 là dịch vụ. Còn tai nghe hay máy iPad em cầm sờ được thì gọi là hàng hóa vật chất."
      },
      {
        "id": 5,
        "question": "Bạn hãy cho biết, tính năng nào được sử dụng trong nhiều ứng dụng để thay thế những từ bị sai chính tả bằng các từ dự định một cách tự động?",
        "type": "single",
        "options": [
          "Autocomplete",
          "Autocorrect",
          "Autofix",
          "Autofill"
        ],
        "correctAnswers": [
          "Autocorrect"
        ],
        "explanation": "Chữ \"Auto\" nghĩa là tự động, \"Correct\" là đúng. Tính năng này giống như một chiếc \"Cục tẩy ma thuật\". Khi em lỡ tay gõ sai chữ \"mèo\" thành \"meò\", nó sẽ lập tức tự động sửa lại cho đúng mà em không cần bấm nút xóa."
      },
      {
        "id": 6,
        "question": "Bạn hãy cho biết, tính năng nào được sử dụng trong nhiều ứng dụng để thay thế những từ bị sai chính tả bằng các từ dự định một cách tự động?",
        "type": "single",
        "options": [
          "Autocomplete",
          "Autocorrect",
          "Autofix",
          "Autofill"
        ],
        "correctAnswers": [
          "Autocorrect"
        ],
        "explanation": "Chữ \"Auto\" nghĩa là tự động, \"Correct\" là đúng. Tính năng này giống như một chiếc \"Cục tẩy ma thuật\". Khi em lỡ tay gõ sai chữ \"mèo\" thành \"meò\", nó sẽ lập tức tự động sửa lại cho đúng mà em không cần bấm nút xóa."
      },
      {
        "id": 7,
        "question": "Đâu là quá trình chuyển đổi dữ liệu sang dạng thức không thể nhận dạng yêu cầu sử dụng khóa để trả dữ liệu về dạng văn bản thuần?",
        "type": "single",
        "options": [
          "Mã hóa Encryption",
          "Nén (Compression)",
          "Hàm băm (Hashing)",
          "Mã hóa Encoding"
        ],
        "correctAnswers": [
          "Mã hóa Encryption"
        ],
        "explanation": "\"Mã hóa\" giống như việc em viết một bức thư mật bằng mực tàng hình hay ký hiệu người ngoài hành tinh. Nếu kẻ trộm có lấy được bức thư, hắn cũng chỉ thấy những chữ giun dế loằng ngoằng (không thể nhận dạng), giữ cho bí mật của em được an toàn."
      },
      {
        "id": 8,
        "question": "Với mỗi câu phát biểu về bộ xử lý trung tâm (CPU), hãy chọn Đúng hoặc Sai",
        "type": "matching",
        "options": [
          {
            "text": "CPU thường có bộ tản nhiệt khí hoặc tản nhiệt nước đi kèm.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Tốc độ CPU ảnh hưởng đến số khung hình trên giây (fps) hiển thị trong trò chơi 3D.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Hầu hết các bộ xử lý trung tâm hiện đại đều được xây dựng để hỗ trợ các hệ thống 64-bit.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "CPU giống như \"bộ não\" của máy tính. Não suy nghĩ càng nhanh thì chơi game hình ảnh càng mượt mà (Đúng). Bản thân cái \"bộ não\" không có quạt làm mát gắn liền bên trong nó, quạt là đồ mua cắm thêm ở ngoài (Sai). Cuối cùng, \"64-bit\" giống như con đường cao tốc rộng lớn, máy tính bây giờ đều cần đường rộng để chạy nhanh (Đúng)."
      },
      {
        "id": 9,
        "question": "Bạn hãy cho biết, phát biểu nào sau đây là đúng về điện toán đám mây? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Điện toán đám mây chỉ giới hạn trong Database",
          "Dữ liệu trong điện toán đám mây được lưu trữ trên một máy chủ từ xa",
          "Máy chủ có thể được truy cập thông qua Internet",
          "Luôn phải trả phí cho dung lượng trên điện toán đám mây"
        ],
        "correctAnswers": [
          "Dữ liệu trong điện toán đám mây được lưu trữ trên một máy chủ từ xa",
          "Máy chủ có thể được truy cập thông qua Internet"
        ],
        "explanation": "\"Đám mây\" ở đây không phải là mây bay trên trời! Nó là cách gọi một cái máy tính siêu khổng lồ đặt ở rất xa (có thể tận nước ngoài). Thay vì cất ảnh đầy bộ nhớ điện thoại của mẹ, ảnh sẽ bay qua đường dây Internet đến cất ở \"đám mây\" đó một cách an toàn."
      },
      {
        "id": 10,
        "question": "Trên thiết bị Windows, từ khu vực cài đặt nào người ta có thể thay đổi màu nền của màn hình?",
        "type": "single",
        "options": [
          "Display",
          "Settings",
          "Desktop",
          "Personalization"
        ],
        "correctAnswers": [
          "Personalization"
        ],
        "explanation": "\"Personalization\" tiếng Anh có nghĩa là \"Sở thích cá nhân\". Khu vực này giống như hộp đồ trang trí, cho phép em tự do đổi hình nền siêu nhân hay công chúa, và đổi màu sắc máy tính theo đúng ý thích của em."
      },
      {
        "id": 11,
        "question": "Trong Outlook, điều gì thay đổi cuộc hẹn (appointment) thành cuộc họp (meeting)?",
        "type": "single",
        "options": [
          "Đặt thời gian bắt đầu và kết thúc",
          "Chọn hộp kiểm Meeting",
          "Chọn hộp kiểm All day",
          "Thêm người được mời"
        ],
        "correctAnswers": [
          "Thêm người được mời"
        ],
        "explanation": "Một \"cuộc hẹn\" là em tự lên lịch cho bản thân (ví dụ: 5h chiều tự đi đá bóng). Nhưng ngay khi em rủ thêm bạn bè cùng tham gia (thêm người được mời), sự kiện đó lập tức biến thành một \"cuộc họp\" nhóm!"
      },
      {
        "id": 12,
        "question": "Bạn hãy cho biết, loại máy in nào phân tán mực dạng bột (Powdered Toner) lên trang khi in?",
        "type": "single",
        "options": [
          "Máy in nhiệt (Thermal)",
          "Máy in phun (Inkjet)",
          "Máy in Laser",
          "Máy in 3D"
        ],
        "correctAnswers": [
          "Máy in Laser"
        ],
        "explanation": "Khác với máy in dùng nước mực lỏng, máy in Laser sử dụng những hạt bụi mực khô siêu nhỏ (dạng bột). Khi in, máy dùng sức nóng để làm chảy hạt bột này và dán chặt nó vào tờ giấy."
      },
      {
        "id": 13,
        "question": "Nối từng phần mở rộng tập tin với mô tả định dạng tập tin tương ứng. Để trả lời, hay di chuyển từng mô tả tương ứng ở bên phải sang bên trái sao cho phù hợp",
        "type": "matching",
        "options": [
          {
            "text": "Tập tin văn bản hỗ trợ văn bản và đồ họa được định dạng",
            "choices": [
              ".png",
              ".rtf",
              ".gif",
              ".txt"
            ]
          },
          {
            "text": "Tập tin hình vạch quét với tính năng nén không mất dữ liệu, hỗ trợ hình ảnh trong suốt, ánh xạ màu và màu sắc trung thực 48 bit",
            "choices": [
              ".png",
              ".rtf",
              ".gif",
              ".txt"
            ]
          },
          {
            "text": "Tập tin văn bản chỉ hỗ trợ văn bản thuần ở định dạng tuyến tính",
            "choices": [
              ".png",
              ".rtf",
              ".gif",
              ".txt"
            ]
          },
          {
            "text": "Tập tin hình vạch quét có độ nén cao hỗ trợ chứa nhiều hình ảnh trong một tập tin",
            "choices": [
              ".png",
              ".rtf",
              ".gif",
              ".txt"
            ]
          }
        ],
        "correctAnswers": {
          "0": ".rtf",
          "1": ".png",
          "2": ".txt",
          "3": ".gif"
        },
        "explanation": "Đuôi file giống như biệt danh của các bạn trong lớp, nghe tên là biết bạn đó có tài năng gì:\nBạn .gif rất giỏi làm những bức ảnh nhúc nhích, hoạt hình.\nBạn .rtf thích viết chữ có tô màu, in đậm, in nghiêng.\nBạn .txt là bạn đơn giản nhất, chỉ viết chữ trơn, không màu mè.\nBạn .png là họa sĩ vẽ tranh siêu nét và có thể vẽ trên giấy bóng kính trong suốt."
      },
      {
        "id": 14,
        "question": "Hai nguyên tắc thiết kế chung cho phần cứng máy tính là gì? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Liên kết với Internet Vạn vật: Triển khai chức năng trực tuyến bất cứ khi nào có thể để cải thiện trải nghiệm người dùng",
          "Khả năng chịu lỗi: Giảm thiểu các mối nguy hiểm và hậu quả bất lợi của các hành động ngẫu nhiên hoặc ngoài ý muốn&nbsp;",
          "Duy trì chi phí thấp: Sử dụng các bộ phận ít tốn kém hơn bất cứ khi nào có thể để giảm chi phí lắp ráp",
          "Sử dụng công bằng: Thiết kế hữu ích và có thể bán được cho nhiều người với các khả năng khác nhau"
        ],
        "correctAnswers": [
          "Khả năng chịu lỗi: Giảm thiểu các mối nguy hiểm và hậu quả bất lợi của các hành động ngẫu nhiên hoặc ngoài ý muốn ",
          "Sử dụng công bằng: Thiết kế hữu ích và có thể bán được cho nhiều người với các khả năng khác nhau"
        ],
        "explanation": "Khi chế tạo máy tính, các chú kỹ sư phải đảm bảo 2 điều: 1 là \"Khả năng chịu lỗi\" (lỡ em bấm nhầm nút thì máy vẫn không bị hỏng hóc hay xóa nhầm dữ liệu); 2 là \"Sử dụng công bằng\" (thiết kế sao cho ai cũng dùng được dễ dàng, dù là người trẻ hay người lớn tuổi)."
      },
      {
        "id": 15,
        "question": "Trên thiết bị Windows, người ta có thể truy cập thông tin hiển thị từ khu vực nào của Settings?",
        "type": "single",
        "options": [
          "Devices",
          "Personalization",
          "Privacy",
          "System"
        ],
        "correctAnswers": [
          "System"
        ],
        "explanation": "\"System\" nghĩa là Hệ thống trung tâm. Nơi này khám sức khỏe tổng quát cho máy tính của em. Em muốn chỉnh sửa phần cơ bản nhất như màn hình sáng tối, độ to nhỏ âm thanh tổng thì phải vào khu vực này."
      },
      {
        "id": 16,
        "question": "Phần cứng nào trong máy xử lý hiệu suất của video và đồ họa?",
        "type": "single",
        "options": [
          "CPU",
          "GPU",
          "VRAM",
          "VPU"
        ],
        "correctAnswers": [
          "GPU"
        ],
        "explanation": "Em nhớ CPU là \"bộ não\" chung không? Còn GPU thì gọi là \"Họa sĩ\" của máy tính. Bất cứ khi nào em xem phim hoạt hình hay chơi game 3D tuyệt đẹp, chính là nhờ họa sĩ GPU này đang lấy cọ vẽ màu siêu tốc độ để tạo ra hình ảnh đó."
      },
      {
        "id": 17,
        "question": "Phát biểu nào sau đây là đúng khi nói về Google Calendars? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Những ngày lễ có thể được thêm vào",
          "Chỉ có thể đăng ký lịch bằng cách sử dụng URL",
          "Mã màu chỉ có thể thay đổi trong vùng cài đặt (Setting)",
          "Bạn có thể đăng ký lịch trực tuyến"
        ],
        "correctAnswers": [
          "Bạn có thể đăng ký lịch trực tuyến",
          "Những ngày lễ có thể được thêm vào"
        ],
        "explanation": "Lịch Google rất thông minh. Nó cho phép em theo dõi lịch học của nhà trường gửi qua mạng (đăng ký trực tuyến). Ngoài ra, nó còn tự động đánh dấu đỏ sẵn các ngày Tết hay Quốc Khánh (thêm ngày lễ) để em biết sắp được nghỉ học."
      },
      {
        "id": 18,
        "question": "Xác định ưu điểm của máy in phun và máy in laser. Để trả lời, bạn hay chọn loại máy in tương ứng với từng ưu điểm",
        "type": "matching",
        "options": [
          {
            "text": "Tài liệu khô mực ngay khi in ra.",
            "choices": [
              "Máy in laser",
              "Máy in phun"
            ]
          },
          {
            "text": "Thích hợp để in tài liệu số lượng lớn với chi phí thấp.",
            "choices": [
              "Máy in laser",
              "Máy in phun"
            ]
          },
          {
            "text": "Phù hợp để in với số lượng ít.",
            "choices": [
              "Máy in laser",
              "Máy in phun"
            ]
          },
          {
            "text": "Thân thiện với môi trường hơn.",
            "choices": [
              "Máy in laser",
              "Máy in phun"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Máy in laser",
          "1": "Máy in laser",
          "2": "Máy in phun",
          "3": "Máy in phun"
        },
        "explanation": "Máy in laser: Dùng \"bột mực\" và sấy nóng chảy lên giấy, nên tờ giấy in ra nóng hổi và khô ngay lập tức. Nó in rất nhanh nên thích hợp in nhiều sách vở.\nMáy in phun: Dùng vòi xịt nước mực lên giấy. Vì in chậm hơn nên phù hợp để ở nhà thỉnh thoảng in vài tấm ảnh màu, và nó ít tốn điện năng hơn (thân thiện môi trường)."
      },
      {
        "id": 19,
        "question": "Khu vực cài đặt nào trên thiết bị Windows cho phép người dùng kiểm soát cách nhận thông báo (notification)?",
        "type": "single",
        "options": [
          "Multitasking",
          "Shared experiences",
          "Focus assist",
          "Action center"
        ],
        "correctAnswers": [
          "Focus assist"
        ],
        "explanation": "\"Focus\" nghĩa là Tập trung. Khi em đang làm bài tập, tính năng \"Focus assist\" giống như một cô bảo vệ gác cửa, giúp chặn hết các tiếng \"ting ting\" của tin nhắn hay game để em không bị xao nhãng."
      },
      {
        "id": 20,
        "question": "Bạn cần thêm cuộc họp Hội đồng sinh viên diễn ra vào tháng tới vào lịch của bạn. Bạn có thể lựa chọn hai phần tử nào sau đây để mở hộp thoại sự kiện? (Chọn 2)",
        "type": "multiple",
        "options": [
          "2",
          "3",
          "1",
          "4"
        ],
        "correctAnswers": [
          "3",
          "1"
        ],
        "explanation": "Khi em muốn viết thêm một kế hoạch đi chơi vào cuốn lịch, em có 2 cách. Một là bấm vào nút \"Tạo mới\" (số 1), hai là nhấn đúp trực tiếp vào cái ô ngày hôm đó trên lịch (số 3). Cả hai nút này đều mở ra một tờ giấy nhỏ để em viết thông tin vào.",
        "images": [
          "IC3.LEVEL2.CHUDE1.TEST1.cau 20.png"
        ]
      },
      {
        "id": 21,
        "question": "Bạn hãy cho biết, vùng nào trong cài đặt (Setting) là tuỳ chọn được sử dụng để kết nối máy in?",
        "type": "single",
        "options": [
          "Devices",
          "Installations",
          "Printers",
          "Networks"
        ],
        "correctAnswers": [
          "Devices"
        ],
        "explanation": "Chữ \"Devices\" nghĩa là \"Các thiết bị\". Nó là căn phòng quản lý tất cả những đồ vật cắm thêm vào máy tính. Chuột, bàn phím, hay máy in đều phải vào căn phòng \"Devices\" này để máy tính nhận diện."
      },
      {
        "id": 22,
        "question": "Loại máy in nào phun mực lên giấy khi in?",
        "type": "single",
        "options": [
          "3D",
          "Thermal",
          "Laser",
          "Inkjet"
        ],
        "correctAnswers": [
          "Inkjet"
        ],
        "explanation": "Chữ \"Ink\" tiếng Anh là mực nước, \"Jet\" là vòi phun xịt. Cỗ máy này có vô số chiếc vòi xịt bé xíu xiu, chuyên xịt từng giọt mực lỏng màu xanh, đỏ, vàng lên mặt giấy để vẽ nên những bức tranh nhiều màu sắc."
      },
      {
        "id": 23,
        "question": "Người dùng nhận thấy rằng máy in mặc định cứ liên tục thay đổi. Bạn hãy cho biết, tùy chọn nào cần được tắt để người dùng có thể quản lý được máy in mặc định?",
        "type": "single",
        "options": [
          "Để Windows quản lý máy in mặc định của tôi (Let Windows manage my default printer)",
          "Đặt máy in mặc định theo địa chỉ",
          "Chọn máy in mặc định một cách tự động (Set the default printer automatically)",
          "Chọn máy in mặc định là máy in gần nhất(Let the closest printer be my default printer)"
        ],
        "correctAnswers": [
          "Để Windows quản lý máy in mặc định của tôi (Let Windows manage my default printer)"
        ],
        "explanation": "Tưởng tượng hệ điều hành Windows giống như một \"chú robot dọn nhà\". Nếu em cho phép chú robot \"tự động\" sắp xếp, chú ấy sẽ tự ý đổi máy in theo ý chú ấy. Vì vậy, em phải \"tắt\" chức năng tự động này đi, để em có quyền tự chọn máy in mà mình muốn dùng nhé."
      },
      {
        "id": 24,
        "question": "Bạn hãy nhấp chọn vào tính năng chia sẻ toàn bộ lịch của bạn với người khác trong hình sau đây",
        "type": "single",
        "options": [
          "3",
          "2",
          "1",
          "4"
        ],
        "correctAnswers": [
          "3"
        ],
        "explanation": "Số 3 trên hình chỉ vào biểu tượng quyển lịch có mũi tên bay ra (Share Calendar). Bấm vào đó giống như việc em photo thời khóa biểu của em rồi gửi cho bạn thân, để bạn ấy biết hôm nay em rảnh môn nào để cùng đi chơi.",
        "images": [
          "IC3.LEVEL2.CHUDE1.TEST1.cau 24.png"
        ]
      },
      {
        "id": 25,
        "question": "Nhiều hàng hóa và dịch vụ được bán trực tuyến. Tùy chọn nào sau đây là dịch vụ? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Hỗ trợ máy tính để bàn từ xa (Remote desktop support)",
          "Điện thoại samsung galaxy (Samsung Galaxy phone)",
          "Balo (Backpack)",
          "Ứng dụng trực tuyến (Online applications)",
          "Tai nghe Bose (Bose earbuds)",
          "Lưu trữ đám mây (Cloud storage)"
        ],
        "correctAnswers": [
          "Hỗ trợ máy tính để bàn từ xa (Remote desktop support)",
          "Ứng dụng trực tuyến (Online applications)",
          "Lưu trữ đám mây (Cloud storage)"
        ],
        "explanation": "\"Dịch vụ\" là những thứ người ta làm giúp em qua mạng Internet, em không thể sờ hay cầm nắm được. Ví dụ: nhờ thợ sửa máy tính qua mạng, phần mềm trên web, hay thuê chỗ cất ảnh trên mạng. Còn điện thoại, balo, tai nghe là \"Hàng hóa\" vì em có thể cầm nó trên tay."
      },
      {
        "id": 26,
        "question": "Với mỗi câu phát biểu về tính bảo mật của thiết bị đa phương tiện di động, hãy chọn Đúng hoặc Sai.",
        "type": "matching",
        "options": [
          {
            "text": "Bạn nên lưu trữ các công việc và tập tin cá nhân của mình trên các thiết bị riêng biệt, không được cắm thiết bị cá nhân vào máy tính làm việc hoặc ngược lại.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Nếu bạn tìm thấy một thiết bị lưu trữ phương tiện truyền thông và không biết nó thuộc về ai, hãy cằm thiết bị đó vào máy tính của bạn để tìm thông tin về chủ nhân của nó.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bạn nên tắt tính năng Tự động chạy và Tự động phát cho tất cả các thiết bị đa phương tiện di động.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Đúng"
        },
        "explanation": "Câu 1 Sai: Nhặt được chiếc USB rơi ngoài đường mà cắm vào máy tính giống như ăn một viên kẹo của người lạ cho vậy, rất nguy hiểm vì USB đó có thể chứa \"virus\" làm ốm máy tính.\nCâu 2 Đúng: Tắt \"Tự động chạy\" giống như việc em khóa chặt cửa nhà, không cho kẻ xấu (virus) tự động mở cửa xông vào.\nCâu 3 Đúng: Đồ chơi cá nhân và sách vở học tập nên để ở hai ngăn tủ khác nhau để khỏi bị thất lạc hoặc hỏng hóc."
      },
      {
        "id": 27,
        "question": "Loại USB nào có tốc độ truyền có thể lên đến 12 Mbps?",
        "type": "single",
        "options": [
          "USB 3.1",
          "USB 2.0",
          "USB 1.0",
          "USB 3.0"
        ],
        "correctAnswers": [
          "USB 1.0"
        ],
        "explanation": "Chuyển dữ liệu bằng USB giống như dùng xe chở đồ. USB 1.0 là đời cũ nhất, cổ nhất, chạy chậm rì giống như chiếc xe đạp (chỉ đi được 12 Mbps). Ngày nay chúng ta đã có USB 3.0 chạy siêu nhanh như xe đua rồi."
      },
      {
        "id": 28,
        "question": "Bạn hãy cho biết, biểu tượng hình mặt trời trên bảng điều khiển thường đại diện cho cài đặt nào sau đây?",
        "type": "single",
        "options": [
          "Độ sáng (Brightness)",
          "Độ tương phản (Contrast)",
          "Độ tối (Darkness)",
          "Tông màn hình (Screen tone)"
        ],
        "correctAnswers": [
          "Độ sáng (Brightness)"
        ],
        "explanation": "Biểu tượng mặt trời đại diện cho ánh nắng rực rỡ. Khi kéo thanh mặt trời này lên cao, màn hình điện thoại của em sẽ sáng bừng lên như ban ngày; kéo xuống thấp thì màn hình sẽ tối dịu lại để đỡ đau mắt."
      },
      {
        "id": 29,
        "question": "Bạn hãy điền vào chỗ trống để hoàn thiện phát biểu sau đây: \"Đề xuất của Google là một tính năng ___________ được sử dụng phổ biến trong các tìm kiếm.\"",
        "type": "single",
        "options": [
          "Tự động tìm kiếm (autosearch)",
          "Tự động hoàn thành (autocomplete)",
          "Tự động sửa lỗi (autofix)",
          "Tự động chỉnh đúng (autocorrect)"
        ],
        "correctAnswers": [
          "Tự động hoàn thành (autocomplete)"
        ],
        "explanation": "Google giống như người bạn có phép thuật đọc suy nghĩ. Khi em mới gõ \"Cách gấp...\", Google đoán ngay em muốn tìm \"Cách gấp máy bay giấy\" và hiện sẵn ra cho em bấm chọn luôn. Việc này gọi là \"tự động hoàn thành\" câu nói giúp em."
      },
      {
        "id": 30,
        "question": "Mục nào của Outlook calendar kéo dài cả ngày theo mặc định?",
        "type": "single",
        "options": [
          "Special",
          "Appointment",
          "Event",
          "Meeting"
        ],
        "correctAnswers": [
          "Event"
        ],
        "explanation": "\"Event\" có nghĩa là \"Sự kiện\". Giống như ngày sinh nhật của em hay ngày Tết, nó là một sự kiện diễn ra trọn vẹn từ sáng đến tối, chứ không phải chỉ là một cuộc hẹn ngắn 15 phút."
      },
      {
        "id": 31,
        "question": "Nội dung hiển thị trên màn hình máy tính của bạn rất khó xem. Vùng tối của màn hình quá tối, còn vùng sáng của màn hình quá sáng. Bạn cần điều chỉnh màn hình để có thể xem nội dung. Bạn nên điều chỉnh cài đặt màn hình nào?",
        "type": "single",
        "options": [
          "Nguồn đầu vào (Input Source)",
          "Độ sáng (Brightness)",
          "Độ tương phản (Contrast)",
          "Độ sắc nét (Sharpness)"
        ],
        "correctAnswers": [
          "Độ tương phản (Contrast)"
        ],
        "explanation": "\"Độ tương phản\" là khoảng cách giữa chỗ sáng nhất và chỗ tối nhất. Chỉnh độ tương phản giống như em đeo kính râm giúp tách bạch rõ ràng giữa bóng râm và ánh nắng mặt trời, làm bức ảnh trở nên sắc nét, không bị lóa và dễ nhìn hơn."
      },
      {
        "id": 32,
        "question": "Bạn hãy cho biết, thiết bị xuất nào sau đây được sử dụng để điều khiến âm thanh?",
        "type": "single",
        "options": [
          "Chuột máy tính (Mouse)",
          "Bàn phím (Keyboard)",
          "Mic (Microphone)",
          "Loa (Speakers)"
        ],
        "correctAnswers": [
          "Loa (Speakers)"
        ],
        "explanation": "\"Thiết bị xuất\" là những đồ vật mang thông tin từ bên trong máy tính tống ra bên ngoài cho em xem hoặc nghe. Loa phát ra tiếng nhạc cho em nghe, nên nó là thiết bị xuất âm thanh. (Micro thu tiếng vào thì gọi là thiết bị nhập)."
      }
    ]
  },
  {
    "id": "c1-t2",
    "title": "Chủ đề 1 - Bài Test 2",
    "topic": "Chủ đề 1",
    "questions": [
      {
        "id": 1,
        "question": "Bạn đang sử dụng điện thoại Android và muốn tắt âm lượng. Tính năng nào trên màn hình cho phép bạn tắt âm lượng trên điện thoại này? (Chọn 1)",
        "type": "single",
        "options": [
          "Tính năng 4",
          "Tính năng 1",
          "Tính năng 2",
          "Tính năng 3"
        ],
        "correctAnswers": [
          "Tính năng 2"
        ],
        "explanation": "Nhìn vào biểu tượng cái loa ở vị trí số 2, em chạm ngón tay vào đó để nó đổi thành hình \"cái loa bị gạch chéo\". Giống như bắt chiếc điện thoại đeo khẩu trang lại, nó sẽ hoàn toàn im lặng và không phát ra tiếng ồn nữa.",
        "images": [
          "IC3.LEVEL2.CHUDE1.TEST2.cau 1.png"
        ]
      },
      {
        "id": 2,
        "question": "Cha mẹ của bạn đã yêu cầu bạn tạo lịch gia đình kỹ thuật số có thể lên lịch cho các sự kiện thể thao, hoạt động ở trường và các hoạt động xã hội khác của họ cho tất cả các thành viên trong gia đình xem. Bạn đã tạo lịch. Bạn phải hoàn thành hai bước nào sau đây để cung cấp lịch cho tất cả các thành viên trong gia đình bạn? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Chia sẻ lịch",
          "Sao chép lịch vào thiết bị máy tính của từng thành viên trong gia đình",
          "Mời các thành viên",
          "In bản sao lịch cho từng thành viên trong gia đình"
        ],
        "correctAnswers": [
          "Mời các thành viên",
          "Chia sẻ lịch"
        ],
        "explanation": "Làm xong thời khóa biểu đi chơi cho cả nhà, máy tính của em vẫn đang giữ bí mật. Em phải gửi thư \"Mời\" bố mẹ vào xem và mở cửa \"Chia sẻ\" cho bố mẹ thấy. Giống như làm xong thiệp sinh nhật thì phải đem đi phát cho các bạn vậy."
      },
      {
        "id": 3,
        "question": "Khi tạo cuộc hẹn hoặc nhiệm vụ trên lịch kĩ thuật số cá nhân, bạn thường có thể tùy chỉnh hai cài đặt nào sau đây? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Lời nhắc (Reminders)",
          "Tần suất lặp lại sự kiện (How often to repeat the event)",
          "Người tổ chức sự kiện (Event Host)",
          "Chi phí của sự kiện (Cost of the event)"
        ],
        "correctAnswers": [
          "Tần suất lặp lại sự kiện (How often to repeat the event)",
          "Lời nhắc (Reminders)"
        ],
        "explanation": "Khi em lưu lịch đi học bơi vào thứ Bảy, em có thể dặn chiếc lịch thông minh là \"tuần nào cũng tự ghi nhớ vào thứ Bảy nhé\" (Tần suất lặp lại) và \"nhớ kêu bíp bíp nhắc tôi trước 30 phút để tôi thay đồ\" (Lời nhắc)."
      },
      {
        "id": 4,
        "question": "Sau đây là một số phát biểu về việc nén tập tin. Bạn hãy chọn Đúng hoặc Sai",
        "type": "matching",
        "options": [
          {
            "text": "Nhiều tập tin có thể được đóng gói bằng một tiện ích tạo một tập tin nén duy nhất có đuôi tập tin .zip hoặc .rar.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Chỉ có thể nén các tập tin hình ảnh.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Một tập tin nén thường có kích thước nhỏ hơn tập tin gốc.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Tập tin nén chiếm nhiều dung lượng lưu trữ hơn tập tin gốc.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Sai",
          "3": "Sai"
        },
        "explanation": "\"Nén\" giống như việc mẹ cất chăn bông mùa đông. Mẹ bỏ chăn to xù vào cái túi nilon rỗng, rồi dùng máy hút bụi hút sạch không khí đi (ép nhỏ lại). Chiếc chăn lập tức xẹp lép (.zip hoặc .rar) và nhét vào tủ rất gọn gàng."
      },
      {
        "id": 5,
        "question": "Tính năng phần mềm nào giúp sửa lỗi chính tả khi bạn nhập và có thể đoán (các) chữ cái bạn muốn nhập? Ví dụ: khi bạn đang nhập tin nhắn văn bản, điện thoại của bạn có thể thay thế \"see you latet\" bằng \"see you later\".",
        "type": "single",
        "options": [
          "Tự động hoàn thành (Autocomplete)",
          "Tự động hóa (Automation)",
          "Trình kiểm tra ngữ pháp (Grammar Checker)",
          "Tự động sửa lỗi (Autocorrect)"
        ],
        "correctAnswers": [
          "Tự động sửa lỗi (Autocorrect)"
        ],
        "explanation": "Đây chính là tính năng \"Cục tẩy ma thuật\". Khi em lỡ gõ sai, máy tính thông minh sẽ lập tức lấy tẩy xóa đi và tự viết lại thành chữ đúng một cách nhanh như chớp mà em không cần bấm nút xóa."
      },
      {
        "id": 6,
        "question": "Khi mô tả Điện toán đám mây, điều nào sau đây sẽ được coi là ưu điểm? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Tính di động (Mobility)",
          "Băng thông cao hơn (Higher Bandwidth)",
          "Hỗ trợ tốt hơn (Better Support)",
          "Sao lưu và Khôi phục (Back-up and Restore)",
          "Bảo mật (Security)",
          "Tiết kiệm chi phí (Cost Saving)"
        ],
        "correctAnswers": [
          "Sao lưu và Khôi phục (Back-up and Restore)",
          "Tiết kiệm chi phí (Cost Saving)",
          "Tính di động (Mobility)"
        ],
        "explanation": "\"Đám mây\" trên mạng giống như một chiếc ba lô ma thuật vô hình. Nó tự động cất giữ đồ cẩn thận không bao giờ sợ hỏng hay mất (Sao lưu), em không tốn tiền mua thẻ nhớ đắt tiền cắm vào máy (Tiết kiệm), và em có thể mở chiếc ba lô này lấy đồ ở bất kỳ nhà nào chỉ cần có mạng wifi (Tính di động)."
      },
      {
        "id": 7,
        "question": "Bạn hãy chọn Đúng hoặc Sai cho mỗi phát biểu sau đây:",
        "type": "matching",
        "options": [
          {
            "text": "Trình duyệt Web là Internet.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Trình duyệt Web là các ứng dụng phần mềm giúp lấy và trình bày thông tin từ World Wide Web.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Trình duyệt Web là công cụ tìm kiếm (Search Engine).",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Trình duyệt Web sử dụng URL để kết nối với các tài nguyên mạng như trang Web, hình ảnh và Video.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": [],
        "explanation": "Chưa có giải thích cho câu hỏi này."
      },
      {
        "id": 8,
        "question": "Mẹ của Minh có thị lực khá kém. Mỗi khi sử dụng các thiết bị điện toán như máy tính bảng, điện thoại thông minh,… thì mẹ của Minh sẽ yêu cầu Minh tùy chỉnh cài đặt để giúp mẹ của Minh xem văn bản hiển thị trên màn hình dễ dàng hơn. Em hãy cho biết, tùy chọn nào sau đây là phù hợp để Minh có thể tùy chỉnh để giúp mẹ của mình? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Nhạc chuông (Ring tone)",
          "Màu sắc (Color)",
          "Âm lượng (Volume)",
          "Cỡ chữ (Font Size)"
        ],
        "correctAnswers": [
          "Cỡ chữ (Font Size)",
          "Màu sắc (Color)"
        ],
        "explanation": "Giống như khi mua một cuốn truyện, nếu chữ trong đó to thật to (Cỡ chữ) và màu chữ in rõ ràng trên giấy trắng không bị chói (Màu sắc) thì mẹ sẽ đọc rất dễ chịu mà không bị mỏi hay đau mắt."
      },
      {
        "id": 9,
        "question": "Khớp từng cáp với thiết bị mà nó thường kết nối. Để trả lời, hãy kéo từng cáp từ cột bên phải sang thiết bị kết nối ở cột bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Truyền hình (Television)",
            "choices": [
              "USB",
              "Audio",
              "HDMI",
              "CAT6"
            ]
          },
          {
            "text": "Bàn phím (Keyboard)",
            "choices": [
              "USB",
              "Audio",
              "HDMI",
              "CAT6"
            ]
          },
          {
            "text": "Thiết bị chuyển mạch (Switch)",
            "choices": [
              "USB",
              "Audio",
              "HDMI",
              "CAT6"
            ]
          },
          {
            "text": "Loa (Speakers)",
            "choices": [
              "USB",
              "Audio",
              "HDMI",
              "CAT6"
            ]
          }
        ],
        "correctAnswers": {
          "0": "HDMI",
          "1": "Audio",
          "2": "CAT6",
          "3": "USB"
        },
        "explanation": "Truyền hình (Television) -> HDMI (Cáp xịn để truyền cả hình ảnh nét và âm thanh hay lên Tivi).\nLoa (Speakers) -> Audio (Sợi cáp có cái đầu tròn xoe chuyên cắm để nghe nhạc).\nThiết bị chuyển mạch (Switch) -> CAT6 (Đây là sợi dây cáp to có mạng lưới internet bên trong).\nBàn phím (Keyboard) -> USB (Cổng cắm quen thuộc hình chữ nhật để cắm bàn phím, chuột).\n\nCác dây cắm này giống như \"ống hút\", mỗi loại nước uống sẽ cần một chiếc ống hút có hình dáng riêng thì cắm vào mới vừa vặn được."
      },
      {
        "id": 10,
        "question": "Khi mô tả điện toán đám mây, tùy chọn nào sau đây sẽ được coi là nhược điểm? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Dung lượng lưu trữ (Storage Capacity)",
          "Bảo mật (Security)",
          "Kết nối (Connectivity)",
          "Tính di động (Mobility)",
          "Hỗ trợ máy tính để bàn (Desktop Support)",
          "Độ tin cậy (Reliability)"
        ],
        "correctAnswers": [
          "Độ tin cậy (Reliability)",
          "Bảo mật (Security)",
          "Kết nối (Connectivity)"
        ],
        "explanation": "Gửi đồ lên kho \"đám mây\" xa xôi cũng có điểm yếu: Em bắt buộc phải có wifi thì mới mở kho lấy đồ được (Kết nối). Đôi khi mạng bị đứt cáp thì em sẽ không lấy được đồ ngay (Độ tin cậy). Và gửi đồ ở nhà kho chung trên mạng thì em phải giữ mật khẩu kỹ kẻo bị trộm (Bảo mật)."
      },
      {
        "id": 11,
        "question": "Đối với mỗi phát biểu về Bảy nguyên tắc của thiết kế phần cứng phổ quát, hãy chọn Đúng nếu đó là một nguyên tắc hoặc Sai nếu không phải.",
        "type": "matching",
        "options": [
          {
            "text": "Tính linh hoạt khi sử dụng (Flexibility in Use): Thiết kế phù hợp với nhiều sở thích và khả năng của từng cá nhân.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Ít nỗ lực thể chất (Low Physical Effort): Thiết kế có thể được sử dụng hiệu quả, thoải mái và ít mệt mỏi.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Dễ dàng thay thế (Easy to replace): Thiết kế cho phép thay thế dễ dàng.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Khả năng mở rộng (Scalable): Thiết kế dễ dàng nâng cấp và mở rộng.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Sai",
          "3": "Sai"
        },
        "explanation": "Khi chế tạo máy móc, các kỹ sư phải làm sao cho món đồ đó ai cũng dùng được, dù là người già yếu (không mỏi mệt) hay người thuận tay trái tay phải (linh hoạt). Còn việc nâng cấp hay thay đồ mới không nằm trong 7 quy định gốc ban đầu này."
      },
      {
        "id": 12,
        "question": "Bạn đang sử dụng điện thoại Android và muốn thay đổi độ tương phản. Tính năng nào sau đây cho phép bạn điều chỉnh độ tương phản trên điện thoại này? (Chọn 1)",
        "type": "single",
        "options": [
          "Tính năng 1",
          "Tính năng 4",
          "Tính năng 3",
          "Tính năng 2"
        ],
        "correctAnswers": [
          "Tính năng 4"
        ],
        "explanation": "Biểu tượng có hình người dang hai tay (Trợ năng) là một ngăn kéo đặc biệt. Nó chứa các công cụ giúp điện thoại hiện chữ to lên, màu sắc tách bạch rõ ràng (tương phản) để giúp các ông bà mắt kém vẫn có thể dùng điện thoại dễ dàng.",
        "images": [
          "IC3.LEVEL2.CHUDE1.TEST2.cau 12.png"
        ]
      },
      {
        "id": 13,
        "question": "Hai điểm khác biệt nào phân biệt giữa máy in Laser và máy in phun? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Máy in phun phù hợp hơn để in số lượng lớn, và máy in Laser thích hợp hơn để in số lượng ít.",
          "Máy in laser sử dụng Toner, và máy in phun sử dụng mực in (Ink).",
          "Máy in Laser sử dụng mực in (Ink), và máy in phun sử dụng Toner.",
          "Máy in phun phù hợp hơn để in số lượng ít và máy in Laser phù hợp hơn để in số lượng nhiều."
        ],
        "correctAnswers": [
          "Máy in laser sử dụng Toner, và máy in phun sử dụng mực in (Ink).",
          "Máy in phun phù hợp hơn để in số lượng ít và máy in Laser phù hợp hơn để in số lượng nhiều."
        ],
        "explanation": "Máy in Laser dùng các hạt bụi mực khô (gọi là Toner) sấy nóng chảy lên giấy, nó chạy rất nhanh nên thích hợp để in cả đống sách vở. Còn máy in phun xịt những giọt mực lỏng (Ink), in chậm rãi và cho màu rất đẹp, nên hợp để ở nhà thỉnh thoảng in vài tấm ảnh kỉ niệm (in ít)."
      },
      {
        "id": 14,
        "question": "Hai tài nguyên nào có thể chỉ cho bạn cách sử dụng một tính năng trong chương trình phần mềm? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Diễn đàn trực tuyến dành riêng để thảo luận về chương trình.",
          "Hướng dẫn cài đặt kèm theo phần mềm.",
          "Lệnh Help có trong chương trình.",
          "Đường dây điện thoại hỗ trợ Kỹ thuật do nhà xuất bản phần mềm cung cấp."
        ],
        "correctAnswers": [
          "Lệnh Help có trong chương trình.",
          "Diễn đàn trực tuyến dành riêng để thảo luận về chương trình."
        ],
        "explanation": "Khi chơi một trò chơi mới trên máy tính mà không biết chơi, em có thể bấm nút \"Help\" (Trợ giúp) trong game để đọc luật chơi, hoặc lên các trang web nhóm trên mạng (Diễn đàn) để hỏi các anh chị đã chơi giỏi rồi chỉ cách cho."
      },
      {
        "id": 15,
        "question": "Bạn đang sử dụng điện thoại Android và muốn giảm độ sáng để tiết kiệm pin. Tính năng sau đây có thể cho phép bạn điều chỉnh độ sáng trên điện thoại này? (Chọn 1)",
        "type": "single",
        "options": [
          "Tính năng 1",
          "Tính năng 3",
          "Tính năng 2",
          "Tính năng 4"
        ],
        "correctAnswers": [
          "Tính năng 3"
        ],
        "explanation": "Thanh kéo nằm ngang có hình ông mặt trời chính là nơi chỉnh độ sáng. Kéo sang phải (mặt trời to) thì màn hình chói sáng rực rỡ, kéo sang trái (mặt trời nhỏ) thì màn hình sẽ dịu tối lại, giúp điện thoại đỡ tốn pin hơn.",
        "images": [
          "IC3.LEVEL2.CHUDE1.TEST2.cau 15.png"
        ]
      },
      {
        "id": 16,
        "question": "Hai tính năng nào sau đây cho phép bạn kiểm soát việc hiển thị thông tin cụ thể trên lịch cá nhân của mình? Chọn 2)",
        "type": "multiple",
        "options": [
          "Tắt lịch (Disable calendar)",
          "Chia sẻ (Share)",
          "Giữ riêng tư (Keep private)",
          "Lọc theo danh mục sự kiện (Filter by event category)"
        ],
        "correctAnswers": [
          "Lọc theo danh mục sự kiện (Filter by event category)",
          "Giữ riêng tư (Keep private)"
        ],
        "explanation": "Nếu lịch của em có quá nhiều chữ, em có thể dùng tính năng \"Lọc\" như một chiếc kính lúp, bảo nó chỉ hiện ra những ngày có sinh nhật bạn bè thôi cho dễ nhìn.\nVà nếu có những kế hoạch bí mật không muốn ai biết, em dùng tính năng \"Giữ riêng tư\" để khóa lại, chỉ một mình em được xem."
      },
      {
        "id": 17,
        "question": "Bạn có nhiều tài khoản Microsoft. Một tài khoản dành cho trường học, một tài khoản dùng cho gia đình và một tài khoản dùng cho các hoạt động chơi game của bạn. Bạn có các tập tin được lưu trữ trên OneDrive được liên kết với từng loại tài khoản. Bạn đã đăng nhập vào tài khoản gia đình của mình nhưng bạn cần truy cập một tập tin được chia sẻ với bạn thông qua OneDrive trên tài khoản chơi game của bạn. Tùy chọn nào sau đây là phù hợp?",
        "type": "single",
        "options": [
          "Chuyển từ tài khoản Microsoft gia đình của bạn sang tài khoản Microsoft chơi game của bạn",
          "Liên kết tài khoản trò chơi của bạn với tài khoản gia đình của bạn.",
          "Định cấu hình lại cả hai tài khoản Microsoft để sử dụng cùng một ID và mật khẩu đăng nhập.",
          "Thiết lập tài khoản Google được chia sẻ cho cả hai tài khoản Microsoft."
        ],
        "correctAnswers": [],
        "explanation": "Cùng một căn nhà nhưng em có nhiều chùm chìa khóa cho các căn phòng khác nhau (phòng gia đình, phòng game). Món đồ em cần tìm đang cất ở phòng game, nên em phải cất chìa khóa gia đình đi và lấy đúng chìa khóa phòng game ra mở cửa (chuyển đổi tài khoản) thì mới nhìn thấy đồ."
      },
      {
        "id": 18,
        "question": "CPU, card đồ họa và card mạng là loại thiết bị nào?",
        "type": "single",
        "options": [
          "Thiết bị lưu trữ (Storage device)",
          "Thiết bị xử lý (Processing device)",
          "Thiết bị xuất (Output device)",
          "Thiết bị nhập (Input device)"
        ],
        "correctAnswers": [
          "Thiết bị xử lý (Processing device)"
        ],
        "explanation": "Các linh kiện này nằm giấu kín bên trong máy tính, chúng làm nhiệm vụ giống như \"bộ não\" đang tập trung suy nghĩ, làm toán và giải quyết công việc liên tục. Vì vậy chúng được gọi là thiết bị \"xử lý\"."
      },
      {
        "id": 19,
        "question": "Có một số lựa chọn về thiết bị in gần bàn làm việc của bạn. Bạn thích một máy in và bạn muốn sử dụng. Bạn có thể làm gì để các lệnh in của bạn luôn được chuyển đến cùng một máy in?",
        "type": "single",
        "options": [
          "Đặt máy in yêu thích làm Mặc định.",
          "Di chuyển cáp kết nối máy in trực tiếp với máy tính của bạn.",
          "Ngắt kết nối cáp với tất cả các máy in khác.",
          "Xóa các máy in khác khỏi hàng đợi in của hệ điều hành của bạn."
        ],
        "correctAnswers": [],
        "explanation": "Chưa có giải thích cho câu hỏi này."
      },
      {
        "id": 20,
        "question": "Bạn vừa đăng ký một tài khoản trên Google. Tài khoản mới của bạn sử dụng Đăng nhập một lần (SSO). Bạn hãy cho biết, tùy chọn nào sau đây là lợi ích của Đăng nhập một lần (SSO)? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Thông tin xác thực được lưu trữ trên Amazon, Facebook và Google.",
          "SSO thuộc sở hữu và điều hành của chính phủ.",
          "Sau khi đăng nhập, bạn có thể truy cập Email, lưu trữ tài liệu, ứng dụng và các trang Web khác của mình với toàn quyền truy cập.",
          "Bạn có thể đăng nhập mà không cần sử dụng mật khẩu.",
          "Giúp tài khoản của bạn có bảo mật mạnh mẽ hơn.",
          "Bạn chỉ cần nhớ một tập hợp các chi tiết đăng nhập."
        ],
        "correctAnswers": [
          "Sau khi đăng nhập, bạn có thể truy cập Email, lưu trữ tài liệu, ứng dụng và các trang Web khác của mình với toàn quyền truy cập.",
          "Giúp tài khoản của bạn có bảo mật mạnh mẽ hơn.",
          "Bạn chỉ cần nhớ một tập hợp các chi tiết đăng nhập."
        ],
        "explanation": "SSO giống như một chiếc thẻ học sinh vạn năng. Thay vì phải nhớ nhiều chùm chìa khóa cho phòng thư viện, phòng máy tính, phòng y tế (ý E), em chỉ cần mở cửa đúng 1 lần bằng chiếc thẻ này là được vào hết các phòng (ý C). Thẻ này cũng được bảo vệ cực kỳ chắc chắn (ý D)."
      },
      {
        "id": 21,
        "question": "Bạn có thể lưu trữ dữ liệu của mình trên hai vị trí lưu trữ nào? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Thẻ SD trong điện thoại của bạn",
          "Máy tính bạn dùng chung trong phòng thí nghiệm của trường",
          "Bài đăng của bạn trên mạng xã hội",
          "Tài khoản Google Drive, Microsoft OneDrive hoặc Apple iCloud của bạn"
        ],
        "correctAnswers": [
          "Thẻ SD trong điện thoại của bạn"
        ],
        "explanation": "Có 2 cách để cất giữ ảnh chụp: Một là cất vào chiếc thẻ nhớ nhỏ xíu cắm trực tiếp bên trong điện thoại (giống như cất tiền trong ví). Hai là cất lên các kho chứa khổng lồ vô hình trên mạng như Google Drive (giống như đem tiền gửi vào ngân hàng)."
      },
      {
        "id": 22,
        "question": "Bạn hãy chọn hai tùy chọn nào sau đây là dịch vụ? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Quần áo",
          "Sửa ống nước",
          "Cắt tóc",
          "Trò chơi"
        ],
        "correctAnswers": [
          "Sửa ống nước",
          "Cắt tóc"
        ],
        "explanation": "\"Dịch vụ\" là nhờ người khác làm giúp mình một việc gì đó bằng công sức của họ, mà mình không mang một đồ vật cụ thể nào về nhà. Nhờ chú thợ sửa vòi nước hay cô thợ cắt tóc cho mình là dịch vụ. Còn Trò chơi hay Quần áo là món đồ em có thể cầm trên tay nên gọi là hàng hóa."
      },
      {
        "id": 23,
        "question": "Bạn đang phát nhạc qua loa máy tính xách tay của mình trong khi làm việc trên bảng tính. Bạn muốn tăng âm lượng. Vị trí nào trên màn hình cho phép bạn thay đổi âm lượng trên máy tính Windows này? (Chọn 1)",
        "type": "single",
        "options": [
          "Vị trí 2",
          "Vị trí 1"
        ],
        "correctAnswers": [
          "Vị trí 2"
        ],
        "explanation": "Vị trí số 2 nằm ở góc nhỏ bên dưới màn hình, có hình \"chiếc loa\" đang phát ra những sóng âm thanh cong cong. Chỉ cần bấm chuột vào hình chiếc loa đó là em có thể chỉnh tiếng to lên hoặc nhỏ đi.",
        "images": [
          "IC3.LEVEL2.CHUDE1.TEST2.cau 23.png"
        ]
      },
      {
        "id": 24,
        "question": "Tính năng phần mềm nào sau đây sử dụng một vài ký tự đầu tiên mà người dùng nhập để dự đoán phần còn lại của từ và sau đó tự động hoàn thành từ đó?",
        "type": "single",
        "options": [
          "Trình kiểm tra ngữ pháp (Grammar Checker)",
          "Autocomplete",
          "Tự động hóa (Automation)",
          "Autocorrect"
        ],
        "correctAnswers": [
          "Autocomplete"
        ],
        "explanation": "\"Auto\" là tự động, \"complete\" là hoàn thành. Giống như khi em mới viết chữ \"Ch\", máy tính thông minh đã đoán ngay em định viết chữ \"Chào bạn\" và nó viết nốt giúp em thật nhanh chóng."
      },
      {
        "id": 25,
        "question": "Bạn đang học cách xác định phần mở rộng tập tin thích hợp cho từng loại tập tin cụ thể. Đối với mỗi phát biểu về phần mở rộng tập tin, Bạn hãy chọn Đúng hoặc Sai.",
        "type": "matching",
        "options": [
          {
            "text": "Hình ảnh động có phần mở rộng tập tin .jpg.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Phần mở rộng tập tin hình ảnh có thể có nền trong suốt sẽ là .png.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Các tập tin có phần mở rộng .pdf trông giống hệt như tập tin gốc nhưng không thể chỉnh sửa được.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Các tập tin .txt vẫn giữ nguyên định dạng khi được sao chép từ tập tin khác.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Sai",
          "2": "Đúng",
          "3": "Đúng"
        },
        "explanation": "Hình ảnh động là .jpg -> Sai (.jpg là bức ảnh đứng im như tượng. Ảnh nhúc nhích được phải là .gif).\n.txt giữ nguyên định dạng -> Sai (File .txt rất nghèo nàn, nó chỉ có chữ cái trơn tuột, không cho phép tô màu hay in nghiêng).\n.pdf giống hệt gốc nhưng không chỉnh sửa được -> Đúng (Nó giống như em chụp ảnh lại cuốn sách, ai cũng xem được nhưng không ai cầm tẩy để xóa chữ trên bức ảnh đó được).\nPhần mở rộng cho hình ảnh nền trong suốt là .png -> Đúng (Đuôi .png giống như họa sĩ vẽ tranh trên một miếng kính trong veo)."
      },
      {
        "id": 26,
        "question": "Phát biểu nào sau đây giúp phân biệt giữa tập tin chỉ đọc (Read-only) và tập tin đọc-ghi (Read-Write)? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Một tập tin được đặt thuộc tính Chỉ đọc (Read only) có thể được xem nhưng không được sửa đổi.",
          "Người dùng khác có thể thay đổi tập tin có thuộc tính Đọc-Ghi (Read-Write).",
          "Các tập tin được đặt thuộc tính Chỉ đọc (Read only) theo mặc định.",
          "Tập tin được đặt thuộc tính Chỉ đọc (Read only) được bảo vệ khỏi bị sao chép."
        ],
        "correctAnswers": [
          "Người dùng khác có thể thay đổi tập tin có thuộc tính Đọc-Ghi (Read-Write).",
          "Một tập tin được đặt thuộc tính Chỉ đọc (Read only) có thể được xem nhưng không được sửa đổi."
        ],
        "explanation": "Tập tin \"Chỉ đọc\" giống như em đi bảo tàng nhìn ngắm một bức tranh, em chỉ được ngắm (xem) chứ không được cầm bút vẽ bậy lên tranh của người ta (không được sửa đổi).\nTập tin \"Đọc-Ghi\" giống như một cuốn sổ nháp trên bàn, ai đi ngang qua cũng có thể đọc, và cũng có thể cầm bút tẩy xóa, viết thêm chữ mới vào đó (thay đổi tập tin)."
      },
      {
        "id": 27,
        "question": "Trong Công nghệ thông tin, thuật ngữ chính xác cho việc sử dụng phần mềm để tạo ra các hướng dẫn và quy trình lặp lại giúp thay thế sự tương tác của con người là gì?",
        "type": "single",
        "options": [
          "Người máy học (Robotics)",
          "Không đồng bộ (Asynchronous)",
          "Bảo mật (Security)",
          "Tự động hóa (Automation)"
        ],
        "correctAnswers": [
          "Tự động hóa (Automation)"
        ],
        "explanation": "Thay vì mỗi buổi sáng em phải tự tay dùng sức kéo rèm cửa lên, em cài đặt một cỗ máy cứ đúng 6h sáng là tự động kéo rèm. Việc nhờ máy móc làm thay mình những việc cứ lặp đi lặp lại mãi gọi là \"Tự động hóa\"."
      },
      {
        "id": 28,
        "question": "Làm cách nào bạn có thể xác nhận rằng bạn đã kết nối thành công với thiết bị in? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Đối với máy in cục bộ, hãy xác nhận trạng thái sẵn sàng trong hàng đợi in của hệ điều hành.",
          "Đối với máy in mạng, hãy kết nối lại cáp Ethernet.",
          "Đối với máy in cục bộ, hãy đảm bảo rằng cáp máy in đã được cắm vào máy tính của bạn.",
          "Đối với máy in mạng, hãy Ping thiết bị in."
        ],
        "correctAnswers": [
          "Đối với máy in mạng, hãy Ping thiết bị in.",
          "Đối với máy in cục bộ, hãy xác nhận trạng thái sẵn sàng trong hàng đợi in của hệ điều hành."
        ],
        "explanation": "Để biết máy in đã thức dậy và sẵn sàng làm việc chưa: Nếu máy in không cắm dây mà dùng chung sóng wifi (máy in mạng), em gửi một lệnh \"Ping\" giống như gọi \"Alô có đó không?\" để xem máy in có trả lời không. Nếu máy in cắm dây trực tiếp vào máy tính (cục bộ), em chỉ cần mở màn hình ra xem máy có hiện chữ \"Ready\" (Sẵn sàng) hay không là được."
      },
      {
        "id": 29,
        "question": "Bạn muốn thay đổi độ tương phản của màn hình trên máy tính. Tính năng nào sau đây cho phép bạn điều chỉnh cài đặt độ tương phản trên máy tính Windows này? (Chọn 1)",
        "type": "single",
        "options": [
          "Tính năng 3",
          "Tính năng 4",
          "Tính năng 2",
          "Tính năng 1"
        ],
        "correctAnswers": [
          "Tính năng 4"
        ],
        "explanation": "Biểu tượng có hình người dang hai tay (Trợ năng) là một ngăn kéo đặc biệt. Nó chứa các công cụ giúp điện thoại hiện chữ to lên, màu sắc tách bạch rõ ràng (tương phản) để giúp các ông bà mắt kém vẫn có thể dùng điện thoại dễ dàng.",
        "images": [
          "IC3.LEVEL2.CHUDE1.TEST2.cau 29.png"
        ]
      },
      {
        "id": 30,
        "question": "Bạn muốn giảm độ sáng của màn hình trên máy tính. Tính năng nào sau đây cho phép bạn điều chỉnh cài đặt độ sáng trên máy tính Windows này? (Chọn 1)",
        "type": "single",
        "options": [
          "Tính năng 1",
          "Tính năng 3",
          "Tính năng 4",
          "Tính năng 2"
        ],
        "correctAnswers": [
          "Tính năng 1"
        ],
        "explanation": "Chữ \"Display\" nghĩa là Màn hình. Bất cứ vấn đề gì liên quan đến ánh sáng chói hay tối, muốn làm chữ to hay nhỏ hiện ra trên mặt kính màn hình thì em đều phải vào khu vực này để chỉnh.",
        "images": [
          "IC3.LEVEL2.CHUDE1.TEST2.cau 30.png"
        ]
      },
      {
        "id": 31,
        "question": "Hai cài đặt trình duyệt nào sau đây có thể được thay đổi để đáp ứng nhu cầu và sở thích cá nhân? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Thêm tiện ích mở rộng trình duyệt (Adding browser extensions)",
          "Đặt tên URL (Naming URLs)",
          "Tắt Cookie (Disabling cookies)",
          "Thêm nội dung vào Trợ giúp"
        ],
        "correctAnswers": [
          "Thêm tiện ích mở rộng trình duyệt (Adding browser extensions)",
          "Tắt Cookie (Disabling cookies)"
        ],
        "explanation": "Thêm \"tiện ích mở rộng\" giống như gắn thêm chiếc giỏ hay đèn nháy cho chiếc xe đạp trình duyệt của em để nó tiện lợi và xịn hơn.\nTắt \"Cookie\" là để chặn các cửa hàng trên mạng không được đi theo sau lưng ghi chép lại thói quen xem đồ chơi của em."
      },
      {
        "id": 32,
        "question": "Trong Windows, làm cách nào để khôi phục phiên bản trước của tập tin?",
        "type": "single",
        "options": [
          "Trong File Explorer, bấm chuột phải vào tập tin và chọn Restore Previous Versions.",
          "Trong Settings, chọn Update &amp; Security và chọn Recovery.",
          "Bạn không thể khôi phục phiên bản trước của tập tin.",
          "Trong File Explorer, bấm chuột phải vào tập tin và chọn Convert."
        ],
        "correctAnswers": [
          "Trong File Explorer, bấm chuột phải vào tập tin và chọn Restore Previous Versions."
        ],
        "explanation": "Tính năng \"Restore Previous Versions\" giống hệt cỗ máy thời gian của Doraemon. Nếu em lỡ tay lấy màu đen tô hỏng bức tranh trên máy tính, em bấm nút này để máy tính tua ngược thời gian, biến bức tranh trở lại khoảnh khắc đẹp đẽ lúc em chưa bị tô hỏng."
      }
    ]
  },
  {
    "id": "c1-t3",
    "title": "Chủ đề 1 - Bài Test 3",
    "topic": "Chủ đề 1",
    "questions": [
      {
        "id": 1,
        "question": "Bạn hãy cho biết, tổ hợp phím nào sau đây là thao tác tạo thư mục mới trong File Explorer?",
        "type": "single",
        "options": [
          "Ctrl + N",
          "Ctrl + Shift + N",
          "Ctrl + Shift + F",
          "Ctrl + F"
        ],
        "correctAnswers": [
          "Ctrl + Shift + N"
        ],
        "explanation": "Tưởng tượng em muốn xây một ngôi nhà chứa đồ chơi mới thật nhanh. Thay vì đi tìm từng viên gạch, em chỉ cần dùng câu thần chú \"Ctrl + Shift + N\" là một thư mục mới tinh sẽ hiện ra ngay lập tức! Chữ N là viết tắt của từ \"New\" trong tiếng Anh, nghĩa là \"Mới\" đó em."
      },
      {
        "id": 2,
        "question": "Nối từng phần mở rộng tập tin với tình huống hỗ trợ tương ứng. Để trả lời, hãy di chuyển từng phần mở rộng tập tin từ danh sách ở bên trái sang tình huống tương ứng ở bên phải.",
        "type": "matching",
        "options": [
          {
            "text": "Logo có nền trong suốt",
            "choices": [
              ".jpg",
              ".txt",
              ".pdf",
              ".png"
            ]
          },
          {
            "text": "Tập tin chứa các văn bản chưa định dạng",
            "choices": [
              ".jpg",
              ".txt",
              ".pdf",
              ".png"
            ]
          },
          {
            "text": "Ảnh mà bạn sẽ hiển thị trên trang Web",
            "choices": [
              ".jpg",
              ".txt",
              ".pdf",
              ".png"
            ]
          },
          {
            "text": "Tập tin mà bạn sẽ gửi qua Email cho công ty in",
            "choices": [
              ".jpg",
              ".txt",
              ".pdf",
              ".png"
            ]
          }
        ],
        "correctAnswers": {
          "0": ".png",
          "1": ".txt",
          "2": ".jpg",
          "3": ".pdf"
        },
        "explanation": "Đuôi tập tin giống như chiếc áo phù hợp cho từng công việc:\nÁo \".png\" là áo tàng hình, giúp hình nền biến mất để Logo nổi bật.\nÁo \".txt\" giống như một cuốn sổ nháp đơn giản, chỉ chứa chữ viết tay mộc mạc chưa được tô màu hay trang trí.\nÁo \".jpg\" là một bức ảnh nhẹ nhàng, dễ dàng dán lên bức tường \"trang web\" nhanh chóng.\nÁo \".pdf\" giống như một chiếc hộp kính khóa chặt, giúp bản vẽ của em không bị xô lệch khi gửi đi xa cho bác thợ in."
      },
      {
        "id": 3,
        "question": "Hai tùy chọn nào có thể giúp cho việc sử dụng máy tính dễ dàng hơn đối với những người bị hạn chế về khả năng di chuyển?",
        "type": "multiple",
        "options": [
          "Bảng phiên mã",
          "Tùy chọn chuyển giọng nói thành văn bản",
          "Màn hình lớn hơn",
          "Tùy chọn chỉ dùng bàn phím"
        ],
        "correctAnswers": [
          "Tùy chọn chỉ dùng bàn phím",
          "Tùy chọn chuyển giọng nói thành văn bản"
        ],
        "explanation": "Hãy tưởng tượng một người bạn bị đau tay, không thể cầm chuột để di chuyển được. Máy tính có phép thuật giúp bạn ấy: một là bạn ấy chỉ cần bấm các nút trên bàn phím là điều khiển được hết; hai là bạn ấy chỉ cần \"nói\" ra, máy tính sẽ nghe và tự động viết lại thành chữ giống như một cô thư ký ngoan ngoãn vậy."
      },
      {
        "id": 4,
        "question": "Hai nguyên tắc thiết kế chung cho phần cứng máy tính là gì? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Sử dụng công bằng: Thiết kế hữu ích và có thể bán được cho nhiều người có các khả năng thể chất/tinh thần khác nhau.",
          "Dễ làm sạch: Thiết kế hạn chế tối đa việc sử dụng các gam màu nhạt để tránh hiện tượng bám bẩn và ố vàng.",
          "Kích thước và không gian để tiếp cận và sử dụng: Thiết kế cung cấp không gian để tiếp cận, với, thao tác và sử dụng, không phân biệt kích thước, tư thế hoặc khả năng di chuyển của người dùng.",
          "Liên kết với Internet Vạn vật: Thiết kế triển khai chức năng trực tuyến bất cứ khi nào có thể để cải thiện trải nghiệm người dùng."
        ],
        "correctAnswers": [
          "Kích thước và không gian để tiếp cận và sử dụng: Thiết kế cung cấp không gian để tiếp cận, với, thao tác và sử dụng, không phân biệt kích thước, tư thế hoặc khả năng di chuyển của người dùng.",
          "Sử dụng công bằng: Thiết kế hữu ích và có thể bán được cho nhiều người có các khả năng thể chất/tinh thần khác nhau."
        ],
        "explanation": "Tưởng tượng em làm ra một chiếc xe đạp đặc biệt. Để ai cũng chơi được, chiếc xe phải vừa vặn với tất cả các bạn (kể cả bạn cao hay bạn thấp) - đó là \"Không gian tiếp cận\". Thứ hai, chiếc xe phải dễ lái với tất cả mọi người, kể cả những bạn khiếm khuyết - đó là \"Sử dụng công bằng\". Phần cứng máy tính cũng phải được thiết kế thân thiện với mọi người như vậy đó!"
      },
      {
        "id": 5,
        "question": "Bạn đang thiết kế áp phích cho khách hàng. Khi làm việc, bạn định kỳ lưu các phiên bản mới của tập tin để theo dõi các thay đổi và ý tưởng thiết kế của mình. Đâu là hai nhóm tập tin thể hiện quy ước đặt tên tập tin phù hợp? (Chọn 2)",
        "type": "multiple",
        "options": [
          "áp phích_bản nháp1.psd&nbsp; &nbsp; &nbsp; &nbsp;áp phích_bản nhap2.psd&nbsp; &nbsp; &nbsp; &nbsp;áp phích_BẢN CUỐI.psd",
          "áp phích_bản gốc.psd&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; áp phích_đã cắt.psd&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; áp phích_thước xám.psd",
          "áp phích.psd&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bản sao áp phích.psd&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ban sao áp phích 2.psd&nbsp; &nbsp; &nbsp;",
          "áp phích của tôi.psd&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; áp phích mới.psd&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; áp phích.psd&nbsp;"
        ],
        "correctAnswers": [],
        "explanation": "Khi em vẽ một bức tranh và muốn sửa đi sửa lại nhiều lần, em nên đánh số hoặc đặt tên thật rõ ràng như \"bản nháp 1\", \"bản nháp 2\", \"bản cuối\" để không bị nhầm. Cứ như việc em dán nhãn cho từng ngăn kéo đồ chơi vậy, lúc cần tìm \"bản mới nhất\" sẽ cực kỳ dễ dàng và không bao giờ bị lấy nhầm \"bản cũ\"."
      },
      {
        "id": 6,
        "question": "Các nhà cung cấp thương mại điện tử bán nhiều hàng hóa và dịch vụ khác nhau trên mạng. Phân loại từng mục là Hàng hóa hay Dịch vụ. Nếu là Hàng hóa thì chọn Yes, là Dịch vụ chọn No",
        "type": "matching",
        "options": [
          {
            "text": "Tai nghe Bluetooth",
            "choices": [
              "Yes",
              "No"
            ]
          },
          {
            "text": "Bộ định tuyến mạng",
            "choices": [
              "Yes",
              "No"
            ]
          },
          {
            "text": "Lưu trữ đám mây",
            "choices": [
              "Yes",
              "No"
            ]
          },
          {
            "text": "Đăng ký phần mềm",
            "choices": [
              "Yes",
              "No"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Yes",
          "1": "Yes",
          "2": "No",
          "3": "No"
        },
        "explanation": "Tưởng tượng \"Hàng hóa\" là những món đồ em có thể cầm nắm được bằng tay, như chiếc tai nghe hay bộ phát wifi. Còn \"Dịch vụ\" giống như khi em trả tiền để vào khu vui chơi hoặc nhờ người dọn phòng giúp, em không thể cầm nó mang về nhà cất đi được. Bộ nhớ đám mây hay phần mềm chính là những dịch vụ vô hình như vậy đó."
      },
      {
        "id": 7,
        "question": "Từ cửa sổ Settings, bạn hãy sắp xếp các bước để chọn Microsoft Edge làm trình duyệt mặc định? (Có Video minh họa các thao tác)&nbsp;\r\n        \r\nhttps://elearning.mindnext.vn/pluginfile.php/57774/question/questiontext/4207297/7/14025/Videominhhoa.mp4?time=1750205997425\r\nTrình phát Video is loading.Phát VideoPhátSkip BackwardSkip ForwardTắt tiếngThời gian hiện tại&nbsp;0:00/Độ dài&nbsp;0:31Đã tải: 0%0:00Kiểu Stream&nbsp;TRỰC TIẾPSeek to live, currently behind liveTRỰC TIẾPThời gian còn lại&nbsp;-0:31&nbsp;1xTỉ lệ phát lại2x1.75x1.5x1.25x1x, đã chọn0.75x0.5xChươngChươngMô tảtắt mô tả, đã chọnPhụ đềcài đặt phụ đề, mở hộp thoại cài đặt phụ đềtắt phụ đề, đã chọnTrack âm thanhPicture-in-PictureToàn màn hìnhThis is a modal window.Bắt đầu cửa sổ hộp thoại. Esc sẽ thoát và đóng cửa sổ.Văn bảnColorTrắngĐenĐỏXanh lá câyXanh da trờiVàngĐỏ tươiLamOpacityMờBán trong suốtText BackgroundColorĐenTrắngĐỏXanh lá câyXanh da trờiVàngĐỏ tươiLamOpacityMờBán trong suốtTrong suốtCaption Area BackgroundColorĐenTrắngĐỏXanh lá câyXanh da trờiVàngĐỏ tươiLamOpacityTrong suốtBán trong suốtMờKích cỡ phông chữ50%75%100%125%150%175%200%300%400%Dạng viền văn bảnNoneRaisedDepressedUniformDrop shadowPhông chữProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsĐặt lại khôi phục lại tất cả các cài đặt về giá trị mặc địnhXongĐóng cửa sổKết thúc cửa sổ hộp thoại.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Chọn biểu tượng Settings",
            "choices": [
              "Bước 1",
              "Bước 5",
              "Bước 4",
              "Bước 3",
              "Bước 2"
            ]
          },
          {
            "text": "Chọn Apps",
            "choices": [
              "Bước 1",
              "Bước 5",
              "Bước 4",
              "Bước 3",
              "Bước 2"
            ]
          },
          {
            "text": "Chọn Microsoft Edge",
            "choices": [
              "Bước 1",
              "Bước 5",
              "Bước 4",
              "Bước 3",
              "Bước 2"
            ]
          },
          {
            "text": "Chọn Default apps",
            "choices": [
              "Bước 1",
              "Bước 5",
              "Bước 4",
              "Bước 3",
              "Bước 2"
            ]
          },
          {
            "text": "Chọn Google Chrome",
            "choices": [
              "Bước 1",
              "Bước 5",
              "Bước 4",
              "Bước 3",
              "Bước 2"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Bước 1",
          "1": "Bước 2",
          "2": "Bước 3",
          "3": "Bước 4",
          "4": "Bước 5"
        },
        "explanation": "Để đổi người mở web yêu thích của máy tính, đầu tiên em vào phòng cài đặt (Settings). Sau đó mở tủ ứng dụng (Apps), tìm đến ngăn ứng dụng gốc (Default apps). Em thấy bạn Google Chrome đang đứng ở đó, em hãy bấm vào gọi bạn ấy ra (Bước 4) và nhường lại vị trí đó cho bạn Microsoft Edge (Bước 5) nhé!",
        "videos": [
          "IC3.LEVEL2.CHUDE1.TEST3.cau 7.mp4"
        ]
      },
      {
        "id": 8,
        "question": "Bạn hãy cho biết, phát biểu sau đây là Đúng hay Sai: “Trong Windows 10, tính năng tự động sửa (Autocorrect) luôn được kiểm soát trên từng ứng dụng.”",
        "type": "single",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswers": [
          "Đúng"
        ],
        "explanation": "Tính năng sửa lỗi chính tả trên máy tính giống như một cô giáo bí mật. Cô ấy không làm việc chung cho tất cả mọi cuốn vở, mà tùy vào em dùng ứng dụng nào (cuốn vở nào), em có thể nhờ cô ấy sửa lỗi riêng cho cuốn vở đó thôi."
      },
      {
        "id": 9,
        "question": "Bạn đang thêm ngày sinh của bố mình vào lịch cá nhân. Bạn cần tùy chỉnh các cài đặt sự kiện mặc định được hiển thị. Hãy chọn từng tùy chỉnh phù hợp với cài đặt sự kiện tương ứng.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Nhận thông báo một tuần trước sự kiện để bạn không quên mua quà.",
            "choices": [
              "Mời người dự",
              "Cả ngày",
              "15 phút trước",
              "Không lặp lại"
            ]
          },
          {
            "text": "Thêm sự kiện vào lịch của bạn vào một ngày cố định hàng năm",
            "choices": [
              "Mời người dự",
              "Cả ngày",
              "15 phút trước",
              "Không lặp lại"
            ]
          },
          {
            "text": "Thêm sự kiện vào lịch của anh trai bạn.",
            "choices": [
              "Mời người dự",
              "Cả ngày",
              "15 phút trước",
              "Không lặp lại"
            ]
          },
          {
            "text": "Xoá thời gian bắt đầu và kết thúc sự kiện.",
            "choices": [
              "Mời người dự",
              "Cả ngày",
              "15 phút trước",
              "Không lặp lại"
            ]
          }
        ],
        "correctAnswers": {
          "0": "15 phút trước",
          "1": "Không lặp lại",
          "2": "Mời người dự",
          "3": "Cả ngày"
        },
        "explanation": "Cuốn lịch máy tính giống như một chiếc đồng hồ báo thức rất ngoan. Để báo thức reo sớm nhắc mua quà, em chỉnh ở chỗ \"15 phút trước\". Để sinh nhật năm nào cũng tự động nhắc, em chỉnh ở chỗ \"Không lặp lại\". Muốn rủ anh trai cùng tổ chức, em gửi giấy mời ở phần \"Mời người dự\". Và sinh nhật là ngày vui chơi từ sáng đến tối nên em chọn \"Cả ngày\" để không cần quan tâm mấy giờ bắt đầu hay kết thúc nhé!",
        "images": [
          "IC3.LEVEL2.CHUDE1.TEST3.cau 9.png"
        ]
      },
      {
        "id": 10,
        "question": "Bạn hãy ghép từng bên tham gia thanh toán kỹ thuật số với định nghĩa tương ứng.",
        "type": "matching",
        "options": [
          {
            "text": "Cung cấp thẻ ghi nợ hoặc thẻ tín dụng",
            "choices": [
              "Người bán (Merchant)",
              "Ngân hàng thanh toán (Acquirer)",
              "Nhà phát hành (Issuer)"
            ]
          },
          {
            "text": "Bán hàng hóa và dịch vụ",
            "choices": [
              "Người bán (Merchant)",
              "Ngân hàng thanh toán (Acquirer)",
              "Nhà phát hành (Issuer)"
            ]
          },
          {
            "text": "Cho phép các giao dịch",
            "choices": [
              "Người bán (Merchant)",
              "Ngân hàng thanh toán (Acquirer)",
              "Nhà phát hành (Issuer)"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Nhà phát hành (Issuer)",
          "1": "Người bán (Merchant)",
          "2": "Ngân hàng thanh toán (Acquirer)"
        },
        "explanation": "Tưởng tượng em đi mua đồ chơi. \"Nhà phát hành\" là người đưa cho em một chiếc thẻ ma thuật (thẻ ngân hàng) để tiêu tiền. \"Người bán\" là chú chủ cửa hàng đồ chơi. Còn \"Ngân hàng thanh toán\" giống như một chú bảo vệ đứng ở giữa, kiểm tra xem thẻ của em có tiền không và đồng ý cho em mang đồ chơi về."
      },
      {
        "id": 11,
        "question": "Bạn có thể thay đổi điều gì với văn bản trên màn hình máy tính để làm cho văn bản dễ đọc hơn đối với những độc giả khiếm thị? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Kiểu chữ (Font)",
          "Độ tương phản (Contrast)",
          "Kích cỡ chữ (Size)",
          "Màu sắc (Color)"
        ],
        "correctAnswers": [
          "Màu sắc (Color)",
          "Kích cỡ chữ (Size)"
        ],
        "explanation": "Các bạn có đôi mắt yếu nhìn mọi thứ giống như đang nhìn qua một màn sương mù vậy. Để giúp bạn ấy đọc chữ dễ hơn, mình cần phóng to chữ lên thật bự (Kích cỡ chữ), và đổi sang những màu sắc thật nổi bật (Màu sắc) để chữ không bị chìm lỉm vào nền giấy nhé!"
      },
      {
        "id": 12,
        "question": "Bạn hãy cho biết những tuyên bố nào về việc mua ứng dụng trên thiết bị di động là đúng? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Ứng dụng trên hệ điều hành iOS được cài đặt thông qua App Store",
          "Ứng dụng miễn phí không phải trả thêm chi phi sau khi nhận được cài đặt",
          "Google Pay có thể được sử dụng tại các cửa hàng tạp hóa",
          "Tất cả chi phí ứng dụng đều được tính trước"
        ],
        "correctAnswers": [
          "Ứng dụng trên hệ điều hành iOS được cài đặt thông qua App Store",
          "Google Pay có thể được sử dụng tại các cửa hàng tạp hóa"
        ],
        "explanation": "\"App Store\" giống như một siêu thị đồ chơi dành riêng cho điện thoại iPhone (iOS), em phải vào đó mới mua được trò chơi mới. Còn \"Google Pay\" thì giống như một chiếc ví thần kỳ trên điện thoại, em có thể mang điện thoại ra cửa hàng tạp hóa gần nhà để chạm tít tít và trả tiền mua kẹo thật dễ dàng."
      },
      {
        "id": 13,
        "question": "Bạn hãy cho biết, phát biểu sau đây là đúng hay sai: “Đa số bàn phím đều có phím hoặc nút dùng để tăng giảm âm lượng của máy tính”",
        "type": "single",
        "options": [
          "Sai",
          "Đúng"
        ],
        "correctAnswers": [
          "Sai"
        ],
        "explanation": "Dù có một số bàn phím siêu nhân xịn xò có nút bấm to nhỏ âm lượng, nhưng không phải bàn phím nào cũng có đâu em nhé. Giống như không phải chiếc ô tô đồ chơi nào cũng có nút bấm còi, nhiều chiếc bàn phím chỉ có nút để gõ chữ thôi!"
      },
      {
        "id": 14,
        "question": "Tùy chọn nào sau đây là phát biểu đúng về quyền đối với tập tin tài liệu? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Chỉ có thể xem nhưng không được sửa đổi một tài liệu Chỉ đọc.",
          "Việc đặt tài liệu thành Chỉ đọc ngăn chặn người khác tạo bản sao mới của tài liệu.",
          "Cài đặt mặc định cho bất kỳ tài liệu xử lý văn bản mới nào là Chỉ đọc.",
          "Việc đặt tài liệu thành Đọc-Ghi cho phép người khác thay đổi nội dung tài liệu và thêm chú thích vào tài liệu."
        ],
        "correctAnswers": [
          "Việc đặt tài liệu thành Đọc-Ghi cho phép người khác thay đổi nội dung tài liệu và thêm chú thích vào tài liệu.",
          "Chỉ có thể xem nhưng không được sửa đổi một tài liệu Chỉ đọc."
        ],
        "explanation": "Khi em cho bạn mượn một bức tranh, nếu em dặn là quyền \"Chỉ đọc\", bạn ấy chỉ được phép mở to mắt ra ngắm nhìn mà không được lấy bút vẽ bậy vào. Còn nếu em cho phép quyền \"Đọc-Ghi\", bạn ấy mới có quyền lấy bút tô thêm màu và viết chữ vào bức tranh của em."
      },
      {
        "id": 15,
        "question": "Bạn hãy cho biết, quyền nào sau đây là cần thiết để có thể hiệu chỉnh tập tin?",
        "type": "single",
        "options": [
          "Read",
          "Read-Write",
          "View",
          "List"
        ],
        "correctAnswers": [
          "Read-Write"
        ],
        "explanation": "\"Hiệu chỉnh\" nghĩa là sửa chữa lỗi sai. Giống như lúc em làm bài tập, em cần có đôi mắt để \"Đọc\" (Read) xem mình đã viết gì, và cần có đôi tay cầm bút để \"Ghi\" (Write) sửa lại chữ. Nên để sửa bài, máy tính cần cấp cho em cả hai quyền \"Read-Write\" cùng lúc!"
      },
      {
        "id": 16,
        "question": "Với mỗi câu phát biểu về trình duyệt Web, hãy chọn Yes nếu bạn có thể thực hiện tác vụ hoặc chọn No nếu bạn không thể.",
        "type": "matching",
        "options": [
          {
            "text": "Thêm các phần bổ trợ và phần mở rộng vào trình duyệt để có thêm chức năng.",
            "choices": [
              "Yes",
              "No"
            ]
          },
          {
            "text": "Tùy chỉnh các nút, menu hoặc thanh công cụ của trình duyệt Web.",
            "choices": [
              "Yes",
              "No"
            ]
          },
          {
            "text": "Thay đổi trang chủ của trình duyệt Web.",
            "choices": [
              "Yes",
              "No"
            ]
          },
          {
            "text": "Thiết lập địa chỉ IP tĩnh cho máy tính trong trình duyệt web.",
            "choices": [
              "Yes",
              "No"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Yes",
          "1": "Yes",
          "2": "Yes",
          "3": "No"
        },
        "explanation": "Trình duyệt web giống như chiếc xe đạp của em. Em có thể gắn thêm rổ xe (thêm chức năng), dán hình siêu nhân (tùy chỉnh nút bấm), hay chọn nơi bắt đầu đạp xe (trang chủ). Nhưng em không thể dùng chiếc xe đạp để thay đổi biển số nhà của em được (thiết lập địa chỉ IP máy tính), vì việc đó là của ngôi nhà (hệ điều hành) cơ."
      },
      {
        "id": 17,
        "question": "Với mỗi câu phát biểu về điện toán đám mây, hãy chọn Đúng hoặc Sai",
        "type": "matching",
        "options": [
          {
            "text": "Các ứng dụng đám mây phải được cập nhật thủ công",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Lưu trữ tập tin trên đám mây kém an toàn hơn so với lưu trữ tập tin cục bộ",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Các ứng dụng và lưu trữ trên đám mây sẽ không có khả năng bị gặp sự cố dịch vụ",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bạn có thể truy cập các tập tin được lưu trữ trong bộ nhớ đám mây từ bất cứ đâu có kết nối Internet.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Sai",
          "3": "Đúng"
        },
        "explanation": "Đám mây giống như một chiếc tủ khoá thần kỳ lơ lửng trên trời. Em có thể lấy đồ chơi từ tủ này ở bất kỳ đâu miễn là có phép thuật \"Internet\". Đám mây tự động làm mới đồ chơi cho em (không cần làm thủ công). Tuy nhiên, vì lơ lửng trên mạng nên nếu bị mất chìa khóa bí mật, đám mây dễ bị người xấu nhòm ngó hơn cất ở nhà, và đôi khi đám mây cũng bị mệt mỏi ốm yếu không mở ra được (sự cố dịch vụ) đó."
      },
      {
        "id": 18,
        "question": "Bạn có các tài khoản Google riêng để sử dụng tại trường học và cho mục đích cá nhân. Bạn đã đăng nhập vào tài khoản cá nhân của mình. Bạn cần truy cập một tập tin được chia sẻ với bạn thông qua Google Drive của tài khoản trường học của bạn. Bạn nên làm gì?",
        "type": "single",
        "options": [
          "Đặt cấu hình cả hai tài khoản để sử dụng cùng một mật khẩu.",
          "Liên kết Google Drive của tài khoản cá nhân và tài khoản trường học.",
          "Trong phần cài đặt tài khoản Google cá nhân, bỏ chặn tài khoản trường học của bạn.",
          "Chuyển từ tài khoản Google cá nhân sang tài khoản trường học của bạn."
        ],
        "correctAnswers": [
          "Chuyển từ tài khoản Google cá nhân sang tài khoản trường học của bạn."
        ],
        "explanation": "Em hãy tưởng tượng mình có hai chiếc chìa khóa: một cái để mở tủ đồ ở nhà (tài khoản cá nhân), một cái để mở tủ ở lớp (tài khoản trường học). Khi em muốn lấy cuốn vở đang cất trong tủ của lớp, em bắt buộc phải cất chìa khóa nhà đi và cầm đúng chiếc chìa khóa của lớp học ra mới mở cửa được nhé."
      },
      {
        "id": 19,
        "question": "Bạn đang ở trong một căn phòng có nhiều tiếng ồn. Bạn kết nối tai nghe với máy tính để có thể nghe âm thanh tốt hơn nhưng âm thanh vẫn phát ra qua loa ngoài của máy tính thay vì tai nghe. Bạn cần âm thanh của máy tính phát ra qua tai nghe. Bạn nên làm gì?",
        "type": "single",
        "options": [
          "Đặt cấu hình cài đặt âm thanh Trợ năng",
          "Quản lý thiết bị đầu ra",
          "Tắt tiếng loa máy tính",
          "Quản lý thiết bị đầu vào"
        ],
        "correctAnswers": [
          "Quản lý thiết bị đầu ra"
        ],
        "explanation": "Âm thanh phát ra từ máy tính giống như nước chảy ra khỏi ống dẫn. \"Thiết bị đầu ra\" chính là cái vòi nước đó. Máy tính đang xả âm thanh nhầm qua cái vòi lớn (loa ngoài), em chỉ cần vào chỗ \"Quản lý thiết bị đầu ra\" để vặn khóa, chuyển cho dòng nước âm thanh chảy vào đúng cái vòi nhỏ xíu là chiếc \"tai nghe\" của em thôi!"
      },
      {
        "id": 20,
        "question": "Ứng dụng nào được sử dụng trong hệ điều hành iOS để tải xuống các ứng dụng khác?",
        "type": "single",
        "options": [
          "Play Store",
          "Store",
          "App Store",
          "Google Play"
        ],
        "correctAnswers": [
          "App Store"
        ],
        "explanation": "Giống như em đi mua bánh kẹo thì phải đến \"Cửa hàng bách hóa\". Khi dùng điện thoại iPhone (hệ điều hành iOS) và muốn tải trò chơi mới, em phải đi vào một cửa hàng đặc biệt dành riêng cho iPhone tên là \"App Store\" (Cửa hàng ứng dụng) nhé."
      },
      {
        "id": 21,
        "question": "Cô Wilkins đang xử lý một bảng tính. Ở cột đầu tiên, cô nhập danh sách học sinh trong lớp. Ở cột thứ hai, cô ấy nhập “Yes” hoặc “No” cạnh tên của từng học sinh để biểu thị việc học sinh đã hoàn thành bài kiểm tra cuối kỳ hay chưa. Ở một số phần trong danh sách, cô nhận thấy rằng khi cô nhập chữ cái “Y”, từ “Yes” sẽ xuất hiện trong ô. Tính năng nào tạo nên sự thay đổi này?",
        "type": "single",
        "options": [
          "Tự khớp (AutoFit)",
          "Tự động điền (AutoFill)",
          "Tự động hoàn tất (AutoComplete)",
          "Tự định dạng (AutoFormat)"
        ],
        "correctAnswers": [
          "Tự động hoàn tất (AutoComplete)"
        ],
        "explanation": "Máy tính lúc này giống như một người bạn rất hiểu ý em. Khi em vừa mở miệng nói chữ \"Y...\", bạn ấy đã nhớ ngay là em định nói \"Yes\" nên bạn ấy đọc nốt luôn từ đó ra giùm em. Phép thuật này gọi là \"Tự động hoàn tất\" để giúp em gõ chữ nhanh hơn mà không bị mỏi tay!"
      },
      {
        "id": 22,
        "question": "Bạn hãy cho biết tùy chọn nào sau đây là thích hợp cho phát biểu: \"Hầu hết các CPU được tạo thành từ nhiều___________, cho phép một CPU xử lý nhiều luồng đồng thời.”",
        "type": "single",
        "options": [
          "Làn (Lanes)",
          "Lõi (Cores)",
          "Bộ xử lý (Processors)",
          "Đơn vị (Units)"
        ],
        "correctAnswers": [
          "Lõi (Cores)"
        ],
        "explanation": "\"CPU\" là bộ não của máy tính, còn \"Lõi\" giống như những chú kiến thợ tí hon làm việc bên trong bộ não đó. Nếu chỉ có 1 chú kiến thì dọn dẹp rất chậm. Nên máy tính thường chứa rất nhiều \"Lõi\" (nhiều chú kiến) để cùng nhau chia việc ra làm, giúp máy tính tính toán siêu nhanh."
      },
      {
        "id": 23,
        "question": "Bạn gặp sự cố khi in tài liệu từ máy tính của mình. Với mỗi câu phát biểu, hãy chọn Đúng nếu đó là phương pháp xác nhận kết nối thành công với máy in hoặc Sai nếu không phải.",
        "type": "matching",
        "options": [
          {
            "text": "Đối với máy in được kết nối Ethernet, hãy đảm bảo rằng cáp Ethernet được kết nối trực tiếp với máy tính thay vì thông qua bộ chuyển đổi hoặc bộ định tuyến.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Kiểm tra trạng thái kết nối máy in trong cửa sổ cài đặt Máy in &amp; Máy quét (Printers &amp; Scanners).",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Với máy in được kết nối trực tiếp, hãy thay thế cáp kết nối bằng cáp CAT6.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Sai"
        },
        "explanation": "Để biết bạn máy in đã được \"nắm tay\" với máy tính chưa, cách đơn giản và đúng nhất là em mở danh sách bạn bè (cửa sổ cài đặt Máy in & Máy quét) ra để xem tên bạn máy in có đang sáng đèn báo \"Đã kết nối\" hay không. Còn việc bắt buộc cắm dây mạng trực tiếp hay dùng dây xịn (CAT6) đều không cần thiết để kiểm tra."
      },
      {
        "id": 24,
        "question": "Bạn hãy cho biết, ứng dụng nào sau đây được sử dụng để nén tập tin trong Windows?",
        "type": "single",
        "options": [
          "Send",
          "7-Zip",
          "BitLocker",
          "Compress"
        ],
        "correctAnswers": [
          "7-Zip"
        ],
        "explanation": "Tưởng tượng em có rất nhiều quần áo mùa đông phồng to muốn nhét vào vali đi du lịch. Em sẽ cần một chiếc túi nilon hút chân không để ép quần áo xẹp lại xíu xiu. Trong máy tính, ứng dụng \"7-Zip\" chính là chiếc túi thần kỳ đó, nó giúp \"ép nén\" các tập tin lại cho thật nhỏ gọn để tiết kiệm chỗ trống!"
      },
      {
        "id": 25,
        "question": "Với mỗi câu phát biểu về cáp kết nối, hãy chọn Đúng hoặc Sai.",
        "type": "matching",
        "options": [
          {
            "text": "Bạn có thể sử dụng cáp DVI để kết nối trực tiếp hai máy tính nhằm chia sẻ tập tin.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bạn có thể sử dụng cáp HDMI để kết nối máy tính xách tay với máy chiếu.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bạn có thể sử dụng cáp CAT6 Ethernet để kết nối trực tiếp máy tính với bộ định tuyến không dây.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "Các sợi dây cáp kết nối giống như những ống hút có công dụng khác nhau:\nCáp DVI và HDMI chỉ là \"ống hút hình ảnh\", chỉ dùng để dẫn hình ảnh từ máy tính sang màn hình TV hoặc máy chiếu để xem phim. Chúng không thể chuyển bài tập (tập tin) qua lại được đâu.\nCòn cáp CAT6 Ethernet là \"ống hút mạng\", giúp cắm nối máy tính vào cục phát wifi (bộ định tuyến) để có mạng Internet vào xem Youtube đó!"
      },
      {
        "id": 26,
        "question": "Bạn nên tắt tính năng nào trên thiết bị Windows để ngăn phương tiện di động tự động khởi động khi được kết nối với thiết bị? (Chọn 2)",
        "type": "multiple",
        "options": [
          "AutoRun",
          "AutoPlay",
          "AutoStart",
          "AutoConnect"
        ],
        "correctAnswers": [
          "AutoRun",
          "AutoPlay"
        ],
        "explanation": "\"AutoRun\" và \"AutoPlay\" giống như việc em vừa mới đút chiếc đĩa nhạc vào là máy tính chưa kịp hỏi đã tự động hét toáng lên bài hát. Việc tự động này đôi khi mở cửa lỡ cho những con bọ virus độc hại chạy vào. Tắt 2 tính năng này đi giống như dặn dò máy tính: \"Đợi tớ gật đầu bấm nút thì mới được chạy nhé!\"."
      },
      {
        "id": 27,
        "question": "Hai định dạng tập tin nào thường được sử dụng cho Logo?",
        "type": "multiple",
        "options": [
          "PNG",
          "JPEG",
          "PDF",
          "GIF"
        ],
        "correctAnswers": [
          "GIF",
          "PNG"
        ],
        "explanation": "Logo (biểu tượng của công ty) thường cần sự gọn gàng và đặc biệt là phải có lớp nền \"tàng hình\" (trong suốt) để khi in lên áo trắng hay áo đen đều đẹp, không bị vướng một khung vuông xấu xí. Hai chiếc áo định dạng \"GIF\" và \"PNG\" có khả năng tàng hình ma thuật như vậy, nên Logo cực kỳ thích mặc chúng!"
      },
      {
        "id": 28,
        "question": "Bạn hãy cho biết, phát biểu nào sau đây là đúng về cáp HDMI? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Đầu nối HDMI loại D được sử dụng phổ biến với điện thoại di động",
          "Cáp HDMI chuyển Video nhưng không chuyển âm thanh",
          "Đầu nối HDMI loại C có số Pin ít hơn đầu nối HDMI loại A",
          "Đầu nối HDMI loại C còn được gọi là Mini-HDMI"
        ],
        "correctAnswers": [
          "Đầu nối HDMI loại C còn được gọi là Mini-HDMI",
          "Đầu nối HDMI loại D được sử dụng phổ biến với điện thoại di động"
        ],
        "explanation": "Cáp HDMI giống như đường ống dẫn ma thuật truyền cả hình ảnh và âm thanh đi cùng nhau. Tùy vào cái lỗ cắm trên thiết bị to hay nhỏ mà nó có các phiên bản: loại C nhỏ xíu gọi là \"Mini\", còn loại D thì bé tí ti như con kiến, chuyên dùng để cắm vào điện thoại di động để mang hình ảnh từ điện thoại lên chiếu trên TV bự!"
      },
      {
        "id": 29,
        "question": "Bạn hãy cho biết, loại cáp Ethernet nào có tốc độ 10Gb/s và băng thông 600MHz?",
        "type": "single",
        "options": [
          "CAT6",
          "CAT7",
          "CAT8",
          "CAT5"
        ],
        "correctAnswers": [
          "CAT7"
        ],
        "explanation": "Cáp mạng giống như con đường cao tốc cho xe cộ (dữ liệu) chạy qua. Số đằng sau càng lớn thì đường càng xịn. Con đường mang tên CAT7 là một đường siêu cao tốc, vô cùng rộng rãi, cho phép các dữ liệu chạy vèo vèo với tốc độ chóng mặt 10Gb/s mà không bị tắc đường!"
      },
      {
        "id": 30,
        "question": "Bạn đang sử dụng máy tính xách tay để làm việc trong khu vực ngoài trời đầy nắng. Bạn cần giảm thiểu tình trạng mỏi mắt. Bạn nên điều chỉnh cài đặt màn hình nào?",
        "type": "single",
        "options": [
          "Độ tương phản (Contrast)",
          "Độ sáng (Brightness)",
          "Độ sắc nét (Sharpness)",
          "Co giãn (Scale)"
        ],
        "correctAnswers": [
          "Độ sáng (Brightness)"
        ],
        "explanation": "Khi em mang máy tính ra ngoài trời nắng, ánh mặt trời rất chói, làm màn hình máy tính có vẻ bị tối đi và khó nhìn. Giống như việc em cố đọc sách trong bóng tối vậy, mắt sẽ rất mỏi. Vì thế, em phải kéo thanh \"Độ sáng\" (Brightness) lên mức cao nhất, để màn hình sáng rực rỡ hơn cả ánh mặt trời, lúc đó mắt em mới nhìn rõ chữ mà không bị mệt."
      },
      {
        "id": 31,
        "question": "Hai mục nào thường tạo nên thông tin xác thực trang Web?",
        "type": "multiple",
        "options": [
          "Số điện thoại",
          "Địa chỉ email",
          "Số định danh cá nhân (PIN)",
          "Mật khẩu"
        ],
        "correctAnswers": [
          "Địa chỉ email",
          "Mật khẩu"
        ],
        "explanation": "\"Thông tin xác thực\" giống như một chiếc chìa khóa đôi để mở cửa vào nhà (trang Web). Món thứ nhất là \"Địa chỉ email\" (tên gọi của em), và món thứ hai là \"Mật khẩu\" (mã số bí mật chỉ mình em biết). Phải có đủ cả hai mảnh chìa khóa này thì trang Web mới cho phép em vào trong."
      },
      {
        "id": 32,
        "question": "Lợi thế của việc sử dụng ví điện tử như Apple Pay hoặc Google Pay là gì?",
        "type": "single",
        "options": [
          "Khuyến khích bạn tìm kiếm và mua sắm với mức giá tốt nhất",
          "Yêu cầu bạn ủy quyền mọi giao dịch",
          "Tự động cung cấp số thẻ tín dụng của bạn cho các cửa hàng trực tuyến",
          "Tạo lịch sử tín dụng của bạn"
        ],
        "correctAnswers": [
          "Yêu cầu bạn ủy quyền mọi giao dịch"
        ],
        "explanation": "Dùng ví điện tử (Apple Pay, Google Pay) rất an toàn. Mỗi khi em muốn mua một món đồ chơi trên mạng, chiếc ví sẽ không tự động trừ tiền ngay, mà nó luôn \"hỏi xin phép\" (ủy quyền) bằng cách yêu cầu em phải quét khuôn mặt hoặc bấm dấu vân tay. Phải đúng là em cho phép thì tiền mới được chuyển đi."
      }
    ]
  },
  {
    "id": "c2-t4",
    "title": "Chủ đề 2 - Bài Test 4",
    "topic": "Chủ đề 2",
    "questions": [
      {
        "id": 1,
        "question": "Bạn muốn cập nhật những tiến bộ công nghệ. Hai hành động nào có nhiều khả năng khiến bạn biết đến những tiến bộ công nghệ? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Đăng ký một nguồn cấp tin tức công nghệ.",
          "Tham gia một số nhóm công nghệ trên mạng xã hội và đọc các bài đăng của họ.",
          "Xem phim được sản xuất bằng công nghệ.",
          "Sử dụng thiết bị máy tính hàng ngày."
        ],
        "correctAnswers": [
          "Tham gia một số nhóm công nghệ trên mạng xã hội và đọc các bài đăng của họ.",
          "Đăng ký một nguồn cấp tin tức công nghệ."
        ],
        "explanation": "Giống như khi em muốn biết về những món đồ chơi mới nhất vừa ra mắt. Em sẽ tham gia vào các \"câu lạc bộ mê đồ chơi\" trên mạng để xem các bạn bàn tán gì (đáp án B), hoặc em đăng ký nhận \"báo nhi đồng\" chuyên về đồ chơi để mỗi ngày đều có người gửi tin tức mới đến tận nhà cho em đọc (đáp án A)."
      },
      {
        "id": 2,
        "question": "Những nghi thức nào được coi là đúng cho một cuộc họp trực tuyến? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Làm việc trên các dự án khác",
          "Tắt tiếng micrô khi cần thiết",
          "Kiểm tra email miễn là nó ở ngoài máy ảnh",
          "Trang phục phù hợp"
        ],
        "correctAnswers": [
          "Tắt tiếng micrô khi cần thiết",
          "Trang phục phù hợp"
        ],
        "explanation": "Học hay họp qua mạng cũng giống hệt như khi em ngồi trong lớp học thật vậy. Em phải mặc quần áo lịch sự, gọn gàng chứ không thể mặc đồ ngủ lôi thôi (Trang phục phù hợp). Và khi thầy cô hoặc bạn bè đang phát biểu, em cần \"khóa\" chiếc micro của mình lại (tắt tiếng micrô) để những tiếng ồn ào xung quanh nhà em (tiếng chó sủa, tiếng tivi) không làm phiền cả lớp."
      },
      {
        "id": 3,
        "question": "Xác định hai cách để phân biệt danh tính kỹ thuật số cá nhân của bạn với danh tính kỹ thuật số nghề nghiệp của bạn? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Sử dụng LinkedIn cho các mục đích nghề nghiệp và Facebook cho các bài đăng cá nhân.",
          "Không bao giờ đăng ảnh.",
          "Chỉ theo dõi các chính trị gia, vận động viên chuyên nghiệp và người nổi tiếng trên Twitter.",
          "Tạo biệt hiệu, bí danh cho bài đăng trên diễn đàn và blog giải trí, nhưng sử dụng tên thật của bạn cho bài đăng trong diễn đàn và blog kỹ thuật."
        ],
        "correctAnswers": [
          "Sử dụng LinkedIn cho các mục đích nghề nghiệp và Facebook cho các bài đăng cá nhân.",
          "Tạo biệt hiệu, bí danh cho bài đăng trên diễn đàn và blog giải trí, nhưng sử dụng tên thật của bạn cho bài đăng trong diễn đàn và blog kỹ thuật."
        ],
        "explanation": "Trên mạng, em nên có hai \"vai diễn\" rạch ròi. Một là lúc đi học/đi làm nghiêm túc: em phải dùng tên thật của mình và dùng mạng xã hội dành cho người lớn đi làm (như LinkedIn). Hai là lúc đi chơi, giải trí: em có thể dùng biệt danh siêu ngầu (như \"Nhện Nhí\", \"Bé Heo\") và chơi ở sân chơi dành cho bạn bè (như Facebook). Việc này giúp em không bị nhầm lẫn giữa công việc và lúc vui chơi."
      },
      {
        "id": 4,
        "question": "Lớp của bạn đang học cách sử dụng ứng dụng phần mềm mới. Mỗi học sinh được phân công sử dụng thành thạo một tính năng khác nhau của ứng dụng. Đâu là hai cách mà học sinh có thể cải thiện khả năng sử dụng các tính năng được phân công? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Hướng dẫn người khác sử dụng tính năng đó.",
          "Tham khảo tài nguyên Trợ giúp của ứng dụng.",
          "Đọc đánh giá trực tuyến về ứng dụng.",
          "Tham gia kỳ thi cấp chứng chỉ."
        ],
        "correctAnswers": [
          "Hướng dẫn người khác sử dụng tính năng đó.",
          "Tham khảo tài nguyên Trợ giúp của ứng dụng."
        ],
        "explanation": "Để chơi thật giỏi một món đồ chơi mới, em có hai cách tuyệt vời nhất. Một là mở sách hướng dẫn ra đọc xem nhà sản xuất chỉ cách chơi thế nào (Tham khảo tài nguyên Trợ giúp). Hai là em đem món đồ chơi đó ra dạy lại cho một người bạn khác cách chơi. Người ta phát hiện ra rằng, khi em giảng bài cho bạn hiểu thì chính bộ não của em cũng sẽ tự động nhớ siêu lâu và giỏi lên rất nhiều (Hướng dẫn người khác)."
      },
      {
        "id": 5,
        "question": "Chọn từng kiểu mua hàng trong ứng dụng cho phù hợp với mô tả tương ứng.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Mở khóa một tính năng đặc biệt trên trò chơi điện tử",
            "choices": [
              "Vật tư không tiêu hao",
              "Tự động gia hạn",
              "Vật tư tiêu hao",
              "Không tự động gia hạn"
            ]
          },
          {
            "text": "Thuê phim trực tuyến thông qua dịch vụ phát trực tuyến",
            "choices": [
              "Vật tư không tiêu hao",
              "Tự động gia hạn",
              "Vật tư tiêu hao",
              "Không tự động gia hạn"
            ]
          },
          {
            "text": "Mua đá quý hoặc tiền xu cho trò chơi trên thiết bị di động",
            "choices": [
              "Vật tư không tiêu hao",
              "Tự động gia hạn",
              "Vật tư tiêu hao",
              "Không tự động gia hạn"
            ]
          },
          {
            "text": "Đăng ký dịch vụ phát video trực tuyến",
            "choices": [
              "Vật tư không tiêu hao",
              "Tự động gia hạn",
              "Vật tư tiêu hao",
              "Không tự động gia hạn"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Vật tư không tiêu hao",
          "1": "Không tự động gia hạn",
          "2": "Vật tư tiêu hao",
          "3": "Tự động gia hạn"
        },
        "explanation": "Vật tư không tiêu hao: Giống như em mua một bộ áo giáp siêu nhân trong game, mua 1 lần là em được mặc mãi mãi, không bao giờ mất đi.\nKhông tự động gia hạn: Giống như em ra tiệm thuê truyện tranh về đọc 1 ngày rồi trả. Lần sau muốn đọc nữa thì phải tự vác tiền ra thuê tiếp chứ cô chủ quán không tự ý thò tay vào túi lấy tiền của em.\nVật tư tiêu hao: Giống như em mua kẹo. Tiền xu hay đá quý xài là sẽ vơi đi, ăn là sẽ hết, muốn có thêm thì phải nạp tiền mua tiếp.\nTự động gia hạn: Giống như đóng tiền điện hàng tháng. Cứ đến hạn là hệ thống sẽ tự động trừ tiền trong thẻ để em luôn có phim xem mà không bị ngắt quãng."
      },
      {
        "id": 6,
        "question": "Hai khía cạnh nào của sự hiện diện trực tuyến của một người đóng góp vào danh tính kỹ thuật số nghề nghiệp của người đó?",
        "type": "multiple",
        "options": [
          "Trang web công ty",
          "Ngày sinh",
          "Tài khoản LinkedIn",
          "Trang Facebook"
        ],
        "correctAnswers": [
          "Trang web công ty",
          "Tài khoản LinkedIn"
        ],
        "explanation": "\"Danh tính nghề nghiệp\" giống như một tấm bảng vàng khen thưởng để em đi xin việc. Người ta sẽ đánh giá em là người làm việc giỏi giang qua \"Tài khoản LinkedIn\" (mạng xã hội rèn luyện công việc) hoặc tên của em được vinh danh trên \"Trang web của công ty\" nơi em đang làm. Còn Facebook hay thông tin Ngày sinh thì giống như cuốn nhật ký vui chơi cá nhân thôi."
      },
      {
        "id": 7,
        "question": "Ai đó trên trang mạng xã hội yêu thích của bạn vừa đăng thông tin không chính xác về một sự kiện lịch sử của Mỹ. Bạn quyết định trả lời bài viết. Hai câu trả lời nào tuân theo Netiquette kỹ thuật số? (Chọn 2)",
        "type": "multiple",
        "options": [
          "\"Bạn đã đọc nghiên cứu về sự kiện này do Hiệp hội Lịch sử Hoa Kỳ xuất bản chưa? Góc nhìn của họ thật thú vị.\"",
          "\"Nhiều học giả không đồng ý. Đây là một liên kết với một số sự kiện đối lập về cùng một sự kiện lịch sử này.\"",
          "\"THÔNG TIN SAI LẦM! HÃY NHẬN THẤY SỰ THẬT CỦA BẠN TRƯỚC KHI ĐĂNG!\"",
          "\"Chỉ có những kẻ khờ mới tin vào quan điểm này. Rõ ràng là bạn đã không thực hiện bất kỳ nghiên cứu nào trước khi đăng!\""
        ],
        "correctAnswers": [
          "\"Bạn đã đọc nghiên cứu về sự kiện này do Hiệp hội Lịch sử Hoa Kỳ xuất bản chưa? Góc nhìn của họ thật thú vị.\"",
          "\"Nhiều học giả không đồng ý. Đây là một liên kết với một số sự kiện đối lập về cùng một sự kiện lịch sử này.\""
        ],
        "explanation": "\"Netiquette\" có nghĩa là \"Phép lịch sự trên mạng\". Khi thấy bạn mình nói sai một điều gì đó, một em bé ngoan sẽ không nhảy vào mắng bạn là \"Sai rồi, đồ ngốc!\". Thay vào đó, em sẽ nhẹ nhàng đưa ra một cuốn sách (đáp án A) hay một đường link thông tin đúng (đáp án B) để bạn tự đọc và tự hiểu ra vấn đề mà không bị xấu hổ trước mặt mọi người."
      },
      {
        "id": 8,
        "question": "Một người bạn vừa tham gia mạng xã hội. Bài đăng đầu tiên của cô ấy là một bức ảnh cũ và đáng xấu hổ của bạn. Cô ấy đã không hỏi ý kiến của bạn trước. Bạn cần phải trả lời theo các chuẩn mực đạo đức thích hợp trong môi trường số. Với mỗi câu phát biểu, hãy chọn Đúng nếu đó có thể là một phần phản hồi của bạn với bài đăng nói trên là phù hợp hoặc Sai nếu không phải.",
        "type": "matching",
        "options": [
          {
            "text": "\"Làm ơn đừng đăng hình của mình khi chưa hỏi ý kiến”",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "\"Mình sẽ đăng bức ảnh đáng xấu hổ của bạn\"",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "\"XÓA NGAY ĐI!\"",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Sai"
        },
        "explanation": "Khi bạn làm em buồn vì đăng ảnh xấu, em cần giải quyết lịch sự nhưng rõ ràng. Em nên nhắn tin nói thẳng nhẹ nhàng: \"Làm ơn đừng đăng hình của mình\" (Đúng). Em tuyệt đối không được trẻ con bằng cách trả thù đăng lại ảnh xấu của bạn (Sai). Và đặc biệt, không nên viết hoa toàn bộ chữ \"XÓA NGAY ĐI!\" vì trên mạng, viết hoa tất cả các chữ cái mang ý nghĩa là em đang gào thét, quát mắng vào mặt người khác đó (Sai)."
      },
      {
        "id": 9,
        "question": "Một học sinh cấp hai tham gia cộng đồng mạng xã hội gồm những người có cùng sở thích với mình. Với mỗi câu phát biểu, hãy chọn Đúng nếu đây là cách phù hợp để tương tác với cộng đồng trực tuyến hoặc Sai nếu không phù hợp.",
        "type": "matching",
        "options": [
          {
            "text": "Trả lời bình luận trên một chuỗi chủ đề nói rằng mình không đồng ý, sử dụng giọng điệu tôn trọng.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Hy vọng các thành viên khác trong cộng đồng coi thông tin cậu ấy chia sẻ là riêng tư.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Chia sẻ bình luận từ cộng đồng với một nhóm khác mà không nói rõ ai đã đưa ra bình luận đó.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Giới thiệu bản thân với các thành viên cộng đồng và cung cấp địa chỉ email cá nhân của cậu ấy.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Sai",
          "3": "Sai"
        },
        "explanation": "Dù không đồng ý với ý kiến của bạn, em vẫn cãi lại bằng lời lẽ lịch sự, không chửi bới. Đó là em bé ngoan (Đúng).\nLên mạng giống như đứng giữa ngã tư đường kể chuyện, em không thể bắt hàng ngàn người lạ giữ bí mật cho mình được (Sai).\nMang chuyện của nhóm này đi \"ngồi lê đôi mách\" cho nhóm khác nghe là hành động rất xấu, dễ gây đánh nhau (Sai).\nKhông bao giờ được đưa địa chỉ nhà hay email/số điện thoại cá nhân cho những người lạ trên mạng vì rất nguy hiểm, họ có thể là kẻ trộm hoặc kẻ xấu (Sai)."
      },
      {
        "id": 10,
        "question": "Bạn hãy cho biết, nhận định sau đây là đúng hay sai: \"Tài khoản ngân hàng trực tuyến là một phần của nhận dạng kỹ thuật số\"",
        "type": "single",
        "options": [
          "Sai",
          "Đúng"
        ],
        "correctAnswers": [
          "Đúng"
        ],
        "explanation": "\"Nhận dạng kỹ thuật số\" giống như chiếc ba lô thần kỳ chứa TẤT CẢ mọi thứ về em trên Internet. Nó không chỉ là tài khoản Facebook, tên nhân vật game của em, mà còn chứa cả các tài khoản giữ tiền thật mang tên em (như tài khoản ngân hàng). Do đó, tài khoản ngân hàng chắc chắn là một phần cực kỳ quan trọng trong \"hồ sơ\" cá nhân trên mạng của em rồi!"
      },
      {
        "id": 11,
        "question": "Bạn đang cộng tác trực tuyến với các bạn cùng lớp để phê bình bài thuyết trình PowerPoint về một chủ đề. Điều nào sau đây thể hiện phép xã giao kỹ thuật số tốt?",
        "type": "single",
        "options": [
          "Giễu cợt học sinh về lỗi",
          "Đề nghị tác giả thay đổi màu sắc cho mục yêu thích của bạn",
          "Cung cấp nhận xét về mọi trang trình bày",
          "Sửa lỗi bằng lời giải thích và giọng điệu tích cực"
        ],
        "correctAnswers": [
          "Sửa lỗi bằng lời giải thích và giọng điệu tích cực"
        ],
        "explanation": "Khi bạn của em lỡ vẽ sai một bức tranh, một em bé ngoan sẽ không bao giờ chỉ tay cười nhạo bạn (giễu cợt). Thay vào đó, em sẽ nhẹ nhàng chỉ cho bạn chỗ sai và cổ vũ bạn: \"Cậu thử tô màu này xem sẽ đẹp hơn đấy, cậu làm rất tốt rồi!\". Trên mạng cũng vậy, chúng ta luôn cần góp ý một cách vui vẻ và tích cực."
      },
      {
        "id": 12,
        "question": "Bạn đang nộp đơn xin việc trong lĩnh vực nghề nghiệp đã chọn. Nhà tuyển dụng tiềm năng sẽ truy cập hồ sơ công việc trực tuyến của bạn. Bạn cần làm gì để hỗ trợ hồ sơ công việc trực tuyến của mình?",
        "type": "single",
        "options": [
          "Cung cấp thông tin về lịch sử tiền lương và kỳ vọng của bạn.",
          "Hạn chế quyền truy cập vào hồ sơ để duy trì quyền riêng tư.",
          "Cập nhật hồ sơ thường xuyên để giới thiệu các kỹ năng của bạn.",
          "Cung cấp thông tin về các hoạt động cá nhân để minh chứng cho sự cân bằng của mình."
        ],
        "correctAnswers": [
          "Cập nhật hồ sơ thường xuyên để giới thiệu các kỹ năng của bạn."
        ],
        "explanation": "\"Hồ sơ công việc\" giống như một cuốn sổ khoe thành tích Bé Ngoan. Mỗi khi em học được một tài năng mới (như biết bơi, biết đánh đàn), em phải ghi ngay vào cuốn sổ đó (cập nhật hồ sơ). Như vậy, khi người khác nhìn vào, họ sẽ luôn thấy em càng ngày càng giỏi giang và tuyệt vời."
      },
      {
        "id": 13,
        "question": "Bạn đang cân nhắc về nghề nghiệp tương lai trong ngành công nghệ thông tin (CNTT). Vào mùa hè trước năm cuối cùng của bậc trung học, bạn được mời thực tập không lương tại một Công ty Công nghệ địa phương. Tùy chọn nào sau đây là lý do để chấp nhận đợt thực tập này? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Để học cách giám sát các nhân viên CNTT khác.",
          "Để dạy kỹ năng CNTT cho các nhân viên của công ty.",
          "Để học các kỹ năng CNTT mới.",
          "Để áp dụng những kiến thức CNTT của bạn vào môi trường chuyên nghiệp."
        ],
        "correctAnswers": [
          "Để học các kỹ năng CNTT mới.",
          "Để áp dụng những kiến thức CNTT của bạn vào môi trường chuyên nghiệp."
        ],
        "explanation": "\"Thực tập không lương\" giống như em được đi tham gia một trại hè rèn luyện miễn phí vậy. Tuy em không được phát tiền thưởng, nhưng em có cơ hội đem những gì đã học trong sách vở ra thực hành làm đồ thật (áp dụng kiến thức), và lại còn được các cô chú giỏi giang dạy thêm cho những chiêu thức mới lạ mà ở trường không có (học kỹ năng mới)."
      },
      {
        "id": 14,
        "question": "Bạn đã được một công ty phát triển trò chơi máy tính thuê để kiểm tra phần mềm trò chơi tại cơ sở của họ. Công ty có chính sách chống lại việc sử dụng các thiết bị truyền thông không đáng tin cậy. Đối với mỗi phát biểu, hãy chọn Đúng nếu đó là thiết bị truyền thông đáng tin cậy hoặc Sai nếu không phải.",
        "type": "matching",
        "options": [
          {
            "text": "Một ổ USB nhỏ bạn mang theo từ nhà.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Một ổ USB được công ty cung cấp cho bạn để không bao giờ rời khỏi cơ sở.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Máy tính bảng cá nhân của bạn.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Sai"
        },
        "explanation": "Máy tính của công ty giống như một tòa lâu đài chứa rất nhiều bí mật quan trọng. Đồ chơi (USB, máy tính bảng) em mang từ nhà đến có thể dính \"vi khuẩn\" (virus) làm ốm lâu đài. Vì vậy, chúng bị coi là \"không đáng tin\". Em chỉ được phép dùng những đồ vật mà chính tòa lâu đài đó phát cho em thôi (ổ USB của công ty cấp)."
      },
      {
        "id": 15,
        "question": "Một nhóm bạn của bạn đang thảo luận về một diễn viên hài mà họ đã thấy trên TV, người đã tạo ra một ngọn núi lửa bằng cách sử dụng Mentos và Coke. Họ đang tranh luận về việc anh ấy đã làm như thế nào. Bạn và bạn bè của bạn quyết định yêu cầu giáo viên khoa học của bạn cho biết nó đã được thực hiện như thế nào. Sau nhiều lần thuyết phục, giáo viên đồng ý chứng minh điều này đã được thực hiện như thế nào trong giờ ăn trưa của mình. Bạn quay video cuộc thí nghiệm trên điện thoại thông minh của bạn. Bạn muốn chia sẻ video với các bạn cùng lớp của mình theo cách thể hiện phép xã giao kỹ thuật số tốt. Những gì bạn nên làm?",
        "type": "single",
        "options": [
          "Gửi video cho nhóm bạn bè của bạn và hướng dẫn họ không chia sẻ video đó với bất kỳ ai khác",
          "Tải video lên mạng xã hội và chọn cài đặt bảo mật chỉ cho phép bạn bè của bạn xem video đó.",
          "Tải video lên mạng xã hội với quyền xem công khai.",
          "Cho giáo viên khoa học xem video và yêu cầu chia sẻ video đó với lớp của bạn."
        ],
        "correctAnswers": [
          "Cho giáo viên khoa học xem video và yêu cầu chia sẻ video đó với lớp của bạn."
        ],
        "explanation": "Khi em quay phim hoặc chụp ảnh một người khác (ở đây là thầy giáo), em không được tự ý đăng lên mạng hay gửi lung tung. Phép lịch sự là em phải đưa cho thầy xem trước, xin phép thầy, và để chính thầy là người quyết định có chia sẻ video đó cho các bạn xem hay không."
      },
      {
        "id": 16,
        "question": "Hai phát biểu nào là đúng về nguyên tắc sử dụng Email? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Vì người nhận có thể thấy tập tin đính kèm, nên không cần thông báo cho người nhận về tập tin đính kèm.",
          "Chủ đề phải dài ít nhất một câu.",
          "Đoạn văn ngắn hơn tốt hơn đoạn văn dài.",
          "Hầu hết các chữ ký phải có họ và tên."
        ],
        "correctAnswers": [
          "Đoạn văn ngắn hơn tốt hơn đoạn văn dài.",
          "Hầu hết các chữ ký phải có họ và tên."
        ],
        "explanation": "Viết Email giống như viết một tấm thiệp gửi đi xa. Em nên viết các câu ngắn gọn, dễ hiểu để người đọc không bị mỏi mắt (đoạn văn ngắn). Và quan trọng nhất, ở cuối bức thư, em luôn phải viết đầy đủ họ tên của mình (chữ ký) để người nhận biết chính xác ai là người đã gửi thiệp cho họ."
      },
      {
        "id": 17,
        "question": "Bạn đang sử dụng các tài khoản mạng xã hội cho mục đích cá nhân và công việc. Bạn nên đăng tải hai nội dung nào lên tài khoản mạng xã hội dùng vào mục đích công việc của mình? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Hình ảnh gia đình của bạn đang chơi trò chơi",
          "Khiếu nại về đồng nghiệp hiện tại",
          "Ảnh hồ sơ chính thức của bạn",
          "Chứng nhận kỹ thuật mà bạn có"
        ],
        "correctAnswers": [
          "Ảnh hồ sơ chính thức của bạn",
          "Chứng nhận kỹ thuật mà bạn có"
        ],
        "explanation": "Tài khoản \"công việc\" giống như bảng tuyên dương ở trường học. Em chỉ được dán lên đó những bức ảnh thẻ mặc áo sơ mi gọn gàng, nghiêm túc (ảnh hồ sơ chính thức) và các Bằng khen, Giấy khen em đạt được (chứng nhận kỹ thuật). Những bức ảnh mặc đồ ngủ đang chơi game hay than vãn thì chỉ nên để ở tài khoản \"cá nhân\" vui chơi thôi."
      },
      {
        "id": 18,
        "question": "Bạn quay lại cảnh một người bạn đang thực hiện một điệu nhảy ngớ ngẩn trong bữa tiệc. Bạn muốn chia sẻ video này với những người bạn chung. Bạn cần xác định cách thức chia sẻ video theo đúng các chuẩn mực đạo đức trong môi trường số. Bạn nên làm gì?",
        "type": "single",
        "options": [
          "Chỉ gửi video cho những người đã tham dự bữa tiệc và yêu cầu họ không chia sẻ video đó với bất kỳ ai khác.",
          "Chia sẻ video lên mạng xã hội và đặt ở chế độ công khai.",
          "Gửi trực tiếp video cho người bạn nhảy nhót kia và bảo họ chia sẻ video đó với những người khác.",
          "Chia sẻ video lên mạng xã hội, cài đặt bảo mật chỉ cho phép bạn bè của bạn xem video đó."
        ],
        "correctAnswers": [
          "Gửi trực tiếp video cho người bạn nhảy nhót kia và bảo họ chia sẻ video đó với những người khác."
        ],
        "explanation": "Chuyện này giống y hệt câu 15! Điệu nhảy này có thể buồn cười nhưng bạn em có thể sẽ thấy xấu hổ. Em là bạn tốt thì phải đưa cuốn băng cho bạn ấy xem trước. Hãy để chính người bạn đó tự quyết định xem có nên đem đoạn phim đó đi chọc cười mọi người hay không nhé."
      },
      {
        "id": 19,
        "question": "Bạn đang tham gia một diễn đàn trực tuyến để trả lời một người cho rằng đồng phục mới của một đội nên có màu đỏ. Bạn nghĩ rằng chúng nên có màu xanh lam. Phản ứng nào được coi là phản ứng tốt nhất?",
        "type": "single",
        "options": [
          "Tôi nghĩ đồng phục mới nên có màu xanh lam, nhưng tôi hiểu ý của bạn.",
          "Bạn chỉ nên theo dõi đội.",
          "Bạn cần một chuyên gia thời trang.",
          "Màu xanh lam tốt hơn màu đỏ."
        ],
        "correctAnswers": [
          "Tôi nghĩ đồng phục mới nên có màu xanh lam, nhưng tôi hiểu ý của bạn."
        ],
        "explanation": "Khi em thích màu xanh, nhưng bạn lại thích màu đỏ. Em không nên cãi là: \"Màu đỏ xấu xí, màu xanh mới đẹp!\". Một em bé lịch sự sẽ nói: \"Tớ thấy màu xanh đẹp hơn, nhưng tớ biết màu đỏ cũng rất ngầu như siêu nhân vậy\" (hiểu ý của bạn). Như vậy cả hai sẽ vẫn là bạn tốt mà không bị cãi nhau."
      },
      {
        "id": 20,
        "question": "Giáo viên của bạn đã sắp xếp một chuyến đi thực tế kỹ thuật số cho lớp khoa học của bạn để thăm một bể cá. Hướng dẫn viên là một nhà giáo tại thủy cung, người ta sẽ tổ chức một cuộc thảo luận trực tiếp với lớp của bạn qua Zoom, Teams hoặc phần mềm tương tự. Bạn đã được hướng dẫn cách thể hiện các nghi thức kỹ thuật số thích hợp trong chuyến tham quan. Đối với mỗi câu trả lời, hãy chọn Đúng nếu nó tuân thủ nghi thức hoặc Sai nếu không tuân thủ.",
        "type": "matching",
        "options": [
          {
            "text": "Bật webcam của bạn và tập trung vào màn hình để người nói, bạn cùng lớp và giáo viên của bạn có thể thấy rằng bạn đang chú ý.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Sử dụng biểu tượng “Giơ tay” (Raise Hand) khi thích hợp để đặt câu hỏi.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Luôn bật tiếng micro của bạn để hướng dẫn viên có thể nghe thấy phản ứng của bạn với những gì họ đang nói.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Tắt tiếng micro (Mute) của bạn và chỉ bật tiếng khi bạn được gọi để thảo luận.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": [],
        "explanation": "Chưa có giải thích cho câu hỏi này."
      },
      {
        "id": 21,
        "question": "Đối với mỗi phát biểu sau đây, hãy chọn Đúng nếu nó hiển thị mức độ nhạy cảm với sự đa dạng văn hóa hoặc Sai nếu không.",
        "type": "matching",
        "options": [
          {
            "text": "Đặt câu hỏi thay vì đưa ra giả định.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Đăng nhiều câu chuyện về một nền văn hóa khác trên các trang mạng xã hội của bạn.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Chú ý đến những định kiến và thành kiến của chính bạn.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Mua một bộ quần áo thiêng liêng được mặc bởi một nền văn hóa khác và mặc nó để thể hiện rằng bạn muốn trở thành bạn của nhau.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Đúng",
          "3": "Sai"
        },
        "explanation": "\"Sự đa dạng văn hóa\" giống như việc lớp em có nhiều bạn đến từ các vùng miền hay đất nước khác nhau, mỗi bạn sẽ có những phong tục và thói quen riêng.\nĐặt câu hỏi thay vì đưa ra giả định (Đúng): Nếu em không biết bạn mới thích món ăn gì, tốt nhất là em nên lịch sự hỏi bạn ấy, thay vì tự đoán bừa rồi mời nhầm món bạn không thể ăn được.\nĐăng nhiều câu chuyện về nền văn hóa khác (Sai): Nếu em chưa thật sự hiểu rõ về phong tục của nhà bạn, em không nên mang đi kể lung tung cho người khác nghe. Nếu lỡ kể sai, bạn của em sẽ rất buồn đấy.\nChú ý đến định kiến (Đúng): Đôi khi chúng ta hay nghĩ sai lệch rằng \"con trai là phải thích siêu nhân, con gái là phải thích màu hồng\". Khi em tự nhận ra những suy nghĩ đó là không đúng, em sẽ đối xử công bằng và hòa đồng với tất cả mọi người hơn.\nMua quần áo thiêng liêng để mặc (Sai): Những bộ trang phục truyền thống hoặc đồ lễ của người khác là những thứ rất thiêng liêng và quan trọng đối với họ. Việc em lấy những món đồ đó ra mặc như một trò chơi hóa trang là một hành động thiếu tôn trọng."
      },
      {
        "id": 22,
        "question": "Bạn lãnh đạo một nhóm gồm những người thuộc các nền văn hóa, giới tính và độ tuổi khác nhau. Bạn dự định tổ chức một cuộc họp từ xa bằng công cụ hội thảo video để lên ý tưởng cho một dự án mới. Bạn cần tuân thủ chuẩn mực đạo đức trong môi trường số. Bạn nên thực hiện hai hành động nào sau đây? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Đảm bảo sự tập trung và tránh xung đột trong nhóm bằng cách chỉ thảo luận các ý tưởng có trong danh sách riêng của bạn.",
          "Yêu cầu một thành viên nói giọng không chuẩn bản ngữ (có âm giọng nặng) trả lời qua hộp trò chuyện để các thành viên khác trong nhóm có thể hiểu rõ.",
          "Sử dụng các tính năng như Giơ tay (Raise Hand) để tạo cơ hội cho tất cả các thành viên trong nhóm tham gia.",
          "Đề nghị hỗ trợ riêng cho một thành viên trong nhóm không có kinh nghiệm tham dự hội thảo video nhằm giúp họ làm quen với chức năng điều khiển trước cuộc họp."
        ],
        "correctAnswers": [
          "Đề nghị hỗ trợ riêng cho một thành viên trong nhóm không có kinh nghiệm tham dự hội thảo video nhằm giúp họ làm quen với chức năng điều khiển trước cuộc họp.",
          "Sử dụng các tính năng như Giơ tay (Raise Hand) để tạo cơ hội cho tất cả các thành viên trong nhóm tham gia."
        ],
        "explanation": "Khi em làm \"đội trưởng\" của một nhóm học tập trên mạng có cả người lớn tuổi và các bạn nhỏ, em cần phải là một người hướng dẫn tâm lý và công bằng.\nHỗ trợ riêng cho người chưa có kinh nghiệm: Hãy tưởng tượng em rủ bà ngoại chơi trò chơi trên điện thoại lần đầu tiên. Một người đội trưởng ngoan sẽ dành thời gian chỉ cho bà nút nào là nút bấm, nút nào là nút tắt trước khi trò chơi bắt đầu, để bà không bị bỡ ngỡ hay lúng túng.\nSử dụng nút Giơ tay: Khi tất cả mọi người cùng tranh nhau nói một lúc thì cuộc họp sẽ rất ồn ào. Nút \"Giơ tay\" giống hệt như việc em giơ tay xin cô giáo phát biểu trong lớp học. Nó giúp mọi người lần lượt được nói, và đảm bảo những bạn nhút nhát nhất cũng có cơ hội được chia sẻ ý kiến tuyệt vời của mình."
      }
    ]
  },
  {
    "id": "c3-t5",
    "title": "Chủ đề 3 - Bài Test 5",
    "topic": "Chủ đề 3",
    "questions": [
      {
        "id": 1,
        "question": "Bạn đang viết báo cáo về Chiến tranh năm 1812. Bạn tìm kiếm những bài báo về cuộc chiến tranh này trên mạng. Bạn cần lọc kết quả để chỉ hiển thị những bài báo được xuất bản trong năm vừa qua. Bạn có thể chọn nút nào để đạt được mục tiêu nói trên?",
        "type": "single",
        "options": [],
        "correctAnswers": [],
        "explanation": "Để tìm thông tin mới xuất bản trong 1 năm gần đây, em bấm vào nút Công cụ (Tools) trên Google, sau đó chọn khoảng thời gian là Năm qua (Past year) nhé.",
        "images": [
          "IC3.LEVEL2.CHUDE3.TEST5.cau 1.png"
        ]
      },
      {
        "id": 2,
        "question": "Khi sử dụng công cụ tìm kiếm và kết quả được tạo ra từ một tìm kiếm, danh mục nào có thể được sử dụng để lọc các tìm kiếm? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Tech",
          "Locations",
          "Images",
          "Videos",
          "News"
        ],
        "correctAnswers": [
          "Images",
          "Videos",
          "News"
        ],
        "explanation": "Google có các ngăn kéo (danh mục) mặc định giúp em tìm kiếm nhanh hơn như ngăn kéo Hình ảnh (Images), Video hay Tin tức (News). Còn Tech (Công nghệ) hay Locations (Địa điểm) không phải là các mục có sẵn trên thanh công cụ của Google đâu."
      },
      {
        "id": 3,
        "question": "Bạn cần đánh giá xem nội dung của bài viết trực tuyến có chứa thành kiến hay không. Với mỗi khía cạnh của bài viết, hãy chọn Yes nếu bạn cần kiểm tra yếu tố đó để đánh giá tính thành kiến của bài viết hoặc No nếu không cần.",
        "type": "matching",
        "options": [
          {
            "text": "Nguồn tài trợ bài viết",
            "choices": [
              "No",
              "Yes"
            ]
          },
          {
            "text": "Mối liên hệ của tác giả với các tổ chức chính trị",
            "choices": [
              "No",
              "Yes"
            ]
          },
          {
            "text": "Ngày xuất bản bài viết",
            "choices": [
              "No",
              "Yes"
            ]
          },
          {
            "text": "Trình độ giáo dục của tác giả",
            "choices": [
              "No",
              "Yes"
            ]
          }
        ],
        "correctAnswers": {
          "0": "No",
          "1": "Yes",
          "2": "No",
          "3": "Yes"
        },
        "explanation": "Ai trả tiền (nguồn tài trợ) và ai xúi giục (mối liên hệ chính trị) mới là nguyên nhân khiến một bài báo nói tốt hay nói xấu thiên vị cho một người. Ngày tháng và bằng cấp không làm thay đổi sự công bằng."
      },
      {
        "id": 4,
        "question": "Làm thế nào bạn có thể đánh giá mức độ liên quan của một kết quả tìm kiếm hoặc tạo tác kỹ thuật số? Đối với mỗi tuyên bố về đánh giá mức độ liên quan, hãy chọn Đúng nếu nó xác nhận mức độ liên quan hoặc Sai nếu nó không xác nhận mức độ liên quan.",
        "type": "matching",
        "options": [
          {
            "text": "Các tiêu đề, tóm tắt và năm xuất bản phù hợp với nhu cầu thông tin của bạn.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Tất cả các kết quả trả về từ một công cụ tìm kiếm đều có liên quan.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Sử dụng các tùy chọn nâng cao khi tìm kiếm.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Nó không khớp với thông tin bạn cần, nhưng nó có một tiêu đề thực sự thú vị.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Sai",
          "3": "Sai"
        },
        "explanation": "Để biết một bài viết có đúng thứ em cần tìm hay không (mức độ liên quan), em phải xem tiêu đề và tóm tắt của nó có khớp với từ khóa của em không. Các máy tìm kiếm đôi khi cũng trả về kết quả rác, không phải cái nào cũng đúng (Sai). Và tuyệt đối không bấm vào những bài không liên quan nhưng có tiêu đề gây tò mò nhé!"
      },
      {
        "id": 5,
        "question": "Bạn đang tìm kiếm hình ảnh trên Google. Cụ thể, bạn đang tìm kiếm Clipart về một con thỏ mà bạn có thể sử dụng trên một trang web mà không cần liên hệ với họa sĩ để xin phép. Hai bộ lọc nào sau đây sẽ thu hẹp kết quả tìm kiếm của bạn để chỉ hiển thị Clipart có sẵn để sử dụng mà không có sự cho phép của họa sĩ? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Thời gian (Time)",
          "Quyền sử dụng (Usage Rights)",
          "Màu sắc (Color)",
          "Thể loại (Type)"
        ],
        "correctAnswers": [
          "Quyền sử dụng (Usage Rights)",
          "Thể loại (Type)"
        ],
        "explanation": "Để tìm được đúng bức tranh vẽ (Clipart), em dùng bộ lọc Thể loại (Type) để chọn kiểu tranh vẽ. Và để không bị kiện vì tội lấy cắp tranh của người khác, em phải chọn bộ lọc Quyền sử dụng (Usage Rights) để tìm những bức tranh cho phép xài miễn phí."
      },
      {
        "id": 6,
        "question": "Bạn cần nghiên cứu tác động của việc học trực tuyến và đánh giá mức độ phù hợp của kết quả tìm kiếm. Với mỗi câu phát biểu, hãy chọn Yes nếu kết quả tìm kiếm phù hợp với chủ đề của bạn hoặc chọn No nếu không phù hợp.",
        "type": "matching",
        "options": [
          {
            "text": "Bài báo về lợi ích của giáo dục.",
            "choices": [
              "No",
              "Yes"
            ]
          },
          {
            "text": "Bài báo trên tạp chí giáo dục về kinh nghiệm giảng dạy trực tuyến của giáo viên.",
            "choices": [
              "No",
              "Yes"
            ]
          },
          {
            "text": "Biểu đồ so sánh điểm kiểm tra của học sinh trong hệ thống giáo dục trực tuyến và trực tiếp.",
            "choices": [
              "No",
              "Yes"
            ]
          },
          {
            "text": "Trang Web bán tài nguyên giáo dục.",
            "choices": [
              "No",
              "Yes"
            ]
          }
        ],
        "correctAnswers": {
          "0": "No",
          "1": "Yes",
          "2": "Yes",
          "3": "No"
        },
        "explanation": "Chủ đề của em là 'Học trực tuyến'. Vậy nên bài báo kể về kinh nghiệm dạy trực tuyến và bảng điểm so sánh học trực tuyến sẽ rất phù hợp. Bài báo về 'giáo dục' nói chung thì quá rộng, còn trang web bán đồ thì mục đích là để bán hàng chứ không phải để nghiên cứu."
      },
      {
        "id": 7,
        "question": "Người dùng muốn tìm kiếm cụm từ Yankee Candle, nhưng không có cụm từ tìm kiếm trả về các kết quả phù hợp riêng lẻ với các từ Yankee hoặc Candle. Loại dấu câu hoặc ký hiệu nào nên được sử dụng xung quanh cụm từ khi tìm kiếm?",
        "type": "single",
        "options": [
          "Dấu ngoặc vuông",
          "Dấu ngoặc nhọn",
          "Dấu ngoặc đơn",
          "Dấu ngoặc kép"
        ],
        "correctAnswers": [
          "Dấu ngoặc kép"
        ],
        "explanation": "Khi em muốn máy tính tìm chính xác cụm từ đi liền nhau không bị tách rời (như 'Yankee Candle'), em hãy nhốt cụm từ đó vào trong dấu ngoặc kép (\"\") nhé."
      },
      {
        "id": 8,
        "question": "Bạn đang chuẩn bị một bản trình chiếu kỹ thuật số để kiếm tiền cho câu lạc bộ của mình. Bạn tìm kiếm một bài hát trên mạng để phối lại và thêm vào bài thuyết trình của mình. Tùy chọn nào sau đây là giấy phép Creative Commons cho phép bạn phối lại bài hát cho bản trình bày của mình?",
        "type": "single",
        "options": [],
        "correctAnswers": [],
        "explanation": "Khi nhìn thấy các ký hiệu của giấy phép Creative Commons, em cần tránh chọn những bài hát có chữ 'ND' (No Derivatives), vì ký hiệu đó cấm em phối lại (remix) hoặc cắt ghép thay đổi bài hát gốc nhé."
      },
      {
        "id": 9,
        "question": "Người sử dụng lao động giao bạn phụ trách viết bản tin hàng tháng cho công ty. Cô ấy yêu cầu bạn mời tất cả nhân viên đóng góp ý kiến về những gì họ muốn đưa vào bản tin mỗi tháng. Công ty có hơn 200 nhân viên ở bốn vị trí địa lý. Các phương pháp khác nhau có thể sử dụng để thu thập phản hồi từ nhân viên khác là gì?&nbsp;Đối với mỗi phát biểu về việc thu thập câu trả lời, hãy chọn Đúng nếu phù hợp hoặc Sai nếu không phù hợp.",
        "type": "matching",
        "options": [
          {
            "text": "Gửi một cuộc khảo sát qua Email cho tất cả nhân viên của công ty.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Yêu cầu mọi người trên mạng xã hội đăng ý tưởng của họ.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Đăng biểu mẫu trên trang web của công ty và mời tất cả nhân viên hoàn thành biểu mẫu.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Viết blog về công việc mà người sử dụng lao động đã giao cho bạn.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Sai",
          "3": "Đúng"
        },
        "explanation": "Việc nội bộ của công ty thì chỉ được dùng 'đường ống' liên lạc riêng của công ty là Email nội bộ và Trang Web của công ty thôi. Không được đem lên Mạng xã hội hay Blog cá nhân cho người ngoài xem đâu nhé!"
      },
      {
        "id": 10,
        "question": "Trong số các nguồn thông tin trực tuyến, loại trang Web nào có nhiều khả năng xuất bản thông tin đáng tin cậy nhất?",
        "type": "single",
        "options": [
          "Tạp chí học thuật",
          "Trang web tin tức",
          "Blog cá nhân",
          "Trang Wiki"
        ],
        "correctAnswers": [],
        "explanation": "Chưa có giải thích cho câu hỏi này."
      },
      {
        "id": 11,
        "question": "Các tranh chấp về Bản quyền sử dụng hợp lý (Fair Use Copyright) được giải quyết bằng cách xem xét bốn yếu tố về tác phẩm đã bị sao chép bất hợp pháp. Bốn yếu tố nào mà một Thẩm phán sẽ sử dụng để xác định xem Sử dụng hợp lý có bị vi phạm hay không?&nbsp;Đối với mỗi phát biểu, hãy chọn Đúng nếu nó là một nhân tố hoặc Sai nếu không phải là một nhân tố.",
        "type": "matching",
        "options": [
          {
            "text": "Sao chép một tác phẩm mà bạn đã được thừa kế từ cha mẹ.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Ảnh hưởng của việc sử dụng sao chép đối với thị trường tiềm năng của tác phẩm gốc.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Mục đích và đặc điểm của việc sử dụng của bạn.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Số lượng và tính chất của phần được lấy.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Cho dù bạn sao được sử dụng trong lớp học hay bởi học sinh hay giáo viên.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Loại hoặc bản chất tác phẩm đã được sao chép.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Đúng",
          "3": "Đúng",
          "4": "Sai",
          "5": "Đúng"
        },
        "explanation": "Để xem em có được dùng ké tác phẩm của người khác không, luật pháp xem xét 4 điều: Em dùng để làm gì (Mục đích)? Tác phẩm đó là loại gì (Bản chất)? Em lấy một ít hay lấy hết (Số lượng)? Và việc em lấy có làm họ bị ế hàng không (Ảnh hưởng thị trường)?"
      },
      {
        "id": 12,
        "question": "Hai tài nguyên nào là tài nguyên cộng đồng có thể giúp bạn sử dụng một tính năng trong chương trình phần mềm? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Blogs",
          "Diễn đàn (Forums)",
          "Hướng dẫn cài đặt (Installation instructions)",
          "Wikipedia"
        ],
        "correctAnswers": [
          "Diễn đàn (Forums)",
          "Wikipedia"
        ],
        "explanation": "\"Tài nguyên cộng đồng\" là nơi rất nhiều người bình thường cùng nhau đóng góp xây dựng. Diễn đàn (Forums) là nơi mọi người cùng vào hỏi đáp, và Wikipedia là cuốn từ điển do tất cả mọi người cùng nhau viết lên."
      },
      {
        "id": 13,
        "question": "Bạn hãy cho biết ba tài nguyên công cộng (Community Resource) cho phép người dùng tra cứu các tài nguyên trực tuyến?",
        "type": "multiple",
        "options": [
          "Trường học",
          "Thư viện",
          "Bệnh viện",
          "Tòa án",
          "Các phòng ban Giao Thông Vận Tải"
        ],
        "correctAnswers": [
          "Trường học",
          "Thư viện",
          "Tòa án"
        ],
        "explanation": "Tài nguyên công cộng là những nơi lưu trữ thông tin cho người dân tra cứu. Thư viện có sách, Trường học có tài liệu học tập, và Tòa án có các hồ sơ pháp luật. Còn Bệnh viện và Sở giao thông chủ yếu làm nhiệm vụ chữa bệnh và điều tiết xe cộ chứ không phải là kho tra cứu thông tin chung."
      },
      {
        "id": 14,
        "question": "Khi điền vào biểu mẫu, điều nào sau đây là đúng? Đối với mỗi phát biểu về việc điền vào biểu mẫu, hãy chọn Đúng nếu phát biểu là đúng hoặc Sai nếu sai",
        "type": "matching",
        "options": [
          {
            "text": "Nếu bạn giữ phím Ctrl, bạn có thể chọn nhiều mục từ danh sách thả xuống.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Khi được chọn nhiều tùy chọn (Option/Radio) trong bộ chọn, nếu bạn giữ phím Ctrl, bạn có thể chọn nhiều hơn một.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Khi được chọn nhiều hộp kiểm (check box) trong bộ chọn, bạn chỉ có thể chọn một.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Sau khi điền vào biểu mẫu, câu trả lời của bạn sẽ không được ghi lại cho đến khi bạn nhấp vào nút gửi.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Sai",
          "3": "Đúng"
        },
        "explanation": "Nút chọn tròn tròn (Radio) giống như việc em chỉ được chọn 1 bộ quần áo để mặc ra đường, không thể chọn 2. Nút vuông vuông (Checkbox) thì giống như chọn kẹo, em có thể tích vào nhiều ô cùng lúc. Và nhớ là, mọi thứ em chọn chỉ được máy tính lưu lại khi em dũng cảm bấm nút 'Gửi' (Submit) thôi nhé!"
      },
      {
        "id": 15,
        "question": "Giáo viên của bạn đã giao cho bạn một nhiệm vụ để xác thực quan điểm của kết quả tìm kiếm và tạo tác kỹ thuật số. Đối với mỗi phát biểu về quan điểm xác thực, hãy chọn Đúng nếu tuyên bố đúng hoặc Sai nếu tuyên bố sai",
        "type": "matching",
        "options": [
          {
            "text": "Một khuynh hướng cánh tả ủng hộ bình đẳng xã hội, chủ nghĩa tự do và các ý tưởng cách mạng.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Tất cả các câu chuyện đăng trên Internet đều có quan điểm trung lập.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Những câu chuyện được đăng tải bởi một mạng lưới truyền thông lớn luôn thể hiện cả hai mặt và một góc nhìn bình đẳng.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Thành kiến của cánh hữu ủng hộ các doanh nghiệp tự do, quyền sở hữu tư nhân và các ý tưởng bảo thủ về mặt xã hội.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Sai",
          "3": "Đúng"
        },
        "explanation": "Trên mạng, không phải ai cũng ở giữa (trung lập). Một số nhóm thích sự thay đổi mạnh mẽ (cánh tả), nhóm khác lại thích giữ gìn những giá trị cũ và làm kinh tế (cánh hữu). Đừng tin rằng các trang tin tức lớn luôn luôn công bằng, vì bài báo nào cũng do con người viết ra và mang suy nghĩ riêng của họ."
      },
      {
        "id": 16,
        "question": "Bạn cần đánh giá xem nội dung của bài biết trực tuyến có chứa thành kiến hay không. Với mỗi khía cạnh của bài viết, hãy chọn Yes nếu bạn cần kiểm tra yếu tố đó để đánh giá tính thành kiến của bài viết hoặc No nếu không cần.",
        "type": "matching",
        "options": [
          {
            "text": "Ngày xuất bản bài viết",
            "choices": [
              "No",
              "Yes"
            ]
          },
          {
            "text": "Nguồn tài trợ bài viết",
            "choices": [
              "No",
              "Yes"
            ]
          },
          {
            "text": "Trình độ giáo dục của tác giả",
            "choices": [
              "No",
              "Yes"
            ]
          },
          {
            "text": "Mối liên hệ của tác giả với các tổ chức chính trị",
            "choices": [
              "No",
              "Yes"
            ]
          }
        ],
        "correctAnswers": {
          "0": "No",
          "1": "Yes",
          "2": "No",
          "3": "Yes"
        },
        "explanation": "Ai trả tiền (nguồn tài trợ) và ai xúi giục (mối liên hệ chính trị) mới là nguyên nhân khiến một bài báo nói tốt hay nói xấu thiên vị cho một người. Ngày tháng và bằng cấp không làm thay đổi sự công bằng."
      },
      {
        "id": 17,
        "question": "Ghép từng định nghĩa chuỗi tìm kiếm Boolean với chuỗi tìm kiếm Boolean tương ứng. Để trả lời, hãy chọn chuỗi tìm kiếm từ danh sách bên phải sao cho phù hợp với từng định nghĩa bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Trả kết quả cho một trong hai từ nếu có từ còn lại",
            "choices": [
              "(cá OR rùa) AND thái bình dương",
              "sư tử OR hổ",
              "trâu NOT bò rừng"
            ]
          },
          {
            "text": "Trả kết quả cho một trong hai từ",
            "choices": [
              "(cá OR rùa) AND thái bình dương",
              "sư tử OR hổ",
              "trâu NOT bò rừng"
            ]
          },
          {
            "text": "Trả kết quả không bao gồm một từ",
            "choices": [
              "(cá OR rùa) AND thái bình dương",
              "sư tử OR hổ",
              "trâu NOT bò rừng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Trademark",
          "1": "Copyright",
          "2": "Patent"
        },
        "explanation": "\"Trademark\" (Nhãn hiệu) là logo để buôn bán hàng hóa. \"Copyright\" (Bản quyền) là quyền tác giả dành cho một bài hát hay bức tranh (tác phẩm gốc). Còn \"Patent\" (Bằng sáng chế) là đặc quyền dành cho những cỗ máy hay robot mới được phát minh (sáng chế)."
      },
      {
        "id": 18,
        "question": "Một cô gái xây dựng trang Web đầu tiên. Cô gái phải suy nghĩ về thiết kế và chức năng. Vì vậy, cô ấy đang tìm kiếm phản hồi để cung cấp thông tin và cải thiện việc học của mình. Hai ví dụ nào về cách người dùng có thể tìm kiếm phản hồi hiệu quả để cung cấp thông tin và cải thiện việc học của họ? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Đọc một cuốn sách hay về thiết kế trang web.",
          "Nhờ người có chuyên môn xem xét trang web và đưa ra phản hồi.",
          "Chạy quảng cáo trên trang web và theo dõi số lượng nhấp chuột được thu thập.",
          "Gửi một cuộc khảo sát mời người dùng đưa ra phản hồi về trang web."
        ],
        "correctAnswers": [
          "Nhờ người có chuyên môn xem xét trang web và đưa ra phản hồi.",
          "Gửi một cuộc khảo sát mời người dùng đưa ra phản hồi về trang web."
        ],
        "explanation": "\"Phản hồi\" là lời nhận xét của người khác dành cho mình. Em có thể gửi bảng câu hỏi (khảo sát) cho bạn bè đánh giá, hoặc tuyệt vời hơn là mời một chuyên gia giỏi vào xem và chỉ lỗi sai cho em."
      },
      {
        "id": 19,
        "question": "Bạn đang tạo một cuộc khảo sát để thu thập phản hồi từ bạn bè về một Blog mới mà bạn muốn xuất bản về trượt ván. Ba câu hỏi nào là thích hợp để hỏi trong một cuộc khảo sát để giúp bạn tạo một Blog mới? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Công viên trượt tuyết yêu thích",
          "Họ sẽ trả bao nhiêu cho một ván trượt",
          "Phim lướt sóng hay nhất",
          "Thủ thuật họ muốn học",
          "Đề xuất tiêu đề",
          "Thương hiệu yêu thích của ván trượt"
        ],
        "correctAnswers": [
          "Công viên trượt tuyết yêu thích",
          "Thủ thuật họ muốn học",
          "Đề xuất tiêu đề"
        ],
        "explanation": "Để viết một Blog thật hấp dẫn, em cần hỏi bạn bè xem họ thích đọc gì: Họ muốn học chiêu thức (thủ thuật) gì mới? Họ hay chơi ở sân trượt nào? Và nhờ các bạn ấy nghĩ giùm một cái tên (tiêu đề) thật ngầu cho trang Blog của em."
      },
      {
        "id": 20,
        "question": "Ban đang tìm hiểu về quyền và nghĩa vụ của việc chia sẻ tài sản trí tuệ. Cụ thể, ban đang làm việc để hiểu ý nghĩa của \"vi phạm\" và \"chiếm đoạt\". Khớp từng loại sở hữu trí tuệ với mô tả vi phạm của nó.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Chia sẻ bí mật thương mại mà không có sự cho phép bằng văn bản",
            "choices": [
              "Vi phạm bản quyền (Piracy)",
              "Vi phạm Bằng sáng chế (Patent Infringement)",
              "Biển thủ (Misappropriation)",
              "Vi phạm nhãn hiệu (Trademark Infringement)"
            ]
          },
          {
            "text": "Sử dụng hoặc bán một sáng chế mà không được phép của chủ sở hữu quyền sở hữu trí tuệ",
            "choices": [
              "Vi phạm bản quyền (Piracy)",
              "Vi phạm Bằng sáng chế (Patent Infringement)",
              "Biển thủ (Misappropriation)",
              "Vi phạm nhãn hiệu (Trademark Infringement)"
            ]
          },
          {
            "text": "Sử dụng biểu trưng hoặc tên tương tự với biểu trưng đã được một bên khác sử dụng",
            "choices": [
              "Vi phạm bản quyền (Piracy)",
              "Vi phạm Bằng sáng chế (Patent Infringement)",
              "Biển thủ (Misappropriation)",
              "Vi phạm nhãn hiệu (Trademark Infringement)"
            ]
          },
          {
            "text": "Sao chép, phân phối, trưng bày hoặc biểu diễn một tác phẩm hoặc tạo ra các tác phẩm phái sinh mà không được phép của chủ bản quyền",
            "choices": [
              "Vi phạm bản quyền (Piracy)",
              "Vi phạm Bằng sáng chế (Patent Infringement)",
              "Biển thủ (Misappropriation)",
              "Vi phạm nhãn hiệu (Trademark Infringement)"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Biển thủ (Misappropriation)",
          "1": "Vi phạm Bằng sáng chế (Patent Infringement)",
          "2": "Vi phạm nhãn hiệu (Trademark Infringement)",
          "3": "Vi phạm bản quyền (Piracy)"
        },
        "explanation": "Nhãn hiệu (Trademark) là hình ảnh Logo đại diện. Bằng sáng chế (Patent) là dành cho máy móc mới phát minh. Bản quyền (Copyright) bảo vệ các bức tranh, bài hát. Còn ăn cắp bí mật làm ăn của công ty gọi là Biển thủ."
      },
      {
        "id": 21,
        "question": "Bạn cần xác định xem một bài báo trình bày thông tin thực tế hay thành kiến. Đâu là hai dấu hiệu cho thấy bài báo trình bày quan điểm thành kiến? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Bài báo được đăng trên một tờ báo nhỏ, không phải là một tạp chí học thuật nổi tiếng.",
          "Tác giả nói rằng các tác gia của một bài báo đối lập có tư tưởng cực đoạn, do đó không thể hiểu chủ đề.",
          "Tác giả đưa vào các biện luận để phản bác quan điểm đối lập.",
          "Tác giả hỗ trợ những ý tưởng trong bài viết bằng các trình bày nhưng câu chuyện thú vị thay vì những con số thống kê."
        ],
        "correctAnswers": [
          "Tác giả nói rằng các tác gia của một bài báo đối lập có tư tưởng cực đoạn, do đó không thể hiểu chủ đề.",
          "Tác giả hỗ trợ những ý tưởng trong bài viết bằng các trình bày nhưng câu chuyện thú vị thay vì những con số thống kê."
        ],
        "explanation": "Người viết công bằng sẽ dùng những con số tính toán rõ ràng và tôn trọng đối thủ. Nếu người viết cứ đi chửi bới người khác là 'cực đoan', hoặc chỉ toàn kể chuyện cảm động mà không có số liệu chứng minh, thì người đó đang rất thiên vị và cố tình dẫn dắt cảm xúc của em đấy."
      },
      {
        "id": 22,
        "question": "Bạn cần tìm người chải lông cho chú chó của mình. Tài nguyên trực tuyến nào sẽ là lựa chọn tốt nhất để giúp bạn tìm một dịch vụ cộng đồng, chẳng hạn như người cắt tỉa lông chó?",
        "type": "single",
        "options": [
          "Google",
          "Instagram",
          "Twitter",
          "Facebook"
        ],
        "correctAnswers": [
          "Facebook"
        ],
        "explanation": "Các dịch vụ phục vụ đời sống xung quanh xóm làng (như cắt lông chó, sửa ống nước) thường hay lập các nhóm trên Facebook để quảng cáo. Còn Google thì rộng quá, Instagram thì chuyên đăng ảnh đẹp, Twitter thì chuyên đọc tin tức ngắn."
      },
      {
        "id": 23,
        "question": "Bạn đang chuẩn bị viết bài nghiên cứu. Bạn tìm thấy một nghiên cứu khoa học liên quan tới chủ đề của mình. Bạn cần phải xác định xem liệu nghiên cứu đó có đáng tin hay không. Với mỗi câu phát biểu, hãy chọn Có nếu bạn phải xem xét yếu tố đó để đánh giá độ tin cậy của nghiên cứu hoặc Không nếu bạn không cần.",
        "type": "matching",
        "options": [
          {
            "text": "Đơn vị công bố kết quả nghiên cứu.",
            "choices": [
              "Có",
              "Không"
            ]
          },
          {
            "text": "Tổ chức tài trợ cho nghiên cứu.",
            "choices": [
              "Có",
              "Không"
            ]
          },
          {
            "text": "Mức độ phổ biến của nghiên cứu.",
            "choices": [
              "Có",
              "Không"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Sai",
          "3": "Sai"
        },
        "explanation": "Nhà báo viết về Khoa học thì phải là người có bằng cấp am hiểu Khoa học (chuyên môn) và phải trích dẫn lấy tin từ sách vở đàng hoàng (truy cập nguồn). Việc được nhiều người chia sẻ (câu view) hay giỏi kiến thức xóm làng (địa phương) không giúp chứng minh kiến thức khoa học đó là đúng."
      },
      {
        "id": 24,
        "question": "Đề thu hẹp kết quả trong tìm kiếm của Google, bạn quyết định sử dụng các cụm từ và ký hiệu cho từ khóa tìm kiếm. Khớp từng từ khóa tìm kiếm với kết quả của nó.Đề trả lời, hãy kéo mục của từ khóa ở cột bên phải sang ý nghĩa cột bên trái tương ứng.",
        "type": "matching",
        "options": [
          {
            "text": "Tìm kiếm từ đồng nghĩa.",
            "choices": [
              "OR as a Boolean value",
              "Tilde Symbol (~)",
              "Range or Double Dots (..)",
              "Double Quotes (“”)"
            ]
          },
          {
            "text": "Đại diện cho toán tử phạm vi để tìm tất cả các kết quả có liên quan trong phạm vi được chỉ định.",
            "choices": [
              "OR as a Boolean value",
              "Tilde Symbol (~)",
              "Range or Double Dots (..)",
              "Double Quotes (“”)"
            ]
          },
          {
            "text": "Sử dụng toán tử này trong tìm kiếm trên Google giữa hai từ khóa sẽ trả về một hoặc cả hai từ khóa trong kết quả.",
            "choices": [
              "OR as a Boolean value",
              "Tilde Symbol (~)",
              "Range or Double Dots (..)",
              "Double Quotes (“”)"
            ]
          },
          {
            "text": "Buộc Google tìm kiếm các từ hoặc cụm từ chính xác được đề cập trong dấu ngoặc kép.",
            "choices": [
              "OR as a Boolean value",
              "Tilde Symbol (~)",
              "Range or Double Dots (..)",
              "Double Quotes (“”)"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Trademark",
          "1": "Copyright",
          "2": "Patent"
        },
        "explanation": "\"Trademark\" (Nhãn hiệu) là logo để buôn bán hàng hóa. \"Copyright\" (Bản quyền) là quyền tác giả dành cho một bài hát hay bức tranh (tác phẩm gốc). Còn \"Patent\" (Bằng sáng chế) là đặc quyền dành cho những cỗ máy hay robot mới được phát minh (sáng chế)."
      },
      {
        "id": 25,
        "question": "Bạn đang tiến hành nghiên cứu bằng cách sử dụng công cụ tìm kiếm. Đối với mỗi phát biểu về việc sử dụng \"từ khóa\" hay chọn Đúng nếu nó hiển thị kết quả hợp lý hoặc Sai nếu không hiển thị.",
        "type": "matching",
        "options": [
          {
            "text": "Ngựa OR bò OR lợn OR cừu: Các cụm từ tìm kiếm chính này sẽ trả về kết quả chứa cả ngựa, bò, lợn hoặc cừu.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "\"richest people in America\": Các cụm từ tìm kiếm quan trọng này sẽ chỉ trả về kết quả chứa cụm từ chính xác đó.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "mustang, camero, -convertible: Các cụm từ tìm kiếm chính này sẽ trả về tất cả mustang và camero không phải là loại mui trần (convertible).",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Sai"
        },
        "explanation": "Dùng chữ OR để tìm 1 trong nhiều con vật (Đúng). Dùng ngoặc kép để giữ nguyên câu (Đúng). Nhưng khi tìm kiếm Google, em không nên viết dấu phẩy ngăn cách các từ khóa như 'mustang, camaro', mà chỉ cần khoảng trắng là đủ rồi (Sai)."
      },
      {
        "id": 26,
        "question": "Công ty của bạn muốn cải tiến thiết kế của chiếc xe chạy bằng điện mà công ty sản xuất. Bạn cần khảo sát những khách hàng lẻ đã mua xe và cung cấp phản hồi hữu ích để giúp công ty đạt được mục tiêu nói trên. Với mỗi câu hỏi, hãy chọn Có nếu bạn hỏi nay mang đến phản hồi hữu ích hoặc Không nếu không.",
        "type": "matching",
        "options": [
          {
            "text": "Bạn có thích phương tiện này không?",
            "choices": [
              "Không",
              "Có"
            ]
          },
          {
            "text": "Bạn có muốn giới thiệu phương tiện đi lại này cho một người bạn không?",
            "choices": [
              "Không",
              "Có"
            ]
          },
          {
            "text": "Điều gì có thể cải thiện phương tiện này?",
            "choices": [
              "Không",
              "Có"
            ]
          },
          {
            "text": "Các tính năng quan trọng nhất của xe là gì?",
            "choices": [
              "Không",
              "Có"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Không",
          "1": "Không",
          "2": "Có",
          "3": "Có"
        },
        "explanation": "Để 'cải tiến' chiếc xe, công ty cần hỏi những câu bắt khách hàng phải viết ra ý kiến chi tiết (như: cần cải thiện điểm nào, tính năng nào là quan trọng). Nếu chỉ hỏi 'Bạn có thích không?' thì khách hàng chỉ trả lời 'Có' hoặc 'Không', công ty sẽ chẳng biết phải sửa ở chỗ nào cả."
      },
      {
        "id": 27,
        "question": "Hai lựa chọn nào sau đây giải thích hệ thống lưu trữ dữ liệu trung tâm? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Cơ sở dữ liệu theo dõi hàng tồn kho, đơn đặt hàng của khách hàng và giao hàng.",
          "Thiết bị lưu trữ được đặt bên trong máy tính.",
          "Hệ thống quản lý tài liệu và thư viện, chẳng hạn như SharePoint.",
          "Chia sẻ ổ cứng trên máy tính của bạn với các nhân viên khác."
        ],
        "correctAnswers": [
          "Cơ sở dữ liệu theo dõi hàng tồn kho, đơn đặt hàng của khách hàng và giao hàng.",
          "Hệ thống quản lý tài liệu và thư viện, chẳng hạn như SharePoint."
        ],
        "explanation": "\"Lưu trữ trung tâm\" là một kho chứa khổng lồ dùng chung cho rất nhiều người, ví dụ như hệ thống điểm số của nhà trường hay SharePoint của công ty. Còn ổ cứng hay chia sẻ máy tính cá nhân thì quá nhỏ bé và chỉ dành cho cá nhân thôi."
      },
      {
        "id": 28,
        "question": "Bạn đang tìm kiếm các dữ kiện để hỗ trợ một bài thuyết trình mà bạn đang xây dựng cho lớp khoa học của mình. Bạn tìm thấy một nghiên cứu khoa học liên quan đến chủ đề của bạn. Làm thế nào để bạn biết liệu nghiên cứu này có đáng tin cậy hay không?Đối với mỗi phát biểu, hãy chọn Đúng nếu bạn thấy tiêu chí là nên cân nhắc hoặc Sai nếu không.",
        "type": "matching",
        "options": [
          {
            "text": "Chuyên môn và uy tín của nhà báo",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bạn có thể tìm và truy cập các nguồn",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Có bao nhiêu người đã chia sẻ nghiên cứu trên mạng xã hội",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Nhà báo sử dụng kiến thức địa phương",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Sai",
          "3": "Sai"
        },
        "explanation": "Nhà báo viết về Khoa học thì phải là người có bằng cấp am hiểu Khoa học (chuyên môn) và phải trích dẫn lấy tin từ sách vở đàng hoàng (truy cập nguồn). Việc được nhiều người chia sẻ (câu view) hay giỏi kiến thức xóm làng (địa phương) không giúp chứng minh kiến thức khoa học đó là đúng."
      },
      {
        "id": 29,
        "question": "Trong khi nghiên cứu một chủ đề bạn không biết gì, kết quả tìm kiếm của bạn mang lại một số bài báo thuyết phục. Làm thế nào để bạn biết liệu bất kỳ bài báo nào trong số này là thiên vị? Đối với mỗi phát biểu về việc đánh giá sự thiên vị của kết quả tìm kiếm, chọn Đúng nếu nó là không thiên vị hoặc Sai nếu nó thiên vị.",
        "type": "matching",
        "options": [
          {
            "text": "Kiểm tra các bài viết trên mediasfactcheck.com hoặc newsfactsnetwork.com.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bài báo đã được đăng trên một tạp chí uy tín, được đánh giá chuyên nghiệp.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bài báo đã được xuất bản bởi một trong những nguồn truyền thông được liệt kê trên Biểu đồ thiên vị truyền thông (Media Bias Chart).",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Tác giả của bài báo đưa ra những lập luận ngang nhau của cả hai quan điểm.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Kiểm tra tốc độ thích ứng của bài viết và số lượt thích trên mạng xã hội.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Đúng",
          "3": "Đúng",
          "4": "Sai"
        },
        "explanation": "Các bài báo trung lập, không thiên vị thường được đăng trên tạp chí uy tín hoặc được chấm điểm công bằng trên các trang kiểm tra sự thật (fact-check). Tác giả cũng sẽ nói đều cả mặt tốt lẫn mặt xấu của vấn đề. Lượt Like (thích) nhiều trên mạng không chứng minh được bài báo đó là công bằng hay đúng đắn."
      },
      {
        "id": 30,
        "question": "Sắp xếp các thuật ngữ bên phải phù hợp theo định nghĩa tương ứng bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Độc quyền sử dụng một tác phẩm cụ thể có liên quan đến hàng hóa hoặc dịch vụ trong thương mại",
            "choices": [
              "Patent",
              "Trademark",
              "Copyright"
            ]
          },
          {
            "text": "Độc quyền đối với các tác phẩm gốc",
            "choices": [
              "Patent",
              "Trademark",
              "Copyright"
            ]
          },
          {
            "text": "Độc quyền tạo, sử dụng hoặc bán một sáng chế cụ thể",
            "choices": [
              "Patent",
              "Trademark",
              "Copyright"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Trademark",
          "1": "Copyright",
          "2": "Patent"
        },
        "explanation": "\"Trademark\" (Nhãn hiệu) là logo để buôn bán hàng hóa. \"Copyright\" (Bản quyền) là quyền tác giả dành cho một bài hát hay bức tranh (tác phẩm gốc). Còn \"Patent\" (Bằng sáng chế) là đặc quyền dành cho những cỗ máy hay robot mới được phát minh (sáng chế)."
      },
      {
        "id": 31,
        "question": "Bạn hãy cho biết, phát biểu sau đây là đúng hay sai: “Nhiều tài nguyên công cộng (Community Resource) có thể được truy cập trực tuyến.”",
        "type": "single",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswers": [
          "Đúng"
        ],
        "explanation": "Rất đúng! Ngày nay em không cần phải đạp xe lóc cóc ra thư viện hay tòa án nữa. Các nơi đó đều đã đưa sách báo và hồ sơ lên trang web để em ngồi nhà cũng có thể vào xem (truy cập trực tuyến) được rồi."
      },
      {
        "id": 32,
        "question": "Người sử dụng lao động đã giao bạn phụ trách viết bản tin hàng tháng cho công ty của bạn. Cô ấy yêu cầu bạn mời tất cả nhân viên đóng góp ý kiến về những gì họ muốn đưa vào bản tin mỗi tháng. Công ty của bạn có hơn 200 nhân viên ở bốn vị trí địa lý. Các phương pháp khác nhau mà bạn có thể sử dụng để thu thập phản hồi từ các nhân viên khác là gì? Đối với mỗi phát biểu về việc thu thập câu trả lời, hãy chọn Đúng nếu phù hợp hoặc Sai nếu không phù hợp.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Yêu cầu mọi người trên mạng xã hội đăng ý tưởng của họ.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Gửi một cuộc khảo sát qua Email cho tất cả nhân viên của công ty.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Viết blog về công việc mà người sử dụng lao động đã giao cho bạn.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Đăng biểu mẫu trên trang web của công ty và mời tất cả nhân viên hoàn thành biểu mẫu.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Sai",
          "3": "Đúng"
        },
        "explanation": "Việc nội bộ của công ty thì chỉ được dùng 'đường ống' liên lạc riêng của công ty là Email nội bộ và Trang Web của công ty thôi. Không được đem lên Mạng xã hội hay Blog cá nhân cho người ngoài xem đâu nhé!"
      }
    ]
  },
  {
    "id": "c4-t6",
    "title": "Chủ đề 4 - Bài Test 6",
    "topic": "Chủ đề 4",
    "questions": [
      {
        "id": 1,
        "question": "Bạn hãy cho biết, tính năng nào được sử dụng để tự động hoá các quy trình trong Microsoft Word?",
        "type": "single",
        "options": [
          "Script",
          "Macro",
          "Module",
          "Playbook"
        ],
        "correctAnswers": [
          "Macro"
        ],
        "explanation": "Trong Microsoft Word hay Excel, 'Macro' giống như một con robot biết học lỏm. Em chỉ cần làm một việc gì đó (ví dụ như tô đỏ các chữ, căn giữa trang), robot sẽ tự động ghi nhớ toàn bộ thao tác đó và làm lại y hệt một cách nhanh chóng ở những trang sau."
      },
      {
        "id": 2,
        "question": "Bạn tạo một tài liệu dài có nhiều phần nội dung. Bạn chèn tiêu đề vào phần đầu của mỗi phần nội dung. Tùy chọn nào sau đây là lý do mà bạn nên định dạng Style? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Để bạn có thể tạo mục lục tự động cho tài liệu.",
          "Để bạn có thể đưa thông tin giống nhau (như số trang) vào mọi trang.",
          "Để áp dụng định dạng nhất quán cho từng cấp của văn bản tiêu đề.",
          "Để kích hoạt các quyền duy nhất cho từng phần."
        ],
        "correctAnswers": [
          "Để bạn có thể tạo mục lục tự động cho tài liệu.",
          "Để áp dụng định dạng nhất quán cho từng cấp của văn bản tiêu đề."
        ],
        "explanation": "'Style' là các mẫu chữ đẹp có sẵn (tiêu đề to, tiêu đề nhỏ). Khi dùng Style, văn bản của em trông sẽ đồng đều, chuyên nghiệp (nhất quán). Và điều tuyệt vời nhất là sau khi viết xong, Word sẽ tự động dò các Style đó để làm thành một cái Mục lục cho em."
      },
      {
        "id": 3,
        "question": "Sindi quay video cho một dự án của trường học. Cô ấy chỉ muốn sử dụng một số phần của video. Cô ấy quyết định chỉnh sửa video. Nối từng kỹ thuật chỉnh sửa video cơ bản với định nghĩa tương ứng.",
        "type": "matching",
        "options": [
          {
            "text": "Nối hai clip",
            "choices": [
              "Cắt xén (Crop)",
              "Ghép (Splice)",
              "Cắt tỉa (Trim)",
              "Phân tách (Split)"
            ]
          },
          {
            "text": "Cắt clip thành hai phần",
            "choices": [
              "Cắt xén (Crop)",
              "Ghép (Splice)",
              "Cắt tỉa (Trim)",
              "Phân tách (Split)"
            ]
          },
          {
            "text": "Xóa phần đầu hoặc phần cuối",
            "choices": [
              "Cắt xén (Crop)",
              "Ghép (Splice)",
              "Cắt tỉa (Trim)",
              "Phân tách (Split)"
            ]
          },
          {
            "text": "Ẩn các phần của khung hình",
            "choices": [
              "Cắt xén (Crop)",
              "Ghép (Splice)",
              "Cắt tỉa (Trim)",
              "Phân tách (Split)"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Ghép (Splice)",
          "1": "Phân tách (Split)",
          "2": "Cắt tỉa (Trim)",
          "3": "Cắt xén (Crop)"
        },
        "explanation": "Các thao tác với video: 'Ghép' là dán 2 cuộn phim lại với nhau. 'Phân tách' là cầm kéo cắt đôi cuộn phim. 'Cắt tỉa' là gọt bỏ phần đầu hay cuối thừa thãi. 'Cắt xén' (Crop) là dùng khung hình phóng to vào một góc để che đi các đồ vật lộn xộn ở xung quanh."
      },
      {
        "id": 4,
        "question": "Với mỗi phát biểu về Macro trong một trang tính Excel, hãy chọn Đúng hoặc Sai.",
        "type": "matching",
        "options": [
          {
            "text": "Bạn có thể tạo một Macro bằng cách ghi lại một loạt lệnh, nhấn phím và bấm chuột.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Mỗi Macro được lưu trữ thành một tập tin văn bản.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Macro là chuỗi sự kiện có thể được phát lại, giúp thực hiện các tác vụ lặp lại.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Bạn có thể tạo ra Macro bằng cách viết lệnh trong trình soạn thảo lệnh.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Đúng",
          "3": "Đúng"
        },
        "explanation": "Macro được ghi lại như một cuốn băng quay lén hoặc do em tự viết lệnh (Đúng), và nó có thể tua lại bao nhiêu lần cũng được (Đúng). Nhưng nó được cất giấu trực tiếp bên trong tập tin Excel đó chứ không nằm ngoài thành một tập tin văn bản riêng biệt đâu nhé (Sai)."
      },
      {
        "id": 5,
        "question": "Bạn đang viết một bài nghiên cứu về nai ở Bắc âu. Khoảng 30 phút một lần, bạn lưu một phiên bản mới của tài liệu để theo dõi các thay đổi của mình. Tùy chọn nào sau đây thể hiện quy ước đặt tên tập tin tốt?",
        "type": "single",
        "options": [
          "elk.docx elk&nbsp; &nbsp; &nbsp; &nbsp;copy.docx&nbsp; &nbsp; &nbsp; &nbsp;elk draft.docx",
          "myelk.docx&nbsp; &nbsp; &nbsp; &nbsp; newelk.docx&nbsp; &nbsp; &nbsp; &nbsp;elk.docx",
          "elk_original.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_mod.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_changed.docx",
          "elk_draft1.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_draft2.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_FINAL.docx"
        ],
        "correctAnswers": [
          "elk_draft1.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_draft2.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_FINAL.docx",
          "elk_draft1.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_draft2.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_FINAL.docx",
          "elk_draft1.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_draft2.docx&nbsp; &nbsp; &nbsp; &nbsp;elk_FINAL.docx"
        ],
        "explanation": "Quy tắc dán nhãn cho tập tin là phải thật rõ ràng, để không bao giờ bị nhầm đồ cũ với đồ mới. Việc thêm số 'draft 1', 'draft 2' (nháp 1, nháp 2) và 'FINAL' (bản cuối) giống như việc đánh số thứ tự từ bé đến lớn vậy."
      },
      {
        "id": 6,
        "question": "Hai phương pháp nào sau đây được sử dụng để xem xét và cung cấp phản hồi cho đồng nghiệp? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Chú thích (Footnotes)",
          "Trích dẫn (Citations)",
          "Theo dõi thay đổi (Track Changes)",
          "Bình luận (Comments)"
        ],
        "correctAnswers": [
          "Theo dõi thay đổi (Track Changes)",
          "Bình luận (Comments)"
        ],
        "explanation": "Khi chấm bài hoặc góp ý cho bạn, em nên dùng tính năng 'Bình luận' (Comments) giống như dán giấy note màu vàng lên bài của bạn. Tính năng 'Theo dõi thay đổi' (Track Changes) giống như chiếc bút đỏ, sẽ đánh dấu mọi lỗi sai em vừa sửa để bạn có thể xem lại dễ dàng."
      },
      {
        "id": 7,
        "question": "Quản lý của bạn yêu cầu bạn bảo vệ tất cả các tập tin của mình bằng mật khẩu và lưu trữ những tập tin bạn không thể bảo vệ trên ổ đĩa mạng. Bạn phải di chuyển tập tin nào vào ổ đĩa mạng?",
        "type": "single",
        "options": [
          "MyFile.ppt",
          "MyFile.pdf",
          "MyFile.txt",
          "MyFile.docx"
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "Mật khẩu giống như cái ổ khóa bảo vệ tài liệu bí mật của em. Em có thể khóa các bản văn bản PDF của Adobe, khóa sổ kế toán của Excel, và khóa luôn cả các hộp thư mục trong máy tính Windows để không ai đọc trộm được."
      },
      {
        "id": 8,
        "question": "Một người bạn đã yêu cầu bạn cắt bỏ hình ảnh của họ ở bên cạnh một bức ảnh trước khi bạn đăng bức ảnh lên mạng xã hội. Bạn khởi chạy phần mềm chỉnh sửa ảnh của mình và tải ảnh đó vào phần mềm. Tính năng nào sau đây trong phần mềm chỉnh sửa ảnh sẽ cắt bỏ những phần không mong muốn của hình ảnh?",
        "type": "single",
        "options": [
          "Erase",
          "Trim",
          "Crop",
          "Cut"
        ],
        "correctAnswers": [
          "Crop"
        ],
        "explanation": "Cắt xén (Crop) giống như em lấy một chiếc kéo cắt bớt phần rìa ngoài của tấm ảnh, vứt luôn phần ảnh dính người bạn đang làm trò cười ở bên cạnh, và giữ lại phần trung tâm đẹp nhất."
      },
      {
        "id": 9,
        "question": "Kết hợp từng chức năng với các phím của bàn phím. Kéo các mục ở cột bên phải sang cột bên trái tương ứng.",
        "type": "matching",
        "options": [
          {
            "text": "Tạo thụt lề",
            "choices": [
              "Tab",
              "PrtScn",
              "Caps Lock",
              "Shift+2"
            ]
          },
          {
            "text": "Chụp ảnh màn hình",
            "choices": [
              "Tab",
              "PrtScn",
              "Caps Lock",
              "Shift+2"
            ]
          },
          {
            "text": "Chèn ký hiệu @",
            "choices": [
              "Tab",
              "PrtScn",
              "Caps Lock",
              "Shift+2"
            ]
          },
          {
            "text": "Làm cho mỗi chữ cái viết hoa",
            "choices": [
              "Tab",
              "PrtScn",
              "Caps Lock",
              "Shift+2"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Tab",
          "1": "PrtScn",
          "2": "Shift+2",
          "3": "Caps Lock"
        },
        "explanation": "Phím Tab giúp chữ nhảy thụt lề vào một đoạn thật đẹp. PrtScn là viết tắt của 'Print Screen' - chiếc máy ảnh chụp lại màn hình. Giữ Shift rồi bấm phím số 2 sẽ ra hình @. Bật đèn Caps Lock lên thì em gõ chữ nào cũng biến thành chữ IN HOA khổng lồ."
      },
      {
        "id": 10,
        "question": "Bước đầu tiên để tùy chỉnh thông tin cho một đối tượng nhất định là gì?",
        "type": "single",
        "options": [
          "Chuẩn bị phần mở đầu và phần kết luận.",
          "Cá nhân hóa tin nhắn của bạn.",
          "Xác định đối tượng mục tiêu của bạn.",
          "Thiết lập mục tiêu giao tiếp."
        ],
        "correctAnswers": [
          "Xác định đối tượng mục tiêu của bạn."
        ],
        "explanation": "Trước khi bắt tay vào vẽ tranh, em phải biết là bức tranh này vẽ tặng bà nội hay tặng bạn cùng lớp (Xác định đối tượng). Vì tặng bà thì phải vẽ hoa lá tươi sáng, còn tặng bạn thì vẽ siêu nhân mới hợp được!"
      },
      {
        "id": 11,
        "question": "Giấy phép Creative Commons nào cho phép sử dụng tác phẩm gốc nhưng không được sửa đổi mà không có sự cho phép của chủ sở hữu?",
        "type": "single",
        "options": [
          "NonCommercial",
          "NoDerivatives",
          "ShareAlike",
          "Attribution"
        ],
        "correctAnswers": [
          "NoDerivatives"
        ],
        "explanation": "Trong giấy phép, 'No' là Không, 'Derivatives' là Chế biến/Sửa đổi. Vậy nên nếu tác giả gắn mác 'NoDerivatives', em chỉ được phép đem ảnh của họ đi khoe với mọi người, nhưng tuyệt đối không được tự ý vẽ thêm râu hay bôi bẩn lên bức ảnh đó."
      },
      {
        "id": 12,
        "question": "Bạn hãy cho biết cần phải thực hiện điều nào sau đây trước khi một tài liệu có thể đồng tác giả (Coauthor) bởi nhiều người dùng?",
        "type": "single",
        "options": [
          "Nó phải được theo dõi",
          "Nó phải được xem xét",
          "Nó phải được chia sẻ",
          "Nó phải được xuất bản trực tuyến"
        ],
        "correctAnswers": [
          "Nó phải được chia sẻ"
        ],
        "explanation": "\"Đồng tác giả\" là việc 2-3 bạn cùng nhảy vào đánh máy chung trên một tờ giấy. Để các bạn có thể nhảy vào được, việc đầu tiên là em phải mở cửa và \"Chia sẻ\" (Share) tờ giấy đó cho các bạn ấy cái đã."
      },
      {
        "id": 13,
        "question": "Bạn cần thay Hình ảnh 1 thành Hình ảnh 2 bằng cách:\r\n• Xóa hình tròn ở bên trái của ảnh.\r\n• Chuyển ảnh từ có màu thành đơn sắc.\r\nBạn nên sử dụng hai công cụ chỉnh sửa ảnh nào? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Phơi sáng (Exposure)",
          "Lọc (Filter)",
          "Cắt tỉa (Trim)",
          "Cắt xén (Crop)"
        ],
        "correctAnswers": [
          "Lọc (Filter)",
          "Cắt xén (Crop)"
        ],
        "explanation": "Để vứt bỏ phần hình tròn bị thừa ở bên ngoài rìa bức ảnh, em dùng dao 'Cắt xén' (Crop). Để biến ảnh đang đầy màu sắc sặc sỡ thành đen trắng (đơn sắc), em phải phủ lên ảnh một lớp 'Lọc' (Filter).",
        "images": [
          "IC3.LEVEL2.CHUDE4.TEST6.cau 13.png"
        ]
      },
      {
        "id": 14,
        "question": "Mục đích chính của việc lập phiên bản tập tin là gì?",
        "type": "single",
        "options": [
          "Để cho phép người dùng khôi phục các bản sao trước đó của tập tin.",
          "Để xác định xem tập tin là bản nháp hay là bản phát hành tạm thời (chưa phải bản cuối).",
          "Để xác định ngày tập tin được tạo.",
          "Để cho phép nhiều người dùng cùng tác trên cùng nội dung tập tin."
        ],
        "correctAnswers": [
          "Để cho phép người dùng khôi phục các bản sao trước đó của tập tin."
        ],
        "explanation": "Lập phiên bản giống hệt như việc cứ 10 phút lại tự động chụp ảnh cuốn vở lại một lần. Lỡ như một lúc sau em lỡ tay hất đổ cốc nước làm ướt vở, em có thể dễ dàng tua lại cuốn vở ở lúc chưa bị ướt (khôi phục bản sao trước đó)."
      },
      {
        "id": 15,
        "question": "Bạn hãy quan sát hình ảnh bên dưới và cho biết, tùy chọn nào sau đây được sử dụng tính năng Co-authoring trên tập tin hiện tại?",
        "type": "single",
        "options": [
          "Thẻ Review",
          "Thẻ File",
          "Thẻ References",
          "Share"
        ],
        "correctAnswers": [
          "Share"
        ],
        "explanation": "Để nhiều người cùng vào chỉnh sửa (Co-authoring), em hãy tìm nút 'Share' (Chia sẻ) nằm ở tít góc trên cùng bên phải màn hình. Nút đó giống như cái loa gọi các bạn cùng vào làm bài chung đó.",
        "images": [
          "IC3.LEVEL2.CHUDE4.TEST6.cau 15.png"
        ]
      },
      {
        "id": 16,
        "question": "Bạn đang chuẩn bị bố cục cho một bài thuyết trình PowerPoint do giáo viên của bạn chỉ định. Bạn sẽ được chấm điểm về sự thống nhất về mặt trực quan. Bạn nên tuân theo hai nguyên tắc thống nhất về mặt trực quan nào sau đây để tạo cho bài trình chiếu của mình một cái nhìn chuyên nghiệp? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Tuân theo các nguyên tắc thiết kế về sự liên kết và lặp lại.",
          "Nhất quán trên tất cả các yếu tố trình bày, chẳng hạn như phông chữ và màu sắc.",
          "Sử dụng một phông chữ và màu sắc khác nhau ở mỗi bên.",
          "Áp dụng cùng một bố cục trên mọi trang chiếu."
        ],
        "correctAnswers": [
          "Tuân theo các nguyên tắc thiết kế về sự liên kết và lặp lại.",
          "Nhất quán trên tất cả các yếu tố trình bày, chẳng hạn như phông chữ và màu sắc."
        ],
        "explanation": "Để một bài thuyết trình trông thật xịn xò (nhất quán), em nên dùng chung 1 hoặc 2 kiểu chữ (phông chữ) và tông màu từ đầu đến cuối. Tránh việc trang đầu thì chữ đỏ chót, trang sau lại màu xanh lá cây lộn xộn trông rất đau mắt."
      },
      {
        "id": 17,
        "question": "Bạn của bạn nhờ bạn xem lại bài trình bày PowerPoint mà người đó đã tạo cho lớp chuyên Sử của họ. Bạn thấy bố cục bài trình bày lộn xộn và vô tổ chức. Đâu là hai nguyên tắc thông nhất về hình ảnh mà bạn nên khuyên bạn của mình tuân thủ? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Căn giữa văn bản và các phần tử hình ảnh trên mỗi trang chiếu.",
          "Duy trì tính nhất quán trên tất cả các phần tử trình bày.",
          "Áp dụng các nguyên tắc thiết kế về sự lặp lại, liên kết và xa-gần.",
          "Sử dụng nhiều loại phông chữ, màu sắc và hình nền trên mỗi trang chiếu."
        ],
        "correctAnswers": [
          "Duy trì tính nhất quán trên tất cả các phần tử trình bày.",
          "Áp dụng các nguyên tắc thiết kế về sự lặp lại, liên kết và xa-gần."
        ],
        "explanation": "Bố cục lộn xộn là do bạn vứt đồ đạc (chữ, hình ảnh) bừa bãi. Em phải khuyên bạn xếp các hình ảnh liên quan nằm gần nhau (xa-gần), và canh lề các dòng chữ cho thẳng hàng tăm tắp (liên kết) để bài trông gọn gàng, đẹp mắt hơn."
      },
      {
        "id": 18,
        "question": "Ghép nối phím tắt với chức năng của nó. Hãy chọn phím tắt phù hợp với chức năng của nó ở bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Windows Ctrl+X hay MacOS Cmd+X",
            "choices": [
              "Copy",
              "Paste",
              "Cut",
              "Select All Text"
            ]
          },
          {
            "text": "Windows Ctrl+A hay MacOS Cmd+A",
            "choices": [
              "Copy",
              "Paste",
              "Cut",
              "Select All Text"
            ]
          },
          {
            "text": "Windows Ctrl+V hay MacOS Cmd+V",
            "choices": [
              "Copy",
              "Paste",
              "Cut",
              "Select All Text"
            ]
          },
          {
            "text": "Windows Ctrl+C hay MacOS Cmd+C",
            "choices": [
              "Copy",
              "Paste",
              "Cut",
              "Select All Text"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Cut",
          "1": "Select All Text",
          "2": "Paste",
          "3": "Copy"
        },
        "explanation": "Ctrl+C là Copy (sao chép). Ctrl+X hình cây kéo là Cut (cắt). Ctrl+V là Paste (dán hồ). Còn Ctrl+A là All (chọn tất cả mọi thứ có trên màn hình)."
      },
      {
        "id": 19,
        "question": "Nối từng hành động với phím tắt để thực hiện hành động tương ứng trong tài liệu. Hãy ghép các phím tắt bên phải phù hợp với từng hành động bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Cắt nội dung vào bảng tạm",
            "choices": [
              "Ctrl+X (Cmd+X)",
              "Ctrl+V (Cmd+V)",
              "Ctrl+P (Cmd+P)",
              "Ctrl+Z (Cmd+Z)"
            ]
          },
          {
            "text": "Hoàn tác",
            "choices": [
              "Ctrl+X (Cmd+X)",
              "Ctrl+V (Cmd+V)",
              "Ctrl+P (Cmd+P)",
              "Ctrl+Z (Cmd+Z)"
            ]
          },
          {
            "text": "In",
            "choices": [
              "Ctrl+X (Cmd+X)",
              "Ctrl+V (Cmd+V)",
              "Ctrl+P (Cmd+P)",
              "Ctrl+Z (Cmd+Z)"
            ]
          },
          {
            "text": "Dán nội dung của bảng tạm",
            "choices": [
              "Ctrl+X (Cmd+X)",
              "Ctrl+V (Cmd+V)",
              "Ctrl+P (Cmd+P)",
              "Ctrl+Z (Cmd+Z)"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Ctrl+X (Cmd+X)",
          "1": "Ctrl+Z (Cmd+Z)",
          "2": "Ctrl+P (Cmd+P)",
          "3": "Ctrl+V (Cmd+V)"
        },
        "explanation": "Ctrl+X là cái kéo để cắt. Ctrl+P là Print (gửi ra máy in). Ctrl+Z là cỗ máy thời gian (tua ngược lại lúc em chưa làm sai). Còn Ctrl+V là lọ keo hồ để dán chữ ra nhé."
      },
      {
        "id": 20,
        "question": "Bạn đang sử dụng chương trình phần mềm mới để tạo bài trình chiếu. Bạn cần sử dụng một chức năng không quen thuộc. Với mỗi tài nguyên, hãy chọn Có nếu bạn có thể sử dụng nó để tìm kiếm sự hỗ trợ hoặc Không nếu không thể.",
        "type": "matching",
        "options": [
          {
            "text": "Diễn đàn trực tuyến dành riêng cho phần mềm",
            "choices": [
              "Không",
              "Có"
            ]
          },
          {
            "text": "Tính năng Trợ giúp (Help) trong chương trình bày",
            "choices": [
              "Không",
              "Có"
            ]
          },
          {
            "text": "Hướng dẫn cài đặt phần mềm",
            "choices": [
              "Không",
              "Có"
            ]
          },
          {
            "text": "Trang LinkedIn dành cho công ty phần mềm",
            "choices": [
              "Không",
              "Có"
            ]
          }
        ],
        "correctAnswers": [],
        "explanation": "Chưa có giải thích cho câu hỏi này."
      },
      {
        "id": 21,
        "question": "Xác định các tùy chọn bảo vệ tập tin bằng mật khẩu.Đối với mỗi câu lệnh, hãy chọn Đúng nếu nó là một tùy chọn hoặc Sai nếu nó không phải là một tùy chọn.",
        "type": "matching",
        "options": [
          {
            "text": "Trong Adobe, bạn có thể bảo vệ bằng mật khẩu khi mở tài liệu .pdf.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Trong Windows 10, ở các phiên bản mới hơn bạn có thể bảo vệ các tập tin và thư mục riêng lẻ bằng mật khẩu.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Trong Microsoft Excel, bạn có các lựa chọn để bảo vệ bằng mật khẩu chỉ một số phần của sổ làm việc học toàn bộ sổ làm việc.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "Mật khẩu giống như cái ổ khóa bảo vệ tài liệu bí mật của em. Em có thể khóa các bản văn bản PDF của Adobe, khóa sổ kế toán của Excel, và khóa luôn cả các hộp thư mục trong máy tính Windows để không ai đọc trộm được."
      },
      {
        "id": 22,
        "question": "Tùy chọn nào sau đây là đúng về mã hóa? (Chọn hai)",
        "type": "multiple",
        "options": [
          "Tài liệu được mã hóa yêu cầu mật khẩu hoặc khóa kỹ thuật số trước khi có thể mở được.",
          "Nội dung của một tập tin được mã hóa chỉ có thể được đọc bởi người có khóa mã hóa.",
          "Tài liệu được mã hóa là các tập tin được định kèm với chứng chỉ kỹ thuật số.",
          "Tập tin được mã hóa là tập tin không thể truyền qua Internet."
        ],
        "correctAnswers": [
          "Tài liệu được mã hóa yêu cầu mật khẩu hoặc khóa kỹ thuật số trước khi có thể mở được.",
          "Nội dung của một tập tin được mã hóa chỉ có thể được đọc bởi người có khóa mã hóa."
        ],
        "explanation": "Mã hóa giống như viết thư bằng mực tàng hình. Người bình thường nhìn vào chỉ thấy một tờ giấy trắng. Chỉ có người được phát cho chiếc chìa khóa ma thuật (khóa mã hóa) mới có thể giải mã và đọc được những dòng chữ bí mật đó."
      },
      {
        "id": 23,
        "question": "Bạn đang chuẩn bị một bài trình chiếu slide cho lớp Lịch sử Hoa Kỳ của mình. Bạn đã được chỉ định một nhân vật lịch sử để báo cáo với các bạn cùng lớp của mình. Thứ tự các bước được khuyến nghị bạn nên thực hiện để tạo bài trình chiếu slide là gì? Để trả lời, hãy chọn các bước bên phải phù hợp với các mục bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Thêm đồ họa, biểu đồ và hiệu ứng cho các đối tượng (Animations)",
            "choices": [
              "Bước 6",
              "Bước 1",
              "Bước 3",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 7"
            ]
          },
          {
            "text": "Tạo trang Tiêu đề",
            "choices": [
              "Bước 6",
              "Bước 1",
              "Bước 3",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 7"
            ]
          },
          {
            "text": "Tạo một dàn ý có cấu trúc",
            "choices": [
              "Bước 6",
              "Bước 1",
              "Bước 3",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 7"
            ]
          },
          {
            "text": "Áp dụng quá trình chuyển đổi (Transitions)",
            "choices": [
              "Bước 6",
              "Bước 1",
              "Bước 3",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 7"
            ]
          },
          {
            "text": "Áp dụng bố cục trang chiếu (Slide Layouts) cho nội dung",
            "choices": [
              "Bước 6",
              "Bước 1",
              "Bước 3",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 7"
            ]
          },
          {
            "text": "Chọn một thiết kế",
            "choices": [
              "Bước 6",
              "Bước 1",
              "Bước 3",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 7"
            ]
          },
          {
            "text": "Nhập dàn ý vào bản trình chiếu",
            "choices": [
              "Bước 6",
              "Bước 1",
              "Bước 3",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 7"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Bước 6",
          "1": "Bước 5",
          "2": "Bước 1",
          "3": "Bước 7",
          "4": "Bước 4",
          "5": "Bước 3",
          "6": "Bước 2"
        },
        "explanation": "Khi làm báo cáo, đầu tiên em phải gạch đầu dòng ra nháp xem mình sẽ nói những gì (Dàn ý). Tiếp theo em điền chữ vào máy tính. Sau đó mới tô điểm bằng cách chọn hình nền (Thiết kế), phân chia vị trí (Bố cục), thêm các hình vẽ rực rỡ (Đồ họa) và cuối cùng là thêm các hiệu ứng bay nhảy (Chuyển đổi) nhé."
      },
      {
        "id": 24,
        "question": "Bạn viết một bài luận. Một người bạn cùng lớp nhận xét bài luận này và gợi ý sửa chữa như hình. Bạn cần thực hiện các sửa chữa vĩnh viễn trong tài liệu của mình. Bạn nên sử dụng nút nào? Để trả lời, hãy chọn nút lệnh phù hợp.",
        "type": "single",
        "options": [
          "Vị trí 4",
          "Vị trí 3",
          "Vị trí 2",
          "Vị trí 1"
        ],
        "correctAnswers": [
          "Vị trí 3"
        ],
        "explanation": "Khi cô giáo gạch lỗi sai trên vở và sửa chữ mới cho em. Nếu em đồng ý với chữ sửa đó, em hãy bấm vào nút 'Accept' (Chấp nhận - thường có biểu tượng dấu tick màu xanh lá cây) để từ đó trở đi chữ đó sẽ dính chặt vĩnh viễn vào trang giấy của em.",
        "images": [
          "IC3.LEVEL2.CHUDE4.TEST6.cau 24.png"
        ]
      },
      {
        "id": 25,
        "question": "Bạn muốn thực hiện bảo vệ bằng mật khẩu trên tập tin Microsoft Office của mình. Thứ tự các bước bạn nên thực hiện để bảo vệ bằng mật khẩu tập tin Word, Excel hoặc PowerPoint là gì? Hãy chọn các bước bên phải phù hợp với hành động bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Nhập mật khẩu hai lần",
            "choices": [
              "Bước 3",
              "Bước 6",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 1"
            ]
          },
          {
            "text": "Chọn nút Protect",
            "choices": [
              "Bước 3",
              "Bước 6",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 1"
            ]
          },
          {
            "text": "Mở bảng Info",
            "choices": [
              "Bước 3",
              "Bước 6",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 1"
            ]
          },
          {
            "text": "Bấm OK",
            "choices": [
              "Bước 3",
              "Bước 6",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 1"
            ]
          },
          {
            "text": "Chọn Tab File",
            "choices": [
              "Bước 3",
              "Bước 6",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 1"
            ]
          },
          {
            "text": "Chọn Encrypt with Password",
            "choices": [
              "Bước 3",
              "Bước 6",
              "Bước 2",
              "Bước 5",
              "Bước 4",
              "Bước 1"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Bước 5",
          "1": "Bước 3",
          "2": "Bước 2",
          "3": "Bước 6",
          "4": "Bước 1",
          "5": "Bước 4"
        },
        "explanation": "Để khóa tủ đồ, đầu tiên em vào mục Tệp (File), tìm đến bảng Thông tin (Info). Tại đó có nút Bảo vệ (Protect Document). Em bấm vào, chọn 'Khóa bằng mật khẩu' (Encrypt). Sau đó, em nhập cẩn thận mật khẩu của mình 2 lần để không bị gõ nhầm, rồi bấm OK là chiếc tủ sẽ bị khóa chặt!"
      },
      {
        "id": 26,
        "question": "Ghép từng phần tử cửa sổ làm việc với định nghĩa tương ứng. Hãy chọn nội dung bên phải sao cho phù hợp với thuật ngữ bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Chuỗi ô dọc, được gắn nhãn bằng chữ cái",
            "choices": [
              "Thanh công thức (Formula Bar)",
              "Tab trang tính (Sheet Tab)",
              "Cột (Column)",
              "Thanh trạng thái (Status Bar)"
            ]
          },
          {
            "text": "Khu vực xác định và cho phép bạn chuyển đổi giữa các trang tính trong tập tin",
            "choices": [
              "Thanh công thức (Formula Bar)",
              "Tab trang tính (Sheet Tab)",
              "Cột (Column)",
              "Thanh trạng thái (Status Bar)"
            ]
          },
          {
            "text": "Khu vực để bạn nhập dữ liệu và phương trình",
            "choices": [
              "Thanh công thức (Formula Bar)",
              "Tab trang tính (Sheet Tab)",
              "Cột (Column)",
              "Thanh trạng thái (Status Bar)"
            ]
          },
          {
            "text": "Khu vực hiển thị thông tin về trang tính, nội dung trang tính và chương trình",
            "choices": [
              "Thanh công thức (Formula Bar)",
              "Tab trang tính (Sheet Tab)",
              "Cột (Column)",
              "Thanh trạng thái (Status Bar)"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Cột (Column)",
          "1": "Tab trang tính (Sheet Tab)",
          "2": "Thanh công thức (Formula Bar)",
          "3": "Thanh trạng thái (Status Bar)"
        },
        "explanation": "Trong Excel, 'Cột' là những dải dọc thẳng đứng từ trên xuống dưới. Nơi để em viết các phép tính Toán học gọi là 'Thanh công thức'. Những chiếc 'Tab' nhỏ xíu ở dưới cùng giúp em lật trang qua lại giống như lật các trang sách vậy."
      },
      {
        "id": 27,
        "question": "Khi sử dụng phần mềm xử lý văn bản, bạn cần ghi nhớ các phím tắt. Hãy chọn Đúng hoặc Sai với mỗi phát biểu về phím tắt sau đây sau đây:",
        "type": "matching",
        "options": [
          {
            "text": "Windows Ctrl+A hay MacOS Cmd+A = Select All Text",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Windows Ctrl+P hay MacOS Cmd+P = Paste",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Windows Ctrl+X hay MacOS Cmd+X = Cut",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Windows Ctrl+E hay MacOS Cmd+E = End of Document",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Đúng",
          "3": "Sai"
        },
        "explanation": "Ctrl+P dùng để In giấy (Print), còn dán hồ (Paste) phải dùng Ctrl+V. Ctrl+E dùng để Căn giữa dòng chữ, còn muốn bay xuống tận cuối cùng của văn bản thì em phải dùng nút Ctrl kết hợp với phím End nhé."
      },
      {
        "id": 28,
        "question": "Bạn đang chuẩn bị một sổ tính để giữ số liệu thống kê về người chơi cho đội bóng mềm của mình. Đối với mỗi trò chơi, bạn muốn ghi lại số lượt truy cập, số lượt chạy, và các lỗi cho mỗi người chơi. Thứ tự các bước được khuyến nghị mà bạn nên thực hiện để chuẩn bị sổ tính này là gì? Để trả lời, hãy chọn từng bước ở cột bên phải sao cho phù hợp với các nội dung bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Điền tên vào cột Người chơi.",
            "choices": [
              "Bước 3",
              "Bước 4",
              "Bước 1",
              "Bước 2"
            ]
          },
          {
            "text": "Tạo tiêu đề cột cho Người chơi, Lượt truy cập, Lượt chạy và Lỗi.",
            "choices": [
              "Bước 3",
              "Bước 4",
              "Bước 1",
              "Bước 2"
            ]
          },
          {
            "text": "Tạo một trang tính.",
            "choices": [
              "Bước 3",
              "Bước 4",
              "Bước 1",
              "Bước 2"
            ]
          },
          {
            "text": "Sao chép trang tính cho mỗi trò chơi",
            "choices": [
              "Bước 3",
              "Bước 4",
              "Bước 1",
              "Bước 2"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Bước 3",
          "1": "Bước 2",
          "2": "Bước 1",
          "3": "Bước 4"
        },
        "explanation": "Để lập sổ tay ghi điểm, đầu tiên em phải xé một tờ giấy trắng (Tạo trang tính). Kẻ các bảng và viết tên cột (Tiêu đề). Sau đó điền tên các bạn vào (Điền tên). Làm xong tờ hoàn chỉnh đó, em mới đem ra tiệm Photocopy để nhân bản thành nhiều tờ (Sao chép) dùng cho nhiều trận đấu nhé."
      },
      {
        "id": 29,
        "question": "Bạn đã tạo một tài liệu trong phần mềm Microsoft Word và đã quyết định chia sẻ nó với nhóm của bạn để họ có thể chỉnh sửa nó. Bạn muốn theo dõi bất kỳ thay đổi nào họ thực hiện đối với tài liệu. Thứ tự các bước được khuyến nghị mà bạn nên thực hiện để theo dõi các thay đổi trong tài liệu là gì? Để trả lời, hãy chọn các bước bên phải sao cho phù hợp với từng hành động bên trái.",
        "type": "matching",
        "options": [
          {
            "text": "Từ Tab Review, hãy bật Track Changes",
            "choices": [
              "Bước 3",
              "Bước 1",
              "Bước 4",
              "Bước 2"
            ]
          },
          {
            "text": "Chọn cách bạn muốn Đánh dấu (Markup) được hiển thị.",
            "choices": [
              "Bước 3",
              "Bước 1",
              "Bước 4",
              "Bước 2"
            ]
          },
          {
            "text": "Chọn Accept (đồng ý) hay Reject (không đồng ý) với các thay đổi.",
            "choices": [
              "Bước 3",
              "Bước 1",
              "Bước 4",
              "Bước 2"
            ]
          },
          {
            "text": "Lưu tài liệu và chia sẻ nó với nhóm của bạn",
            "choices": [
              "Bước 3",
              "Bước 1",
              "Bước 4",
              "Bước 2"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Bước 1",
          "1": "Bước 2",
          "2": "Bước 4",
          "3": "Bước 3"
        },
        "explanation": "Để theo dõi bạn bè sửa bài của mình, đầu tiên em phải bật nút 'Track Changes' (Ghi lại thay đổi). Chỉnh màu sắc vết bút đỏ cho dễ nhìn (Markup). Sau đó em gửi bài cho bạn bè (Chia sẻ). Sau khi các bạn làm xong trả lại, em mới ngồi xem và chọn nút Chấp nhận (Accept) hoặc Từ chối (Reject) những chỗ bạn vừa sửa."
      },
      {
        "id": 30,
        "question": "Kết hợp từng chức năng với các phím của bàn phím. Kéo các mục ở cột bên phải sang cột bên trái tương ứng.",
        "type": "matching",
        "options": [
          {
            "text": "Xóa ký tự ở bên phải",
            "choices": [
              "Backspace",
              "Shift",
              "Fn+F1",
              "Delete"
            ]
          },
          {
            "text": "Khởi chạy Trợ giúp (Help)",
            "choices": [
              "Backspace",
              "Shift",
              "Fn+F1",
              "Delete"
            ]
          },
          {
            "text": "Chuyển đổi một phím sang ký tự phía trên",
            "choices": [
              "Backspace",
              "Shift",
              "Fn+F1",
              "Delete"
            ]
          },
          {
            "text": "Xóa ký tự bên trái",
            "choices": [
              "Backspace",
              "Shift",
              "Fn+F1",
              "Delete"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Tab",
          "1": "PrtScn",
          "2": "Shift+2",
          "3": "Caps Lock"
        },
        "explanation": "Phím Tab giúp chữ nhảy thụt lề vào một đoạn thật đẹp. PrtScn là viết tắt của 'Print Screen' - chiếc máy ảnh chụp lại màn hình. Giữ Shift rồi bấm phím số 2 sẽ ra hình @. Bật đèn Caps Lock lên thì em gõ chữ nào cũng biến thành chữ IN HOA khổng lồ."
      },
      {
        "id": 31,
        "question": "Các hạn chế chỉnh sửa trong Microsoft Word là gì?",
        "type": "single",
        "options": [
          "Giới hạn các thay đổi đối với một phần cụ thể của tài liệu.",
          "Bảo vệ tài liệu khỏi bị mở mà không có mật khẩu.",
          "Hạn chế các tính năng đang hoạt động trong một ứng dụng thông qua cấp phép.",
          "Khóa việc sử dụng các phím cụ thể trên bàn phím của bạn."
        ],
        "correctAnswers": [
          "Giới hạn các thay đổi đối với một phần cụ thể của tài liệu."
        ],
        "explanation": "Hạn chế chỉnh sửa (Restrict Editing) giống như việc em cho bạn mượn một cuốn vở nhưng dán băng dính che hết phần bài giải của em lại. Bạn ấy chỉ được phép gọt giũa và viết vào phần giấy nháp thôi, không được động chạm sửa đổi gì đến phần bài làm chính của em."
      },
      {
        "id": 32,
        "question": "Trong chỉnh sửa Video, thuật ngữ để loại bỏ phần đầu hoặc phần cuối của video là gì?",
        "type": "single",
        "options": [
          "Crop",
          "Trim",
          "Cut",
          "Clip"
        ],
        "correctAnswers": [
          "Trim"
        ],
        "explanation": "Trong lúc làm phim, thao tác 'Trim' (Cắt tỉa) giống như việc người thợ hớt tóc dùng tông-đơ cắt bỏ những ngọn tóc chỉa ra thừa thãi ở phần đầu hoặc phần đuôi của video để đoạn phim trở nên gọn gàng và hoàn hảo nhất."
      }
    ]
  },
  {
    "id": "c4-t7",
    "title": "Chủ đề 4 - Bài Test 7",
    "topic": "Chủ đề 4",
    "questions": [
      {
        "id": 1,
        "question": "Bạn hãy sắp xếp các bước sử dụng tính năng Help trong Word để nhận trợ giúp về cách sử dụng Styles.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Nhấp chọn Help&nbsp;",
            "choices": [
              "Bước 1&nbsp;",
              "Bước 3&nbsp;",
              "Bước 4&nbsp;",
              "Bước 2&nbsp;"
            ]
          },
          {
            "text": "Nhấp chọn vào thẻ Help&nbsp;",
            "choices": [
              "Bước 1&nbsp;",
              "Bước 3&nbsp;",
              "Bước 4&nbsp;",
              "Bước 2&nbsp;"
            ]
          },
          {
            "text": "Nhấn phím Enter&nbsp;",
            "choices": [
              "Bước 1&nbsp;",
              "Bước 3&nbsp;",
              "Bước 4&nbsp;",
              "Bước 2&nbsp;"
            ]
          },
          {
            "text": "Gõ: styles&nbsp;",
            "choices": [
              "Bước 1&nbsp;",
              "Bước 3&nbsp;",
              "Bước 4&nbsp;",
              "Bước 2&nbsp;"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Bước 2",
          "1": "Bước 1",
          "2": "Bước 4",
          "3": "Bước 3"
        },
        "explanation": "Để nhờ máy tính giúp đỡ, đầu tiên em phải mở thẻ Trợ giúp (thẻ Help) ở phía trên cùng. Sau đó bấm vào biểu tượng dấu chấm hỏi (nút Help), gõ từ khóa mình cần tìm là 'styles' rồi nhấn Enter để máy tính trả lời nhé."
      },
      {
        "id": 2,
        "question": "Chọn tùy chọn chỉnh sửa hình ảnh bên phải phù hợp với mục đích sử dụng bên trái.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Sửa lỗi trên hình ảnh&nbsp;",
            "choices": [
              "Crop&nbsp;",
              "Filter&nbsp;",
              "Spot&nbsp;"
            ]
          },
          {
            "text": "Thay đổi độ mờ trên hình ảnh&nbsp;",
            "choices": [
              "Crop&nbsp;",
              "Filter&nbsp;",
              "Spot&nbsp;"
            ]
          },
          {
            "text": "Giảm kích thước của hình ảnh&nbsp;",
            "choices": [
              "Crop&nbsp;",
              "Filter&nbsp;",
              "Spot&nbsp;"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Spot",
          "1": "Filter",
          "2": "Crop"
        },
        "explanation": "Spot Healing (Chấm sửa) giống như cục tẩy thần kỳ xóa đi mụn hoặc vết xước nhỏ trên ảnh. Filter (Bộ lọc) giúp ảnh mờ ảo hoặc đổi màu nghệ thuật hơn. Còn Crop (Cắt xén) là em lấy kéo cắt bớt viền ngoài để làm bức ảnh nhỏ lại."
      },
      {
        "id": 3,
        "question": "Ghép từng thuật ngữ trong bài trình bày với định nghĩa tương ứng. Để trả lời, hãy chọn thuật ngữ bên phải sao cho phù hợp với nội dung bên trái.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Hiệu ứng được sử dụng để chuyển tiếp trang trình bày&nbsp;",
            "choices": [
              "Mẫu (Template)&nbsp;",
              "Chuyển tiếp (Transitions)&nbsp;",
              "Hoạt hình (Animations)&nbsp;",
              "Slide Master&nbsp;"
            ]
          },
          {
            "text": "Tập tin chứa các kiểu tạo sẵn&nbsp;",
            "choices": [
              "Mẫu (Template)&nbsp;",
              "Chuyển tiếp (Transitions)&nbsp;",
              "Hoạt hình (Animations)&nbsp;",
              "Slide Master&nbsp;"
            ]
          },
          {
            "text": "Hiệu ứng hình ảnh có chức năng di chuyển trên các trang trình bày&nbsp;",
            "choices": [
              "Mẫu (Template)&nbsp;",
              "Chuyển tiếp (Transitions)&nbsp;",
              "Hoạt hình (Animations)&nbsp;",
              "Slide Master&nbsp;"
            ]
          },
          {
            "text": "Trang trình bày kiểm soát thiết kế của các bạn&nbsp;",
            "choices": [
              "Mẫu (Template)&nbsp;",
              "Chuyển tiếp (Transitions)&nbsp;",
              "Hoạt hình (Animations)&nbsp;",
              "Slide Master&nbsp;"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Chuyển tiếp (Transitions)",
          "1": "Mẫu (Template)",
          "2": "Hoạt hình (Animations)",
          "3": "Slide Master"
        },
        "explanation": "Chuyển tiếp (Transitions) là hiệu ứng lật trang giống như em lật sách. Hoạt hình (Animations) làm cho chữ hoặc hình ảnh bay lượn. Mẫu (Template) là những bản vẽ được tô màu sẵn để em điền chữ vào. Còn Slide Master là 'ông trùm' quản lý thiết kế của toàn bộ bài."
      },
      {
        "id": 4,
        "question": "Tính năng theo dõi thay đổi (Track Changes) trong Microsoft Word là một ví dụ về kiểu chỉnh sửa nào?&nbsp;",
        "type": "single",
        "options": [
          "Không đồng bộ (Asynchronous)&nbsp;",
          "So le (Staggered)&nbsp;",
          "Đồng bộ (Synchronous)&nbsp;",
          "Đồng thời (Simultaneous)&nbsp;"
        ],
        "correctAnswers": [
          "Không đồng bộ (Asynchronous)&nbsp;"
        ],
        "explanation": "Khi dùng 'Track Changes', em gửi bài cho bạn sửa, hôm sau bạn gửi lại cho em xem. Quá trình này không diễn ra cùng một lúc (không gọi điện video sửa chung) nên được gọi là chỉnh sửa 'Không đồng bộ' (Asynchronous)."
      },
      {
        "id": 5,
        "question": "Tính năng Compare trong Microsoft Word có thể được sử dụng để so sánh nhiều phiên bản của cùng một tài liệu.&nbsp;",
        "type": "single",
        "options": [
          "Sai&nbsp;",
          "Đúng&nbsp;"
        ],
        "correctAnswers": [
          "Đúng&nbsp;"
        ],
        "explanation": "Rất đúng! Tính năng So sánh (Compare) trong Word giống như trò chơi 'Tìm điểm khác biệt' giữa 2 bức tranh. Nó sẽ gạch chân cho em xem bản nháp cũ và bản mới viết có những chữ nào khác nhau."
      },
      {
        "id": 6,
        "question": "Video cần được giảm kích thước để phù hợp với một không gian cụ thể. Nên làm gì với Video để hoàn thành nhiệm vụ này?&nbsp;",
        "type": "single",
        "options": [
          "Crop&nbsp;",
          "Splice&nbsp;",
          "Split&nbsp;",
          "Trim&nbsp;"
        ],
        "correctAnswers": [
          "Crop&nbsp;"
        ],
        "explanation": "Khi đoạn video của em bị dính thêm những cảnh vật thừa ở các góc và em muốn cắt gọt khung hình lại cho vừa vặn với ô trống trên trang web, em sẽ dùng tính năng Cắt xén (Crop) nhé."
      },
      {
        "id": 7,
        "question": "Nếu mật khẩu được sử dụng để bảo vệ tài liệu Microsoft Word bị mất, khóa giải mã có thể khôi phục mật khẩu.&nbsp;",
        "type": "single",
        "options": [
          "Đúng&nbsp;",
          "Sai&nbsp;"
        ],
        "correctAnswers": [
          "Sai&nbsp;"
        ],
        "explanation": "Đây là một điều cực kỳ quan trọng! Mật khẩu trong Word không giống như chìa khóa nhà có thể nhờ thợ làm lại. Nếu em quên mật khẩu, tài liệu đó sẽ bị khóa vĩnh viễn và không có 'khóa giải mã' nào cứu được đâu (Sai)."
      },
      {
        "id": 8,
        "question": "Trong PowerPoint, loại trang chiếu nào lưu trữ bố cục, màu sắc và Logo của trang trình chiếu được sử dụng trong bài trình chiếu?&nbsp;",
        "type": "single",
        "options": [
          "Blueprint&nbsp;",
          "Master&nbsp;",
          "Template&nbsp;",
          "Storyboard&nbsp;"
        ],
        "correctAnswers": [
          "Master&nbsp;"
        ],
        "explanation": "Slide Master (Trang chiếu Chủ) giống như một cái khuôn đúc bánh. Nếu em dán một cái Logo hoặc chọn màu nền ở cái khuôn này, thì tất cả các trang Slide con khác được sinh ra đều sẽ có hình dạng y chang như vậy."
      },
      {
        "id": 9,
        "question": "Trong Microsoft Word, tính năng Feedback được tìm thấy trên thẻ (Tab) nào?&nbsp;",
        "type": "single",
        "options": [
          "File&nbsp;",
          "Help&nbsp;",
          "Insert&nbsp;",
          "Home&nbsp;"
        ],
        "correctAnswers": [
          "Help&nbsp;"
        ],
        "explanation": "Khi em thấy phần mềm bị lỗi hoặc muốn gửi lời khen cho những người tạo ra phần mềm Word, em hãy vào thẻ Trợ giúp (Help) và chọn nút 'Phản hồi' (Feedback) hình mặt cười nha."
      },
      {
        "id": 10,
        "question": "Người dùng mở tài liệu Word và nhận thấy rằng một số thay đổi đã được thực hiện và những thay đổi đó sẽ hiển thị bằng màu đỏ. Tính năng nào có thể đã được kích hoạt?&nbsp;",
        "type": "single",
        "options": [
          "Comments&nbsp;",
          "Balloons&nbsp;",
          "Track Changes&nbsp;",
          "Review&nbsp;"
        ],
        "correctAnswers": [
          "Track Changes&nbsp;"
        ],
        "explanation": "Giống như cô giáo dùng bút đỏ để chấm bài cho em dễ nhìn thấy lỗi sai, tính năng 'Track Changes' trong Word cũng tự động tô đỏ những đoạn chữ mà bạn bè vừa mới thêm vào hoặc gạch bỏ."
      },
      {
        "id": 11,
        "question": "Tùy chọn chỉnh sửa video nào làm giảm thời gian tổng thể của video?&nbsp;",
        "type": "single",
        "options": [
          "Crop&nbsp;",
          "Split&nbsp;",
          "Zoom&nbsp;",
          "Trim&nbsp;"
        ],
        "correctAnswers": [
          "Trim&nbsp;"
        ],
        "explanation": "Nếu đoạn video quay bị thừa 5 giây lúc em đang chuẩn bị ở đầu, em sẽ dùng tính năng Cắt tỉa (Trim) để gọt bỏ 5 giây đó đi. Khi đó, thời lượng của video sẽ bị ngắn lại."
      },
      {
        "id": 12,
        "question": "Bạn tạo và điền vào tài liệu một trang, sau đó thêm một trang trống vào tài liệu đó. Bạn cần sao chép tất cả nội dung của trang đầu tiên lên trang thứ hai. Bạn nên sử dụng ba phím tắt nào? (Chọn 3)&nbsp;",
        "type": "multiple",
        "options": [
          "Ctrl+P (Cmd+P)&nbsp;&nbsp;",
          "Ctrl+N (Cmd+N)&nbsp;&nbsp;",
          "Ctrl+A (Cmd+A)&nbsp;",
          "Ctrl+C (Cmd+C)&nbsp;&nbsp;",
          "Ctrl+V (Cmd+V)&nbsp;&nbsp;"
        ],
        "correctAnswers": [
          "Ctrl+A (Cmd+A)&nbsp;",
          "Ctrl+C (Cmd+C)&nbsp;&nbsp;",
          "Ctrl+V (Cmd+V)&nbsp;&nbsp;"
        ],
        "explanation": "Để nhân bản phép thuật, đầu tiên em bấm Ctrl+A để 'chọn trọn bộ' trang thứ nhất. Tiếp theo bấm Ctrl+C để 'Copy' (sao chép). Cuối cùng mang chuột xuống trang hai và bấm Ctrl+V để 'Dán' mọi thứ ra."
      },
      {
        "id": 13,
        "question": "Một công ty muốn đảm bảo rằng mọi bài trình chiếu được sử dụng có cùng phông chữ, màu sắc và căn chỉnh văn bản. Em hãy cho biết, tùy chọn nào sau đây công ty nên lựa chọn xây dựng?&nbsp;",
        "type": "single",
        "options": [
          "Boilerplate&nbsp;",
          "Master file&nbsp;",
          "Storyboard&nbsp;",
          "Template&nbsp;"
        ],
        "correctAnswers": [
          "Template&nbsp;"
        ],
        "explanation": "Để tất cả nhân viên trong công ty đều làm báo cáo có chung một màu sắc và hình ảnh giống hệt nhau, công ty sẽ thiết kế sẵn một Bản mẫu (Template). Nhân viên chỉ việc mở bản mẫu đó lên và điền số liệu vào là xong."
      },
      {
        "id": 14,
        "question": "Phát biểu nào là đúng khi lập phiên bản và khôi phục tài liệu? (Chọn 2)&nbsp;",
        "type": "multiple",
        "options": [
          "Tính năng AutoRecover có thể thay thế cho việc lưu công việc&nbsp;&nbsp;",
          "Tính năng Compare có thể được sử dụng để so sánh hai phiên bản của cùng một tập tin&nbsp;",
          "Tính năng AutoRecover lưu được đặt thành 10 phút trong thời gian dài&nbsp;",
          "Các phiên bản trước của tập tin có thể được khôi phục&nbsp;&nbsp;"
        ],
        "correctAnswers": [
          "Tính năng Compare có thể được sử dụng để so sánh hai phiên bản của cùng một tập tin&nbsp;",
          "Các phiên bản trước của tập tin có thể được khôi phục&nbsp;&nbsp;"
        ],
        "explanation": "Lập phiên bản giúp em có thể khôi phục (lấy lại) bài văn ở bất kỳ thời điểm nào trong quá khứ. Em cũng có thể dùng tính năng So sánh (Compare) để xem bản ngày hôm qua và bản hôm nay khác nhau ở chỗ nào."
      },
      {
        "id": 15,
        "question": "Phát biểu nào là đúng về nối Video khi chỉnh sửa Video? (Chọn 2)&nbsp;",
        "type": "multiple",
        "options": [
          "Các Clip khác được di chuyển và không bị ghi đè.&nbsp;",
          "Một đoạn Video được chèn vào.&nbsp;",
          "Các Clip khác được di chuyển và ghi đè.&nbsp;",
          "Một đoạn Video bị cắt.&nbsp;"
        ],
        "correctAnswers": [
          "Các Clip khác được di chuyển và không bị ghi đè.&nbsp;",
          "Một đoạn Video được chèn vào.&nbsp;"
        ],
        "explanation": "Khi 'Nối' (Splice) video, em nhét thêm một đoạn phim mới vào giữa. Các đoạn phim cũ sẽ tự động lùi về phía sau nhường chỗ (được di chuyển) chứ không hề bị mất đi hay bị đè lên (không bị ghi đè)."
      },
      {
        "id": 16,
        "question": "Phát biểu nào là đúng về hiệu ứng Transition trong PowerPoint? (Chọn 2)&nbsp;",
        "type": "multiple",
        "options": [
          "Một loại transition được phép cho mỗi bài trình chiếu&nbsp;",
          "Transition diễn ra trong khi phát một trang trình chiếu&nbsp;&nbsp;",
          "Transition có thể chứa âm thanh&nbsp;&nbsp;",
          "Thời gian của transition có thể được kiểm soát&nbsp;&nbsp;"
        ],
        "correctAnswers": [
          "Transition có thể chứa âm thanh&nbsp;&nbsp;",
          "Thời gian của transition có thể được kiểm soát&nbsp;&nbsp;"
        ],
        "explanation": "Hiệu ứng chuyển trang (Transition) có thể phát ra âm thanh vui nhộn (như tiếng vỗ tay, tiếng máy ảnh), và em hoàn toàn có thể chỉnh cho nó lật trang nhanh vèo vèo hay chậm rãi theo ý thích (kiểm soát thời gian)."
      },
      {
        "id": 17,
        "question": "Phương pháp nào có thể được sử dụng để đổi tên trang tính (Sheet) trong Excel? (Chọn 2)&nbsp;",
        "type": "multiple",
        "options": [
          "Nhấp đúp chuột vào tab trang tính&nbsp;",
          "Thông qua tab Data trên Ribbon&nbsp;",
          "Thông qua tab Page Layout trên Ribbon&nbsp;",
          "Chọn và giữ (hoặc bấm chuột phải) vào tab trang tính&nbsp;"
        ],
        "correctAnswers": [
          "Nhấp đúp chuột vào tab trang tính&nbsp;",
          "Chọn và giữ (hoặc bấm chuột phải) vào tab trang tính&nbsp;"
        ],
        "explanation": "Đổi tên trang tính (Sheet) rất dễ! Em chỉ cần nhấn đúp chuột (nháy chuột 2 lần thật nhanh) vào cái tên ở dưới đáy, hoặc nhấn chuột phải vào đó rồi chọn 'Rename' là có thể gõ tên mới được ngay."
      },
      {
        "id": 18,
        "question": "Một nhà phân tích dữ liệu đang chuẩn bị một tập tin Excel và đã nhập một tháng vào một ô. Nhà phân tích có thể sử dụng tính năng nào để thêm tháng mà không cần nhập chúng?&nbsp;",
        "type": "single",
        "options": [
          "AutoComplete&nbsp;",
          "AutoFill&nbsp;",
          "AutoGenerate&nbsp;",
          "AutoCorrect&nbsp;"
        ],
        "correctAnswers": [
          "AutoFill&nbsp;"
        ],
        "explanation": "Trong Excel có một trò ảo thuật tên là Điền tự động (AutoFill). Em chỉ cần gõ chữ 'Tháng 1', sau đó nắm cái đuôi ô vuông nhỏ kéo tuốt xuống dưới, nó sẽ tự động sinh ra Tháng 2, Tháng 3... mà không cần phải gõ."
      },
      {
        "id": 19,
        "question": "Bạn hãy cho biết, khi tài liệu Word được bảo vệ bằng mật khẩu, thì điều gì sau đây được áp dụng cho tập tin đó?&nbsp;",
        "type": "single",
        "options": [
          "Tài liệu được đặt thuộc tính chỉ đọc - ghi (Read - Write)&nbsp;",
          "Tài liệu được nén lại&nbsp;",
          "Tài liệu được đặt thuộc tính chỉ đọc (Read - Only)&nbsp;",
          "Tài liệu bị mã hoá&nbsp;"
        ],
        "correctAnswers": [
          "Tài liệu bị mã hoá&nbsp;"
        ],
        "explanation": "Mật khẩu không chỉ đơn giản là cái khóa cửa. Khi em khóa tài liệu, Word sẽ biến tất cả các dòng chữ bên trong thành những ký hiệu lộn xộn (Mã hóa). Kẻ trộm có ăn cắp được tập tin cũng không thể đọc hiểu được."
      },
      {
        "id": 20,
        "question": "Trong PowerPoint, tùy chọn nào được sử dụng để thêm hiệu ứng khi bản trình chiếu chuyển từ trang chiếu này sang trang chiếu tiếp theo?&nbsp;",
        "type": "single",
        "options": [
          "Transition&nbsp;",
          "Effects&nbsp;",
          "Animation&nbsp;",
          "Slide Show&nbsp;"
        ],
        "correctAnswers": [
          "Transition&nbsp;"
        ],
        "explanation": "'Transition' trong tiếng Anh nghĩa là 'Chuyển tiếp'. Nó là những hiệu ứng đẹp mắt (như mở rèm cửa, bay thành hình con hạc giấy) xuất hiện khi em bấm nút chuyển từ trang số 1 sang trang số 2."
      },
      {
        "id": 21,
        "question": "Bạn hãy cho biết, phát biểu sau đây là đúng hay sai: \"Macro được sử dụng để tự động hóa các quy trình trong Microsoft Word.\"&nbsp;",
        "type": "single",
        "options": [
          "Đúng&nbsp;&nbsp;",
          "Sai&nbsp;&nbsp;"
        ],
        "correctAnswers": [
          "Đúng&nbsp;&nbsp;"
        ],
        "explanation": "Rất đúng! Macro chính là một 'con robot tự động' giúp em làm đi làm lại một công việc nhàm chán (như đổi màu hàng trăm dòng chữ) chỉ bằng một nút bấm duy nhất."
      },
      {
        "id": 22,
        "question": "Thẻ (Tab) nào trong PowerPoint được sử dụng khi một người muốn xem tất cả các Transition và Animation trong bài trình chiếu?&nbsp;",
        "type": "single",
        "options": [
          "Slide Show&nbsp;",
          "Design&nbsp;",
          "Transitions&nbsp;",
          "Home&nbsp;"
        ],
        "correctAnswers": [
          "Slide Show&nbsp;"
        ],
        "explanation": "Để tận mắt xem tất cả các hiệu ứng bay nhảy và chuyển trang hoạt động cùng nhau như một bộ phim, em phải mở thẻ 'Slide Show' (Trình chiếu) và chọn nút Phát từ đầu (From Beginning)."
      },
      {
        "id": 23,
        "question": "Định dạng tập tin nào hỗ trợ độ trong suốt trong Logo?&nbsp;",
        "type": "single",
        "options": [
          "PNG&nbsp;",
          "JPG&nbsp;",
          "TIFF&nbsp;",
          "PDF&nbsp;"
        ],
        "correctAnswers": [
          "PNG&nbsp;"
        ],
        "explanation": "Nếu em muốn lưu một bức tranh có cái nền 'tàng hình' (trong suốt) để dán đè lên hình ảnh khác mà không bị lộ viền trắng, em phải dùng định dạng ảnh là PNG nhé! Đuôi JPG không biết làm tàng hình đâu."
      },
      {
        "id": 24,
        "question": "Một giám đốc tiếp thị đang chuẩn bị một bài thuyết trình và muốn một quả bóng nảy lên xuống trên một Slide. Em hãy cho biết, giám đốc tiếp thị nên thêm gì vào quả bóng?&nbsp;",
        "type": "single",
        "options": [
          "Animation&nbsp;",
          "Timing&nbsp;",
          "Transition&nbsp;",
          "Custom effect&nbsp;"
        ],
        "correctAnswers": [
          "Animation&nbsp;"
        ],
        "explanation": "'Animation' là hiệu ứng Hoạt hình. Nó biến những bức ảnh, chữ viết nằm im lìm trên trang giấy trở nên sống động, biết nhún nhảy, bay vòng vòng hoặc nhấp nháy giống như quả bóng vậy."
      },
      {
        "id": 25,
        "question": "Loại ứng dụng nào phù hợp nhất để theo dõi doanh số bán hàng và tạo tổng số từ những lần bán hàng đó?&nbsp;",
        "type": "single",
        "options": [
          "Document&nbsp;",
          "Table&nbsp;",
          "Spreadsheet&nbsp;",
          "Presentation&nbsp;"
        ],
        "correctAnswers": [
          "Spreadsheet&nbsp;"
        ],
        "explanation": "'Spreadsheet' (Bảng tính điện tử, như Excel) là cỗ máy tính toán siêu phàm. Nó sinh ra là để làm việc với các con số, giúp em ghi chép tiền bạc và tự động tính tổng tiền (cộng trừ nhân chia) một cách chính xác tuyệt đối."
      }
    ]
  },
  {
    "id": "c5-t8",
    "title": "Chủ đề 5 - Bài Test 8",
    "topic": "Chủ đề 5",
    "questions": [
      {
        "id": 1,
        "question": "Khi tương tác với các thành viên của cộng đồng kỹ thuật số, điều quan trọng nhất bạn cần nhớ là gì?",
        "type": "single",
        "options": [
          "Tránh đăng hình ảnh",
          "Sử dụng tên đầy đủ của bạn",
          "Không sử dụng biểu tượng cảm xúc",
          "Đối xử lịch sự với người khác như cách bạn muốn được đối xử"
        ],
        "correctAnswers": [
          "Đối xử lịch sự với người khác như cách bạn muốn được đối xử"
        ],
        "explanation": "Phép lịch sự luôn là quy tắc số một! Bất kể ở ngoài đời hay trên mạng, em luôn phải đối xử tôn trọng và tử tế với mọi người, y hệt như cách em muốn mọi người tử tế với mình vậy."
      },
      {
        "id": 2,
        "question": "Tùy chọn nào sau đây là công cụ giao tiếp kỹ thuật số không đồng bộ? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Phone Call",
          "Email",
          "Video Conference",
          "Text Message"
        ],
        "correctAnswers": [
          "Email",
          "Text Message"
        ],
        "explanation": "Giao tiếp 'không đồng bộ' nghĩa là em gửi tin nhắn đi, lúc nào người kia rảnh thì mới đọc và trả lời. Thư điện tử (Email) và Tin nhắn chữ (Text Message) là ví dụ điển hình. Còn gọi điện hay Video là phải có mặt ngay lập tức."
      },
      {
        "id": 3,
        "question": "Một sinh viên sắp lỡ hẹn phỏng vấn thực tập. Anh ấy gửi Email dưới đây cho người phỏng vấn:\r\nKính gửi bà Smith,\r\nTội bị bận vào giờ phỏng vấn rồi, chắc là phải dời lịch thôi HY VỌNG ĐIỀU NÀY KHÔNG LÀM PHIỀN BÀ!!!\r\nCảm ơn nha!!!\r\nThành phần nào của Email trên thể hiện các chuẩn mực đạo đức phù hợp khi gửi Email?",
        "type": "single",
        "options": [
          "Ngữ pháp",
          "Quy tắc viết hoa",
          "Lời chào",
          "Dấu câu"
        ],
        "correctAnswers": [
          "Quy tắc viết hoa"
        ],
        "explanation": "(Giống câu trên) Sinh viên này đã viết IN HOA bừa bãi câu 'HY VỌNG ĐIỀU NÀY KHÔNG LÀM PHIỀN ÔNG!!!', điều này giống hệt như đang quát mắng người phỏng vấn. Vi phạm nghiêm trọng Quy tắc viết hoa!"
      },
      {
        "id": 4,
        "question": "Bạn tìm thấy một bài đăng trên mạng xã hội chia sẻ thông tin y tế không chính xác và gây hiểu lầm. Bạn quyết định trả lời bài viết này. Với mỗi phản hồi, hãy chọn Có nếu việc này tuân thủ các chuẩn mực đạo đức thích hợp trong môi trường số hoặc Không nếu không phải.",
        "type": "matching",
        "options": [
          {
            "text": "\"Rất nhiều bác sĩ, bao gồm cả Jane Smith từ Harvard Medical School đều không đồng ý\".",
            "choices": [
              "Có",
              "Không"
            ]
          },
          {
            "text": "\"Rất khó để tìm hiểu tất cả mọi thứ, nhưng có rất nhiều nguồn để tìm hiểu về vấn đề này\".",
            "choices": [
              "Có",
              "Không"
            ]
          },
          {
            "text": "\"Đây là việc làm sai lầm và khiến bạn trông thật ngờ nghệch! Rõ ràng là bạn không tìm hiểu từ Harvard Medical School\".",
            "choices": [
              "Có",
              "Không"
            ]
          },
          {
            "text": "\"SAI RỒI! Bạn có TÌM HIỂU KỸ trước khi đăng bài này không?\"",
            "choices": [
              "Có",
              "Không"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Có",
          "1": "Có",
          "2": "Không",
          "3": "Không"
        },
        "explanation": "Khi tranh luận trên mạng, em nên đưa ra lý lẽ nhẹ nhàng, dẫn chứng từ chuyên gia (Có). Không bao giờ được dùng lời lẽ chê bai người khác là 'ngờ nghệch' hay IN HOA quát tháo ầm ĩ (Không)."
      },
      {
        "id": 5,
        "question": "Hai phương thức giao tiếp nào không đồng bộ? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Gọi điện thoại",
          "Tham gia hội thảo video",
          "Gửi tin nhắn văn bản",
          "Gửi email"
        ],
        "correctAnswers": [
          "Gửi tin nhắn văn bản",
          "Gửi email"
        ],
        "explanation": "Gửi tin nhắn và Gửi Email là giao tiếp 'không đồng bộ', nghĩa là người nhận có thể rảnh rỗi mở ra xem lúc nào cũng được, không cần phải trả lời ngay lập tức như Gọi điện thoại."
      },
      {
        "id": 6,
        "question": "Xác định các trường của một Email. Để trả lời, em hãy chuyển từng trường bên phải sang chức năng của nó ở bên trái sao cho phù hợp nhất.",
        "type": "matching",
        "options": [
          {
            "text": "Gửi bản sao đến những người nhận ẩn danh khác",
            "choices": [
              "Bcc",
              "Cc",
              "Low-Normal-High",
              "Body",
              "Subject"
            ]
          },
          {
            "text": "Phần nội dung Email",
            "choices": [
              "Bcc",
              "Cc",
              "Low-Normal-High",
              "Body",
              "Subject"
            ]
          },
          {
            "text": "Danh sách những người nhận được biết khác",
            "choices": [
              "Bcc",
              "Cc",
              "Low-Normal-High",
              "Body",
              "Subject"
            ]
          },
          {
            "text": "Các đánh dấu mức độ quan trọng của thư",
            "choices": [
              "Bcc",
              "Cc",
              "Low-Normal-High",
              "Body",
              "Subject"
            ]
          },
          {
            "text": "Chủ đề của Email",
            "choices": [
              "Bcc",
              "Cc",
              "Low-Normal-High",
              "Body",
              "Subject"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Bcc",
          "1": "Body",
          "2": "Cc",
          "3": "Low-Normal-High",
          "4": "Subject"
        },
        "explanation": "To: Người nhận chính. Cc: Gửi thêm cho người khác cùng đọc. Bcc: Gửi bí mật không ai biết. Subject: Tiêu đề tóm tắt thư. Body: Phần giấy rộng rãi để viết nội dung chính."
      },
      {
        "id": 7,
        "question": "Bạn tham gia nhóm gồm 10 sinh viên đang thực hiện một dự án lớn trong lớp học về sức khỏe. Nhóm của bạn sẽ thảo luận thông qua công cụ hội thảo video. Bạn nên thực hiện hai hành động nào trước khi tham gia hội thảo video lần đầu tiên? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Chuẩn bị sẵn đồ ăn nhẹ phòng khi đói.",
          "Đặt camera của bạn ngang tầm mắt.",
          "Kiểm tra trước công nghệ hội thảo video.",
          "Đặt ánh sáng phía sau bạn để bạn có bóng của bạn."
        ],
        "correctAnswers": [
          "Kiểm tra trước công nghệ hội thảo video.",
          "Đặt camera của bạn ngang tầm mắt."
        ],
        "explanation": "Trước khi họp nhóm bằng Video, em phải bật thử camera và micro xem có hoạt động tốt không (Kiểm tra công nghệ). Đừng quên đặt camera ngang tầm mắt để các bạn nhìn thấy khuôn mặt rạng rỡ của em nhé."
      },
      {
        "id": 8,
        "question": "Hiệu trưởng của một trường đang soạn email gửi tới phụ huynh học sinh, có nội dung về tầm quan trọng của việc tất cả học sinh đi học đúng giờ. Ông ấy cần sử dụng phương pháp giao tiếp phù hợp và hiệu quả nhất. Thầy Hiệu trưởng phải làm gì?",
        "type": "single",
        "options": [
          "Gửi thư đến một nhóm liên hệ chỉ bao gồm địa chỉ email của học sinh",
          "Gửi thư đến tất cả phụ huynh bằng cách sử dụng trường Bcc",
          "Gửi thư đến tất cả phụ huynh bằng cách sử dụng trường Cc",
          "Gửi thư đến phụ huynh của từng học sinh đi muộn"
        ],
        "correctAnswers": [
          "Gửi thư đến tất cả phụ huynh bằng cách sử dụng trường Bcc"
        ],
        "explanation": "Thầy Hiệu trưởng phải dùng trường Bcc (Gửi ẩn danh) để giấu đi địa chỉ Email của tất cả mọi người. Nếu dùng To hoặc Cc, danh sách địa chỉ của hàng trăm phụ huynh sẽ bị lộ ra ngoài, vi phạm tính bảo mật riêng tư."
      },
      {
        "id": 9,
        "question": "Em hãy ghép nối từng tình huống ở bên phải với từng phương thức giao tiếp ở bên trái sao cho phù hợp nhất.",
        "type": "matching",
        "options": [
          {
            "text": "Chia sẻ suy nghĩ hàng ngày của bạn về các sự kiện lên nhật ký trực tuyến.",
            "choices": [
              "Text message",
              "Forum post",
              "Email message",
              "Blog post"
            ]
          },
          {
            "text": "Cho anh của bạn biết nơi sẽ đón bạn.",
            "choices": [
              "Text message",
              "Forum post",
              "Email message",
              "Blog post"
            ]
          },
          {
            "text": "Yêu cầu hoàn lại tiền từ một công ty.",
            "choices": [
              "Text message",
              "Forum post",
              "Email message",
              "Blog post"
            ]
          },
          {
            "text": "Đặt câu hỏi cho một nhóm để thảo luận về trò chơi.",
            "choices": [
              "Text message",
              "Forum post",
              "Email message",
              "Blog post"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Blog post",
          "1": "Text message",
          "2": "Email message",
          "3": "Forum post"
        },
        "explanation": "Blog là nhật ký cá nhân đăng mạng. Text message (tin nhắn) dùng để gọi người nhà tới đón nhanh. Email dùng cho việc trang trọng như đòi tiền công ty. Forum (diễn đàn) là nơi hoàn hảo để hỏi đáp với nhiều người."
      },
      {
        "id": 10,
        "question": "Bạn hãy cho biết ứng dụng nào sau đây có khả năng tạo cuộc họp mặt trực tuyến?",
        "type": "single",
        "options": [
          "Zoom",
          "Google Drive",
          "OneDrive",
          "Dropbox"
        ],
        "correctAnswers": [
          "Zoom"
        ],
        "explanation": "Zoom là một phần mềm cực kỳ nổi tiếng dùng để gọi Video họp lớp hoặc họp công ty. Còn Google Drive, OneDrive hay Dropbox chỉ là các 'đám mây' để cất giữ tài liệu thôi."
      },
      {
        "id": 11,
        "question": "Hai nhận định nào là đúng về một người nhạy cảm với sự đa dạng văn hóa?",
        "type": "multiple",
        "options": [
          "Tất cả các nền văn hóa đều cảm thấy thoải mái với hội nghị truyền hình.",
          "Người ta nên nghiên cứu các chuẩn mực văn hóa cho các khách hàng quốc tế mà họ sẽ gặp.",
          "Người ta nên xem liệu có cần thông dịch viên cho cuộc họp giữa các bên với nhiều ngôn ngữ mẹ đẻ hay không.",
          "Giao tiếp đồng bộ có thể tốt hơn một cuộc họp trực tuyến."
        ],
        "correctAnswers": [
          "Người ta nên nghiên cứu các chuẩn mực văn hóa cho các khách hàng quốc tế mà họ sẽ gặp.",
          "Người ta nên xem liệu có cần thông dịch viên cho cuộc họp giữa các bên với nhiều ngôn ngữ mẹ đẻ hay không."
        ],
        "explanation": "Mỗi quốc gia có một phong tục khác nhau. Một người tinh tế sẽ luôn tìm hiểu trước văn hóa của nước bạn (ví dụ như cách chào hỏi), và chuẩn bị sẵn người phiên dịch nếu hai bên không hiểu ngôn ngữ của nhau."
      },
      {
        "id": 12,
        "question": "Bạn hãy cho biết, hình thức giao tiếp nào sau đây là phù hợp nhất với những tin nhắn dài và để gửi tập tin?",
        "type": "single",
        "options": [
          "Hội nghị truyền hình (Video conferencing)",
          "Tin nhắn tức thời (IM)",
          "Thư điện tử (Email)",
          "Tin nhắn ngắn (SMS)"
        ],
        "correctAnswers": [
          "Thư điện tử (Email)"
        ],
        "explanation": "Email (Thư điện tử) giống như một cái phong bì lớn. Nó cho phép em viết những bức thư rất dài và có thể nhét thêm cả hình ảnh, tài liệu (tập tin) vào bên trong để gửi đi một cách chuyên nghiệp."
      },
      {
        "id": 13,
        "question": "Loại tài khoản nào được yêu cầu để đăng các mục trong diễn đàn cộng đồng Microsoft?",
        "type": "single",
        "options": [
          "Domain",
          "Microsoft",
          "Azure",
          "Windows"
        ],
        "correctAnswers": [
          "Microsoft"
        ],
        "explanation": "Tất nhiên rồi! Để tham gia bình luận hay hỏi đáp trên 'sân nhà' của Microsoft (diễn đàn cộng đồng), em cần phải đăng ký và sở hữu một tài khoản của chính Microsoft."
      },
      {
        "id": 14,
        "question": "Bạn hãy cho biết ứng dụng nào có thể tổ chức cả cuộc họp âm thanh và Video?",
        "type": "single",
        "options": [
          "Box",
          "Microsoft Teams",
          "Yammer",
          "Dropbox"
        ],
        "correctAnswers": [
          "Microsoft Teams"
        ],
        "explanation": "Microsoft Teams là lớp học ảo trực tuyến, nơi thầy cô và các bạn có thể nhìn thấy mặt nhau (Video) và nghe giọng nói của nhau (Âm thanh). Box, Yammer hay Dropbox không có chức năng gọi video nhóm."
      },
      {
        "id": 15,
        "question": "Khớp dich vụ truyền thông trực tuyến với ví dụ của nó.",
        "type": "matching",
        "options": [
          {
            "text": "Thiết bị phát trực tuyến (Streaming Devices)",
            "choices": [
              "Netflix, Disney+, Hulu, Amazon Prime",
              "Spotify, Kodi, Web Browsers",
              "Roku, Amazon Firestick, Apple TV, Chromecast"
            ]
          },
          {
            "text": "Truyền trực tuyến phim (Streaming Movies)",
            "choices": [
              "Netflix, Disney+, Hulu, Amazon Prime",
              "Spotify, Kodi, Web Browsers",
              "Roku, Amazon Firestick, Apple TV, Chromecast"
            ]
          },
          {
            "text": "Trình phát đa phương tiện (Media Players)",
            "choices": [
              "Netflix, Disney+, Hulu, Amazon Prime",
              "Spotify, Kodi, Web Browsers",
              "Roku, Amazon Firestick, Apple TV, Chromecast"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Roku, Amazon Firestick",
          "1": "Netflix, Disney+",
          "2": "Spotify, Kodi"
        },
        "explanation": "'Thiết bị' là các cục cắm vào Tivi (Apple TV, Chromecast). 'Dịch vụ phim' là rạp chiếu bóng tại nhà (Netflix, Disney+). Còn 'Trình phát đa phương tiện' là các phần mềm giúp bật nhạc, chạy phim (Spotify, Trình duyệt Web)."
      },
      {
        "id": 16,
        "question": "Một sinh viên sắp lỡ hẹn buổi phỏng vấn. Sinh viên đó gửi Email dưới đây cho người phỏng vấn. Thành phần nào của Email thể hiện chuẩn mực đạo đức phù hợp khi gửi Email?\r\nKính gửi ông John,\r\nTội có việc bận đột xuất vào giờ phỏng vấn, có lẽ cần phải dời lịch thôi HY VỌNG ĐIỀU NÀY KHÔNG LÀM PHIỀN ÔNG!!!\r\nThanks ông nhiều nha!!!",
        "type": "single",
        "options": [
          "Dấu câu",
          "Ngữ pháp",
          "Quy tắc viết hoa",
          "Lời chào"
        ],
        "correctAnswers": [
          "Quy tắc viết hoa"
        ],
        "explanation": "(Giống câu trên) Sinh viên này đã viết IN HOA bừa bãi câu 'HY VỌNG ĐIỀU NÀY KHÔNG LÀM PHIỀN ÔNG!!!', điều này giống hệt như đang quát mắng người phỏng vấn. Vi phạm nghiêm trọng Quy tắc viết hoa!"
      },
      {
        "id": 17,
        "question": "Mục đích của trường Bcc trong Email là gì?",
        "type": "single",
        "options": [
          "Để chỉ ra rằng đây là tin nhắn cá nhân.",
          "Để thu thập thông tin về ai đó mà họ không biết.",
          "Để chỉ ra rằng việc trả lời là không bắt buộc.",
          "Để giữ bí mật địa chỉ Email của nhiều người nhận với nhau."
        ],
        "correctAnswers": [
          "Để giữ bí mật địa chỉ Email của nhiều người nhận với nhau."
        ],
        "explanation": "'Bcc' viết tắt của Blind Carbon Copy (Gửi bản sao mù). Người nhận sẽ bị 'bịt mắt' và không thể nhìn thấy địa chỉ Email của những người khác cùng nhận bức thư này. Rất an toàn để bảo mật!"
      },
      {
        "id": 18,
        "question": "Lớp của bạn đang họp qua hình thức hội thảo video. Bạn và ba sinh viên khác sẽ thay phiên nhau trình bày thông tin trên camera và từng người chia sẻ màn hình riêng của mình. Ba hành động bạn cần thực hiện trước khi thuyết trình? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Đảm bảo rằng hình ảnh trong bài thuyết trình của bạn phù hợp với trường học.",
          "Kiểm tra và luyện tập sử dụng tính năng chia sẻ màn hình.",
          "Luyện tập bài thuyết trình của mình trong khi những người khác đang thuyết trình.",
          "Cho các sinh viên khác biết rằng họ có thể đồng thời chia sẻ màn hình.",
          "Trình bày ở ngoài trời để có ánh sáng tự nhiên.",
          "Đóng bất kỳ chương trình và tab trình duyệt nào mà bạn không cần."
        ],
        "correctAnswers": [
          "Đảm bảo rằng hình ảnh trong bài thuyết trình của bạn phù hợp với trường học.",
          "Kiểm tra và luyện tập sử dụng tính năng chia sẻ màn hình.",
          "Đóng bất kỳ chương trình và tab trình duyệt nào mà bạn không cần."
        ],
        "explanation": "Khi thuyết trình, em sẽ phải chia sẻ màn hình máy tính. Vì vậy em phải dọn dẹp đóng hết các chương trình rác, kiểm tra kỹ hình ảnh cho lịch sự và tập bấm thử nút chia sẻ trước nhé."
      },
      {
        "id": 19,
        "question": "Bạn hãy cho biết, loại giao tiếp nào là phù hợp nhất để giao tiếp khi cách nhiều múi giờ?",
        "type": "single",
        "options": [
          "Đồng bộ (Synchronous)",
          "Đồng thời (Simultaneous)",
          "Thời gian thực (Real-time)",
          "Không đồng bộ (Asynchronous)"
        ],
        "correctAnswers": [
          "Không đồng bộ (Asynchronous)"
        ],
        "explanation": "Khi em ở Việt Nam (đang là ban ngày) còn bạn ở Mỹ (đang ngủ đêm), em không thể gọi Video bắt bạn thức dậy được. Em phải dùng giao tiếp 'Không đồng bộ' (như Email), để gửi đi và chờ sáng mai bạn ấy ngủ dậy sẽ trả lời."
      },
      {
        "id": 20,
        "question": "Bạn hãy cho biết khi sử dụng tất cả chữ in hoa trong một thư điện tử (Email) sẽ truyền đạt điều gì?",
        "type": "single",
        "options": [
          "Tầm quan trọng",
          "Nhấn mạnh",
          "Khẩn cấp",
          "La hét"
        ],
        "correctAnswers": [
          "La hét"
        ],
        "explanation": "Trong thế giới mạng (Netiquette), việc gõ toàn bộ CHỮ IN HOA VÀO MẶT NGƯỜI KHÁC được hiểu là em đang nổi giận và La hét ầm ĩ. Hãy chỉ viết hoa chữ cái đầu câu cho lịch sự thôi nhé!"
      },
      {
        "id": 21,
        "question": "Một người dùng nhận được cuộc gọi điện thoại khi đang họp. Quy trình hành động tốt nhất mà người dùng thực hiện nếu họ phải thực hiện cuộc gọi là gì?",
        "type": "single",
        "options": [
          "Trả lời điện thoại",
          "Di chuyển đến một góc của căn phòng",
          "Di chuyển cách xa những người khác 100-200 feet",
          "Rời khỏi phòng họp"
        ],
        "correctAnswers": [
          "Rời khỏi phòng họp"
        ],
        "explanation": "Phép lịch sự tối thiểu là không làm ồn ảnh hưởng đến người khác. Nếu có cuộc gọi gấp, em hãy cúi đầu xin lỗi nhẹ nhàng, sau đó bước hẳn ra bên ngoài (Rời khỏi phòng họp) rồi mới nghe điện thoại."
      },
      {
        "id": 22,
        "question": "Khi cần gửi một thư điện tử (Email) đến một hoặc nhiều người nhận, nhưng họ không phải là người nhận chính và đồng thời danh sách những người nhận này cũng cần được công khai với tất cả người nhận khác. Theo bạn thì những người nhận này cần được thêm vào trường nào sau đây?",
        "type": "single",
        "options": [
          "To",
          "Bcc",
          "Cc",
          "Bc"
        ],
        "correctAnswers": [
          "Bcc"
        ],
        "explanation": "'Cc' (Carbon Copy) là gửi thêm một bản sao. Những người trong danh sách Cc không phải là người giải quyết việc chính, họ chỉ được nhận thư để 'biết thông tin', và tất cả mọi người đều có thể nhìn thấy tên của nhau."
      },
      {
        "id": 23,
        "question": "Bạn muốn gửi Email cho một người nào đó, nhưng bạn muốn gửi một cách riêng tư để những người nhận Email khác không nhìn thấy địa chỉ Email của người này. Vậy theo bạn nên nhập địa chỉ Email của người này vào trường nào dưới đây?",
        "type": "single",
        "options": [
          "Bcc",
          "Cc",
          "To",
          "Bc"
        ],
        "correctAnswers": [
          "Bcc"
        ],
        "explanation": "Lại là 'Bcc' (Bản sao mù)! Chỉ cần nhét tên người đó vào ô Bcc, hệ thống sẽ khoác cho họ một chiếc áo tàng hình. Không một ai trong nhóm nhận thư có thể biết là người đó cũng đang đọc bức thư này."
      },
      {
        "id": 24,
        "question": "Bạn hãy cho biết, bạn nên làm gì trước khi bắt đầu một cuộc hội thoại bằng loa ngoài?",
        "type": "single",
        "options": [
          "Kiểm tra âm lượng trên thiết bị liên lạc đầu ra",
          "Xin phép để tiếp tục cuộc trò chuyện trên loa ngoài",
          "Bật loa điện thoại và bắt đầu nói chuyện",
          "Yêu cầu đầu dây bên kia nói để kiểm tra âm lượng"
        ],
        "correctAnswers": [
          "Xin phép để tiếp tục cuộc trò chuyện trên loa ngoài"
        ],
        "explanation": "Bật loa ngoài nghĩa là tất cả mọi người xung quanh em đều sẽ nghe thấy đầu dây bên kia nói gì. Vì lý do bảo mật và lịch sự, em bắt buộc phải hỏi 'Xin phép bạn cho mình bật loa ngoài nhé?' trước khi làm vậy."
      },
      {
        "id": 25,
        "question": "Ứng dụng nào là ví dụ về nền tảng cộng tác? (Chọn 2)",
        "type": "multiple",
        "options": [
          "GoToMeeting",
          "Slack",
          "Zoom",
          "Office 365"
        ],
        "correctAnswers": [
          "Slack",
          "Office 365"
        ],
        "explanation": "\"Nền tảng cộng tác\" (Collaboration Platform) là nơi một nhóm người có thể cùng nhắn tin, cùng sửa chung một file tài liệu. Slack và Office 365 có đủ các tính năng đó. Còn Zoom hay GoToMeeting chỉ mạnh về mảng gọi Video thôi."
      },
      {
        "id": 26,
        "question": "Bạn đang rà soát bản báo cáo do một người bạn cùng lớp viết bằng phương thức điện tử. Bạn nên sử dụng phương pháp nào trong tài liệu để đưa ra phản hồi mang tính xây dựng cho bạn học của mình?",
        "type": "single",
        "options": [
          "Chú thích cuối trang (Footnotes)",
          "Trích dẫn (Citations)",
          "Hộp văn bản (Text boxes)",
          "Chú thích (Comments)"
        ],
        "correctAnswers": [
          "Chú thích (Comments)"
        ],
        "explanation": "Khi em rà soát bài cho bạn, đừng tự ý sửa mất chữ của bạn. Hãy dùng chức năng 'Bình luận' (Comments) để dán những mẩu giấy note nhỏ lề bên cạnh, ghi lời góp ý của em. Bạn đọc xong có quyền sửa hoặc không sửa."
      }
    ]
  },
  {
    "id": "c5-t9",
    "title": "Chủ đề 5 - Bài Test 9",
    "topic": "Chủ đề 5",
    "questions": [
      {
        "id": 1,
        "question": "Bạn hãy cho biết, loại giao tiếp nào là phù hợp nhất để giao tiếp khi cách nhiều múi giờ?",
        "type": "single",
        "options": [
          "Thời gian thực (Real-time)",
          "Đồng bộ (Synchronous)",
          "Không đồng bộ (Asynchronous)",
          "Đồng thời (Simultaneous)"
        ],
        "correctAnswers": [
          "Không đồng bộ (Asynchronous)"
        ],
        "explanation": "Khi em ở Việt Nam (đang là ban ngày) còn bạn ở Mỹ (đang ngủ đêm), em không thể gọi Video bắt bạn thức dậy được. Em phải dùng giao tiếp 'Không đồng bộ' (như Email), để gửi đi và chờ sáng mai bạn ấy ngủ dậy sẽ trả lời."
      },
      {
        "id": 2,
        "question": "Bạn hãy cho biết cách sử dụng tính năng trò chuyện (Chat) trong tình huống nào sau đây là phù hợp nhất trong hội thảo trên Web (Webinar)?",
        "type": "single",
        "options": [
          "Chèn kiến thức để thêm vào bài thuyết trình",
          "Nhận xét về bài thuyết trình",
          "Đặt câu hỏi khi có thời gian thích hợp",
          "Bắt chuyện với đồng nghiệp"
        ],
        "correctAnswers": [
          "Đặt câu hỏi khi có thời gian thích hợp"
        ],
        "explanation": "Trong một buổi học trên Web (Webinar) có hàng trăm người tham gia, em không nên dùng hộp Chat để nói chuyện riêng hay ném những câu hỏi lộn xộn. Hãy đợi đến khi thầy giáo cho phép hỏi đáp (thời gian thích hợp) thì mới gửi câu hỏi lên nhé."
      },
      {
        "id": 3,
        "question": "Bạn hãy cho biết khi sử dụng tất cả chữ in hoa trong một thư điện tử (Email) sẽ truyền đạt điều gì?",
        "type": "single",
        "options": [
          "Nhấn mạnh",
          "Tầm quan trọng",
          "Khẩn cấp",
          "La hét"
        ],
        "correctAnswers": [
          "La hét"
        ],
        "explanation": "Trong thế giới mạng (Netiquette), việc gõ toàn bộ CHỮ IN HOA VÀO MẶT NGƯỜI KHÁC được hiểu là em đang nổi giận và La hét ầm ĩ. Hãy chỉ viết hoa chữ cái đầu câu cho lịch sự thôi nhé!"
      },
      {
        "id": 4,
        "question": "Một người dùng nhận được cuộc gọi điện thoại khi đang họp. Quy trình hành động tốt nhất mà người dùng thực hiện nếu họ phải thực hiện cuộc gọi là gì?",
        "type": "single",
        "options": [
          "Di chuyển cách xa những người khác 100–200 feet",
          "Rời khỏi phòng họp",
          "Trả lời điện thoại",
          "Di chuyển đến một góc của căn phòng"
        ],
        "correctAnswers": [
          "Rời khỏi phòng họp"
        ],
        "explanation": "Phép lịch sự tối thiểu là không làm ồn ảnh hưởng đến người khác. Nếu có cuộc gọi gấp, em hãy cúi đầu xin lỗi nhẹ nhàng, sau đó bước hẳn ra bên ngoài (Rời khỏi phòng họp) rồi mới nghe điện thoại."
      },
      {
        "id": 5,
        "question": "Bạn hãy cho biết, nếu một người dùng muốn gửi tin nhắn tức thời cho đồng nghiệp, nhưng trạng thái tài khoản của đồng nghiệp đang không khả dụng (Unavailable) thì cách nào sau đây là tốt nhất để người dùng có thể sử dụng?",
        "type": "single",
        "options": [
          "Chờ cho đến khi tài khoản của đồng nghiệp khả dụng",
          "Cứ gửi tin nhắn",
          "Gọi điện cho đồng nghiệp",
          "Email cho đồng nghiệp"
        ],
        "correctAnswers": [
          "Email cho đồng nghiệp"
        ],
        "explanation": "Khi bạn để trạng thái 'Không khả dụng' (Unavailable) nghĩa là bạn đang bận việc hoặc không có mặt ở máy tính. Lúc này, tốt nhất là em nên gửi một Email. Bạn sẽ đọc nó khi nào bạn quay lại làm việc."
      },
      {
        "id": 6,
        "question": "Khi cần gửi một thư điện tử (Email) đến một hoặc nhiều người nhận, nhưng họ không phải là người nhận chính và đồng thời danh sách những người nhận này cũng cần được công khai với tất cả người nhận khác. Theo bạn thì những người nhận này cần được thêm vào trường nào sau đây?",
        "type": "single",
        "options": [
          "Bc",
          "To",
          "Cc",
          "Bcc"
        ],
        "correctAnswers": [
          "Cc"
        ],
        "explanation": "'Cc' (Carbon Copy) là gửi thêm một bản sao. Những người trong danh sách Cc không phải là người giải quyết việc chính, họ chỉ được nhận thư để 'biết thông tin', và tất cả mọi người đều có thể nhìn thấy tên của nhau."
      },
      {
        "id": 7,
        "question": "Người dùng muốn xem các câu hỏi và câu trả lời phổ biến về Microsoft Outlook. Tùy chọn nào sau đây là phù hợp nhất để giúp người dùng có thể xem các câu hỏi và câu trả lời?",
        "type": "single",
        "options": [
          "Community forum",
          "Help",
          "What's New?",
          "Tell me"
        ],
        "correctAnswers": [
          "Community forum"
        ],
        "explanation": "Diễn đàn cộng đồng (Community forum) là nơi tập trung hàng ngàn câu hỏi và câu trả lời phổ biến nhất từ những người sử dụng Outlook giống như em. Em có thể lên đó để tìm xem có ai gặp lỗi giống mình không nhé."
      },
      {
        "id": 8,
        "question": "Bạn muốn gửi Email cho một người nào đó, nhưng bạn muốn gửi một cách riêng tư để những người nhận Email khác không nhìn thấy địa chỉ Email của người này.Vậy theo bạn nên nhập địa chỉ Email của người này vào trường nào dưới đây?",
        "type": "single",
        "options": [
          "Cc",
          "Bcc",
          "To",
          "Bc"
        ],
        "correctAnswers": [
          "Bcc"
        ],
        "explanation": "Lại là 'Bcc' (Bản sao mù)! Chỉ cần nhét tên người đó vào ô Bcc, hệ thống sẽ khoác cho họ một chiếc áo tàng hình. Không một ai trong nhóm nhận thư có thể biết là người đó cũng đang đọc bức thư này."
      },
      {
        "id": 9,
        "question": "Bạn hãy cho biết, bạn nên làm gì trước khi bắt đầu một cuộc hội thoại bằng loa ngoài?",
        "type": "single",
        "options": [
          "Xin phép để tiếp tục cuộc trò chuyện trên loa ngoài",
          "Yêu cầu đầu dây bên kia nói để kiểm tra âm lượng",
          "Bật loa điện thoại và bắt đầu nói chuyện",
          "Kiểm tra âm lượng trên thiết bị liên lạc đầu ra"
        ],
        "correctAnswers": [
          "Xin phép để tiếp tục cuộc trò chuyện trên loa ngoài"
        ],
        "explanation": "Bật loa ngoài nghĩa là tất cả mọi người xung quanh em đều sẽ nghe thấy đầu dây bên kia nói gì. Vì lý do bảo mật và lịch sự, em bắt buộc phải hỏi 'Xin phép bạn cho mình bật loa ngoài nhé?' trước khi làm vậy."
      },
      {
        "id": 10,
        "question": "Bạn hãy cho biết, hai điều nào sau đây là quan trọng nhất cần tuân theo khi chuẩn bị trình bày tại hội nghị truyền hình? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Kiểm tra micro và loa",
          "Dự đoán các câu hỏi có thể có của khán giả",
          "Chuẩn bị một chương trình các hoạt động theo thứ tự cho hội nghị",
          "Tìm một vị trí để thuyết trình sao cho chuyên nghiệp, có thể ở bên ngoài nhà của bạn"
        ],
        "correctAnswers": [
          "Kiểm tra micro và loa",
          "Chuẩn bị một chương trình các hoạt động theo thứ tự cho hội nghị"
        ],
        "explanation": "Trước khi bắt đầu cuộc họp trực tuyến, em bắt buộc phải kiểm tra thiết bị âm thanh (Micro và Loa) xem có hoạt động tốt không. Đồng thời em phải lên lịch trình rõ ràng (chương trình các hoạt động) để mọi người biết cuộc họp sẽ diễn ra những gì."
      },
      {
        "id": 11,
        "question": "Bạn hãy cho biết ứng dụng nào có thể tổ chức cả cuộc họp âm thanh và Video?",
        "type": "single",
        "options": [
          "Box",
          "Dropbox",
          "Yammer",
          "Microsoft Teams"
        ],
        "correctAnswers": [
          "Microsoft Teams"
        ],
        "explanation": "Microsoft Teams là lớp học ảo trực tuyến, nơi thầy cô và các bạn có thể nhìn thấy mặt nhau (Video) và nghe giọng nói của nhau (Âm thanh). Box, Yammer hay Dropbox không có chức năng gọi video nhóm."
      },
      {
        "id": 12,
        "question": "Thời gian tối đa được coi là thời gian cần thiết để trả lời Email trong một môi trường chuyên nghiệp là bao nhiêu?",
        "type": "single",
        "options": [
          "15 phút",
          "30 phút",
          "24 giờ",
          "48 giờ"
        ],
        "correctAnswers": [
          "24 giờ"
        ],
        "explanation": "Trong môi trường làm việc chuyên nghiệp, quy tắc lịch sự là em phải trả lời Email của người khác trong vòng 1 ngày (24 giờ). Nếu để quá lâu, họ sẽ nghĩ là em bỏ quên hoặc không tôn trọng họ."
      },
      {
        "id": 13,
        "question": "Bạn hãy cho biết dịch vụ nào sau đây có thể phát trực tuyến Video? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Amazon Prime",
          "Spotify",
          "Disney+",
          "Sirius"
        ],
        "correctAnswers": [
          "Amazon Prime",
          "Disney+"
        ],
        "explanation": "Amazon Prime và Disney+ là hai 'rạp chiếu phim thu nhỏ' trên mạng, giúp em xem phim hoạt hình và video trực tuyến. Còn Spotify và Sirius thì chỉ dùng để nghe nhạc và đài phát thanh (âm thanh) thôi nhé."
      },
      {
        "id": 14,
        "question": "Hai hình thức giao tiếp nào phù hợp nhất cho những thông điệp ngắn gọn? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Tin nhắn văn bản (SMS)",
          "Email",
          "Tin nhắn tức thời (IM)",
          "Hội nghị truyền hình (Video Conferencing)"
        ],
        "correctAnswers": [
          "Tin nhắn văn bản (SMS)",
          "Tin nhắn tức thời (IM)"
        ],
        "explanation": "Khi em chỉ muốn gửi những thông điệp thật nhanh và ngắn (như: 'Mẹ ơi ra mở cửa cho con'), em nên dùng Tin nhắn điện thoại (SMS) hoặc Nhắn tin mạng (IM như Zalo, Messenger). Còn Email thì dùng để viết thư dài."
      },
      {
        "id": 15,
        "question": "Bạn hãy chọn hai phát biểu đúng khi lựa chọn địa điểm tổ chức hội nghị truyền hình? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Địa điểm nên có chỗ ngồi nơi có ánh sáng tốt",
          "Địa điểm nên tránh xa các thiết bị di động",
          "Địa điểm luôn phải ở trong một tòa nhà chuyên nghiệp",
          "Địa điểm nên cố gắng tìm một khu vực có ít hoặc không có tiếng ồn xung quanh"
        ],
        "correctAnswers": [
          "Địa điểm nên có chỗ ngồi nơi có ánh sáng tốt",
          "Địa điểm nên cố gắng tìm một khu vực có ít hoặc không có tiếng ồn xung quanh"
        ],
        "explanation": "Để buổi họp Video diễn ra tốt đẹp, em cần chọn một căn phòng thật yên tĩnh (không có tiếng ồn), và nhớ bật đủ đèn (ánh sáng tốt) để camera có thể quay khuôn mặt em thật rõ nét nhé."
      },
      {
        "id": 16,
        "question": "Bạn hãy cho biết hai tùy chọn nào sau đây là nhà cung cấp phát nhạc trực tuyến? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Vevo",
          "Netflix",
          "Spotify",
          "Hulu"
        ],
        "correctAnswers": [
          "Vevo",
          "Spotify"
        ],
        "explanation": "Spotify là kho nhạc khổng lồ trên mạng, còn Vevo là kênh chuyên phát các Video âm nhạc (MV) của các ca sĩ nổi tiếng. Cả hai đều được coi là nhà cung cấp âm nhạc trực tuyến."
      }
    ]
  },
  {
    "id": "c6-t10",
    "title": "Chủ đề 6 - Bài Test 10",
    "topic": "Chủ đề 6",
    "questions": [
      {
        "id": 1,
        "question": "Bạn có thể sử dụng tất cả các công cụ sau cho mục đích gì? Google Docs; Google Meet; Microsoft Teams; Dropbox",
        "type": "single",
        "options": [
          "Tạo nội dung",
          "Trò chuyện bằng Video",
          "Lưu trữ tập tin",
          "Cộng tác"
        ],
        "correctAnswers": [
          "Cộng tác"
        ],
        "explanation": "Tất cả các phần mềm nổi tiếng như Google Docs, Meet hay Dropbox đều có một mục đích chung lớn nhất là 'Cộng tác' (làm việc nhóm). Chúng giúp mọi người dù ở xa nhau vẫn có thể cùng vẽ chung một bức tranh hay cùng viết chung một bài báo cáo."
      },
      {
        "id": 2,
        "question": "Bạn dự định tham dự hội thảo trực tuyến về các quy tắc an toàn cần thiết cho sinh viên khi sử dụng phòng thí nghiệm khoa học của trường. Bạn sẽ tham gia hội thảo trực tuyến bằng máy tính xách tay của mình. Bạn cần thể hiện sự tôn trọng và lịch sự với người trình bày và những người tham gia khác trong hội thảo trực tuyến. Đâu là ba hành động bạn cần thực hiện để đạt được mục tiêu này? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Đăng nhập sớm để đảm bảo ứng dụng hội thảo trực tuyến hoạt động tốt.",
          "Bày tỏ ý kiến phản biện về nội dung trong khu vực trò chuyện công khai.",
          "Mở các tab trình duyệt khác để có thể thực hiện hành động nhằm các mục đích khác.",
          "Chuẩn bị sẵn điện thoại di động để nhắn tin với những người tham gia khác.",
          "Luôn bật camera để người thuyết trình biết ai đang tham dự.",
          "Tắt mic, trừ khi người thuyết trình yêu cầu bạn phát biểu."
        ],
        "correctAnswers": [
          "Đăng nhập sớm để đảm bảo ứng dụng hội thảo trực tuyến hoạt động tốt.",
          "Luôn bật camera để người thuyết trình biết ai đang tham dự.",
          "Tắt mic, trừ khi người thuyết trình yêu cầu bạn phát biểu."
        ],
        "explanation": "Phép lịch sự trong lớp học Online là em phải vào lớp sớm để thử xem máy tính có trục trặc gì không (Đăng nhập sớm), luôn bật camera để thầy giáo nhìn thấy khuôn mặt mình, và phải tắt micro để không làm ồn lớp khi chưa được gọi tên."
      },
      {
        "id": 3,
        "question": "Hai mục nào là cần thiết để đồng tác giả một tài liệu? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Giấy phép đồng tác giả",
          "Tài liệu thân thiện cho cộng tác",
          "Phần mềm của bên thứ ba",
          "Khu vực lưu trữ dùng chung"
        ],
        "correctAnswers": [
          "Tài liệu thân thiện cho cộng tác",
          "Khu vực lưu trữ dùng chung"
        ],
        "explanation": "Để 2 bạn có thể cùng nhau đánh máy trên một bài văn (Đồng tác giả), em cần một nơi để cất giữ bài văn đó cho cả hai cùng vào được (Khu vực lưu trữ dùng chung như Đám mây OneDrive), và tập tin văn bản đó phải hỗ trợ tính năng làm việc nhóm."
      },
      {
        "id": 4,
        "question": "Ứng dụng nào là ví dụ về nền tảng cộng tác? (Chọn 2)",
        "type": "multiple",
        "options": [
          "GoToMeeting",
          "Office 365",
          "Slack",
          "Zoom"
        ],
        "correctAnswers": [
          "Office 365",
          "Slack"
        ],
        "explanation": "Nền tảng cộng tác là nơi cho phép em vừa nhắn tin trò chuyện, vừa gửi file tài liệu, lại vừa có thể cùng nhau chỉnh sửa tập tin. Slack và Office 365 có đầy đủ các 'món đồ chơi' đó."
      },
      {
        "id": 5,
        "question": "Bạn đang rà soát bản báo cáo do một người bạn cùng lớp viết bằng phương thức điện tử. Bạn nên sử dụng phương pháp nào trong tài liệu để đưa ra phản hồi mang tính xây dựng cho bạn học của mình?",
        "type": "single",
        "options": [
          "Hộp văn bản (Text boxes)",
          "Trích dẫn (Citations)",
          "Chú thích cuối trang (Footnotes)",
          "Chú thích (Comments)"
        ],
        "correctAnswers": [
          "Chú thích (Comments)"
        ],
        "explanation": "Hãy dùng chức năng 'Bình luận' (Comments) để dán những mẩu giấy ghi chú nho nhỏ bên cạnh bài văn của bạn. Việc này giúp bạn biết chỗ nào bị sai mà không sợ bị em sửa mất bài (như Track Changes làm thay đổi nội dung)."
      },
      {
        "id": 6,
        "question": "So sánh chỉnh sửa đồng bộ với chỉnh sửa không đồng bộ bằng cách trả lời các phát biểu sau.Đối với mỗi phát biểu về chỉnh sửa đồng bộ và không đồng bộ, hãy chọn Đúng nếu đó là một phát biểu đúng hoặc Sai nếu không phải là phát biểu đúng.",
        "type": "matching",
        "options": [
          {
            "text": "Chỉnh sửa đồng bộ tốt hơn chỉnh sửa không đồng bộ.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Chỉnh sửa đồng bộ xảy ra khi những người tham gia làm việc cùng nhau tại cùng một thời điểm, trong thời gian thực.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Chỉnh sửa không đồng bộ xảy ra khi những người tham gia cộng tác vào những thời điểm khác nhau.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "'Đồng bộ' là em và bạn hẹn nhau đúng 8 giờ tối cùng mở máy tính lên làm chung (thời gian thực). Còn 'Không đồng bộ' là em làm buổi sáng, chiều bạn rảnh bạn mới vào làm tiếp. Không có cái nào tốt hơn cái nào, chỉ là do lúc đó các em rảnh hay bận thôi!"
      },
      {
        "id": 7,
        "question": "Bạn và bạn cùng lớp đang đọc các tài liệu kỹ thuật số được chia sẻ của nhau. Tài liệu bạn đang đọc được viết bài bản, nhưng bạn nhận thấy một lỗi sai so với thực tế. Bạn cần lịch sự chỉ ra lỗi sai cho tác giả bằng một chú thích trong tài liệu.\r\nBạn nên thực hiện hai hành động nào? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Viết phần sửa chữa bằng chữ in hoa để đảm bảo rằng tác giả sẽ nhìn thấy.",
          "Chỉ ra lỗi mà không cần giải thích.",
          "Cung cấp thông tin chính xác trong chú thích của bạn, nếu có.",
          "Giữ thái độ tích cực khi đưa ra nhận xét."
        ],
        "correctAnswers": [
          "Cung cấp thông tin chính xác trong chú thích của bạn, nếu có.",
          "Giữ thái độ tích cực khi đưa ra nhận xét."
        ],
        "explanation": "Khi góp ý lỗi sai cho người khác, em tuyệt đối không viết CHỮ IN HOA (vì như vậy là quát mắng). Hãy giữ một thái độ vui vẻ, tích cực, và chỉ ra lỗi sai kèm theo lời giải thích hoặc cách sửa lại cho đúng nhé."
      },
      {
        "id": 8,
        "question": "Bạn đang chuẩn bị tài liệu đề xuất dự án với đối tác ở một tỉnh thành khác trong nước, rất xa bạn. Khi bạn và đối tác thêm nội dung vào tài liệu, cả hai cần phải cộng tác để sửa đổi đề xuất này.Cần thực hiện các hành động theo trình tự nào?Để trả lời, bạn hãy sắp xếp các hành động theo đúng thứ tự.",
        "type": "matching",
        "options": [
          {
            "text": "Xem xét và chấp nhận hoặc từ chối chú thích và thay đổi.",
            "choices": [
              "3",
              "1",
              "5",
              "2",
              "4"
            ]
          },
          {
            "text": "Tạo tài liệu mới.",
            "choices": [
              "3",
              "1",
              "5",
              "2",
              "4"
            ]
          },
          {
            "text": "Tải tài liệu lên bộ nhớ đám mây.",
            "choices": [
              "3",
              "1",
              "5",
              "2",
              "4"
            ]
          },
          {
            "text": "Thêm chú thích và theo dõi các thay đổi trong tài liệu.",
            "choices": [
              "3",
              "1",
              "5",
              "2",
              "4"
            ]
          },
          {
            "text": "Chia sẻ liên kết đến tài liệu.",
            "choices": [
              "3",
              "1",
              "5",
              "2",
              "4"
            ]
          }
        ],
        "correctAnswers": {
          "0": "5",
          "1": "1",
          "2": "2",
          "3": "4",
          "4": "3"
        },
        "explanation": "Để làm việc chung với bạn ở xa: Trước tiên em tạo tập tin trên máy (1), đẩy nó lên mạng Đám mây (2), gửi đường Link cho bạn (3). Sau đó bạn ấy vào xem và ghi chú lại các chỗ cần sửa (4). Cuối cùng em mở ra đọc và chốt xem có đồng ý sửa không (5)."
      },
      {
        "id": 9,
        "question": "Bạn hãy cho biết điều nào sau đây là đúng về kỹ thuật Co-authoring? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Tính năng Coauthors phải được cấp quyền truy cập vào tài liệu mà họ sẽ làm việc",
          "Tính năng Coauthors trong một trang tính của Google là ẩn danh",
          "Tính năng Co-authoring khả dụng với các tài liệu trong SharePoint",
          "Tính năng Coauthoring khả dụng với các tài liệu được lưu trên ổ cứng cục bộ"
        ],
        "correctAnswers": [
          "Tính năng Coauthors phải được cấp quyền truy cập vào tài liệu mà họ sẽ làm việc",
          "Tính năng Co-authoring khả dụng với các tài liệu trong SharePoint"
        ],
        "explanation": "Để tính năng 'Đồng tác giả' hoạt động, tập tin phải được cất trên mạng dùng chung của công ty (như SharePoint) chứ không thể nằm chết trong ổ cứng máy tính của em được. Và em phải cấp quyền (mở cửa) thì bạn bè mới được phép vào sửa chung nhé."
      },
      {
        "id": 10,
        "question": "Có rất nhiều lợi ích khi cộng tác nhóm. Đối với mỗi phát biểu về sự cộng tác, hãy chọn Đúng nếu đó là một lợi ích hoặc Sai nếu không phải.",
        "type": "matching",
        "options": [
          {
            "text": "Phạm vi địa lý lớn hơn",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Tăng khả năng học tập",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Tăng khả năng sáng tạo và tư duy vượt trội",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Làm giảm năng suất của nhân viên",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Đúng",
          "3": "Sai"
        },
        "explanation": "Làm việc nhóm trên mạng giúp em kết nối được với bạn bè ở khắp nơi trên thế giới (Phạm vi địa lý). Hai cái đầu luôn thông minh hơn một cái đầu, nên sẽ giúp tăng sự sáng tạo. Tuyệt đối không có chuyện làm việc nhóm khiến em lười biếng hay giảm năng suất đâu!"
      },
      {
        "id": 11,
        "question": "Bạn hãy cho biết kiểu chỉnh sửa nào không được thực hiện trong thời gian thực giữa hai người?",
        "type": "single",
        "options": [
          "Đồng bộ (Synchronous)",
          "Đồng thời (Simultaneous)",
          "So le (Staggered)",
          "Không đồng bộ (Asynchronous)"
        ],
        "correctAnswers": [
          "Không đồng bộ (Asynchronous)"
        ],
        "explanation": "Giống như chơi cờ tướng qua thư tay: em đánh 1 nước, gửi thư đi, vài ngày sau đối thủ mới đánh lại. Chỉnh sửa 'Không đồng bộ' nghĩa là hai người không ngồi làm cùng một lúc với nhau."
      },
      {
        "id": 12,
        "question": "Bạn hãy cho biết hai lợi ích khi cộng tác kỹ thuật số là gì? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Người dùng có thể làm việc riêng trên các phần của tập tin",
          "Người dùng có thể tìm hiểu các công cụ cộng tác khác nhau",
          "Mất ít thời gian di chuyển đến các cuộc họp",
          "Nhiều người dùng có thể làm việc trên cùng một tập tin"
        ],
        "correctAnswers": [
          "Mất ít thời gian di chuyển đến các cuộc họp",
          "Nhiều người dùng có thể làm việc trên cùng một tập tin"
        ],
        "explanation": "Nhờ có mạng Internet, em không cần phải đạp xe lóc cóc chạy qua nhà bạn để họp nhóm (đỡ tốn thời gian di chuyển). Và điều tuyệt vời nhất là 5-6 bạn đều có thể xúm vào gõ phím trên cùng một văn bản lúc nào cũng được."
      },
      {
        "id": 13,
        "question": "Bạn hãy cho biết công cụ nào sau đây là công cụ cộng tác? (Chọn 3)",
        "type": "multiple",
        "options": [
          "OneDrive",
          "Creative Cloud",
          "Box",
          "Bridge",
          "Google Docs"
        ],
        "correctAnswers": [
          "OneDrive",
          "Box",
          "Google Docs"
        ],
        "explanation": "OneDrive và Box là những 'đám mây' khổng lồ giúp nhóm em cất giữ tài liệu dùng chung. Còn Google Docs là tờ giấy ma thuật trên mạng, nơi cả nhóm có thể nhảy vào cùng nhau đánh máy và sửa lỗi."
      },
      {
        "id": 14,
        "question": "Bạn hãy cho biết, phát biểu sau đây là đúng hay sai:“Dropbox là một trong nhiều công cụ cộng tác.”",
        "type": "single",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswers": [
          "Đúng"
        ],
        "explanation": "Rất đúng! Dropbox nổi tiếng là chiếc hộp thần kỳ trên mạng (đám mây). Em bỏ đồ vào chiếc hộp đó thì những người bạn khác của em (dù ở nhà của họ) cũng có thể mở hộp ra và lấy đồ được."
      },
      {
        "id": 15,
        "question": "Hai lợi ích của việc cộng tác làm việc là gì? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Phát triển các mối quan hệ nhân sinh giữa đồng nghiệp.",
          "Triển khai phong cách làm việc thống nhất cho tất cả các thành viên trong nhóm.",
          "Thúc đẩy sự hiểu biết đầy đủ hơn về chủ đề.",
          "Không bị ảnh hưởng bởi việc một thành viên trong nhóm không làm được việc."
        ],
        "correctAnswers": [
          "Phát triển các mối quan hệ nhân sinh giữa đồng nghiệp.",
          "Thúc đẩy sự hiểu biết đầy đủ hơn về chủ đề."
        ],
        "explanation": "Khi làm chung một dự án, các bạn trong nhóm sẽ phải nói chuyện với nhau nhiều hơn (phát triển mối quan hệ tình bạn). Đồng thời, mỗi bạn góp một ý kiến sẽ giúp bức tranh kiến thức của cả nhóm trở nên đầy đủ và phong phú hơn rất nhiều."
      },
      {
        "id": 16,
        "question": "Khi đặt câu hỏi trong hội thảo trên Web (Webinar), các cá nhân không cần xác định họ là ai vì tên của họ rất có thể xuất hiện trên màn hình hội thảo.",
        "type": "single",
        "options": [
          "Sai",
          "Đúng"
        ],
        "correctAnswers": [
          "Sai"
        ],
        "explanation": "Trong một buổi học có hàng trăm người lạ, dù hệ thống có hiện tên em bé tí ở góc, em vẫn nên phép lịch sự giới thiệu ngắn gọn: 'Chào thầy, em là Huy ở lớp 6A, em muốn hỏi...' để mọi người biết em là ai nhé (Sai)."
      },
      {
        "id": 17,
        "question": "Bạn hãy cho biết kiểu chỉnh sửa nào sau đây cũng được biết đến như là hợp tác tác đồng tác giả (Coauthoring)?",
        "type": "single",
        "options": [
          "Không đồng bộ (Asynchronous)",
          "So le (Staggered)",
          "Đồng bộ (Synchronous)",
          "Đồng thời (Simultaneous)"
        ],
        "correctAnswers": [
          "Đồng bộ (Synchronous)"
        ],
        "explanation": "Thuật ngữ 'Đồng tác giả' (Co-authoring) nghĩa là em và bạn đang ngồi ở 2 máy tính khác nhau nhưng cùng lúc thấy con trỏ chuột của nhau đang chạy vòng vòng trên văn bản. Nó gọi là làm việc 'Đồng bộ' (cùng một thời điểm)."
      },
      {
        "id": 18,
        "question": "Nối các công cụ cộng tác kỹ thuật số thích hợp với mô tả tương ứng.",
        "type": "matching",
        "options": [
          {
            "text": "Cộng tác viên có thể đồng thời đóng góp, xem xét và chỉnh sửa thông tin trực quan bằng cách viết, vẽ và chèn hình ảnh.",
            "choices": [
              "Chia sẻ tập tin trên nền tảng đám mây",
              "Hội thảo trực tuyến",
              "Bảng trắng trực tuyến"
            ]
          },
          {
            "text": "Cộng tác viên có thể chỉnh sửa tập tin cùng một lúc và tự động lưu các thay đổi.",
            "choices": [
              "Chia sẻ tập tin trên nền tảng đám mây",
              "Hội thảo trực tuyến",
              "Bảng trắng trực tuyến"
            ]
          },
          {
            "text": "Cộng tác viên tham gia vào các hoạt động học tập và chia sẻ ngay lập tức các phản ứng, diễn giải và áp dụng các ý tưởng đã trình bày.",
            "choices": [
              "Chia sẻ tập tin trên nền tảng đám mây",
              "Hội thảo trực tuyến",
              "Bảng trắng trực tuyến"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Bảng trắng trực tuyến",
          "1": "Chia sẻ tập tin trên nền tảng đám mây",
          "2": "Hội thảo trực tuyến"
        },
        "explanation": "Bảng trắng (Whiteboard) dùng để vẽ vời các mũi tên và hình ảnh minh họa. Hội thảo trực tuyến (Video Call) dùng để vỗ tay, nói chuyện ngay lập tức. Còn Đám mây (Cloud) là để em cất giữ và chỉnh sửa chung các tập tin tài liệu tự động lưu."
      },
      {
        "id": 19,
        "question": "Trong quá trình cộng tác, việc các thành viên tương tác với nhau ở những vùng địa lý cách xa nhau như 2 quốc gia, 2 tiểu bang khác múi giờ dẫn đến việc khó khăn trong giao tiếp đồng bộ. Trong trường hợp này, giao tiếp kỹ thuật số không đồng bộ là thích hợp nhất.",
        "type": "multiple",
        "options": [
          "Video Conference",
          "Email",
          "Text Messaging",
          "Phone Call"
        ],
        "correctAnswers": [
          "Email",
          "Text Messaging"
        ],
        "explanation": "(Giống Bài Test 9) Khi hai quốc gia bị lệch múi giờ (người đang thức, người đang ngủ), em không thể gọi Video hay Gọi điện thoại bắt họ dậy được. Hãy nhẹ nhàng gửi cho họ một Email hoặc Tin nhắn để họ đọc khi rảnh nhé."
      },
      {
        "id": 20,
        "question": "Phát biểu nào là đúng về tổ chức hội thảo trên Web (Webinar)? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Người thuyết trình phải cảm thấy thoải mái với phần mềm được sử dụng cho bài trình chiếu",
          "Bài trình chiếu nên có các slide chi tiết",
          "Micrô và loa phải luôn được kiểm tra",
          "Khán giả hoàn toàn có quyền tự do đặt câu hỏi"
        ],
        "correctAnswers": [
          "Người thuyết trình phải cảm thấy thoải mái với phần mềm được sử dụng cho bài trình chiếu",
          "Micrô và loa phải luôn được kiểm tra"
        ],
        "explanation": "Là người dẫn chương trình (chủ tọa), em phải tập sử dụng thật quen tay phần mềm đó để không bị lúng túng lúc đang phát sóng (Cảm thấy thoải mái). Và dĩ nhiên, Micro để nói và Loa để nghe là 2 thứ bắt buộc phải được thử giọng đầu tiên!"
      }
    ]
  },
  {
    "id": "c7-t11",
    "title": "Chủ đề 7 - Bài Test 11",
    "topic": "Chủ đề 7",
    "questions": [
      {
        "id": 1,
        "question": "Nên đặt màn hình ở đâu để tránh mỏi mắt khi gõ phím?",
        "type": "single",
        "options": [
          "Cách nửa sải tay",
          "Cách xa hai sải tay",
          "Cách một bước chân",
          "Cách một sải tay"
        ],
        "correctAnswers": [
          "Cách một sải tay"
        ],
        "explanation": "Khoảng cách hoàn hảo từ mắt em đến màn hình máy tính là đúng bằng một sải tay (chiều dài cánh tay). Nếu để quá gần (nửa sải tay) mắt sẽ bị chói, còn nếu để quá xa em sẽ phải nheo mắt lại mới đọc được chữ."
      },
      {
        "id": 2,
        "question": "Cánh tay của một người nên đặt ở góc độ nào khi gõ bàn phím?",
        "type": "single",
        "options": [
          "60 độ",
          "90 độ",
          "75 độ",
          "30 độ"
        ],
        "correctAnswers": [
          "90 độ"
        ],
        "explanation": "Khi gõ máy tính, em nên thả lỏng vai và gập khuỷu tay lại thành một góc vuông 90 độ (giống như hình chữ L). Tư thế này giúp máu lưu thông tốt và tay em không bị mỏi khi làm việc lâu."
      },
      {
        "id": 3,
        "question": "Cổ tay của một người nên được đặt như thế nào khi đánh máy để tránh hội chứng ống cổ tay?",
        "type": "single",
        "options": [
          "Đặt trên bàn",
          "Đặt thẳng",
          "Ở một góc 45 độ",
          "Đặt trên bàn phím"
        ],
        "correctAnswers": [
          "Đặt thẳng"
        ],
        "explanation": "Cổ tay của em phải luôn được 'Đặt thẳng' song song với bàn phím, giống như một tư thế đánh đàn piano vậy. Đừng bẻ gập cổ tay hay tì nặng lên mặt bàn vì nó sẽ làm kẹt các dây thần kinh gây đau nhức."
      },
      {
        "id": 4,
        "question": "Những yếu tố nào được coi là tác động tiêu cực của FOMO? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Sự mất mát (Loss)",
          "Trầm cảm (Depression)",
          "Tài chính (Finances)",
          "Sự cô đơn (Loneliness)"
        ],
        "correctAnswers": [
          "Trầm cảm (Depression)",
          "Sự cô đơn (Loneliness)"
        ],
        "explanation": "Hội chứng sợ bị bỏ lỡ (FOMO) khiến em lúc nào cũng dán mắt vào mạng xã hội và thấy buồn bã vì nghĩ rằng mọi người đang đi chơi vui vẻ mà không rủ mình. Lâu ngày, nó sẽ dẫn đến Cảm giác cô đơn và Trầm cảm."
      },
      {
        "id": 5,
        "question": "Bryce đang bị lo lắng và trầm cảm do hội chứng sợ bỏ lỡ (FOMO). Tùy chọn nào sau đây là triệu chứng hoặc ảnh hưởng của hội chứng (FOMO) (Chọn 2)",
        "type": "multiple",
        "options": [
          "Anh ấy lo lắng khi thuyết trình trước lớp.",
          "Mỗi khi thích thú một hoạt động nào đó, anh ấy phải ngay lập tức cập nhật trạng thái của mình lên mạng.",
          "Anh ấy lo lắng rằng điểm số của mình sẽ bị ảnh hưởng nếu anh ấy không hoàn thành bài tập về nhà.",
          "Anh ấy cần hiểu tất cả những trò đùa mà bạn bè của anh ấy đăng trên mạng xã hội."
        ],
        "correctAnswers": [
          "Mỗi khi thích thú một hoạt động nào đó, anh ấy phải ngay lập tức cập nhật trạng thái của mình lên mạng.",
          "Anh ấy cần hiểu tất cả những trò đùa mà bạn bè của anh ấy đăng trên mạng xã hội."
        ],
        "explanation": "Người bị FOMO luôn có cảm giác sợ bị 'tối cổ'. Nên hễ có chuyện vui là họ phải khoe lên mạng ngay, và luôn cố gắng đọc hết mọi tin tức, hiểu mọi câu nói đùa trên mạng để chứng tỏ mình bắt kịp xu hướng với bạn bè."
      },
      {
        "id": 6,
        "question": "Đâu là hai ví dụ về hội chứng FOMO (sợ bỏ lỡ)? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Mua trước một bảng điều khiển trò chơi mới để đảm bảo rằng bạn không phải là người duy nhất không có khi sản phẩm được phát hành",
          "Đe dọa chia sẻ những bức ảnh đáng xấu hổ nhằm kiểm soát hoặc tống tiền ai đó.",
          "Bạn lo lắng khi phát hiện ra bạn bè của mình đang vui vẻ trên mạng xã hội mà không có bạn.",
          "Gửi Virus, phần mềm gián điệp hoặc chương trình xâm nhập cho ai đó để theo dõi họ."
        ],
        "correctAnswers": [
          "Mua trước một bảng điều khiển trò chơi mới để đảm bảo rằng bạn không phải là người duy nhất không có khi sản phẩm được phát hành",
          "Bạn lo lắng khi phát hiện ra bạn bè của mình đang vui vẻ trên mạng xã hội mà không có bạn."
        ],
        "explanation": "Ví dụ rõ nhất của FOMO là em vòi vĩnh xin tiền bố mẹ mua đồ chơi mới chỉ vì sợ 'thua kém bạn bè', hoặc em luôn cảm thấy bực tức, buồn bã khi thấy bạn bè đi ăn đi chơi mà không rủ mình."
      },
      {
        "id": 7,
        "question": "Bạn bè của bạn đang trêu chọc bạn. Họ nói rằng bạn có tất cả các triệu chứng của FOMO. Đối với mỗi tuyên bố về FOMO, hãy chọn Đúng nếu phát biểu là đúng hoặc Sai nếu phát biểu sai.",
        "type": "matching",
        "options": [
          {
            "text": "FOMO là một chứng rối loạn do đeo khẩu trang trong khi sử dụng mạng xã hội.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "FOMO là \"Cảm giác bỏ lỡ\".",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Mặc dù FOMO không được coi là một rối loạn sức khỏe tâm thần, nó được gây ra bởi một nhóm cảm xúc rất thực và mang lại những tác động thực sự.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "FOMO (Fear Of Missing Out) chính là Hội chứng Sợ bị bỏ lỡ các niềm vui hay tin tức hot. Nó hoàn toàn không liên quan gì đến việc... đeo khẩu trang y tế đâu nhé!"
      },
      {
        "id": 8,
        "question": "Một người mà bạn không biết kết bạn với bạn trên mạng xã hội và bắt đầu giao tiếp với bạn thông qua chức năng tin nhắn văn bản trên mạng xã hội.\r\nVới mỗi câu phát biểu, hãy chọn Đúng nếu đó là dấu hiệu cảnh báo lừa đảo công nghệ cao hoặc Sai nếu không phải.",
        "type": "matching",
        "options": [
          {
            "text": "Người đó có nhiều người theo dõi trên mạng xã hội.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Người đó yêu cầu bạn gửi tiền.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Người đó không muốn trò chuyện qua video.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "Lừa đảo qua mạng (Catfishing) là khi kẻ xấu lấy ảnh giả để kết bạn. Dấu hiệu lộ liễu nhất là họ liên tục tìm cách mượn tiền em, và luôn kiếm cớ từ chối Gọi Video vì sợ bị lộ khuôn mặt thật của họ."
      },
      {
        "id": 9,
        "question": "Cơ quan của bạn cung cấp cho bạn một chiếc ghế có thể điều chỉnh độ cao. Bạn cần điều chỉnh ghế của mình để giúp ngăn ngừa chấn thương do căng thẳng thường xuyên (RSI).\r\nHãy chọn Đúng nếu phát biểu đó giúp ngăn ngừa RSI hoặc Sai nếu không.",
        "type": "matching",
        "options": [
          {
            "text": "Đầu gối của bạn cao hơn hông.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Cánh tay của bạn tạo thành một góc 90 độ với khuỷu tay.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Bàn chân của bạn đặt phẳng trên sàn hoặc chỗ để chân.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "Để ngồi không bị đau lưng, bàn chân em phải chạm hẳn xuống sàn nhà (không được kiễng hay lơ lửng), khuỷu tay gập vuông góc 90 độ thoải mái. Tuyệt đối không ngồi xổm hay gác chân làm đầu gối cao hơn hông nhé."
      },
      {
        "id": 10,
        "question": "Với mỗi câu phát biểu về thanh toán kỹ thuật số, hãy chọn Đúng hoặc Sai.",
        "type": "matching",
        "options": [
          {
            "text": "Thẻ ghi nợ, thẻ tín dụng, thanh toán chuyển khoản qua ngân hàng và ví điện tử đều là các loại thanh toán kỹ thuật số.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Tiền mặt có thể được coi là một loại hình thanh toán kỹ thuật số.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Thanh toán kỹ thuật số diễn ra khi cả người thanh toán và người được thanh toán sử dụng các phương tiện điện tử để thực hiện và nhận thanh toán.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Đúng"
        },
        "explanation": "Thanh toán kỹ thuật số là khi em dùng điện thoại quét mã QR hoặc cà thẻ để mua đồ mà không cần dùng tiền giấy. Vậy nên 'Tiền mặt' chắc chắn không phải là thanh toán kỹ thuật số rồi!"
      },
      {
        "id": 11,
        "question": "Công việc của bạn đòi hỏi bạn phải làm việc với máy tính nhiều giờ mỗi ngày. Bạn lo lắng rằng bạn sẽ bị mỏi mắt. Đối với mỗi hành động, hãy chọn Đúng nếu hành động đó gây mỏi mắt hoặc Sai nếu không.",
        "type": "matching",
        "options": [
          {
            "text": "Làm việc trong phòng tối.",
            "choices": [
              "Mỏi mắt",
              "Không mỏi mắt"
            ]
          },
          {
            "text": "Thường xuyên thay đổi tiêu điểm của bạn từ màn hình máy tính sang một thứ gì đó cách xa bạn ít nhất sáu mét.",
            "choices": [
              "Mỏi mắt",
              "Không mỏi mắt"
            ]
          },
          {
            "text": "Thường xuyên chớp mắt.",
            "choices": [
              "Mỏi mắt",
              "Không mỏi mắt"
            ]
          },
          {
            "text": "Đặt màn hình sao cho cách bạn một khoảng bằng cánh tay và phần trên cùng của màn hình ngang tầm mắt của bạn.",
            "choices": [
              "Mỏi mắt",
              "Không mỏi mắt"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Mỏi mắt",
          "1": "Không mỏi mắt",
          "2": "Không mỏi mắt",
          "3": "Không mỏi mắt"
        },
        "explanation": "Làm việc trong phòng tối thui mà chỉ có ánh sáng rực rỡ từ màn hình máy tính chiếu vào mặt sẽ khiến mắt em làm việc quá sức và cực kỳ mỏi. Hãy luôn bật đủ đèn trong phòng nhé!"
      },
      {
        "id": 12,
        "question": "Giải thích khi nào thì việc chặn truy cập camera là thích hợp và cần thiết. Hãy chọn Đúng hoặc Sai với mỗi phát biểu sau đây:",
        "type": "matching",
        "options": [
          {
            "text": "Bạn là người tích cực tham gia một khóa học trực tuyến.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bất cứ lúc nào một ứng dụng yêu cầu quyền truy cập vào máy ảnh của bạn và không có lý do gì để cần nó.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bạn đang xem một cách thụ động một bài giảng trực tuyến với hàng trăm người xem khác.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "Nếu em tải trò chơi Đua xe mà nó đòi quyền Camera thì em phải chặn ngay (đua xe đâu cần chụp ảnh). Hoặc khi em xem ca nhạc có hàng ngàn người xem, em cũng nên tắt Camera để đỡ tốn mạng."
      },
      {
        "id": 13,
        "question": "Tùy chọn nào sau đây là ví dụ về catfishing? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Tạo một hồ sơ hư cấu trên một trang web hẹn hò.",
          "Giả làm người khác trên mạng xã hội.",
          "Lưu hành truyện cười và meme hài hước trực tuyến.",
          "Đưa người dùng vào một cuộc tranh cãi trên các trang web truyền thông xã hội."
        ],
        "correctAnswers": [
          "Tạo một hồ sơ hư cấu trên một trang web hẹn hò.",
          "Giả làm người khác trên mạng xã hội."
        ],
        "explanation": "Catfishing là trò lừa tình lừa tiền trên mạng. Kẻ xấu thường tải ảnh của các hotboy/hotgirl về, tạo một hồ sơ (tài khoản) giả mạo để đi kết bạn, lừa gạt tình cảm hoặc xin xỏ tiền bạc của người khác."
      },
      {
        "id": 14,
        "question": "Mối quan tâm bảo mật chính của mua hàng trong ứng dụng là gì?",
        "type": "single",
        "options": [
          "Hàng hóa sẽ không được vận chuyển đến đúng địa chỉ.",
          "Trẻ em có quyền sử dụng điện thoại thông minh.",
          "Các nhà phát triển ứng dụng ăn cắp thông tin thẻ tín dụng.",
          "Không có lo ngại về bảo mật."
        ],
        "correctAnswers": [
          "Trẻ em có quyền sử dụng điện thoại thông minh."
        ],
        "explanation": "Mua hàng trong ứng dụng (In-app purchase) rất nguy hiểm nếu đưa điện thoại cho trẻ nhỏ chơi game. Các bé chưa hiểu chuyện có thể bấm nhầm vào các rương báu trong game và làm thẻ ngân hàng của bố mẹ bị trừ sạch tiền."
      },
      {
        "id": 15,
        "question": "Một người nên tìm kiếm lời khuyên trước khi tham gia vào một thử thách trên Internet",
        "type": "single",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswers": [
          "Đúng"
        ],
        "explanation": "Tuyệt đối đúng! Có rất nhiều thử thách trên mạng (Trend Tiktok) cực kỳ nguy hiểm và gây hại cho sức khỏe. Em luôn phải hỏi ý kiến bố mẹ hoặc người lớn trước khi bắt chước làm theo bất cứ trò đùa nào trên Internet."
      },
      {
        "id": 16,
        "question": "Một người bị choáng ngợp bởi bắt nạt trên mạng có thể làm gì để chống lại tình hình? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Tìm kiếm sự trợ giúp từ một chuyên gia được đào tạo",
          "Báo cáo lạm dụng cho những người có thẩm quyền",
          "Phản ứng lại trên mạng",
          "Bỏ qua bắt nạt trên mạng"
        ],
        "correctAnswers": [
          "Tìm kiếm sự trợ giúp từ một chuyên gia được đào tạo",
          "Báo cáo lạm dụng cho những người có thẩm quyền"
        ],
        "explanation": "Khi bị trêu chọc hay đe dọa trên mạng, em tuyệt đối không nên chửi bới đánh nhau lại, cũng không được cắn răng chịu đựng. Hãy Báo cáo ngay cho bố mẹ, thầy cô giáo hoặc cảnh sát để được giúp đỡ."
      },
      {
        "id": 17,
        "question": "Quá trình giải mã (Encryption) sử dụng khóa cá nhân diễn ra dưới hình thức mã hóa nào?",
        "type": "single",
        "options": [
          "Symmetric",
          "Algorithmic",
          "Hashing",
          "Asymmetric"
        ],
        "correctAnswers": [
          "Asymmetric"
        ],
        "explanation": "'Asymmetric' là mã hóa Bất đối xứng (giống như cái ổ khóa và chìa khóa có hình dạng khác nhau). Người gửi dùng khóa công khai để khóa hộp lại, còn em có chiếc khóa cá nhân (Private Key) duy nhất để mở hộp ra."
      },
      {
        "id": 18,
        "question": "Câu nào đúng về tính năng Restrict Editing trong Microsoft Word? (Chọn 2)\r\n&nbsp;",
        "type": "multiple",
        "options": [
          "Định dạng có thể bị hạn chế đối với các kiểu cụ thể",
          "Việc chỉnh sửa có thể bị hạn chế đối với các khu vực cụ thể của tài liệu",
          "Toàn bộ tài liệu có thể được bảo vệ bằng mật khẩu",
          "Các giới hạn áp dụng cho tất cả người dùng tài liệu"
        ],
        "correctAnswers": [
          "Định dạng có thể bị hạn chế đối với các kiểu cụ thể",
          "Việc chỉnh sửa có thể bị hạn chế đối với các khu vực cụ thể của tài liệu"
        ],
        "explanation": "Chức năng Hạn chế chỉnh sửa rất thông minh. Em có thể khóa các định dạng (không cho đổi font chữ), hoặc dán băng dính khóa một nửa trang giấy, chỉ chừa lại đúng một ô trống cho bạn điền tên vào thôi."
      },
      {
        "id": 19,
        "question": "Các bước người ta có thể làm để chống lại cảm giác FOMO là gì? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Đọc thêm tin tức",
          "Trên mạng xã hội, ẩn những người khoe khoang nhiều",
          "Gặp gỡ trực tiếp với mọi người",
          "Dành nhiều thời gian hơn trên mạng xã hội"
        ],
        "correctAnswers": [
          "Trên mạng xã hội, ẩn những người khoe khoang nhiều",
          "Gặp gỡ trực tiếp với mọi người"
        ],
        "explanation": "Để không bị ghen tị (FOMO), em hãy thẳng tay bấm nút 'Ẩn' bớt những người khoe khoang đồ hiệu trên mạng. Đồng thời em hãy tắt máy tính, bước ra ngoài chơi thể thao và gặp mặt bạn bè trực tiếp nhé."
      },
      {
        "id": 20,
        "question": "Người dùng gặp một người trực tuyến đang cố gắng thiết lập mối quan hệ. Điều gì có thể xảy ra với người dùng?",
        "type": "single",
        "options": [
          "Phishing",
          "Baiting",
          "Social engineering",
          "Catfishing"
        ],
        "correctAnswers": [
          "Catfishing"
        ],
        "explanation": "Khi một người lạ trên mạng cứ liên tục nhắn tin khen ngợi, giả vờ làm quen để tạo mối quan hệ tình cảm, đó 99% là trò lừa đảo mạo danh (Catfishing) để trục lợi."
      },
      {
        "id": 21,
        "question": "Trong trình duyệt Google Chrome, vô hiệu hóa quyền truy cập vào máy ảnh trên thiết bị hiện tại",
        "type": "matching",
        "options": [
          {
            "text": "Chọn Tùy chỉnh và điều khiển dấu chấm lửng dọc của Google Chrome",
            "choices": [
              "6",
              "5",
              "2",
              "3",
              "1",
              "4"
            ]
          },
          {
            "text": "Chọn Settings",
            "choices": [
              "6",
              "5",
              "2",
              "3",
              "1",
              "4"
            ]
          },
          {
            "text": "Chọn biểu tượng On/Off cho Ask before accessing",
            "choices": [
              "6",
              "5",
              "2",
              "3",
              "1",
              "4"
            ]
          },
          {
            "text": "Chọn Site Settings",
            "choices": [
              "6",
              "5",
              "2",
              "3",
              "1",
              "4"
            ]
          },
          {
            "text": "Chọn Camera",
            "choices": [
              "6",
              "5",
              "2",
              "3",
              "1",
              "4"
            ]
          },
          {
            "text": "Chọn Privacy and security",
            "choices": [
              "6",
              "5",
              "2",
              "3",
              "1",
              "4"
            ]
          }
        ],
        "correctAnswers": {
          "0": "1",
          "1": "2",
          "2": "6",
          "3": "4",
          "4": "5",
          "5": "3"
        },
        "explanation": "Để tắt Camera trên trình duyệt Chrome: Đầu tiên bấm vào dấu 3 chấm -> Cài đặt (Settings) -> Chọn Quyền riêng tư (Privacy) -> Cài đặt trang web (Site Settings) -> Chọn Máy ảnh (Camera) -> và tắt công tắc đi."
      },
      {
        "id": 22,
        "question": "Kết quả cuối cùng của việc mã hóa văn bản là _____________.",
        "type": "single",
        "options": [
          "xáo trộn",
          "văn bản thô",
          "bản mã",
          "băm văn bản"
        ],
        "correctAnswers": [
          "bản mã"
        ],
        "explanation": "Khi em đem một bức thư bình thường (văn bản thô) cho vào cỗ máy mã hóa. Đầu ra sẽ là một đống ký tự lộn xộn không ai đọc được, đó được gọi là 'Bản mã' (Ciphertext)."
      },
      {
        "id": 23,
        "question": "Những phát biểu nào là đúng về công thái học phù hợp khi sử dụng bàn phím? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Bàn chân phải phẳng trên sàn",
          "Mắt phải nhìn các ngón tay khi gõ phím",
          "Màn hình phải cách hai cánh tay",
          "Các ngón tay nên hơi cong"
        ],
        "correctAnswers": [
          "Bàn chân phải phẳng trên sàn",
          "Các ngón tay nên hơi cong"
        ],
        "explanation": "Tư thế chuẩn 'chuẩn điểm 10' khi gõ máy tính: Bàn chân đặt bằng phẳng xuống mặt đất, các ngón tay phải hơi cong lên giống như em đang úp tay để cầm một quả bóng tennis nhỏ vậy."
      },
      {
        "id": 24,
        "question": "Bạn cần bảo vệ sự riêng tư và bảo mật của mình một cách thích hợp. Bạn nên tắt camera trên thiết bị trực tuyến của mình trong hai trường hợp nào? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Khi trao đổi tin nhắn với người thân ở xa",
          "Khi trò chuyện với những người chơi khác trong phiên chơi trò chơi trực tuyến công khai",
          "Khi tham gia một buổi học của lớp đào tạo từ xa",
          "Khi xem chuyến tham quan đại học ảo với hàng trăm người tham gia"
        ],
        "correctAnswers": [
          "Khi trò chuyện với những người chơi khác trong phiên chơi trò chơi trực tuyến công khai",
          "Khi xem chuyến tham quan đại học ảo với hàng trăm người tham gia"
        ],
        "explanation": "Vì sự an toàn, em tuyệt đối phải che Camera khi chơi game trực tuyến với người lạ trên mạng (để họ không nhìn thấy nhà em). Và khi xem hội thảo chung với hàng trăm người, em cũng nên tắt để bảo mật riêng tư."
      },
      {
        "id": 25,
        "question": "Với mỗi câu phát biểu về mã hóa tập tin, hãy chọn Đúng hoặc Sai.",
        "type": "matching",
        "options": [
          {
            "text": "Tất cả các tập tin trong bộ nhớ đám mây được mã hóa mặc định",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Bạn chỉ có thể mở tập tin được mã hóa trên máy tính đã mã hóa tập tin đó",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Mã hóa tập tin làm giảm tốc độ truy cập tập tin",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Sai",
          "2": "Đúng"
        },
        "explanation": "Máy tính sẽ mất thêm vài giây để 'dò chìa khóa' giải mã các tài liệu được khóa mã hóa, vì vậy nó làm giảm tốc độ truy cập một chút xíu (Đúng). Và em chỉ cần có chìa khóa thì ngồi ở máy nào cũng mở được chứ không nhất thiết phải là máy tính cũ (Sai)."
      },
      {
        "id": 26,
        "question": "Người dùng cố gắng mã hóa một thư mục trong Windows, nhưng tính năng mã hóa không khả dụng. Lý do thiếu tính năng này là gì?",
        "type": "single",
        "options": [
          "Ổ đĩa đã được mã hóa",
          "Thư mục có định dạng NTFS",
          "Người dùng có phiên bản Windows 10 Home",
          "Thư mục có định dạng FAT32"
        ],
        "correctAnswers": [
          "Người dùng có phiên bản Windows 10 Home"
        ],
        "explanation": "Tính năng Mã hóa tệp tin (EFS) là một tính năng cao cấp dành cho doanh nghiệp. Các máy tính sử dụng hệ điều hành gia đình (Windows 10 Home) sẽ bị nhà sản xuất khóa bớt tính năng này đi."
      },
      {
        "id": 27,
        "question": "Một người hàng xóm trong độ tuổi thiếu niên tạo tài khoản mạng xã hội, qua đó cô ấy đóng giả là một người đàn ông 40 tuổi. Hồ sơ tài khoản chứa ảnh của một người đàn ông mà cô tìm thấy trên mạng. Thông qua tài khoản này, cô kết nối với những người hàng xóm khác và với phụ huynh của học sinh tại trường của mình, sau đó bảo trợ cho một cuộc gây quỹ trực tuyến vì lợi ích của chính cô. Cô hàng xóm của bạn đang làm gì?",
        "type": "single",
        "options": [
          "Tấn công mạng (Cyberhacking)",
          "Trêu đùa (Trolling)",
          "Tấn công giả mạo (Phishing)",
          "Lừa đảo công nghệ cao (Catfishing)"
        ],
        "correctAnswers": [
          "Lừa đảo công nghệ cao (Catfishing)"
        ],
        "explanation": "Tạo tài khoản giả mạo (lấy ảnh người khác) để đi lừa đảo xin tiền của phụ huynh trong trường là hành vi giả mạo danh tính, hay còn gọi là Catfishing. Đây là hành vi vi phạm pháp luật đó nhé!"
      },
      {
        "id": 28,
        "question": "Với mỗi câu phát biểu về tính bảo mật của webcam, hãy chọn Đúng hoặc Sai",
        "type": "matching",
        "options": [
          {
            "text": "Tắt webcam trong cài đặt máy tính của bạn sẽ bảo vệ bạn khỏi nguy cơ truy cập trái phép.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Mọi người nên che webcam của mình khi không sử dụng.&nbsp;",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Tất cả các webcam đều có đèn ghi mà không thể tắt được thông qua phần mềm.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Sai"
        },
        "explanation": "Ngay cả khi em đã bấm 'Tắt' webcam trong máy, những Hacker siêu giỏi vẫn có thể lén lút bật nó lên. Cách an toàn 100% duy nhất là dán một miếng băng dính đen che cái lỗ Camera lại!"
      },
      {
        "id": 29,
        "question": "Thanh toán kỹ thuật số hoạt động như thế nào?",
        "type": "single",
        "options": [
          "Thanh toán kỹ thuật số yêu cầu liên kết với tài khoản ngân hàng hoặc thẻ tín dụng.",
          "Thanh toán kỹ thuật số yêu cầu người đồng ký.",
          "Thanh toán kỹ thuật số giống như một I.O.U.",
          "Thanh toán kỹ thuật số tương tự như séc điện tử."
        ],
        "correctAnswers": [
          "Thanh toán kỹ thuật số yêu cầu liên kết với tài khoản ngân hàng hoặc thẻ tín dụng."
        ],
        "explanation": "Để có tiền 'ảo' quẹt thẻ hoặc chuyển khoản Momo, thì điều bắt buộc là cái ví điện tử đó phải được nối một sợi dây liên kết với một chiếc thẻ ngân hàng có chứa tiền 'thật' của bố mẹ em."
      },
      {
        "id": 30,
        "question": "Giữa công việc ở trường, chơi game và mạng xã hội, bạn dành 4-6 giờ mỗi ngày để sử dụng máy tính xách tay và đăng bài trên mạng xã hội từ điện thoại của mình. Bạn lo ngại về nguy cơ sức khỏe. Đối với mỗi phát biểu về rủi ro sức khỏe khi sử dụng công nghệ kỹ thuật số, hãy chọn Đúng nếu đó là tuyên bố đúng hoặc Sai nếu phát biểu đó là sai.",
        "type": "matching",
        "options": [
          {
            "text": "Để tránh nghiện mạng xã hội, bạn nên nghỉ ngơi khi duyệt 3-5 trang mạng xã",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Để chống lại tình trạng lười vận động, hãy mua một chiếc đồng hồ thể dục để đeo đến trường.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Để giúp tránh rối loạn giấc ngủ, trước khi đi ngủ, hay sạc điện thoại ở nơi bạn không thể tiếp cận nhưng vẫn có thể nghe thấy.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Để tránh mỏi mắt, bạn nên chớp mắt thường xuyên theo quy tắc \"20-20-20\".",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Sai",
          "3": "Đúng"
        },
        "explanation": "Quy tắc 20-20-20 nghĩa là cứ nhìn màn hình 20 phút, em lại nhìn xa 20 feet (6 mét) để mắt nghỉ ngơi (Đúng). Nhưng nếu sạc điện thoại gần giường và cứ nghe chuông báo tin nhắn kêu cả đêm thì em sẽ bị mất ngủ đấy nhé (Sai)."
      },
      {
        "id": 31,
        "question": "Giải thích những nguy cơ tiềm ẩn và hậu quả của các bài đăng trên phương tiện truyền thông tiêu cực (Negative Media Posts). Đối với mỗi phát biểu về các bài đăng tiêu cực trên mạng xã hội, hãy chọn Đúng nếu đó là mối nguy hiểm hoặc Sai nếu không.",
        "type": "matching",
        "options": [
          {
            "text": "Nếu bạn thực hiện quá nhiều bài đăng trên phương tiện truyền thông tiêu cực, nhà cung cấp dịch vụ điện thoại sẽ đóng tài khoản của bạn.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Hướng các bài đăng tiêu cực đến một cá nhân có thể bị coi là đe dọa trực tuyến",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Đọc các bài đăng tiêu cực trên mạng xã hội có thể gây ra trầm cảm và khiến lòng tự trọng thấp.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Sai",
          "1": "Đúng",
          "2": "Đúng"
        },
        "explanation": "Mạng xã hội là nơi lan truyền cảm xúc. Nếu em suốt ngày đọc lời chửi mắng trên mạng, em sẽ tự nhiên thấy buồn bã và Trầm cảm (Đúng). Nhà mạng điện thoại chỉ bán sim nghe gọi chứ họ không khóa Facebook của em đâu nhé (Sai)."
      },
      {
        "id": 32,
        "question": "Đâu là hai ảnh hưởng của hội chứng FOMO (sợ bỏ lỡ)? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Suy giảm lòng tự trọng&nbsp;",
          "Tăng cường sử dụng mạng xã hội",
          "Suy giảm động lực",
          "Tăng tính khiêm tốn"
        ],
        "correctAnswers": [
          "Suy giảm lòng tự trọng&nbsp;",
          "Tăng cường sử dụng mạng xã hội"
        ],
        "explanation": "Người bị hội chứng FOMO sẽ cắm mặt vào bấm điện thoại lướt Facebook 24/24. Khi liên tục thấy người khác khoe khoang giàu có giỏi giang, họ sẽ tự ti và cảm thấy mình thật kém cỏi (Suy giảm lòng tự trọng)."
      }
    ]
  },
  {
    "id": "c7-t12",
    "title": "Chủ đề 7 - Bài Test 12",
    "topic": "Chủ đề 7",
    "questions": [
      {
        "id": 1,
        "question": "Mục đích chính của việc lập phiên bản tập tin là gì?",
        "type": "single",
        "options": [
          "Để xác định ngày tập tin được tạo.",
          "Để cho phép người dùng khôi phục các bản sao trước đó của tập tin.",
          "Để cho phép nhiều người dùng cộng tác trên cùng nội dung tập tin.",
          "Để xác định xem tập tin là bản nháp hay là bản phát hành tạm thời (chưa phải bản cuối)."
        ],
        "correctAnswers": [
          "Để cho phép người dùng khôi phục các bản sao trước đó của tập tin."
        ],
        "explanation": "Lập phiên bản giống hệt như việc cứ 10 phút lại tự động chụp ảnh cuốn vở lại một lần. Lỡ như một lúc sau em lỡ tay hất đổ cốc nước làm ướt vở, em có thể dễ dàng tua lại cuốn vở ở lúc chưa bị ướt (khôi phục bản sao trước đó)."
      },
      {
        "id": 2,
        "question": "Xác định ưu điểm của máy in phun và máy in laser.Để trả lời, bạn hãy chọn loại máy in tương ứng với từng ưu điểm:",
        "type": "matching",
        "options": [
          {
            "text": "Tài liệu khô mực ngay khi in ra",
            "choices": [
              "Máy in phun",
              "Máy in laser"
            ]
          },
          {
            "text": "Thích hợp để in tài liệu số lượng lớn với chi phí thấp",
            "choices": [
              "Máy in phun",
              "Máy in laser"
            ]
          },
          {
            "text": "Phù hợp để in ảnh chất lượng cao",
            "choices": [
              "Máy in phun",
              "Máy in laser"
            ]
          },
          {
            "text": "Thân thiện với môi trường hơn",
            "choices": [
              "Máy in phun",
              "Máy in laser"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Máy in laser",
          "1": "Máy in laser",
          "2": "Máy in phun",
          "3": "Máy in phun"
        },
        "explanation": "Máy in Laser dùng nhiệt độ nướng chín mực nên giấy khô ngay lập tức, hợp in chữ số lượng lớn. Còn máy in Phun thì phun từng giọt mực lỏng lên giấy nên màu sắc rực rỡ hơn để in ảnh, và nó tốn ít điện năng hơn."
      },
      {
        "id": 3,
        "question": "Bạn có các tài khoản Google riêng để sử dụng tại trường học và cho mục đích cá nhân. Bạn đã đăng nhập vào tài khoản cá nhân của mình. Bạn cần truy cập một tập tin được chia sẻ với bạn thông qua Google Drive của tài khoản trường học của bạn. Bạn nên làm gì?",
        "type": "single",
        "options": [
          "Đặt cấu hình cả hai tài khoản để sử dụng cùng một mật khẩu.",
          "Liên kết Google Drive của tài khoản cá nhân và tài khoản trường học.",
          "Trong phần cài đặt tài khoản Google cá nhân, bỏ chặn tài khoản trường học của bạn.",
          "Chuyển từ tài khoản Google cá nhân sang tài khoản trường học của bạn."
        ],
        "correctAnswers": [
          "Chuyển từ tài khoản Google cá nhân sang tài khoản trường học của bạn."
        ],
        "explanation": "Trình duyệt của em giống như một ngôi nhà có 2 chiếc chìa khóa. Nếu tài liệu nằm trong kho của trường học, em chỉ cần bấm vào avatar góc phải và 'Chuyển đổi' (Switch) sang tài khoản của trường để lấy tài liệu nhé."
      },
      {
        "id": 4,
        "question": "Bạn tìm thấy một bài đăng trên mạng xã hội chia sẻ thông tin y tế không chính xác và gây hiểu lầm. Bạn quyết định trả lời bài viết này. Với mỗi phản hồi, hãy chọn Có nếu việc này tuân thủ các chuẩn mực đạo đức thích hợp trong môi trường số hoặc Không nếu không phải.",
        "type": "matching",
        "options": [
          {
            "text": "“Rất khó để tìm hiểu tất cả mọi thứ, nhưng có rất nhiều nguồn để tìm hiểu về vấn đề này.”",
            "choices": [
              "Có",
              "Không"
            ]
          },
          {
            "text": "“SAI RỒI! Bạn có TÌM HIỂU KỸ trước khi đăng bài này không?”",
            "choices": [
              "Có",
              "Không"
            ]
          },
          {
            "text": "“Rất nhiều bác sĩ, bao gồm cả Jane Smith từ Harvard Medical School đều không đồng ý.”",
            "choices": [
              "Có",
              "Không"
            ]
          },
          {
            "text": "“Đây là việc làm sai lầm và khiến bạn trông thật ngớ ngẩn! Rõ ràng là bạn không tìm hiểu từ Harvard Medical School”.",
            "choices": [
              "Có",
              "Không"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Có",
          "1": "Không",
          "2": "Có",
          "3": "Không"
        },
        "explanation": "Khi tranh luận trên mạng, em nên đưa ra lý lẽ nhẹ nhàng, dẫn chứng từ chuyên gia (Có). Không bao giờ được dùng lời lẽ chê bai người khác là 'ngớ ngẩn' hay IN HOA quát tháo ầm ĩ (Không)."
      },
      {
        "id": 5,
        "question": "Giáo viên của bạn mời một diễn giả khách mời thuyết trình trước lớp. Bạn cần tuân thủ các chuẩn mực đạo đức trong môi trường số và thể hiện với diễn giả rằng bạn đang lắng nghe. Đâu là hai hành động thích hợp cần làm trong buổi thuyết trình của diễn giả? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Sử dụng điện thoại thông minh để chụp ảnh các trang trình bày của diễn giả mà bạn muốn giữ lại để tham khảo trong tương lai.",
          "Sử dụng điện thoại thông minh để chụp ảnh chính bạn và những người tham gia khác để ghi lại trải nghiệm của mình.",
          "Sử dụng máy tính bảng/ máy tính xách tay để ghi chú trong khi nghe thuyết trình, đồng thời duy trì giao tiếp bằng mắt với diễn giả.",
          "Sử dụng máy tính bảng/ máy tính xách tay để nghiên cứu thông tin và sở thích của diễn giả."
        ],
        "correctAnswers": [
          "Sử dụng máy tính bảng/ máy tính xách tay để ghi chú trong khi nghe thuyết trình, đồng thời duy trì giao tiếp bằng mắt với diễn giả.",
          "Sử dụng điện thoại thông minh để chụp ảnh các trang trình bày của diễn giả mà bạn muốn giữ lại để tham khảo trong tương lai."
        ],
        "explanation": "Phép lịch sự khi nghe thuyết trình là em hãy ghi chép lại các kiến thức bổ ích (bằng máy tính hoặc chụp ảnh lại slide bài giảng), và luôn nhớ nhìn thẳng vào mắt người nói (giao tiếp bằng mắt) để họ thấy em đang rất chăm chú."
      },
      {
        "id": 6,
        "question": "Người dùng muốn tìm kiếm cụm từ Yankee Candle, nhưng kết quả trả về không chứa cụm từ cần tìm. Kết quả trả về chỉ xuất hiện các từ riêng lẻ Yankee hoặc Candle. Tùy chọn nào sau đây nên được sử dụng có thể giúp tìm kiếm hiệu quả hơn?",
        "type": "single",
        "options": [
          "Dấu ngoặc kép",
          "Dấu ngoặc đơn",
          "Dấu ngoặc nhọn",
          "Dấu ngoặc vuông"
        ],
        "correctAnswers": [
          "Dấu ngoặc kép"
        ],
        "explanation": "Nếu em gõ Yankee Candle, Google sẽ tìm trang có chữ Yankee hoặc chữ Candle. Nhưng nếu em để chúng vào trong dấu ngoặc kép 'Yankee Candle', Google sẽ bắt buộc tìm chính xác cả cụm từ dính liền nhau đó."
      },
      {
        "id": 7,
        "question": "Bạn hãy cho biết cần phải thực hiện điều nào sau đây trước khi một tài liệu có thể đồng tác giả (Coauthor) bởi nhiều người dùng?",
        "type": "single",
        "options": [
          "Nó phải được xuất bản trực tuyến",
          "Nó phải được xem xét",
          "Nó phải được theo dõi",
          "Nó phải được chia sẻ"
        ],
        "correctAnswers": [
          "Nó phải được chia sẻ"
        ],
        "explanation": "\"Đồng tác giả\" là việc 2-3 bạn cùng nhảy vào đánh máy chung trên một tờ giấy. Để các bạn có thể nhảy vào được, việc đầu tiên là em phải mở cửa và \"Chia sẻ\" (Share) tờ giấy đó cho các bạn ấy cái đã."
      },
      {
        "id": 8,
        "question": "Bạn hãy cho biết hai tính năng nào trong Microsoft Word cho phép xem xét các thay đổi và cung cấp phản hồi cho những thay đổi đó? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Giúp đỡ (Help)",
          "Theo dõi thay đổi (Track Changes)",
          "Phản hồi (Feedback)",
          "Nhận xét (Comments)"
        ],
        "correctAnswers": [
          "Theo dõi thay đổi (Track Changes)",
          "Nhận xét (Comments)"
        ],
        "explanation": "Giống như cô giáo dùng bút đỏ chấm bài cho em, chức năng 'Track Changes' tự động tô đỏ những chữ bị sửa. Còn chức năng 'Comments' giống như dán giấy nhớ màu vàng bên cạnh lề vở để nhận xét."
      },
      {
        "id": 9,
        "question": "Bạn đang chuẩn bị một bản trình chiếu kỹ thuật số để kiếm tiền cho câu lạc bộ của mình. Bạn tìm kiếm một bài hát trên mạng để phối lại và thêm vào bài thuyết trình của mình. Tùy chọn nào sau đây là giấy phép Creative Commons cho phép bạn phối lại bài hát cho bản trình bày của mình?",
        "type": "single",
        "options": [],
        "correctAnswers": [
          "Attribution"
        ],
        "explanation": "Để được phép đem nhạc của người khác về cắt ghép, 'chế' lại (phối lại), em phải tìm những bài hát có giấy phép Attribution (Ghi công). Tuyệt đối tránh các bài có chữ NoDerivatives (Không được sửa đổi) nhé."
      },
      {
        "id": 10,
        "question": "Giấy phép Creative Commons nào cho phép sử dụng tác phẩm gốc nhưng không được sửa đổi mà không có sự cho phép của chủ sở hữu?",
        "type": "single",
        "options": [
          "NonCommercial",
          "Attribution",
          "NoDerivatives",
          "ShareAlike"
        ],
        "correctAnswers": [
          "NoDerivatives"
        ],
        "explanation": "Trong giấy phép, 'No' là Không, 'Derivatives' là Chế biến/Sửa đổi. Vậy nên nếu tác giả gắn mác 'NoDerivatives', em chỉ được phép đem ảnh của họ đi khoe với mọi người, nhưng tuyệt đối không được tự ý vẽ thêm râu hay bôi bẩn lên bức ảnh đó."
      },
      {
        "id": 11,
        "question": "Lợi thế của việc sử dụng ví điện tử như Apple Pay hoặc Google Pay là gì?",
        "type": "single",
        "options": [
          "Tạo lịch sử tín dụng của bạn.",
          "Yêu cầu bạn ủy quyền mọi giao dịch.",
          "Khuyến khích bạn tìm kiếm và mua sắm với mức giá tốt nhất.",
          "Tự động cung cấp số thẻ tín dụng của bạn cho các cửa hàng trực tuyến."
        ],
        "correctAnswers": [
          "Yêu cầu bạn ủy quyền mọi giao dịch."
        ],
        "explanation": "Ví điện tử trên điện thoại (như Apple Pay) cực kỳ an toàn vì nó luôn hỏi ý kiến chủ nhân. Em phải dùng khuôn mặt (FaceID) hoặc vân tay (TouchID) để cho phép (ủy quyền) thì nó mới thực hiện chuyển tiền."
      },
      {
        "id": 12,
        "question": "Khi phản hồi không đồng ý với một bài đăng trực tuyến, bạn nên sử dụng giọng điệu giống như người đăng ban đầu.",
        "type": "single",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correctAnswers": [
          "Sai"
        ],
        "explanation": "Sai hoàn toàn! Nếu người kia dùng lời lẽ tức giận, chửi bới để đăng bài, em tuyệt đối không được 'ăn miếng trả miếng' bằng giọng điệu xấu xí đó. Hãy luôn giữ bình tĩnh và trả lời một cách lịch sự nhé."
      },
      {
        "id": 13,
        "question": "Thanh toán kỹ thuật số hoạt động như thế nào?",
        "type": "single",
        "options": [
          "Thanh toán kỹ thuật số tương tự như Check điện tử.",
          "Thanh toán kỹ thuật số yêu cầu người đăng ký.",
          "Thanh toán kỹ thuật số giống như một I.O.U.",
          "Thanh toán kỹ thuật số yêu cầu liên kết với tài khoản ngân hàng hoặc thẻ tín dụng."
        ],
        "correctAnswers": [
          "Thanh toán kỹ thuật số yêu cầu liên kết với tài khoản ngân hàng hoặc thẻ tín dụng."
        ],
        "explanation": "Để có tiền 'ảo' quẹt thẻ hoặc chuyển khoản Momo, thì điều bắt buộc là cái ví điện tử đó phải được nối một sợi dây liên kết với một chiếc thẻ ngân hàng có chứa tiền 'thật' của bố mẹ em."
      },
      {
        "id": 14,
        "question": "Một hội đồng phỏng vấn cần sàng lọc những người lọt vào vòng chung kết cho một vị trí cấp giám đốc trong công ty của họ. Các thành viên của ủy ban nằm trong cùng một văn phòng. Các ứng cử viên cho vị trí này nằm ở các bang khác nhau. Hai công cụ hợp tác nào sẽ hiệu quả nhất để thực hiện các cuộc phỏng vấn này? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Text Message",
          "Video Conference",
          "Phone Call",
          "Email"
        ],
        "correctAnswers": [
          "Video Conference",
          "Phone Call"
        ],
        "explanation": "Để phỏng vấn ứng viên ở rất xa, công ty sẽ dùng Gọi điện thoại (Phone Call) để nghe giọng nói, hoặc Gọi Video (Video Conference) để có thể nhìn thấy khuôn mặt và phong thái của ứng viên một cách rõ ràng nhất."
      },
      {
        "id": 15,
        "question": "Chọn từng kiểu mua hàng trong ứng dụng cho phù hợp với mô tả tương ứng.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Mở khóa một tính năng đặc biệt trên trò chơi điện tử",
            "choices": [
              "Tự động gia hạn",
              "Không tự động gia hạn",
              "Vật tư tiêu hao",
              "Vật tư không tiêu hao"
            ]
          },
          {
            "text": "Đăng ký dịch vụ phát Video trực tuyến",
            "choices": [
              "Tự động gia hạn",
              "Không tự động gia hạn",
              "Vật tư tiêu hao",
              "Vật tư không tiêu hao"
            ]
          },
          {
            "text": "Thuê phim trực tuyến thông qua dịch vụ phát trực tuyến",
            "choices": [
              "Tự động gia hạn",
              "Không tự động gia hạn",
              "Vật tư tiêu hao",
              "Vật tư không tiêu hao"
            ]
          },
          {
            "text": "Mua đá quý hoặc tiền xu cho trò chơi trên thiết bị di động",
            "choices": [
              "Tự động gia hạn",
              "Không tự động gia hạn",
              "Vật tư tiêu hao",
              "Vật tư không tiêu hao"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Vật tư không tiêu hao",
          "1": "Tự động gia hạn",
          "2": "Không tự động gia hạn",
          "3": "Vật tư tiêu hao"
        },
        "explanation": "Tiền xu chơi game dùng xong là mất (Tiêu hao). Mở khóa chức năng VIP là mở vĩnh viễn (Không tiêu hao). Thuê phim 1 ngày tự hết (Không tự động gia hạn). Còn đăng ký Netflix tháng nào cũng tự trừ tiền (Tự động gia hạn)."
      },
      {
        "id": 16,
        "question": "Các nhà cung cấp thương mại điện tử bán nhiều hàng hóa và dịch vụ khác nhau trên mạng. Phân loại từng mục là Hàng hóa hay Dịch vụ.",
        "type": "matching",
        "options": [
          {
            "text": "Đăng ký phần mềm",
            "choices": [
              "Dịch vụ",
              "Hàng hóa"
            ]
          },
          {
            "text": "Lưu trữ đám mây",
            "choices": [
              "Dịch vụ",
              "Hàng hóa"
            ]
          },
          {
            "text": "Bộ định tuyến mạng",
            "choices": [
              "Dịch vụ",
              "Hàng hóa"
            ]
          },
          {
            "text": "Tai nghe Bluetooth",
            "choices": [
              "Dịch vụ",
              "Hàng hóa"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Dịch vụ",
          "1": "Dịch vụ",
          "2": "Hàng hóa",
          "3": "Hàng hóa"
        },
        "explanation": "'Hàng hóa' là những đồ vật em có thể cầm nắm được (Cục phát Wifi, cái tai nghe). Còn 'Dịch vụ' là những thứ vô hình người ta làm cho em (cho thuê chỗ cất dữ liệu đám mây, cho thuê phần mềm)."
      },
      {
        "id": 17,
        "question": "Bạn hãy cho biết thuật ngữ nào sau đây giải thích tốt nhất những gì xuất hiện ở bên phải của trang Web này?",
        "type": "single",
        "options": [
          "Cửa sổ bật lên (Popup)",
          "Hộp trò chuyện (Chatbot)",
          "Tin nhắn trong ứng dụng (In-app Messenger)",
          "Trợ lý ảo (Virtual Agent)"
        ],
        "correctAnswers": [
          "Hộp trò chuyện (Chatbot)",
          "Hộp trò chuyện (Chatbot)",
          "Hộp trò chuyện (Chatbot)"
        ],
        "explanation": "Những hộp tin nhắn nhỏ tự động bật lên ở góc phải màn hình Web và hỏi 'Tôi có thể giúp gì cho bạn?' thường là Chatbot. Đó là những con rô-bốt thông minh được lập trình sẵn để trả lời câu hỏi của em.",
        "images": [
          "IC3.LEVEL2.CHUDE7.TEST12.cau 17.png"
        ]
      },
      {
        "id": 18,
        "question": "Với mỗi câu phát biểu về thanh toán kỹ thuật số, hãy chọn Đúng hoặc Sai",
        "type": "matching",
        "options": [
          {
            "text": "Thẻ ghi nợ, thẻ tín dụng, thanh toán chuyển khoản qua ngân hàng và ví điện tử đều là các loại thanh toán kỹ thuật số.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Tiền mặt có thể được coi là một loại hình thanh toán kỹ thuật số.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Thanh toán kỹ thuật số diễn ra khi cả người thanh toán và người được thanh toán sử dụng các phương tiện điện tử để thực hiện và nhận thanh toán.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": [],
        "explanation": "Chưa có giải thích cho câu hỏi này."
      },
      {
        "id": 19,
        "question": "Chọn hình thức giao tiếp phù hợp với tình huống đang sử dụng hình thức đó.&nbsp;",
        "type": "matching",
        "options": [
          {
            "text": "Bạn thêm một đoạn dài trình bày quan điểm của mình về sự đa dạng văn hóa vào nhật ký trực tuyến của mình",
            "choices": [
              "Tin nhắn văn bản",
              "Bài đăng trên Blog",
              "Email",
              "Bài đăng trên diễn đàn"
            ]
          },
          {
            "text": "Bạn liên hệ với huấn luyện viên của mình sau giờ học để nói với anh ấy rằng bạn sẽ bỏ lỡ buổi tập hôm nay",
            "choices": [
              "Tin nhắn văn bản",
              "Bài đăng trên Blog",
              "Email",
              "Bài đăng trên diễn đàn"
            ]
          },
          {
            "text": "Bạn thêm câu hỏi vào nhóm thảo luận trò chơi điện tử đang diễn ra",
            "choices": [
              "Tin nhắn văn bản",
              "Bài đăng trên Blog",
              "Email",
              "Bài đăng trên diễn đàn"
            ]
          },
          {
            "text": "Bạn liên lạc với công ty về việc nhận tiền hoàn lại",
            "choices": [
              "Tin nhắn văn bản",
              "Bài đăng trên Blog",
              "Email",
              "Bài đăng trên diễn đàn"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Bài đăng trên Blog",
          "1": "Tin nhắn văn bản",
          "2": "Bài đăng trên diễn đàn",
          "3": "Email"
        },
        "explanation": "Blog là nhật ký trên mạng. Tin nhắn (SMS) dùng để báo nghỉ học nhanh chóng. Diễn đàn là nơi hoàn hảo để hỏi đáp về game. Còn Email dùng cho việc trang trọng như đòi tiền công ty."
      },
      {
        "id": 20,
        "question": "Một học sinh cấp hai tham gia cộng đồng mạng xã hội gồm những người có cùng sở thích với mình. Với mỗi câu phát biểu, hãy chọn Đúng nếu đây là cách phù hợp để tương tác với cộng đồng trực tuyến hoặc Sai nếu không phù hợp.",
        "type": "matching",
        "options": [
          {
            "text": "Trả lời bình luận trên một chuỗi chủ đề nói rằng mình không đồng ý, sử dụng giọng điệu tôn trọng.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Chia sẻ bình luận từ cộng đồng với một nhóm khác mà không nói rõ ai đã đưa ra bình luận đó.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Giới thiệu bản thân với các thành viên cộng đồng và cung cấp địa chỉ Email cá nhân của cậu ấy.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          },
          {
            "text": "Hy vọng các thành viên khác trong cộng đồng coi thông tin cậu ấy chia sẻ là riêng tư.",
            "choices": [
              "Sai",
              "Đúng"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Sai",
          "2": "Sai",
          "3": "Sai"
        },
        "explanation": "Khi dùng mạng xã hội, em luôn phải nói chuyện tôn trọng người khác (Đúng). Tuyệt đối không để lộ Email hay số điện thoại cho người lạ (Sai). Và đừng bao giờ nghĩ những gì em đăng lên mạng là 'riêng tư' nhé, ai cũng có thể xem được đó!"
      },
      {
        "id": 21,
        "question": "Lớp của bạn đang họp qua hình thức hội thảo Video. Bạn và ba sinh viên khác sẽ thay phiên nhau trình bày thông tin trên Camera và từng người chia sẻ màn hình riêng của mình. Ba hành động bạn cần thực hiện trước khi thuyết trình? (Chọn 3)",
        "type": "multiple",
        "options": [
          "Cho các sinh viên khác biết rằng họ có thể đồng thời chia sẻ màn hình.",
          "Đóng bất kỳ chương trình và tab trình duyệt nào mà bạn không cần.",
          "Luyện tập bài thuyết trình của mình trong khi những người khác đang thuyết trình.",
          "Kiểm tra và luyện tập sử dụng tính năng chia sẻ màn hình.",
          "Đảm bảo rằng hình ảnh trong bài thuyết trình của bạn phù hợp với trường học.",
          "Trình bày ở ngoài trời để có ánh sáng tự nhiên."
        ],
        "correctAnswers": [
          "Đóng bất kỳ chương trình và tab trình duyệt nào mà bạn không cần.",
          "Đảm bảo rằng hình ảnh trong bài thuyết trình của bạn phù hợp với trường học.",
          "Kiểm tra và luyện tập sử dụng tính năng chia sẻ màn hình."
        ],
        "explanation": "Khi thuyết trình, em sẽ phải chia sẻ màn hình máy tính. Vì vậy em phải dọn dẹp đóng hết các chương trình rác, kiểm tra kỹ hình ảnh cho lịch sự và tập bấm thử nút chia sẻ trước nhé."
      },
      {
        "id": 22,
        "question": "Bạn tham gia nhóm gồm 10 sinh viên đang thực hiện một dự án lớn trong lớp học về sức khỏe. Nhóm của bạn sẽ thảo luận thông qua công cụ hội thảo Video. Bạn nên thực hiện hai hành động nào trước khi tham gia hội thảo Video lần đầu tiên? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Kiểm tra trước công nghệ hội thảo Video.",
          "Chuẩn bị sẵn thực phẩm ăn nhẹ để có thể ăn tạm khi đói",
          "Đặt ánh sáng phía sau bạn để tạo hình ảnh bóng đổ.",
          "Đặt camera của bạn ngang tầm mắt."
        ],
        "correctAnswers": [
          "Kiểm tra trước công nghệ hội thảo Video.",
          "Đặt camera của bạn ngang tầm mắt."
        ],
        "explanation": "Trước khi họp nhóm bằng Video, em phải bật thử camera và micro xem có hoạt động tốt không (Kiểm tra công nghệ). Đừng quên đặt camera ngang tầm mắt để các bạn nhìn thấy khuôn mặt rạng rỡ của em nhé."
      },
      {
        "id": 23,
        "question": "Bạn lãnh đạo một nhóm gồm những người thuộc các nền văn hóa, giới tính và độ tuổi khác nhau. Bạn dự định tổ chức một cuộc họp từ xa bằng công cụ hội thảo Video để lên ý tưởng cho một dự án mới. Bạn cần tuân thủ các chuẩn mực đạo đức trong môi trường số. Bạn nên thực hiện hai hành động nào sau đây? (Chọn 2)",
        "type": "multiple",
        "options": [
          "Đề nghị hỗ trợ riêng cho một thành viên trong nhóm không có kinh nghiệm tham dự hội thảo Video nhằm giúp họ làm quen với chức năng điều khiển trước cuộc họp.",
          "Sử dụng các tính năng như Giơ tay (Raise Hand) để tạo cơ hội cho tất cả các thành viên trong nhóm tham gia",
          "Yêu cầu một thành viên nói giọng không chuẩn bản ngữ (Có âm giọng nặng) trả lời qua hộp trò chuyện để các thành viên còn lại trong nhóm có thể hiểu",
          "Đảm bảo sự tập trung và tránh xung đột trong nhóm bằng cách chỉ thảo luận các ý tưởng có trong danh sách riêng của bạn."
        ],
        "correctAnswers": [
          "Đề nghị hỗ trợ riêng cho một thành viên trong nhóm không có kinh nghiệm tham dự hội thảo Video nhằm giúp họ làm quen với chức năng điều khiển trước cuộc họp.",
          "Sử dụng các tính năng như Giơ tay (Raise Hand) để tạo cơ hội cho tất cả các thành viên trong nhóm tham gia"
        ],
        "explanation": "Là một người đội trưởng tốt, em nên hướng dẫn riêng cho những bạn chưa rành về máy tính (Hỗ trợ riêng). Và trong cuộc họp, hãy khuyến khích mọi người dùng nút 'Giơ tay' để tất cả đều được công bằng phát biểu ý kiến."
      },
      {
        "id": 24,
        "question": "Tuỳ chọn nào sau đây là quá trình chuyển đổi dữ liệu sang dạng thức không thể nhận dạng yêu cầu sử dụng khóa để trả dữ liệu về dạng văn bản thuần?",
        "type": "single",
        "options": [
          "Mã hóa Encryption",
          "Nén (Compression)",
          "Mã hóa Encoding",
          "Hàm băm (Hashing)"
        ],
        "correctAnswers": [
          "Mã hóa Encryption"
        ],
        "explanation": "Mã hóa (Encryption) là phép thuật biến chữ bình thường thành những ký hiệu lộn xộn không ai hiểu được để bảo vệ dữ liệu khỏi kẻ trộm. Chỉ có chiếc 'chìa khóa' đúng mới có thể giải mã chúng."
      },
      {
        "id": 25,
        "question": "Với mỗi câu phát biểu về tính bảo mật của thiết bị đa phương tiện di động hãy chọn Đúng hoặc Sai.",
        "type": "matching",
        "options": [
          {
            "text": "Bạn nên lưu trữ các công việc và tập tin cá nhân của mình trên các thiết bị riêng biệt, không được cắm thiết bị cá nhân vào máy tính làm việc hoặc ngược lại.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Bạn nên tắt tính năng tự động chạy và tự động phát cho tất cả các thiết bị đa phương tiện di động.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          },
          {
            "text": "Nếu bạn tìm thấy một thiết bị lưu trữ phương tiện truyền thông và không biết nó thuộc về ai, hãy cắm thiết bị đó vào máy tính của bạn để tìm thông tin về chủ nhân của nó.",
            "choices": [
              "Đúng",
              "Sai"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Đúng",
          "1": "Đúng",
          "2": "Sai"
        },
        "explanation": "Tuyệt đối không bao giờ được nhặt một chiếc USB rơi ngoài đường rồi cắm vào máy tính của em (Sai). Đó là cạm bẫy của Hacker chứa đầy Virus có thể phá hỏng máy tính và ăn cắp dữ liệu của em đó!"
      },
      {
        "id": 26,
        "question": "Bạn đang sử dụng chương trình phần mềm mới để tạo bài trình chiếu. Bạn cần sử dụng một chức năng không quen thuộc. Với mỗi tài nguyên, hãy chọn Có nếu bạn có thể sử dụng nó để tìm kiếm sự hỗ trợ hoặc Không nếu không thể.",
        "type": "matching",
        "options": [
          {
            "text": "Diễn đàn trực tuyến dành riêng cho phần mềm.",
            "choices": [
              "Không",
              "Có"
            ]
          },
          {
            "text": "Trang LinkedIn dành cho công ty phần mềm.",
            "choices": [
              "Không",
              "Có"
            ]
          },
          {
            "text": "Tính năng Trợ giúp (Help) trong chương trình.",
            "choices": [
              "Không",
              "Có"
            ]
          },
          {
            "text": "Hướng dẫn cài đặt phần mềm.",
            "choices": [
              "Không",
              "Có"
            ]
          }
        ],
        "correctAnswers": {
          "0": "Có",
          "1": "Không",
          "2": "Có",
          "3": "Không"
        },
        "explanation": "Khi không biết sử dụng phần mềm, em có thể bấm nút Trợ giúp (Help) trong phần mềm hoặc lên Diễn đàn để hỏi. Trang hướng dẫn cài đặt chỉ dạy cách cài, chứ không dạy cách sử dụng đâu!"
      }
    ]
  }
];
