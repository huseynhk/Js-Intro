// Operatörler

let val;
const a=10;
const b=5;
const c=5;
let   d=3;

// 1- Aritmetik Operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;
// consola atir sonra artirir
val = ++d;
// artirir sonra consola atir
val = --d;
val = d--;
// console.log(val);
// console.log(typeof val);



 // 2-  Assignment Operators
val = a;
val +=a; // val = val + a;
val -=a; // val = val - a;
val *=a; // val = val * a;
val /=a; // val = val / a;
val %=a; // val = val % a;
//  console.log(val);
//  console.log(typeof val);



// 3- Comparison Operatörleri
val = a==b; 
val = b==c;
val = b===c; 
val = 5 == '5';// değer
val = 5 === '5';// değer & type
val = a!=b;
val = a!==b;
val = a > b;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b;
// console.log(val);
// console.log(typeof val);



// 4- Logical Operators
   // && (And)
   // true  && true  => true
   // true  && false => false
   // false && false => false

   val=  (a>b) && (a>c) 
   val = (a>b) || (a<c)


   // || (Or)
 
   // true  && true  => true
   // true  && false => true
   // false && false => false

   // ! (Not)
   val = !(a>b)
   // !true  => false
   // !false => true

 console.log(val);
 console.log(typeof val);