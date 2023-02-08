// Scopes

// ** Global Scopes
var surName = 'Aziz';
var age = 25;
console.log('Global scope' , surName , age);
// EVVELCE FUNCTION VE IF-IN ICINDEKILERI COMMENTE AT VE GLOBAL SCOPUN HER YERDE ISDEDIYINI YOXLA


function logName(){
     var surName = 'Arif';
     var age = '15';
     console.log('Function scope',surName,age);
}
logName();
// Logname-in icindekin sil altdaki Consolu aktiv ele bunuda yoxla age ve name yuxarida yazilan deyerler olacaq
// Fonksiyonlar oz scoplarini  yaradir , yani bu deyer ancaq functionun ozuna aid olur colde let , const, var isdemir
 console.log('Function scope',surName,age);



if(true){
    var surName = 'Muller'
    var age = 30;
    console.log('Block scope',surName,age);
}
console.log('Block scope',surName,age);
// Blocklar oz scoplarini yarada bilmir..
// Globaldaki deyerler VAR ile verildiyi ucun if-in icinde ve yaxud colunde onu deyismek olur
// LET ve CONST-da is if-in icinde olani deyisecek amma  colde olan ise yuxardaki deyeri alacaq

//   Functionun icinde olan deyisiklikler Globala Tesir edmir
//   Globalda verilen deyer Functionun icinde deyisdede colde hemin deyer yene eyni qalir
//   If-de ise scopun icindede colundede eynidi




// ** Local Scopes

// ES6 ile gelen let ve const block scope yaradir.

console.log('*********************');

if(true){
    var model = 'Opel Vectra';
    let year = 2000;
    const color = 'red';
    console.log('block scope',model,year,color);
}
console.log(model);
// console.log(year);
// console.log(color);


// VAR YAZILANI IF-DEN COLDE CAGIRMAQ VE DEYISMEK OLACAQ
// LET VE CONST ISE CAGIRMAQ OLMAYACAQ ANCAQ GLOBALDAN



///////////////  VAR

var a = 100;
var a = 200; // Isleyecek
a = 300; // Isleyecek
console.log(a)


//////////////// LET

let b = 20;
// let b = 30; // Error verecek
b = 30; // Isleyecek
console.log(b)


////////////// CONST

const c = 50;
// const c= 60; // Error verecek
// c = 70; // Error verecek
console.log(c)

