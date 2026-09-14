// ═══════════════════════════════════════════════════════════════
// Acesso ao Supabase pelo PAINEL ADMIN (publica/configura perfis)
// Usa a REST API do Supabase (PostgREST) com a anon key.
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

  window.supabaseConfigurado = function () {
    return !!configuracao();
  };

  // Faz uma chamada REST ao Supabase
  window.supabaseFetch = function (path, options) {
    const c = configuracao();
    if (!c) return Promise.reject(new Error('Supabase não configurado'));
    const method = (options && options.method) || 'GET';
    const body = (options && options.body) || undefined;
    const headers = {
      'apikey': c.anon,
      'Authorization': 'Bearer ' + c.anon,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    if (options && options.headers) {
      Object.keys(options.headers).forEach(function (k) {
        headers[k] = options.headers[k];
      });
    }
    return fetch(c.url.replace(/\/$/, '') + path, {
      method: method,
      headers: headers,
      body: body
    });
  };

  // Publica (upsert) o perfil de um slug no Supabase de forma instantânea.
  // Resolve true se a publicação funcionou, ou lança erro.
  window.supabaseSalvarPerfil = function (slug, config) {
    const c = configuracao();
    if (!c) return Promise.reject(new Error('Supabase não configurado'));
    const payload = {
      slug: slug,
      config: config,
      atualizado_em: new Date().toISOString()
    };
    return supabaseFetch('/rest/v1/perfis?on_conflict=slug', {
      method: 'POST',
      headers: { 'Prefer': 'resolution=merge-duplicates' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (!res.ok) {
        return res.text().then(function (txt) {
          throw new Error('Falha ao publicar no Supabase (' + res.status + '): ' + txt.slice(0, 200));
        });
      }
      return true;
    });
  };

  // Busca o config publicado de um slug (testa se existe no banco)
  window.supabaseBuscarPerfil = function (slug) {
    return supabaseFetch('/rest/v1/perfis?slug=eq.' + encodeURIComponent(slug) + '&select=config')
      .then(function (res) {
        if (!res.ok) return null;
        return res.json().then(function (rows) {
          return (rows && rows[0] && rows[0].config) || null;
        });
      });
  };
})();