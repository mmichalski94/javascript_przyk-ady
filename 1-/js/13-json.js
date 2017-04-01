'use strict';

/*var jsonOsoby = {
   /* "osoby": [
        {imie: "Krystian", nazwisko: "Dziopa", wzrost: "180", oczy: "niebieskie", zainteresowania: [ {nazwa: "podroze"}, {nazwa: "gotowanie"}] },
        {imie: "Kasia", nazwisko: "Zając", wzrost: "170", oczy: "zielone"},
        {imie: "Łukasz", nazwisko: "Badocha", wzrost: "170", oczy: "duże"}
    ]
    
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"},
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]

}


jsonOsoby.pracownicy.forEach(function(element, index){
    
    console.log((index) + ' - ' + element.firstName + ' ' + element.lastName);
})*/

/*
create number
check oddity
print result
*/
var tablica = [];
for (var j = 0; j<=150; j++){
    var rand = Math.floor(Math.random() * 100);
    tablica.push(rand);
}//tablica tworząca 100 losowych elementów



//var tablica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < tablica.length; i++) {
    if (tablica[i] % 2 == 0) {
        console.log(tablica[i] + ' jest parzysta');
    } else {
        console.log(tablica[i] + ' jest nieparzysta');
    }

}

