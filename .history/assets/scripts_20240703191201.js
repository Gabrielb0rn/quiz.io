function calcularPontuacao() {
    const resposta1 = document.getElementById('pergunta1').value;
    const resposta2 = document.getElementById('pergunta2').value;
    const resposta3 = document.getElementById('pergunta3').value;

    if (resposta1 === "" || resposta2 === "" || resposta3 === "") {
        alert("Por favor, responda todas as perguntas.");
        return;
    }

    let pontuacao = 0;

    if (resposta1 === "certa") {
        pontuacao++;
    }
    if (resposta2 === "certa") {
        pontuacao++;
    }
    if (resposta3 === "certa") {
        pontuacao++;
    }

    document.getElementById('pontuacao').value = pontuacao;

    if (pontuacao === 3) {
        alert("Parabéns! Você acertou todas as perguntas! Pontuação máxima! :D");
    } else {
        alert("Quiz Finalizado! Confira sua pontuação :)");
    }
}
