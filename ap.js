function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
// Jogo da Velha

var jogador = "x";

function jogar(celula){
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;
        if(jogador == "x"){
            jogador = "o";
        } else{
            jogador = "x"
        }
    }
}
function reiniciar(){
    window.location.reload();
}

// lista

const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", function(){
    if(tarefa.value == ""){
        alert("Digite uma tarefa válida !!")
    }else{
        lista.innerHTML += `<li><i class="material-icons green">check_circle</i><span>${ tarefa.value }</span><i class="material-icons close">delete</i></li>`
    }
    tarefa.value = "";

    const close = document.querySelectorAll(".close");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click", function(){
            close[i].parentElement.remove();
        });
    }

    lista.addEventListener("click", function(e){
        e.target.parentElement.querySelector(".green").style.color = "green";
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
    })
    document.getElementById("backBtn").addEventListener("click", function(){
        history.back();
        
      });
})
document.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        if(tarefa.value == ""){
            alert("digite algo")
        }else{
            lista.innerHTML += `<li><i class="material-icons green">check_circle</i><span>${ tarefa.value }</span><i class="material-icons close">delete</i></li>`
        }
        tarefa.value = "";
    }
    
    const close = document.querySelectorAll(".close");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click", function(){
            close[i].parentElement.remove();
        });
    }

    lista.addEventListener("click", function(e){
        e.target.parentElement.querySelector(".green").style.color = "green";
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
    })
    

});
