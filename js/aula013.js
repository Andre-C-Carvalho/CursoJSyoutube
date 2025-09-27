
//Estruturas de repetição
let divFor = document.querySelector('#secfor')
let divForEach = document.querySelector('#secForEach')
let divWhile = document.querySelector('#secWhile')
let divDoWhile = document.querySelector('#secDoWhile')
let carros = ['fusca', 'gol', 'chevete', 'ômega'];

//Estutura FOR
for (i = 0; i < 5; i++ ){
    divFor.append(i)
}

for (let i = 0; i < carros.length; i++ ){
    let item = document.createElement("li")
    divFor.append(item)
    item.append(`${carros[i]}`)
}

//Estrutura FOREACH
//exige como parâmetro uma função
let frutas = ['banana', 'maçã', 'manga', 'carambola', 'pinha']

frutas.forEach(function(fruta, i){
    let item = document.createElement("li")
    divForEach.append(item)
    item.append(`${i} ${fruta}`)
})

let paragrafo1 = document.createElement("p")
divForEach.append(paragrafo1)
paragrafo1.append('FOREACH sem o índice')


//o indice não é um argumento necessário na função
carros.forEach(function(carro){
    let item = document.createElement("li")
    divForEach.append(item)
    item.append(`${carro}`)
})

//Estrutura WHILE
// Exige que o iterador seja criado fora do laço
//também é necessário fazer o incremento do iterador
let contador = 0; 
while(contador < frutas.length){
    let item = document.createElement("li")
    divWhile.append(item)
    item.append(`${frutas[contador]}`)
    contador++ //incremento
}

//Estrutura DO WHILE
/*Muito semelhante a estrutura while, mas nesse caso a primeira iteração será realizada, a checagem da condição ocorre somente após a primeira iteração.
*/

let iterador = 0
do{
    let item = document.createElement('p')
    divDoWhile.append(item)
    item.append(`${carros[iterador]}`)
    iterador++
}while(iterador < carros.length)