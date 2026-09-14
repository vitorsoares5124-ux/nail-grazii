// ═══════════════════════════════════════════════════════════════
// CONFIGURAÇÃO DO PAINEL — preencha com os dados do seu projeto
// ═══════════════════════════════════════════════════════════════
// 1) Vá em https://supabase.com/dashboard -> seu projeto -> Settings
//    -> API e copie o "Project URL" e a "anon public key"
// 2) Rode o arquivo supabase.sql no SQL Editor do seu projeto
// 3) Cole aqui embaixo (entre as aspas):
window.NAIL_SUPABASE = {
  url: "https://ntizwglspiflydyklfrr.supabase.co",
  anon: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aXp3Z2xzcGlmbHlkeWtsZnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzNTA5NDgsImV4cCI6MjEwNDkyNjk0OH0.A6S077gNzeG-xRnoG8WEDxQv3p2O45wvwbwz6xIgpbc"
};

// Endereço público do site na Vercel (sem barra no final).
// Ex.: "https://nail-grazii.vercel.app"
// Usado para montar o link de cada profissional: SITE_URL/<slug>
window.NAIL_SITE_URL = "https://allcancesite.vercel.app/";

// Slug do perfil principal que aparece na RAIZ do site (https://allcancesite.vercel.app/).
// Precisa bater com a chave do perfil no painel admin. Ex.: "graziele", "atelie"...
// Quando você clica em "Salvar Perfil"/"Publicar agora" nesse perfil, o site da raiz
// atualiza na hora (sem precisar de git/Vercel), porque ele busca o config no Supabase.
window.NAIL_SLUG_RAIZ = "graziele";