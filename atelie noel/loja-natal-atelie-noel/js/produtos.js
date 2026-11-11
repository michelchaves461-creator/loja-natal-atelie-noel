const produtos = [

    {
        id: 1,
        nome: "Suéter Oversized Tricô Chalet Noël",
        categoria: "Streetwear Natalino",
        preco: 389.90,
        imagem: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
        descricao: "Tricô encorpado em lã merino com modelagem solta streetwear e padronagem jacquard de pinheiros alpinos.",
        destaque: true
    },
    {
        id: 2,
        nome: "Hoodie Streetwear Vermelho Tartan Carmim",
        categoria: "Streetwear Natalino",
        preco: 349.90,
        imagem: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
        descricao: "Moletom pesado 420g com capuz estruturado, bolso canguru e forro interno com estampa xadrez real.",
        destaque: true
    },
    {
        id: 3,
        nome: "Cardigan Boxy Fit Lã Escocesa Royal",
        categoria: "Streetwear Natalino",
        preco: 429.00,
        imagem: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
        descricao: "Modelagem ampla e botões de madeira esculpida. Trama tartan com fios tingidos artesanalmente.",
        destaque: false
    },
    {
        id: 4,
        nome: "Camiseta Heavyweight Pinheiro Vintage",
        categoria: "Streetwear Natalino",
        preco: 189.90,
        imagem: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
        descricao: "Algodão penteado 240g com silk em alta definição comemorativo da fundação do Ateliê Noël em 1988.",
        destaque: false
    },
    {
        id: 5,
        nome: "Jaqueta Puffer Bosque Nevado Térmica",
        categoria: "Streetwear Natalino",
        preco: 690.00,
        imagem: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
        descricao: "Enchimento térmico sustentável, gola alta e acabamento fosco verde-pinheiro resistente à água.",
        destaque: true
    },
    {
        id: 6,
        nome: "Calça Cargo Lã Batida Saint-Moritz",
        categoria: "Streetwear Natalino",
        preco: 450.00,
        imagem: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=600&q=80",
        descricao: "Bolsos utilitários selados, caimento reto moderno e forro térmico suave para noites frias de dezembro.",
        destaque: false
    },
    {
        id: 7,
        nome: "Gorro Beanie Ribbed Lã Alpina",
        categoria: "Streetwear Natalino",
        preco: 129.90,
        imagem: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80",
        descricao: "Malha canelada dupla com etiqueta frontal bordada e ajuste anatômico confortável.",
        destaque: false
    },
    {
        id: 8,
        nome: "Colete Streetwear Matelassê Borgonha",
        categoria: "Streetwear Natalino",
        preco: 360.00,
        imagem: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
        descricao: "Zíper duplo bidirecional em metal ouro velho e gola em veludo cotelê acolchoado.",
        destaque: false
    },
    {
        id: 9,
        nome: "Sobretudo Wool Trench Edição Noël 1988",
        categoria: "Streetwear Natalino",
        preco: 890.00,
        imagem: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=600&q=80",
        descricao: "Comprimento alongado com cinto ajustável e forro em cetim carmim com o brasão histórico da marca.",
        destaque: false
    },
    {
        id: 10,
        nome: "Moletom Gola Careca Estampa Noël Vintage",
        categoria: "Streetwear Natalino",
        preco: 299.90,
        imagem: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
        descricao: "Corte clássico unissex com punhos reforçados e estampa nostálgica aplicada em relevo.",
        destaque: false
    },

    {
        id: 11,
        nome: "Sneaker Retrô Noël 88 Couro & Camurça",
        categoria: "Sneakers & Calçados",
        preco: 549.90,
        imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        descricao: "Tênis com silhueta clássica dos anos 80, detalhes em camurça carmim e cadarço extra em tom creme.",
        destaque: true
    },
    {
        id: 12,
        nome: "Bota Chelsea Couro Café & Pinho",
        categoria: "Sneakers & Calçados",
        preco: 620.00,
        imagem: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80",
        descricao: "Bota artesanal montada em vira de couro nobre, elástico lateral verde-pinheiro e puxador bordado.",
        destaque: false
    },
    {
        id: 13,
        nome: "Mocassim Camurça Lã de Carneiro Chalet",
        categoria: "Sneakers & Calçados",
        preco: 390.00,
        imagem: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
        descricao: "Revestido internamente com lã natural e solado de borracha flexível para uso interno e externo.",
        destaque: false
    },
    {
        id: 14,
        nome: "Tênis Low Top Verde Pinheiro & Dourado",
        categoria: "Sneakers & Calçados",
        preco: 489.00,
        imagem: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80",
        descricao: "Cabedal em couro flor integral com ilhoses metálicos dourados e entressola costurada reforçada.",
        destaque: true
    },
    {
        id: 15,
        nome: "Coturno Trilha de Inverno Couro Impermeável",
        categoria: "Sneakers & Calçados",
        preco: 590.00,
        imagem: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80",
        descricao: "Solado tratorado antiderrapante com amortecimento duplo e travas profundas para qualquer terreno.",
        destaque: false
    },
    {
        id: 16,
        nome: "Loafer Penny Couro Nobre Vinho Ceia",
        categoria: "Sneakers & Calçados",
        preco: 469.90,
        imagem: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=600&q=80",
        descricao: "Sapato social sem cadarço com acabamento lustrado à mão e palmilha anatômica acolchoada.",
        destaque: false
    },
    {
        id: 17,
        nome: "Sneaker High Top Veludo Carmim Edição Especial",
        categoria: "Sneakers & Calçados",
        preco: 580.00,
        imagem: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
        descricao: "Cano alto acolchoado com textura aveludada, sola na cor baunilha e logo comemorativo estampado.",
        destaque: true
    },
    {
        id: 18,
        nome: "Pantufa Estruturada Lã Xadrez Highland",
        categoria: "Sneakers & Calçados",
        preco: 179.90,
        imagem: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
        descricao: "Base rígida silenciosa com espuma de memória de alta densidade e tecido flanelado escocês.",
        destaque: false
    },
    {
        id: 19,
        nome: "Bota Montaria Europeia Solado Tratorado",
        categoria: "Sneakers & Calçados",
        preco: 680.00,
        imagem: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
        descricao: "Cano longo com zíper traseiro, fivelas banhadas em latão envelhecido e impermeabilização total.",
        destaque: false
    },
    {
        id: 20,
        nome: "Mule Anatômica Feltro Neve & Cortiça",
        categoria: "Sneakers & Calçados",
        preco: 289.00,
        imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
        descricao: "Calçado ergonômico com palmilha de cortiça natural moldada e feltro de lã prensada cor neve.",
        destaque: false
    },

    {
        id: 21,
        nome: "Blazer Alfaiataria Veludo Alemão Carmim",
        categoria: "Alta Alfaiataria",
        preco: 790.00,
        imagem: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
        descricao: "Estruturação sob medida com ombros naturais, forro acetinado e botões em madrepérola escura.",
        destaque: true
    },
    {
        id: 22,
        nome: "Costume Completo Lã Fria Verde Floresta",
        categoria: "Alta Alfaiataria",
        preco: 1290.00,
        imagem: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
        descricao: "Terno Super 130 italiano com caimento impecável, lapela notched elegante e calça de corte alfaiate.",
        destaque: true
    },
    {
        id: 23,
        nome: "Camisa Social Linho Puro Alvo Ceia",
        categoria: "Alta Alfaiataria",
        preco: 340.00,
        imagem: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
        descricao: "Linho europeu respirável com colarinho semi-italiano e costuras francesas delicadas.",
        destaque: false
    },
    {
        id: 24,
        nome: "Colete Alfaiataria Abotoamento Duplo Ouro",
        categoria: "Alta Alfaiataria",
        preco: 380.00,
        imagem: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=600&q=80",
        descricao: "Ajuste traseiro em fivela de latão, decote em V clássico e seis botões metálicos dourados.",
        destaque: false
    },
    {
        id: 25,
        nome: "Calça Alfaiataria com Pregas Lã Mescla",
        categoria: "Alta Alfaiataria",
        preco: 420.00,
        imagem: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
        descricao: "Cintura alta com ajustadores laterais sem presilhas de cinto, proporcionando caimento limpo e fluido.",
        destaque: false
    },
    {
        id: 26,
        nome: "Smoking Ceia de Gala com Lapela Xale Cetim",
        categoria: "Alta Alfaiataria",
        preco: 1450.00,
        imagem: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=600&q=80",
        descricao: "O auge da elegância noturna: lã fria preta com lapela xale em seda pura e faixa abdominal inclusa.",
        destaque: false
    },
    {
        id: 27,
        nome: "Camisa Gola Padre Popeline Nobre Noël",
        categoria: "Alta Alfaiataria",
        preco: 290.00,
        imagem: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=600&q=80",
        descricao: "Modelagem contemporânea minimalista em algodão egípcio com vista coberta e botões ocultos.",
        destaque: false
    },
    {
        id: 28,
        nome: "Paletó Estruturado Xadrez Príncipe de Gales",
        categoria: "Alta Alfaiataria",
        preco: 850.00,
        imagem: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
        descricao: "Padrão xadrez com fio vermelho sutil, forro completo jacquard e fendas duplas posteriores.",
        destaque: false
    },
    {
        id: 29,
        nome: "Sobretudo Alfaiataria Cashmere Imperial",
        categoria: "Alta Alfaiataria",
        preco: 1680.00,
        imagem: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=600&q=80",
        descricao: "Tecido nobre de cashmere e lã batida com caimento pesado majestoso e bolsos embutidos.",
        destaque: true
    },
    {
        id: 30,
        nome: "Gravata Borboleta Seda Carmim Feita à Mão",
        categoria: "Alta Alfaiataria",
        preco: 160.00,
        imagem: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80",
        descricao: "Seda pura tecida em Como na Itália, com fecho ajustável e acompanhada de estojo de mogno.",
        destaque: false
    },

    {
        id: 31,
        nome: "Relógio Retrô Noël 1988 Caixa Latão Ouro",
        categoria: "Acessórios & Joias",
        preco: 790.00,
        imagem: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
        descricao: "Mostrador branco com numerais romanos, vidro safira antirreflexo e pulseira em couro croco marrom.",
        destaque: true
    },
    {
        id: 32,
        nome: "Abotoaduras Brasão Noël Ouro 18k",
        categoria: "Acessórios & Joias",
        preco: 280.00,
        imagem: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?auto=format&fit=crop&w=600&q=80",
        descricao: "Par de abotoaduras maciças fundidas com o brasão de pinheiro do Ateliê Noël e fecho basculante.",
        destaque: false
    },
    {
        id: 33,
        nome: "Cachecol Cashmere Puro Verde Pinho & Franjas",
        categoria: "Acessórios & Joias",
        preco: 240.00,
        imagem: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=600&q=80",
        descricao: "Comprimento generoso de 2 metros com franjas torcidas e toque extremamente sedoso e aconchegante.",
        destaque: false
    },
    {
        id: 34,
        nome: "Cinto Couro Legítimo Fivela Ouro Envelhecido",
        categoria: "Acessórios & Joias",
        preco: 210.00,
        imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        descricao: "Couro vegetal curtido com taninos naturais, bordas polidas à mão e fivela clássica maciça.",
        destaque: false
    },
    {
        id: 35,
        nome: "Anel Sinete Brasão Imperial Noël Prata 925",
        categoria: "Acessórios & Joias",
        preco: 350.00,
        imagem: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
        descricao: "Anel masculino com topo plano cinzelado com as iniciais clássicas da loja e acabamento escovado.",
        destaque: false
    },
    {
        id: 36,
        nome: "Pingente Estrela de Belém Ouro Amarelo",
        categoria: "Acessórios & Joias",
        preco: 490.00,
        imagem: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
        descricao: "Joia com estrela de 8 pontas em relevo facetado, acompanhada de corrente veneziana de 45cm.",
        destaque: true
    },
    {
        id: 37,
        nome: "Luvas Pelica Italiana Forro Cashmere",
        categoria: "Acessórios & Joias",
        preco: 280.00,
        imagem: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?auto=format&fit=crop&w=600&q=80",
        descricao: "Couro de cabretto ultra macio com costura invisível e forração 100% cashmere para isolamento térmico.",
        destaque: false
    },
    {
        id: 38,
        nome: "Prendedor de Gravata Folha de Azevinho Dourada",
        categoria: "Acessórios & Joias",
        preco: 150.00,
        imagem: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
        descricao: "Grampo metálico com trava jacaré de pressão suave e detalhe em miniatura de folha natalina.",
        destaque: false
    },
    {
        id: 39,
        nome: "Porta-Cartões Couro Croco Carmim Artesanal",
        categoria: "Acessórios & Joias",
        preco: 170.00,
        imagem: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
        descricao: "Compacto com quatro compartimentos para cartões, bolso central para cédulas e gravação dourada.",
        destaque: false
    },
    {
        id: 40,
        nome: "Óculos Armação Tartaruga & Hastes Douradas",
        categoria: "Acessórios & Joias",
        preco: 420.00,
        imagem: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        descricao: "Acetato italiano moldado à mão com charneiras reforçadas de 5 pontos e lentes antirreflexo.",
        destaque: false
    },

    {
        id: 41,
        nome: "Soldado Quebra-Nozes Real Madeira 38cm",
        categoria: "Colecionáveis & Decor",
        preco: 295.00,
        imagem: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=600&q=80",
        descricao: "Esculpido em madeira nobre e pintado à mão com capa de veludo carmim e detalhes em folha de ouro.",
        destaque: true
    },
    {
        id: 42,
        nome: "Caixa de Música Carrossel Vienense Mecânico",
        categoria: "Colecionáveis & Decor",
        preco: 360.00,
        imagem: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80",
        descricao: "Mecanismo suíço a corda que toca melodias clássicas natalinas enquanto os cavalos giram graciosamente.",
        destaque: true
    },
    {
        id: 43,
        nome: "Globo de Neve Cristal Vila Alpina Iluminado",
        categoria: "Colecionáveis & Decor",
        preco: 260.00,
        imagem: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=600&q=80",
        descricao: "Esfera de vidro com base cerâmica decorada e iluminação suave em LED com neve flutuante contínua.",
        destaque: false
    },
    {
        id: 44,
        nome: "Kit 12 Bolas de Vidro Soprado Ouro & Vinho",
        categoria: "Colecionáveis & Decor",
        preco: 220.00,
        imagem: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=80",
        descricao: "Ornatos artesanais produzidos por mestres vidreiros com caixas individuais almofadadas para coleção.",
        destaque: false
    },
    {
        id: 45,
        nome: "Guirlanda Natural Pinheiro, Laranja & Canela",
        categoria: "Colecionáveis & Decor",
        preco: 310.00,
        imagem: "https://images.unsplash.com/photo-1545608444-f045a6db6133?auto=format&fit=crop&w=600&q=80",
        descricao: "Aroma envolvente de canela e especiarias com galhos preservados e laço duplo em gorgurão carmim.",
        destaque: false
    },
    {
        id: 46,
        nome: "Trem Expresso Polar Ferro Fundido Pintado",
        categoria: "Colecionáveis & Decor",
        preco: 480.00,
        imagem: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=600&q=80",
        descricao: "Locomotiva decorativa de colecionador ideal para circundar a base da árvore de Natal da família.",
        destaque: false
    },
    {
        id: 47,
        nome: "Ponteira Estrela de Belém Latão Escovado",
        categoria: "Colecionáveis & Decor",
        preco: 180.00,
        imagem: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=600&q=80",
        descricao: "Estrela tridimensional para o topo da árvore com encaixe em espiral reforçado e brilho caloroso.",
        destaque: false
    },
    {
        id: 48,
        nome: "Candelabro Triplo Bronze com Velas Espirais",
        categoria: "Colecionáveis & Decor",
        preco: 240.00,
        imagem: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=600&q=80",
        descricao: "Peça de centro de mesa fundida em bronze polido, acompanhada de 3 velas de cera de abelha carmim.",
        destaque: false
    },
    {
        id: 49,
        nome: "Vila Natalina em Cerâmica com Luzes Quentes LED",
        categoria: "Colecionáveis & Decor",
        preco: 390.00,
        imagem: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=600&q=80",
        descricao: "Cenário com quatro chalés nevados com pequenas janelas translúcidas que criam aconchego noturno.",
        destaque: false
    },
    {
        id: 50,
        nome: "Vitrola Retrô Nogueira Bluetooth + Vinil Noël",
        categoria: "Colecionáveis & Decor",
        preco: 890.00,
        imagem: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
        descricao: "Toca-discos acústico em madeira maciça com agulha japonesa e vinil comemorativo de jazz natalino.",
        destaque: true
    }
];

window.produtos = produtos;
