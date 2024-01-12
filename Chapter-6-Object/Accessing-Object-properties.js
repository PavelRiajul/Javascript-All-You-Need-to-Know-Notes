//Accessing Object properties
// akta object a access neyar 2 ta way ase.
//(1)-> dot notation (.)
//(2)->bracket/array notation([])

var obj = {
    a:30,
    b:90,
    c:800
}
//amra obj object er value ta access nete chacchi. amra obj object er b value ta access nete chacchi
console.log(obj.b)
console.log(obj.c)
console.log(obj.x + obj.c)

//array notation
console.log(obj['a'])
console.log(obj['a'] + obj['b'])

var show = 'a'
console.log(obj[show])

// kokhon amra dot notation use korbo are kokhon amra array notation use korbo
//jokhon amra janbo na  amader kon data neye kaj korte hobe ba kon prperty er data  ta explore/render/console korte hobe ,  seta jokhon amra janbo na, seta jokhon variable er maddome ashbe, tokhon amra array notation use korbo. are baki sob jaiga amra dot notation use korbo.