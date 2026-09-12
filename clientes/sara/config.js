// ═══════════════════════════════════════════════════════════════════════════════
// ⚙️ CONFIGURAÇÃO DO SITE — SARAH (SMOOTH ART NAILS)
// ═══════════════════════════════════════════════════════════════════════════════

const SITE_CONFIG = {
  "dados": {
    "nome": "Sarah",
    "subtitulo": "Smooth Art Nails",
    "whatsapp": "5511910522710",
    "instagram": "smoothart.nailss",
    "cidade": "Sorocaba - SP",
    "endereco": "Atendimento com hora marcada",
    "fotoPerfil": "assets/images/perfil.jpg",
    "tituloHero": "Unhas perfeitas com o <em>cuidado</em> que você merece.",
    "descricaoHero": "Faço alongamento em fibra, gel e decorações com acabamento fininho, natural e que dura semanas sem quebrar ou descolar."
  },
  "cores": {
    "primaria": "#74467e",
    "secundaria": "#d98aa7",
    "destaque": "#e8a9bf",
    "fundo": "#fcfafb",
    "texto": "#211324",
    "botaoBg": "#74467e",
    "botaoTexto": "#ffffff",
    "botaoHover": "#74467e",
    "tituloCor": "#211324",
    "tituloDestaque": "#74467e"
  },
  "servicos": [
    {
      "nome": "Fibra de Vidro",
      "categoria": "Alongamento",
      "descricao": "O alongamento queridinho! Fica super leve, muito resistente e com aparência idêntica à unha natural.",
      "tempo": "Tempo médio: 2h30",
      "preco": "",
      "destaque": true,
      "badge": "Mais Pedido"
    },
    {
      "nome": "Unhas em Gel",
      "categoria": "Alongamento",
      "descricao": "Estrutura firme, brilho impecável que não sai e formato perfeito para o comprimento que você preferir.",
      "tempo": "Tempo médio: 2h00",
      "preco": "",
      "destaque": false,
      "badge": ""
    },
    {
      "nome": "Nail Art & Efeitos 3D",
      "categoria": "Decoração",
      "descricao": "Unhas personalizadas com flores em relevo, joias, glitter encapsulado, degradê ou o modelo que você trouxer de foto.",
      "tempo": "Personalizado",
      "preco": "",
      "destaque": false,
      "badge": ""
    },
    {
      "nome": "Baby Boomer",
      "categoria": "Clássico",
      "descricao": "A famosa francesinha esfumada! Um degradê delicado do rosa para o branco que combina com qualquer ocasião.",
      "tempo": "Tempo médio: 2h00",
      "preco": "",
      "destaque": false,
      "badge": ""
    },
    {
      "nome": "Esmaltação em Gel",
      "categoria": "Dia a Dia",
      "descricao": "Seca na hora na cabine de luz! Sai do ateliê sem medo de borrar e dura até 20 dias com brilho de unha recém-feita.",
      "tempo": "Tempo médio: 1h15",
      "preco": "",
      "destaque": false,
      "badge": ""
    },
    {
      "nome": "Manutenção",
      "categoria": "Cuidados",
      "descricao": "Essencial para quem já tem alongamento. Repõe o crescimento da unha, ajusta o formato e garante unhas sempre lindas e seguras.",
      "tempo": "A cada 20 a 25 dias",
      "preco": "",
      "destaque": false,
      "badge": ""
    }
  ],
  "portfolio": [
    {
      "imagem": "assets/images/SnapInsta.to_731059000_17896713537501436_2194523103316702118_n.jpg",
      "tag": "Decoração 3D",
      "titulo": "Stiletto com Laço e Arte 3D"
    },
    {
      "imagem": "assets/images/SnapInsta.to_731078588_17896713501501436_5931661824920518520_n.jpg",
      "tag": "Linha Luxo",
      "titulo": "Unhas Ouro e Pedrarias"
    },
    {
      "imagem": "assets/images/SnapInsta.to_753550885_17900074779501436_5734104526175767311_n.jpg",
      "tag": "Baby Boomer",
      "titulo": "Degradê Floral com Relevo"
    },
    {
      "imagem": "assets/images/SnapInsta.to_790226237_17906826990501436_432835186658751485_n.jpg",
      "tag": "Delicada",
      "titulo": "Flores com Traço Fino"
    },
    {
      "imagem": "assets/images/SnapInsta.to_790792215_17906827062501436_1332877536795137665_n.jpg",
      "tag": "Brilho",
      "titulo": "Glitter Rosê Elegante"
    },
    {
      "imagem": "assets/images/SnapInsta.to_791996731_17906826951501436_591658829189093930_n.jpg",
      "tag": "Efeito Especial",
      "titulo": "Brilho Perolado e Francês"
    },
    {
      "imagem": "assets/images/SnapInsta.to_793902287_17906826999501436_7386094298544175212_n.jpg",
      "tag": "Clássico",
      "titulo": "Nude e Arte Delicada"
    }
  ],
  "depoimentos": [
    {
      "nome": "Ana Paula M.",
      "detalhe": "Cliente há 2 anos",
      "inicial": "A",
      "texto": "O trabalho da Sarah é maravilhoso! Meu alongamento durou quase um mês inteirinho sem descolar e a cutícula fica limpinha sem machucar. Recomendo de olhos fechados!"
    },
    {
      "nome": "Juliana Camargo",
      "detalhe": "Alongamento em Fibra",
      "inicial": "J",
      "texto": "Fiz as decorações para um casamento e todo mundo perguntou onde eu tinha feito de tão perfeitas! Ela tem mãos de fada e é super atenciosa."
    },
    {
      "nome": "Mariana Ribeiro",
      "detalhe": "Manutenção Frequente",
      "inicial": "M",
      "texto": "Espaço super limpinho e cheiroso, pontualidade de verdade e materiais de qualidade. Minhas unhas nunca ficaram tão bonitas!"
    }
  ],
  "faq": [
    {
      "pergunta": "Quanto tempo dura o alongamento?",
      "resposta": "As unhas duram por tempo indeterminado! O ideal é fazer a manutenção a cada 20 a 25 dias para acompanhar o crescimento da sua unha natural e deixá-la sempre firme."
    },
    {
      "pergunta": "Fazer alongamento estraga a unha de baixo?",
      "resposta": "Não! Quando o procedimento é feito com produtos de boa qualidade e a remoção é feita com a profissional (sem arrancar com os dentes), sua unha natural continua saudável."
    },
    {
      "pergunta": "Como faço para agendar o meu horário?",
      "resposta": "É só escolher o serviço e o melhor horário aqui pelo site. Ao confirmar, seu agendamento é enviado diretamente pelo WhatsApp."
    },
    {
      "pergunta": "Qual a diferença entre Fibra de Vidro e Gel?",
      "resposta": "A fibra de vidro usa filamentos ultrafinos que se moldam à sua unha com máxima resistência. O gel confere estrutura firme e acabamento impecável."
    }
  ],
  "agendamento": {
    "horariosPadrao": [
      "08:30",
      "09:45",
      "11:00",
      "13:30",
      "14:45",
      "16:00",
      "17:15",
      "18:30"
    ],
    "atendeDomingo": false,
    "mensagemAviso": "Ao clicar abaixo você confirma o horário diretamente no WhatsApp."
  }
};
