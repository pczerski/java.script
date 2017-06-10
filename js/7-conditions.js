'use strict';

// Instrukcje warunkowe

var wzrostKasi = 167;
var wzrostPiotra = 170;

if (wzrostKasi < wzrostPiotra) {
    console.log('To jest prawda');
}

if (wzrostKasi > wzrostPiotra) {
    console.log('To jest prawda');
} else {
    console.log('To jest fałsz');
}

if (wzrostKasi > wzrostPiotra) {
    console.log('To jest prawda');
} else if (wzrostKasi == wzrostPiotra) {
    console.log('Są tego samego wzrostu');
} else {
    console.log('To jest fałsz');
}

var kolor = 'zielony';
switch (kolor) {
    case 'czerwony': 
        console.log('Czerwony');
        break;
    case 'zielony':
        console.log('Zielony');
        break;
    default:
        console.log('Inny kolor');
}


