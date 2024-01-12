//Comparing Two objects
//2 ta object kibvabe compaire korbo

var obj1 = {
    a:10,
    b:20
}

var obj2 = {
    a:10,
    b:20
}

//console.log(obj1 === obj2) //false  outpot debe

// 2 ta object er data same thakle o , akta object compaire kora akto defecault. object jokhon compire hoy tokhon oi 2 ta object er memory location (obj1,obj2) compire kore dekhe. jeheto 2 ta object er memory location alada tai tara return korse false.

//amader ke 2 ta object compire korte hole object er prottek ta properties compire kore dekhte hobe.

// if(obj1.a === obj2.a && obj1.b === obj2.b){
    // console.log(true)
// }else{
    // console.log(false)
// }

//.............................
//amra 2 ta object ke jodi string a convert korte pari and tar bitore jodi compire chalae .tahole amra change ta dekhte parbo -> string compire korar khetre 
console.log(obj1)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))