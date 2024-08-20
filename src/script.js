 document.getElementById('login-form').addEventListener('submit', function (event) {

     event.preventDefault(); // previne a pagina nao ser recarregada


     document.getElementById('message').textContent = 'Login efetuado. Redirecionando'; // 
     document.getElementById('usuario').value = ''; // limpa o campo usuario
     document.getElementById('senha').value = ''; // limpa o campo senha
 });


 window.addEventListener('load', function() {
    document.getElementById('usuario').focus(); // --> garante o click no campo do id
});






document.getElementById('pwd-reg').addEventListener('click', function(){

    const pwdReg = document.getElementById("pwd-reg").value;
    const confirmPwdReg = document.getElementById("confirm-pwd-reg").value;
    const message = document.getElementById("message");

    if (pwdReg !== confirmPwdReg) {
        message.textContent = "As senhas não coincidem!";
        message.style.color = "red";
        message.style.display = "block";
}
});























// document.getElementById('email').addEventListener('submit', function(event){

//     const email = document.getElementById('usuario');
//     const senha = document.getElementById('senha');
//     const mensagem = document.getElementById('message');

//     message.textContent = ''; // Limpa mensagens antigas
    
//     if(email &&  senha) {

//         message.textContent = 'Redirecionando';
//         message.style.color = 'green'
//     }

//     else {
//         message.textContent = 'Verifique todos os campos';
//         message.style.color = 'red'
//         event.preventDefault(); // Evita o envio do formulário

//     }
//     });