// atividade 5.9 - peso ideal
//tendo como entrada a autura (em metros) e o genero: (1: feminino); e (2:masculino) de uma pessoa, crie um programa
//que calcule e apresente seu peso ideal utilizando as formulas abaixo: 
// - para as mulheres: (62.1 * altura) -44.7
// - para os Homens: (72.7 * altura) - 58

let altura = Number(prompt("Digite sua altura em metros"))
let genero = Number(prompt("Qual e o seu genero biologico 1: Masculino 2: Feminino"))
let pesoideal


if(genero = 1){
    (pesoideal = 72.7 * altura - 58)
    alert("Seu peso ideal seria " + pesoideal)
} else if(genero = 2){
    (pesoideal = 62.1 * altura - 44.7)
    alert("Seu peso ideal seria " + pesoideal)
} else if(genero <= 0 && genero >= 3){
    alert("Numero incorreto, digite novamente")
}