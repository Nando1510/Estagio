function limpar_Inputs(){
    
    document.getElementById('formulario').reset();

}


const botao_Enviar = document.getElementById('enviar');
botao_Enviar.addEventListener('click', envio);

function envio(event) {
    event.preventDefault();

    document.getElementById('error-nome').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-senha').textContent = '';
    document.getElementById('success-box').style.display = 'none';
   

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    let valido = false;

    if (nome === "") {
        document.getElementById('error-nome').textContent = "O campo Nome é obrigatório.";

        valido = false;
    }

    if (email === "") {
    document.getElementById('error-email').textContent = "O campo email é obrigatório.";
    valido = false;
    } else if (!email.includes("@")) {
            document.getElementById('error-email').textContent = "Digite um e-mail válido.";
            valido = false;
    }


    if (senha === "" ){
        document.getElementById('error-senha').textContent = "O campo senha é obrigatório."
        valido = false
    }

    if (senha.length < 6){
        document.getElementById('error-senha').textContent = "O campo senha deve conter pelo menos  6 caracteres."
        valido = false;
    }

    if (valido) {
        document.getElementById("success-box").style.display = "block";
        limpar_Inputs();
    }
   
}
