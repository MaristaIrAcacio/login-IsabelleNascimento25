/*
Cóodigo de validação de formulário de login
*/

function Validar(){
    let email = document.getElementById ("email").value;
    let senha = document.getElementById ("senha").value;
    /*
    esse ! significa vasio= email vazio ou senha vazio fazer{ */
   
   if(!email || !senha){
       alert ("Campo de preenchimento obrigatório. Favor preencher");
   }else{
       window.location.href = "aula2.html";
   }
   }
   