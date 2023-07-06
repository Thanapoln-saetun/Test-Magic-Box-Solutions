// ฟังก์ชันสำหรับสร้างจำนวนเต็มถัดไปตามลำดับที่กำหนด
function generateNextIntegers(sequence) {
  const length = sequence.length;

  // ตรวจสอบว่าลำดับเป็นว่างเปล่าหรือมีจำนวนเต็มเพียงตัวเดียว
  if (length === 0 || length === 1) {
    console.log("โปรดใส่ลำดับที่มีอย่างน้อยสองจำนวนเต็ม");
    return;
  }

  // กำหนดความต่างระหว่างจำนวนเต็มที่ติดกัน
  const diff1 = sequence[1] - sequence[0];

  // ตรวจสอบว่าลำดับมีจำนวนเต็มมากกว่าสองตัวหรือไม่
  if (length > 2) {
    const diff2 = sequence[2] - sequence[1];

    // ตรวจสอบว่าความต่างคงที่หรือไม่
    if (diff2 === diff1) {
      // สร้างจำนวนเต็มถัดไปโดยใช้ความต่างคงที่
      for (let i = length; i < length + 10; i++) {
        sequence.push(sequence[i - 1] + diff1);
      }
    } else {
      // สร้างจำนวนเต็มถัดไปโดยใช้รูปแบบที่แตกต่างกัน
      for (let i = length; i < length + 10; i++) {
        sequence.push(sequence[i - 1] * 2 + 6);
      }
    }
  } else {
    // สร้างจำนวนเต็มถัดไปโดยใช้ความต่างคงที่
    for (let i = length; i < length + 10; i++) {
      sequence.push(sequence[i - 1] + diff1);
    }
  }

  // แสดงผลลำดับจำนวนเต็มถัดไป 10 ตัว
  console.log("จำนวนเต็มถัดไป 10 ตัว: " + sequence.slice(length).join(" "));
}

// อ่านข้อมูลจากผู้ใช้ผ่านทางคอนโซล
const readline = require("readline");

// สร้างอินเตอร์เฟซสำหรับอ่านข้อมูลจากคอนโซล
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ถามผู้ใช้ให้ป้อนลำดับของจำนวนเต็มที่เพิ่มขึ้นเมื่อได้รับคำถาม
rl.question("ป้อนลำดับของจำนวนเต็มที่เพิ่มขึ้น: ", (input) => {
  const sequence = input.split(" ").map(Number);
  generateNextIntegers(sequence);
  rl.close();
});
