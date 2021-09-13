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
function verificaCor(){
    const ligarVermelho = document.getElementById("vermelho")
    return ligarAmarelo()
 
}


function verificaCorAma(){
    const ligarAmarelo= document.getElementById("amarelo")
    return ligarVerde()
}


function verificaCorVer(){
    const ligarVerde= document.getElementById("verde")
    return setInterval(idInterval)
}



function automatico(){
    if(ligarVermelho()){
    }else{ligarVerde()
       ligarAmarelo()


    } 
   
    return setInterval(idInterval)
    

}



function trocaAuto(){
    idInterval = setInterval (automatico, 5000)
}










document.getElementById("vermelho").addEventListener("click" ,ligarVermelho)
document.getElementById("amarelo").addEventListener("click", ligarAmarelo)
document.getElementById("verde").addEventListener("click", ligarVerde)
document.getElementById("automatico").addEventListener("click", automatico)
document.getElementById("automatico").addEventListener("click", trocaAuto)
