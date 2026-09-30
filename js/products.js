/**
 * Catálogo de produtos — Feito à Mão
 *
 * Para adicionar um produto: copie um bloco, mude os campos e salve a imagem em /images.
 *
 * categoria: "biscuit" | "feltro" | "festa"
 * pedido:    trecho usado na mensagem do WhatsApp ("...tenho interesse em <pedido>")
 * tag:       (opcional) selo pequeno no card, ex.: "sob encomenda"
 * preco:     (opcional) texto do preço, exibido apenas no kit em destaque
 */
const PRODUTOS = [
  {
    id: "porta-canetas-tronco",
    categoria: "biscuit",
    nome: "Porta-canetas Tronco Encantado",
    descricao: "Tronco de madeira com ursinhos, passarinho e florzinhas em biscuit. Uma peça só, pronta pra alegrar a mesa.",
    imagem: "images/p1.jpg",
    alt: "Porta-canetas em biscuit com ursinhos no tronco",
    pedido: "o Porta-canetas Tronco Encantado"
  },
  {
    id: "caneta-coelhinha",
    categoria: "biscuit",
    nome: "Caneta Coelhinha",
    descricao: "Topper de coelhinha em biscuit sobre caneta esferográfica. Fofura garantida pro estojo.",
    imagem: "images/p2.jpg",
    alt: "Caneta personalizada coelhinha em biscuit",
    pedido: "a Caneta Coelhinha"
  },
  {
    id: "canetas-professora",
    categoria: "biscuit",
    nome: "Canetas Professora",
    descricao: "Dupla com jaleco, maçã e fita métrica em biscuit. Presente certeiro pra quem ensina.",
    imagem: "images/p4.jpg",
    alt: "Canetas personalizadas tema professora em biscuit",
    pedido: "as Canetas Professora"
  },
  {
    id: "caneta-saude",
    categoria: "biscuit",
    nome: "Caneta da Área da Saúde",
    descricao: "Jaleco e estetoscópio em biscuit, pra homenagear quem cuida das pessoas.",
    imagem: "images/p6.jpg",
    alt: "Caneta personalizada tema enfermeira em biscuit",
    pedido: "a Caneta da Área da Saúde"
  },
  {
    id: "retrato-biscuit",
    categoria: "biscuit",
    nome: "Retrato em Biscuit",
    tag: "sob encomenda",
    descricao: "Envie uma foto e ganhe bonequinhos com o mesmo rosto, roupa e penteado. Perfeito pra guardar um momento.",
    imagem: "images/p3.jpg",
    alt: "Reprodução de retrato em biscuit de duas irmãs",
    pedido: "um Retrato Personalizado em Biscuit"
  },
  {
    id: "boneca-jardim-rosa",
    categoria: "feltro",
    nome: "Boneca de Feltro — Jardim Rosa",
    descricao: "Cabelo cacheado, avental de florzinhas e bolsinha combinando. Todinha costurada à mão.",
    imagem: "images/p5.jpg",
    alt: "Boneca de feltro com vestido rosa florido",
    pedido: "a Boneca de Feltro Jardim Rosa"
  },
  {
    id: "boneca-lacos-margarida",
    categoria: "feltro",
    nome: "Boneca de Feltro — Laços de Margarida",
    descricao: "Maria-chiquinhas, laços florais e bolsinha de margarida. Uma companheira cheia de charme.",
    imagem: "images/p7.jpg",
    alt: "Boneca de feltro com laços florais",
    pedido: "a Boneca de Feltro Laços de Margarida"
  },
  {
    id: "trio-dinossauros",
    categoria: "feltro",
    nome: "Trio de Dinossauros",
    descricao: "Kit com três dinossauros de feltro — azul, verde e amarelo — fofos e macios.",
    imagem: "images/p10.jpg",
    alt: "Trio de dinossauros de feltro",
    pedido: "o Trio de Dinossauros de Feltro"
  },
  {
    id: "kit-so-um-bolinho",
    categoria: "festa",
    nome: "Kit Só um Bolinho",
    descricao: "10 lembrancinhas de sereia em biscuit + 1 vela personalizada com o nome do aniversariante. Perfeito pra tornar o dia ainda mais especial.",
    imagem: "images/kit_festa.jpg",
    alt: "Kit Só um Bolinho: lembrancinhas de sereia em biscuit e vela personalizada",
    preco: "R$ 150,00",
    pedido: "o Kit Só um Bolinho (tema sereia)"
  },
  {
    "id": "guirlanda-ursinhos-maternidade",
    "categoria": "feltro",
    "nome": "Guirlanda Ursinhos Maternidade",
    "descricao": "Guirlanda delicada em tons de rosa e marrom com dois ursinhos em feltro, laço e flores. Perfeita para decorar a porta da maternidade e o quartinho do bebê.",
    "imagem": "images/produto12_guirlanda.jpg",
    "alt": "Guirlanda de maternidade em feltro com dois ursinhos e flores",
    "pedido": "a Guirlanda Ursinhos Maternidade"
  },
  {
    "id": "guirlanda-ovelhinha-nuvem",
    "categoria": "feltro",
    "nome": "Guirlanda Ovelhinha Nuvem de Sonhos",
    "descricao": "Guirlanda infantil personalizada em azul e amarelo, com uma fofa ovelhinha central sobre nuvem. Ideal para recepcionar seu pequeno com todo o carinho.",
    "imagem": "images/produto12_guirlanda_Asafe.jpg",
    "alt": "Guirlanda infantil em feltro com ovelhinha na nuvem",
    "pedido": "a Guirlanda Ovelhinha Nuvem de Sonhos"
  },
  {
    "id": "topo-bolo-jardim-encantado-1",
    "categoria": "biscuit",
    "nome": "Topo de Bolo Jardim Encantado Nº 1",
    "descricao": "Topo de bolo em biscuit com menininha segura coelhinho, passarinho azul e velinha número 1 sobre base florida. O toque mágico que o bolo de 1 ano merece!",
    "imagem": "images/produto13_topo.jpg",
    "alt": "Topo de bolo em biscuit para 1 ano com menina, coelho e passarinho",
    "pedido": "o Topo de Bolo Jardim Encantado Nº 1"
  },
  {
    "id": "topo-bolo-profissional-medico",
    "categoria": "biscuit",
    "nome": "Topo de Bolo Profissional Médico",
    "descricao": "Estatueta humanizada em biscuit representada com jaleco, instrumentos e detalhes personalizados da profissão. Excelente escolha para formatura ou presente especial.",
    "imagem": "images/produto14_medico.jpg",
    "alt": "Topo de bolo humanizado em biscuit de médico com jaleco",
    "pedido": "o Topo de Bolo Profissional Médico"
  },
  {
    "id": "topo-bolo-familia-biscuit",
    "categoria": "biscuit",
    "nome": "Topo de Bolo Família em Biscuit",
    "descricao": "Velas e esculturas personalizadas representativas de toda a família com riqueza de detalhes e roupas estilizadas. Celebre momentos únicos em família!",
    "imagem": "images/produto15_familia_pina.jpg",
    "alt": "Topo de bolo personalizado em biscuit de uma família",
    "pedido": "o Topo de Bolo Família em Biscuit"
  },
  {
    "id": "pelucia-cachorrinho-amigo",
    "categoria": "feltro",
    "nome": "Pelúcia / Almofada Cachorrinho Amigo",
    "descricao": "Bichinho fofinho feito à mão em feltro com detalhes coloridos em macacão xadrez. Um companheiro artesanal encantador para brincar ou decorar.",
    "imagem": "images/produto16_feltro_cachoro.jpg",
    "alt": "Bichinho de feltro fofinho no formato de um cachorro com macacão",
    "pedido": "a Pelúcia / Almofada Cachorrinho Amigo"
  },
  {
    "id": "pelucia-vaquinha-mumu",
    "categoria": "feltro",
    "nome": "Pelúcia / Almofada Vaquinha Mumu",
    "descricao": "Mimosa vaquinha em feltro artesanal com laçinhos rosa e manchas clássicas. Perfeita para compor a decoração de festas no tema Fazendinha ou quarto infantil.",
    "imagem": "images/produto17_feltro_vaquinha.jpg",
    "alt": "Bichinho de feltro fofinho no formato de uma vaquinha com laços",
    "pedido": "a Pelúcia / Almofada Vaquinha Mumu"
  },
  {
    "id": "pelucia-porquinho-charmoso",
    "categoria": "feltro",
    "nome": "Pelúcia / Almofada Porquinho Charmoso",
    "descricao": "Porquinho super fofo confeccionado em feltro com roupinha xadrez e chapéu de palha. Adiciona diversão e ternura a qualquer ambiente.",
    "imagem": "images/produto18_feltro_porquinho.jpg",
    "alt": "Bichinho de feltro fofinho no formato de um porquinho com chapéu e roupa",
    "pedido": "a Pelúcia / Almofada Porquinho Charmoso"
  },
  {
    "id": "pelucia-pintinho-amarelinho",
    "categoria": "feltro",
    "nome": "Pelúcia / Almofada Pintinho Amarelinho",
    "descricao": "Adorável pintinho em feltro com gravata borboleta e chapéu de palha. Ideal para compor o kit da Fazendinha com muita graciosidade.",
    "imagem": "images/produto19_feltro_pintinho.jpg",
    "alt": "Bichinho de feltro fofinho no formato de um pintinho com gravata e chapéu",
    "pedido": "a Pelúcia / Almofada Pintinho Amarelinho"
  },
  {
    "id": "pelucia-galinha-carijo",
    "categoria": "feltro",
    "nome": "Pelúcia / Almofada Galinha Carijó",
    "descricao": "Galinha artesanal fofinha com detalhes coloridos, laço e crista vermelha em feltro. Peça cheia de personalidade para quartos infantis e festas temáticas.",
    "imagem": "images/produto20_feltro_galinha.jpg",
    "alt": "Bichinho de feltro fofinho no formato de uma galinha com laço e crista",
    "pedido": "a Pelúcia / Almofada Galinha Carijó"
  }
];
