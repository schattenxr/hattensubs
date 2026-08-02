const { verifyToken } = require('../utils/jwt');

function requireAdmin(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Giriş yapmanız gerekiyor' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: 'Oturum geçersiz veya süresi dolmuş' });
  }

  req.admin = decoded; 
  next();
}

module.exports = requireAdmin;