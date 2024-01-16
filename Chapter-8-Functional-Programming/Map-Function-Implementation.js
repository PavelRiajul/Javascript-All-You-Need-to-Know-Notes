//Map Function
// map function holo --> array er prottekta element ke 1st theke last projonto tach korbe/Travers korbe.  orginal array orginal ee thakbe ,amra new akra array create korbo, kinto orginal array ke modify kore, modifyed value dara akta new array create hobe.
//manee  2 ta array thakbe akta hocche orginal array ,arekta modify array.
//map hocche  --> new akra array create kore, see array ta kee return kore.
//example:

//var arr = [1,2,3]

//var sqrArr = arr.map(function(value){
    //aekhan theke jeeta return korbe,seete amader new array er element akare joba hobe
    //return Math.random()*100
 //     return value * value
//})
//console.log(arr)
//console.log(sqrArr)


//Map Function amra create korbo kivabe
//akhon amra map function implement korbo

// var arr = [1,2,3,4]
// function myMap(arr){
    // var newArr=[] //new array
  //  for loop dara orginal array ta travers korbo
    // for(var i=0;i<arr.length;i++){
   //     akhon amra  nirdisto logic dara value change korbo. change hoye akta new array er bitore thakbe.
        // var temp = arr[i] * arr[i]
        // newArr.push(temp)  // new array te push korbo
    // }
    // return newArr
// }
// console.log(myMap(arr))


//akhon amar dorkar nee squre korar amar dorkar (qube korar). othoba amar dorkar 3dara multiply korar. tar jonno amra  callback use korbo ,sodo amader ke (var temp) line ta change korte hobe amra ae line ta callback er bitore deye debo,baki sob line thik thakbe

var arr = [1,2,3,4]
function myMap(arr,cb){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
        var temp = cb(arr[i])
        newArr.push(temp)
    }
    return newArr
}
//qb korbo
 var qb = myMap(arr,function(value){
    return value * value * value
})

//10dara multiply korbo
var multiply= myMap(arr,function(value){
   return value * 10
})

console.log(qb)
console.log(multiply)