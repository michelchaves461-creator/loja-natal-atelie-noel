let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function criarCard(produto) {
    return `
    <article class="card">
        <div class="card-topo-img" onclick="abrirModalProduto(${produto.id})">
            <img id="img-prod-${produto.id}" src="${produto.imagem}" alt="${produto.nome} - Coleção Ateliê Noël" loading="lazy">
            <span class="categoria-etiqueta">${produto.categoria}</span>
        </div>
        <div class="card-corpo">
            <div class="card-cabecalho-meta">
                <span class="card-id-rotulo">Item #${produto.id}</span>
                <div class="amostras-cores" title="Trocar tom da peça">
                    <span class="ponto-cor" style="background:#B3202A;" onclick="trocarCorCard(${produto.id}, 'none')"></span>
                    <span class="ponto-cor" style="background:#1F5D3A;" onclick="trocarCorCard(${produto.id}, 'hue-rotate(110deg)')"></span>
                    <span class="ponto-cor" style="background:#C9A227;" onclick="trocarCorCard(${produto.id}, 'sepia(0.5)')"></span>
                </div>
            </div>
            <h3 class="card-titulo" onclick="abrirModalProduto(${produto.id})">${produto.nome}</h3>
            <p class="card-descricao">${produto.descricao}</p>
        </div>
        <div class="card-rodape">
            <strong class="card-preco">${formatarPreco(produto.preco)}</strong>
            <div class="card-botoes">
                <button class="btn-olho" onclick="abrirModalProduto(${produto.id})" aria-label="Ver detalhes de ${produto.nome}"><i class="fa-regular fa-eye"></i></button>
                <button class="btn-comprar" data-id="${produto.id}">Adicionar</button>
            </div>
        </div>
    </article>`;
}

function mostrarProdutos(lista) {
    const area = document.getElementById("lista-produtos");
    if (!area) return;

    if (!lista || lista.length === 0) {
        area.innerHTML = `
        <div style="grid-column: 1 / -1; background: var(--neve); border: 1px solid var(--cinza-borda); border-radius: 16px; padding: 2.5rem 1rem; text-align: center;">
            <i class="fa-solid fa-sleigh" style="font-size: 2.2rem; color: var(--vermelho); margin-bottom: 0.8rem;"></i>
            <h3 style="font-family: var(--fonte-titulo); font-size: 1.3rem;">Nenhum produto encontrado</h3>
            <p style="color: var(--texto-suave); font-size: 0.85rem; margin-top: 0.4rem;">Tente buscar por outro termo ou selecione todas as categorias.</p>
        </div>`;
        return;
    }

    area.innerHTML = lista.map(criarCard).join("");
}

function renderizarDestaquesHome() {
    const area = document.getElementById("grade-destaques");
    if (!area) return;
    const lista = window.produtos || (typeof produtos !== "undefined" ? produtos : []);
    const destaques = lista.filter(p => p.destaque).slice(0, 4);
    area.innerHTML = destaques.map(criarCard).join("");
}

function trocarCorCard(id, filtro) {
    const img = document.getElementById(`img-prod-${id}`);
    if (img) img.style.filter = filtro;
}

function filtrar() {
    const campoBusca = document.getElementById("busca");
    const seletorCategoria = document.getElementById("categoria");
    const seletorOrdenacao = document.getElementById("ordenacao");
    const contador = document.getElementById("contador");

    const texto = campoBusca ? campoBusca.value.toLowerCase().trim() : "";
    const categoria = seletorCategoria ? seletorCategoria.value : "todas";
    const ordem = seletorOrdenacao ? seletorOrdenacao.value : "padrao";

    const lista = window.produtos || (typeof produtos !== "undefined" ? produtos : []);

    let resultado = lista.filter(p => {
        const combinaTexto = p.nome.toLowerCase().includes(texto) || p.descricao.toLowerCase().includes(texto);
        const combinaCat = categoria === "todas" || p.categoria === categoria;
        return combinaTexto && combinaCat;
    });

    if (ordem === "menor-preco") {
        resultado.sort((a, b) => a.preco - b.preco);
    } else if (ordem === "maior-preco") {
        resultado.sort((a, b) => b.preco - a.preco);
    } else if (ordem === "nome-az") {
        resultado.sort((a, b) => a.nome.localeCompare(b.nome));
    } else {
        resultado.sort((a, b) => a.id - b.id);
    }

    mostrarProdutos(resultado);
    if (contador) {
        contador.textContent = `Mostrando ${resultado.length} de ${lista.length} produtos`;
    }
}

