// Operadores e operações em JS

let n1 = 10;
let n2 = 2;
let n3 = '2';

document.write(`n1: ${n1} <br>`);
document.write(`n2: ${n2} <br>`);
document.write(`n3: ${n3} <br>`);

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2); // resto da divisão inteira
console.log(n1 ** n2); // potenciação

console.log(n2 == n3); // igual a, nesse caso não compara os tipos das variaveis 
console.log(n2 === n3); //identico a, compara inclusive os tipos das variáveis
console.log(n2 != n3); // diferente de, não compara os tipos das variáveis   
console.log(n2 !== n3); // diferente de, compara os tipos das variáveis   

console.log(n1 > n2);//operador maior que
console.log(n1 < n2);// operador menor que
console.log(n1 >= n2);//operador maior ou igual que
console.log(n1 <= n2);// operador menor ou iqual que

let a = true;
let b = false;

console.log(a && b); // operador logico "e" "AND"
console.log(a || b); // operador logico ou "OR"
console.log(!a); // operador logico "NOT" (negação)
console.log(!b); // operador logico "NOT" (negação)
