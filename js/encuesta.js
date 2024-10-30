/* Enunciado: Simulación de una encuesta de satisfacción

Descripción: Imagina que trabajas en un restaurante y se realizó una encuesta de satisfacción con los clientes. Las respuestas de la encuesta se registran como números enteros entre 1 y 10, donde:

1 significa "muy insatisfecho"
10 significa "muy satisfecho"
Las respuestas ya estan cargadas en el siguiente array, respuestas: [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10]*/

// 1-El promedio de satisfacción.
const respuestas = [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10];
let sumaArrays = 0;

for (let i=0; i < respuestas.length; i++ ){
sumaArrays += respuestas[i];
}

const promedio = sumaArrays / respuestas.length;

document.write(`El promedio de satisfacción sobre un total de ${respuestas.length} respuestas es de:  ${promedio}<br>`)

// 2-Cuántos clientes dieron una calificación mayor o igual a 7 (considerados satisfechos).

let clientesSatisfechos = 0;

for (let j=0; j < respuestas.length; j++){
    if(respuestas[j] >=7)
        clientesSatisfechos++;
}
document.write(`El número de clientes considerados satisfechos, fue de: ${clientesSatisfechos}<br>`)
    
// 3-Cuántos clientes dieron una calificación menor o igual a 4 (considerados insatisfechos).

let clientesInsatisfechos = 0;

for(let k=0; k < respuestas.length; k++){
    if(respuestas[k] < 7)
        clientesInsatisfechos++;
}
document.write(`El número de clientes considerados insatisfechos, fue de: ${clientesInsatisfechos}<br>`)

// 4-El porcentaje de clientes que están satisfechos e insatisfechos.


for (let l = 0; l < respuestas.length; l++) {
    if (respuestas[l] >= 7) {
        clientesSatisfechos++;
    } else {
        clientesInsatisfechos++;
    }
}

const totalClientes = respuestas.length;
const porcentajeSatisfechos = Math.round((clientesSatisfechos / totalClientes) * 100);
const porcentajeInsatisfechos = Math.round((clientesInsatisfechos / totalClientes) * 100);

document.write(`El porcentaje de clientes considerados satisfechos es de ${porcentajeSatisfechos} %; y el porcentaje de insatisfechos es de ${porcentajeInsatisfechos} % <br>`)

// 5-La calificación que se repitió más veces (moda).


const conteo = [];


for (let m = 0; m < respuestas.length; m++) {
    const calificacion = respuestas[m];
    conteo[calificacion] = (conteo[calificacion] || 0) + 1; 
}


let moda = null;
let maxOcurrencias = 0;

for (const calificacion in conteo) {
    if (conteo[calificacion] > maxOcurrencias) {
        maxOcurrencias = conteo[calificacion];
        moda = calificacion; 
    }
}


document.write(`La calificación que se repitió más veces (moda) es: ${moda} (repetida ${maxOcurrencias} veces)`);