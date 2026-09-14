// ═══════════════════════════════════════════════════════════════
// CONFIGURAÇÃO DO PAINEL — preencha com os dados do seu projeto
// ═══════════════════════════════════════════════════════════════
// 1) Vá em https://supabase.com/dashboard -> seu projeto -> Settings
//    -> API e copie o "Project URL" e a "anon public key"
// 2) Rode o arquivo supabase.sql no SQL Editor do seu projeto
// 3) Cole aqui embaixo (entre as aspas):
window.NAIL_SUPABASE = {
  url: "https://SEU-PROJETO.supabase.co",
  anon: "sua-chave-anon-publica-va-aqui"
};

// Endereço público do site na Vercel (sem barra no final).
// Ex.: "https://nail-grazii.vercel.app"
// Usado para montar o link de cada profissional: SITE_URL/<slug>
window.NAIL_SITE_URL = "https://SEU-PROJETO.vercel.app";