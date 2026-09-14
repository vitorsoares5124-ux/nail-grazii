// ═══════════════════════════════════════════════════════════════
// Acesso ao Supabase pelo SITE DA CLIENTE (busca o config pelo slug)
// Inclua antes do engine do template. Leve, só usa fetch REST.
// ═══════════════════════════════════════════════════════════════
(function () {
  function configuracao() {
    try {
      const c = window.NAIL_SUPABASE || {};
      return (c.url && c.anon && c.url.indexOf('SEU-PROJETO') === -1) ? c : null;
    } catch (e) {
      return null;
    }
  }

  // Resolve com o config (ou null se não existir / não configurado)
  window.carregarPerfilSupabase = function (slug) {
    const c = configuracao();
    if (!c || !slug) return Promise.resolve(null);
    return fetch(c.url.replace(/\/$/, '') + '/rest/v1/perfis?slug=eq.' + encodeURIComponent(slug) + '&select=config', {
      headers: {
        'apikey': c.anon,
        'Authorization': 'Bearer ' + c.anon,
        'Accept': 'application/json'
      }
    }).then(function (res) {
      if (!res.ok) return null;
      return res.json();
    }).then(function (rows) {
      return (rows && rows[0] && rows[0].config) || null;
    }).catch(function () {
      return null;
    });
  };
})();