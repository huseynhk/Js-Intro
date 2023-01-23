// Arrays

let names = ['Icardi','Muslera','Gomis','Oliveria'];
let years = [2017,1970,1990,1998,2012];
let mix = ['Ronaldo','Messi',1983,null,undefined,['Cinema','Book']];

// Get array item
// console.log(names[0])
// console.log(names[1])
// console.log(names);
// console.log(names[names.length-1]);


// Set array item
// Arreyin axirina elave edecek
//  names[names.length]='Messi';
//  console.log(names);



// Add item
// years.push(1986);
// years.unshift(1986);
// console.log(years);


// Remove item
// years.pop();
// years.shift();
// console.log(years);


//indexof
// let index = names.indexOf('Gomis');
// console.log(' index : ' + index);

// reverse
// names.reverse();
// console.log(names);

// sort
// years.sort();
// console.log(years);

// function compare(a,b){
//     if(a>b) return 1;
//     if(a==b) return 0;
//     if (a<b) return -1;
// }
// console.log(years.sort(compare)); 


//concat
//  let value = years.concat(names);
//  console.log(value);


// splice
// console.log(names);
// names.splice(2,1); // 2den sonra 1in goturecek
// names.splice(2,1,'Dembele'); //2den sonra 1in elave decek 1in silecey
// console.log(names);


// console.log(names);
// // let sl = names.slice(2); // goturduyun gosterir ona gore ayri deyisken lazimdi
// let sl = names.slice(2 , 4);
// console.log(sl);



//////////////////////////////////////////////////////////////////////////////////

// function over18(year){
//     let age = 2023 - year;
//     return age >= 18;
// }

// find
// let val = years.find(over18); // ancaq 1in tapacaq

// filter
// let val = years.filter(over18);
// console.log(val);

//////////////////////////////////////////////////////////////////////////////////


///////////////////////////////  MAP


var say = [17 , 92 , 26 , 12 , 44 , 77];

// function vurIkiye(value , index , array) {
//     return value * 2 ;
// }

// say2 = say.map(vurIkiye)

// console.log(say);
// console.log(say2);

///////////////////////////////  FILTER

// function test(value) {
//     return value > 50 ;
// }

// say2 = say.filter(test)

// console.log(say);
// console.log(say2);

///////////////////////////////  Reduce

// function test(total , value) {

//     return total +  value;
// }
// say2 = say.reduce(test)

// console.log(say);
// console.log(say2);
// total 0 qebul olunur

///////////////////////////////  Every

// function test(value) {

//     return value > 50;
//     // 50 den kicik bir element varsa FALSE olacaq  Hamisi  boyuk olmalidi
//     // Elementler hamisi 50den boyukdurse TRUE olacaq
// }

// say2 = say.every(test)

// console.log(say);
// console.log(say2);

///////////////////////////////  Some

// function test(value) {

//     return value > 50;
//     // 50 den kicik bir element varsa TRUE olacaq  Biri boyuk olsa Bes Edir
//     // hec biri boyuk olmasa FALSE 
// }

// say2 = say.some(test)

// console.log(say);
// console.log(say2);


///////////////////////////////  Find

// function test(value) {

//     return value > 50;
//     // 50 den kicik bir element varsa TRUE olacaq  Biri boyuk olsa Bes Edir
//     // hec biri boyuk olmasa FALSE 
// }

// say2 = say.find(test)
///////////////findIndex

// console.log(say);
// console.log(say2);

