/* Free GDPR cookie consent — vanilla JS, ~1KB. No external calls.
   Stores choice in localStorage. Activates data-cc-gated third-party embeds on consent.
   Gate a third-party script/iframe like:
     <iframe data-src="https://...gloriafood..." data-cc="marketing"></iframe>
     <script type="text/plain" data-cc="marketing" data-src="https://..."></script>
*/
(function () {
  var KEY = 'cc-consent-v1';
  var banner = document.getElementById('cc-banner');
  var prefs = document.getElementById('cc-prefs');
  if (!banner) return;

  function read() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }
  function save(state) { localStorage.setItem(KEY, JSON.stringify(state)); }

  function activate(category) {
    // Activate gated iframes
    document.querySelectorAll('iframe[data-cc="' + category + '"][data-src]').forEach(function (el) {
      el.src = el.getAttribute('data-src');
      el.removeAttribute('data-src');
    });
    // Activate gated scripts
    document.querySelectorAll('script[type="text/plain"][data-cc="' + category + '"]').forEach(function (el) {
      var s = document.createElement('script');
      if (el.getAttribute('data-src')) s.src = el.getAttribute('data-src');
      else s.textContent = el.textContent;
      document.body.appendChild(s);
    });
  }

  function apply(state) {
    Object.keys(state.categories || {}).forEach(function (cat) {
      if (state.categories[cat]) activate(cat);
    });
  }

  function show() { banner.hidden = false; }
  function hide() { banner.hidden = true; }

  var existing = read();
  if (existing) { apply(existing); } else { show(); }

  banner.addEventListener('click', function (e) {
    var action = e.target.getAttribute && e.target.getAttribute('data-cc-action');
    if (!action) return;

    if (action === 'accept') {
      var s = { categories: { marketing: true }, ts: '' + new Date().getFullYear() };
      save(s); apply(s); hide();
    } else if (action === 'refuse') {
      save({ categories: { marketing: false } }); hide();
    } else if (action === 'settings') {
      if (prefs) prefs.hidden = !prefs.hidden;
    } else if (action === 'save') {
      var cats = {};
      banner.querySelectorAll('input[data-cc]').forEach(function (i) { cats[i.getAttribute('data-cc')] = i.checked; });
      var st = { categories: cats };
      save(st); apply(st); hide();
    }
  });

  // Footer "Gérer les cookies" reopen
  document.addEventListener('click', function (e) {
    if (e.target.getAttribute && e.target.getAttribute('data-cc-action') === 'open') show();
  });
})();
