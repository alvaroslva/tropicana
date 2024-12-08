function selecionarResposta(element) {
    // Pega o container da pergunta (pai do elemento clicado)
    const container = element.parentNode;

    // Se o botão "Ver Resultado" já foi pressionado, não deve permitir mudar a resposta
    if (document.getElementById("enviar").style.display === "none") {
        return;
    }

    // Remove a classe 'selected' de todas as respostas dentro da mesma pergunta
    const respostas = container.querySelectorAll("p");
    respostas.forEach(resposta => resposta.classList.remove("selected"));

    // Adiciona a classe 'selected' à resposta clicada
    element.classList.add("selected");
}

document.getElementById("enviar").addEventListener("click", function () {
    const perguntas = document.querySelectorAll(".perguntas > div");
    let acertos = 0;
    let todasCorretas = true; // Variável para verificar se todas as respostas estão corretas

    perguntas.forEach((pergunta) => {
        const respostaSelecionada = pergunta.querySelector("p.selected");
        const respostaCerta = pergunta.querySelector("p.certa");

        // Verifica se a resposta selecionada é a correta
        if (respostaSelecionada && respostaSelecionada === respostaCerta) {
            acertos++;
        }

        // Após o clique no botão, marca as respostas erradas com fundo vermelho
        if (respostaSelecionada && respostaSelecionada !== respostaCerta) {
            respostaSelecionada.style.backgroundColor = "red";
            todasCorretas = false; // Se uma resposta estiver errada, torna false
        }
    });

    if (todasCorretas) {
        // Exibe o prêmio se todas estiverem corretas
        document.getElementById("premio").style.display = "block";
        document.getElementById("enviar").style.display = "none"; // Oculta o botão se todas estiverem corretas
    } else {
        alert(`Você acertou ${acertos} de ${perguntas.length} perguntas.`);
    }
});
