// Object Methods

// var obj = {
    // x:20,
    // y:90,
    // z:78
// }

//bject.keys() --> method use korbo ,jodi akta object er bitore  ki ki properties/keys ase  se golo ke akta array er bitore rakhbo , seekhetre ami Object.keys method use korbo.

//console.log(Object.keys(obj))

//object er  sobgola value jodi akta array er bitore rakhte chai tahole Object.values() method use korbo.
//console.log(Object.values(obj))


//............................................................
//amra entries() method  -->  akta 2 dimentional array return korbe. prottek ta array er element hobe akekta kore array. and ae array er bitore  keys and value hobe.
//console.log(Object.entries(obj))

//............................................
//amra akta object theke arekta object create/copy korbo

var obj1={
    x:29,
    z:90
}

//old way new obj create
// var obj2 = obj1
// obj2.x=79
// obj2.z=100
// console.log(obj1)
// console.log(obj2)

//new way
var obj2 = Object.assign({},obj1)
obj2.x=300
console.log(obj1) //obj1 change hobe na
console.log(obj2)