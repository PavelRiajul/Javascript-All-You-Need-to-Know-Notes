//Setting object properties
// amra jevabe dot notation and array notation use kore object er property te acces neyetar value ta dekhte pari/use korte pari.
//same vabe amra update korte pari.

var obj = {
    x:23,
    z:32
}
//update/x  er value ke replace korbo
obj.x=100
//new data assign/anry/new property create
obj.a=200
console.log(obj)
// jodi ami kono akta property te access neya chesta kori, jee property ta agee theke silo na,kinto see property te access nete chesta korsi,onno language hole Error show korto.kinto javascript a object a  kono error throo korbe na undefind show korbe
console.log(obj.f)

//array notation use..........
// obj['z']=234  //z er value update
// var prop =  'lx' 
// obj[prop]=900  // new data add
// console.log(obj)
//shortcut
obj['lx']=234
console.log(obj)