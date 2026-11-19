// ==========================================
// JAVASCRIPT - AULAS 05, 06 E 08
// Arquivo: java_script.js
// ==========================================


// ==========================================
// 1. VARIÁVEIS E TIPOS DE DADOS
// ==========================================

var nome = "João";
let idade = 20;
const curso = "Full Stack";

let numero = 10;
let decimal = 10.5;
let texto = "Olá";
let verdadeiro = true;


// ==========================================
// 2. OPERADORES
// ==========================================

// Aritméticos
let soma = 10 + 5;
let subtracao = 10 - 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 5;
let resto = 10 % 3;

// Comparação
let igual = (10 == "10");
let identico = (10 === 10);
let diferente = (10 != 5);
let maior = (10 > 5);
let menor = (5 < 10);
let maiorIgual = (10 >= 10);
let menorIgual = (5 <= 10);

// Lógicos
let resultadoE = (idade >= 18 && verdadeiro);
let resultadoOU = (idade >= 18 || verdadeiro);
let resultadoNAO = !verdadeiro;


// ==========================================
// 3. CONVERSÃO DE TIPOS
// ==========================================

let numeroTexto = "25";

let converterNumero = Number(numeroTexto);
let converterInteiro = parseInt(numeroTexto);
let converterDecimal = parseFloat("10.5");
let converterTexto = String(100);


// ==========================================
// 4. CONDICIONAIS
// ==========================================

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Várias condições
if (idade < 12) {
    console.log("Criança");
} else if (idade < 18) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}


// ==========================================
// 5. SWITCH
// ==========================================

let opcao = 2;

switch (opcao) {
    case 1:
        console.log("Opção 1");
        break;

    case 2:
        console.log("Opção 2");
        break;

    default:
        console.log("Opção inválida");
}


// ==========================================
// 6. LAÇOS DE REPETIÇÃO
// ==========================================

// FOR
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// WHILE
let contador = 0;

while (contador < 10) {
    console.log(contador);
    contador++;
}

// DO WHILE
let numeroRepeticao = 0;

do {
    console.log(numeroRepeticao);
    numeroRepeticao++;
} while (numeroRepeticao < 5);


// ==========================================
// 7. ARRAYS
// ==========================================

let nomes = ["Ana", "João", "Pedro"];

console.log(nomes[0]);

nomes.push("Maria");

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}


// ==========================================
// 8. FUNÇÕES
// ==========================================

function mostrarMensagem() {
    console.log("Olá, mundo!");
}

