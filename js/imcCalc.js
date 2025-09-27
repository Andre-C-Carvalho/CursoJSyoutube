let nome = document.querySelector('#cxnome')
let nasc = document.querySelector('#cxnasc')
let peso = document.querySelector('#cxpeso')
let altura = document.querySelector('#cxaltura')
let btenviar = document.querySelector('#btenviar')
let btlimpar = document.querySelector('#btlimpar')
let saida1 = document.querySelector('#saida1')
let saida2 = document.querySelectorAll('.resumo')
let descricao =  'teste'
let validado = false

btlimpar.addEventListener('click', limpar)

function validacaoPeso(){
    if (peso.value > 200 || peso.value < 5){
        validado = false
        alert('[ERRO]:Peso inválido')
    } else{
        validado = true
    }
}

function validacaoAltura(){
    if ((altura.value > 3.5 || altura.value < 0.5) && (validado = true)){
        validado = false
        alert('[ERRO]:Atura inválida')
    } else {
        validado = true
}
}

function calcImc(){
    imc = (Number(peso.value) /((Number(altura.value))**2)).toFixed(2)
    if (imc < 18.5) {
        descricao = 'Baixo Peso'
    } else if (imc < 25){
        descricao = 'Peso Normal'
    } else if (imc < 30){
        descricao = 'Sobrepeso'
    } else if (imc < 35){
        descricao = 'Obesidade Grau 1'
    } else if (imc < 40){
        descricao = 'Obesidade Grau 2'
    } else {
        descricao = 'Obesidade Grau 3'
    }
}

function limpar(event){
    event.preventDefault()
    nome.value = null
    nasc.value = null
    peso.value = null
    altura.value = null
    saida1.textContent = `IMC: `
    saida2[0].textContent = `Nome: `
    saida2[1].textContent = `Nasc: `
    saida2[2].textContent = `Peso: `
    saida2[3].textContent = `Altura: `
}

btenviar.addEventListener('click', enviar)

function enviar(event){
    event.preventDefault()
    validacaoPeso()
    validacaoAltura()
    if (validado == true){
        calcImc()
        saida1.textContent = `IMC: ${imc} ${descricao}`
        saida2[0].textContent = `Nome: ${nome.value}`
        saida2[1].textContent = `Nasc: ${nasc.value}`
        saida2[2].textContent = `Peso: ${peso.value}`
        saida2[3].textContent = `Altura: ${altura.value}`
        nome.value = null
        nasc.value = null
        peso.value = null
        altura.value = null
    } else{
         saida1.textContent = `IMC: `
    }
   
}

