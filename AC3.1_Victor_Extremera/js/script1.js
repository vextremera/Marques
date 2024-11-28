const HTMLdiv = document.getElementById('resultats');
const h1 = document.createElement('h1');
const p = document.createElement('p');

let Exercici1 = "Suma de dos números"
let Exercici2 = "Comprovació de visibilitat"
let Exercici3 = "Intercanvi de variables"

let exercicis = [Exercici1, Exercici2, Exercici3]

// * SCRIPT OPERADORS
let numero1 = 15;
let numero2 = 3;

function sumaNumeros(a, b){
    return a + b;
}

function divisible(a, b){
    // return if a / b is divisible
    return a % b === 0;
}

for(let i = 0; i < 3; i){
    h1.textContent = 'Solució Exercici ' + (i+1) + ': ' + exercicis(i);
    if(i == 0) p.textContent += 'La suma de '+ numero1 +' + '+ numero2 +' = '+ sumaNumeros(numero1, numero2);
    else if (i == 1){
        if(divisible) p.textContent += 'El número '+ (i+1) + ' és divisible per '+ numero2;
    }
    
}