function limparFiltrosCatalogo() {
    const campoBusca = document.getElementById("busca");
    const seletorCategoria = document.getElementById("categoria");
    const seletorOrdenacao = document.getElementById("ordenacao");

    if (campoBusca) campoBusca.value = "";
    if (seletorCategoria) seletorCategoria.value = "todas";
    if (seletorOrdenacao) seletorOrdenacao.value = "padrao";
    filtrar();
}

function filtrarPorCategoriaRapida(cat) {
    const seletorCategoria = document.getElementById("categoria");
    if (seletorCategoria) {
        seletorCategoria.value = cat;
        filtrar();
    }
}

let slideAtual = 0;
let temporizadorSlide = null;

function mostrarSlide(indice) {
    const slides = document.querySelectorAll(".slide");
    if (!slides || slides.length === 0) return;

    slides.forEach(s => s.classList.remove("ativo"));
    slideAtual = (indice + slides.length) % slides.length;
    slides[slideAtual].classList.add("ativo");

    const indArea = document.getElementById("indicadores-slideshow");
    if (indArea) {
        indArea.innerHTML = Array.from(slides).map((_, i) => `
            <button class="bolinha-slide ${i === slideAtual ? 'ativa' : ''}" onclick="mostrarSlide(${i})" aria-label="Slide ${i + 1}"></button>
        `).join("");
    }
}

function inicializarSlideshow() {
    const slides = document.querySelectorAll(".slide");
    if (!slides || slides.length === 0) return;

    const btnProx = document.getElementById("proximo");
    const btnAnt = document.getElementById("anterior");

    if (btnProx) btnProx.addEventListener("click", () => mostrarSlide(slideAtual + 1));
    if (btnAnt) btnAnt.addEventListener("click", () => mostrarSlide(slideAtual - 1));

    mostrarSlide(0);

    if (temporizadorSlide) clearInterval(temporizadorSlide);
    temporizadorSlide = setInterval(() => mostrarSlide(slideAtual + 1), 5000);
}

function inicializarParallaxETopo() {
    const camadasParallax = document.querySelectorAll("[data-velocidade]");
    const botaoTopo = document.getElementById("topo");

    window.addEventListener("scroll", () => {
        const rolagem = window.scrollY;

        camadasParallax.forEach(camada => {
            const vel = parseFloat(camada.dataset.velocidade || 0);
            camada.style.transform = `translateY(${rolagem * vel}px)`;
        });

        if (botaoTopo) {
            botaoTopo.style.display = rolagem > 400 ? "block" : "none";
        }
    });

    if (botaoTopo) {
        botaoTopo.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

function alternarMusicaNatal() {
    const musica = document.getElementById("audio-natal-animado");
    const btnTexto = document.getElementById("texto-musica");
    const icone = document.getElementById("icone-musica");
    if (!musica) return;

    musica.volume = 0.3; 

    if (musica.paused) {
        musica.play().then(() => {
            if (btnTexto) btnTexto.textContent = "Pausar música";
            if (icone) icone.className = "fa-solid fa-pause";
        }).catch(() => {});
    } else {
        musica.pause();
        if (btnTexto) btnTexto.textContent = "Tocar música";
        if (icone) icone.className = "fa-solid fa-music";
    }
}

function tocarSino() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        
        [1046.5, 1318.5, 1567.98].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

            gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.4);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + idx * 0.08);
            osc.stop(ctx.currentTime + idx * 0.08 + 0.42);
        });
    } catch (e) {}
}

function adicionarAoCarrinho(id) {
    const lista = window.produtos || (typeof produtos !== "undefined" ? produtos : []);
    const produto = lista.find(p => p.id === id);
    if (!produto) return;

    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
    tocarSino();
}

