const fs = require('fs');
let dataJs = fs.readFileSync('data.js', 'utf8');

// Replace "const quizSets = " with "module.exports = " to read it
let tempContent = dataJs.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync('temp_patch.js', tempContent);

const quizSets = require('./temp_patch.js');

quizSets.forEach(t => {
    t.questions.forEach(q => {
        if (t.id === 'c1-t2') {
            if (q.id === 7) {
                q.correctAnswers = {
                    "0": "Sai",
                    "1": "Đúng",
                    "2": "Sai",
                    "3": "Đúng"
                };
            } else if (q.id === 17) {
                q.correctAnswers = ["Chuyển từ tài khoản Microsoft gia đình của bạn sang tài khoản Microsoft chơi game của bạn"];
            } else if (q.id === 19) {
                q.correctAnswers = ["Đặt máy in yêu thích làm Mặc định."];
            }
        } else if (t.id === 'c1-t3') {
            if (q.id === 5) {
                q.correctAnswers = [
                    "áp phích_bản nháp1.psd&nbsp; &nbsp; &nbsp; &nbsp;áp phích_bản nhap2.psd&nbsp; &nbsp; &nbsp; &nbsp;áp phích_BẢN CUỐI.psd",
                    "áp phích_bản gốc.psd&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; áp phích_đã cắt.psd&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; áp phích_thước xám.psd"
                ];
            }
        } else if (t.id === 'c2-t4') {
            if (q.id === 20) {
                q.correctAnswers = {
                    "0": "Đúng",
                    "1": "Đúng",
                    "2": "Sai",
                    "3": "Đúng"
                };
            }
        } else if (t.id === 'c3-t5') {
            if (q.id === 1) {
                q.options = ["Công cụ (Tools)", "Cài đặt (Settings)", "Tìm kiếm nâng cao (Advanced Search)", "Thêm (More)"];
                q.correctAnswers = ["Công cụ (Tools)"];
            } else if (q.id === 8) {
                q.options = [
                    "Attribution-ShareAlike (CC BY-SA)",
                    "Attribution-NoDerivs (CC BY-ND)",
                    "Attribution-NonCommercial-NoDerivs (CC BY-NC-ND)",
                    "Bất kỳ giấy phép Creative Commons nào"
                ];
                q.correctAnswers = ["Attribution-ShareAlike (CC BY-SA)"];
            } else if (q.id === 10) {
                q.correctAnswers = ["Tạp chí học thuật"];
            }
        } else if (t.id === 'c4-t6') {
            if (q.id === 20) {
                q.correctAnswers = {
                    "0": "Có",
                    "1": "Có",
                    "2": "Không",
                    "3": "Không"
                };
            }
        } else if (t.id === 'c7-t12') {
            if (q.id === 18) {
                q.correctAnswers = {
                    "0": "Đúng",
                    "1": "Sai",
                    "2": "Đúng"
                };
            }
        }
    });
});

let newData = 'const quizSets = ' + JSON.stringify(quizSets, null, 2) + ';';
fs.writeFileSync('data.js', newData, 'utf8');
console.log('Fixed missing correct answers');
