// Functions

// function name(ad , soyAd){

//   console.log('Welcome..' + ad + " " + soyAd)

//   }

//   name('Niyazi' , 'Eliyev');



// function name(ad , soyAd){

//     return ad + " " + soyAd;

//   }

// // console.log(name('Niyazi' , 'Eliyev'))

// var ad = name('Eli' , 'Eliyev')

// console.log(ad)

// ///////////////////////////////////////////////////////////////

// function tonHesabla(kilo) {
//     var a = kilo  / 1000;
//     return a;
// }
// var b =  tonHesabla(2500);
// console.log(b)

// ///////////////////////////////////////////////////////////////

// function yasHesapla(dogumYili){
//     return 2023 - dogumYili;
// }

// let ageAda = yasHesapla(1992);
// let ageYigit = yasHesapla(1988);
// let ageCinar = yasHesapla(1990);

// console.log(ageAda);
// console.log(ageYigit);
// console.log(ageCinar);

// function EmekligeKacYilKaldi(dogumYili,isim){

//     let yas = yasHesapla(dogumYili);
//     let emeklilik = 65 - yas;

//     if(emeklilik > 0){
//         // > 0
//         console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
//     }
//     else{
//         console.log('Zaten emekli oldunuz');
//     }
// }

// EmekligeKacYilKaldi(1955,'Ada');
// EmekligeKacYilKaldi(2010,'Yiğit');
// EmekligeKacYilKaldi(1990,'Çınar');





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








// 1. Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.

// var list = [10, 100, 250, 30, 1, 45];
// list.sort(function (a, b) { return a - b });
// list.reverse()
// console.log(list);



// 2. ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.
//Hemin function geriye yeni bir array qaytarir. 
//Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
//Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

// let arr=["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

//  function MonthCount(arr){
//      console.log(arr.map((value,index)=>value=value+" - "+(index+1)));
//  }
//  MonthCount(arr);




// 3. String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq,
// hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
// Meselen: Functiona gelen string - "It is the result that matters",
// hemin functionun qaytardiqi array ise - [5,5,6] olacaq.

// let str="It is the result that matters";
// function WordCount(word) {
//     let arrayword = word.split(" ");
//   return arrayword.map((value)=> value = value.length);
    
// }

// console.log(WordCount(str));


//1.Bir method olsun iki parametr qəbul etsin və bu parametrlərdən
// birincini ikinciyə bölüb nəticəni geri qaytarsın.
// function Divide(num1, num2) {
//     return num1 / num2;
// }
// console.log(Divide(49, 7));


//2. Repeat deyə bir method olsun və iki parametr qəbul etsin biri "word" digəri "count" yəni bu şəkildə 
//"Repeat(string word, int count)" bu method göndərilən word-ü
// göndərilən count qədər yan-yana yazdırıb geri qaytarsın. Məsələn:
//Repeat("Ha!") //Ha!
//Repeat("Ha!", 2) //Ha!Ha!
//Repeat("Ha!", 3) //Ha!Ha!Ha!
// function Repeat(word, count) {
//     for (let i = 0; i < count; i++) {
//          console.log(word);
//     }
// }
// Repeat("Ha!", 5);


// 4. Sahe deyə Method(lar) yaradılır.
// Çevrənin sahəsi - S = p*r² (p=3)
function cevreninsahesi(r) {
    let p = 3;
    return p * r * r;
}
console.log(cevreninsahesi(2));

// Düzbucaqlının sahəsi - S = a*b
function duzbucaqlininsahesi(a, b) {
    return a * b;
}
console.log(duzbucaqlininsahesi(2, 5));

// Üçbucaqlının daxilinə çəkilmiş çevrənin sahəsi - S=p*r; p=(a+b+c)/2
function intosahe(a, b, c, r) {
    let p = (a + b + c) / 2;
    return p * r;
}
console.log(intosahe(2, 5, 7, 8)); 


//Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function Divide(n) {
//     n = prompt(" Eded Daxil Edin: ")
//     if (n % 3 === 0 && n % 7 === 0) {
//         document.write(n, " 3-e ve 7-e tam bolunur")
//     }
//     else {
//         document.write(n, " 3-e ve 7-e tam bolunmur")
//     }
// }
// Divide();

const age = 9;
const firstName = "Ehmed";

switch (true) {
  case age >= 0 && age <= 12:
    console.log(`${firstName} is a child`);
    break;
  case age >= 13 && age <= 19:
    console.log(`${firstName} is a teenager`);
    break;
  default:
    console.log(`${firstName} is an adult`);
}

let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}


