# hattensubs

**HattenSubs**, fansub ekipleri için geliştirilen modern ve modüler bir içerik yönetim platformudur. Anime kataloğu, bölüm yönetimi, yayın takvimi, yönetim paneli, REST API ve Discord botu gibi bileşenleri tek bir ekosistemde bir araya getirerek yayın süreçlerini kolaylaştırmayı ve topluluk etkileşimini artırmayı hedefler.
<!--
Source - https://stackoverflow.com/q/41604263
Posted by zjffdu, modified by community. See post 'Timeline' for change history
Retrieved 2026-07-22, License - CC BY-SA 4.0
-->

![image]([https://cdn.auvic.cc/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202026-07-22%20221656.png](https://cdn.auvic.cc/FireShot%20Capture%20029%20-%20HattenSubs%20-%20localhost.png))

## Kapsanan Klasörler

- `web/` — Site odaklı, tamamlanmış kullanıcı arayüzü deneyimi.
- `api/` — Backend servisleri, anime ve kimlik doğrulama API uç noktaları.
- `bot/` — Discord botu, sunucu içi anime arama ve bildirim özellikleri.

---

## 🌐 Web Arayüzü

Web uygulaması, kullanıcıların anime içeriklerine erişmesini ve yöneticilerin platformu kolayca yönetmesini sağlayan arayüz katmanıdır.

- Anime katalog sistemi
- Bölüm ve içerik görüntüleme
- Haftalık yayın takvimi
- Arama ve keşif özellikleri
- Yönetim paneli
- Responsive kullanıcı deneyimi

## 🔌 API Özellikleri

API katmanı, platformun web arayüzü ve diğer servisleri arasında veri iletişimini sağlayan backend altyapısını oluşturur.

- Seri ve bölüm verilerinin yönetimi
- Yönetici kimlik doğrulama sistemi
- Yetkilendirme ve yönetim işlemleri
- Katalog ve içerik sorgulama servisleri
- Yayın takvimi ve bölüm bilgilerinin yönetimi
- Veritabanı işlemleri ve veri yönetimi
- Web arayüzü ve Discord botu ile entegrasyon desteği

## 🤖 Bot Özellikleri
Discord botu, platform ile entegre çalışacak şekilde geliştirilmektedir ve aşağıdaki özellikleri sunmayı hedeflemektedir:
- Discord üzerinden seri arama
- serileri favorilere ekleyebilme
- Favorilere eklenen serilerin yeni bölümleri için DM bildirimi
- Yeni bölüm yayınlandığında anlık bildirim desteği
- Gelecekte eklenecek ek topluluk ve yönetim özellikleri

---

**Not:** Proje hâlen aktif geliştirme sürecindedir. Yeni özellikler düzenli olarak eklenmekte, mevcut bileşenler iyileştirilmekte ve bazı işlevler geliştirme aşamasında bulunmaktadır.
