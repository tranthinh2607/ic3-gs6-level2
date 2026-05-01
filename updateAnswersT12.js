const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "Mục đích chính của việc lập phiên bản",
    correctAnswers: ["Để cho phép người dùng khôi phục các bản sao trước đó của tập tin."],
    explanation: "Lập phiên bản giống hệt như việc cứ 10 phút lại tự động chụp ảnh cuốn vở lại một lần. Lỡ như một lúc sau em lỡ tay hất đổ cốc nước làm ướt vở, em có thể dễ dàng tua lại cuốn vở ở lúc chưa bị ướt (khôi phục bản sao trước đó)."
  },
  {
    qSnippet: "ưu điểm của máy in phun và máy in laser",
    correctAnswers: { "0": "Máy in laser", "1": "Máy in laser", "2": "Máy in phun", "3": "Máy in phun" },
    explanation: "Máy in Laser dùng nhiệt độ nướng chín mực nên giấy khô ngay lập tức, hợp in chữ số lượng lớn. Còn máy in Phun thì phun từng giọt mực lỏng lên giấy nên màu sắc rực rỡ hơn để in ảnh, và nó tốn ít điện năng hơn."
  },
  {
    qSnippet: "tài khoản Google riêng để sử dụng tại trường học và cho mục đích cá nhân",
    correctAnswers: ["Chuyển từ tài khoản Google cá nhân sang tài khoản trường học"],
    explanation: "Trình duyệt của em giống như một ngôi nhà có 2 chiếc chìa khóa. Nếu tài liệu nằm trong kho của trường học, em chỉ cần bấm vào avatar góc phải và 'Chuyển đổi' (Switch) sang tài khoản của trường để lấy tài liệu nhé."
  },
  {
    qSnippet: "thông tin y tế không chính xác và gây hiểu lầm",
    correctAnswers: { "0": "Có", "1": "Không", "2": "Có", "3": "Không" },
    explanation: "Khi tranh luận trên mạng, em nên đưa ra lý lẽ nhẹ nhàng, dẫn chứng từ chuyên gia (Có). Không bao giờ được dùng lời lẽ chê bai người khác là 'ngớ ngẩn' hay IN HOA quát tháo ầm ĩ (Không)."
  },
  {
    qSnippet: "diễn giả khách mời thuyết trình",
    correctAnswers: ["máy tính xách tay để ghi chú trong khi nghe", "điện thoại thông minh để chụp ảnh các trang trình bày"],
    explanation: "Phép lịch sự khi nghe thuyết trình là em hãy ghi chép lại các kiến thức bổ ích (bằng máy tính hoặc chụp ảnh lại slide bài giảng), và luôn nhớ nhìn thẳng vào mắt người nói (giao tiếp bằng mắt) để họ thấy em đang rất chăm chú."
  },
  {
    qSnippet: "kết quả trả về chỉ xuất hiện các từ riêng lẻ Yankee",
    correctAnswers: ["Dấu ngoặc kép"],
    explanation: "Nếu em gõ Yankee Candle, Google sẽ tìm trang có chữ Yankee hoặc chữ Candle. Nhưng nếu em để chúng vào trong dấu ngoặc kép 'Yankee Candle', Google sẽ bắt buộc tìm chính xác cả cụm từ dính liền nhau đó."
  },
  {
    qSnippet: "đồng tác giả (Coauthor) bởi nhiều người dùng",
    correctAnswers: ["Nó phải được chia sẻ"],
    explanation: "\"Đồng tác giả\" là việc 2-3 bạn cùng nhảy vào đánh máy chung trên một tờ giấy. Để các bạn có thể nhảy vào được, việc đầu tiên là em phải mở cửa và \"Chia sẻ\" (Share) tờ giấy đó cho các bạn ấy cái đã."
  },
  {
    qSnippet: "cho phép xem xét các thay đổi và cung cấp phản hồi",
    correctAnswers: ["Theo dõi thay đổi (Track Changes)", "Nhận xét (Comments)"],
    explanation: "Giống như cô giáo dùng bút đỏ chấm bài cho em, chức năng 'Track Changes' tự động tô đỏ những chữ bị sửa. Còn chức năng 'Comments' giống như dán giấy nhớ màu vàng bên cạnh lề vở để nhận xét."
  },
  {
    qSnippet: "phối lại bài hát cho bản trình bày của mình",
    correctAnswers: ["Attribution"],
    explanation: "Để được phép đem nhạc của người khác về cắt ghép, 'chế' lại (phối lại), em phải tìm những bài hát có giấy phép Attribution (Ghi công). Tuyệt đối tránh các bài có chữ NoDerivatives (Không được sửa đổi) nhé."
  },
  {
    qSnippet: "không được sửa đổi mà không có sự cho phép",
    correctAnswers: ["NoDerivatives"],
    explanation: "Trong giấy phép, 'No' là Không, 'Derivatives' là Chế biến/Sửa đổi. Vậy nên nếu tác giả gắn mác 'NoDerivatives', em chỉ được phép đem ảnh của họ đi khoe với mọi người, nhưng tuyệt đối không được tự ý vẽ thêm râu hay bôi bẩn lên bức ảnh đó."
  },
  {
    qSnippet: "ví điện tử như Apple Pay hoặc Google Pay",
    correctAnswers: ["Yêu cầu bạn ủy quyền mọi giao dịch"],
    explanation: "Ví điện tử trên điện thoại (như Apple Pay) cực kỳ an toàn vì nó luôn hỏi ý kiến chủ nhân. Em phải dùng khuôn mặt (FaceID) hoặc vân tay (TouchID) để cho phép (ủy quyền) thì nó mới thực hiện chuyển tiền."
  },
  {
    qSnippet: "phản hồi không đồng ý với một bài đăng",
    correctAnswers: ["Sai"],
    explanation: "Sai hoàn toàn! Nếu người kia dùng lời lẽ tức giận, chửi bới để đăng bài, em tuyệt đối không được 'ăn miếng trả miếng' bằng giọng điệu xấu xí đó. Hãy luôn giữ bình tĩnh và trả lời một cách lịch sự nhé."
  },
  {
    qSnippet: "Thanh toán kỹ thuật số hoạt động như thế nào",
    correctAnswers: ["liên kết với tài khoản ngân hàng hoặc thẻ tín dụng"],
    explanation: "Để có tiền 'ảo' quẹt thẻ hoặc chuyển khoản Momo, thì điều bắt buộc là cái ví điện tử đó phải được nối một sợi dây liên kết với một chiếc thẻ ngân hàng có chứa tiền 'thật' của bố mẹ em."
  },
  {
    qSnippet: "phỏng vấn những người lọt vào vòng chung kết",
    correctAnswers: ["Video Conference", "Phone Call"],
    explanation: "Để phỏng vấn ứng viên ở rất xa, công ty sẽ dùng Gọi điện thoại (Phone Call) để nghe giọng nói, hoặc Gọi Video (Video Conference) để có thể nhìn thấy khuôn mặt và phong thái của ứng viên một cách rõ ràng nhất."
  },
  {
    qSnippet: "mua hàng trong ứng dụng cho phù hợp với mô tả",
    correctAnswers: { "0": "Vật tư không tiêu hao", "1": "Tự động gia hạn", "2": "Không tự động gia hạn", "3": "Vật tư tiêu hao" },
    explanation: "Tiền xu chơi game dùng xong là mất (Tiêu hao). Mở khóa chức năng VIP là mở vĩnh viễn (Không tiêu hao). Thuê phim 1 ngày tự hết (Không tự động gia hạn). Còn đăng ký Netflix tháng nào cũng tự trừ tiền (Tự động gia hạn)."
  },
  {
    qSnippet: "phân loại từng mục là Hàng hóa hay Dịch vụ",
    correctAnswers: { "0": "Dịch vụ", "1": "Dịch vụ", "2": "Hàng hóa", "3": "Hàng hóa" },
    explanation: "'Hàng hóa' là những đồ vật em có thể cầm nắm được (Cục phát Wifi, cái tai nghe). Còn 'Dịch vụ' là những thứ vô hình người ta làm cho em (cho thuê chỗ cất dữ liệu đám mây, cho thuê phần mềm)."
  },
  {
    qSnippet: "xuất hiện ở bên phải của trang Web này",
    correctAnswers: ["Hộp trò chuyện (Chatbot)", "Chatbot", "Hộp trò chuyện"],
    explanation: "Những hộp tin nhắn nhỏ tự động bật lên ở góc phải màn hình Web và hỏi 'Tôi có thể giúp gì cho bạn?' thường là Chatbot. Đó là những con rô-bốt thông minh được lập trình sẵn để trả lời câu hỏi của em."
  },
  {
    qSnippet: "Thẻ ghi nợ, thẻ tín dụng, thanh toán chuyển khoản",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Đúng" },
    explanation: "Thanh toán kỹ thuật số là khi em dùng điện thoại quét mã QR hoặc cà thẻ để mua đồ mà không cần dùng tiền giấy. Vậy nên 'Tiền mặt' chắc chắn không phải là thanh toán kỹ thuật số rồi!"
  },
  {
    qSnippet: "hình thức giao tiếp phù hợp với tình huống",
    correctAnswers: { "0": "Bài đăng trên Blog", "1": "Tin nhắn văn bản", "2": "Bài đăng trên diễn đàn", "3": "Email" },
    explanation: "Blog là nhật ký trên mạng. Tin nhắn (SMS) dùng để báo nghỉ học nhanh chóng. Diễn đàn là nơi hoàn hảo để hỏi đáp về game. Còn Email dùng cho việc trang trọng như đòi tiền công ty."
  },
  {
    qSnippet: "cộng đồng mạng xã hội gồm những người có cùng sở thích",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Sai", "3": "Sai" },
    explanation: "Khi dùng mạng xã hội, em luôn phải nói chuyện tôn trọng người khác (Đúng). Tuyệt đối không để lộ Email hay số điện thoại cho người lạ (Sai). Và đừng bao giờ nghĩ những gì em đăng lên mạng là 'riêng tư' nhé, ai cũng có thể xem được đó!"
  },
  {
    qSnippet: "thay phiên nhau trình bày thông tin trên Camera",
    correctAnswers: ["Đóng bất kỳ chương trình", "Đảm bảo rằng hình ảnh", "Kiểm tra và luyện tập"],
    explanation: "Khi thuyết trình, em sẽ phải chia sẻ màn hình máy tính. Vì vậy em phải dọn dẹp đóng hết các chương trình rác, kiểm tra kỹ hình ảnh cho lịch sự và tập bấm thử nút chia sẻ trước nhé."
  },
  {
    qSnippet: "Nhóm của bạn sẽ thảo luận thông qua công cụ hội thảo Video",
    correctAnswers: ["Kiểm tra trước công nghệ hội thảo Video", "Đặt camera của bạn ngang tầm mắt"],
    explanation: "Trước khi họp nhóm bằng Video, em phải bật thử camera và micro xem có hoạt động tốt không (Kiểm tra công nghệ). Đừng quên đặt camera ngang tầm mắt để các bạn nhìn thấy khuôn mặt rạng rỡ của em nhé."
  },
  {
    qSnippet: "Bạn lãnh đạo một nhóm gồm những người thuộc các nền văn hóa",
    correctAnswers: ["Đề nghị hỗ trợ riêng cho một thành viên", "Sử dụng các tính năng như Giơ tay"],
    explanation: "Là một người đội trưởng tốt, em nên hướng dẫn riêng cho những bạn chưa rành về máy tính (Hỗ trợ riêng). Và trong cuộc họp, hãy khuyến khích mọi người dùng nút 'Giơ tay' để tất cả đều được công bằng phát biểu ý kiến."
  },
  {
    qSnippet: "quá trình chuyển đổi dữ liệu sang dạng thức không thể nhận dạng",
    correctAnswers: ["Mã hóa Encryption"],
    explanation: "Mã hóa (Encryption) là phép thuật biến chữ bình thường thành những ký hiệu lộn xộn không ai hiểu được để bảo vệ dữ liệu khỏi kẻ trộm. Chỉ có chiếc 'chìa khóa' đúng mới có thể giải mã chúng."
  },
  {
    qSnippet: "bảo mật của thiết bị đa phương tiện di động",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Sai" },
    explanation: "Tuyệt đối không bao giờ được nhặt một chiếc USB rơi ngoài đường rồi cắm vào máy tính của em (Sai). Đó là cạm bẫy của Hacker chứa đầy Virus có thể phá hỏng máy tính và ăn cắp dữ liệu của em đó!"
  },
  {
    qSnippet: "sử dụng một chức năng không quen thuộc",
    correctAnswers: { "0": "Có", "1": "Không", "2": "Có", "3": "Không" },
    explanation: "Khi không biết sử dụng phần mềm, em có thể bấm nút Trợ giúp (Help) trong phần mềm hoặc lên Diễn đàn để hỏi. Trang hướng dẫn cài đặt chỉ dạy cách cài, chứ không dạy cách sử dụng đâu!"
  }
];

const t12 = quizSets.find(t => t.id === 'c5-t12' || t.title.toLowerCase().includes('test 12'));
if (t12) {
    t12.questions.forEach(q => {
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
console.log('Successfully updated data.js for Test 12!');
