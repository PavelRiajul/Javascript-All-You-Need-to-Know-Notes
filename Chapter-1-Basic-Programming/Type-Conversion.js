//Type conversion

//type conversion holo ->jokhon amra akta data-type theke onno arekta data-type a chole jae ba convert kori  tokhon see concept ta ke bola hoy type conversion.

var str = '1000';
var n = 10
//console.log(str * n) // multiply (-),(/),(%) korle number return korbe
//console.log(str + n) // kono akta string er sathe number concat(join) korle string return korbe.
//very ricky

//..........................................................
//string theke number convert
// console.log(Number(str))
// console.log(Number.parseInt(str))

//...............................................
//number theke string convert
// console.log(String(n))
// console.log(n.toString())

//...........................................
// console.log(Number(Infinity)) //Infinity thakbe
// console.log(String(Infinity)) //string a convert
// console.log(Boolean(Infinity)) //Boolean a convert true
// console.log(Boolean(-Infinity)) // true
// 

//...........................................................................
//Falsy Valuee
// javascript a kiso kiso value ase se value golo ke  by defult vabe  false dora hoy.kinta oi gula false na.
//kinto se value gola false na houa sotte o amader compilar  setake falsy bole.
//''
//0
//null
//undefined
//NAN
// console.log(Boolean(''))
// console.log(Boolean('Riajul')) //true
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(0))
// console.log(Boolean(-0))
// console.log(Boolean(23)) //true
// 
//boolean value ke string a convert
console.log(true)
var x = true
console.log(x.toString()) //string


//.................
//constructor
//boolean er jonno -> Boolean()
//number er jonno -> Number()
//string er jonno -> String()
