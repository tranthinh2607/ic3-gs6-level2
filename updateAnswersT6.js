const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "tính năng nào được sử dụng để tự động hoá các quy trình trong Microsoft Word",
    correctAnswers: ["Macro"],
    explanation: "Trong Microsoft Word hay Excel, 'Macro' giống như một con robot biết học lỏm. Em chỉ cần làm một việc gì đó (ví dụ như tô đỏ các chữ, căn giữa trang), robot sẽ tự động ghi nhớ toàn bộ thao tác đó và làm lại y hệt một cách nhanh chóng ở những trang sau."
  },
  {
    qSnippet: "lý do mà bạn nên định dạng Style",
    correctAnswers: ["Để bạn có thể tạo mục lục tự động cho tài liệu.", "Để áp dụng định dạng nhất quán cho từng cấp của văn bản tiêu đề."],
    explanation: "'Style' là các mẫu chữ đẹp có sẵn (tiêu đề to, tiêu đề nhỏ). Khi dùng Style, văn bản của em trông sẽ đồng đều, chuyên nghiệp (nhất quán). Và điều tuyệt vời nhất là sau khi viết xong, Word sẽ tự động dò các Style đó để làm thành một cái Mục lục cho em."
  },
  {
    qSnippet: "chỉnh sửa video cơ bản với định nghĩa",
    correctAnswers: { "0": "Ghép (Splice)", "1": "Phân tách (Split)", "2": "Cắt tỉa (Trim)", "3": "Cắt xén (Crop)" },
    explanation: "Các thao tác với video: 'Ghép' là dán 2 cuộn phim lại với nhau. 'Phân tách' là cầm kéo cắt đôi cuộn phim. 'Cắt tỉa' là gọt bỏ phần đầu hay cuối thừa thãi. 'Cắt xén' (Crop) là dùng khung hình phóng to vào một góc để che đi các đồ vật lộn xộn ở xung quanh."
  },
  {
    qSnippet: "phát biểu về Macro trong một trang tính Excel",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Đúng", "3": "Đúng" },
    explanation: "Macro được ghi lại như một cuốn băng quay lén hoặc do em tự viết lệnh (Đúng), và nó có thể tua lại bao nhiêu lần cũng được (Đúng). Nhưng nó được cất giấu trực tiếp bên trong tập tin Excel đó chứ không nằm ngoài thành một tập tin văn bản riêng biệt đâu nhé (Sai)."
  },
  {
    qSnippet: "quy ước đặt tên tập tin tốt",
    correctAnswers: ["elk_draft1.docx", "elk_draft2.docx", "elk_FINAL.docx"],
    explanation: "Quy tắc dán nhãn cho tập tin là phải thật rõ ràng, để không bao giờ bị nhầm đồ cũ với đồ mới. Việc thêm số 'draft 1', 'draft 2' (nháp 1, nháp 2) và 'FINAL' (bản cuối) giống như việc đánh số thứ tự từ bé đến lớn vậy."
  },
  {
    qSnippet: "cung cấp phản hồi cho đồng nghiệp",
    correctAnswers: ["Theo dõi thay đổi (Track Changes)", "Bình luận (Comments)"],
    explanation: "Khi chấm bài hoặc góp ý cho bạn, em nên dùng tính năng 'Bình luận' (Comments) giống như dán giấy note màu vàng lên bài của bạn. Tính năng 'Theo dõi thay đổi' (Track Changes) giống như chiếc bút đỏ, sẽ đánh dấu mọi lỗi sai em vừa sửa để bạn có thể xem lại dễ dàng."
  },
  {
    qSnippet: "bảo vệ tất cả các tập tin của mình bằng mật khẩu",
    correctAnswers: ["MyFile.txt"],
    explanation: "Trong số các loại tập tin, file chữ .txt (Notepad) là loại đơn giản và yếu ớt nhất, nó không hề có tính năng khóa mật khẩu. Vì vậy, em bắt buộc phải giấu nó vào trong một chiếc két sắt to hơn (ổ đĩa mạng của công ty) để không ai lấy trộm được."
  },
  {
    qSnippet: "cắt bỏ hình ảnh của họ ở bên cạnh",
    correctAnswers: ["Crop"],
    explanation: "Cắt xén (Crop) giống như em lấy một chiếc kéo cắt bớt phần rìa ngoài của tấm ảnh, vứt luôn phần ảnh dính người bạn đang làm trò cười ở bên cạnh, và giữ lại phần trung tâm đẹp nhất."
  },
  {
    qSnippet: "chức năng với các phím của bàn phím",
    correctAnswers: { "0": "Tab", "1": "PrtScn", "2": "Shift+2", "3": "Caps Lock" },
    explanation: "Phím Tab giúp chữ nhảy thụt lề vào một đoạn thật đẹp. PrtScn là viết tắt của 'Print Screen' - chiếc máy ảnh chụp lại màn hình. Giữ Shift rồi bấm phím số 2 sẽ ra hình @. Bật đèn Caps Lock lên thì em gõ chữ nào cũng biến thành chữ IN HOA khổng lồ."
  },
  {
    qSnippet: "Bước đầu tiên để tùy chỉnh thông tin cho một đối tượng nhất định",
    correctAnswers: ["Xác định đối tượng mục tiêu của bạn."],
    explanation: "Trước khi bắt tay vào vẽ tranh, em phải biết là bức tranh này vẽ tặng bà nội hay tặng bạn cùng lớp (Xác định đối tượng). Vì tặng bà thì phải vẽ hoa lá tươi sáng, còn tặng bạn thì vẽ siêu nhân mới hợp được!"
  },
  {
    qSnippet: "không được sửa đổi mà không có sự cho phép",
    correctAnswers: ["NoDerivatives"],
    explanation: "Trong giấy phép, 'No' là Không, 'Derivatives' là Chế biến/Sửa đổi. Vậy nên nếu tác giả gắn mác 'NoDerivatives', em chỉ được phép đem ảnh của họ đi khoe với mọi người, nhưng tuyệt đối không được tự ý vẽ thêm râu hay bôi bẩn lên bức ảnh đó."
  },
  {
    qSnippet: "tài liệu có thể đồng tác giả",
    correctAnswers: ["Nó phải được chia sẻ"],
    explanation: "\"Đồng tác giả\" là việc 2-3 bạn cùng nhảy vào đánh máy chung trên một tờ giấy. Để các bạn có thể nhảy vào được, việc đầu tiên là em phải mở cửa và \"Chia sẻ\" (Share) tờ giấy đó cho các bạn ấy cái đã."
  },
  {
    qSnippet: "Xóa hình tròn ở bên trái của ảnh",
    correctAnswers: ["Lọc (Filter)", "Cắt xén (Crop)"],
    explanation: "Để vứt bỏ phần hình tròn bị thừa ở bên ngoài rìa bức ảnh, em dùng dao 'Cắt xén' (Crop). Để biến ảnh đang đầy màu sắc sặc sỡ thành đen trắng (đơn sắc), em phải phủ lên ảnh một lớp 'Lọc' (Filter)."
  },
  {
    qSnippet: "Mục đích chính của việc lập phiên bản tập tin",
    correctAnswers: ["Để cho phép người dùng khôi phục các bản sao trước đó của tập tin."],
    explanation: "Lập phiên bản giống hệt như việc cứ 10 phút lại tự động chụp ảnh cuốn vở lại một lần. Lỡ như một lúc sau em lỡ tay hất đổ cốc nước làm ướt vở, em có thể dễ dàng tua lại cuốn vở ở lúc chưa bị ướt (khôi phục bản sao trước đó)."
  },
  {
    qSnippet: "sử dụng tính năng Co-authoring trên tập tin",
    correctAnswers: ["Share"],
    explanation: "Để nhiều người cùng vào chỉnh sửa (Co-authoring), em hãy tìm nút 'Share' (Chia sẻ) nằm ở tít góc trên cùng bên phải màn hình. Nút đó giống như cái loa gọi các bạn cùng vào làm bài chung đó."
  },
  {
    qSnippet: "sự thống nhất về mặt trực quan",
    correctAnswers: ["Tuân theo các nguyên tắc thiết kế về sự liên kết và lặp lại.", "Nhất quán trên tất cả các yếu tố trình bày, chẳng hạn như phông chữ và màu sắc."],
    explanation: "Để một bài thuyết trình trông thật xịn xò (nhất quán), em nên dùng chung 1 hoặc 2 kiểu chữ (phông chữ) và tông màu từ đầu đến cuối. Tránh việc trang đầu thì chữ đỏ chót, trang sau lại màu xanh lá cây lộn xộn trông rất đau mắt."
  },
  {
    qSnippet: "khuyên bạn của mình tuân thủ",
    correctAnswers: ["Duy trì tính nhất quán trên tất cả các phần tử trình bày.", "Áp dụng các nguyên tắc thiết kế về sự lặp lại, liên kết và xa-gần."],
    explanation: "Bố cục lộn xộn là do bạn vứt đồ đạc (chữ, hình ảnh) bừa bãi. Em phải khuyên bạn xếp các hình ảnh liên quan nằm gần nhau (xa-gần), và canh lề các dòng chữ cho thẳng hàng tăm tắp (liên kết) để bài trông gọn gàng, đẹp mắt hơn."
  },
  {
    qSnippet: "phím tắt với chức năng của nó",
    correctAnswers: { "0": "Cut", "1": "Select All Text", "2": "Paste", "3": "Copy" },
    explanation: "Ctrl+C là Copy (sao chép). Ctrl+X hình cây kéo là Cut (cắt). Ctrl+V là Paste (dán hồ). Còn Ctrl+A là All (chọn tất cả mọi thứ có trên màn hình)."
  },
  {
    qSnippet: "phím tắt để thực hiện hành động tương ứng trong tài liệu",
    correctAnswers: { "0": "Ctrl+X (Cmd+X)", "1": "Ctrl+Z (Cmd+Z)", "2": "Ctrl+P (Cmd+P)", "3": "Ctrl+V (Cmd+V)" },
    explanation: "Ctrl+X là cái kéo để cắt. Ctrl+P là Print (gửi ra máy in). Ctrl+Z là cỗ máy thời gian (tua ngược lại lúc em chưa làm sai). Còn Ctrl+V là lọ keo hồ để dán chữ ra nhé."
  },
  {
    qSnippet: "Diễn đàn trực tuyến dành riêng cho phần mềm",
    correctAnswers: { "0": "Có", "1": "Có", "2": "Không", "3": "Không" },
    explanation: "Khi không biết chơi game, em có thể bấm nút Trợ giúp (Help) trong game hoặc lên Diễn đàn (nơi các bạn chơi game hay tụ tập) để hỏi. Trang hướng dẫn cài đặt chỉ dạy cách tải game về máy, chứ không dạy cách tung chiêu đâu!"
  },
  {
    qSnippet: "bảo vệ tập tin bằng mật khẩu",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Đúng" },
    explanation: "Mật khẩu giống như cái ổ khóa bảo vệ tài liệu bí mật của em. Em có thể khóa các bản văn bản PDF của Adobe, khóa sổ kế toán của Excel, và khóa luôn cả các hộp thư mục trong máy tính Windows để không ai đọc trộm được."
  },
  {
    qSnippet: "mã hóa",
    correctAnswers: ["Tài liệu được mã hóa yêu cầu mật khẩu hoặc khóa kỹ thuật số trước khi có thể mở được.", "Nội dung của một tập tin được mã hóa chỉ có thể được đọc bởi người có khóa mã hóa."],
    explanation: "Mã hóa giống như viết thư bằng mực tàng hình. Người bình thường nhìn vào chỉ thấy một tờ giấy trắng. Chỉ có người được phát cho chiếc chìa khóa ma thuật (khóa mã hóa) mới có thể giải mã và đọc được những dòng chữ bí mật đó."
  },
  {
    qSnippet: "Thứ tự các bước được khuyến nghị bạn nên thực hiện để tạo bài trình chiếu",
    correctAnswers: { "0": "Bước 6", "1": "Bước 5", "2": "Bước 1", "3": "Bước 7", "4": "Bước 4", "5": "Bước 3", "6": "Bước 2" },
    explanation: "Khi làm báo cáo, đầu tiên em phải gạch đầu dòng ra nháp xem mình sẽ nói những gì (Dàn ý). Tiếp theo em điền chữ vào máy tính. Sau đó mới tô điểm bằng cách chọn hình nền (Thiết kế), phân chia vị trí (Bố cục), thêm các hình vẽ rực rỡ (Đồ họa) và cuối cùng là thêm các hiệu ứng bay nhảy (Chuyển đổi) nhé."
  },
  {
    qSnippet: "Bạn cần thực hiện các sửa chữa vĩnh viễn",
    correctAnswers: ["Vị trí 3"],
    explanation: "Khi cô giáo gạch lỗi sai trên vở và sửa chữ mới cho em. Nếu em đồng ý với chữ sửa đó, em hãy bấm vào nút 'Accept' (Chấp nhận - thường có biểu tượng dấu tick màu xanh lá cây) để từ đó trở đi chữ đó sẽ dính chặt vĩnh viễn vào trang giấy của em."
  },
  {
    qSnippet: "bảo vệ bằng mật khẩu tập tin Word",
    correctAnswers: { "0": "Bước 5", "1": "Bước 3", "2": "Bước 2", "3": "Bước 6", "4": "Bước 1", "5": "Bước 4" },
    explanation: "Để khóa tủ đồ, đầu tiên em vào mục Tệp (File), tìm đến bảng Thông tin (Info). Tại đó có nút Bảo vệ (Protect Document). Em bấm vào, chọn 'Khóa bằng mật khẩu' (Encrypt). Sau đó, em nhập cẩn thận mật khẩu của mình 2 lần để không bị gõ nhầm, rồi bấm OK là chiếc tủ sẽ bị khóa chặt!"
  },
  {
    qSnippet: "phần tử cửa sổ làm việc",
    correctAnswers: { "0": "Cột (Column)", "1": "Tab trang tính (Sheet Tab)", "2": "Thanh công thức (Formula Bar)", "3": "Thanh trạng thái (Status Bar)" },
    explanation: "Trong Excel, 'Cột' là những dải dọc thẳng đứng từ trên xuống dưới. Nơi để em viết các phép tính Toán học gọi là 'Thanh công thức'. Những chiếc 'Tab' nhỏ xíu ở dưới cùng giúp em lật trang qua lại giống như lật các trang sách vậy."
  },
  {
    qSnippet: "sử dụng phần mềm xử lý văn bản, bạn cần ghi nhớ các phím tắt",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Đúng", "3": "Sai" },
    explanation: "Ctrl+P dùng để In giấy (Print), còn dán hồ (Paste) phải dùng Ctrl+V. Ctrl+E dùng để Căn giữa dòng chữ, còn muốn bay xuống tận cuối cùng của văn bản thì em phải dùng nút Ctrl kết hợp với phím End nhé."
  },
  {
    qSnippet: "sổ tính để giữ số liệu thống kê",
    correctAnswers: { "0": "Bước 3", "1": "Bước 2", "2": "Bước 1", "3": "Bước 4" },
    explanation: "Để lập sổ tay ghi điểm, đầu tiên em phải xé một tờ giấy trắng (Tạo trang tính). Kẻ các bảng và viết tên cột (Tiêu đề). Sau đó điền tên các bạn vào (Điền tên). Làm xong tờ hoàn chỉnh đó, em mới đem ra tiệm Photocopy để nhân bản thành nhiều tờ (Sao chép) dùng cho nhiều trận đấu nhé."
  },
  {
    qSnippet: "theo dõi các thay đổi trong tài liệu",
    correctAnswers: { "0": "Bước 1", "1": "Bước 2", "2": "Bước 4", "3": "Bước 3" },
    explanation: "Để theo dõi bạn bè sửa bài của mình, đầu tiên em phải bật nút 'Track Changes' (Ghi lại thay đổi). Chỉnh màu sắc vết bút đỏ cho dễ nhìn (Markup). Sau đó em gửi bài cho bạn bè (Chia sẻ). Sau khi các bạn làm xong trả lại, em mới ngồi xem và chọn nút Chấp nhận (Accept) hoặc Từ chối (Reject) những chỗ bạn vừa sửa."
  },
  {
    qSnippet: "Xóa ký tự ở bên phải",
    correctAnswers: { "0": "Delete", "1": "Fn+F1", "2": "Shift", "3": "Backspace" },
    explanation: "Phím Backspace giống như cái tẩy lùi, xóa các chữ nằm đằng sau lưng. Phím Delete giống như máy hút bụi, hút các chữ đang ngáng đường phía trước. Phím Shift giúp em gọi các chữ lẩn khuất ở nửa trên của phím, còn F1 luôn luôn là phím gọi bác sĩ 'Trợ giúp' (Help)."
  },
  {
    qSnippet: "Các hạn chế chỉnh sửa trong Microsoft Word là gì",
    correctAnswers: ["Giới hạn các thay đổi đối với một phần cụ thể của tài liệu."],
    explanation: "Hạn chế chỉnh sửa (Restrict Editing) giống như việc em cho bạn mượn một cuốn vở nhưng dán băng dính che hết phần bài giải của em lại. Bạn ấy chỉ được phép gọt giũa và viết vào phần giấy nháp thôi, không được động chạm sửa đổi gì đến phần bài làm chính của em."
  },
  {
    qSnippet: "loại bỏ phần đầu hoặc phần cuối của video",
    correctAnswers: ["Trim"],
    explanation: "Trong lúc làm phim, thao tác 'Trim' (Cắt tỉa) giống như việc người thợ hớt tóc dùng tông-đơ cắt bỏ những ngọn tóc chỉa ra thừa thãi ở phần đầu hoặc phần đuôi của video để đoạn phim trở nên gọn gàng và hoàn hảo nhất."
  }
];

const t6 = quizSets.find(t => t.id === 'c3-t6' || t.title.toLowerCase().includes('test 6'));
if (t6) {
    t6.questions.forEach(q => {
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
                        // handle text matching inside options containing spaces
                        if (!matchedOpt) {
                           matchedOpt = q.options.find(opt => typeof opt === 'string' && opt.replace(/\s+/g,'').toLowerCase().includes(ca.replace(/\s+/g,'').toLowerCase()));
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
console.log('Successfully updated data.js for Test 6!');
