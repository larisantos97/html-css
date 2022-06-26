var cartaPaulo = {
    nome: "Capitão América",
    imagem: "https://br.web.img3.acsta.net/newsv7/21/05/17/16/51/0145959.jpg",
    atributos: {
        ataque: 90,
        defesa: 85,
        magia: 0
    }
}

var cartaRafa = {
    nome: "Feiticeira Escarlate",
    imagem: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/04/Feiticeira-Escarlate-Serie-DisneyPlus-1024x576.jpg",
    atributos: {
        ataque: 90,
        defesa: 75,
        magia: 100
    }
}

var cartaGui = {
    nome: "Homem Aranha",
    imagem: "https://i.pinimg.com/550x/a4/59/85/a45985411b88d1353587540854140bde.jpg",
    atributos: {
        ataque: 95,
        defesa: 85,
        magia: 0
    }
}

var cartaDoutor = {
    nome: "Doutor Estranho",
    imagem: "https://s2.glbimg.com/oYEvq835oFur_NtO9bmwvZ0EH4U=/e.glbimg.com/og/ed/f/original/2022/02/13/estranho.png",
    atributos: {
        ataque: 95,
        defesa: 90,
        magia: 99
    }
}

var cartaHomem = {
    nome: "Homem de Ferro",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/03/iron-man-1.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaHulk = {
    nome: "Hulk",
    imagem: "https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc/wp-content/uploads/2020/06/legiao_EKohXa0I3ZHj.jpg.jpeg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cartaViuva = {
    nome: "Viúva Negra",
    imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/viuva-negra/05faf9f2-a109-4903-9919-1be1dc4ae532.jpg",
    atributos: {
        ataque: 85,
        defesa: 80,
        magia: 0
    }
}

var cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaDoutor, cartaHomem, cartaHulk, cartaViuva, cartaMarvel]
//               0           1           2          3         4            5            6           7  

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}


function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Maquina"
  divPlacar.innerHTML = html
  
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    } 
  
    if (cartas.length ==0){
      alert("Fim de jogo")
      if (pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      } else if (pontosMaquina > pontosJogador) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    } else {
      document.getElementById('btnProximaRodada').disabled = false
    }
      

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
  
    atualizaPlacar()  
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true 
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}