"use strict"

const semaforo = document.getElementById("semaforo")
let idInterval


function ligarVermelho(){
    semaforo.src ="img/vermelho.png"
}


function ligarAmarelo(){
    semaforo.src ="img/amarelo.png"
}


function ligarVerde(){
    semaforo.src ="img/verde.png"
}
function verificaCorVerm(){
    return semaforo.src.includes("vermelho")
  


}


function verificaCorAma(){
    return semaforo.src.includes("amarelo")  
}


function verificaCorVer(){
    return semaforo.src.includes("verde")
}




function automatico(){
    if(verificaCorVerm()){
        ligarAmarelo()

    }else if (verificaCorAma()){
        ligarVerde()
    }else if (verificaCorVer()){
        ligarVermelho()
    }
    

}



function trocaAuto(){
    idInterval = setInterval (automatico, 1000)
}










document.getElementById("vermelho").addEventListener("click" ,ligarVermelho)
document.getElementById("amarelo").addEventListener("click", ligarAmarelo)
document.getElementById("verde").addEventListener("click", ligarVerde)
document.getElementById("automatico").addEventListener("click", automatico)
document.getElementById("automatico").addEventListener("click", trocaAuto)
