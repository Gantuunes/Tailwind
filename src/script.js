document.getElementById('login-form').addEventListener('submit', function (event) {

    event.preventDefault(); // previne a pagina nao ser recarregada


    document.getElementById('message').textContent = 'Login efetuado. Redirecionando'; // 

    document.getElementById('usuario').value = ''; // limpa o campo usuario
    document.getElementById('senha').value = ''; // limpa o campo senha
});


