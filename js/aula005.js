// Aula 05 Curso JS

//Criação de Objetos uso de chaves (atributo: valor)

let pessoa = {
    nome: 'André',
    idade: 47,
    peso: 83.56,
    altura: 1.71,
    doador: false
};

let produtos = {
    descricao: [],
    preco: []
};

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['focus', 'mobi', 'onix'],
    ano : ['2005', '2015', '2018']
};

// Como acessar um atributo do objeto
/*Método 1: objeto.atributo
pessoa.nome
pessoa.altura
pessoa.peso
carros.modelo
carros.ano
produtos.preco

Método 2: objeto['atributo']
pessoa['nome']
pessoa['altura']
pessoa['peso']
carros['modelo']
carros['ano']
produtos['preco']
*/

//Operações com valores de atributos de objetos
let imc = pessoa.peso/(pessoa.altura **2);


//Método toFixed(x)
//limita o número de casas decimais para x casas
console.log("IMC = " + imc.toFixed(2)); 


//Alterar ou Atualizar o valor de atributos de um objeto
pessoa.nome = "André Carvalho";
produtos.descricao = ["arroz"];
produtos.preco = [4.99];
/*No caso de produtos esse formato só funcionou porque inicial mente os arrays descricao e preco estão vazios, caso existissem valores, estes seriam sobreescritos. Nesta situação para acrescentar valores utilizamos o operador spreed
*/ 

//Usando o operador spreed (...)
produtos.descricao = [...produtos.descricao, 'fejão', 'farofa', 'fubá'];
produtos.preco = [...produtos.preco, 7.99, 5.76, 4.56];
//desta forma acrescentamos valores ao objeto produtos


//Também é possível utilizar o spreed operator para objetos tipo const
carros.marca = [...carros.marca, 'WV', 'porche'];
carros.modelo = [...carros.modelo, 't-cross', 'cayene'];
carros.ano = [...carros.ano, '2018', '2019'];