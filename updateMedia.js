const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.js');
let content = fs.readFileSync(dataFile, 'utf-8');
content = content.replace('const quizSets = ', 'module.exports = ');
fs.writeFileSync(path.join(__dirname, 'temp_data.js'), content, 'utf-8');
const quizSets = require('./temp_data.js');

const files = [
  "IC3.LEVEL2.CHUDE1.TEST1.cau 20.png",
  "IC3.LEVEL2.CHUDE1.TEST1.cau 24.png",
  "IC3.LEVEL2.CHUDE1.TEST2.cau 1.png",
  "IC3.LEVEL2.CHUDE1.TEST2.cau 12.png",
  "IC3.LEVEL2.CHUDE1.TEST2.cau 15.png",
  "IC3.LEVEL2.CHUDE1.TEST2.cau 23.png",
  "IC3.LEVEL2.CHUDE1.TEST2.cau 29.png",
  "IC3.LEVEL2.CHUDE1.TEST2.cau 30.png",
  "IC3.LEVEL2.CHUDE1.TEST3.cau 7.mp4",
  "IC3.LEVEL2.CHUDE1.TEST3.cau 9.png",
  "IC3.LEVEL2.CHUDE3.TEST5.cau 1.png",
  "IC3.LEVEL2.CHUDE4.TEST6.cau 13.png",
  "IC3.LEVEL2.CHUDE4.TEST6.cau 15.png",
  "IC3.LEVEL2.CHUDE4.TEST6.cau 24.png",
  "IC3.LEVEL2.CHUDE7.TEST12.cau 17.png"
];

files.forEach(f => {
  // Parse filename to extract Test number and question ID
  // e.g., IC3.LEVEL2.CHUDE1.TEST1.cau 20.png
  const match = f.match(/TEST(\d+)\.cau (\d+)\.(png|mp4)$/i);
  if (match) {
    const testNum = match[1];
    const qId = parseInt(match[2], 10);
    const ext = match[3].toLowerCase();

    // Find the test
    const test = quizSets.find(t => t.title.toLowerCase().includes(`test ${testNum}`));
    if (test) {
      // Find the question
      const q = test.questions.find(q => q.id === qId);
      if (q) {
        if (ext === 'png') {
          q.images = [f];
        } else if (ext === 'mp4') {
          q.videos = [f];
        }
        console.log(`Updated Test ${testNum} - Câu ${qId} with ${ext} file.`);
      } else {
        console.log(`Could not find Câu ${qId} in Test ${testNum}`);
      }
    } else {
      console.log(`Could not find Test ${testNum}`);
    }
  }
});

const updatedContent = `const quizSets = ${JSON.stringify(quizSets, null, 2)};\n`;
fs.writeFileSync(dataFile, updatedContent, 'utf-8');
console.log('Successfully mapped all media files to data.js!');
