//Implementação de funções com atribuições diferentes:
//com retorno, com parâmetros e sem retorno e sem patametro.
listaDenumerosSorteados = [];/*Implentaçaõ de método, para armazenar os números sorteados*/ 
let numeroLimete = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//Função que exibe informações na tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();
    
//Função sem parametro e sem retorno
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensangemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensangemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');/*Habilita o botão novo jogo*/ 
    } else {
        if (chute > numeroSecreto) {
           exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
         tentativas++;
         limparCampo();
    }
}
//Atribuindo um função com retorno
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimete  + 1);/*O parseInt(Math.radom() * 10 + 1) gera uma número aleatório inteiro, + 1 é para chegar a 10*/ 
    let quantidadeDeNumeroNaLista = listaDenumerosSorteados.length;

    if (quantidadeDeNumeroNaLista == numeroLimete) {
        listaDenumerosSorteados = [];
    }
    if (listaDenumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDenumerosSorteados.push(numeroEscolhido);
        console.log(listaDenumerosSorteados);
        return numeroEscolhido;
    }
}

//Função que limpa o campo onde é colocado o valor do chute.
function limparCampo() {
    chute = document.querySelector('input');/*Pega o campo input*/ 
    chute.value = '';/*Atribui ao campo uma string vazia*/
}

//Emplementa função que reabilita botão novo jogo.
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}