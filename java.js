var utah = {
    nome: "Utah Jazz",
    vitorias: 34,
  //  empates: 5,
    derrotas: 11,
   // pontos: 0
  }
  var suns = {
    nome: "Phoenix Suns",
    vitorias: 31,
  //  empates: 5,
    derrotas: 14,
   // pontos: 0
  }
  var clippers = {
    nome: "Los Angeles Clippers",
    vitorias: 31,
  //  empates: 4,
    derrotas: 16,
   // pontos: 0
  }
  
  var lakers = {
    nome: "Los Angeles Lakers",
    vitorias: 31,
  //  empates: 4,
    derrotas: 16,
   // pontos: 0
  }
  
  var nuggets = {
    nome: "Denver Nuggets",
    vitorias: 28,
  //  empates: 4,
    derrotas: 18,
   // pontos: 0
  }
  
  var blazers = {
    nome: "Portland Trail Blazers",
    vitorias: 28,
  //  empates: 4,
    derrotas: 18,
   // pontos: 0
  }
  var dallas = {
    nome: "Dallas Mavericks",
    vitorias: 24,
  //  empates: 4,
    derrotas: 21,
   // pontos: 0
  }
  
  var spurs = {
    nome: "San Antonio Spurs",
    vitorias: 23,
  //  empates: 4,
    derrotas: 21,
   // pontos: 0
  }
  
  var grizzlies = {
    nome: "Memphis Grizzlies",
    vitorias: 22,
  //  empates: 4,
    derrotas: 22,
   // pontos: 0
  }
  
  var warrios = {
    nome: "Golden State Warrios",
    vitorias: 23,
  //  empates: 4,
    derrotas: 24,
   // pontos: 0
  }
  
  var kings = {
    nome: "Sacramento Kings",
    vitorias: 22,
  //  empates: 4,
    derrotas: 25,
   // pontos: 0
  }
  
  var pelicans = {
    nome: "New Orleans Pelicans",
    vitorias: 21,
  //  empates: 4,
    derrotas: 25,
   // pontos: 0
  }
  
  
  var thunder = {
    nome: "Oklahoma City Thunder",
    vitorias: 19,
  //  empates: 4,
    derrotas: 27,
   // pontos: 0
  }
  
  var rockets = {
    nome: "Houston Rockets",
    vitorias: 13,
  //  empates: 4,
    derrotas: 33,
   // pontos: 0
  }
  
  var timberwolves = {
    nome: "Minnesota Timberwolves",
    vitorias: 11,
  //  empates: 4,
    derrotas: 36,
   // pontos: 0
  }
  
  
  
  
  
  utah.pontos = calculaPontos(utah)
  suns.pontos = calculaPontos(suns)
  clippers.pontos = calculaPontos(clippers)
  lakers.pontos = calculaPontos(lakers)
  nuggets.pontos = calculaPontos(nuggets)
  blazers.pontos = calculaPontos(blazers)
  spurs.pontos = calculaPontos(spurs)
  dallas.pontos = calculaPontos(dallas)
  grizzlies.pontos = calculaPontos(grizzlies)
  warrios.pontos = calculaPontos(warrios)
  kings.pontos = calculaPontos(kings)
  pelicans.pontos = calculaPontos(pelicans)
  thunder.pontos = calculaPontos(thunder)
  rockets.pontos = calculaPontos(rockets)
  timberwolves.pontos = calculaPontos(timberwolves)
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 1) + jogador.derrotas
    return pontos
  }
  
  var jogadores = [utah, suns, clippers, lakers, nuggets, blazers, spurs, dallas, grizzlies, warrios, kings, pelicans, thunder, rockets, timberwolves]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td><tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
  }