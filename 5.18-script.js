// Ler a distância da próxima corrida e dizer quanto tempo vai levar.
// 1 dado de Entrada: Distância (em quilômetros);
// 1 dado de Saída: Tempo de viagem (em segundos).
// 
let distancia = Number (prompt( "digite a distancia em Km:  " ))
let tempo
let velocidade = 300000

     tempo = distancia  / velocidade
     
     alert (' A viagem vai durar ' + tempo + ' segundos!');
    