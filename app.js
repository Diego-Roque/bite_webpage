const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require("fs");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(express.static('Public'));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/index.html'));
});

app.get('/hiw', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/howitworks.html'));
});

app.get('/pricing', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/pricing.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/contact.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});