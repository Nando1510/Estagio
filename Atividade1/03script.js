const botao_Enviar = document.getElementById('enviar');
botao_Enviar.addEventListener('click', envio);

const sucesso = document.getElementById('sucesso');

async function envio(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    document.getElementById('error-nome').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-senha').textContent = '';

   

    

    let validar = true;

    if (!nome){
        document.getElementById('error-nome').textContent = 'Campo nome obrigatório!!!';
        validar = false;

    }

    if (!email){
        document.getElementById('error-email').textContent = 'Campo e-mail obrigatório!!!';
        validar = false;
    }

    else if (!email.includes('@')){
        document.getElementById('error-email').textContent = 'Digite um e-mail válido!!!';
        validar = false;
    }

    if (!senha){
        document.getElementById('error-senha').textContent = 'Campo senha obrigatório!!! ';
        validar = false;
    }

    else if (senha.length < 6) {
        document.getElementById('error-senha').textContent = 'Sua senha deve conter no mínimo 6 caracteres!!!';
        validar = false;

    }

    if (validar){
        
        
        
        sucesso.style.display = 'block';
        
        
    }

   

}
