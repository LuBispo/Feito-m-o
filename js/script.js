/* Feito à Mão — comportamento da página */

const WHATSAPP = "5571983515827";

/** Abre o WhatsApp com uma mensagem pronta sobre o item escolhido. */
function pedir(item) {
  const msg = "Olá! Vi a página da Feito à Mão e tenho interesse em " + item + ". Pode me passar mais detalhes?";
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
}

/** Cria um elemento com classe e texto (textContent, sem HTML injetado). */
function criar(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto) el.textContent = texto;
  return el;
}

/** Monta o card de um produto (mesma estrutura visual de antes). */
function criarCard(produto) {
  const card = criar("div", "card");
  card.dataset.id = produto.id;

  card.appendChild(criar("div", "tape"));

  const ph = criar("div", "ph");
  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.alt;
  img.loading = "lazy";
  ph.appendChild(img);
  card.appendChild(ph);

  card.appendChild(criar("h3", null, produto.nome));
  if (produto.tag) card.appendChild(criar("span", "tag", produto.tag));
  card.appendChild(criar("p", null, produto.descricao));

  const botao = criar("button", "order", "Fazer pedido →");
  botao.type = "button";
  botao.addEventListener("click", () => pedir(produto.pedido));
  card.appendChild(botao);

  return card;
}

/** Preenche o grid de uma categoria (#grid-biscuit, #grid-feltro). */
function renderizarCategoria(categoria) {
  const grid = document.getElementById("grid-" + categoria);
  if (!grid) return;
  const fragmento = document.createDocumentFragment();
  PRODUTOS.filter(p => p.categoria === categoria)
          .forEach(p => fragmento.appendChild(criarCard(p)));
  grid.replaceChildren(fragmento);
}

/** Preenche o bloco do kit em destaque (#kit). */
function renderizarKit() {
  const kit = document.getElementById("kit");
  const produto = PRODUTOS.find(p => p.categoria === "festa");
  if (!kit || !produto) return;

  const ph = criar("div", "ph");
  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.alt;
  img.loading = "lazy";
  ph.appendChild(img);

  const info = document.createElement("div");
  info.appendChild(criar("div", "kicker", "Kit para festas"));
  info.appendChild(criar("h2", null, produto.nome));
  info.appendChild(criar("p", null, produto.descricao));

  const preco = criar("div", "price", produto.preco + " ");
  preco.appendChild(criar("span", null, "kit completo"));
  info.appendChild(preco);

  const botao = criar("button", "btn", "Encomendar este kit");
  botao.type = "button";
  botao.addEventListener("click", () => pedir(produto.pedido));
  info.appendChild(botao);

  kit.replaceChildren(ph, info);
}

/** Liga os botões estáticos que só chamam o WhatsApp (data-pedir="..."). */
function ligarBotoesEstaticos() {
  document.querySelectorAll("[data-pedir]").forEach(btn => {
    btn.addEventListener("click", () => pedir(btn.dataset.pedir));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarCategoria("biscuit");
  renderizarCategoria("feltro");
  renderizarKit();
  ligarBotoesEstaticos();
});
