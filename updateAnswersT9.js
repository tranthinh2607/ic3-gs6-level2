const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "cách nhiều múi giờ",
    correctAnswers: ["Không đồng bộ (Asynchronous)"],
    explanation: "Khi em ở Việt Nam (đang là ban ngày) còn bạn ở Mỹ (đang ngủ đêm), em không thể gọi Video bắt bạn thức dậy được. Em phải dùng giao tiếp 'Không đồng bộ' (như Email), để gửi đi và chờ sáng mai bạn ấy ngủ dậy sẽ trả lời."
  },
  {
    qSnippet: "trò chuyện (Chat) trong tình huống nào sau đây là phù hợp nhất trong hội thảo",
    correctAnswers: ["Đặt câu hỏi khi có thời gian thích hợp"],
    explanation: "Trong một buổi học trên Web (Webinar) có hàng trăm người tham gia, em không nên dùng hộp Chat để nói chuyện riêng hay ném những câu hỏi lộn xộn. Hãy đợi đến khi thầy giáo cho phép hỏi đáp (thời gian thích hợp) thì mới gửi câu hỏi lên nhé."
  },
  {
    qSnippet: "tất cả chữ in hoa trong một thư điện tử",
    correctAnswers: ["La hét"],
    explanation: "Trong thế giới mạng (Netiquette), việc gõ toàn bộ CHỮ IN HOA VÀO MẶT NGƯỜI KHÁC được hiểu là em đang nổi giận và La hét ầm ĩ. Hãy chỉ viết hoa chữ cái đầu câu cho lịch sự thôi nhé!"
  },
  {
    qSnippet: "cuộc gọi điện thoại khi đang họp",
    correctAnswers: ["Rời khỏi phòng họp"],
    explanation: "Phép lịch sự tối thiểu là không làm ồn ảnh hưởng đến người khác. Nếu có cuộc gọi gấp, em hãy cúi đầu xin lỗi nhẹ nhàng, sau đó bước hẳn ra bên ngoài (Rời khỏi phòng họp) rồi mới nghe điện thoại."
  },
  {
    qSnippet: "trạng thái tài khoản của đồng nghiệp đang không khả dụng",
    correctAnswers: ["Email cho đồng nghiệp"],
    explanation: "Khi bạn để trạng thái 'Không khả dụng' (Unavailable) nghĩa là bạn đang bận việc hoặc không có mặt ở máy tính. Lúc này, tốt nhất là em nên gửi một Email. Bạn sẽ đọc nó khi nào bạn quay lại làm việc."
  },
  {
    qSnippet: "không phải là người nhận chính và đồng thời danh sách những người nhận này cũng cần được công khai",
    correctAnswers: ["Cc"],
    explanation: "'Cc' (Carbon Copy) là gửi thêm một bản sao. Những người trong danh sách Cc không phải là người giải quyết việc chính, họ chỉ được nhận thư để 'biết thông tin', và tất cả mọi người đều có thể nhìn thấy tên của nhau."
  },
  {
    qSnippet: "xem các câu hỏi và câu trả lời phổ biến về Microsoft Outlook",
    correctAnswers: ["Community forum"],
    explanation: "Diễn đàn cộng đồng (Community forum) là nơi tập trung hàng ngàn câu hỏi và câu trả lời phổ biến nhất từ những người sử dụng Outlook giống như em. Em có thể lên đó để tìm xem có ai gặp lỗi giống mình không nhé."
  },
  {
    qSnippet: "những người nhận Email khác không nhìn thấy",
    correctAnswers: ["Bcc"],
    explanation: "Lại là 'Bcc' (Bản sao mù)! Chỉ cần nhét tên người đó vào ô Bcc, hệ thống sẽ khoác cho họ một chiếc áo tàng hình. Không một ai trong nhóm nhận thư có thể biết là người đó cũng đang đọc bức thư này."
  },
  {
    qSnippet: "trước khi bắt đầu một cuộc hội thoại bằng loa ngoài",
    correctAnswers: ["Xin phép để tiếp tục cuộc trò chuyện trên loa ngoài"],
    explanation: "Bật loa ngoài nghĩa là tất cả mọi người xung quanh em đều sẽ nghe thấy đầu dây bên kia nói gì. Vì lý do bảo mật và lịch sự, em bắt buộc phải hỏi 'Xin phép bạn cho mình bật loa ngoài nhé?' trước khi làm vậy."
  },
  {
    qSnippet: "chuẩn bị trình bày tại hội nghị truyền hình",
    correctAnswers: ["Kiểm tra micro và loa", "Chuẩn bị một chương trình các hoạt động theo thứ tự cho hội nghị"],
    explanation: "Trước khi bắt đầu cuộc họp trực tuyến, em bắt buộc phải kiểm tra thiết bị âm thanh (Micro và Loa) xem có hoạt động tốt không. Đồng thời em phải lên lịch trình rõ ràng (chương trình các hoạt động) để mọi người biết cuộc họp sẽ diễn ra những gì."
  },
  {
    qSnippet: "tổ chức cả cuộc họp âm thanh và Video",
    correctAnswers: ["Microsoft Teams"],
    explanation: "Microsoft Teams là lớp học ảo trực tuyến, nơi thầy cô và các bạn có thể nhìn thấy mặt nhau (Video) và nghe giọng nói của nhau (Âm thanh). Box, Yammer hay Dropbox không có chức năng gọi video nhóm."
  },
  {
    qSnippet: "thời gian cần thiết để trả lời Email",
    correctAnswers: ["24 giờ"],
    explanation: "Trong môi trường làm việc chuyên nghiệp, quy tắc lịch sự là em phải trả lời Email của người khác trong vòng 1 ngày (24 giờ). Nếu để quá lâu, họ sẽ nghĩ là em bỏ quên hoặc không tôn trọng họ."
  },
  {
    qSnippet: "phát trực tuyến Video",
    correctAnswers: ["Amazon Prime", "Disney+"],
    explanation: "Amazon Prime và Disney+ là hai 'rạp chiếu phim thu nhỏ' trên mạng, giúp em xem phim hoạt hình và video trực tuyến. Còn Spotify và Sirius thì chỉ dùng để nghe nhạc và đài phát thanh (âm thanh) thôi nhé."
  },
  {
    qSnippet: "phù hợp nhất cho những thông điệp ngắn gọn",
    correctAnswers: ["Tin nhắn văn bản (SMS)", "Tin nhắn tức thời (IM)"],
    explanation: "Khi em chỉ muốn gửi những thông điệp thật nhanh và ngắn (như: 'Mẹ ơi ra mở cửa cho con'), em nên dùng Tin nhắn điện thoại (SMS) hoặc Nhắn tin mạng (IM như Zalo, Messenger). Còn Email thì dùng để viết thư dài."
  },
  {
    qSnippet: "lựa chọn địa điểm tổ chức hội nghị truyền hình",
    correctAnswers: ["Địa điểm nên có chỗ ngồi nơi có ánh sáng tốt", "ít hoặc không có tiếng ồn xung quanh"],
    explanation: "Để buổi họp Video diễn ra tốt đẹp, em cần chọn một căn phòng thật yên tĩnh (không có tiếng ồn), và nhớ bật đủ đèn (ánh sáng tốt) để camera có thể quay khuôn mặt em thật rõ nét nhé."
  },
  {
    qSnippet: "nhà cung cấp phát nhạc trực tuyến",
    correctAnswers: ["Vevo", "Spotify"],
    explanation: "Spotify là kho nhạc khổng lồ trên mạng, còn Vevo là kênh chuyên phát các Video âm nhạc (MV) của các ca sĩ nổi tiếng. Cả hai đều được coi là nhà cung cấp âm nhạc trực tuyến."
  }
];

const t9 = quizSets.find(t => t.id === 'c5-t9' || t.title.toLowerCase().includes('test 9'));
if (t9) {
    t9.questions.forEach(q => {
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
console.log('Successfully updated data.js for Test 9!');
