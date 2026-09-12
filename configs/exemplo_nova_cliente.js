// ═══════════════════════════════════════════════════════════════════════════════
// 🌸 EXEMPLO: CONFIGURAÇÃO DE UMA NOVA CLIENTE (Ex: Camila Nail Studio)
// ═══════════════════════════════════════════════════════════════════════════════
// Para ativar este perfil, copie o conteúdo deste arquivo para o "config.js" principal!

const SITE_CONFIG = {

  dados: {
    nome: "Camila",
    subtitulo: "Nail Designer & Instrutora",
    whatsapp: "5511999998888",
    instagram: "camilanails",
    cidade: "São Paulo - SP",
    endereco: "Studio Privativo - Moema",
    fotoPerfil: "assets/images/graziele_perfil.jpg",
    
    tituloHero: "Unhas elegantes e resistentes para o seu dia a dia.",
    descricaoHero: "Especialista em fibra de vidro e nail art delicada com atendimento personalizado e exclusivo."
  },

  // Exemplo de cores personalizadas (Preto Nobre & Dourado / Rosé Gold)
  cores: {
    primaria: "#B3874B",   // Dourado
    secundaria: "#D9A05B", // Ouro suave
    destaque: "#F3D8AB",   // Champagne
    fundo: "#FCFAFB",
    texto: "#1F1A14"
  },

  // Serviços personalizados com valores
  servicos: [
    {
      nome: "Alongamento em Fibra",
      categoria: "Alongamento",
      descricao: "Estrutura fina com alta resistência e aspecto 100% natural.",
      tempo: "Tempo: 2h30",
      preco: "R$ 180",
      destaque: true,
      badge: "Mais Procurado"
    },
    {
      nome: "Blindagem & Esmaltação em Gel",
      categoria: "Fortalecimento",
      descricao: "Protege a unha natural contra quebras e mantém o esmalte brilhante por 20 dias.",
      tempo: "Tempo: 1h15",
      preco: "R$ 90",
      destaque: false,
      badge: ""
    },
    {
      nome: "Manutenção",
      categoria: "Cuidados",
      descricao: "Reposição de gel e alinhamento do crescimento da unha.",
      tempo: "Tempo: 2h00",
      preco: "R$ 130",
      destaque: false,
      badge: ""
    }
  ],

  portfolio: [
    {
      imagem: "assets/images/portfolio_2.jpg",
      tag: "Ouro & Glamour",
      titulo: "Stiletto Dourada com Pérolas"
    },
    {
      imagem: "assets/images/portfolio_4.jpg",
      tag: "Baby Boomer",
      titulo: "Degradê Francesinha"
    },
    {
      imagem: "assets/images/portfolio_5.jpg",
      tag: "Delicada",
      titulo: "Florais com Dourado"
    }
  ],

  depoimentos: [
    {
      nome: "Renata Costa",
      detalhe: "Cliente VIP",
      inicial: "R",
      texto: "A Camila é impecável! Minhas unhas nunca duraram tanto sem quebrar. O acabamento é finíssimo!"
    },
    {
      nome: "Bianca Martins",
      detalhe: "Cliente há 1 ano",
      inicial: "B",
      texto: "Ambiente maravilhoso e atendimento super pontual. Não troco por ninguém em SP!"
    }
  ],

  faq: [
    {
      pergunta: "Como agendar?",
      resposta: "Basta escolher o dia e horário aqui no site e confirmar no WhatsApp da Camila."
    },
    {
      pergunta: "Qual a forma de pagamento?",
      resposta: "Aceitamos Pix, cartão de crédito e débito."
    }
  ],

  agendamento: {
    horariosPadrao: ['09:00', '10:30', '13:30', '15:00', '16:30', '18:00'],
    atendeDomingo: false,
    mensagemAviso: "Ao clicar abaixo você confirma o horário diretamente com a Camila no WhatsApp."
  }
};
