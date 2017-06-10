'use strict';

// Operatory

var liczbaPierwsza = 5;
var liczbaDruga = 2;

console.log(liczbaPierwsza % liczbaDruga);

while(liczbaPierwsza > liczbaDruga) {
    console.log(liczbaPierwsza);
    --liczbaPierwsza;
}

liczbaPierwsza = 5;
console.log(liczbaPierwsza);
liczbaPierwsza = liczbaPierwsza + 3;
console.log(liczbaPierwsza);

liczbaPierwsza = 5;
liczbaPierwsza += 3;
console.log(liczbaPierwsza);

liczbaPierwsza -= 1;
console.log(liczbaPierwsza);

liczbaPierwsza *= 2;
console.log(liczbaPierwsza);

liczbaPierwsza /= 2;
console.log(liczbaDruga);

// Operatory porównania - wynikiem jest wartość logiczna
if (2 == 2) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

if ('2' === 2) { // Dwa różne typy do porównania
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

// Operatory logiczne
if (2 <= 2 || 8 < 9) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

if (!(2 < 2)) { // Negacja odwraca wartość logiczną wyrażenia
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

// Operator warunkowy
var zmienna = (2 < 3)?'Dwa jest mniejsze od trzech':'To jest nieprawda';
console.log(zmienna);