'use strict'

// pętla while


// jak zawiesić przeglądarkę

/*
var it = 0;
while( it != 6 ) {
    console.log(it);
    // losowanie od 1 do 10
    it = Math.floor(Math.random()*10 + 1);
}
*/

/*
var i;
do{
    console.log(i);
    // losowanie od 1 do 10
    i = Math.floor(Math.random()*10 + 1);
} while( i != 6 );
*/
/*var a = 0;
while (a < 10){
    console.log(a++);
    
    if( a == 5){
        break;
    }
}*/

/*var a = 0;
while (a < 10){
    console.log(a++);
    
    if( a == 5){
        break;
    }
}*/

/*for ( var b = 0; b < 10; ++b){
    if( b== 5){
        continue;
    }
    else{
        console.log(b);
    }
        
}*/

var tablica = [1,null,'Ala ma kota', 4, 3]
for (var i=0; i<tablica.length; i++){
    
    if(typeof tablica[i] != 'number'){
        continue;
    } else{
        console.log(tablica[i]);
    }
}