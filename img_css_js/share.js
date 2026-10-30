// Teilen-Buttons: kein Fremdskript, keine Cookies. Die Links sind normale Links und funktionieren auch ohne JavaScript.
// Dieses Skript ergänzt nur das Teilen-Menü des Geräts und das Kopieren des Links.
(function () {
  var box = document.querySelector('[data-share-url]');
  if (!box) return;

  var data = {
    title: box.getAttribute('data-share-title'),
    text: box.getAttribute('data-share-text'),
    url: box.getAttribute('data-share-url')
  };
  var status = box.querySelector('[data-share-status]');
  var timer;

  function say(msg) {
    if (!status) return;
    status.textContent = msg;
    clearTimeout(timer);
    timer = setTimeout(function () { status.textContent = ''; }, 4000);
  }

  var nativeBtn = box.querySelector('[data-share-native]');
  if (nativeBtn && navigator.share) {
    nativeBtn.hidden = false;
    nativeBtn.addEventListener('click', function () {
      navigator.share(data).catch(function () { /* Abbruch durch die Person ist kein Fehler */ });
    });
  }

  var copyBtn = box.querySelector('[data-share-copy]');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = data.url;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        document.body.removeChild(ta);
        say(ok ? 'Link kopiert.' : 'Kopieren nicht möglich. Link: ' + data.url);
      }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(data.url).then(function () { say('Link kopiert.'); }, fallback);
      } else {
        fallback();
      }
    });
  }
})();
