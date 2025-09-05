//Aula 04 JS sobre arrays

let produtos = ['arroz', 'feijão', 'farinha'];
let codigos = ['10', '20', '30'];
let meses = ['Jan', 'Fev', 'Mar', 'Abr'];
var algarismos = Array(0,1,2,3,4,5,6,7,8,9); //esta forma está em desuso

//ADICIONAR ELEMENTO AO FIM DO ARRAY (método push)

produtos.push('açucar', 'trigo');
meses.push('Mai', 'Jun', '07', 'Ago');
codigos.push('40', '50', '60','70');

// REMOVER ELEMENTO DO FINAL DO ARRRAY (método pop)

codigos.pop();
meses.pop();
produtos.pop();

// ADICIONAR ELEMENTO NO INÍCIO DO ARRAY (método unshift)
codigos.unshift('80');
meses.unshift('Dez');
produtos.unshift('fubá','óleo', 'nutela', 'queijo', 'presunto');   

// REMOVER ELEMENTO DO INÍCIO DO ARRRAY (método shift)
codigos.shift();
meses.shift();

// REMOVER ELEMENTO(S) DE POSIÇÃO ESPECÍFICA (método splice)
//splice(x,y) = emendar
// x = posição inicial, y = quantos remover
algarismos.splice(6,2); // retira posição 6 e 7 do array algarismos
produtos.splice(2,3); // retira posição 2,3 e 4 do array produtos


//COPIAR POSIÇÕES DO ARRAY (método slice)
//array.slice() copia array completo
//array.slice(x,y) copia de x(posição inicial) até y(posição final)
let meses2 = meses.slice();
let meses3 = meses.slice(1,4);

//VERIFICAR TAMANHO DO ARRAY (atributo length)
console.log(meses.length)
console.log(meses3.length)
console.log(produtos.length)

// OPERADOR SPREED (...)
// expande um array, facilita a copia todo o conteudo de um array
let produtos2 = [...produtos, 'uva', 'maçã', 'banana'];
let teste = [...produtos, ...codigos];

//VER O ÍNDICE DE UM VALOR (método indexOf(''))
console.log(produtos.indexOf('arroz'));