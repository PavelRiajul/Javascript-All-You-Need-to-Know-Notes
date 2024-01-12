//while loop
// The javascript while loop iterates the elements for the infinte number of times.it should be used if number of iteration is not known.

// jodi first time a condition false hoi tahole loop er body er bitore kono code execude hobe na.
// inisilizer variable ->var i = 0
//while(condition){
    //body
//i++
//}

//................
// var i = 0
// while(i<10){
    // console.log((i+1),'Riajul islam')
    // i++
// }

//........................
var isRunning = true

while(isRunning){
    var rand =Math.floor( Math.random()*10+1)
    if(rand===9){
        console.log('winner is chicken dinner')
        isRunning = false
    }else{
        console.log('You have got'+rand)
    }
}