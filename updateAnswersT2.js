const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "Khi mô tả Điện toán đám mây",
    correctAnswers: ["Sao lưu và Khôi phục (Back-up and Restore)", "Tiết kiệm chi phí (Cost Saving)", "Tính di động (Mobility)"],
    explanation: "\"Đám mây\" trên mạng giống như một chiếc ba lô ma thuật vô hình. Nó tự động cất giữ đồ cẩn thận không bao giờ sợ hỏng hay mất (Sao lưu), em không tốn tiền mua thẻ nhớ đắt tiền cắm vào máy (Tiết kiệm), và em có thể mở chiếc ba lô này lấy đồ ở bất kỳ nhà nào chỉ cần có mạng wifi (Tính di động)."
  },
  {
    qSnippet: "Tùy chọn nào sau đây là dịch vụ",
    correctAnswers: ["Sửa ống nước", "Cắt tóc"],
    explanation: "\"Dịch vụ\" là nhờ người khác làm giúp mình một việc gì đó bằng công sức của họ, mà mình không mang một đồ vật cụ thể nào về nhà. Nhờ chú thợ sửa vòi nước hay cô thợ cắt tóc cho mình là dịch vụ. Còn Trò chơi hay Quần áo là món đồ em có thể cầm trên tay nên gọi là hàng hóa."
  },
  {
    qSnippet: "tạo cuộc hẹn hoặc nhiệm vụ trên lịch",
    correctAnswers: ["Tần suất lặp lại sự kiện", "Lời nhắc"],
    explanation: "Khi em lưu lịch đi học bơi vào thứ Bảy, em có thể dặn chiếc lịch thông minh là \"tuần nào cũng tự ghi nhớ vào thứ Bảy nhé\" (Tần suất lặp lại) và \"nhớ kêu bíp bíp nhắc tôi trước 30 phút để tôi thay đồ\" (Lời nhắc)."
  },
  {
    qSnippet: "Hai tài nguyên nào có thể chỉ cho bạn cách sử dụng một tính năng",
    correctAnswers: ["Lệnh Help có trong chương trình", "Diễn đàn trực tuyến dành riêng để thảo luận về chương trình"],
    explanation: "Khi chơi một trò chơi mới trên máy tính mà không biết chơi, em có thể bấm nút \"Help\" (Trợ giúp) trong game để đọc luật chơi, hoặc lên các trang web nhóm trên mạng (Diễn đàn) để hỏi các anh chị đã chơi giỏi rồi chỉ cách cho."
  },
  {
    qSnippet: "xác nhận rằng bạn đã kết nối thành công với thiết bị in",
    correctAnswers: ["Đối với máy in mạng, hãy Ping thiết bị in", "Đối với máy in cục bộ, hãy xác nhận trạng thái sẵn sàng trong hàng đợi in của hệ điều hành"],
    explanation: "Để biết máy in đã thức dậy và sẵn sàng làm việc chưa: Nếu máy in không cắm dây mà dùng chung sóng wifi (máy in mạng), em gửi một lệnh \"Ping\" giống như gọi \"Alô có đó không?\" để xem máy in có trả lời không. Nếu máy in cắm dây trực tiếp vào máy tính (cục bộ), em chỉ cần mở màn hình ra xem máy có hiện chữ \"Ready\" (Sẵn sàng) hay không là được."
  },
  {
    qSnippet: "Lợi ích của Đăng nhập một lần (SSO)",
    correctAnswers: ["Sau khi đăng nhập, bạn có thể truy cập Email, lưu trữ tài liệu", "Giúp tài khoản của bạn có bảo mật mạnh mẽ hơn", "Bạn chỉ cần nhớ một tập hợp các chi tiết đăng nhập"],
    explanation: "SSO giống như một chiếc thẻ học sinh vạn năng. Thay vì phải nhớ nhiều chùm chìa khóa cho phòng thư viện, phòng máy tính, phòng y tế (ý E), em chỉ cần mở cửa đúng 1 lần bằng chiếc thẻ này là được vào hết các phòng (ý C). Thẻ này cũng được bảo vệ cực kỳ chắc chắn (ý D)."
  },
  {
    qSnippet: "dự đoán phần còn lại của từ và sau đó tự động hoàn thành",
    correctAnswers: ["Autocomplete"],
    explanation: "\"Auto\" là tự động, \"complete\" là hoàn thành. Giống như khi em mới viết chữ \"Ch\", máy tính thông minh đã đoán ngay em định viết chữ \"Chào bạn\" và nó viết nốt giúp em thật nhanh chóng."
  },
  {
    qSnippet: "giảm độ sáng để tiết kiệm pin",
    correctAnswers: ["3"],
    explanation: "Thanh kéo nằm ngang có hình ông mặt trời chính là nơi chỉnh độ sáng. Kéo sang phải (mặt trời to) thì màn hình chói sáng rực rỡ, kéo sang trái (mặt trời nhỏ) thì màn hình sẽ dịu tối lại, giúp điện thoại đỡ tốn pin hơn."
  },
  {
    qSnippet: "cung cấp lịch cho tất cả thành viên",
    correctAnswers: ["Mời các thành viên", "Chia sẻ lịch"],
    explanation: "Làm xong thời khóa biểu đi chơi cho cả nhà, máy tính của em vẫn đang giữ bí mật. Em phải gửi thư \"Mời\" bố mẹ vào xem và mở cửa \"Chia sẻ\" cho bố mẹ thấy. Giống như làm xong thiệp sinh nhật thì phải đem đi phát cho các bạn vậy."
  },
  {
    qSnippet: "CPU, card đồ họa và card mạng là loại thiết bị nào",
    correctAnswers: ["Thiết bị xử lý"],
    explanation: "Các linh kiện này nằm giấu kín bên trong máy tính, chúng làm nhiệm vụ giống như \"bộ não\" đang tập trung suy nghĩ, làm toán và giải quyết công việc liên tục. Vì vậy chúng được gọi là thiết bị \"xử lý\"."
  },
  {
    qSnippet: "quy trình lặp lại giúp thay thế sự tương tác của con người",
    correctAnswers: ["Tự động hóa (Automation)"],
    explanation: "Thay vì mỗi buổi sáng em phải tự tay dùng sức kéo rèm cửa lên, em cài đặt một cỗ máy cứ đúng 6h sáng là tự động kéo rèm. Việc nhờ máy móc làm thay mình những việc cứ lặp đi lặp lại mãi gọi là \"Tự động hóa\"."
  },
  {
    qSnippet: "thay đổi âm lượng trên máy tính Windows",
    correctAnswers: ["2"],
    explanation: "Vị trí số 2 nằm ở góc nhỏ bên dưới màn hình, có hình \"chiếc loa\" đang phát ra những sóng âm thanh cong cong. Chỉ cần bấm chuột vào hình chiếc loa đó là em có thể chỉnh tiếng to lên hoặc nhỏ đi."
  },
  {
    qSnippet: "nhiều tài khoản Microsoft",
    correctAnswers: ["Chuyển từ tài khoản Microsoft gia đình sang tài khoản Microsoft chơi game của bạn"],
    explanation: "Cùng một căn nhà nhưng em có nhiều chùm chìa khóa cho các căn phòng khác nhau (phòng gia đình, phòng game). Món đồ em cần tìm đang cất ở phòng game, nên em phải cất chìa khóa gia đình đi và lấy đúng chìa khóa phòng game ra mở cửa (chuyển đổi tài khoản) thì mới nhìn thấy đồ."
  },
  {
    qSnippet: "tập tin chỉ đọc (Read-only) và tập tin đọc-ghi (Read-Write)",
    correctAnswers: ["Người dùng khác có thể thay đổi tập tin có thuộc tính Đọc-Ghi", "Một tập tin được đặt thuộc tính Chỉ đọc (Read only) có thể được xem nhưng không được sửa đổi"],
    explanation: "Tập tin \"Chỉ đọc\" giống như em đi bảo tàng nhìn ngắm một bức tranh, em chỉ được ngắm (xem) chứ không được cầm bút vẽ bậy lên tranh của người ta (không được sửa đổi).\nTập tin \"Đọc-Ghi\" giống như một cuốn sổ nháp trên bàn, ai đi ngang qua cũng có thể đọc, và cũng có thể cầm bút tẩy xóa, viết thêm chữ mới vào đó (thay đổi tập tin)."
  },
  {
    qSnippet: "điều chỉnh cài đặt độ tương phản trên máy tính Windows",
    correctAnswers: ["4"],
    explanation: "Khu vực \"Ease of Access\" (Trợ năng) là một phòng y tế đặc biệt của máy tính. Nó có các công cụ giúp những người có đôi mắt kém có thể chỉnh màu sắc màn hình rõ rệt hơn (chỉnh độ tương phản) để không bị mỏi mắt."
  },
  {
    qSnippet: "về Trình duyệt Web",
    correctAnswers: { "0": "Sai", "1": "Sai", "2": "Đúng", "3": "Đúng" },
    explanation: "Trình duyệt Web là công cụ tìm kiếm -> Sai (Trình duyệt là \"chiếc xe\" chở em lên mạng, còn Google mới là \"chú cảnh sát\" tìm đồ giúp em).\nTrình duyệt Web là Internet -> Sai (Internet là con đường lộ khổng lồ, trình duyệt chỉ là chiếc xe chạy trên đường đó).\nTrình duyệt Web sử dụng URL để kết nối tài nguyên -> Đúng (URL chính là địa chỉ nhà chính xác để chiếc xe biết đường chạy tới).\nTrình duyệt Web là ứng dụng phần mềm giúp lấy thông tin -> Đúng (Nó là một chương trình cài trong máy tính để giúp em mở các trang mạng)."
  },
  {
    qSnippet: "cài đặt trình duyệt nào sau đây có thể thay đổi để đáp ứng nhu cầu sở thích",
    correctAnswers: ["Thêm tiện ích mở rộng", "Tắt Cookie"],
    explanation: "Thêm \"tiện ích mở rộng\" giống như gắn thêm chiếc giỏ hay đèn nháy cho chiếc xe đạp trình duyệt của em để nó tiện lợi và xịn hơn.\nTắt \"Cookie\" là để chặn các cửa hàng trên mạng không được đi theo sau lưng ghi chép lại thói quen xem đồ chơi của em."
  },
  {
    qSnippet: "phân biệt giữa máy in Laser và máy in phun",
    correctAnswers: ["Máy in laser sử dụng Toner, và máy in phun sử dụng mực in", "Máy in phun phù hợp hơn để in số lượng ít và máy in Laser phù hợp hơn để in số lượng nhiều"],
    explanation: "Máy in Laser dùng các hạt bụi mực khô (gọi là Toner) sấy nóng chảy lên giấy, nó chạy rất nhanh nên thích hợp để in cả đống sách vở. Còn máy in phun xịt những giọt mực lỏng (Ink), in chậm rãi và cho màu rất đẹp, nên hợp để ở nhà thỉnh thoảng in vài tấm ảnh kỉ niệm (in ít)."
  },
  {
    qSnippet: "lệnh in luôn được chuyển đến cùng một máy in này",
    correctAnswers: ["Đặt máy in yêu thích làm Mặc định"],
    explanation: "Cài đặt \"Mặc định\" giống như việc cô giáo chỉ định bạn lớp trưởng. Từ nay cứ có thông báo gì cô cứ đưa thẳng cho bạn lớp trưởng, không cần phải mất công hỏi xem hôm nay đưa cho ai nữa."
  },
  {
    qSnippet: "điện toán đám mây, tùy chọn nào sẽ được coi là nhược điểm",
    correctAnswers: ["Độ tin cậy (Reliability)", "Bảo mật (Security)", "Kết nối (Connectivity)"],
    explanation: "Gửi đồ lên kho \"đám mây\" xa xôi cũng có điểm yếu: Em bắt buộc phải có wifi thì mới mở kho lấy đồ được (Kết nối). Đôi khi mạng bị đứt cáp thì em sẽ không lấy được đồ ngay (Độ tin cậy). Và gửi đồ ở nhà kho chung trên mạng thì em phải giữ mật khẩu kỹ kẻo bị trộm (Bảo mật)."
  },
  {
    qSnippet: "khôi phục phiên bản trước của tập tin",
    correctAnswers: ["Trong File Explorer, bấm chuột phải vào tập tin và chọn Restore Previous Versions"],
    explanation: "Tính năng \"Restore Previous Versions\" giống hệt cỗ máy thời gian của Doraemon. Nếu em lỡ tay lấy màu đen tô hỏng bức tranh trên máy tính, em bấm nút này để máy tính tua ngược thời gian, biến bức tranh trở lại khoảnh khắc đẹp đẽ lúc em chưa bị tô hỏng."
  },
  {
    qSnippet: "sửa lỗi chính tả",
    correctAnswers: ["Tự động sửa lỗi (Autocorrect)"],
    explanation: "Đây chính là tính năng \"Cục tẩy ma thuật\". Khi em lỡ gõ sai, máy tính thông minh sẽ lập tức lấy tẩy xóa đi và tự viết lại thành chữ đúng một cách nhanh như chớp mà em không cần bấm nút xóa."
  },
  {
    qSnippet: "lưu trữ dữ liệu của mình trên hai vị trí lưu trữ nào",
    correctAnswers: ["Thẻ SD trong điện thoại", "Tài khoản Google Drive, OneDrive hoặc iCloud"],
    explanation: "Có 2 cách để cất giữ ảnh chụp: Một là cất vào chiếc thẻ nhớ nhỏ xíu cắm trực tiếp bên trong điện thoại (giống như cất tiền trong ví). Hai là cất lên các kho chứa khổng lồ vô hình trên mạng như Google Drive (giống như đem tiền gửi vào ngân hàng)."
  },
  {
    qSnippet: "Khớp từng cáp với thiết bị mà nó thường kết nối",
    correctAnswers: { "0": "HDMI", "1": "Audio", "2": "CAT6", "3": "USB" },
    explanation: "Truyền hình (Television) -> HDMI (Cáp xịn để truyền cả hình ảnh nét và âm thanh hay lên Tivi).\nLoa (Speakers) -> Audio (Sợi cáp có cái đầu tròn xoe chuyên cắm để nghe nhạc).\nThiết bị chuyển mạch (Switch) -> CAT6 (Đây là sợi dây cáp to có mạng lưới internet bên trong).\nBàn phím (Keyboard) -> USB (Cổng cắm quen thuộc hình chữ nhật để cắm bàn phím, chuột).\n\nCác dây cắm này giống như \"ống hút\", mỗi loại nước uống sẽ cần một chiếc ống hút có hình dáng riêng thì cắm vào mới vừa vặn được."
  },
  {
    qSnippet: "thay đổi độ tương phản", // Wait, Android phone contrast? Yes
    correctAnswers: ["4"],
    explanation: "Biểu tượng có hình người dang hai tay (Trợ năng) là một ngăn kéo đặc biệt. Nó chứa các công cụ giúp điện thoại hiện chữ to lên, màu sắc tách bạch rõ ràng (tương phản) để giúp các ông bà mắt kém vẫn có thể dùng điện thoại dễ dàng."
  },
  {
    qSnippet: "Mẹ của Minh có thị lực kém",
    correctAnswers: ["Cỡ chữ", "Màu sắc"],
    explanation: "Giống như khi mua một cuốn truyện, nếu chữ trong đó to thật to (Cỡ chữ) và màu chữ in rõ ràng trên giấy trắng không bị chói (Màu sắc) thì mẹ sẽ đọc rất dễ chịu mà không bị mỏi hay đau mắt."
  },
  {
    qSnippet: "Xác định phần mở rộng tập tin",
    correctAnswers: { "0": "Sai", "1": "Sai", "2": "Đúng", "3": "Đúng" },
    explanation: "Hình ảnh động là .jpg -> Sai (.jpg là bức ảnh đứng im như tượng. Ảnh nhúc nhích được phải là .gif).\n.txt giữ nguyên định dạng -> Sai (File .txt rất nghèo nàn, nó chỉ có chữ cái trơn tuột, không cho phép tô màu hay in nghiêng).\n.pdf giống hệt gốc nhưng không chỉnh sửa được -> Đúng (Nó giống như em chụp ảnh lại cuốn sách, ai cũng xem được nhưng không ai cầm tẩy để xóa chữ trên bức ảnh đó được).\nPhần mở rộng cho hình ảnh nền trong suốt là .png -> Đúng (Đuôi .png giống như họa sĩ vẽ tranh trên một miếng kính trong veo)."
  },
  {
    qSnippet: "Giảm độ sáng của màn hình trên máy tính Windows",
    correctAnswers: ["1"],
    explanation: "Chữ \"Display\" nghĩa là Màn hình. Bất cứ vấn đề gì liên quan đến ánh sáng chói hay tối, muốn làm chữ to hay nhỏ hiện ra trên mặt kính màn hình thì em đều phải vào khu vực này để chỉnh."
  },
  {
    qSnippet: "7 nguyên tắc thiết kế phần cứng",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Sai", "3": "Sai" },
    explanation: "Khi chế tạo máy móc, các kỹ sư phải làm sao cho món đồ đó ai cũng dùng được, dù là người già yếu (không mỏi mệt) hay người thuận tay trái tay phải (linh hoạt). Còn việc nâng cấp hay thay đồ mới không nằm trong 7 quy định gốc ban đầu này."
  },
  {
    qSnippet: "việc nén tập tin",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Sai", "3": "Sai" },
    explanation: "\"Nén\" giống như việc mẹ cất chăn bông mùa đông. Mẹ bỏ chăn to xù vào cái túi nilon rỗng, rồi dùng máy hút bụi hút sạch không khí đi (ép nhỏ lại). Chiếc chăn lập tức xẹp lép (.zip hoặc .rar) và nhét vào tủ rất gọn gàng."
  },
  {
    qSnippet: "tắt âm lượng", // Android volume
    correctAnswers: ["2"],
    explanation: "Nhìn vào biểu tượng cái loa ở vị trí số 2, em chạm ngón tay vào đó để nó đổi thành hình \"cái loa bị gạch chéo\". Giống như bắt chiếc điện thoại đeo khẩu trang lại, nó sẽ hoàn toàn im lặng và không phát ra tiếng ồn nữa."
  },
  {
    qSnippet: "kiểm soát hiển thị thông tin cụ thể trên lịch",
    correctAnswers: ["Lọc theo danh mục sự kiện", "Giữ riêng tư"],
    explanation: "Nếu lịch của em có quá nhiều chữ, em có thể dùng tính năng \"Lọc\" như một chiếc kính lúp, bảo nó chỉ hiện ra những ngày có sinh nhật bạn bè thôi cho dễ nhìn.\nVà nếu có những kế hoạch bí mật không muốn ai biết, em dùng tính năng \"Giữ riêng tư\" để khóa lại, chỉ một mình em được xem."
  }
];