function removerDoCarrinho(indice) {
    carrinho.splice(indice, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const total = carrinho.reduce((soma, p) => soma + p.preco, 0);
    const qtdEl = document.getElementById("qtd-carrinho");
    const totalEl = document.getElementById("total-carrinho");
    const subtotalEl = document.getElementById("subtotal-carrinho");
    const listaEl = document.getElementById("lista-carrinho");

    if (qtdEl) qtdEl.textContent = carrinho.length;
    if (totalEl) totalEl.textContent = formatarPreco(total);
    if (subtotalEl) subtotalEl.textContent = formatarPreco(total);

    if (listaEl) {
        if (carrinho.length === 0) {
            listaEl.innerHTML = `<p style="text-align: center; color: var(--texto-suave); font-size: 0.85rem; padding: 2rem 0;">Sua sacola de Natal está vazia.</p>`;
        } else {
            listaEl.innerHTML = carrinho.map((p, idx) => `
            <div style="display: flex; align-items: center; gap: 0.8rem; padding: 0.6rem; border-radius: 10px; background: var(--cinza-fundo);">
                <img src="${p.imagem}" alt="${p.nome}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 8px;">
                <div style="flex-grow: 1; min-width: 0;">
                    <h5 style="font-size: 0.82rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.nome}</h5>
                    <span style="font-size: 0.78rem; color: var(--verde); font-weight: 700;">${formatarPreco(p.preco)}</span>
                </div>
                <button onclick="removerDoCarrinho(${idx})" style="background: none; border: none; color: var(--vermelho); font-size: 0.75rem; cursor: pointer; flex-shrink: 0;" aria-label="Remover ${p.nome}">Remover</button>
            </div>`).join("");
        }
    }
}

function toggleCarrinho(abrir) {
    const gaveta = document.getElementById("gaveta-carrinho");
    if (gaveta) gaveta.classList.toggle("aberta", abrir);
}

function finalizarCompra() {
    if (carrinho.length === 0) return;
    carrinho = [];
    localStorage.removeItem("carrinho");
    atualizarCarrinho();
    toggleCarrinho(false);
    alert("Parabéns! O seu pedido de Natal no Ateliê Noël foi enviado para preparação!");
}

function atualizarContagem() {
    const agora = new Date();
    let natal = new Date(agora.getFullYear(), 11, 25);
    if (agora > natal) natal = new Date(agora.getFullYear() + 1, 11, 25);

    const falta = natal - agora;
    const dias = Math.floor(falta / (1000 * 60 * 60 * 24));
    const horas = Math.floor(falta / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(falta / (1000 * 60)) % 60;
    const segundos = Math.floor(falta / 1000) % 60;

    const el = document.getElementById("contagem");
    if (el) el.textContent = `${dias}d ${horas}h ${minutos}min ${segundos}s para o Natal`;
}

function inicializarFormulario() {
    const form = document.getElementById("form-contato");
    const msgForm = document.getElementById("mensagem-form");
    if (!form || !msgForm) return;

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const nomeInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");
        const assuntoInput = document.getElementById("assunto");
        const textoInput = document.getElementById("texto-mensagem");

        const nome = nomeInput ? nomeInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const assunto = assuntoInput ? assuntoInput.value : "";
        const texto = textoInput ? textoInput.value.trim() : "";
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nome === "") {
            msgForm.style.color = "var(--vermelho)";
            msgForm.textContent = "Por favor, digite seu nome.";
        } else if (!regexEmail.test(email)) {
            msgForm.style.color = "var(--vermelho)";
            msgForm.textContent = "Digite um e-mail válido no formato nome@exemplo.com.";
        } else if (assunto === "" || texto === "") {
            msgForm.style.color = "var(--vermelho)";
            msgForm.textContent = "Preencha o assunto e escreva sua mensagem.";
        } else {
            msgForm.style.color = "var(--verde)";
            msgForm.textContent = `Muito obrigado, ${nome}! A sua mensagem foi enviada ao Ateliê Noël.`;
            form.reset();
        }
    });
}

function alternarMenuMobile() {
    const menu = document.getElementById("menu-mobile");
    if (menu) menu.classList.toggle("aberto");
}

function abrirModalProduto(id) {
    const lista = window.produtos || (typeof produtos !== "undefined" ? produtos : []);
    const produto = lista.find(p => p.id === id);
    if (!produto) return;

    const catEl = document.getElementById("modal-categoria");
    const titEl = document.getElementById("modal-titulo");
    const precoEl = document.getElementById("modal-preco");
    const descEl = document.getElementById("modal-descricao");
    const imgEl = document.getElementById("modal-img-principal");
    const btn = document.getElementById("modal-btn-comprar");

    if (catEl) catEl.textContent = produto.categoria;
    if (titEl) titEl.textContent = produto.nome;
    if (precoEl) precoEl.textContent = formatarPreco(produto.preco);
    if (descEl) descEl.textContent = produto.descricao;
    if (imgEl) imgEl.src = produto.imagem;

    if (btn) {
        btn.onclick = () => {
            adicionarAoCarrinho(produto.id);
            fecharModalProduto();
            toggleCarrinho(true);
        };
    }

    const modal = document.getElementById("modal-produto");
    if (modal) modal.classList.add("aberto");
}

function fecharModalProduto() {
    const modal = document.getElementById("modal-produto");
    if (modal) modal.classList.remove("aberto");
}

