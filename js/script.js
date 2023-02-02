const form = document.getElementById('form');

const inputs = document.querySelectorAll('.cadastro');

const spanErro = document.querySelectorAll('.erroSpan');

const spanBtn = document.querySelector('#spanBtn');


//peguei todos elementos necessarios...




//criei as funções para adicionar e remover os spans....

function mostrarErroBtn(){
    spanBtn.innerHTML = "Campos obrigatórios não registrados.";
    spanBtn.classList.remove('msgBtnSucesso');
    spanBtn.classList.add('msgBtnErro');
}

function mostrarErro(index){
    spanErro[index].innerHTML = "'Campo Obrigatório'";
    spanErro[index].classList.add('msgErro');
}

function removerErro(index){
    spanErro[index].innerHTML = "";
}

function mostrarSucesso(){
    spanBtn.innerHTML = "Sucesso!";
    spanBtn.classList.remove('msgBtnErro');
    spanBtn.classList.add('msgBtnSucesso');
}

//criei uma função para verificar cada input e validar eles

function verificar(){

//criei um laço de repetição para pegar cada input e verificar o que tem nele
//usei if para mostrar a mensagem de erro caso o input esteja vazio
//usei else para remover a mensagem de erro caso o input tenha algo 
    for(let i = 0; i < inputs.length; i++ ){
        if(inputs[0].value == ''){
            mostrarErro(0);
            mostrarErroBtn();
        } else {
            removerErro(0);
        }

        if(inputs[1].value == ''){
            mostrarErro(1);
            mostrarErroBtn();
        } else {
            removerErro(1);
        }

        if(inputs[2].value == ''){
            mostrarErro(2);
            mostrarErroBtn();
        } else {
            removerErro(2);
        }

        if(inputs[3].value == ''){
            mostrarErro(3);
            mostrarErroBtn();
        } else {
            removerErro(3);
        }

        if(inputs[4].value == ''){
            mostrarErro(4);
            mostrarErroBtn();
        } else {
            removerErro(4);
        }
        
// usei um ultimo if para mostrar a mensagem de sucesso em baixo do botão de cadastro 

        if(inputs[i].value != ''){
            mostrarSucesso()
        }
    }
}

// cheguei onde eu queria com o código!