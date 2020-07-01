class CreateAccount{
    constructor(){
        this.form = document.getElementById('register');
        this.inputUser = document.getElementById('input-user');
        this.inputSenha = document.getElementById('input-senha');
        this.inputSame = document.getElementById('confirm-senha')
        this.inputEmail = document.getElementById('input-email')
        this.usuarios = [];

        this.form.onsubmit = (event) =>this.request(event);
    };
    
    request(event){
        event.preventDefault();
        this.allRight = true;
        let user = this.inputUser.value;
        let senha = this.inputSenha.value;
        let email = this.inputEmail.value;
        this.newUser = {
            email,
            user,
            senha,
        };
        this.validate();
    };

    validate(){
        if(this.usuarios.length !== 0){
            for(this.usuario of this.usuarios){  
                if(this.usuario.email == this.newUser.email){
                    this.allRight = false;
                    return alert("Esse email já foi cadastrado!")
                }
                if(this.usuario.user === this.newUser.user){
                    this.allRight = false;
                    return alert("Usuário já existe!")
                };
            };
        }
        if(this.inputSenha.value !== this.inputSame.value){
            this.allRight = false;
            return alert("As senhas não são iguais!")
        }
        this.inputEmail.value = '';
        this.inputUser.value = '';
        this.inputSenha.value = '';
        this.inputSame.value = '';
        this.result();
    };
    result(){
        if (this.allRight === true){
            this.usuarios.push(this.newUser);
            return alert("Usuário criado com sucesso!");
        };
    };
}

const a = new CreateAccount();
 