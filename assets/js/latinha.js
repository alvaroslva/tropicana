const botao1 = document.querySelector('#fruta1');
const botao2 = document.querySelector('#fruta2');
const botao3 = document.querySelector('#fruta3');
const botao4 = document.querySelector('#fruta4');
const botao5 = document.querySelector('#fruta5');
const botoes = [botao1, botao2, botao3, botao4, botao5];
let latinha = document.querySelector('#banner');

// Variáveis para gerenciar os timers e o estado do looping
let timers = [];
let loopingAtivo = false;

function trocarImagem(src, botaoAtual) {
    const imgElement = latinha.querySelector('img') || document.createElement('img');
    imgElement.style.opacity = '0';

    setTimeout(() => {
        imgElement.src = src;
        imgElement.alt = 'Banner';
        imgElement.style.opacity = '1';
        if (!latinha.contains(imgElement)) {
            latinha.appendChild(imgElement);
        }
    }, 300);

    atualizarBorda(botaoAtual);
}

function atualizarBorda(botaoAtual) {
    // Remove a borda de todos os botões
    botoes.forEach(botao => botao.style.border = 'none');
    // Adiciona a borda ao botão atual
    botaoAtual.style.border = 'solid 2px white';
}

function resetTimers() {
    // Cancela todos os timers ativos
    timers.forEach(timer => clearTimeout(timer));
    timers = []; // Limpa o array
}

function iniciarSequencia(imagens, botoesCorrespondentes) {
    resetTimers(); // Reseta a sequência anterior
    imagens.forEach((src, index) => {
        timers.push(setTimeout(() => {
            trocarImagem(src, botoesCorrespondentes[index]);
            // Se for o último item, reinicia a sequência
            if (index === imagens.length - 1) {
                iniciarSequencia(imagens, botoesCorrespondentes); // Loop contínuo
            }
        }, index * 6000));
    });
}

// Funções de evento para cada botão
botao1.addEventListener('click', () => {
    loopingAtivo = true; // Ativa o looping
    iniciarSequencia(
        [
            'assets/img/latinha/limao.png',
            'assets/img/latinha/abacaxi.png',
            'assets/img/latinha/caju.png',
            'assets/img/latinha/maracuja.png',
            'assets/img/latinha/morango.png'
        ],
        [botao1, botao2, botao3, botao4, botao5]
    );
});

botao2.addEventListener('click', () => {
    loopingAtivo = true; // Ativa o looping
    iniciarSequencia(
        [
            'assets/img/latinha/abacaxi.png',
            'assets/img/latinha/caju.png',
            'assets/img/latinha/maracuja.png',
            'assets/img/latinha/morango.png',
            'assets/img/latinha/limao.png'
        ],
        [botao2, botao3, botao4, botao5, botao1]
    );
});

botao3.addEventListener('click', () => {
    loopingAtivo = true; // Ativa o looping
    iniciarSequencia(
        [
            'assets/img/latinha/caju.png',
            'assets/img/latinha/maracuja.png',
            'assets/img/latinha/morango.png',
            'assets/img/latinha/limao.png',
            'assets/img/latinha/abacaxi.png'
        ],
        [botao3, botao4, botao5, botao1, botao2]
    );
});

botao4.addEventListener('click', () => {
    loopingAtivo = true; // Ativa o looping
    iniciarSequencia(
        [
            'assets/img/latinha/maracuja.png',
            'assets/img/latinha/morango.png',
            'assets/img/latinha/limao.png',
            'assets/img/latinha/abacaxi.png',
            'assets/img/latinha/caju.png'
        ],
        [botao4, botao5, botao1, botao2, botao3]
    );
});

botao5.addEventListener('click', () => {
    loopingAtivo = true; // Ativa o looping
    iniciarSequencia(
        [
            'assets/img/latinha/morango.png',
            'assets/img/latinha/limao.png',
            'assets/img/latinha/abacaxi.png',
            'assets/img/latinha/caju.png',
            'assets/img/latinha/maracuja.png'
        ],
        [botao5, botao1, botao2, botao3, botao4]
    );
});

// Looping inicial ao carregar a página
window.addEventListener('load', () => {
    if (!loopingAtivo) {
        iniciarSequencia(
            [
                'assets/img/latinha/limao.png',
                'assets/img/latinha/abacaxi.png',
                'assets/img/latinha/caju.png',
                'assets/img/latinha/maracuja.png',
                'assets/img/latinha/morango.png'
            ],
            [botao1, botao2, botao3, botao4, botao5]
        );
    }
});
