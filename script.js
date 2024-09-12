const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "voce gosta da ideia da inteligencia artificial",
        alternativas:["sim","nao"]
    },
    {
        enunciado: "voce acha que ela poderia ser um problema futuramente?",
        alternativas:["sim","nao"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas:["Alternativa 1","Alternativa 2"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
Function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){ 
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent =alternativas;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}


