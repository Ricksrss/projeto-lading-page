var setaDireita = window.document.getElementById("seta-direita")
var Leonard = window.document.getElementById("Leonard")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonard.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; ,margin-top:55px"
}
function RolarParaEsquerda() {
    Leonard.style = "display: flex"
    Bruna.style = "display: none"
    setaDireita.style = "display:flex; margin-top: 55px"
    setaEsquerda.style = "display: none"
}