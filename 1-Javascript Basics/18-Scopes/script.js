// Scopes

// ** Global Scopes
var name = 'Aziz';
var age = 25;
console.log('Global scope' , name , age);
// EVVELCE FUNCTION VE IF-IN ICINDEKILERI COMMENTE AT VE GLOBAL SCOPUN HER YERDE ISDEDIYINI GOSTER


function logName(){
    var name = 'Arif';
    var age = '15';  
    console.log('Function scope',name,age);
}
logName();
// Logname-in icindekin sil altdaki Consolu aktiv ele bunuda yoxla age ve name yuxarida yazilan deyerler olacaq
// Fonksiyonlar oz scoplarini  yaradir.

// console.log('Function scope',name,age);



if(true){
    var name = 'Muller' 
    var age = 30;
    console.log('Block scope',name,age);
}
// console.log('Block scope',name,age);
// Blocklar oz scoplarini yarada bilmir..


//   Functionun icinde olan deyisiklikler Globala Tesir edmir
//   Globalda verilen deyer Functionun icinde deyisdede colde hemin deyer yene eyniqalir
//   If-de ise scopun icindede colundede eynidi 
   



// ** Local Scopes

// ES6 ile gelen let ve const block scope yardir.

console.log('*********************');

if(true){
    var model = 'Opel';
    let year = 2016;
    const color = 'white';
    console.log('block scope',model,year,color);
}
console.log(model);
// console.log(year);
// console.log(color);


// VAR YAZILANI IF-DEN COLDE CAGIRMAQ OLACAQ 
// LET VE CONST ISE CAGIRMAQ OLMAYACAQ





