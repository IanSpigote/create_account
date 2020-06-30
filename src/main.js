var button = document.querySelector('button');
var inputUser = document.getElementById('input-user');
var inputSenha = document.getElementById('input-senha');

var usuarios = [];

button.onclick = () => {
    let user = inputUser.value;
    let pass = inputSenha.value;
    let free = true;
    let newUser = {
        user,
        pass,
    };
    inputUser.value = '';
    inputSenha.value = '';
    for(usuario of usuarios){
        if(usuario.user === newUser.user){
            free = false;
            return(alert('Usuário já existe!'));  
        }
    }

    if(free === true){
        usuarios.push(newUser);;
        alert("Usuário criado com sucesso!");
    }
}