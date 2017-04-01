'use strict';
/*

function multiply( parametr1, parametr2, parametr3){
    var result;
    result = parametr1 * parametr2 * parametr3;
    return result;
}

console.log("Wynik: " + multiply(3, 9, 10));

var funkcja = function(){
    return "Wynik :)";
}
console.log(funkcja);
console.log(funkcja());
*/

function circleArea (radius){
    var areaCircle;
    var obwodKola;
    areaCircle = Math.PI + Math.pow(radius, 2);
    obwodKola = 2*Math.PI * radius;
    console.log("Dla kola o promieniu "+ radius + ", pole wynosi:" + areaCircle + "oraz obwod wynosi:" + obwodKola);
    
}
console.log(circleArea(9));
console.log(circleArea(7));
console.log(circleArea(2));
console.log(circleArea(5));