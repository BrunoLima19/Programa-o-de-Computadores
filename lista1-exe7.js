chefe()

function chefe(){
    var vetor = [] // declaro o vetor
    exe7(vetor) // passando o vetor como parâmetro - escopo global
    console.log(vetor)
    calculaMedia(vetor)
}

function exe7(vet){ // vet representa vetor -> o que fizermos com o ve, será feito com o vetor

    var numero = Number(prompt("Informe um número"))
    do{

        // colocar o número em vet
        vet.push(numero)
        numero = Number(prompt("Informe outro número, informe número negativo para encerrar"))
    }
    while (numero >= 0)
}

function calculaMedia(vet){
    var soma = 0
    for(var i=0; i < vet.length; i++){
        soma = soma + vet[i]
    }
    console.log(`A média é ${soma/vet.length}`)
}