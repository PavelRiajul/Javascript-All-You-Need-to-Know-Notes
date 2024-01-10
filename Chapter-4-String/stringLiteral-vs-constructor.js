//string literal  vs constructor


//var str = 'Something'
// single/double cotetion er bitore  text deye  see text ta kono akta variable a store  korar maddom take bola hoy string literal.

var str2 = String("something")
//string constructor
console.log(str2)

//number theke string convert...............................................
//var n= 10;
//var str = n+ '' //je kono string er sathe number ke jodi + deye concate kora hoy oita string a convert hoye jai.
//step2
//var str = n.toString()
//console.log(str)

//string constructor a convert
var n = 10
var str = String(n)
console.log(str)
console.log( typeof str)  //data type check