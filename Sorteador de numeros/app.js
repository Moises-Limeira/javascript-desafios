function sortear(){
    let quatidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteios = [];
    let numero;

    for (let i = 0; i < quatidade; i++){
        numero = numerosAleatorio(de, ate);

        while (sorteios.includes(numero)) {
            numero = numerosAleatorio(de, ate);
        }

        sorteios.push(numero);
    }
    
    let numerosSorteados = document.getElementById('resultado');
    numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteios}</label>`;
    alterarStatusBotao();
    
}

function numerosAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao()
}