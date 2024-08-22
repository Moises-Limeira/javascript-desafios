function comprar(){
    let tipoCadeira = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    if (tipoCadeira == 'pista') {
        comprarPista(quantidade);
    } else if (tipoCadeira == 'inferior'){
        comprarInferior(quantidade);
    } else if (tipoCadeira == 'superior'){
        comprarSuperior(quantidade);
    }
}

function comprarPista(quantidade){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > quantidadePista){
        alert('Quantidade indisponível para tipo pista');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
    
}

function comprarInferior(quantidade){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > quantidadeInferior){
        alert('Quantidade indisponível para tipo inferior');
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > quantidadeSuperior){
        alert('Quantidade indisponível para tipo superior');    
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior
        alert('Compra realizada com sucesso!');
    }
}