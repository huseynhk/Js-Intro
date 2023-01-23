// if/else statements

const firstName='Sena';
const age = 19;
const isStudent = false;
const school = 'university';
              //high school


              /////////////////////////////////////////////////////////////

// var x = 3;
// var y = 5;

// if(x < y) {
//     console.log('x y-den kicikdir')
// }
// else{
//     console.log('x y-den boyukdur')

// }


              /////////////////////////////////////////////////////////////


// if(firstName === 'Sena'){
//     console.log('Merhaba Sena');
// }

// if (age === 19){
//     console.log('yaşınız 19');
// }

// if (isStudent){
//     console.log('Merhaba öğrenci');
// }else{
//     console.log('Merhaba işler nasıl');
// }


              /////////////////////////////////////////////////////////////

            //   1 ci ancaq schoolu yoxla sonra ikisinide yoxla
if (age>=18){

        // (school == 'university')

    if ((school == 'university') || (school == 'high school')){
        console.log('ehliyet alabilirsiniz');

    } else{
        console.log('eğitim durumunuz yetersiz');
    }

}else{
    console.log('ehliyet alamazsınız');
}



              /////////////////////////////////////////////////////////////


// if (age > 0  && age<12 ){
//     console.log(`${firstName} is a child`);
// }else if (age >=13 && age <=19){
//     console.log(`${firstName} is a teenager`);
// }else{
//     console.log(`${firstName} is an adult`);
// }


              /////////////////////////////////////////////////////////////

//undefined

let id = '123456789';
// sonra ID - ini commente at

if (typeof id !== 'undefined'){
    console.log('id: '+id);
}else{
    console.log('no id');
}

              /////////////////////////////////////////////////////////////



// var result = prompt("who's there ? ");

// if(result == 'cancel'){
//     console.log('cancelled');

// }else if(result == 'Admin'){

//     var password = prompt('Enter your password : ');

//     if(password =='cancel'){
//         console.log('cancelled');

//     }else if(password== '1234'){
//         console.log('welcome Admin');

//     }else{
//         console.log('wrong password');
//     }

// }else{
//     console.log('I dont know you');
// }



              /////////////////////////////////////////////////////////////


var saat = new Date().getHours();

if( (6 < saat) && (saat < 12)){ 
     
    console.log('Good Morning.. ');

}

else if ((saat >= 12) && (saat < 19)){

    console.log('Good AfterNoon.. ');

}

else if ((saat <= 19) && (saat < 23)){

    console.log('Good Evening.. ');

}

else{
    console.log('Good Night.. ');

}
