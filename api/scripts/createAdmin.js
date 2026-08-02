const { hashle } = require('../src/utils/hash');
const db = require('../src/config/db');

async function main() {
  const hash = await hashle('admin');
  db.prepare(
    'INSERT INTO admins (username, password_hash, discordid, role) VALUES (?, ?, ?, ?)'
  ).run('savior', hash, 'id2', 'admin');
  console.log('Admin olusturuldu');
}

main();