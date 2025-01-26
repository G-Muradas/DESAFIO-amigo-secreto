let listaAmigos = [];
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    let listaAmigosHTML = document.getElementById("listaAmigos");
    
    if (amigo.value = ""){
        document.getElementById("listaAmigos").innerHTML = "Adicione um nome válido"
    } else if (listaAmigos.includes(amigo)) {
        alert("Este nome já foi adicionado à lista");
    } else if (amigo != "") {
        listaAmigos.push(amigo);
        let itemListaAmigos = document.createElement("li");
        itemListaAmigos.innerHTML = amigo
        listaAmigosHTML.append(itemListaAmigos);
    }
    document.getElementById("amigo").value = "";

}

function sortearAmigo() {
    if (amigo == "") {
        resultado.innerHTML = "Adicione um nome, por favor.";
    } else if (listaAmigos.length == 0) {
        resultado.innerHTML = "Sem nomes para sortear.";
    } else if (listaAmigos.length == 1) {
        resultado.innerHTML = "Adicione mais de um nome para realizar o sorteio.";
    } else {
        let amigoAleatorio = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        resultado.innerHTML = `Seu amigo secreto é: ${amigoAleatorio}`;
    }
}