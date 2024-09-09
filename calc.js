const calcular = document.getElementById('Calcular');

function IMC(){
    const nome = document.getElementById('Nome').value
    const peso = document.getElementById('Peso').value
    const altura = document.getElementById('Altura').value
    const resultado = document.getElementById('Resultado');

    if(nome !==  '' && altura !==  '' && peso !== ''){
        const valorIMC = (peso/(altura*altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso ideal.';
        }else if (valorIMC < 25){
            classificacao = 'no peso ideal.';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso ideal.';
        }else if (valorIMC < 35){
            classificacao = 'identificado com Obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'identificado com Obesidade grau II. Cuidado!';
        }else {
            classificacao = 'Alerta! Obesidade grau III.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

       }else{
        resultado.textContent = 'Preencha todos os campos!';

    }
}

calcular.addEventListener('click', IMC);