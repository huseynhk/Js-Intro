

let val;

///////////////////////// number to string
val = String(10)

// bool to string
val = String(true)

// date to string
val = String(new Date())

// array to string
val = String([1,2,3,4])

// toString()

val = (10).toString()
val = (false).toString()

console.log(val)
console.log(typeof val)
console.log(val.length)

////////////////////////////// string to number
let num1=Number('10');
let num2=Number('20');
console.log(num1 + num2)


val = Number('10')
val = Number(true)
val = Number(false)
val = Number(null)
val = Number('A')
val = Number([1,2,3,4])
console.log(val)
console.log(typeof val)

// parseInt()
// parseFloat()

val = parseInt('10.5')
val = parseFloat('10.5')

console.log(val)
console.log(typeof val)
console.log(val.toFixed(2))

