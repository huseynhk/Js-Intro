// Loops

// for loop


    //  for(let i = 1; i <= 10; i++){
    //     console.log(i)
    //  }

     //for (let i = 10; i > 0 ; i--)


     //////////////////////////////////////////////////////////////////

for(let i=1; i<=10; i++){

     if(i==3){
         console.log('Atalar' + i + 'den deyib :');
         continue;
     }

     if (i==7){
         console.log('en sevmediyim reqem : 7');
         break;
     }

     console.log(i);
}

     //////////////////////////////////////////////////////////////////


// var word = " ";

// for(let i=1; i<=10; i++){
     
//    word += "Senior.Az";
// }

// console.log(word)


     //////////////////////////////////////////////////////////////////


    //  var lord = " ";

    //  for(let i=1; i<=10; i++){
          
    //     lord += i;
    //  }
     
    //  console.log(lord)
     


////////////////////////////////////////////////////////////////////// WHILE

// for (let i=0; i<10;i++){
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }


     //////////////////////////////////////////////////////////////////// DO-While loop

// let i=0;
// do{
//   console.log(i);
//   i++;
// }while(i<10)

     //////////////////////////////////////////////////////////////////

let result=1;

for (let i = 10; i > 0 ; i--){

    //  result*=i;
    //  10 qeder  Butun reqemleri vurur

    if(i % 2 == 0){
        result*=i;
        result = result * i;
    }
    //10 a qeder ancaq Cutleri vurur
    //i % 2 == 1 Tekleri vurur
}

// console.log(result);


     //////////////////////////////////////////////////////////////////




