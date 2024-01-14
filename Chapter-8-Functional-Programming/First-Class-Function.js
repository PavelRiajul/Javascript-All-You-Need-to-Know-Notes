//First Class Function
function add(a,b){
    return a+b
}
// First class function with 6 rulls

//1. A Function can be Stored in a Variable
//-> akta function ke  akta variable er bitore store kora jabe.
var sum = add
//console.log(sum(10,20))
//console.log(sum(typeof sum))

//2. A Function can be stored in an Array.
//-> akta array element akareo akta function store kora jabe.
var arr = []
arr.push(add)
//console.log(arr) //array element er bitore function create
//console.log(arr[0](40,20)) //call korsi

//3. A Function can be Stored in an Object.
//-> akta object  a akta variable ba value store korte dekhsi.kinto akta object er bitore  akta function o store korte pari.
var obj ={
 sum: add
}
//console.log(obj)
//console.log(obj.sum(90,10))

//4. We can Create Function as Need.
//-> jokhon amader proyoujon ,jekhane amader proyoujon ,sekhanee amra function create korte pari.
setTimeout(function(){
    console.log('I have created.....')
},1000)
//5. We can pass Function as an Arguments.
// akta function icche korle argumet akare pass korte pari

//6. We can return Function from Another Function
//-> akta function  amra arekta function theke return korte pari.