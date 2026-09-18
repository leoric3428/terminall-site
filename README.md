# terminall.app

terminALL'ın tanıtım, gizlilik ve destek sayfaları. Düz HTML/CSS, derleme adımı yok.

Dosyalar `public/` altında (Cloudflare Workers `assets.directory`).

- `public/index.html` — tanıtım
- `public/privacy/` — gizlilik politikası (App Store Connect'in istediği adres)
- `public/support/` — destek/iletişim (App Store Connect'in istediği adres)
- `public/lang.js` — dil geçişi; tarayıcı Türkçeyse Türkçe açılır, seçim tarayıcıda kalır
- `public/img/` — mağaza görsellerinden kırpılmış ekran kareleri

Yerelde bakmak için: `cd public && python3 -m http.server 8877`
