const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "xuất bản trong năm vừa qua",
    correctAnswers: [],
    explanation: "Để tìm thông tin mới xuất bản trong 1 năm gần đây, em bấm vào nút Công cụ (Tools) trên Google, sau đó chọn khoảng thời gian là Năm qua (Past year) nhé."
  },
  {
    qSnippet: "danh mục nào có thể được sử dụng để lọc các tìm kiếm",
    correctAnswers: ["Images", "Videos", "News"],
    explanation: "Google có các ngăn kéo (danh mục) mặc định giúp em tìm kiếm nhanh hơn như ngăn kéo Hình ảnh (Images), Video hay Tin tức (News). Còn Tech (Công nghệ) hay Locations (Địa điểm) không phải là các mục có sẵn trên thanh công cụ của Google đâu."
  },
  {
    qSnippet: "nội dung của bài viết trực tuyến có chứa thành kiến hay không",
    correctAnswers: { "0": "Yes", "1": "Yes", "2": "No", "3": "No" },
    explanation: "Thành kiến giống như việc một người khen kẹo socola là ngon nhất thế giới chỉ vì người đó bán kẹo socola (Nguồn tài trợ) hoặc được công ty socola thuê (Mối liên hệ chính trị). Ngày tháng và trình độ học vấn chỉ cho biết bài viết đó có cũ hay không và tác giả có đi học hay không, chứ không nói lên việc họ có thiên vị ai không."
  },
  {
    qSnippet: "đánh giá mức độ liên quan của một kết quả tìm kiếm",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Sai", "3": "Sai" },
    explanation: "Để biết một bài viết có đúng thứ em cần tìm hay không (mức độ liên quan), em phải xem tiêu đề và tóm tắt của nó có khớp với từ khóa của em không. Các máy tìm kiếm đôi khi cũng trả về kết quả rác, không phải cái nào cũng đúng (Sai). Và tuyệt đối không bấm vào những bài không liên quan nhưng có tiêu đề gây tò mò nhé!"
  },
  {
    qSnippet: "tìm kiếm Clipart về một con thỏ",
    correctAnswers: ["Quyền sử dụng (Usage Rights)", "Thể loại (Type)"],
    explanation: "Để tìm được đúng bức tranh vẽ (Clipart), em dùng bộ lọc Thể loại (Type) để chọn kiểu tranh vẽ. Và để không bị kiện vì tội lấy cắp tranh của người khác, em phải chọn bộ lọc Quyền sử dụng (Usage Rights) để tìm những bức tranh cho phép xài miễn phí."
  },
  {
    qSnippet: "nghiên cứu tác động của việc học trực tuyến",
    correctAnswers: { "0": "No", "1": "Yes", "2": "Yes", "3": "No" },
    explanation: "Chủ đề của em là 'Học trực tuyến'. Vậy nên bài báo kể về kinh nghiệm dạy trực tuyến và bảng điểm so sánh học trực tuyến sẽ rất phù hợp. Bài báo về 'giáo dục' nói chung thì quá rộng, còn trang web bán đồ thì mục đích là để bán hàng chứ không phải để nghiên cứu."
  },
  {
    qSnippet: "cụm từ Yankee Candle",
    correctAnswers: ["Dấu ngoặc kép"],
    explanation: "Khi em muốn máy tính tìm chính xác cụm từ đi liền nhau không bị tách rời (như 'Yankee Candle'), em hãy nhốt cụm từ đó vào trong dấu ngoặc kép (\"\") nhé."
  },
  {
    qSnippet: "Creative Commons cho phép bạn phối lại bài hát",
    correctAnswers: [],
    explanation: "Khi nhìn thấy các ký hiệu của giấy phép Creative Commons, em cần tránh chọn những bài hát có chữ 'ND' (No Derivatives), vì ký hiệu đó cấm em phối lại (remix) hoặc cắt ghép thay đổi bài hát gốc nhé."
  },
  {
    qSnippet: "viết bản tin hàng tháng cho công ty",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Đúng", "3": "Sai" },
    explanation: "Vì đây là công việc nội bộ của công ty, em chỉ nên dùng Email hoặc trang web riêng của công ty để khảo sát mọi người. Tuyệt đối không đem chuyện công ty lên mạng xã hội hay viết blog cá nhân vì những nơi đó có rất nhiều người lạ."
  },
  {
    qSnippet: "những nguồn thông tin trực tuyến, loại trang Web nào có nhiều khả năng xuất bản thông tin đáng tin",
    correctAnswers: ["Tạp chí học thuật"],
    explanation: "\"Tạp chí học thuật\" giống như một cuốn sách giáo khoa đã được các thầy cô giáo sư kiểm tra cực kỳ kỹ lưỡng trước khi in ra, nên nó là đáng tin nhất. Còn Blog hay Wiki thì ai cũng có thể tự do lên viết được nên dễ bị sai."
  },
  {
    qSnippet: "bốn yếu tố về tác phẩm đã bị sao chép",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Đúng", "3": "Đúng", "4": "Sai", "5": "Đúng" },
    explanation: "Để xem em có được dùng ké tác phẩm của người khác không, luật pháp xem xét 4 điều: Em dùng để làm gì (Mục đích)? Tác phẩm đó là loại gì (Bản chất)? Em lấy một ít hay lấy hết (Số lượng)? Và việc em lấy có làm họ bị ế hàng không (Ảnh hưởng thị trường)?"
  },
  {
    qSnippet: "Hai tài nguyên nào là tài nguyên cộng đồng",
    correctAnswers: ["Diễn đàn (Forums)", "Wikipedia"],
    explanation: "\"Tài nguyên cộng đồng\" là nơi rất nhiều người bình thường cùng nhau đóng góp xây dựng. Diễn đàn (Forums) là nơi mọi người cùng vào hỏi đáp, và Wikipedia là cuốn từ điển do tất cả mọi người cùng nhau viết lên."
  },
  {
    qSnippet: "tài nguyên công cộng (Community Resource)",
    correctAnswers: ["Trường học", "Thư viện", "Tòa án"],
    explanation: "Tài nguyên công cộng là những nơi lưu trữ thông tin cho người dân tra cứu. Thư viện có sách, Trường học có tài liệu học tập, và Tòa án có các hồ sơ pháp luật. Còn Bệnh viện và Sở giao thông chủ yếu làm nhiệm vụ chữa bệnh và điều tiết xe cộ chứ không phải là kho tra cứu thông tin chung."
  },
  {
    qSnippet: "Khi điền vào biểu mẫu, điều nào sau đây là đúng",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Sai", "3": "Đúng" },
    explanation: "Nút chọn tròn tròn (Radio) giống như việc em chỉ được chọn 1 bộ quần áo để mặc ra đường, không thể chọn 2. Nút vuông vuông (Checkbox) thì giống như chọn kẹo, em có thể tích vào nhiều ô cùng lúc. Và nhớ là, mọi thứ em chọn chỉ được máy tính lưu lại khi em dũng cảm bấm nút 'Gửi' (Submit) thôi nhé!"
  },
  {
    qSnippet: "xác thực quan điểm của kết quả tìm kiếm",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Sai", "3": "Đúng" },
    explanation: "Trên mạng, không phải ai cũng ở giữa (trung lập). Một số nhóm thích sự thay đổi mạnh mẽ (cánh tả), nhóm khác lại thích giữ gìn những giá trị cũ và làm kinh tế (cánh hữu). Đừng tin rằng các trang tin tức lớn luôn luôn công bằng, vì bài báo nào cũng do con người viết ra và mang suy nghĩ riêng của họ."
  },
  {
    qSnippet: "khía cạnh của bài viết",
    correctAnswers: { "0": "No", "1": "Yes", "2": "No", "3": "Yes" },
    explanation: "Ai trả tiền (nguồn tài trợ) và ai xúi giục (mối liên hệ chính trị) mới là nguyên nhân khiến một bài báo nói tốt hay nói xấu thiên vị cho một người. Ngày tháng và bằng cấp không làm thay đổi sự công bằng."
  },
  {
    qSnippet: "chuỗi tìm kiếm Boolean",
    correctAnswers: { "0": "(cá OR rùa) AND thái bình dương", "1": "sư tử OR hổ", "2": "trâu NOT bò rừng" },
    explanation: "Chữ 'OR' tiếng Anh nghĩa là HOẶC (cái này hay cái kia đều được). Chữ 'NOT' là KHÔNG (đuổi cái từ đó đi, không cho hiện ra). Còn 'AND' là VÀ (bắt buộc phải có thêm từ này thì mới chịu)."
  },
  {
    qSnippet: "cách người dùng có thể tìm kiếm phản hồi hiệu quả",
    correctAnswers: ["Nhờ người có chuyên môn xem xét trang web và đưa ra phản hồi", "Gửi một cuộc khảo sát mời người dùng đưa ra phản hồi về trang web"],
    explanation: "\"Phản hồi\" là lời nhận xét của người khác dành cho mình. Em có thể gửi bảng câu hỏi (khảo sát) cho bạn bè đánh giá, hoặc tuyệt vời hơn là mời một chuyên gia giỏi vào xem và chỉ lỗi sai cho em."
  },
  {
    qSnippet: "xuất bản về trượt ván",
    correctAnswers: ["Công viên trượt tuyết yêu thích", "Thủ thuật họ muốn học", "Đề xuất tiêu đề"],
    explanation: "Để viết một Blog thật hấp dẫn, em cần hỏi bạn bè xem họ thích đọc gì: Họ muốn học chiêu thức (thủ thuật) gì mới? Họ hay chơi ở sân trượt nào? Và nhờ các bạn ấy nghĩ giùm một cái tên (tiêu đề) thật ngầu cho trang Blog của em."
  },
  {
    qSnippet: "vi phạm và chiếm đoạt",
    correctAnswers: { "0": "Biển thủ (Misappropriation)", "1": "Vi phạm Bằng sáng chế (Patent Infringement)", "2": "Vi phạm nhãn hiệu (Trademark Infringement)", "3": "Vi phạm bản quyền (Piracy)" },
    explanation: "Nhãn hiệu (Trademark) là hình ảnh Logo đại diện. Bằng sáng chế (Patent) là dành cho máy móc mới phát minh. Bản quyền (Copyright) bảo vệ các bức tranh, bài hát. Còn ăn cắp bí mật làm ăn của công ty gọi là Biển thủ."
  },
  {
    qSnippet: "hai dấu hiệu cho thấy bài báo trình bày quan điểm thành kiến",
    correctAnswers: ["Tác giả nói rằng các tác gia của một bài báo đối lập có tư tưởng cực đoạn", "Tác giả hỗ trợ những ý tưởng trong bài viết bằng các trình bày nhưng câu chuyện thú vị thay vì những con số thống kê"],
    explanation: "Người viết công bằng sẽ dùng những con số tính toán rõ ràng và tôn trọng đối thủ. Nếu người viết cứ đi chửi bới người khác là 'cực đoan', hoặc chỉ toàn kể chuyện cảm động mà không có số liệu chứng minh, thì người đó đang rất thiên vị và cố tình dẫn dắt cảm xúc của em đấy."
  },
  {
    qSnippet: "chải lông cho chú chó",
    correctAnswers: ["Facebook"],
    explanation: "Các dịch vụ phục vụ đời sống xung quanh xóm làng (như cắt lông chó, sửa ống nước) thường hay lập các nhóm trên Facebook để quảng cáo. Còn Google thì rộng quá, Instagram thì chuyên đăng ảnh đẹp, Twitter thì chuyên đọc tin tức ngắn."
  },
  {
    qSnippet: "nghiên cứu đó có đáng tin hay không",
    correctAnswers: { "0": "Có", "1": "Có", "2": "Không" },
    explanation: "Một nghiên cứu tốt phải đến từ trường đại học danh tiếng (Đơn vị công bố) và không bị ép buộc bởi người cho tiền (Tổ chức tài trợ). Còn trên mạng xã hội, một tin đồn nhảm cũng có thể có hàng triệu người chia sẻ (mức độ phổ biến), nên nhiều người thích không có nghĩa là nó đúng."
  },
  {
    qSnippet: "ký hiệu cho từ khóa tìm kiếm",
    correctAnswers: { "0": "Tilde Symbol (~)", "1": "Range or Double Dots (..)", "2": "OR as a Boolean value", "3": "Double Quotes (“”)" },
    explanation: "Dấu ngã (~) giúp tìm các từ giống nhau. Hai dấu chấm (..) giúp tìm số liệu từ khoảng này đến khoảng kia. Chữ OR để chọn cái này HOẶC cái kia. Dấu ngoặc kép (\"\") để 'khóa chặt' bắt Google tìm đúng y hệt câu nói đó."
  },
  {
    qSnippet: "phát biểu về việc sử dụng từ khóa",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Sai" },
    explanation: "Dùng chữ OR để tìm 1 trong nhiều con vật (Đúng). Dùng ngoặc kép để giữ nguyên câu (Đúng). Nhưng khi tìm kiếm Google, em không nên viết dấu phẩy ngăn cách các từ khóa như 'mustang, camaro', mà chỉ cần khoảng trắng là đủ rồi (Sai)."
  },
  {
    qSnippet: "cải tiến thiết kế của chiếc xe",
    correctAnswers: { "0": "Không", "1": "Không", "2": "Có", "3": "Có" },
    explanation: "Để 'cải tiến' chiếc xe, công ty cần hỏi những câu bắt khách hàng phải viết ra ý kiến chi tiết (như: cần cải thiện điểm nào, tính năng nào là quan trọng). Nếu chỉ hỏi 'Bạn có thích không?' thì khách hàng chỉ trả lời 'Có' hoặc 'Không', công ty sẽ chẳng biết phải sửa ở chỗ nào cả."
  },
  {
    qSnippet: "hệ thống lưu trữ dữ liệu trung tâm",
    correctAnswers: ["Cơ sở dữ liệu theo dõi hàng tồn kho", "Hệ thống quản lý tài liệu và thư viện"],
    explanation: "\"Lưu trữ trung tâm\" là một kho chứa khổng lồ dùng chung cho rất nhiều người, ví dụ như hệ thống điểm số của nhà trường hay SharePoint của công ty. Còn ổ cứng hay chia sẻ máy tính cá nhân thì quá nhỏ bé và chỉ dành cho cá nhân thôi."
  },
  {
    qSnippet: "đáng tin cậy hay không",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Sai", "3": "Sai" },
    explanation: "Nhà báo viết về Khoa học thì phải là người có bằng cấp am hiểu Khoa học (chuyên môn) và phải trích dẫn lấy tin từ sách vở đàng hoàng (truy cập nguồn). Việc được nhiều người chia sẻ (câu view) hay giỏi kiến thức xóm làng (địa phương) không giúp chứng minh kiến thức khoa học đó là đúng."
  },
  {
    qSnippet: "bài báo nào trong số này là thiên vị",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Đúng", "3": "Đúng", "4": "Sai" },
    explanation: "Các bài báo trung lập, không thiên vị thường được đăng trên tạp chí uy tín hoặc được chấm điểm công bằng trên các trang kiểm tra sự thật (fact-check). Tác giả cũng sẽ nói đều cả mặt tốt lẫn mặt xấu của vấn đề. Lượt Like (thích) nhiều trên mạng không chứng minh được bài báo đó là công bằng hay đúng đắn."
  },
  {
    qSnippet: "định nghĩa tương ứng bên trái",
    correctAnswers: { "0": "Trademark", "1": "Copyright", "2": "Patent" },
    explanation: "\"Trademark\" (Nhãn hiệu) là logo để buôn bán hàng hóa. \"Copyright\" (Bản quyền) là quyền tác giả dành cho một bài hát hay bức tranh (tác phẩm gốc). Còn \"Patent\" (Bằng sáng chế) là đặc quyền dành cho những cỗ máy hay robot mới được phát minh (sáng chế)."
  },
  {
    qSnippet: "Nhiều tài nguyên công cộng",
    correctAnswers: ["Đúng"],
    explanation: "Rất đúng! Ngày nay em không cần phải đạp xe lóc cóc ra thư viện hay tòa án nữa. Các nơi đó đều đã đưa sách báo và hồ sơ lên trang web để em ngồi nhà cũng có thể vào xem (truy cập trực tuyến) được rồi."
  },
  {
    qSnippet: "hơn 200 nhân viên",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Sai", "3": "Đúng" },
    explanation: "Việc nội bộ của công ty thì chỉ được dùng 'đường ống' liên lạc riêng của công ty là Email nội bộ và Trang Web của công ty thôi. Không được đem lên Mạng xã hội hay Blog cá nhân cho người ngoài xem đâu nhé!"
  }
];

const t5 = quizSets.find(t => t.id === 'c3-t5' || t.title.toLowerCase().includes('test 5'));
if (t5) {
    t5.questions.forEach(q => {
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
                        if (matchedOpt) mappedAns.push(matchedOpt);
                    });
                    if (mappedAns.length > 0) q.correctAnswers = mappedAns;
                } else if (!Array.isArray(up.correctAnswers)) {
                    q.correctAnswers = up.correctAnswers;
                } else {
                    // For image questions or missing options
                    q.correctAnswers = up.correctAnswers;
                }
                q.explanation = up.explanation;
            }
        });
    });
}

const updatedContent = `const quizSets = ${JSON.stringify(quizSets, null, 2)};\n`;
fs.writeFileSync(dataFile, updatedContent, 'utf-8');
console.log('Successfully updated data.js for Test 5!');
