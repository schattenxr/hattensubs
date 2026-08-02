const { karsilastir } = require('../utils/hash');
const { generateToken } = require('../utils/jwt');
const db = require('../config/db');

async function giris(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Kullanıcı adı ve şifre gerekli' });
  }

  const admin = db.prepare('SELECT * FROM admins WHERE username = ?').get(username);

  if (!admin) {
    return res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı' });
  }
    else {
    const sifredogrumu = await karsilastir(password, admin.password_hash);

    if (!sifredogrumu) {
        return res.status(401).json({ error: 'Kullanıcı adı veya şifre hatalı' });
    }

    const token = generateToken({ id: admin.id, username: admin.username, role: admin.role });

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({ success: true, admin: { username: admin.username, role: admin.role } });
    }

}

module.exports = { giris };