function somar(a, b) {
    return a + b;
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

mostrarMensagem();

let resultadoSoma = somar(10, 5);
let media = calcularMedia(8, 9);


// ==========================================
// 9. INTERAÇÃO COM HTML (DOM)
// ==========================================

// Buscar elemento pelo ID
let elemento = document.getElementById("principal");

// Alterar conteúdo
if (elemento) {
    elemento.innerHTML = "Novo conteúdo";
}

// Buscar valor de um campo
let campoNome = document.getElementById("nome");

if (campoNome) {
    console.log(campoNome.value);
}

// Alterar texto
let mensagem = document.getElementById("mensagem");

if (mensagem) {
    mensagem.textContent = "Texto alterado";
}

// Alterar estilo
if (elemento) {
    elemento.style.color = "blue";
}


// ==========================================
// 10. EVENTOS
// ==========================================

// Clique em botão
let botao = document.getElementById("botao");

if (botao) {
    botao.addEventListener("click", function () {
        alert("Botão clicado!");
    });
}

// Evento de mouse
if (elemento) {
    elemento.addEventListener("mouseover", function () {
        elemento.style.backgroundColor = "yellow";
    });

    elemento.addEventListener("mouseout", function () {
        elemento.style.backgroundColor = "";
    });
}

// Evento de teclado
document.addEventListener("keydown", function (evento) {
    console.log("Tecla pressionada: " + evento.key);
});

// Evento de formulário de exemplo
let formExemplo = document.getElementById("formExemplo");

if (formExemplo) {
    formExemplo.addEventListener("submit", function (evento) {
        evento.preventDefault();
        alert("Formulário enviado!");
    });
}


// ==========================================
// 11. CANVAS - LAB 5
// ==========================================

let canvas = document.getElementById("meuCanvas");
let ctx = canvas ? canvas.getContext("2d") : null;


// Desenhar quadrado
function desenhar_quadrado(x, y, largura, altura, cor) {
    if (!ctx) return;

    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

// Desenhar linha
function desenhar_linha(x1, y1, x2, y2, cor, espessura) {
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = cor;
    ctx.lineWidth = espessura;
    ctx.stroke();
    ctx.closePath();
}

// Desenhar arco/círculo
function desenhar_arco(x, y, raio, cor) {
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.closePath();
}

// Escrever texto
function escrever(texto, x, y, tamanho, cor) {
    if (!ctx) return;

    ctx.font = tamanho + "px Arial";
    ctx.fillStyle = cor;
    ctx.fillText(texto, x, y);
}

// Exemplo de desenho no Canvas
if (ctx) {
    desenhar_quadrado(20, 20, 80, 80, "red");
    desenhar_linha(20, 120, 200, 120, "blue", 3);
    desenhar_arco(150, 70, 30, "green");
    escrever("Canvas", 20, 180, 20, "black");
}


// ==========================================
// 12. CANVAS - OBJETO E ANIMAÇÃO
// ==========================================

// Exemplo de objeto retângulo
let retangulo = {
    x: 0,
    y: 0,
    largura: 50,
    altura: 50,
    cor: "red",

    desenha: function (contexto) {
        contexto.fillStyle = this.cor;
        contexto.fillRect(
            this.x,
            this.y,
            this.largura,
            this.altura
        );
    }
};


// ==========================================
// 13. ANIMAÇÃO COM REQUESTANIMATIONFRAME
// ==========================================

let canvasAnimacao = document.getElementById("canvasAnimacao");
let ctxAnimacao = canvasAnimacao
    ? canvasAnimacao.getContext("2d")
    : null;

if (ctxAnimacao) {

    function animacaoRetangulo() {
        ctxAnimacao.clearRect(
            0,
            0,
            canvasAnimacao.width,
            canvasAnimacao.height
        );

        retangulo.x++;

        if (retangulo.x > canvasAnimacao.width) {
            retangulo.x = -retangulo.largura;
        }

        retangulo.desenha(ctxAnimacao);

        requestAnimationFrame(animacaoRetangulo);
    }

    // Para executar o exemplo, descomente:
    // animacaoRetangulo();
}


// ==========================================
// 14. MOVIMENTAÇÃO PELO TECLADO
// ==========================================

let elementoMovel = {
    x: 100,
    y: 100,
    raio: 20,
    cor: "blue",

    desenha: function (contexto) {
        contexto.beginPath();
        contexto.arc(
            this.x,
            this.y,
            this.raio,
            0,
            2 * Math.PI
        );
        contexto.fillStyle = this.cor;
        contexto.fill();
        contexto.closePath();
    }
};

document.addEventListener("keydown", function (evento) {

    if (evento.key === "ArrowUp") {
        elementoMovel.y -= 10;
    }

    if (evento.key === "ArrowDown") {
        elementoMovel.y += 10;
    }

    if (evento.key === "ArrowLeft") {
        elementoMovel.x -= 10;
    }

    if (evento.key === "ArrowRight") {
        elementoMovel.x += 10;
    }
});


// ==========================================
// 15. LAB 6 - IMAGEM SEGUINDO O MOUSE
// ==========================================

if (canvasAnimacao && ctxAnimacao) {

    let imagem = new Image();

    // Troque pelo nome da imagem usada no exercício.
    imagem.src = "imagem.png";

    let bola = {
        x: 0,
        y: 0,
        largura: 50,
        altura: 50
    };

    let mouseX = 0;
    let mouseY = 0;

    // Capturar posição do mouse
    document.addEventListener("mousemove", function (evento) {

        let retanguloCanvas = canvasAnimacao.getBoundingClientRect();

        mouseX = (evento.clientX - retanguloCanvas.left) *
            (canvasAnimacao.width / retanguloCanvas.width);

        mouseY = (evento.clientY - retanguloCanvas.top) *
            (canvasAnimacao.height / retanguloCanvas.height);

        // Centralizar imagem no mouse
        bola.x = mouseX - bola.largura / 2;
        bola.y = mouseY - bola.altura / 2;

        // Impedir que a imagem saia do Canvas
        bola.x = Math.max(
            0,
            Math.min(bola.x, canvasAnimacao.width - bola.largura)
        );

        bola.y = Math.max(
            0,
            Math.min(bola.y, canvasAnimacao.height - bola.altura)
        );
    });

    // Desenhar e atualizar animação
    function animacaoMouse() {

        ctxAnimacao.clearRect(
            0,
            0,
            canvasAnimacao.width,
            canvasAnimacao.height
        );

        if (imagem.complete && imagem.naturalWidth > 0) {
            ctxAnimacao.drawImage(
                imagem,
                bola.x,
                bola.y,
                bola.largura,
                bola.altura
            );
        }

        requestAnimationFrame(animacaoMouse);
    }

    imagem.onload = function () {
        animacaoMouse();
    };

    imagem.onerror = function () {
        console.log("Não foi possível carregar a imagem.");
    };
}
