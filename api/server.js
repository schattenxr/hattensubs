require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://192.168.1.130:3000',
    'https://sydney-temporarily-jury-wings.trycloudflare.com'
  ],
  credentials: true
}));

app.use("/videos", express.static(path.join(__dirname, "public/images")));
app.use('/api/animes', require('./src/routes/animeRoutes'));
app.use('/api/auth', require('./src/routes/authRoutes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API çalışıyor: http://localhost:4000 (port ${PORT})`));