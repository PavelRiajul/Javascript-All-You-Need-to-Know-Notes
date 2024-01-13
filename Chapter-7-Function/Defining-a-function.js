//Defining a Function in js

//function define 
//function->function keyword functionName->function name (){body}
//exmple:
// function functionName(){
    // 
// }

//2ta number add korbo
function add(){
    var a = 10
    var b = 90
    console.log(a+b)
}
//add() //-> function call
//function Invoking korar mane hocche ->function ta call kora ba function ta use kora.
//jokhon ami function ta ke call korbo . tokhon oi function ta kaj korbe. amra function ke jotobar khoshi totobar call korte parbo.
//ami chacchi function ta 10 bar print korte . er jonno amader bar bar function call korte hobe na. amra loop use korbo. loop er bitore function ta ke akbar call korlee hobe.
for(var i =0; i<10;i++){
    add()
}

//................................................
// var c = 40
// var d = 20
// function sub(){
    // return c -d 
// }
// console.log(sub())

function sub(){
    var c = 40
    var d = 20
    console.log(c-d)
}
sub()