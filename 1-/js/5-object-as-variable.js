'use strict';

var student = {
    imie: "Kaja",
    wzrost: 152,
    wyswietlDane: function() {
        console.log("Student ma na imie " + this.imie + " i ma " + this.wzrost + "cm wzrostu");
    }
}
student.wyswietlDane();
console.log(student.wzrost);
/*console.log(student); ta funkcja wyświetla wszystkie parametry funkcji, w tym przypadku wraz z metodami wyświetlania, to czasem zbyt dużo */