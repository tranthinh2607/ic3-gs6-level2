const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "thao tác tạo thư mục mới trong File Explorer",
    correctAnswers: ["Ctrl + Shift + N"],
    explanation: "Tưởng tượng em muốn xây một ngôi nhà chứa đồ chơi mới thật nhanh. Thay vì đi tìm từng viên gạch, em chỉ cần dùng câu thần chú \"Ctrl + Shift + N\" là một thư mục mới tinh sẽ hiện ra ngay lập tức! Chữ N là viết tắt của từ \"New\" trong tiếng Anh, nghĩa là \"Mới\" đó em."
  },
  {
    qSnippet: "Nối từng phần mở rộng tập tin với tình huống hỗ trợ",
    correctAnswers: { "0": ".png", "1": ".txt", "2": ".jpg", "3": ".pdf" },
    explanation: "Đuôi tập tin giống như chiếc áo phù hợp cho từng công việc:\nÁo \".png\" là áo tàng hình, giúp hình nền biến mất để Logo nổi bật.\nÁo \".txt\" giống như một cuốn sổ nháp đơn giản, chỉ chứa chữ viết tay mộc mạc chưa được tô màu hay trang trí.\nÁo \".jpg\" là một bức ảnh nhẹ nhàng, dễ dàng dán lên bức tường \"trang web\" nhanh chóng.\nÁo \".pdf\" giống như một chiếc hộp kính khóa chặt, giúp bản vẽ của em không bị xô lệch khi gửi đi xa cho bác thợ in."
  },
  {
    qSnippet: "hạn chế về khả năng di chuyển",
    correctAnswers: ["Tùy chọn chỉ dùng bàn phím", "Tùy chọn chuyển giọng nói thành văn bản"],
    explanation: "Hãy tưởng tượng một người bạn bị đau tay, không thể cầm chuột để di chuyển được. Máy tính có phép thuật giúp bạn ấy: một là bạn ấy chỉ cần bấm các nút trên bàn phím là điều khiển được hết; hai là bạn ấy chỉ cần \"nói\" ra, máy tính sẽ nghe và tự động viết lại thành chữ giống như một cô thư ký ngoan ngoãn vậy."
  },
  {
    qSnippet: "Hai nguyên tắc thiết kế chung cho phần cứng máy",
    correctAnswers: ["Kích thước và không gian để tiếp cận", "Sử dụng công bằng"],
    explanation: "Tưởng tượng em làm ra một chiếc xe đạp đặc biệt. Để ai cũng chơi được, chiếc xe phải vừa vặn với tất cả các bạn (kể cả bạn cao hay bạn thấp) - đó là \"Không gian tiếp cận\". Thứ hai, chiếc xe phải dễ lái với tất cả mọi người, kể cả những bạn khiếm khuyết - đó là \"Sử dụng công bằng\". Phần cứng máy tính cũng phải được thiết kế thân thiện với mọi người như vậy đó!"
  },
  {
    qSnippet: "định kỳ lưu các phiên bản mới của tập tin",
    correctAnswers: ["áp phích.psd, bản sao áp phích.psd, ban sao ap phich 2.psd", "áp phích_bản nháp1.psd, áp phích_bản nháp2.psd, áp phích_BẢN CUỐI.psd"],
    explanation: "Khi em vẽ một bức tranh và muốn sửa đi sửa lại nhiều lần, em nên đánh số hoặc đặt tên thật rõ ràng như \"bản nháp 1\", \"bản nháp 2\", \"bản cuối\" để không bị nhầm. Cứ như việc em dán nhãn cho từng ngăn kéo đồ chơi vậy, lúc cần tìm \"bản mới nhất\" sẽ cực kỳ dễ dàng và không bao giờ bị lấy nhầm \"bản cũ\"."
  },
  {
    qSnippet: "thương mại điện tử bán nhiều hàng hóa và dịch vụ",
    correctAnswers: { "0": "Yes", "1": "Yes", "2": "No", "3": "No" },
    explanation: "Tưởng tượng \"Hàng hóa\" là những món đồ em có thể cầm nắm được bằng tay, như chiếc tai nghe hay bộ phát wifi. Còn \"Dịch vụ\" giống như khi em trả tiền để vào khu vui chơi hoặc nhờ người dọn phòng giúp, em không thể cầm nó mang về nhà cất đi được. Bộ nhớ đám mây hay phần mềm chính là những dịch vụ vô hình như vậy đó."
  },
  {
    qSnippet: "Microsoft Edge làm trình duyệt mặc định",
    correctAnswers: { "0": "Bước 1", "1": "Bước 2", "2": "Bước 3", "3": "Bước 4", "4": "Bước 5" },
    explanation: "Để đổi người mở web yêu thích của máy tính, đầu tiên em vào phòng cài đặt (Settings). Sau đó mở tủ ứng dụng (Apps), tìm đến ngăn ứng dụng gốc (Default apps). Em thấy bạn Google Chrome đang đứng ở đó, em hãy bấm vào gọi bạn ấy ra (Bước 4) và nhường lại vị trí đó cho bạn Microsoft Edge (Bước 5) nhé!"
  },
  {
    qSnippet: "tính năng tự động sửa (Autocorrect) luôn được kiểm soát",
    correctAnswers: ["Đúng"],
    explanation: "Tính năng sửa lỗi chính tả trên máy tính giống như một cô giáo bí mật. Cô ấy không làm việc chung cho tất cả mọi cuốn vở, mà tùy vào em dùng ứng dụng nào (cuốn vở nào), em có thể nhờ cô ấy sửa lỗi riêng cho cuốn vở đó thôi."
  },
  {
    qSnippet: "thêm ngày sinh của bố mình vào lịch cá nhân",
    correctAnswers: { "0": "15 phút trước", "1": "Không lặp lại", "2": "Mời người dự", "3": "Cả ngày" },
    explanation: "Cuốn lịch máy tính giống như một chiếc đồng hồ báo thức rất ngoan. Để báo thức reo sớm nhắc mua quà, em chỉnh ở chỗ \"15 phút trước\". Để sinh nhật năm nào cũng tự động nhắc, em chỉnh ở chỗ \"Không lặp lại\". Muốn rủ anh trai cùng tổ chức, em gửi giấy mời ở phần \"Mời người dự\". Và sinh nhật là ngày vui chơi từ sáng đến tối nên em chọn \"Cả ngày\" để không cần quan tâm mấy giờ bắt đầu hay kết thúc nhé!"
  },
  {
    qSnippet: "bên tham gia thanh toán kỹ thuật số",
    correctAnswers: { "0": "Nhà phát hành (Issuer)", "1": "Người bán (Merchant)", "2": "Ngân hàng thanh toán (Acquirer)" },
    explanation: "Tưởng tượng em đi mua đồ chơi. \"Nhà phát hành\" là người đưa cho em một chiếc thẻ ma thuật (thẻ ngân hàng) để tiêu tiền. \"Người bán\" là chú chủ cửa hàng đồ chơi. Còn \"Ngân hàng thanh toán\" giống như một chú bảo vệ đứng ở giữa, kiểm tra xem thẻ của em có tiền không và đồng ý cho em mang đồ chơi về."
  },
  {
    qSnippet: "độc giả khiếm thị",
    correctAnswers: ["Màu sắc (Color)", "Kích cỡ chữ (Size)"],
    explanation: "Các bạn có đôi mắt yếu nhìn mọi thứ giống như đang nhìn qua một màn sương mù vậy. Để giúp bạn ấy đọc chữ dễ hơn, mình cần phóng to chữ lên thật bự (Kích cỡ chữ), và đổi sang những màu sắc thật nổi bật (Màu sắc) để chữ không bị chìm lỉm vào nền giấy nhé!"
  },
  {
    qSnippet: "mua ứng dụng trên thiết bị di động",
    correctAnswers: ["Ứng dụng trên hệ điều hành iOS được cài đặt thông qua App Store", "Google Pay có thể được sử dụng tại các cửa hàng tạp hóa"],
    explanation: "\"App Store\" giống như một siêu thị đồ chơi dành riêng cho điện thoại iPhone (iOS), em phải vào đó mới mua được trò chơi mới. Còn \"Google Pay\" thì giống như một chiếc ví thần kỳ trên điện thoại, em có thể mang điện thoại ra cửa hàng tạp hóa gần nhà để chạm tít tít và trả tiền mua kẹo thật dễ dàng."
  },
  {
    qSnippet: "Đa số bàn phím đều có phím hoặc nút dùng để tăng giảm âm lượng",
    correctAnswers: ["Sai"],
    explanation: "Dù có một số bàn phím siêu nhân xịn xò có nút bấm to nhỏ âm lượng, nhưng không phải bàn phím nào cũng có đâu em nhé. Giống như không phải chiếc ô tô đồ chơi nào cũng có nút bấm còi, nhiều chiếc bàn phím chỉ có nút để gõ chữ thôi!"
  },
  {
    qSnippet: "quyền đối với tập tin tài liệu",
    correctAnswers: ["Việc đặt tài liệu thành Đọc-Ghi cho phép người khác thay đổi nội dung", "Chỉ có thể xem nhưng không được sửa đổi một tài liệu Chỉ đọc"],
    explanation: "Khi em cho bạn mượn một bức tranh, nếu em dặn là quyền \"Chỉ đọc\", bạn ấy chỉ được phép mở to mắt ra ngắm nhìn mà không được lấy bút vẽ bậy vào. Còn nếu em cho phép quyền \"Đọc-Ghi\", bạn ấy mới có quyền lấy bút tô thêm màu và viết chữ vào bức tranh của em."
  },
  {
    qSnippet: "quyền nào sau đây là cần thiết để có thể hiệu chỉnh tập tin",
    correctAnswers: ["Read-Write"],
    explanation: "\"Hiệu chỉnh\" nghĩa là sửa chữa lỗi sai. Giống như lúc em làm bài tập, em cần có đôi mắt để \"Đọc\" (Read) xem mình đã viết gì, và cần có đôi tay cầm bút để \"Ghi\" (Write) sửa lại chữ. Nên để sửa bài, máy tính cần cấp cho em cả hai quyền \"Read-Write\" cùng lúc!"
  },
  {
    qSnippet: "câu phát biểu về trình duyệt Web, hãy chọn Yes",
    correctAnswers: { "0": "Yes", "1": "Yes", "2": "Yes", "3": "No" },
    explanation: "Trình duyệt web giống như chiếc xe đạp của em. Em có thể gắn thêm rổ xe (thêm chức năng), dán hình siêu nhân (tùy chỉnh nút bấm), hay chọn nơi bắt đầu đạp xe (trang chủ). Nhưng em không thể dùng chiếc xe đạp để thay đổi biển số nhà của em được (thiết lập địa chỉ IP máy tính), vì việc đó là của ngôi nhà (hệ điều hành) cơ."
  },
  {
    qSnippet: "câu phát biểu về điện toán đám mây, hãy chọn Đúng hoặc Sai",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Sai", "3": "Đúng" },
    explanation: "Đám mây giống như một chiếc tủ khoá thần kỳ lơ lửng trên trời. Em có thể lấy đồ chơi từ tủ này ở bất kỳ đâu miễn là có phép thuật \"Internet\". Đám mây tự động làm mới đồ chơi cho em (không cần làm thủ công). Tuy nhiên, vì lơ lửng trên mạng nên nếu bị mất chìa khóa bí mật, đám mây dễ bị người xấu nhòm ngó hơn cất ở nhà, và đôi khi đám mây cũng bị mệt mỏi ốm yếu không mở ra được (sự cố dịch vụ) đó."
  },
  {
    qSnippet: "tài khoản Google riêng để sử dụng tại trường học",
    correctAnswers: ["Chuyển từ tài khoản Google cá nhân sang tài khoản trường học"],
    explanation: "Em hãy tưởng tượng mình có hai chiếc chìa khóa: một cái để mở tủ đồ ở nhà (tài khoản cá nhân), một cái để mở tủ ở lớp (tài khoản trường học). Khi em muốn lấy cuốn vở đang cất trong tủ của lớp, em bắt buộc phải cất chìa khóa nhà đi và cầm đúng chiếc chìa khóa của lớp học ra mới mở cửa được nhé."
  },
  {
    qSnippet: "âm thanh vẫn phát ra qua loa ngoài",
    correctAnswers: ["Quản lý thiết bị đầu ra"],
    explanation: "Âm thanh phát ra từ máy tính giống như nước chảy ra khỏi ống dẫn. \"Thiết bị đầu ra\" chính là cái vòi nước đó. Máy tính đang xả âm thanh nhầm qua cái vòi lớn (loa ngoài), em chỉ cần vào chỗ \"Quản lý thiết bị đầu ra\" để vặn khóa, chuyển cho dòng nước âm thanh chảy vào đúng cái vòi nhỏ xíu là chiếc \"tai nghe\" của em thôi!"
  },
  {
    qSnippet: "hệ điều hành iOS để tải xuống các ứng dụng",
    correctAnswers: ["App Store"],
    explanation: "Giống như em đi mua bánh kẹo thì phải đến \"Cửa hàng bách hóa\". Khi dùng điện thoại iPhone (hệ điều hành iOS) và muốn tải trò chơi mới, em phải đi vào một cửa hàng đặc biệt dành riêng cho iPhone tên là \"App Store\" (Cửa hàng ứng dụng) nhé."
  },
  {
    qSnippet: "cô nhập chữ cái “Y”, từ “Yes” sẽ xuất hiện",
    correctAnswers: ["Tự động hoàn tất (AutoComplete)"],
    explanation: "Máy tính lúc này giống như một người bạn rất hiểu ý em. Khi em vừa mở miệng nói chữ \"Y...\", bạn ấy đã nhớ ngay là em định nói \"Yes\" nên bạn ấy đọc nốt luôn từ đó ra giùm em. Phép thuật này gọi là \"Tự động hoàn tất\" để giúp em gõ chữ nhanh hơn mà không bị mỏi tay!"
  },
  {
    qSnippet: "CPU được tạo thành từ nhiều",
    correctAnswers: ["Lõi (Cores)"],
    explanation: "\"CPU\" là bộ não của máy tính, còn \"Lõi\" giống như những chú kiến thợ tí hon làm việc bên trong bộ não đó. Nếu chỉ có 1 chú kiến thì dọn dẹp rất chậm. Nên máy tính thường chứa rất nhiều \"Lõi\" (nhiều chú kiến) để cùng nhau chia việc ra làm, giúp máy tính tính toán siêu nhanh."
  },
  {
    qSnippet: "kết nối thành công với máy in",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Sai" },
    explanation: "Để biết bạn máy in đã được \"nắm tay\" với máy tính chưa, cách đơn giản và đúng nhất là em mở danh sách bạn bè (cửa sổ cài đặt Máy in & Máy quét) ra để xem tên bạn máy in có đang sáng đèn báo \"Đã kết nối\" hay không. Còn việc bắt buộc cắm dây mạng trực tiếp hay dùng dây xịn (CAT6) đều không cần thiết để kiểm tra."
  },
  {
    qSnippet: "sử dụng để nén tập tin",
    correctAnswers: ["7-Zip"],
    explanation: "Tưởng tượng em có rất nhiều quần áo mùa đông phồng to muốn nhét vào vali đi du lịch. Em sẽ cần một chiếc túi nilon hút chân không để ép quần áo xẹp lại xíu xiu. Trong máy tính, ứng dụng \"7-Zip\" chính là chiếc túi thần kỳ đó, nó giúp \"ép nén\" các tập tin lại cho thật nhỏ gọn để tiết kiệm chỗ trống!"
  },
  {
    qSnippet: "phát biểu về cáp kết nối",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Đúng" },
    explanation: "Các sợi dây cáp kết nối giống như những ống hút có công dụng khác nhau:\nCáp DVI và HDMI chỉ là \"ống hút hình ảnh\", chỉ dùng để dẫn hình ảnh từ máy tính sang màn hình TV hoặc máy chiếu để xem phim. Chúng không thể chuyển bài tập (tập tin) qua lại được đâu.\nCòn cáp CAT6 Ethernet là \"ống hút mạng\", giúp cắm nối máy tính vào cục phát wifi (bộ định tuyến) để có mạng Internet vào xem Youtube đó!"
  },
  {
    qSnippet: "tự động khởi động khi được kết nối",
    correctAnswers: ["AutoRun", "AutoPlay"],
    explanation: "\"AutoRun\" và \"AutoPlay\" giống như việc em vừa mới đút chiếc đĩa nhạc vào là máy tính chưa kịp hỏi đã tự động hét toáng lên bài hát. Việc tự động này đôi khi mở cửa lỡ cho những con bọ virus độc hại chạy vào. Tắt 2 tính năng này đi giống như dặn dò máy tính: \"Đợi tớ gật đầu bấm nút thì mới được chạy nhé!\"."
  },
  {
    qSnippet: "định dạng tập tin nào thường được sử dụng cho Logo",
    correctAnswers: ["GIF", "PNG"],
    explanation: "Logo (biểu tượng của công ty) thường cần sự gọn gàng và đặc biệt là phải có lớp nền \"tàng hình\" (trong suốt) để khi in lên áo trắng hay áo đen đều đẹp, không bị vướng một khung vuông xấu xí. Hai chiếc áo định dạng \"GIF\" và \"PNG\" có khả năng tàng hình ma thuật như vậy, nên Logo cực kỳ thích mặc chúng!"
  },
  {
    qSnippet: "đúng về cáp HDMI",
    correctAnswers: ["Đầu nối HDMI loại C còn được gọi là Mini-HDMI", "Đầu nối HDMI loại D được sử dụng phổ biến với điện thoại di động"],
    explanation: "Cáp HDMI giống như đường ống dẫn ma thuật truyền cả hình ảnh và âm thanh đi cùng nhau. Tùy vào cái lỗ cắm trên thiết bị to hay nhỏ mà nó có các phiên bản: loại C nhỏ xíu gọi là \"Mini\", còn loại D thì bé tí ti như con kiến, chuyên dùng để cắm vào điện thoại di động để mang hình ảnh từ điện thoại lên chiếu trên TV bự!"
  },
  {
    qSnippet: "tốc độ 10Gb/s và băng thông 600MHz",
    correctAnswers: ["CAT7"],
    explanation: "Cáp mạng giống như con đường cao tốc cho xe cộ (dữ liệu) chạy qua. Số đằng sau càng lớn thì đường càng xịn. Con đường mang tên CAT7 là một đường siêu cao tốc, vô cùng rộng rãi, cho phép các dữ liệu chạy vèo vèo với tốc độ chóng mặt 10Gb/s mà không bị tắc đường!"
  },
  {
    qSnippet: "khu vực ngoài trời đầy nắng",
    correctAnswers: ["Độ sáng"],
    explanation: "Khi em mang máy tính ra ngoài trời nắng, ánh mặt trời rất chói, làm màn hình máy tính có vẻ bị tối đi và khó nhìn. Giống như việc em cố đọc sách trong bóng tối vậy, mắt sẽ rất mỏi. Vì thế, em phải kéo thanh \"Độ sáng\" (Brightness) lên mức cao nhất, để màn hình sáng rực rỡ hơn cả ánh mặt trời, lúc đó mắt em mới nhìn rõ chữ mà không bị mệt."
  },
  {
    qSnippet: "tạo nên thông tin xác thực trang Web",
    correctAnswers: ["Địa chỉ email", "Mật khẩu"],
    explanation: "\"Thông tin xác thực\" giống như một chiếc chìa khóa đôi để mở cửa vào nhà (trang Web). Món thứ nhất là \"Địa chỉ email\" (tên gọi của em), và món thứ hai là \"Mật khẩu\" (mã số bí mật chỉ mình em biết). Phải có đủ cả hai mảnh chìa khóa này thì trang Web mới cho phép em vào trong."
  },
  {
    qSnippet: "Lợi thế của việc sử dụng ví điện tử như Apple Pay hoặc Google Pay",
    correctAnswers: ["Yêu cầu bạn ủy quyền mọi giao dịch"],
    explanation: "Dùng ví điện tử (Apple Pay, Google Pay) rất an toàn. Mỗi khi em muốn mua một món đồ chơi trên mạng, chiếc ví sẽ không tự động trừ tiền ngay, mà nó luôn \"hỏi xin phép\" (ủy quyền) bằng cách yêu cầu em phải quét khuôn mặt hoặc bấm dấu vân tay. Phải đúng là em cho phép thì tiền mới được chuyển đi."
  }
];

const t3 = quizSets.find(t => t.id === 'c1-t3');
if (t3) {
    t3.questions.forEach(q => {
        updates.forEach(up => {
            let found = true;
            const words = up.qSnippet.replace(/[()?,.]/g, '').split(' ').filter(x => x.length > 2);
            for(let word of words) {
                if(!q.question.toLowerCase().includes(word.toLowerCase())) {
                    found = false;
                    break;
                }
            }
            if (found) {
                if (Array.isArray(up.correctAnswers)) {
                    let mappedAns = [];
                    up.correctAnswers.forEach(ca => {
                        let matchedOpt = q.options.find(opt => opt.toLowerCase().includes(ca.toLowerCase()));
                        if (matchedOpt) mappedAns.push(matchedOpt);
                    });
                    if (mappedAns.length > 0) q.correctAnswers = mappedAns;
                } else {
                    q.correctAnswers = up.correctAnswers;
                }
                q.explanation = up.explanation;
            }
        });
    });
}

const updatedContent = `const quizSets = ${JSON.stringify(quizSets, null, 2)};\n`;
fs.writeFileSync(dataFile, updatedContent, 'utf-8');
console.log('Successfully updated data.js for c1-t3!');
