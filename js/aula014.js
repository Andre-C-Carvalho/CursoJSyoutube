let notas = document.querySelectorAll('.caixaent')
let media = document.querySelector('#cxmedia')
let resultado = document.querySelector('#saida')
let btcalcular = document.querySelector('#btc')
let btlimpar = document.querySelector('#btl')
let alerta = document.querySelector('#aviso')
let sitFinal = null

btlimpar.addEventListener('click', limpar)

function limpar(){
    notas[0].value = ''
    notas[1].value = ''
    media.value = '' 
    resultado.textContent = 'Situação Final'
    resultado.style.backgroundColor = 'rgb(100, 100, 100)'
    resultado.style.color = 'white'
 }

 function tiraMedia(n1, n2){
    return (n1 + n2)/2
 }

function validar(numero){
   let nota1 = Number(notas[0].value)
   let nota2 = Number(notas[1].value)
   if(nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0){
      alerta.style.display = 'block'
      setTimeout(function(){
         alerta.style.display = 'none'
      },3000)
      limpar()
   }
}


btcalcular.addEventListener('click', calcular)
function calcular(){
   let nota1 = Number(notas[0].value)
   let nota2 = Number(notas[1].value)
   let notaMedia = tiraMedia(nota1, nota2)
   media.value = notaMedia
   if (notaMedia >= 0 && notaMedia <= 3){
      sitFinal = 'Reprovado(a)'
      resultado.textContent = sitFinal
      resultado.style.backgroundColor = 'red'
      resultado.style.color = 'white'
   } else if (notaMedia > 3 && notaMedia < 6){
      sitFinal = 'Recuperação'
      resultado.textContent = sitFinal
      resultado.style.backgroundColor = 'yellow'
      resultado.style.color = 'black'
   } else {
      sitFinal = 'Aprovado(a)'
      resultado.textContent = sitFinal
      resultado.style.backgroundColor = 'green'
      resultado.style.color = 'white'
      
   }
  }

