// // Strings

// const firstName = 'Leo';
// const lastName = "Messi";
// const age=35;

// let val;

// // string concatenation

// val = firstName + " " + lastName;

// val = 'Menim adim' + firstName + ' ' + lastName + ' ve yaşim ' + age + ' Parisde  yaşiyiram...';

// //string concat
// val = firstName.concat(' ',lastName);
// console.log(val);

// //////////////////////////////////////////////////////////////////////////////////

// var x = '           I learn JavaScript and React JavaScript       ';

// var y = x.length;
// var y = x.indexOf('JavaScript');  // verdiyin stringin index nomresin tapir
// var y = x.lastIndexOf('JavaScript'); // 2ci JavaScriptsozu elave ele
// var y = x.search('JavaScript');
// var y = x.includes('JavaScript');
// var y = x.slice(8); // 8 e qeder kesecek
// var y = x.slice(8 , 18); // 8 ve 18 arasi kesecek
// var y = x.substring(8);
// var y = x.substring(8 , 18); // menfi qebul elemir
// var y = x.substr(8);
// var y = x.substr(8 , 3); // 8 den sonra 3un goster demeydi
// var y = x.replace("JavaScript" , "Css" );
// var y = x.replace(/JavaScript/g, "Css" );
// var y = x.toLowerCase();
// var y = x.toUpperCase();
// var y = x.trim();  
// var y = x.charAt(19); // verdiyin reqeme gore stringi tapir

// // console.log(x.length);
// console.log(y);



// //////////////////////////////////////////////////////////////////////////////////

var sentences = 'I learn JavaScript and React';
// var word = sentences.split("a")  // bu halda a-lari goturecek
 var word = sentences.split(" ") // bele yoxlayanda consolda , elave edecek
//  var word = sentences.split(" " , 3)

console.log(word); //2ci-den sonra [0] elave et



