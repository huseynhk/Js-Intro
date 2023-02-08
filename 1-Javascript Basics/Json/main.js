// let employees = {
//      model:"BMW",
//     price:25000,
//     quality:["color" , "engine" , "speed"],
//     value:true,
//     empty:null,
//     made_in:{
//         "country":"Germany",
//         "city":"Munchen"
//     },
//     year:2013,

//     employees:[
//         { "firstName":"John", "lastName":"Doe" },
//         { "firstName":"Anna", "lastName":"Smith" },
//         { "firstName":"Peter", "lastName":"Jones" }
//       ],
//       // date : new Date() ,  // js-in oz functionun stringe cevire bilir bizimcevirmeyimiz lazim deyil
//       getNumber : function() {
//          return 100;
//       }
// }

// employees.getNumber = employees.getNumber.toString() //oz functionumuzu  ayrica stringe cevirmek lazimdi//1ci bu yazilmalidi
// let convert = JSON.stringify(employees);//JSON-a cevirmek // stringe cevirib locala atmaq ucun
// document.write(convert)

/////////////////////////////////////PART2


// let cars = {
//     brand:"BMW",
//     year : 2023,
//     colors:["black" , "red" , 'white'],
//     model:{x5:2010 , x6:2015 , gallery:"Avto888"},
//     stock:true
// }
// localStorage.setItem('carsMemory', JSON.stringify(cars))


// let data = JSON.parse(localStorage.getItem("carsMemory"))
// console.log(data)
// console.log(data.model.gallery) // burda cars yazmaq lazim deyil
// console.log(data.colors[0])
// console.log(data.year)


/////////////////////////////////////PART3

let cars2 = {
    brand:"Mercedes",
    year : 2021,
    colors:["green" , "gray" , 'blue'],
    model:{e240:2011 , e220:2018 , gallery:"Avto888"},
    stock:true
}

 function saveLocal(key , value) {
    localStorage.setItem(key, JSON.stringify(value))
 }

 function getLocal(key) {
   return JSON.parse(localStorage.getItem(key))
 }

 if (getLocal('carsArray') === null) { //elde olunana melumat null-dursa yani melumat yoxdursa bunu save elesin
    saveLocal('carsArray', cars2)
 }

 
let tag = document.getElementById('title');
tag.innerText = getLocal('carsArray').colors[2]

