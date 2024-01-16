//Filter function
//var arr = [4,6,8,9,5,2,3]
//filter holo -->amader ae arr theke arekta new array generate korte hobe, kiso logic er opore bitti kore.
//logic ta amon hote pare ae arr theke sodo matro Even number je golo ase se golo deye akta new array ganarate korte hobe.abar hote pare odd number neye akta array create korte hobe.ata o hote pare 5 theke boro number golo neye akta array create korte hobe. ae logic er opor bitti kore ,nirdisti data goloke ber kore ana ke bola hoy filter kora. tar manee akta array bitore theke oneke data golor modee jee data golo amader dorkar see data golo amra filter kore ante pari.and callbak function er maddome. filter amader sobsomy kaje lagbe

//var filterArray = arr.filter(function(value){
    //return value % 2 ==0   //even number
    //return value % 2 == 1    // odd number
    // return value >5         //5 theke boro

//})
//console.log(filterArray)



//.............................................
//filter method ta ke implement korbo/banabo.sodo Even number goloke return korbe
// var arr = [2,4,6,8,9,7]
// 
// function myFilter(arr){
    // var newArry = []
    // for(var i =0;i<arr.length;i++){
    //  if(arr[i] %2 == 0){
        // newArry.push(arr[i])
    //  }
    // }
    // return newArry
// }
// console.log(myFilter(arr))


//kinto odd number jokhon return korte jabo , tokhoee amader arekta function return korte hobe.ae problem ta solve korte pari callback er maddome

var arr = [2,4,6,8,9,7]

function myFilter(arr,cb){
    var newArry = []
    for(var i =0;i<arr.length;i++){
     if(cb(arr[i],i,arr)){
        newArry.push(arr[i])
     }
    }
    return newArry
}
//console.log(myFilter(arr))

console.log(myFilter(arr,function(value){
    return value % 2 == 0
}))

console.log(myFilter(arr,function(value){
    return value % 2 == 1
}))