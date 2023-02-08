// switch statements

let category = 'telefon';

switch(category){

    case 'telefon':
       console.log('telefon kategorisi');
    break;

    case 'bilgisayar':
       console.log('bilgisayar kategorisi');
    break;

    default:
       console.log('yanlış kategori');
}



let day = new Date().getDay();

switch (day) {
  case 0:
    day = "Bazar Gunu";
    break;

  case 1:
    day = "1ci gun";
    break;

  case 2:
    day = "2ci gun";
    break;

  case 3:
    day = "3cu gun";
    break;

  case 4:
    day = "4cu gun";
    break;

  case 5:
    day = "5ci gun";
    break;

  case 6:
    day = "6ci gun";
    break;
}

console.log(`bugün ${day}`);

// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         day = 'Hafta Sonu';
//         break;

//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         day = 'Hafta içi';
//         break;
// }

// console.log(`bugün ${day}`);

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

// program using switch statement
// program for a simple calculator


let result;
const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}



// multiple case switch program
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

