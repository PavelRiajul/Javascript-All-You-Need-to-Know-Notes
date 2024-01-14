//Closure first look in javascript
// jodi kono scope er bitore  baerer kono scope theke kono data ache, tahole setakeei amra Closure bolbo.
//exmple:1
// var b = 10;
// function a(){
// console.log(b)
// }
// a()
//function hocche akta scope.  are variable b hocche baherer akta global variable

//exmple:2
var b = 10;  // global variable

function a(){
    var x = 5
     
    return function(){
        console.log(x)
    }
}
var abc = a()
console.log(abc())
// x variable  ta jokhon amra (return function) er bitore use korbo tokhon ee seta closure er ontorbokto hocche.
//karon return function akta function scope
//abar function a arekta function scope
// baerer scope (a function) theke, bitore arekta function(return function) a data ta aese kono rokom kono
//argument pass kora badee