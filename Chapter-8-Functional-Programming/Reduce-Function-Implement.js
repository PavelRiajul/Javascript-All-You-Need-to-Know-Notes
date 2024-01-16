//Reduce Function
// Reduce method er kaj hocche -->  akta iterable obj ke ,iterable bolte moloto bojai ,akta obj/array jee array er bitore amra travers korte pari,to reduce function er kaj hocche ae function golor 2 ta value neye
//finaly akta result prodiuse kora.seta hote pare Addition,Abstruction,multiply,divide,jekono kiso.akta Array theke max number takee ber koe ana. eeven filter porjonto korte pare.

//.....................................................................
//first a amra array er sum ber korar kaje reduce method use korbo.

//var arr = [1,2,3,4,5]

//agee forEach/map/filter method a amra 3 ta argument/parameter  petam callback function a seta hocche --> value,index,array
//reduce method a amra 4 ta argument/parameter dete hobe --> previuas value(acomolator),current value, index,array
// var sum = arr.reduce(function(prev,curr){
    // return prev + curr
// } ,100) //100 hocche inichial value  innichial value 0 dete pari .aeta optional
// console.log(sum)


//.......................................................................
//reduce method use kore akta array theke max value takee ber kora anbo.

// var arr = [1,2,3,4,5]
// 
// var max = arr.reduce(function(prev,curr){
    // return Math.max(prev,curr)
// },0)
// 
// console.log(max)

//..................................................................
//akhon amra reduce method ta implement korbo

//amader ke argument akare -> arr,callback(cb),initial value(acumolator/acc)
var arr = [1,3,5,6,8,9]
function myReduce(arr,cb,acc){
    for(var i =0;i<arr.length;i++){
        acc = cb(acc,arr[i]) //callback a first argumet hishabe acc ke pass kore dete hobe ,je orginal value ta
    }
    return acc
}
//sum korbo
var sum = myReduce(arr,function(prev,curr){
    return prev + curr
},0)

//max value return korbo
var maxValue = myReduce(arr,function(prev,curr){
    return Math.max(prev,curr)
},0) //initialvalue dete hobe 0 

console.log(sum,maxValue)
