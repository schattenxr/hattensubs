const db = require('../config/db');

db.exec(`
  CREATE TABLE IF NOT EXISTS animes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    synopsis TEXT,
    image TEXT,
    status TEXT DEFAULT 'active',
    categories TEXT,
    episodes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

try {
  db.exec(`ALTER TABLE animes ADD COLUMN banner TEXT`);
} catch (err) {
}

function createAnime(data) {
  const stmt = db.prepare(`
    INSERT INTO animes (name, synopsis, image, banner, status, categories, episodes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    data.name,
    data.synopsis,
    data.image,
    data.banner || null,
    data.status || 'active',
    JSON.stringify(data.categories),
    JSON.stringify(data.episodes)
  );

  return result.lastInsertRowid;
}

async function duyuruGonder(anime) {
  await fetch(`https://discord.com/api/v10/channels/${process.env.DISCORD_DUYURU_KANAL_ID}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      embeds: [
        {
          title: anime.name,
          description: anime.synopsis || 'Özet yok',
          color: 0x5865f2,
          thumbnail: anime.image ? { url: anime.image } : undefined,
          fields: anime.categories?.length
            ? [{ name: 'Kategoriler', value: anime.categories.join(', ') }]
            : [],
          footer: { text: 'Yeni anime eklendi' },
          timestamp: new Date().toISOString()
        }
      ],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: 'Hemen İzle',
              url: `http://localhost:3000/anime?id=${anime.id}`
            }
          ]
        }
      ]
    })
  });
}

function getAllAnimes() {
  const rows = db.prepare('SELECT * FROM animes').all();

  return rows.map(row => ({
    ...row,
    categories: JSON.parse(row.categories), 
    episodes: JSON.parse(row.episodes)
  }));
}

function getAnimeById(id) {
  const row = db.prepare('SELECT * FROM animes WHERE id = ?').get(id);

  if (!row) return null;

  return {
    ...row,
    categories: JSON.parse(row.categories),
    episodes: JSON.parse(row.episodes)
  };
}

function deleteAnime(id) {
  db.prepare('DELETE FROM animes WHERE id = ?').run(id);
}

module.exports = { createAnime, getAllAnimes, getAnimeById, deleteAnime, duyuruGonder };