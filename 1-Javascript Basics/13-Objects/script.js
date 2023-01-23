// Object Literals

let val;

let person = {
    firstName : 'Çınar',
    lastName : 'Turan',
    age : 25,
    hobbies : ['music','game'],
    
    address : {
        city : 'Kocaeli',
        country : 'Türkiye'
    },

    birthYear : function(){
        return 2023- this.age;
    }
};

val = person;
val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.address['city'];
val = person.birthYear();


console.log(val);
console.log(typeof person);

// let people = [
//                 {firstName : 'Çınar',lastName:'Turan'},
//                 {firstName : 'Sena',lastName:'Tural'},
//                 {firstName : 'Seda',lastName:'Turab'}
//              ];


// val = people[0];
// val = people[1].firstName;
// val = people[2].lastName;


// for(let i =0; i < people.length; i++){
//     console.log(people[i].lastName);
// }

// console.log(val);
// console.log(typeof people);

