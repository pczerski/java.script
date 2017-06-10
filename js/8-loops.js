'use strict';

// Pętle

for (var i = 0; i < 5; i++) {
    console.log('Wykonanie pętli ' + i);
}

var studenci = ['Konrad', 'Andrzej', 'Artur', 'Ziutek', 'Balbina'];
for (var i = 1; i <= studenci.length; i++) {
    console.log('Student ' + i + ' ma na imię ' + studenci[i-1]);
}

var it = 0;
// Używamy kiedy nie jesteśmy pewni ile razy pętla może być wykonywana
while (it < 10) {
    console.log(it);
    it++;
}

do {
    console.log(it);
    it = Math.floor(Math.random() * 10)
} while (it != 5);

for (var i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

for (var i = 0; i < 50; i++) {
    if (i % 2 == 0) { // Jeżeli liczba parzysta, to wychodzi z pętli, ale wchodzi do kolejnej iteracji
        continue;
    }
    console.log(i);
}