'use strict'

function Person(imie, waga, wzrost) 
{

    this.imie = imie;
    this.wzrost = wzrost;
    this.waga = waga;
    this.bmi = function () 
    {
        return this.waga / Math.pow(this.wzrost / 100, 2);
    }
}
var zygmunt = new Person('Zygmunt', 77, 180);
console.log(zygmunt.imie + "Twoje BMI wynosi: " + zygmunt.bmi());
