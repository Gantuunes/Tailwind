
 window.addEventListener('load', function() {
    document.getElementById('reg-email').focus(); // --> garante o click no campo do id
});


document.querySelector('button[type="submit-button"]').addEventListener('click', function(event){
    event.preventDefault(); 
    
    const pwdReg = document.getElementById("pwd-reg").value;
    const confirmPwdReg = document.getElementById("confirmPwdReg").value;
    const message = document.getElementById("message");

    if (pwdReg !== confirmPwdReg) {
        message.textContent = "As senhas não coincidem!";
        message.style.color = "red";
        message.style.display = "block";
  
}
    else{
        message.textContent = "Cadastro realizado!"
    }

    if (confirmPwdReg.length < 7) {
        message.textContent = "Sua senha não tem o mínimo de 7 caracteres";
        message.style.color = "red";
        message.style.display = "block"; 
    }
});




















