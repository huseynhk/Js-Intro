// Loops in Array & Objects

let cars =['Bmw','Mercedes','Toyota'];

let people =[
   {firstName:'Ada',lastName:'Bilgi'},
   {firstName:'Yiğit',lastName:'Bilgi'},
   {firstName:'Çınar',lastName:'Turan'}
];
/////////////////////////////////////////////////////////// FOR

// Arrays

// for(let i=0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// Objects
 
// for (let i=0; i < people.length; i++){
//     console.log(people[i].firstName);
// }



/////////////////////////////////////////////////////////// FOR - IN

// Arrays

for(let i in cars){
   //  console.log(`index : ${i} value : ${cars[i]}`);
    console.log(cars[i]);

}

// Objects

for (let i in people){
   //  console.log(`index : ${i} value : ${people[i].firstName}`);
    console.log(people[i].firstName);
}



/////////////////////////////////////////////////////////// FOR - OF

// Arrays

for(let i of cars){
    console.log(i);

}

// Objects

for (let i of people){
    console.log(i.firstName);
}



// foreach

// cars.forEach(function(item){
//     console.log(item);
// });

// people.forEach(function(item){
//    console.log(item.firstName);
// });



// Map : returns an array
// let val = people.map(function(item){
//      return item.firstName + ' ' + item.lastName;
// });
//  console.log(val);


// let numbers = [1,5,16,7,10];
// let num = numbers.map(function(n){
//     return n*n;
// });
// console.log(num);