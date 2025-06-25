// 5.18

// Ler a distância da próxima corrida e dizer quanto tempo vai levar.
// 1 dado de Entrada: Distância (em quilômetros);
// 1 dado de Saída: Tempo de viagem (em segundos).
// 
let distancia = Number (prompt( "digite a distancia em Km:  " ))
let tempo
let velocidade = 300000

     tempo = distancia  / velocidade
     
     alert (' A viagem vai durar ' + tempo + ' segundos!');
    

// 5.19

 //O tempo de viagem já é apresentado em segundos...
// Caso este tempo seja maior que um minuto, apresentar este valor também 
// em minutos;
// Caso seja maior que uma hora, apresentar também em horas;
//Caso seja maior que um dia, apresentar também em dias;
// Caso seja maior que 30 dias, apresentar também em meses;
// Caso seja maior que 12 meses, apresentar também em anos.
// Deu, simples assim..

let minutos
let horas
let meses
let anos


if (segundos >= 60){
     minutos = segundos /60;
     alert('A viagem vai durar ' + segundos + ' Segundos!');
}
if ( minutos >=60 ){
     horas = minutos / 60;
     alert('A viagem vai durar ' + minutos + ' Minutos! ');
}
if (horas >= 24 ){
     dias = horas / 24;
     alert ('A viagem vai durar ' + horas + ' Dias')
}
 if ( Dias >= 12 ){
     meses = dias / 30;
     alert ('A viagem vai durar ' + meses + ' Meses')
 }

if (meses >= 12){
     anos = meses / 12;
     alert ('A viagem vai durar ' + anos + ' Anos')
}











