'use strict';
// Zmienne liczowe
var liczba = 10.04;

console.log(liczba);

// Zmienne tekstowe
var tekst = '  Dzień dobry!';

console.log(tekst);

console.log(tekst.split(" "));

console.log(tekst.trim());

// Zmienne logiczne
var zmiennaLogiczna = (2+2 == 5);

console.log(zmiennaLogiczna);

if (zmiennaLogiczna) {
    console.log('Warunek spełniony');
} else {
    console.log('Warunek niespełniony');
}

// Typy specjalne
var zmiennaNiezdefiniowana;

console.log(zmiennaNiezdefiniowana);

var tablica = [null, 'Łukasz', 'Michał'];

console.log(tablica[0]);

// Sprawdzanie typu zmiennej
console.log(typeof zmiennaLogiczna);
console.log(typeof liczba);
