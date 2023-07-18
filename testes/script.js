 /*----------------------------------- WHILE/FOR ---------------------------------------------*/

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

 /*----------------------------------- ARRAYS ---------------------------------------------*/

let frutas = ["maca", "pera", 36];
    console.log(frutas);
    console.log(frutas[2]);
    
    frutas[3] = "feijao";             // add no array uma variavel q nao existe
    console.log(frutas);
    
    frutas.push("PUSH");              // push ******ADICIONA NO ARRAY ITEM NAO EXISTENTE*********
    console.log(frutas);
    frutas.push(1,2,3,"pedro");
    
    organico = frutas.slice(5,-1);    // slice ***RECORTA UMA FATIA DO ARRAY E COLOCA EM OUTRA VARIAVEL/ARRAY****
    console.log(frutas);                  // frutas sem o slice                           [...'PUSH',1,2,3,'pedro']
    console.log(organico);                // frutas com o slice em outro array/variavel   [1,2,3]
                                            // 1º parametro= indice inicial  2º parametro= indice final(nao sera mostrado)

   //frutas.pop();                     // pop *****REMOCAO DO ULTIMO ITEM****
   console.log(frutas);
   //console.log(frutas.pop());  // se dermos um pop dentro do console.log ele apresentará SOMENTE o ultimo item do array

    teste = frutas.slice(-1);       //aqui podemos usar o slice para pegar somente o ultimo item do array
    console.log(teste)


let pessoas = ["JOAO", "MARIA", "CARLOS", "ANTONIO", "PEDRO", "REBECA", "JULIANA"];
    console.log(pessoas);
    console.log(pessoas.length);

    console.log(pessoas.sort()); // Sort() coloca os itens do array em ordem alfabetica *****ORDENAMENTO*****

    pessoas.splice(2,2);       //splice retira itens do array, primeiro a posicao e depois a quantidade de itens removidos
    console.log(pessoas);                               /**REMOCAO POR COORDENADA**/

    pessoas.shift();                  // 'Shift()' é o contrario do 'pop()', ou seja, remove o primeiro item
    console.log(pessoas);                               /**REMOCAO DO PRIMEIRO ITEM**/
    console.log(pessoas.length);     

    for(let i = 0; i < pessoas.length; i++){
        console.log(pessoas[i]);
    }

    let conta = 0
    while (conta < pessoas.length) {
        console.log(pessoas[conta++]);
    }


/*----------------------------------- DOM ---------------------------------------------*/

console.log(window.innerWidth);

console.log(screen.width);
console.log(screen.height);
window.onresize = function(){
   // console.log(screen.width);
    //document.write("MUDOU O TAMANHO DA TELA"); 
    document.getElementsByClassName('test').style= "color:red";
    document.getElementsByTagName('p')[0].style= "color: blue";  
    document.getElementsByTagName('p')[1].style= "color: red";  
    //document.getElementsByTagName('p')[2].innerHTML="texto novo";  
    document.getElementsByClassName('test').innerHTML="texto novo";  
}
/*
document.getElementsByTagName('p')[0].style= "color: blue"; // nao funcionou no chrome, somente no Edge Miscrosoft
document.getElementsByClassName('test').style="color: red";

    get element só funciona no console do navegador...

*/






