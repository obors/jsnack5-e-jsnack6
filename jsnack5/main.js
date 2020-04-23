// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

//richiedo num del'numUtente

var numUtente = parseInt(prompt("Ciao, digita sto numero "))
console.log(numUtente);

//creo il cubo del numUtente
var cubUtente = Math.pow(numUtente, 3);
console.log(cubUtente);

//indico al ciclo for di ripetersi n volte (dove n e il numero inserito dal'utente)

for (var i = 0; i < numUtente; i++) {
  cubUtente = Math.pow(i,3)
    console.log(i * cubUtente)

}


// for (var i = 0; i < numUtente; i++) {
//   if (cubUtente % numUtente == 0){
//     console.log(i * cubUtente)
//   }
// }



// if (numUtente==isNaN) {
//   alert("Non e un numero")
//   var numUtente = parseInt(prompt(' inserisci un numero '))
// }
