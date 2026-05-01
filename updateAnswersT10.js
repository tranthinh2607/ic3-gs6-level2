const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "sử dụng tất cả các công cụ sau cho mục đích gì",
    correctAnswers: ["Cộng tác"],
    explanation: "Tất cả các phần mềm nổi tiếng như Google Docs, Meet hay Dropbox đều có một mục đích chung lớn nhất là 'Cộng tác' (làm việc nhóm). Chúng giúp mọi người dù ở xa nhau vẫn có thể cùng vẽ chung một bức tranh hay cùng viết chung một bài báo cáo."
  },
  {
    qSnippet: "tôn trọng và lịch sự với người trình bày",
    correctAnswers: ["Đăng nhập sớm", "Luôn bật camera", "Tắt mic"],
    explanation: "Phép lịch sự trong lớp học Online là em phải vào lớp sớm để thử xem máy tính có trục trặc gì không (Đăng nhập sớm), luôn bật camera để thầy giáo nhìn thấy khuôn mặt mình, và phải tắt micro để không làm ồn lớp khi chưa được gọi tên."
  },
  {
    qSnippet: "cần thiết để đồng tác giả một tài liệu",
    correctAnswers: ["Tài liệu thân thiện cho cộng tác", "Khu vực lưu trữ dùng chung"],
    explanation: "Để 2 bạn có thể cùng nhau đánh máy trên một bài văn (Đồng tác giả), em cần một nơi để cất giữ bài văn đó cho cả hai cùng vào được (Khu vực lưu trữ dùng chung như Đám mây OneDrive), và tập tin văn bản đó phải hỗ trợ tính năng làm việc nhóm."
  },
  {
    qSnippet: "nền tảng cộng tác",
    correctAnswers: ["Office 365", "Slack"],
    explanation: "Nền tảng cộng tác là nơi cho phép em vừa nhắn tin trò chuyện, vừa gửi file tài liệu, lại vừa có thể cùng nhau chỉnh sửa tập tin. Slack và Office 365 có đầy đủ các 'món đồ chơi' đó."
  },
  {
    qSnippet: "phản hồi mang tính xây dựng cho bạn học của mình",
    correctAnswers: ["Chú thích (Comments)"],
    explanation: "Hãy dùng chức năng 'Bình luận' (Comments) để dán những mẩu giấy ghi chú nho nhỏ bên cạnh bài văn của bạn. Việc này giúp bạn biết chỗ nào bị sai mà không sợ bị em sửa mất bài (như Track Changes làm thay đổi nội dung)."
  },
  {
    qSnippet: "So sánh chỉnh sửa đồng bộ với chỉnh sửa không đồng bộ",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Đúng" },
    explanation: "'Đồng bộ' là em và bạn hẹn nhau đúng 8 giờ tối cùng mở máy tính lên làm chung (thời gian thực). Còn 'Không đồng bộ' là em làm buổi sáng, chiều bạn rảnh bạn mới vào làm tiếp. Không có cái nào tốt hơn cái nào, chỉ là do lúc đó các em rảnh hay bận thôi!"
  },
  {
    qSnippet: "chỉ ra lỗi sai cho tác giả bằng một chú thích",
    correctAnswers: ["Cung cấp thông tin chính xác trong chú thích của bạn, nếu có", "Giữ thái độ tích cực khi đưa ra nhận xét"],
    explanation: "Khi góp ý lỗi sai cho người khác, em tuyệt đối không viết CHỮ IN HOA (vì như vậy là quát mắng). Hãy giữ một thái độ vui vẻ, tích cực, và chỉ ra lỗi sai kèm theo lời giải thích hoặc cách sửa lại cho đúng nhé."
  },
  {
    qSnippet: "chuẩn bị tài liệu đề xuất dự án với đối tác ở một tỉnh thành khác",
    correctAnswers: { "0": "5", "1": "1", "2": "2", "3": "4", "4": "3" },
    explanation: "Để làm việc chung với bạn ở xa: Trước tiên em tạo tập tin trên máy (1), đẩy nó lên mạng Đám mây (2), gửi đường Link cho bạn (3). Sau đó bạn ấy vào xem và ghi chú lại các chỗ cần sửa (4). Cuối cùng em mở ra đọc và chốt xem có đồng ý sửa không (5)."
  },
  {
    qSnippet: "đúng về kỹ thuật Co-authoring",
    correctAnswers: ["Tính năng Coauthors phải được cấp quyền truy cập vào tài liệu mà họ sẽ làm việc", "Tính năng Co-authoring khả dụng với các tài liệu trong SharePoint"],
    explanation: "Để tính năng 'Đồng tác giả' hoạt động, tập tin phải được cất trên mạng dùng chung của công ty (như SharePoint) chứ không thể nằm chết trong ổ cứng máy tính của em được. Và em phải cấp quyền (mở cửa) thì bạn bè mới được phép vào sửa chung nhé."
  },
  {
    qSnippet: "lợi ích khi cộng tác nhóm",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Đúng", "3": "Sai" },
    explanation: "Làm việc nhóm trên mạng giúp em kết nối được với bạn bè ở khắp nơi trên thế giới (Phạm vi địa lý). Hai cái đầu luôn thông minh hơn một cái đầu, nên sẽ giúp tăng sự sáng tạo. Tuyệt đối không có chuyện làm việc nhóm khiến em lười biếng hay giảm năng suất đâu!"
  },
  {
    qSnippet: "không được thực hiện trong thời gian thực",
    correctAnswers: ["Không đồng bộ (Asynchronous)"],
    explanation: "Giống như chơi cờ tướng qua thư tay: em đánh 1 nước, gửi thư đi, vài ngày sau đối thủ mới đánh lại. Chỉnh sửa 'Không đồng bộ' nghĩa là hai người không ngồi làm cùng một lúc với nhau."
  },
  {
    qSnippet: "hai lợi ích khi cộng tác kỹ thuật số là gì",
    correctAnswers: ["Mất ít thời gian di chuyển", "Nhiều người dùng có thể làm việc trên cùng một tập tin"],
    explanation: "Nhờ có mạng Internet, em không cần phải đạp xe lóc cóc chạy qua nhà bạn để họp nhóm (đỡ tốn thời gian di chuyển). Và điều tuyệt vời nhất là 5-6 bạn đều có thể xúm vào gõ phím trên cùng một văn bản lúc nào cũng được."
  },
  {
    qSnippet: "công cụ cộng tác",
    correctAnswers: ["OneDrive", "Box", "Google Docs"],
    explanation: "OneDrive và Box là những 'đám mây' khổng lồ giúp nhóm em cất giữ tài liệu dùng chung. Còn Google Docs là tờ giấy ma thuật trên mạng, nơi cả nhóm có thể nhảy vào cùng nhau đánh máy và sửa lỗi."
  },
  {
    qSnippet: "Dropbox là một trong nhiều công cụ",
    correctAnswers: ["Đúng"],
    explanation: "Rất đúng! Dropbox nổi tiếng là chiếc hộp thần kỳ trên mạng (đám mây). Em bỏ đồ vào chiếc hộp đó thì những người bạn khác của em (dù ở nhà của họ) cũng có thể mở hộp ra và lấy đồ được."
  },
  {
    qSnippet: "Hai lợi ích của việc cộng tác làm việc là gì",
    correctAnswers: ["Phát triển các mối quan hệ nhân sinh", "Thúc đẩy sự hiểu biết đầy đủ hơn"],
    explanation: "Khi làm chung một dự án, các bạn trong nhóm sẽ phải nói chuyện với nhau nhiều hơn (phát triển mối quan hệ tình bạn). Đồng thời, mỗi bạn góp một ý kiến sẽ giúp bức tranh kiến thức của cả nhóm trở nên đầy đủ và phong phú hơn rất nhiều."
  },
  {
    qSnippet: "cá nhân không cần xác định họ là ai",
    correctAnswers: ["Sai"],
    explanation: "Trong một buổi học có hàng trăm người lạ, dù hệ thống có hiện tên em bé tí ở góc, em vẫn nên phép lịch sự giới thiệu ngắn gọn: 'Chào thầy, em là Huy ở lớp 6A, em muốn hỏi...' để mọi người biết em là ai nhé (Sai)."
  },
  {
    qSnippet: "hợp tác tác đồng tác giả",
    correctAnswers: ["Đồng bộ (Synchronous)"],
    explanation: "Thuật ngữ 'Đồng tác giả' (Co-authoring) nghĩa là em và bạn đang ngồi ở 2 máy tính khác nhau nhưng cùng lúc thấy con trỏ chuột của nhau đang chạy vòng vòng trên văn bản. Nó gọi là làm việc 'Đồng bộ' (cùng một thời điểm)."
  },
  {
    qSnippet: "công cụ cộng tác kỹ thuật số thích hợp",
    correctAnswers: { "0": "Bảng trắng trực tuyến", "1": "Chia sẻ tập tin trên nền tảng đám mây", "2": "Hội thảo trực tuyến" },
    explanation: "Bảng trắng (Whiteboard) dùng để vẽ vời các mũi tên và hình ảnh minh họa. Hội thảo trực tuyến (Video Call) dùng để vỗ tay, nói chuyện ngay lập tức. Còn Đám mây (Cloud) là để em cất giữ và chỉnh sửa chung các tập tin tài liệu tự động lưu."
  },
  {
    qSnippet: "xa nhau như 2 quốc gia",
    correctAnswers: ["Email", "Text Messaging"],
    explanation: "(Giống Bài Test 9) Khi hai quốc gia bị lệch múi giờ (người đang thức, người đang ngủ), em không thể gọi Video hay Gọi điện thoại bắt họ dậy được. Hãy nhẹ nhàng gửi cho họ một Email hoặc Tin nhắn để họ đọc khi rảnh nhé."
  },
  {
    qSnippet: "tổ chức hội thảo trên Web",
    correctAnswers: ["Người thuyết trình phải cảm thấy thoải mái với phần mềm", "Micrô và loa phải luôn được kiểm tra"],
    explanation: "Là người dẫn chương trình (chủ tọa), em phải tập sử dụng thật quen tay phần mềm đó để không bị lúng túng lúc đang phát sóng (Cảm thấy thoải mái). Và dĩ nhiên, Micro để nói và Loa để nghe là 2 thứ bắt buộc phải được thử giọng đầu tiên!"
  }
];

const t10 = quizSets.find(t => t.id === 'c5-t10' || t.title.toLowerCase().includes('test 10'));
if (t10) {
    t10.questions.forEach(q => {
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
console.log('Successfully updated data.js for Test 10!');
