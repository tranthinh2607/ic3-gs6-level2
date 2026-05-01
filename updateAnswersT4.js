const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const updates = [
  {
    qSnippet: "cập nhật những tiến bộ công nghệ",
    correctAnswers: ["Tham gia một số nhóm công nghệ trên mạng xã hội", "Đăng ký một nguồn cấp tin tức công nghệ"],
    explanation: "Giống như khi em muốn biết về những món đồ chơi mới nhất vừa ra mắt. Em sẽ tham gia vào các \"câu lạc bộ mê đồ chơi\" trên mạng để xem các bạn bàn tán gì (đáp án B), hoặc em đăng ký nhận \"báo nhi đồng\" chuyên về đồ chơi để mỗi ngày đều có người gửi tin tức mới đến tận nhà cho em đọc (đáp án A)."
  },
  {
    qSnippet: "nghi thức nào được coi là đúng cho một cuộc họp trực tuyến",
    correctAnswers: ["Tắt tiếng micrô khi cần thiết", "Trang phục phù hợp"],
    explanation: "Học hay họp qua mạng cũng giống hệt như khi em ngồi trong lớp học thật vậy. Em phải mặc quần áo lịch sự, gọn gàng chứ không thể mặc đồ ngủ lôi thôi (Trang phục phù hợp). Và khi thầy cô hoặc bạn bè đang phát biểu, em cần \"khóa\" chiếc micro của mình lại (tắt tiếng micrô) để những tiếng ồn ào xung quanh nhà em (tiếng chó sủa, tiếng tivi) không làm phiền cả lớp."
  },
  {
    qSnippet: "phân biệt danh tính kỹ thuật số cá nhân của bạn với danh tính kỹ thuật số nghề nghiệp",
    correctAnswers: ["Sử dụng LinkedIn cho các mục đích nghề nghiệp", "Tạo biệt hiệu, bí danh cho bài đăng trên diễn đàn"],
    explanation: "Trên mạng, em nên có hai \"vai diễn\" rạch ròi. Một là lúc đi học/đi làm nghiêm túc: em phải dùng tên thật của mình và dùng mạng xã hội dành cho người lớn đi làm (như LinkedIn). Hai là lúc đi chơi, giải trí: em có thể dùng biệt danh siêu ngầu (như \"Nhện Nhí\", \"Bé Heo\") và chơi ở sân chơi dành cho bạn bè (như Facebook). Việc này giúp em không bị nhầm lẫn giữa công việc và lúc vui chơi."
  },
  {
    qSnippet: "học sinh có thể cải thiện khả năng sử dụng các tính năng được phân công",
    correctAnswers: ["Hướng dẫn người khác", "Tham khảo tài nguyên Trợ giúp"],
    explanation: "Để chơi thật giỏi một món đồ chơi mới, em có hai cách tuyệt vời nhất. Một là mở sách hướng dẫn ra đọc xem nhà sản xuất chỉ cách chơi thế nào (Tham khảo tài nguyên Trợ giúp). Hai là em đem món đồ chơi đó ra dạy lại cho một người bạn khác cách chơi. Người ta phát hiện ra rằng, khi em giảng bài cho bạn hiểu thì chính bộ não của em cũng sẽ tự động nhớ siêu lâu và giỏi lên rất nhiều (Hướng dẫn người khác)."
  },
  {
    qSnippet: "kiểu mua hàng trong ứng dụng",
    correctAnswers: { "0": "Vật tư không tiêu hao", "1": "Không tự động gia hạn", "2": "Vật tư tiêu hao", "3": "Tự động gia hạn" },
    explanation: "Vật tư không tiêu hao: Giống như em mua một bộ áo giáp siêu nhân trong game, mua 1 lần là em được mặc mãi mãi, không bao giờ mất đi.\nKhông tự động gia hạn: Giống như em ra tiệm thuê truyện tranh về đọc 1 ngày rồi trả. Lần sau muốn đọc nữa thì phải tự vác tiền ra thuê tiếp chứ cô chủ quán không tự ý thò tay vào túi lấy tiền của em.\nVật tư tiêu hao: Giống như em mua kẹo. Tiền xu hay đá quý xài là sẽ vơi đi, ăn là sẽ hết, muốn có thêm thì phải nạp tiền mua tiếp.\nTự động gia hạn: Giống như đóng tiền điện hàng tháng. Cứ đến hạn là hệ thống sẽ tự động trừ tiền trong thẻ để em luôn có phim xem mà không bị ngắt quãng."
  },
  {
    qSnippet: "hai khía cạnh nào của sự hiện diện trực tuyến của một người đóng góp vào danh tính kỹ thuật số nghề nghiệp",
    correctAnswers: ["Trang web công ty", "Tài khoản LinkedIn"],
    explanation: "\"Danh tính nghề nghiệp\" giống như một tấm bảng vàng khen thưởng để em đi xin việc. Người ta sẽ đánh giá em là người làm việc giỏi giang qua \"Tài khoản LinkedIn\" (mạng xã hội rèn luyện công việc) hoặc tên của em được vinh danh trên \"Trang web của công ty\" nơi em đang làm. Còn Facebook hay thông tin Ngày sinh thì giống như cuốn nhật ký vui chơi cá nhân thôi."
  },
  {
    qSnippet: "đăng thông tin không chính xác về một sự kiện lịch sử của Mỹ",
    correctAnswers: ["Bạn đã đọc nghiên cứu về sự kiện này do Hiệp hội Lịch sử Hoa Kỳ xuất bản chưa", "Nhiều học giả không đồng ý"],
    explanation: "\"Netiquette\" có nghĩa là \"Phép lịch sự trên mạng\". Khi thấy bạn mình nói sai một điều gì đó, một em bé ngoan sẽ không nhảy vào mắng bạn là \"Sai rồi, đồ ngốc!\". Thay vào đó, em sẽ nhẹ nhàng đưa ra một cuốn sách (đáp án A) hay một đường link thông tin đúng (đáp án B) để bạn tự đọc và tự hiểu ra vấn đề mà không bị xấu hổ trước mặt mọi người."
  },
  {
    qSnippet: "một bức ảnh cũ và đáng xấu hổ của bạn",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Sai" },
    explanation: "Khi bạn làm em buồn vì đăng ảnh xấu, em cần giải quyết lịch sự nhưng rõ ràng. Em nên nhắn tin nói thẳng nhẹ nhàng: \"Làm ơn đừng đăng hình của mình\" (Đúng). Em tuyệt đối không được trẻ con bằng cách trả thù đăng lại ảnh xấu của bạn (Sai). Và đặc biệt, không nên viết hoa toàn bộ chữ \"XÓA NGAY ĐI!\" vì trên mạng, viết hoa tất cả các chữ cái mang ý nghĩa là em đang gào thét, quát mắng vào mặt người khác đó (Sai)."
  },
  {
    qSnippet: "tham gia cộng đồng mạng xã hội gồm những người có cùng sở thích",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Sai", "3": "Sai" },
    explanation: "Dù không đồng ý với ý kiến của bạn, em vẫn cãi lại bằng lời lẽ lịch sự, không chửi bới. Đó là em bé ngoan (Đúng).\nLên mạng giống như đứng giữa ngã tư đường kể chuyện, em không thể bắt hàng ngàn người lạ giữ bí mật cho mình được (Sai).\nMang chuyện của nhóm này đi \"ngồi lê đôi mách\" cho nhóm khác nghe là hành động rất xấu, dễ gây đánh nhau (Sai).\nKhông bao giờ được đưa địa chỉ nhà hay email/số điện thoại cá nhân cho những người lạ trên mạng vì rất nguy hiểm, họ có thể là kẻ trộm hoặc kẻ xấu (Sai)."
  },
  {
    qSnippet: "Tài khoản ngân hàng trực tuyến là một phần của nhận dạng kỹ thuật số",
    correctAnswers: ["Đúng"],
    explanation: "\"Nhận dạng kỹ thuật số\" giống như chiếc ba lô thần kỳ chứa TẤT CẢ mọi thứ về em trên Internet. Nó không chỉ là tài khoản Facebook, tên nhân vật game của em, mà còn chứa cả các tài khoản giữ tiền thật mang tên em (như tài khoản ngân hàng). Do đó, tài khoản ngân hàng chắc chắn là một phần cực kỳ quan trọng trong \"hồ sơ\" cá nhân trên mạng của em rồi!"
  },
  {
    qSnippet: "phê bình bài thuyết trình PowerPoint",
    correctAnswers: ["Sửa lỗi bằng lời giải thích và giọng điệu tích cực"],
    explanation: "Khi bạn của em lỡ vẽ sai một bức tranh, một em bé ngoan sẽ không bao giờ chỉ tay cười nhạo bạn (giễu cợt). Thay vào đó, em sẽ nhẹ nhàng chỉ cho bạn chỗ sai và cổ vũ bạn: \"Cậu thử tô màu này xem sẽ đẹp hơn đấy, cậu làm rất tốt rồi!\". Trên mạng cũng vậy, chúng ta luôn cần góp ý một cách vui vẻ và tích cực."
  },
  {
    qSnippet: "Nhà tuyển dụng tiềm năng sẽ truy cập hồ sơ công việc trực tuyến của bạn",
    correctAnswers: ["Cập nhật hồ sơ thường xuyên để giới thiệu các kỹ năng của bạn"],
    explanation: "\"Hồ sơ công việc\" giống như một cuốn sổ khoe thành tích Bé Ngoan. Mỗi khi em học được một tài năng mới (như biết bơi, biết đánh đàn), em phải ghi ngay vào cuốn sổ đó (cập nhật hồ sơ). Như vậy, khi người khác nhìn vào, họ sẽ luôn thấy em càng ngày càng giỏi giang và tuyệt vời."
  },
  {
    qSnippet: "mời thực tập không lương tại một Công ty Công nghệ địa phương",
    correctAnswers: ["Để học các kỹ năng CNTT mới", "Để áp dụng những kiến thức CNTT của bạn vào môi trường chuyên nghiệp"],
    explanation: "\"Thực tập không lương\" giống như em được đi tham gia một trại hè rèn luyện miễn phí vậy. Tuy em không được phát tiền thưởng, nhưng em có cơ hội đem những gì đã học trong sách vở ra thực hành làm đồ thật (áp dụng kiến thức), và lại còn được các cô chú giỏi giang dạy thêm cho những chiêu thức mới lạ mà ở trường không có (học kỹ năng mới)."
  },
  {
    qSnippet: "công ty có chính sách chống lại việc sử dụng các thiết bị truyền thông không đáng tin cậy",
    correctAnswers: { "0": "Sai", "1": "Đúng", "2": "Sai" },
    explanation: "Máy tính của công ty giống như một tòa lâu đài chứa rất nhiều bí mật quan trọng. Đồ chơi (USB, máy tính bảng) em mang từ nhà đến có thể dính \"vi khuẩn\" (virus) làm ốm lâu đài. Vì vậy, chúng bị coi là \"không đáng tin\". Em chỉ được phép dùng những đồ vật mà chính tòa lâu đài đó phát cho em thôi (ổ USB của công ty cấp)."
  },
  {
    qSnippet: "quay video cuộc thí nghiệm trên điện thoại thông minh của bạn. Bạn muốn chia sẻ video",
    correctAnswers: ["Cho giáo viên khoa học xem video và yêu cầu chia sẻ video đó với lớp của bạn"],
    explanation: "Khi em quay phim hoặc chụp ảnh một người khác (ở đây là thầy giáo), em không được tự ý đăng lên mạng hay gửi lung tung. Phép lịch sự là em phải đưa cho thầy xem trước, xin phép thầy, và để chính thầy là người quyết định có chia sẻ video đó cho các bạn xem hay không."
  },
  {
    qSnippet: "nguyên tắc sử dụng Email",
    correctAnswers: ["Đoạn văn ngắn hơn tốt hơn đoạn văn dài", "Hầu hết các chữ ký phải có họ và tên"],
    explanation: "Viết Email giống như viết một tấm thiệp gửi đi xa. Em nên viết các câu ngắn gọn, dễ hiểu để người đọc không bị mỏi mắt (đoạn văn ngắn). Và quan trọng nhất, ở cuối bức thư, em luôn phải viết đầy đủ họ tên của mình (chữ ký) để người nhận biết chính xác ai là người đã gửi thiệp cho họ."
  },
  {
    qSnippet: "đăng tải hai nội dung nào lên tài khoản mạng xã hội dùng vào mục đích công việc",
    correctAnswers: ["Ảnh hồ sơ chính thức của bạn", "Chứng nhận kỹ thuật mà bạn có"],
    explanation: "Tài khoản \"công việc\" giống như bảng tuyên dương ở trường học. Em chỉ được dán lên đó những bức ảnh thẻ mặc áo sơ mi gọn gàng, nghiêm túc (ảnh hồ sơ chính thức) và các Bằng khen, Giấy khen em đạt được (chứng nhận kỹ thuật). Những bức ảnh mặc đồ ngủ đang chơi game hay than vãn thì chỉ nên để ở tài khoản \"cá nhân\" vui chơi thôi."
  },
  {
    qSnippet: "quay lại cảnh một người bạn đang thực hiện một điệu nhảy ngớ ngẩn",
    correctAnswers: ["Gửi trực tiếp video cho người bạn nhảy nhót kia và bảo họ chia sẻ video đó với những người khác"],
    explanation: "Chuyện này giống y hệt câu 15! Điệu nhảy này có thể buồn cười nhưng bạn em có thể sẽ thấy xấu hổ. Em là bạn tốt thì phải đưa cuốn băng cho bạn ấy xem trước. Hãy để chính người bạn đó tự quyết định xem có nên đem đoạn phim đó đi chọc cười mọi người hay không nhé."
  },
  {
    qSnippet: "tham gia một diễn đàn trực tuyến để trả lời một người cho rằng đồng phục mới của một đội nên có màu đỏ",
    correctAnswers: ["Tôi nghĩ đồng phục mới nên có màu xanh lam, nhưng tôi hiểu ý của bạn"],
    explanation: "Khi em thích màu xanh, nhưng bạn lại thích màu đỏ. Em không nên cãi là: \"Màu đỏ xấu xí, màu xanh mới đẹp!\". Một em bé lịch sự sẽ nói: \"Tớ thấy màu xanh đẹp hơn, nhưng tớ biết màu đỏ cũng rất ngầu như siêu nhân vậy\" (hiểu ý của bạn). Như vậy cả hai sẽ vẫn là bạn tốt mà không bị cãi nhau."
  },
  {
    qSnippet: "tham gia lớp học/chuyến đi thực tế qua Zoom/Teams",
    correctAnswers: { "0": "Đúng", "1": "Đúng", "2": "Sai", "3": "Đúng" },
    explanation: "Học qua Zoom cũng giống như ngồi trong lớp thật.\nEm bật Camera để thầy cô nhìn thấy khuôn mặt tươi tắn của em (Đúng).\nKhi muốn phát biểu, em bấm nút \"Giơ tay\" chờ thầy gọi (Đúng).\nNhưng em phải luôn \"Tắt micro\" (Tắt: Đúng, Luôn bật: Sai). Vì nếu em bật micro, tiếng chó sủa hay tiếng tivi nhà em sẽ vang lên làm ồn cả lớp, các bạn sẽ không nghe được thầy giáo giảng bài. Chỉ khi nào thầy gọi tên, em mới được mở micro lên để nói."
  },
  {
    qSnippet: "hiển thị mức độ nhạy cảm với sự đa dạng văn hóa",
    correctAnswers: { "0": "Đúng", "1": "Sai", "2": "Đúng", "3": "Sai" },
    explanation: "\"Sự đa dạng văn hóa\" giống như việc lớp em có nhiều bạn đến từ các vùng miền hay đất nước khác nhau, mỗi bạn sẽ có những phong tục và thói quen riêng.\nĐặt câu hỏi thay vì đưa ra giả định (Đúng): Nếu em không biết bạn mới thích món ăn gì, tốt nhất là em nên lịch sự hỏi bạn ấy, thay vì tự đoán bừa rồi mời nhầm món bạn không thể ăn được.\nĐăng nhiều câu chuyện về nền văn hóa khác (Sai): Nếu em chưa thật sự hiểu rõ về phong tục của nhà bạn, em không nên mang đi kể lung tung cho người khác nghe. Nếu lỡ kể sai, bạn của em sẽ rất buồn đấy.\nChú ý đến định kiến (Đúng): Đôi khi chúng ta hay nghĩ sai lệch rằng \"con trai là phải thích siêu nhân, con gái là phải thích màu hồng\". Khi em tự nhận ra những suy nghĩ đó là không đúng, em sẽ đối xử công bằng và hòa đồng với tất cả mọi người hơn.\nMua quần áo thiêng liêng để mặc (Sai): Những bộ trang phục truyền thống hoặc đồ lễ của người khác là những thứ rất thiêng liêng và quan trọng đối với họ. Việc em lấy những món đồ đó ra mặc như một trò chơi hóa trang là một hành động thiếu tôn trọng."
  },
  {
    qSnippet: "tổ chức một cuộc họp từ xa bằng công cụ hội thảo video để lên ý tưởng",
    correctAnswers: ["Đề nghị hỗ trợ riêng cho một thành viên trong nhóm không có kinh nghiệm", "Sử dụng các tính năng như Giơ tay (Raise Hand) để tạo cơ hội cho tất cả các thành viên trong nhóm tham gia"],
    explanation: "Khi em làm \"đội trưởng\" của một nhóm học tập trên mạng có cả người lớn tuổi và các bạn nhỏ, em cần phải là một người hướng dẫn tâm lý và công bằng.\nHỗ trợ riêng cho người chưa có kinh nghiệm: Hãy tưởng tượng em rủ bà ngoại chơi trò chơi trên điện thoại lần đầu tiên. Một người đội trưởng ngoan sẽ dành thời gian chỉ cho bà nút nào là nút bấm, nút nào là nút tắt trước khi trò chơi bắt đầu, để bà không bị bỡ ngỡ hay lúng túng.\nSử dụng nút Giơ tay: Khi tất cả mọi người cùng tranh nhau nói một lúc thì cuộc họp sẽ rất ồn ào. Nút \"Giơ tay\" giống hệt như việc em giơ tay xin cô giáo phát biểu trong lớp học. Nó giúp mọi người lần lượt được nói, và đảm bảo những bạn nhút nhát nhất cũng có cơ hội được chia sẻ ý kiến tuyệt vời của mình."
  }
];

const t4 = quizSets.find(t => t.id === 'c2-t4' || t.title.toLowerCase().includes('chủ đề 2') && t.title.toLowerCase().includes('bài test 4'));
if (t4) {
    t4.questions.forEach(q => {
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
console.log('Successfully updated data.js for c2-t4!');
