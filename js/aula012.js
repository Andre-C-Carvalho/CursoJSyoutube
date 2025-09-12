let saida = document.querySelectorAll('.saida');
let notas = [3,5,7,9,2.5];

//Exemplo de estrutura if simples:

if (notas[0] > 7){
    saida[0].textContent = 'Aprovado';
}

// if não imprime na tela por quer notas[0] não satizfaz a condição estabelecida, notas[0] < = 7

//Exemplo de esturtura if com else:
if (notas[3] > 7){
    saida[1].textContent = "Aprovado"
} else {
    saida[1].textContent ="Reprovado"
}

// if ternário:
notas[3] >= 7 ? saida[2].textContent = 'Passou' : saida[2].textContent = 'Ficou'
/*
Estrutura: 
Condição ? comando1 : comando2
*/

// If encadeado ou aninhado
if (notas[4] >= 7){
    saida[3].textContent = 'Aprovado' 
} else if (notas[4] <= 3){
    saida[3].textContent = 'Reprovado'
} else {
    saida[3].textContent = 'Exame Final'
}

//Estrutura switch-case:
let situacao = ['aprovado', 'recuperação', 'reprovado', 'teste']

switch (situacao[3]){
    case 'aprovado':
        saida[4].textContent = 'Passou de ano!' 
        break
    case 'recuperação':
        saida[4].textContent = 'Você deve fazer o exame final!' 
        break
    case 'reprovado':
        saida[4].textContent = 'Não passou de ano!' 
        break
    default:
        saida[4].textContent = 'Estudar nunca é ruim!' 
}
//para o caso default não há necessidade co comando Break

