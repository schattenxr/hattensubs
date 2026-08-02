const bcrypt = require('bcryptjs');
const saltRounds = 10;

async function hashle(pass) {
  const hash = await bcrypt.hash(pass, saltRounds);
  return hash;
}

async function karsilastir(pass, hash) {
  const sonuc = await bcrypt.compare(pass, hash);
  return sonuc; // true / false
}

module.exports = { hashle, karsilastir };