const { hashle } = require('../src/utils/hash');
const db = require('../src/config/db');

async function main() {
  const hash = await hashle('admin'); // buraya gerçek şifreni yaz
  db.prepare(
    'INSERT INTO admins (username, password_hash, discordid, role) VALUES (?, ?, ?, ?)'
  ).run('savior', hash, 'buraya_gercek_discord_id', 'admin');
  console.log('Admin oluşturuldu');
}

main();