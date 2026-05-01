const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "tương tác với các thành viên của cộng đồng kỹ thuật số",
    correctAnswers: ["Đối xử lịch sự với người khác như cách bạn muốn được đối xử"],
    explanation: "Phép lịch sự luôn là quy tắc số một! Bất kể ở ngoài đời hay trên mạng, em luôn phải đối xử tôn trọng và tử tế với mọi người, y hệt như cách em muốn mọi người tử tế với mình vậy."
  },
  {
    qSnippet: "công cụ giao tiếp kỹ thuật số không đồng bộ",
    correctAnswers: ["Email", "Text Message"],
    explanation: "Giao tiếp 'không đồng bộ' nghĩa là em gửi tin nhắn đi, lúc nào người kia rảnh thì mới đọc và trả lời. Thư điện tử (Email) và Tin nhắn chữ (Text Message) là ví dụ điển hình. Còn gọi điện hay Video là phải có mặt ngay lập tức."
  },
  {
    qSnippet: "HY VỌNG ĐIỀU NÀY KHÔNG LÀM PHIỀN BÀ",
    correctAnswers: ["Quy tắc viết hoa"],
    explanation: "Viết toàn bộ chữ IN HOA giống như em đang quát thẳng vào mặt người khác (LA HÉT). Vì vậy, bạn sinh viên này đã vi phạm 'Quy tắc viết hoa' và khiến Email trở nên cực kỳ thiếu lịch sự."
  },
  {
    qSnippet: "chia sẻ thông tin y tế không chính xác",
    correctAnswers: { "0": "Có", "1": "Có", "2": "Không", "3": "Không" },
    explanation: "Khi tranh luận trên mạng, em nên đưa ra lý lẽ nhẹ nhàng, dẫn chứng từ chuyên gia (Có). Không bao giờ được dùng lời lẽ chê bai người khác là 'ngờ nghệch' hay IN HOA quát tháo ầm ĩ (Không)."
  },
  {
    qSnippet: "phương thức giao tiếp nào không đồng bộ",
    correctAnswers: ["Gửi tin nhắn văn bản", "Gửi email"],
    explanation: "Gửi tin nhắn và Gửi Email là giao tiếp 'không đồng bộ', nghĩa là người nhận có thể rảnh rỗi mở ra xem lúc nào cũng được, không cần phải trả lời ngay lập tức như Gọi điện thoại."
  },
  {
    qSnippet: "Xác định các trường của một Email",
    correctAnswers: { "0": "Bcc", "1": "Body", "2": "Cc", "3": "Low-Normal-High", "4": "Subject" },
    explanation: "To: Người nhận chính. Cc: Gửi thêm cho người khác cùng đọc. Bcc: Gửi bí mật không ai biết. Subject: Tiêu đề tóm tắt thư. Body: Phần giấy rộng rãi để viết nội dung chính."
  },
  {
    qSnippet: "hội thảo video lần đầu tiên",
    correctAnswers: ["Kiểm tra trước công nghệ", "Đặt camera của bạn ngang tầm mắt"],
    explanation: "Trước khi họp nhóm bằng Video, em phải bật thử camera và micro xem có hoạt động tốt không (Kiểm tra công nghệ). Đừng quên đặt camera ngang tầm mắt để các bạn nhìn thấy khuôn mặt rạng rỡ của em nhé."
  },
  {
    qSnippet: "email gửi tới phụ huynh học sinh",
    correctAnswers: ["Bcc"],
    explanation: "Thầy Hiệu trưởng phải dùng trường Bcc (Gửi ẩn danh) để giấu đi địa chỉ Email của tất cả mọi người. Nếu dùng To hoặc Cc, danh sách địa chỉ của hàng trăm phụ huynh sẽ bị lộ ra ngoài, vi phạm tính bảo mật riêng tư."
  },
  {
    qSnippet: "phương thức giao tiếp ở bên trái sao cho phù hợp",
    correctAnswers: { "0": "Blog post", "1": "Text message", "2": "Email message", "3": "Forum post" },
    explanation: "Blog là nhật ký cá nhân đăng mạng. Text message (tin nhắn) dùng để gọi người nhà tới đón nhanh. Email dùng cho việc trang trọng như đòi tiền công ty. Forum (diễn đàn) là nơi hoàn hảo để hỏi đáp với nhiều người."
  },
  {
    qSnippet: "ứng dụng nào sau đây có khả năng tạo cuộc họp mặt",
    correctAnswers: ["Zoom"],
    explanation: "Zoom là một phần mềm cực kỳ nổi tiếng dùng để gọi Video họp lớp hoặc họp công ty. Còn Google Drive, OneDrive hay Dropbox chỉ là các 'đám mây' để cất giữ tài liệu thôi."
  },
  {
    qSnippet: "đúng về một người nhạy cảm với sự đa dạng văn hóa",
    correctAnswers: ["chuẩn mực văn hóa cho các khách hàng quốc tế", "thông dịch viên cho cuộc họp"],
    explanation: "Mỗi quốc gia có một phong tục khác nhau. Một người tinh tế sẽ luôn tìm hiểu trước văn hóa của nước bạn (ví dụ như cách chào hỏi), và chuẩn bị sẵn người phiên dịch nếu hai bên không hiểu ngôn ngữ của nhau."
  },
  {
    qSnippet: "tin nhắn dài và để gửi tập tin",
    correctAnswers: ["Thư điện tử (Email)"],
    explanation: "Email (Thư điện tử) giống như một cái phong bì lớn. Nó cho phép em viết những bức thư rất dài và có thể nhét thêm cả hình ảnh, tài liệu (tập tin) vào bên trong để gửi đi một cách chuyên nghiệp."
  },
  {
    qSnippet: "đăng các mục trong diễn đàn cộng đồng Microsoft",
    correctAnswers: ["Microsoft"],
    explanation: "Tất nhiên rồi! Để tham gia bình luận hay hỏi đáp trên 'sân nhà' của Microsoft (diễn đàn cộng đồng), em cần phải đăng ký và sở hữu một tài khoản của chính Microsoft."
  },
  {
    qSnippet: "cuộc họp âm thanh và Video",
    correctAnswers: ["Microsoft Teams"],
    explanation: "Microsoft Teams là lớp học ảo trực tuyến, nơi thầy cô và các bạn có thể nhìn thấy mặt nhau (Video) và nghe giọng nói của nhau (Âm thanh). Box, Yammer hay Dropbox không có chức năng gọi video nhóm."
  },
  {
    qSnippet: "truyền thông trực tuyến với ví dụ",
    correctAnswers: { "0": "Roku, Amazon Firestick", "1": "Netflix, Disney+", "2": "Spotify, Kodi" },
    explanation: "'Thiết bị' là các cục cắm vào Tivi (Apple TV, Chromecast). 'Dịch vụ phim' là rạp chiếu bóng tại nhà (Netflix, Disney+). Còn 'Trình phát đa phương tiện' là các phần mềm giúp bật nhạc, chạy phim (Spotify, Trình duyệt Web)."
  },
  {
    qSnippet: "KHÔNG LÀM PHIỀN ÔNG",
    correctAnswers: ["Quy tắc viết hoa"],
    explanation: "(Giống câu trên) Sinh viên này đã viết IN HOA bừa bãi câu 'HY VỌNG ĐIỀU NÀY KHÔNG LÀM PHIỀN ÔNG!!!', điều này giống hệt như đang quát mắng người phỏng vấn. Vi phạm nghiêm trọng Quy tắc viết hoa!"
  },
  {
    qSnippet: "Mục đích của trường Bcc",
    correctAnswers: ["giữ bí mật địa chỉ Email"],
    explanation: "'Bcc' viết tắt của Blind Carbon Copy (Gửi bản sao mù). Người nhận sẽ bị 'bịt mắt' và không thể nhìn thấy địa chỉ Email của những người khác cùng nhận bức thư này. Rất an toàn để bảo mật!"
  },
  {
    qSnippet: "thay phiên nhau trình bày thông tin trên camera",
    correctAnswers: ["Đảm bảo rằng hình ảnh", "Kiểm tra và luyện tập", "Đóng bất kỳ chương trình"],
    explanation: "Khi thuyết trình, em sẽ phải chia sẻ màn hình máy tính. Vì vậy em phải dọn dẹp đóng hết các chương trình rác, kiểm tra kỹ hình ảnh cho lịch sự và tập bấm thử nút chia sẻ trước nhé."
  },
  {
    qSnippet: "cách nhiều múi giờ",
    correctAnswers: ["Không đồng bộ (Asynchronous)"],
    explanation: "Khi em ở Việt Nam (đang là ban ngày) còn bạn ở Mỹ (đang ngủ đêm), em không thể gọi Video bắt bạn thức dậy được. Em phải dùng giao tiếp 'Không đồng bộ' (như Email), để gửi đi và chờ sáng mai bạn ấy ngủ dậy sẽ trả lời."
  },
  {
    qSnippet: "sử dụng tất cả chữ in hoa trong một thư điện tử",
    correctAnswers: ["La hét"],
    explanation: "Trong thế giới mạng (Netiquette), việc gõ toàn bộ CHỮ IN HOA VÀO MẶT NGƯỜI KHÁC được hiểu là em đang nổi giận và La hét ầm ĩ. Hãy chỉ viết hoa chữ cái đầu câu cho lịch sự thôi nhé!"
  },
  {
    qSnippet: "cuộc gọi điện thoại khi đang họp",
    correctAnswers: ["Rời khỏi phòng họp"],
    explanation: "Phép lịch sự tối thiểu là không làm ồn ảnh hưởng đến người khác. Nếu có cuộc gọi gấp, em hãy cúi đầu xin lỗi nhẹ nhàng, sau đó bước hẳn ra bên ngoài (Rời khỏi phòng họp) rồi mới nghe điện thoại."
  },
  {
    qSnippet: "người nhận này cần được thêm vào trường nào sau đây",
    correctAnswers: ["Cc"],
    explanation: "'Cc' (Carbon Copy) là gửi thêm một bản sao. Những người trong danh sách Cc không phải là người giải quyết việc chính, họ chỉ được nhận thư để 'biết thông tin', và tất cả mọi người đều có thể nhìn thấy tên của nhau."
  },
  {
    qSnippet: "để những người nhận Email khác không nhìn thấy",
    correctAnswers: ["Bcc"],
    explanation: "Lại là 'Bcc' (Bản sao mù)! Chỉ cần nhét tên người đó vào ô Bcc, hệ thống sẽ khoác cho họ một chiếc áo tàng hình. Không một ai trong nhóm nhận thư có thể biết là người đó cũng đang đọc bức thư này."
  },
  {
    qSnippet: "trước khi bắt đầu một cuộc hội thoại bằng loa ngoài",
    correctAnswers: ["Xin phép để tiếp tục"],
    explanation: "Bật loa ngoài nghĩa là tất cả mọi người xung quanh em đều sẽ nghe thấy đầu dây bên kia nói gì. Vì lý do bảo mật và lịch sự, em bắt buộc phải hỏi 'Xin phép bạn cho mình bật loa ngoài nhé?' trước khi làm vậy."
  },
  {
    qSnippet: "nền tảng cộng tác",
    correctAnswers: ["Slack", "Office 365"],
    explanation: "\"Nền tảng cộng tác\" (Collaboration Platform) là nơi một nhóm người có thể cùng nhắn tin, cùng sửa chung một file tài liệu. Slack và Office 365 có đủ các tính năng đó. Còn Zoom hay GoToMeeting chỉ mạnh về mảng gọi Video thôi."
  },
  {
    qSnippet: "đưa ra phản hồi mang tính xây dựng",
    correctAnswers: ["Chú thích (Comments)"],
    explanation: "Khi em rà soát bài cho bạn, đừng tự ý sửa mất chữ của bạn. Hãy dùng chức năng 'Bình luận' (Comments) để dán những mẩu giấy note nhỏ lề bên cạnh, ghi lời góp ý của em. Bạn đọc xong có quyền sửa hoặc không sửa."
  }
];

const t8 = quizSets.find(t => t.id === 'c4-t8' || t.title.toLowerCase().includes('test 8'));
if (t8) {
    t8.questions.forEach(q => {
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
console.log('Successfully updated data.js for Test 8!');
