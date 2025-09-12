//Arquivo java Script Aula 8

/*
Para manipular o DOM (document object model) precisamos indicar qual objeto usar, depois chamar um método para selecioná-lo juntamente com seus dados e fazer modificações
*/ 

/*
A forma mais utilizada atualmente para selecionar um elemento do DOM é com o método querySelector
*/ 

let tit = document.querySelector('#titulo');
// inserimos na variável tit o elemento html com id titulo

let teste = document.querySelector('.box');
// inserimos na variável teste o primeiro elemento que compoe a classe box 

let teste2 = document.querySelectorAll('.box');
// inserimos na variável teste todos os elementos que compoem a classe box 
//Eles foram agrupados em forma de um arrayna variavel teste2

/*Para  modificar o conteúdo dentro de um elemento HTML podemos utilizar o atributo 
.textContent como mostrado abaixo:
*/
tit.textContent = 'Mudando o título com JS';

//Na variavel abaixa são inseridos totod os subtitulos 
let teste3 = document.querySelectorAll('.subtitulo'); 

//No laço abaico são escritos todo os subtítulos
for(c=0; c < teste3.length; c++ ){
    document.writeln(teste3[c].textContent)
}



