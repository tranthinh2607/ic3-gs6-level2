const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');

// evaluate the quizSets variable
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');

const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "máy in mặc định cứ liên tục thay đổi",
    correctAnswers: ["Để Windows quản lý máy in mặc định của tôi (Let Windows manage my default printer)"],
    explanation: "Tưởng tượng hệ điều hành Windows giống như một \"chú robot dọn nhà\". Nếu em cho phép chú robot \"tự động\" sắp xếp, chú ấy sẽ tự ý đổi máy in theo ý chú ấy. Vì vậy, em phải \"tắt\" chức năng tự động này đi, để em có quyền tự chọn máy in mà mình muốn dùng nhé."
  },
  {
    qSnippet: "Bạn cần thêm cuộc họp Hội đồng sinh viên",
    correctAnswers: ["3", "1"],
    explanation: "Khi em muốn viết thêm một kế hoạch đi chơi vào cuốn lịch, em có 2 cách. Một là bấm vào nút \"Tạo mới\" (số 1), hai là nhấn đúp trực tiếp vào cái ô ngày hôm đó trên lịch (số 3). Cả hai nút này đều mở ra một tờ giấy nhỏ để em viết thông tin vào."
  },
  {
    qSnippet: "Với mỗi câu phát biểu về tính bảo mật của thiết bị đa phương tiện",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Đúng" }, // 0: lưu trữ riêng -> Đúng, 1: nhặt được cắm vào -> Sai, 2: tắt auto run -> Đúng
    explanation: "Câu 1 Sai: Nhặt được chiếc USB rơi ngoài đường mà cắm vào máy tính giống như ăn một viên kẹo của người lạ cho vậy, rất nguy hiểm vì USB đó có thể chứa \"virus\" làm ốm máy tính.\nCâu 2 Đúng: Tắt \"Tự động chạy\" giống như việc em khóa chặt cửa nhà, không cho kẻ xấu (virus) tự động mở cửa xông vào.\nCâu 3 Đúng: Đồ chơi cá nhân và sách vở học tập nên để ở hai ngăn tủ khác nhau để khỏi bị thất lạc hoặc hỏng hóc."
  },
  {
    qSnippet: "Với mỗi câu phát biểu về bộ xử lý trung tâm",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Đúng" }, // 0: có tản nhiệt -> Sai, 1: tốc độ ảnh hưởng fps -> Đúng, 2: 64bit -> Đúng
    explanation: "CPU giống như \"bộ não\" của máy tính. Não suy nghĩ càng nhanh thì chơi game hình ảnh càng mượt mà (Đúng). Bản thân cái \"bộ não\" không có quạt làm mát gắn liền bên trong nó, quạt là đồ mua cắm thêm ở ngoài (Sai). Cuối cùng, \"64-bit\" giống như con đường cao tốc rộng lớn, máy tính bây giờ đều cần đường rộng để chạy nhanh (Đúng)."
  },
  {
    qSnippet: "Nối từng phần mở rộng tập tin",
    correctAnswers: { "0": ".rtf", "1": ".png", "2": ".txt", "3": ".gif" },
    explanation: "Đuôi file giống như biệt danh của các bạn trong lớp, nghe tên là biết bạn đó có tài năng gì:\nBạn .gif rất giỏi làm những bức ảnh nhúc nhích, hoạt hình.\nBạn .rtf thích viết chữ có tô màu, in đậm, in nghiêng.\nBạn .txt là bạn đơn giản nhất, chỉ viết chữ trơn, không màu mè.\nBạn .png là họa sĩ vẽ tranh siêu nét và có thể vẽ trên giấy bóng kính trong suốt."
  },
  {
    qSnippet: "thay đổi màu nền của màn hình",
    correctAnswers: ["Personalization"],
    explanation: "\"Personalization\" tiếng Anh có nghĩa là \"Sở thích cá nhân\". Khu vực này giống như hộp đồ trang trí, cho phép em tự do đổi hình nền siêu nhân hay công chúa, và đổi màu sắc máy tính theo đúng ý thích của em."
  },
  {
    qSnippet: "kéo dài cả ngày theo mặc định",
    correctAnswers: ["Event"],
    explanation: "\"Event\" có nghĩa là \"Sự kiện\". Giống như ngày sinh nhật của em hay ngày Tết, nó là một sự kiện diễn ra trọn vẹn từ sáng đến tối, chứ không phải chỉ là một cuộc hẹn ngắn 15 phút."
  },
  {
    qSnippet: "hệ thống lưu trữ dữ liệu trung tâm",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Sai" }, // 0: ftp -> Đúng, 1: tự sao lưu -> Đúng, 2: tải lên bị xóa -> Sai
    explanation: "Tưởng tượng \"hệ thống lưu trữ\" giống như một kho chứa đồ khổng lồ trên mạng (như Google Drive).\nPhần mềm FTP giống như xe tải chở đồ từ máy tính lên kho (Đúng).\nNhà kho thông minh có robot tự động sao chép tài liệu để không bao giờ bị mất (Đúng).\nKhi tải ảnh lên kho, máy tính chỉ \"photocopy\" bản chính gửi đi thôi, bản gốc trong máy em vẫn còn nguyên chứ không bị xóa đi (Sai)."
  },
  {
    qSnippet: "tuỳ chọn được sử dụng để kết nối máy in",
    correctAnswers: ["Devices"],
    explanation: "Chữ \"Devices\" nghĩa là \"Các thiết bị\". Nó là căn phòng quản lý tất cả những đồ vật cắm thêm vào máy tính. Chuột, bàn phím, hay máy in đều phải vào căn phòng \"Devices\" này để máy tính nhận diện."
  },
  {
    qSnippet: "kiểm soát cách nhận thông báo",
    correctAnswers: ["Focus assist"],
    explanation: "\"Focus\" nghĩa là Tập trung. Khi em đang làm bài tập, tính năng \"Focus assist\" giống như một cô bảo vệ gác cửa, giúp chặn hết các tiếng \"ting ting\" của tin nhắn hay game để em không bị xao nhãng."
  },
  {
    qSnippet: "Nhiều hàng hóa và dịch vụ được bán trực tuyến",
    correctAnswers: ["Hỗ trợ máy tính để bàn từ xa (Remote desktop support)", "Ứng dụng trực tuyến (Online applications)", "Lưu trữ đám mây (Cloud storage)"],
    explanation: "\"Dịch vụ\" là những thứ người ta làm giúp em qua mạng Internet, em không thể sờ hay cầm nắm được. Ví dụ: nhờ thợ sửa máy tính qua mạng, phần mềm trên web, hay thuê chỗ cất ảnh trên mạng. Còn điện thoại, balo, tai nghe là \"Hàng hóa\" vì em có thể cầm nó trên tay."
  },
  {
    qSnippet: "ưu điểm của máy in phun và máy in laser",
    correctAnswers: { "0": "Máy in laser", "1": "Máy in laser", "2": "Máy in phun", "3": "Máy in phun" },
    explanation: "Máy in laser: Dùng \"bột mực\" và sấy nóng chảy lên giấy, nên tờ giấy in ra nóng hổi và khô ngay lập tức. Nó in rất nhanh nên thích hợp in nhiều sách vở.\nMáy in phun: Dùng vòi xịt nước mực lên giấy. Vì in chậm hơn nên phù hợp để ở nhà thỉnh thoảng in vài tấm ảnh màu, và nó ít tốn điện năng hơn (thân thiện môi trường)."
  },
  {
    qSnippet: "Vùng tối của màn hình quá tối, còn vùng sáng của màn hình quá sáng",
    correctAnswers: ["Độ tương phản (Contrast)"],
    explanation: "\"Độ tương phản\" là khoảng cách giữa chỗ sáng nhất và chỗ tối nhất. Chỉnh độ tương phản giống như em đeo kính râm giúp tách bạch rõ ràng giữa bóng râm và ánh nắng mặt trời, làm bức ảnh trở nên sắc nét, không bị lóa và dễ nhìn hơn."
  },
  {
    qSnippet: "Hai nguyên tắc thiết kế chung cho phần cứng",
    correctAnswers: [
      "Khả năng chịu lỗi: Giảm thiểu các mối nguy hiểm và hậu quả bất lợi của các hành động ngẫu nhiên hoặc ngoài ý muốn\u00a0", 
      "Sử dụng công bằng: Thiết kế hữu ích và có thể bán được cho nhiều người với các khả năng khác nhau"
    ],
    explanation: "Khi chế tạo máy tính, các chú kỹ sư phải đảm bảo 2 điều: 1 là \"Khả năng chịu lỗi\" (lỡ em bấm nhầm nút thì máy vẫn không bị hỏng hóc hay xóa nhầm dữ liệu); 2 là \"Sử dụng công bằng\" (thiết kế sao cho ai cũng dùng được dễ dàng, dù là người trẻ hay người lớn tuổi)."
  },
  {
    qSnippet: "lưu trữ trong phần Autofill của Google Chrome",
    correctAnswers: ["Address information", "Passwords", "Payment methods"],
    explanation: "\"Autofill\" là \"Tự động điền\". Chrome giống như một người thư ký thông minh giúp em nhớ sẵn 3 thứ quan trọng: Địa chỉ nhà em (để giao hàng), Mật khẩu (để vào game), và Thẻ ngân hàng (để trả tiền). Mỗi lần cần gõ, thư ký sẽ tự động viết ra giúp em trong vòng 1 giây!"
  },
  {
    qSnippet: "xử lý hiệu suất của video và đồ họa",
    correctAnswers: ["GPU"],
    explanation: "Em nhớ CPU là \"bộ não\" chung không? Còn GPU thì gọi là \"Họa sĩ\" của máy tính. Bất cứ khi nào em xem phim hoạt hình hay chơi game 3D tuyệt đẹp, chính là nhờ họa sĩ GPU này đang lấy cọ vẽ màu siêu tốc độ để tạo ra hình ảnh đó."
  },
  {
    qSnippet: "thay đổi cuộc hẹn (appointment) thành cuộc họp",
    correctAnswers: ["Thêm người được mời"],
    explanation: "Một \"cuộc hẹn\" là em tự lên lịch cho bản thân (ví dụ: 5h chiều tự đi đá bóng). Nhưng ngay khi em rủ thêm bạn bè cùng tham gia (thêm người được mời), sự kiện đó lập tức biến thành một \"cuộc họp\" nhóm!"
  },
  {
    qSnippet: "loại quyền truy cập tập tin phù hợp",
    correctAnswers: { "0": "Đọc (Read)", "1": "Ghi (Write)", "2": "Đọc &amp; Thực thi", "3": "Sửa (Modify)" },
    explanation: "Giống như khi cô giáo phát cho em một quyển sách:\nQuyền \"Đọc\": Em chỉ được xem chữ bằng mắt.\n\"Đọc & Thực thi\": Em xem sách và làm theo hướng dẫn gấp hạc giấy trong đó.\n\"Ghi\": Em được phép lấy bút viết thêm chữ vào sách.\n\"Sửa\": Quyền \"trùm\" nhất, em được xem, được viết thêm, và được cầm cục tẩy xóa chữ đi luôn."
  },
  {
    qSnippet: "đúng về điện toán đám mây",
    correctAnswers: ["Dữ liệu trong điện toán đám mây được lưu trữ trên một máy chủ từ xa", "Máy chủ có thể được truy cập thông qua Internet"],
    explanation: "\"Đám mây\" ở đây không phải là mây bay trên trời! Nó là cách gọi một cái máy tính siêu khổng lồ đặt ở rất xa (có thể tận nước ngoài). Thay vì cất ảnh đầy bộ nhớ điện thoại của mẹ, ảnh sẽ bay qua đường dây Internet đến cất ở \"đám mây\" đó một cách an toàn."
  },
  {
    qSnippet: "chia sẻ toàn bộ lịch của bạn",
    correctAnswers: ["3"],
    explanation: "Số 3 trên hình chỉ vào biểu tượng quyển lịch có mũi tên bay ra (Share Calendar). Bấm vào đó giống như việc em photo thời khóa biểu của em rồi gửi cho bạn thân, để bạn ấy biết hôm nay em rảnh môn nào để cùng đi chơi."
  },
  {
    qSnippet: "đúng khi nói về Google Calendars",
    correctAnswers: ["Bạn có thể đăng ký lịch trực tuyến", "Những ngày lễ có thể được thêm vào"],
    explanation: "Lịch Google rất thông minh. Nó cho phép em theo dõi lịch học của nhà trường gửi qua mạng (đăng ký trực tuyến). Ngoài ra, nó còn tự động đánh dấu đỏ sẵn các ngày Tết hay Quốc Khánh (thêm ngày lễ) để em biết sắp được nghỉ học."
  },
  {
    qSnippet: "thiết bị xuất nào sau đây được sử dụng để điều khiến âm thanh",
    correctAnswers: ["Loa (Speakers)"],
    explanation: "\"Thiết bị xuất\" là những đồ vật mang thông tin từ bên trong máy tính tống ra bên ngoài cho em xem hoặc nghe. Loa phát ra tiếng nhạc cho em nghe, nên nó là thiết bị xuất âm thanh. (Micro thu tiếng vào thì gọi là thiết bị nhập)."
  },
  {
    qSnippet: "thay thế những từ bị sai chính tả",
    correctAnswers: ["Autocorrect"],
    explanation: "Chữ \"Auto\" nghĩa là tự động, \"Correct\" là đúng. Tính năng này giống như một chiếc \"Cục tẩy ma thuật\". Khi em lỡ tay gõ sai chữ \"mèo\" thành \"meò\", nó sẽ lập tức tự động sửa lại cho đúng mà em không cần bấm nút xóa."
  },
  {
    qSnippet: "thông tin hiển thị từ khu vực nào của Settings",
    correctAnswers: ["System"],
    explanation: "\"System\" nghĩa là Hệ thống trung tâm. Nơi này khám sức khỏe tổng quát cho máy tính của em. Em muốn chỉnh sửa phần cơ bản nhất như màn hình sáng tối, độ to nhỏ âm thanh tổng thì phải vào khu vực này."
  },
  {
    qSnippet: "biểu tượng hình mặt trời trên bảng điều khiển",
    correctAnswers: ["Độ sáng (Brightness)"],
    explanation: "Biểu tượng mặt trời đại diện cho ánh nắng rực rỡ. Khi kéo thanh mặt trời này lên cao, màn hình điện thoại của em sẽ sáng bừng lên như ban ngày; kéo xuống thấp thì màn hình sẽ tối dịu lại để đỡ đau mắt."
  },
  {
    qSnippet: "USB nào có tốc độ truyền có thể lên đến 12 Mbps",
    correctAnswers: ["USB 1.0"],
    explanation: "Chuyển dữ liệu bằng USB giống như dùng xe chở đồ. USB 1.0 là đời cũ nhất, cổ nhất, chạy chậm rì giống như chiếc xe đạp (chỉ đi được 12 Mbps). Ngày nay chúng ta đã có USB 3.0 chạy siêu nhanh như xe đua rồi."
  },
  {
    qSnippet: "Các nhà cung cấp bán nhiều hàng hóa và dịch vụ trực tuyến",
    correctAnswers: ["Hỗ trợ iPhone (iPhone Support)", "Microsoft Office 365"],
    explanation: "(Giống câu 11). \"Dịch vụ\" là sự giúp đỡ hoặc phần mềm cho thuê, em không cầm trên tay được. Việc nhờ người sửa lỗi iPhone qua mạng và thuê phần mềm gõ chữ Office 365 là dịch vụ. Còn tai nghe hay máy iPad em cầm sờ được thì gọi là hàng hóa vật chất."
  },
  {
    qSnippet: "Đề xuất của Google là một tính năng",
    correctAnswers: ["Tự động hoàn thành (autocomplete)"],
    explanation: "Google giống như người bạn có phép thuật đọc suy nghĩ. Khi em mới gõ \"Cách gấp...\", Google đoán ngay em muốn tìm \"Cách gấp máy bay giấy\" và hiện sẵn ra cho em bấm chọn luôn. Việc này gọi là \"tự động hoàn thành\" câu nói giúp em."
  },
  {
    qSnippet: "chuyển đổi dữ liệu sang dạng thức không thể nhận dạng",
    correctAnswers: ["Mã hóa Encryption"],
    explanation: "\"Mã hóa\" giống như việc em viết một bức thư mật bằng mực tàng hình hay ký hiệu người ngoài hành tinh. Nếu kẻ trộm có lấy được bức thư, hắn cũng chỉ thấy những chữ giun dế loằng ngoằng (không thể nhận dạng), giữ cho bí mật của em được an toàn."
  },
  {
    qSnippet: "phân tán mực dạng bột",
    correctAnswers: ["Máy in Laser"],
    explanation: "Khác với máy in dùng nước mực lỏng, máy in Laser sử dụng những hạt bụi mực khô siêu nhỏ (dạng bột). Khi in, máy dùng sức nóng để làm chảy hạt bột này và dán chặt nó vào tờ giấy."
  },
  {
    qSnippet: "Loại máy in nào phun mực lên giấy khi in",
    correctAnswers: ["Inkjet"],
    explanation: "Chữ \"Ink\" tiếng Anh là mực nước, \"Jet\" là vòi phun xịt. Cỗ máy này có vô số chiếc vòi xịt bé xíu xiu, chuyên xịt từng giọt mực lỏng màu xanh, đỏ, vàng lên mặt giấy để vẽ nên những bức tranh nhiều màu sắc."
  }
];

// Update quizSets
const t1 = quizSets.find(t => t.id === 'c1-t1');
if (t1) {
    t1.questions.forEach(q => {
        updates.forEach(up => {
            if (q.question.includes(up.qSnippet)) {
                // To avoid setting array object directly, we map to correctAnswers format
                // In data.js, matching correctly expects an object or array.
                // Our front-end app.js compares: uAns[idx] !== cAns[idx]. So cAns for matching should be an array or object.
                // We'll set q.correctAnswers = up.correctAnswers.
                // Wait, if up.correctAnswers is an object, app.js will check cAns[idx]. Since object keys are "0", "1", it works.
                q.correctAnswers = up.correctAnswers;
                q.explanation = up.explanation;
            }
        });
    });
}

// Ensure the updated data is valid JSON
const updatedContent = `const quizSets = ${JSON.stringify(quizSets, null, 2)};\n`;
fs.writeFileSync(dataFile, updatedContent, 'utf-8');
console.log('Successfully updated data.js with answers and explanations!');
