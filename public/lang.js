// Dil seçimi: tarayıcı Türkçeyse Türkçe, değilse İngilizce. Seçim kalır.
(function () {
  var anahtar = 'terminall-dil';
  function uygula(dil) {
    document.documentElement.lang = dil;
    var d = document.getElementById('dil-dugme');
    if (d) d.textContent = dil === 'tr' ? 'English' : 'Türkçe';
  }
  var kayitli = null;
  try { kayitli = localStorage.getItem(anahtar); } catch (e) {}
  var tarayici = (navigator.language || 'en').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en';
  uygula(kayitli || tarayici);
  document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'dil-dugme') {
      var yeni = document.documentElement.lang === 'tr' ? 'en' : 'tr';
      uygula(yeni);
      try { localStorage.setItem(anahtar, yeni); } catch (err) {}
    }
  });
})();
