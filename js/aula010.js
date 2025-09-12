let entrada1Char = document.querySelector('#par1');
let entrada2Char = document.querySelector('#par2');
let btSoma = document.querySelector('#btS')
let resultado = document.querySelector('#saidaSoma');
btSoma.addEventListener('click',somar);

function somar(){
    let entrada1 = Number.parseFloat(entrada1Char.value);
    let entrada2 = Number.parseFloat(entrada2Char.value);
    let soma = entrada1 + entrada2;
    resultado.textContent = `O resultado da soma é:  ${soma}` 
}

//Exemplo de função sem retorno, na verdade uma procedure
function olaMundo(){
    document.writeln('Olá mundo!' + '<br>')
}

let saida1 = document.querySelector('#saida1')
let saida2 = document.querySelector('#saida2')
let saida3 = document.querySelector('#saida3')
let saida4 = document.querySelector('#saida4')
saida1.textContent = olaMundo(); // chamando a função 

// exemplo de função com retorno
function olaMundo2(){
    return 'Olá Mundo com return!!!'
}

saida2.textContent = (document.writeln(olaMundo2())); //chamando a função

/* Função Anônima
Normalmente utilizada quando é um parâmetro para outra função, segue abaixo um exemplo.
*/

let titulo = document.querySelector('h1');
titulo.addEventListener('click', function(){ //f. anônima
    console.log('clicou!!')
})

/* Arrow Function (função de forma simplificada)
É um tipo de função anônima, mas é declarada como uma constante ou variável. Além disso, não usa a palafra reservada FUNCTION, não precisa utilizar RETURN e as chaves só são necessárias se houver mais de uma instrução. Segue um exemplo
*/

let arrowFunc = () => document.writeln('<br>' + 'Teste arrow function!')
arrowFunc()






