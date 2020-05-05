var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event){
    /*var alvoDoEvento = event.target;
    var paiDoAlvo = alvoDoEvento.parentNode // TR = paciente = remover*/

   event.target.parentNode.classList.add("fadeOut");

   setTimeout ( function (){
        event.target.parentNode.remove(); 
   }, 500);
});

