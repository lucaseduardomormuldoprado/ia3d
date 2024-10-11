const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "voce acha que a inteligencia artificial é uma boa ideia?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA é uma boa ideia"}, 

            {texto: "Não",
            afirmação:"A IA não é uma boa ideia"}]
    },
    { 
        enunciado: "a IA pode ser perigosa?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA tem um potencial perigo"}, 
                
            {texto: "Não",
            afirmação:"A IA não apresenta perigo"}]
    },
    { 
        enunciado: "voce usa IA?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, a IA é útil no meu dia a dia"}, 
                
            {texto: "Não",
            afirmação:"Não, a IA não é relevante para mim"}]
    },
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();