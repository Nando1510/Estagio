function limpar_Inputs(){
    
    document.getElementById('formulario').reset();

}

const botao_Enviar = document.getElementById('enviar');
botao_Enviar.addEventListener('click', envio);

async function envio(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    document.getElementById('error-nome').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-senha').textContent = '';

    document.getElementById('sucesso').style.display = 'none';

    let validar = true;

    if (!nome){
        document.getElementById('error-nome').textContent = 'Preenchimento obrigatorio do campo nome!!!';
        validar = false;
    }

    if (!email){
        document.getElementById('error-email').textContent = 'Preenchimento obrigatório do  campo e-mail!!!';
        validar = false;
    }
    else if (!email.includes('@')){
        document.getElementById('error-email').textContent = 'E-mail inválido!!!';
        validar = false;
    }

    if (!senha){
        document.getElementById('error-senha').textContent = 'Preenchimento obrigatório do campo senha!!!';
        validar = false;
    }

    else if (senha.length < 6){
        document.getElementById('error-senha').textContent = 'Sua senha deve de conter no mínimo 6 caracteres!!!';
        validar = false;
    }

    if (validar){
        document.getElementById('sucesso').style.display = 'block';

        limpar_Inputs();

    }
}
