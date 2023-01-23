// Strings

const firstName = 'Leo';
const lastName = "Messi";
const age=35;

let val;

// string concatenation

val = firstName + " " + lastName;

val = 'Menim adim' + firstName + ' ' + lastName + ' ve yaşim ' + age + ' Parisde  yaşiyiram...';

//string concat
val = firstName.concat(' ',lastName);
console.log(val);

//////////////////////////////////////////////////////////////////////////////////

var x = '           I learn JavaScript and React JavaScript       ';

var y = x.length;
var y = x.indexOf('JavaScript');  // verdiyin stringin index nomresin tapir
var y = x.lastIndexOf('JavaScript'); // 2ci JavaScriptsozu elave ele
var y = x.search('JavaScript');
var y = x.includes('JavaScript');
var y = x.slice(8); // 8 e qeder kesecek
var y = x.slice(8 , 18); // 8 ve 18 arasi kesecek
var y = x.substring(8);
var y = x.substring(8 , 18); // menfi qebul elemir
var y = x.substr(8);
var y = x.substr(8 , 3); // 8 den sonra 3un goster demeydi
var y = x.replace("JavaScript" , "Css" );
var y = x.replace(/JavaScript/g, "Css" );
var y = x.toLowerCase();
var y = x.toUpperCase();
var y = x.trim();  
var y = x.charAt(19); // verdiyin reqeme gore stringi tapir
var y = x.charCodeAt(19); // UTF kod sistemindeki indexin tapir

// console.log(x.length);
console.log(y);



//////////////////////////////////////////////////////////////////////////////////

var a = 'alma , armud , banan';
var b = a.split( "," )  // stringi arrte cevirir
console.log(b[0]);



