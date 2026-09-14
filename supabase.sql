-- ═══════════════════════════════════════════════════════════════
-- SUPABASE — Tabela de perfis (sites das profissionais)
-- Rode este SQL no Supabase: Dashboard -> SQL Editor -> New query
-- ═══════════════════════════════════════════════════════════════

-- Tabela principal: um registro por profissional/ateliê.
-- "config" guarda o JSON completo que o site da cliente consome
-- (dados, cores, serviços, portfólio, depoimentos, FAQ, agendamento,
--  template e conteudo dos textos editáveis).
create table if not exists public.perfis (
  slug          text primary key,
  config        jsonb not null,
  atualizado_em timestamptz not null default now()
);

-- Permite consultar por slug rapidamente
create index if not exists perfis_slug_idx on public.perfis (slug);

-- Habilitar Row Level Security (o padrão seguro). Com estas policies:
--  - qualquer pessoa consegue LER (o site da cliente precisa buscar publicamente)
--  - a anon key consegue INSERT/UPDATE (usada pelo painel admin para publicar)
-- Para produção em escala, troque as policies de escrita por uso de
-- Supabase Auth + service role em um backend/função Vercel.
alter table public.perfis enable row level security;

drop policy if exists "publico_leitura" on public.perfis;
create policy "publico_leitura" on public.perfis
  for select using (true);

drop policy if exists "anon_insere" on public.perfis;
create policy "anon_insere" on public.perfis
  for insert with check (true);

drop policy if exists "anon_atualiza" on public.perfis;
create policy "anon_atualiza" on public.perfis
  for update using (true) with check (true);

-- Opcional: se quiser depurar quando o painel publica
-- select slug, atualizado_em from public.perfis order by atualizado_em desc;