//Função para criar a variavel balão
function addBola() {
    //Criação da varialvel bola esetado a classe bola na variavel
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    //Gera as localizações x e y
    var x = Math.floor(Math.random() * 700);
    var y = Math.floor(Math.random() * 400);

    //Array com cores diferentes
    var cores = ["red", "black", "blue", "green", "purple", "gray", "pink"]

    //Seta a localização no Style da bola e seta a função ao clicar
    bola.setAttribute("style", "left:"+x+"px; top:"+y+"px; background-color:" + cores[Math.floor(Math.random()*6)]);
    bola.setAttribute("onclick", "estourar(this)");

    //Adiciona o elemento bola na tela
    document.body.appendChild(bola);
}

//Função de estourar com o clique no balão
function estourar(obj) {
    document.body.removeChild(obj);
}

//Função para gerar o balão na tela
function iniciar() {
    setInterval(addBola, 1000)
}