const t2 = quizSets.find(t => t.id === 'c1-t2');
if (t2) {
    t2.questions.forEach(q => {
        updates.forEach(up => {
            // Use match by some robust check, e.g. ignoring case, because some texts are slightly different.
            // Replace matching logic: check if up.qSnippet words are in q.question
            let found = true;
            const words = up.qSnippet.replace(/[()?,.]/g, '').split(' ').filter(x => x.length > 2);
            for(let word of words) {
                if(!q.question.toLowerCase().includes(word.toLowerCase())) {
                    found = false;
                    break;
                }
            }
            if (found) {
                // If it's matching multiple answers or single answers, we need to ensure the options from correctAnswers match the strings in data.js.
                // data.js options might have extra text. We can let the user update exactly or just match substring in app.js.
                // In app.js we have: uAns.every(val => cAns.includes(val)) - wait, app.js checks exact match.
                // Let's ensure the cAns strings are exact from q.options.
                if (Array.isArray(up.correctAnswers)) {
                    let mappedAns = [];
                    up.correctAnswers.forEach(ca => {
                        let matchedOpt = q.options.find(opt => opt.toLowerCase().includes(ca.toLowerCase()));
                        if (matchedOpt) mappedAns.push(matchedOpt);
                    });
                    if (mappedAns.length > 0) q.correctAnswers = mappedAns;
                } else {
                    // It's an object for matching. The user provided {"0": "Đúng", ...}
                    // We just use what they provided as it maps to the order of choices.
                    // Let's verify choices text.
                    q.correctAnswers = up.correctAnswers;
                }
                q.explanation = up.explanation;
            }
        });
    });
}

const updatedContent = `const quizSets = ${JSON.stringify(quizSets, null, 2)};\n`;
fs.writeFileSync(dataFile, updatedContent, 'utf-8');
console.log('Successfully updated data.js for c1-t2!');
