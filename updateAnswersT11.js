const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "tránh mỏi mắt khi gõ phím",
    correctAnswers: ["Cách một sải tay"],
    explanation: "Khoảng cách hoàn hảo từ mắt em đến màn hình máy tính là đúng bằng một sải tay (chiều dài cánh tay). Nếu để quá gần (nửa sải tay) mắt sẽ bị chói, còn nếu để quá xa em sẽ phải nheo mắt lại mới đọc được chữ."
  },
  {
    qSnippet: "Cánh tay của một người nên đặt ở góc độ nào",
    correctAnswers: ["90 độ"],
    explanation: "Khi gõ máy tính, em nên thả lỏng vai và gập khuỷu tay lại thành một góc vuông 90 độ (giống như hình chữ L). Tư thế này giúp máu lưu thông tốt và tay em không bị mỏi khi làm việc lâu."
  },
  {
    qSnippet: "Cổ tay của một người nên được đặt như thế nào",
    correctAnswers: ["Đặt thẳng"],
    explanation: "Cổ tay của em phải luôn được 'Đặt thẳng' song song với bàn phím, giống như một tư thế đánh đàn piano vậy. Đừng bẻ gập cổ tay hay tì nặng lên mặt bàn vì nó sẽ làm kẹt các dây thần kinh gây đau nhức."
  },
  {
    qSnippet: "tác động tiêu cực của FOMO",
    correctAnswers: ["Trầm cảm", "Sự cô đơn"],
    explanation: "Hội chứng sợ bị bỏ lỡ (FOMO) khiến em lúc nào cũng dán mắt vào mạng xã hội và thấy buồn bã vì nghĩ rằng mọi người đang đi chơi vui vẻ mà không rủ mình. Lâu ngày, nó sẽ dẫn đến Cảm giác cô đơn và Trầm cảm."
  },
  {
    qSnippet: "Bryce đang bị lo lắng và trầm cảm do hội chứng sợ bỏ lỡ",
    correctAnswers: ["Mỗi khi thích thú một hoạt động nào đó, anh ấy phải ngay lập tức cập nhật trạng thái", "Anh ấy cần hiểu tất cả những trò đùa mà bạn bè của anh ấy đăng trên mạng xã hội"],
    explanation: "Người bị FOMO luôn có cảm giác sợ bị 'tối cổ'. Nên hễ có chuyện vui là họ phải khoe lên mạng ngay, và luôn cố gắng đọc hết mọi tin tức, hiểu mọi câu nói đùa trên mạng để chứng tỏ mình bắt kịp xu hướng với bạn bè."
  },
  {
    qSnippet: "hai ví dụ về hội chứng FOMO",
    correctAnswers: ["Mua trước một bảng điều khiển trò chơi mới để đảm bảo rằng bạn không phải là người duy nhất không có", "Bạn lo lắng khi phát hiện ra bạn bè của mình đang vui vẻ trên mạng xã hội mà không có bạn"],
    explanation: "Ví dụ rõ nhất của FOMO là em vòi vĩnh xin tiền bố mẹ mua đồ chơi mới chỉ vì sợ 'thua kém bạn bè', hoặc em luôn cảm thấy bực tức, buồn bã khi thấy bạn bè đi ăn đi chơi mà không rủ mình."
  },
  {
    qSnippet: "Đối với mỗi tuyên bố về FOMO",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Đúng" },
    explanation: "FOMO (Fear Of Missing Out) chính là Hội chứng Sợ bị bỏ lỡ các niềm vui hay tin tức hot. Nó hoàn toàn không liên quan gì đến việc... đeo khẩu trang y tế đâu nhé!"
  },
  {
    qSnippet: "dấu hiệu cảnh báo lừa đảo công nghệ cao",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Đúng" },
    explanation: "Lừa đảo qua mạng (Catfishing) là khi kẻ xấu lấy ảnh giả để kết bạn. Dấu hiệu lộ liễu nhất là họ liên tục tìm cách mượn tiền em, và luôn kiếm cớ từ chối Gọi Video vì sợ bị lộ khuôn mặt thật của họ."
  },
  {
    qSnippet: "ngăn ngừa chấn thương do căng thẳng thường xuyên",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Đúng" },
    explanation: "Để ngồi không bị đau lưng, bàn chân em phải chạm hẳn xuống sàn nhà (không được kiễng hay lơ lửng), khuỷu tay gập vuông góc 90 độ thoải mái. Tuyệt đối không ngồi xổm hay gác chân làm đầu gối cao hơn hông nhé."
  },
  {
    qSnippet: "phát biểu về thanh toán kỹ thuật số",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Đúng" },
    explanation: "Thanh toán kỹ thuật số là khi em dùng điện thoại quét mã QR hoặc cà thẻ để mua đồ mà không cần dùng tiền giấy. Vậy nên 'Tiền mặt' chắc chắn không phải là thanh toán kỹ thuật số rồi!"
  },
  {
    qSnippet: "hành động đó gây mỏi mắt",
    correctAnswers: { "0": "Mỏi mắt", "1": "Không mỏi mắt", "2": "Không mỏi mắt", "3": "Không mỏi mắt" },
    explanation: "Làm việc trong phòng tối thui mà chỉ có ánh sáng rực rỡ từ màn hình máy tính chiếu vào mặt sẽ khiến mắt em làm việc quá sức và cực kỳ mỏi. Hãy luôn bật đủ đèn trong phòng nhé!"
  },
  {
    qSnippet: "chặn truy cập camera là thích hợp",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Đúng" },
    explanation: "Nếu em tải trò chơi Đua xe mà nó đòi quyền Camera thì em phải chặn ngay (đua xe đâu cần chụp ảnh). Hoặc khi em xem ca nhạc có hàng ngàn người xem, em cũng nên tắt Camera để đỡ tốn mạng."
  },
  {
    qSnippet: "ví dụ về catfishing",
    correctAnswers: ["Tạo một hồ sơ hư cấu", "Giả làm người khác"],
    explanation: "Catfishing là trò lừa tình lừa tiền trên mạng. Kẻ xấu thường tải ảnh của các hotboy/hotgirl về, tạo một hồ sơ (tài khoản) giả mạo để đi kết bạn, lừa gạt tình cảm hoặc xin xỏ tiền bạc của người khác."
  },
  {
    qSnippet: "mua hàng trong ứng dụng là gì",
    correctAnswers: ["Trẻ em có quyền sử dụng điện thoại thông minh"],
    explanation: "Mua hàng trong ứng dụng (In-app purchase) rất nguy hiểm nếu đưa điện thoại cho trẻ nhỏ chơi game. Các bé chưa hiểu chuyện có thể bấm nhầm vào các rương báu trong game và làm thẻ ngân hàng của bố mẹ bị trừ sạch tiền."
  },
  {
    qSnippet: "lời khuyên trước khi tham gia vào một thử thách trên Internet",
    correctAnswers: ["Đúng"],
    explanation: "Tuyệt đối đúng! Có rất nhiều thử thách trên mạng (Trend Tiktok) cực kỳ nguy hiểm và gây hại cho sức khỏe. Em luôn phải hỏi ý kiến bố mẹ hoặc người lớn trước khi bắt chước làm theo bất cứ trò đùa nào trên Internet."
  },
  {
    qSnippet: "bắt nạt trên mạng có thể làm gì",
    correctAnswers: ["Tìm kiếm sự trợ giúp từ một chuyên gia được đào tạo", "Báo cáo lạm dụng cho những người có thẩm quyền"],
    explanation: "Khi bị trêu chọc hay đe dọa trên mạng, em tuyệt đối không nên chửi bới đánh nhau lại, cũng không được cắn răng chịu đựng. Hãy Báo cáo ngay cho bố mẹ, thầy cô giáo hoặc cảnh sát để được giúp đỡ."
  },
  {
    qSnippet: "sử dụng khóa cá nhân diễn ra dưới hình thức mã hóa nào",
    correctAnswers: ["Asymmetric"],
    explanation: "'Asymmetric' là mã hóa Bất đối xứng (giống như cái ổ khóa và chìa khóa có hình dạng khác nhau). Người gửi dùng khóa công khai để khóa hộp lại, còn em có chiếc khóa cá nhân (Private Key) duy nhất để mở hộp ra."
  },
  {
    qSnippet: "Restrict Editing trong Microsoft Word",
    correctAnswers: ["Định dạng có thể bị hạn chế", "chỉnh sửa có thể bị hạn chế đối với các khu vực"],
    explanation: "Chức năng Hạn chế chỉnh sửa rất thông minh. Em có thể khóa các định dạng (không cho đổi font chữ), hoặc dán băng dính khóa một nửa trang giấy, chỉ chừa lại đúng một ô trống cho bạn điền tên vào thôi."
  },
  {
    qSnippet: "chống lại cảm giác FOMO",
    correctAnswers: ["ẩn những người khoe khoang nhiều", "Gặp gỡ trực tiếp với mọi người"],
    explanation: "Để không bị ghen tị (FOMO), em hãy thẳng tay bấm nút 'Ẩn' bớt những người khoe khoang đồ hiệu trên mạng. Đồng thời em hãy tắt máy tính, bước ra ngoài chơi thể thao và gặp mặt bạn bè trực tiếp nhé."
  },
  {
    qSnippet: "cố gắng thiết lập mối quan hệ",
    correctAnswers: ["Catfishing"],
    explanation: "Khi một người lạ trên mạng cứ liên tục nhắn tin khen ngợi, giả vờ làm quen để tạo mối quan hệ tình cảm, đó 99% là trò lừa đảo mạo danh (Catfishing) để trục lợi."
  },
  {
    qSnippet: "vô hiệu hóa quyền truy cập vào máy ảnh trên thiết bị",
    correctAnswers: { "0": "1", "1": "2", "2": "6", "3": "4", "4": "5", "5": "3" },
    explanation: "Để tắt Camera trên trình duyệt Chrome: Đầu tiên bấm vào dấu 3 chấm -> Cài đặt (Settings) -> Chọn Quyền riêng tư (Privacy) -> Cài đặt trang web (Site Settings) -> Chọn Máy ảnh (Camera) -> và tắt công tắc đi."
  },
  {
    qSnippet: "Kết quả cuối cùng của việc mã hóa văn bản",
    correctAnswers: ["bản mã"],
    explanation: "Khi em đem một bức thư bình thường (văn bản thô) cho vào cỗ máy mã hóa. Đầu ra sẽ là một đống ký tự lộn xộn không ai đọc được, đó được gọi là 'Bản mã' (Ciphertext)."
  },
  {
    qSnippet: "công thái học phù hợp khi sử dụng bàn phím",
    correctAnswers: ["Bàn chân phải phẳng trên sàn", "Các ngón tay nên hơi cong"],
    explanation: "Tư thế chuẩn 'chuẩn điểm 10' khi gõ máy tính: Bàn chân đặt bằng phẳng xuống mặt đất, các ngón tay phải hơi cong lên giống như em đang úp tay để cầm một quả bóng tennis nhỏ vậy."
  },
  {
    qSnippet: "tắt camera trên thiết bị trực tuyến của mình trong hai trường hợp nào",
    correctAnswers: ["trò chuyện với những người chơi khác trong phiên chơi trò chơi trực tuyến", "xem chuyến tham quan đại học ảo với hàng trăm người tham gia"],
    explanation: "Vì sự an toàn, em tuyệt đối phải che Camera khi chơi game trực tuyến với người lạ trên mạng (để họ không nhìn thấy nhà em). Và khi xem hội thảo chung với hàng trăm người, em cũng nên tắt để bảo mật riêng tư."
  },
  {
    qSnippet: "phát biểu về mã hóa tập tin",
    correctAnswers: { "0": "Sai", "1": "Sai", "2": "Đúng" },
    explanation: "Máy tính sẽ mất thêm vài giây để 'dò chìa khóa' giải mã các tài liệu được khóa mã hóa, vì vậy nó làm giảm tốc độ truy cập một chút xíu (Đúng). Và em chỉ cần có chìa khóa thì ngồi ở máy nào cũng mở được chứ không nhất thiết phải là máy tính cũ (Sai)."
  },
  {
    qSnippet: "Lý do thiếu tính năng này là gì",
    correctAnswers: ["Người dùng có phiên bản Windows 10 Home"],
    explanation: "Tính năng Mã hóa tệp tin (EFS) là một tính năng cao cấp dành cho doanh nghiệp. Các máy tính sử dụng hệ điều hành gia đình (Windows 10 Home) sẽ bị nhà sản xuất khóa bớt tính năng này đi."
  },
  {
    qSnippet: "cô ấy đóng giả là một người đàn ông 40 tuổi",
    correctAnswers: ["Catfishing"],
    explanation: "Tạo tài khoản giả mạo (lấy ảnh người khác) để đi lừa đảo xin tiền của phụ huynh trong trường là hành vi giả mạo danh tính, hay còn gọi là Catfishing. Đây là hành vi vi phạm pháp luật đó nhé!"
  },
  {
    qSnippet: "tính bảo mật của webcam",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Sai" },
    explanation: "Ngay cả khi em đã bấm 'Tắt' webcam trong máy, những Hacker siêu giỏi vẫn có thể lén lút bật nó lên. Cách an toàn 100% duy nhất là dán một miếng băng dính đen che cái lỗ Camera lại!"
  },
  {
    qSnippet: "Thanh toán kỹ thuật số hoạt động như thế nào",
    correctAnswers: ["yêu cầu liên kết với tài khoản ngân hàng hoặc thẻ tín dụng"],
    explanation: "Để có tiền 'ảo' quẹt thẻ hoặc chuyển khoản Momo, thì điều bắt buộc là cái ví điện tử đó phải được nối một sợi dây liên kết với một chiếc thẻ ngân hàng có chứa tiền 'thật' của bố mẹ em."
  },
  {
    qSnippet: "rủi ro sức khỏe khi sử dụng công nghệ kỹ thuật số",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Sai", "3": "Đúng" },
    explanation: "Quy tắc 20-20-20 nghĩa là cứ nhìn màn hình 20 phút, em lại nhìn xa 20 feet (6 mét) để mắt nghỉ ngơi (Đúng). Nhưng nếu sạc điện thoại gần giường và cứ nghe chuông báo tin nhắn kêu cả đêm thì em sẽ bị mất ngủ đấy nhé (Sai)."
  },
  {
    qSnippet: "nguy cơ tiềm ẩn và hậu quả của các bài đăng trên phương tiện truyền thông tiêu cực",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Đúng" },
    explanation: "Mạng xã hội là nơi lan truyền cảm xúc. Nếu em suốt ngày đọc lời chửi mắng trên mạng, em sẽ tự nhiên thấy buồn bã và Trầm cảm (Đúng). Nhà mạng điện thoại chỉ bán sim nghe gọi chứ họ không khóa Facebook của em đâu nhé (Sai)."
  },
  {
    qSnippet: "hai ảnh hưởng của hội chứng FOMO",
    correctAnswers: ["Suy giảm lòng tự trọng", "Tăng cường sử dụng mạng xã hội"],
    explanation: "Người bị hội chứng FOMO sẽ cắm mặt vào bấm điện thoại lướt Facebook 24/24. Khi liên tục thấy người khác khoe khoang giàu có giỏi giang, họ sẽ tự ti và cảm thấy mình thật kém cỏi (Suy giảm lòng tự trọng)."
  }
];

const t11 = quizSets.find(t => t.id === 'c5-t11' || t.title.toLowerCase().includes('test 11'));
if (t11) {
    t11.questions.forEach(q => {
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
                if (Array.isArray(up.correctAnswers) && up.correctAnswers.length > 0 && q.options && q.options.length > 0) {
                    let mappedAns = [];
                    up.correctAnswers.forEach(ca => {
                        let matchedOpt = q.options.find(opt => typeof opt === 'string' && opt.toLowerCase().includes(ca.toLowerCase()));
                        if (!matchedOpt) {
                           matchedOpt = q.options.find(opt => typeof opt === 'string' && opt.replace(/\\s+/g,'').toLowerCase().includes(ca.replace(/\\s+/g,'').toLowerCase()));
                        }
                        if (matchedOpt) mappedAns.push(matchedOpt);
                    });
                    if (mappedAns.length > 0) q.correctAnswers = mappedAns;
                } else if (!Array.isArray(up.correctAnswers)) {
                    q.correctAnswers = up.correctAnswers;
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
console.log('Successfully updated data.js for Test 11!');
