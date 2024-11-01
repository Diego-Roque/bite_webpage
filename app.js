const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require("fs");


const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/animation.html'));
});

app.get('/hiw', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/howitworks.html'));
});

app.get('/pricing', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pricing.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
})

app.use((req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});