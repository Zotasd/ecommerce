
const URL = "http://localhost/webapp/api";

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário


    // Obtém os valores dos campos do formulário
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Cria um objeto de usuário com os dados coletados
    var user = {
      email: email,
      senha: senha
    };

    console.log(user);//até aqui tranquilo

    // Envia a requisição para o backend, não testado

    fetch(`${URL}/user/auth.php`, {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })


    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('Usuário cadastrado com sucesso:', data);
    })
    .catch(function(error) {
      console.error('Erro ao cadastrar usuário:', error);
    });





  });