'use strict';

var wzrostMateusz = 190;
var wzrostKaji = 250;

// warunek if

if (wzrostKaji == wzrostMateusz) {
    console.log("Są równi wzrostem");
}

if (wzrostKaji < wzrostMateusz) {

    console.log("Kaja jest niższa");

} else if (wzrostKaji > wzrostMateusz) {

    console.log("Kaja jest wyższa");

} else if (wzrostKaji == wzrostMateusz) {

    console.log("Są równi wzrostem");

}
var kolor = 'zielony';

switch(kolor){
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('Inny kolor');
        
}
