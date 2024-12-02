const express = require('express');
const app = express();
app.use(express.json());

// จำลองฐานข้อมูลสินค้า
let products = [];
// จำลองฐานindex เริ่มต้นด้วย 1
let nextId = 1;

// get poduct
app.get('/products', (req, res) => {
    res.json(products);
});

// เพิ่มสินค้าใหม่ รับ name, price, quantity จากbody
// pusth ข้อมูลเข้าไปที่ products ตอบกลับ 201
app.post('/products', (req, res) => {
    const { name, price, quantity } = req.body;
    const newProduct = { id: nextId++, name, price, quantity };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// แก้ไขข้อมูลสินค้า ใส่ id ของproduct
// รับ name, price, quantity จากbody
// เปรียบเทียบไอดี ที่ได้รับเข้ามากับ idที่มีอยู่ถ้าไม่ตรงกันให้ message: "Product not found.
// ถ้าเจอให้แก้ไขข้อมูล ตามที่ได้รับเข้ามา name, price, quantity
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: "Product not found." });
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    res.json(product);
});

// ลบสินค้า รับไอดีที่ได้จาก api find หา ที่ === id ที่มีอยุ่
// -1คือในarray ไม่มีค่าให้  message: "Product not found." 
// ถ้าเจอให้ลบ ไอดีนัน้
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((p) => p.id === parseInt(id));

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found." });
    }

    products.splice(productIndex, 1);
    res.json({ message: "Product deleted successfully." });
});

// รันเซิร์ฟเวอร์ 5001
app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001');
});
