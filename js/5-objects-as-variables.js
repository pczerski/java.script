'use strict'

// Zmienne obiektowe
var student = {
    imie: 'Przemek',
    wzrost: 180,
    przedstawSie: function() {
        console.log('Cześć, mam na imię ' + this.imie + ' i mam ' + student.wzrost + ' cm wzrostu');
    }
}

student.przedstawSie();

console.log(student);