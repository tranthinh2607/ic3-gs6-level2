const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "sắp xếp các bước sử dụng tính năng Help",
    correctAnswers: { "0": "Bước 2", "1": "Bước 1", "2": "Bước 4", "3": "Bước 3" },
    explanation: "Để nhờ máy tính giúp đỡ, đầu tiên em phải mở thẻ Trợ giúp (thẻ Help) ở phía trên cùng. Sau đó bấm vào biểu tượng dấu chấm hỏi (nút Help), gõ từ khóa mình cần tìm là 'styles' rồi nhấn Enter để máy tính trả lời nhé."
  },
  {
    qSnippet: "chỉnh sửa hình ảnh bên phải phù hợp",
    correctAnswers: { "0": "Spot", "1": "Filter", "2": "Crop" },
    explanation: "Spot Healing (Chấm sửa) giống như cục tẩy thần kỳ xóa đi mụn hoặc vết xước nhỏ trên ảnh. Filter (Bộ lọc) giúp ảnh mờ ảo hoặc đổi màu nghệ thuật hơn. Còn Crop (Cắt xén) là em lấy kéo cắt bớt viền ngoài để làm bức ảnh nhỏ lại."
  },
  {
    qSnippet: "thuật ngữ trong bài trình bày với định nghĩa",
    correctAnswers: { "0": "Chuyển tiếp (Transitions)", "1": "Mẫu (Template)", "2": "Hoạt hình (Animations)", "3": "Slide Master" },
    explanation: "Chuyển tiếp (Transitions) là hiệu ứng lật trang giống như em lật sách. Hoạt hình (Animations) làm cho chữ hoặc hình ảnh bay lượn. Mẫu (Template) là những bản vẽ được tô màu sẵn để em điền chữ vào. Còn Slide Master là 'ông trùm' quản lý thiết kế của toàn bộ bài."
  },
  {
    qSnippet: "theo dõi thay đổi (Track Changes) trong Microsoft Word là một ví dụ về kiểu chỉnh sửa",
    correctAnswers: ["Không đồng bộ"],
    explanation: "Khi dùng 'Track Changes', em gửi bài cho bạn sửa, hôm sau bạn gửi lại cho em xem. Quá trình này không diễn ra cùng một lúc (không gọi điện video sửa chung) nên được gọi là chỉnh sửa 'Không đồng bộ' (Asynchronous)."
  },
  {
    qSnippet: "Compare trong Microsoft Word có thể được sử dụng để so sánh",
    correctAnswers: ["Đúng"],
    explanation: "Rất đúng! Tính năng So sánh (Compare) trong Word giống như trò chơi 'Tìm điểm khác biệt' giữa 2 bức tranh. Nó sẽ gạch chân cho em xem bản nháp cũ và bản mới viết có những chữ nào khác nhau."
  },
  {
    qSnippet: "giảm kích thước để phù hợp với một không gian",
    correctAnswers: ["Crop"],
    explanation: "Khi đoạn video của em bị dính thêm những cảnh vật thừa ở các góc và em muốn cắt gọt khung hình lại cho vừa vặn với ô trống trên trang web, em sẽ dùng tính năng Cắt xén (Crop) nhé."
  },
  {
    qSnippet: "khóa giải mã có thể khôi phục mật khẩu",
    correctAnswers: ["Sai"],
    explanation: "Đây là một điều cực kỳ quan trọng! Mật khẩu trong Word không giống như chìa khóa nhà có thể nhờ thợ làm lại. Nếu em quên mật khẩu, tài liệu đó sẽ bị khóa vĩnh viễn và không có 'khóa giải mã' nào cứu được đâu (Sai)."
  },
  {
    qSnippet: "loại trang chiếu nào lưu trữ bố cục, màu sắc và Logo",
    correctAnswers: ["Master"],
    explanation: "Slide Master (Trang chiếu Chủ) giống như một cái khuôn đúc bánh. Nếu em dán một cái Logo hoặc chọn màu nền ở cái khuôn này, thì tất cả các trang Slide con khác được sinh ra đều sẽ có hình dạng y chang như vậy."
  },
  {
    qSnippet: "tính năng Feedback được tìm thấy trên thẻ",
    correctAnswers: ["Help"],
    explanation: "Khi em thấy phần mềm bị lỗi hoặc muốn gửi lời khen cho những người tạo ra phần mềm Word, em hãy vào thẻ Trợ giúp (Help) và chọn nút 'Phản hồi' (Feedback) hình mặt cười nha."
  },
  {
    qSnippet: "thay đổi đó sẽ hiển thị bằng màu đỏ",
    correctAnswers: ["Track Changes"],
    explanation: "Giống như cô giáo dùng bút đỏ để chấm bài cho em dễ nhìn thấy lỗi sai, tính năng 'Track Changes' trong Word cũng tự động tô đỏ những đoạn chữ mà bạn bè vừa mới thêm vào hoặc gạch bỏ."
  },
  {
    qSnippet: "làm giảm thời gian tổng thể của video",
    correctAnswers: ["Trim"],
    explanation: "Nếu đoạn video quay bị thừa 5 giây lúc em đang chuẩn bị ở đầu, em sẽ dùng tính năng Cắt tỉa (Trim) để gọt bỏ 5 giây đó đi. Khi đó, thời lượng của video sẽ bị ngắn lại."
  },
  {
    qSnippet: "sao chép tất cả nội dung của trang đầu tiên lên trang thứ hai",
    correctAnswers: ["Ctrl+A", "Ctrl+C", "Ctrl+V"],
    explanation: "Để nhân bản phép thuật, đầu tiên em bấm Ctrl+A để 'chọn trọn bộ' trang thứ nhất. Tiếp theo bấm Ctrl+C để 'Copy' (sao chép). Cuối cùng mang chuột xuống trang hai và bấm Ctrl+V để 'Dán' mọi thứ ra."
  },
  {
    qSnippet: "đảm bảo rằng mọi bài trình chiếu được sử dụng có cùng phông chữ",
    correctAnswers: ["Template"],
    explanation: "Để tất cả nhân viên trong công ty đều làm báo cáo có chung một màu sắc và hình ảnh giống hệt nhau, công ty sẽ thiết kế sẵn một Bản mẫu (Template). Nhân viên chỉ việc mở bản mẫu đó lên và điền số liệu vào là xong."
  },
  {
    qSnippet: "lập phiên bản và khôi phục tài liệu",
    correctAnswers: ["Tính năng Compare", "Các phiên bản trước của tập tin có thể được khôi phục"],
    explanation: "Lập phiên bản giúp em có thể khôi phục (lấy lại) bài văn ở bất kỳ thời điểm nào trong quá khứ. Em cũng có thể dùng tính năng So sánh (Compare) để xem bản ngày hôm qua và bản hôm nay khác nhau ở chỗ nào."
  },
  {
    qSnippet: "nối Video khi chỉnh sửa Video",
    correctAnswers: ["Các Clip khác được di chuyển và không bị ghi đè.", "Một đoạn Video được chèn vào."],
    explanation: "Khi 'Nối' (Splice) video, em nhét thêm một đoạn phim mới vào giữa. Các đoạn phim cũ sẽ tự động lùi về phía sau nhường chỗ (được di chuyển) chứ không hề bị mất đi hay bị đè lên (không bị ghi đè)."
  },
  {
    qSnippet: "hiệu ứng Transition trong PowerPoint",
    correctAnswers: ["Transition có thể chứa âm thanh", "Thời gian của transition có thể được kiểm soát"],
    explanation: "Hiệu ứng chuyển trang (Transition) có thể phát ra âm thanh vui nhộn (như tiếng vỗ tay, tiếng máy ảnh), và em hoàn toàn có thể chỉnh cho nó lật trang nhanh vèo vèo hay chậm rãi theo ý thích (kiểm soát thời gian)."
  },
  {
    qSnippet: "đổi tên trang tính",
    correctAnswers: ["Nhấp đúp chuột vào tab", "Chọn và giữ (hoặc bấm chuột phải) vào tab"],
    explanation: "Đổi tên trang tính (Sheet) rất dễ! Em chỉ cần nhấn đúp chuột (nháy chuột 2 lần thật nhanh) vào cái tên ở dưới đáy, hoặc nhấn chuột phải vào đó rồi chọn 'Rename' là có thể gõ tên mới được ngay."
  },
  {
    qSnippet: "thêm tháng mà không cần nhập chúng",
    correctAnswers: ["AutoFill"],
    explanation: "Trong Excel có một trò ảo thuật tên là Điền tự động (AutoFill). Em chỉ cần gõ chữ 'Tháng 1', sau đó nắm cái đuôi ô vuông nhỏ kéo tuốt xuống dưới, nó sẽ tự động sinh ra Tháng 2, Tháng 3... mà không cần phải gõ."
  },
  {
    qSnippet: "Word được bảo vệ bằng mật khẩu",
    correctAnswers: ["Tài liệu bị mã hoá"],
    explanation: "Mật khẩu không chỉ đơn giản là cái khóa cửa. Khi em khóa tài liệu, Word sẽ biến tất cả các dòng chữ bên trong thành những ký hiệu lộn xộn (Mã hóa). Kẻ trộm có ăn cắp được tập tin cũng không thể đọc hiểu được."
  },
  {
    qSnippet: "từ trang chiếu này sang trang chiếu tiếp theo",
    correctAnswers: ["Transition"],
    explanation: "'Transition' trong tiếng Anh nghĩa là 'Chuyển tiếp'. Nó là những hiệu ứng đẹp mắt (như mở rèm cửa, bay thành hình con hạc giấy) xuất hiện khi em bấm nút chuyển từ trang số 1 sang trang số 2."
  },
  {
    qSnippet: "Macro được sử dụng để tự động hóa các quy trình",
    correctAnswers: ["Đúng"],
    explanation: "Rất đúng! Macro chính là một 'con robot tự động' giúp em làm đi làm lại một công việc nhàm chán (như đổi màu hàng trăm dòng chữ) chỉ bằng một nút bấm duy nhất."
  },
  {
    qSnippet: "xem tất cả các Transition và Animation trong bài trình chiếu",
    correctAnswers: ["Slide Show"],
    explanation: "Để tận mắt xem tất cả các hiệu ứng bay nhảy và chuyển trang hoạt động cùng nhau như một bộ phim, em phải mở thẻ 'Slide Show' (Trình chiếu) và chọn nút Phát từ đầu (From Beginning)."
  },
  {
    qSnippet: "độ trong suốt trong Logo",
    correctAnswers: ["PNG"],
    explanation: "Nếu em muốn lưu một bức tranh có cái nền 'tàng hình' (trong suốt) để dán đè lên hình ảnh khác mà không bị lộ viền trắng, em phải dùng định dạng ảnh là PNG nhé! Đuôi JPG không biết làm tàng hình đâu."
  },
  {
    qSnippet: "quả bóng nảy lên xuống trên một Slide",
    correctAnswers: ["Animation"],
    explanation: "'Animation' là hiệu ứng Hoạt hình. Nó biến những bức ảnh, chữ viết nằm im lìm trên trang giấy trở nên sống động, biết nhún nhảy, bay vòng vòng hoặc nhấp nháy giống như quả bóng vậy."
  },
  {
    qSnippet: "theo dõi doanh số bán hàng và tạo tổng số",
    correctAnswers: ["Spreadsheet"],
    explanation: "'Spreadsheet' (Bảng tính điện tử, như Excel) là cỗ máy tính toán siêu phàm. Nó sinh ra là để làm việc với các con số, giúp em ghi chép tiền bạc và tự động tính tổng tiền (cộng trừ nhân chia) một cách chính xác tuyệt đối."
  }
];

const t7 = quizSets.find(t => t.id === 'c4-t7' || t.title.toLowerCase().includes('test 7'));
if (t7) {
    t7.questions.forEach(q => {
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
console.log('Successfully updated data.js for Test 7!');
