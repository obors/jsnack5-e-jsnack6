//Stampa le potenze di 2 fino a 1000

// creo 2  var per averle a disp
var numX1 = 1000;
var numX2 = 0;

//stampo i numeri fino a 1000

for (var i = 0; i < numX1; i++) {
  numX2 = 2**i


  if (numX2 < numX1){
    console.log(numX2)
  }else {
    break;
  }

}

//individuate le potenze di 2 si stampa
