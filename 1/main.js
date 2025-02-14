function findMissingNumber(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // ตรวจสอบว่าค่าที่หายไปมีหรือไม่
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
    // หากไม่มีค่าหายไป
    return null;
}

// ทดสอบฟังก์ชัน
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
console.log(findMissingNumber([10, 11, 12, 14])); // Output: 13
console.log(findMissingNumber([3, 4, 5, 6, 7])); // Output: None

// ในแต่ละรอบของลูป, จะตรวจสอบว่า ค่าถัดไป (arr[i + 1]) ไม่เท่ากับ ค่าปัจจุบัน (arr[i]) บวก 1 หรือไม่ (arr[i + 1] !== arr[i] + 1).
// หากเงื่อนไขนี้เป็นจริง แสดงว่ามีตัวเลขหายไปในตำแหน่งนี้ ดังนั้นฟังก์ชันจะ คืนค่า เป็นตัวเลขที่หายไป (arr[i] + 1).
// ตัวอย่างเช่น:
// ถ้าอาเรย์เป็น [1, 2, 4, 5, 6] ตอนที่ลูปมาถึงค่า 2 และตรวจสอบค่า 4 (ถัดไป), จะพบว่าค่าห่างกัน 2 ซึ่งแสดงว่าค่าที่หายไปคือ 3, ดังนั้นฟังก์ชันจะคืนค่า