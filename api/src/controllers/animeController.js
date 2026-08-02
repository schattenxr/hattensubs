const { createAnime, getAllAnimes, getAnimeById, deleteAnime, duyuruGonder } = require('../models/Anime');

async function list(req, res) {
  try {
    const all = getAllAnimes();
    return res.json({ all });
  } catch (err) {
    return res.status(500).json({ error: 'Animeler getirilemedi' });
  }
}

async function getOne(req, res) {
  try {
    const id = req.params.id;
    const anime = getAnimeById(id);

    if (!anime) {
      return res.status(404).json({ error: 'Anime bulunamadı' });
    }

    return res.json(anime);
  } catch (err) {
    return res.status(500).json({ error: 'Anime getirilemedi' });
  }
}

function create(req, res) {
  const isim = req.body.name;
  const ozet = req.body.synopsis;
  const image = req.body.image;
  const banner = req.body.banner;
  const kategoriler = req.body.categories;
  const bolumler = req.body.episodes;

  if (!isim) {
    return res.status(400).json({ error: 'Eksik Bilgi' });
  }

  try {
    const id = createAnime({
      name: isim,
      synopsis: ozet,
      image: image,
      banner: banner,
      status: 'active',
      categories: kategoriler,
      episodes: bolumler
    });

    duyuruGonder({
      id: id,
      name: isim,
      synopsis: ozet,
      image: image,
      banner: banner,
      status: 'active',
      categories: kategoriler,
      episodes: bolumler
    }).catch(err => console.error('Duyuru gönderilemedi:', err));

    return res.status(201).json({ success: true, id });
  } catch (err) {
    return res.status(500).json({ error: 'Anime eklenemedi' });
  }
}

function remove(req, res) {
      try {
    const id = req.params.id;
deleteAnime(id)

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Anime getirilemedi' });
  }
}

module.exports = { list, getOne, create, remove };