function abrirLightbox(url, legenda) {
    const img = document.getElementById("lightbox-img");
    const leg = document.getElementById("lightbox-legenda");
    const modal = document.getElementById("modal-lightbox");

    if (img) img.src = url;
    if (leg) leg.textContent = legenda;
    if (modal) modal.classList.add("aberto");
}

function fecharLightbox() {
    const modal = document.getElementById("modal-lightbox");
    if (modal) modal.classList.remove("aberto");
}

function inicializarNeveCanvas() {
    const canvas = document.getElementById("snow-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function redimensionar() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    redimensionar();
    window.addEventListener("resize", redimensionar);

    const flocos = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        raio: 2 + Math.random() * 3.5,
        velY: 0.5 + Math.random() * 0.9,
        velX: (Math.random() - 0.5) * 0.5,
        rotacao: Math.random() * Math.PI,
        velRotacao: (Math.random() - 0.5) * 0.02
    }));

    function desenharCristal(f) {
        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(f.rotacao);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.82)";
        ctx.lineWidth = Math.max(0.9, f.raio * 0.2);

        for (let i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, f.raio);
            
            ctx.moveTo(0, f.raio * 0.55);
            ctx.lineTo(f.raio * 0.3, f.raio * 0.75);
            ctx.moveTo(0, f.raio * 0.55);
            ctx.lineTo(-f.raio * 0.3, f.raio * 0.75);
            ctx.stroke();
            ctx.rotate(Math.PI / 3);
        }
        ctx.restore();
    }

    function animarNeve() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        flocos.forEach(f => {
            desenharCristal(f);

            f.y += f.velY;
            f.x += f.velX;
            f.rotacao += f.velRotacao;

            if (f.y > canvas.height + 10) {
                f.y = -10;
                f.x = Math.random() * canvas.width;
            }
            if (f.x > canvas.width + 10) f.x = -10;
            if (f.x < -10) f.x = canvas.width + 10;
        });

        requestAnimationFrame(animarNeve);
    }
    animarNeve();
}

function alternarModoClaroEscuro() {
    document.body.classList.toggle("noite-natal");
    const icone = document.getElementById("icone-tema");
    if (icone) {
        icone.className = document.body.classList.contains("noite-natal") ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    if (document.getElementById("lista-produtos") && typeof produtos !== "undefined") {
        mostrarProdutos(produtos);
    }
    if (document.getElementById("grade-destaques") && typeof produtos !== "undefined") {
        renderizarDestaquesHome();
    }

    const campoBusca = document.getElementById("busca");
    const seletorCat = document.getElementById("categoria");
    const seletorOrd = document.getElementById("ordenacao");

    if (campoBusca) campoBusca.addEventListener("input", filtrar);
    if (seletorCat) seletorCat.addEventListener("change", filtrar);
    if (seletorOrd) seletorOrd.addEventListener("change", filtrar);

    document.body.addEventListener("click", (e) => {
        const btn = e.target.closest(".btn-comprar");
        if (btn && btn.dataset.id) {
            adicionarAoCarrinho(Number(btn.dataset.id));
        }
    });

    inicializarSlideshow();
    inicializarParallaxETopo();
    inicializarFormulario();
    inicializarNeveCanvas();
    atualizarCarrinho();

    if (document.getElementById("contagem")) {
        atualizarContagem();
        setInterval(atualizarContagem, 1000);
    }

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(e => {
                if (e.isIntersecting) e.target.classList.add("visivel");
            });
        });
        document.querySelectorAll(".revelar").forEach(el => observador.observe(el));
    }
});

window.formatarPreco = formatarPreco;
window.criarCard = criarCard;
window.mostrarProdutos = mostrarProdutos;
window.renderizarDestaquesHome = renderizarDestaquesHome;
window.trocarCorCard = trocarCorCard;
window.filtrar = filtrar;
window.limparFiltrosCatalogo = limparFiltrosCatalogo;
window.filtrarPorCategoriaRapida = filtrarPorCategoriaRapida;
window.mostrarSlide = mostrarSlide;
window.alternarMusicaNatal = alternarMusicaNatal;
window.tocarSino = tocarSino;
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.removerDoCarrinho = removerDoCarrinho;
window.atualizarCarrinho = atualizarCarrinho;
window.toggleCarrinho = toggleCarrinho;
window.finalizarCompra = finalizarCompra;
window.atualizarContagem = atualizarContagem;
window.alternarMenuMobile = alternarMenuMobile;
window.abrirModalProduto = abrirModalProduto;
window.fecharModalProduto = fecharModalProduto;
window.abrirLightbox = abrirLightbox;
window.fecharLightbox = fecharLightbox;
window.alternarModoClaroEscuro = alternarModoClaroEscuro;
