'use strict';

var imie;
var imieDamskie = "Kaja";// notacja camelCase
var wiek = 37;

var kolor = "czerwony";

imie = "Sergio";

/*imie = imieDamskie;
console.log(imie);
console.log(imieDamskie);
console.log(kolor);*/

function wyswietlZmienna(){
    var imie = 180; // zmienna lokalna - przez var
    console.log(imie);
}

wyswietlZmienna();
console.log(imie);
