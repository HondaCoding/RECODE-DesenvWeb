let tabuada = 3;
let contador = 1;

while (contador <=10){
    console.log(
        tabuada, "x", contador, '=', tabuada * (contador++)
    );
}

for (let controlador = 0; controlador <= 5; controlador = controlador + 1){
    console.log("TABUADA: ", tabuada, "x", controlador, "=", tabuada * controlador);
}

switch(tabuada){
    case 1:
    case 2:
    case 3:
        console.log("Menor que 7");
        break;
    case 4:
    case 5:
    case 6:
    case 7:
        console.log("Maior ou igual a 7");
        break;
}