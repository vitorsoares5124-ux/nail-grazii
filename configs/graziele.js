// ═══════════════════════════════════════════════════════════════════════════════
// ⚙️ CONFIGURAÇÃO COMPLETA DO SITE — NAIL DESIGNER
// ═══════════════════════════════════════════════════════════════════════════════
// DICA: Você só precisa alterar as informações abaixo para deixar o site pronto 
// para qualquer cliente, sem precisar mexer em nenhuma linha do código HTML!

const SITE_CONFIG = {

  // ─── 1. DADOS DA PROFISSIONAL ───
  dados: {
    nome: "Graziele",
    subtitulo: "Nail Designer Especialista",
    whatsapp: "5515997949066", // DDI + DDD + Número (somente números)
    instagram: "nail_grazii",   // apenas o @ sem o caractere arroba
    cidade: "Sorocaba - SP",
    endereco: "Atendimento com hora marcada",
    fotoPerfil: "assets/images/graziele_perfil.jpg",
    
    // Textos de apresentação
    tituloHero: "Unhas perfeitas com o <em>cuidado</em> que você merece.",
    descricaoHero: "Faço alongamento em fibra, gel e decorações com acabamento fininho, natural e que dura semanas sem quebrar ou descolar."
  },

  // ─── 2. PALETA DE CORES PERSONALIZADA (OPCIONAL) ───
  // Se quiser mudar as cores para outra cliente (ex: Preto & Dourado, Rosa Bebê, etc.),
  // basta trocar os códigos hexadecimais abaixo:
  cores: {
    primaria: "#74467E",   // Cor dos botões principais e destaques (Mauve / Lilás escuro)
    secundaria: "#D98AA7", // Cor secundária suave (Rosé)
    destaque: "#E8A9BF",   // Cor de tags e detalhes brilhantes (Blush)
    fundo: "#FCFAFB",      // Cor de fundo do site (Branco Porcelana)
    texto: "#211324"       // Cor do texto principal
  },

  // ─── 3. MENU DE SERVIÇOS & PREÇOS ───
  // Você pode adicionar, remover ou editar qualquer serviço:
  servicos: [
    {
      nome: "Fibra de Vidro",
      categoria: "Alongamento",
      descricao: "O alongamento queridinho! Fica super leve, muito resistente e com aparência idêntica à unha natural.",
      tempo: "Tempo médio: 2h30",
      preco: "", // Deixe em branco "" ou coloque o valor ex: "R$ 160"
      destaque: true, // true para destacar com borda especial
      badge: "Mais Pedido"
    },
    {
      nome: "Unhas em Gel",
      categoria: "Alongamento",
      descricao: "Estrutura firme, brilho impecável que não sai e formato perfeito para o comprimento que você preferir.",
      tempo: "Tempo médio: 2h00",
      preco: "",
      destaque: false,
      badge: ""
    },
    {
      nome: "Nail Art & Efeitos 3D",
      categoria: "Decoração",
      descricao: "Unhas personalizadas com flores em relevo, joias, glitter encapsulado, degradê ou o modelo que você trouxer de foto.",
      tempo: "Personalizado",
      preco: "",
      destaque: false,
      badge: ""
    },
    {
      nome: "Baby Boomer",
      categoria: "Clássico",
      descricao: "A famosa francesinha esfumada! Um degradê delicado do rosa para o branco que combina com qualquer ocasião.",
      tempo: "Tempo médio: 2h00",
      preco: "",
      destaque: false,
      badge: ""
    },
    {
      nome: "Esmaltação em Gel",
      categoria: "Dia a Dia",
      descricao: "Seca na hora na cabine de luz! Sai do ateliê sem medo de borrar e dura até 20 dias com brilho de unha recém-feita.",
      tempo: "Tempo médio: 1h15",
      preco: "",
      destaque: false,
      badge: ""
    },
    {
      nome: "Manutenção",
      categoria: "Cuidados",
      descricao: "Essencial para quem já tem alongamento. Repõe o crescimento da unha, ajusta o formato e garante unhas sempre lindas e seguras.",
      tempo: "A cada 20 a 25 dias",
      preco: "",
      destaque: false,
      badge: ""
    }
  ],

  // ─── 4. FOTOS DO PORTFÓLIO ───
  // Caminho das fotos da cliente na pasta assets/images/ ou links diretos:
  portfolio: [
    {
      imagem: "assets/images/portfolio_7.jpg",
      tag: "Decoração 3D",
      titulo: "Stiletto Lilás com Laço"
    },
    {
      imagem: "assets/images/portfolio_2.jpg",
      tag: "Linha Luxo",
      titulo: "Dourado com Pérolas"
    },
    {
      imagem: "assets/images/portfolio_4.jpg",
      tag: "Baby Boomer",
      titulo: "Degradê com Flor 3D"
    },
    {
      imagem: "assets/images/portfolio_5.jpg",
      tag: "Delicada",
      titulo: "Flores com Traço Dourado"
    },
    {
      imagem: "assets/images/portfolio_6.jpg",
      tag: "Brilho",
      titulo: "Glitter Rosê Degradê"
    },
    {
      imagem: "assets/images/portfolio_1.jpg",
      tag: "Efeito Especial",
      titulo: "Brilho Perolado"
    },
    {
      imagem: "assets/images/portfolio_3.jpg",
      tag: "Clássico",
      titulo: "Nude Rosê com Muito Brilho"
    }
  ],

  // ─── 5. DEPOIMENTOS DE CLIENTES ───
  depoimentos: [
    {
      nome: "Ana Paula M.",
      detalhe: "Cliente há 2 anos",
      inicial: "A",
      texto: "O trabalho da Graziele é maravilhoso! Meu alongamento durou quase um mês inteirinho sem descolar e a cutícula fica limpinha sem machucar. Recomendo de olhos fechados!"
    },
    {
      nome: "Juliana Camargo",
      detalhe: "Alongamento em Fibra",
      inicial: "J",
      texto: "Fiz as flores 3D para um casamento e todo mundo perguntou onde eu tinha feito de tão perfeitas! Ela tem mãos de fada e é super atenciosa."
    },
    {
      nome: "Mariana Ribeiro",
      detalhe: "Manutenção Frequente",
      inicial: "M",
      texto: "Espaço super limpinho e cheiroso, pontualidade de verdade e materiais de qualidade. Minhas unhas nunca ficaram tão bonitas!"
    }
  ],

  // ─── 6. DÚVIDAS FREQUENTES (FAQ) ───
  faq: [
    {
      pergunta: "Quanto tempo dura o alongamento?",
      resposta: "As unhas duram por tempo indeterminado! O ideal é fazer a manutenção a cada 20 a 25 dias para acompanhar o crescimento da sua unha natural e deixá-la sempre firme."
    },
    {
      pergunta: "Fazer alongamento estraga a unha de baixo?",
      resposta: "Não! Quando o procedimento é feito com produtos de boa qualidade e a remoção é feita com a profissional (sem arrancar com os dentes), sua unha natural continua saudável."
    },
    {
      pergunta: "Posso levar foto de modelo que vi na internet?",
      resposta: "Com certeza! Você pode trazer a foto da decoração ou cor que quiser no dia, e nós adaptamos para o tamanho e formato das suas unhas."
    },
    {
      pergunta: "Como funciona o agendamento pelo site?",
      resposta: "Você escolhe o serviço, o dia e o horário aqui no site. Depois, clica no botão e já vai para o WhatsApp com tudo preenchido para a confirmação rápida!"
    }
  ],

  // ─── 7. REGRAS DE AGENDAMENTO & WHATSAPP ───
  agendamento: {
    horariosPadrao: ['08:30', '09:45', '11:00', '13:30', '14:45', '16:00', '17:15', '18:30'],
    atendeDomingo: false, // se true, abre agendamento aos domingos
    mensagemAviso: "Ao clicar abaixo, você vai direto para o WhatsApp com a mensagem prontinha só para enviar! 💕"
  }
};
