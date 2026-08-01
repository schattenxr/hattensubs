const { hashle } = require('../src/utils/hash');
const db = require('../src/config/db');

async function main() {
  const hash = await hashle('admin'); //admin password
  db.prepare(
    'INSERT INTO admins (username, password_hash, discordid, role) VALUES (?, ?, ?, ?)'
  ).run('savior', hash, 'discordid', 'admin');
  console.log('Admin oluşturuldu');
}

main();
