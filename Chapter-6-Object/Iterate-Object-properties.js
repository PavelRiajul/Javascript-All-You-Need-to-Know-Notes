//iterate object properties
//object ke 1st properties  theke last properties  porjonto travers korbo

var obj ={
    x:12,
    y:90,
    z:89
}
// in operator use kore  check korbo object er kono akta property.
//console.log('x' in obj) // x property ta obj namok object er bitoreki ase jodithake tahole true outpot debe,na thakle  false return korbe
//console.log('p' in obj)

//.......................................
//object ke travers korbo amra dekhte chacchi object er bitore ki ki properties ase. use korbo (for in loop)
// for in loop iterate/travers korbe object er key er opor bitti kore.->obj er properties ber korbo.

// for(var i in obj){
//     console.log(i)
// }

// akhon obj er value travers korbo
for(var i  in obj){
    console.log(i+ ":" +obj[i])
}


