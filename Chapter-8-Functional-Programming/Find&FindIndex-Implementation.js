//Find& FindIndex Function Implementation


//Find method er kaj holo --> sapos akta 100 ta person er object ase ,ak akta object ak akta person er bitore  tar id ase,age ase onek kiso ase .ami akta specifice person er id jani,arkiso jani  na,oi id dara pora person tar  somosto object ta ke ber kore ana dorkar. ae kaj er jonno find method ta keja lagbe.

// amra akta object/array element ke kono akta kisor opor bitti kore find kore ante pari ,jodi sekhane  seei value ta thakee.jodi value ta na thakee tahole sekhane undefind return korbe.

//normaly akta array theke kono number find kormo.

// var arr = [1,34,5,78,98,6]
// 
// var result = arr.find(function(value){
    // return value == 6
// })
// console.log(result)

//...........................................
//same arekta method holo -> findIndex method
// aeta abar value ta return korbe na sepecific value ta index ta return korbe.

// var arr1 = [2,4,56,78,9,76]
// 
// var result = arr1.findIndex(function(value){
    // return value === 76
// })
//console.log(result) // 76 er index number hobe ->5


//find er implement korbo
var arr3 = [34,5,66,7,8,2]

function myFind(arr3,cb){
    for(var i = 0;i<arr3.length;i++){
      if(cb(arr3[i])){
        return arr3[i] //find korle
       // return i      //find index return korbe

      }
    }
}
//find korbo
var result = myFind(arr3,function(value){
    return value === 34
})
console.log(result)

//findIndex korbo
// var result2 = myFind(arr3,function(value){
    // return value === 34
// })
// console.log(result2)