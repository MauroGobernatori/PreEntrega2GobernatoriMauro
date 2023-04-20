let nombre = "";
let puntaje = 0;
let scores = [];
let ordenarPor = "";
let orden = "";

// function ordenarScoreboard(ordenarPor, orden){
//     let actual;

//     if(ordenarPor == 'alf'){
//         if(orden == 'dsc'){
//             for(i=1;i<scores.length;i++){
//                 for(j=i;j>0; j--){
//                     if(scores[i].nombre > scores[j-1].nombre){
//                         actual = scores[i];
//                         scores[i] = scores[j-1];
//                         scores[j-1] = actual;
//                         i--;
//                     }
//                 }
//             }
//         }else{
//             for(i=1;i<scores.length;i++){
//                 for(j=i;j>0; j--){
//                     if(scores[i].nombre < scores[j-1].nombre){
//                         actual = scores[i];
//                         scores[i] = scores[j-1];
//                         scores[j-1] = actual;
//                         i--;
//                     }
//                 }
//             }
//         }
//     }else{
//         if(orden == 'dsc'){
//             for(i=1;i<scores.length;i++){
//                 for(j=i;j>0; j--){
//                     if(parseInt(scores[i].puntaje) > parseInt(scores[j-1].puntaje)){
//                         actual = scores[i];
//                         scores[i] = scores[j-1];
//                         scores[j-1] = actual;
//                         i--;
//                     }
//                 }
//             }
//         }else{
//             for(i=1;i<scores.length;i++){
//                 for(j=i;j>0; j--){
//                     if(parseInt(scores[i].puntaje) < parseInt(scores[j-1].puntaje)){
//                         actual = scores[i];
//                         scores[i] = scores[j-1];
//                         scores[j-1] = actual;
//                         i--;
//                     }
//                 }
//             }
//         }
//     }
// };

function ordenarScoreboard(ordenarPor, orden){
    if(ordenarPor == 'alf'){
        if(orden == 'dsc'){
            scores.sort(function (a, b) {
                if (a.nombre < b.nombre){
                    return 1;
                }else if (b.nombre < a.nombre){
                    return -1;
                }
                return 0;
            });
        }else{
            scores.sort(function (a, b) {
                if (a.nombre > b.nombre){
                    return 1;
                }else if (b.nombre > a.nombre){
                    return -1;
                }
                return 0;
            });
        }
    }else{
        if(orden == 'dsc'){
            scores.sort(function (a, b) {
                if (a.puntaje < b.puntaje){
                    return 1;
                }else if (b.puntaje < a.puntaje){
                    return -1;
                }
                return 0;
            });
        }else{
            scores.sort(function (a, b) {
                if (a.puntaje > b.puntaje){
                    return 1;
                }else if (b.puntaje > a.puntaje){
                    return -1;
                }
                return 0;
            });
        }
    }
};

// function mostrarScoreboard(){
//     console.log("Scoreboard");
//     for(i=0;i<scores.length;i++){
//         console.log("Posición "+(i+1)+" => Nombre: "+scores[i].nombre+" - Puntaje: "+scores[i].puntaje);
//     }
// }

function mostrarScoreboard(){
    console.log("Scoreboard");
    let i = 1;
    scores.forEach(element => {
        console.log("Posición "+i+" => Nombre: "+element.nombre+" - Puntaje: "+element.puntaje);
        i++;
    });
}

do{
    nombre = prompt("Ingrese nombre de jugador.");
    do{
        puntaje = prompt("Ingrese puntaje. (Número entero)");
    }while(puntaje != parseInt(puntaje) || parseInt(puntaje) < 0);
    let persona = new Persona(nombre, puntaje);
    scores.push(persona);
}while(prompt("Ingrese 'S' para agregar otro jugador.") == 'S');

do{
    ordenarPor = prompt("¿Desea ordenar alfabéticamente o por cantidad de puntos? (alf/pts)");
}while(ordenarPor != 'alf' && ordenarPor != 'pts');

do{
    orden = prompt("¿Desea ordenar de forma ascendente o descendente? (asc/dsc)");
}while(orden != 'asc' && orden != 'dsc');

ordenarScoreboard(ordenarPor, orden);
mostrarScoreboard();