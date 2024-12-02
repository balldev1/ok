const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

// จำลองฐานข้อมูล
const users = [
    { username: 'admin1', password: 'admin1' },
    { username: 'admin2', password: 'admin2' },
];

app.use(cors());
app.use(bodyParser.json());

// API สำหรับตรวจสอบข้อมูลผู้ใช้
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    // ตอบกลับ ถ้าถูกต้อง ถ้าไม่ถูกต้อง
    if (user) {
        res.json({ status: 'success' });
    } else {
        res.json({ status: 'error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
