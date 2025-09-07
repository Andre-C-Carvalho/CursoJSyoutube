//Desaafio 1
let nome = 'Joaquim Silvério dos Reis';
let nacionalidade = 'Brasileiro';
let idade = 35;
let peso = 83.3;
let altura = 1.85;


document.write(`1) Informações <br>`);
document.write(`Lutador: ${nome} <br>`);
document.write(`Nacionalidade: ${nacionalidade} <br>`);
document.write(`Idade: ${idade} anos <br>`); 
document.write('Peso: ' + peso + ' Kg <br>');
document.write('Altura: ' + altura + " m" + '<br> <br>');

//Desafio2

let dia = 10;
let mes = 9;
let ano = 2021;
let mensagem = 'Deus ajuda quem cedo madruga!';
let autor = 'Confuncio';

document.write('2)Frase do dia' + '<br>');
document.writeln(`${dia}/${mes}/${ano} <br>`);
document.writeln(mensagem + '<br>');
document.writeln(autor + '<br><br>');

//Desafio 3
let meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
document.writeln('3)Array de meses do ano <br>')
for (c = 0; c < meses.length; c++){
    if (c != 11) {
        document.writeln(`${meses[c]},`)
    } else {
        document.writeln(`${meses[c]} <br><br>`)
    }
};  

//Desafio 4
let jogo = {
    nome: 'League of Legends - LOL',
    desenvolvedor: 'Riot Games',
    lancamento: '2009'
};

document.writeln('4)Objeto Jogo <br>');
document.writeln(`Jogo: ${jogo.nome} <br>`);
document.writeln(`Desenvolvido por: ${jogo.desenvolvedor}<br>`)
document.writeln(`Ano do Lançamento: ${jogo.lancamento}`)
