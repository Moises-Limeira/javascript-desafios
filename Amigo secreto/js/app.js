let amigos = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value; 
    if (nomeAmigo == ''){
        alert('Digite o nome do amigo!');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Nome já adicionado!');
        return;
    }

    let incluirAmigos = document.getElementById('lista-amigos');

    amigos.push(nomeAmigo);

    if (incluirAmigos.textContent == ''){
        incluirAmigos.textContent = nomeAmigo;
    }else{
        incluirAmigos.textContent = incluirAmigos.textContent + ', ' + nomeAmigo;
    }

    document.getElementById('nome-amigo').value = '';
    
}

function sortear(){
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
    }
}

function embaralha(lista) {
    
    for (let i = lista.length; i; i--){
        let indiceAleatorio = Math.floor(Math.random() * i);

        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}

function reiniciar() {
    amigos = []
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}