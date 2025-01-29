var Setadireita = window.document.getElementById("Setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var Setaesquerda = window.document.getElementById("Setaesquerda")

function Rolarparadireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    Setadireita.style ="display:none"
    Setaesquerda.style ="display:flex; margin-top:55px"
}

function Rolarparaesquerda() {
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
     Setadireita.style ="display:flex; margin-top:55px"
     Setaesquerda.style ="display:none"
}