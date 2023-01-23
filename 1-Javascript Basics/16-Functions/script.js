// Functions

// function name(ad , soyAd){

//   console.log('Welcome..' + ad + " " + soyAd)

//   }

//   name('Niyazi' , 'Eliyev');



function name(ad , soyAd){

    return ad + " " + soyAd;

  }

// console.log(name('Niyazi' , 'Eliyev'))

var isim = name('Niyazi' , 'Eliyev')

console.log(isim)

///////////////////////////////////////////////////////////////

function tonHesabla(kilo) {
    var a = kilo  / 1000;
    return a;
}
var b =  tonHesabla(2500);
console.log(b)

///////////////////////////////////////////////////////////////

function yasHesapla(dogumYili){
    return 2023 - dogumYili;
}

let ageAda = yasHesapla(1992);
let ageYigit = yasHesapla(1988);
let ageCinar = yasHesapla(1990);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCinar);

function EmekligeKacYilKaldi(dogumYili,isim){

    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik > 0){
        // > 0
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
    }
    else{
        console.log('Zaten emekli oldunuz');
    }
}

EmekligeKacYilKaldi(1955,'Ada');
EmekligeKacYilKaldi(2010,'Yiğit');
EmekligeKacYilKaldi(1990,'Çınar');





///////////////////////////////////////////////////////////////


// Function Declarations

// function sum(a,b){
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,20));

// Function Expressions

// const sum = function(a,b){
//     var c = a+b;
//     return c;
// }



// const sum = function(a,b){

//     if(typeof a === 'undefined'){ a=0; }
//     if(typeof b === 'undefined'){ b=0; }

//     var c = a+b;
//     return c;
// }

// ES6 Default Parameters
// const sum = function(a=0,b=0){
//     var c = a+b;
//     return c;
// }



// function arguments(){
//     console.log(arguments)
// }
// arguments(10 ,20 ,30);


// function sumAll(){
//     var total = 0;
//     for(let i =0; i < arguments.length; i++){
//          total+=arguments[i];   
//     }
//     return total;
// }

//console.log(sum(10,30));
// console.log(sum(10)); // NaN
// console.log(sum(10,30,40,50));
// console.log(sumAll(10,20,30,40,50));
