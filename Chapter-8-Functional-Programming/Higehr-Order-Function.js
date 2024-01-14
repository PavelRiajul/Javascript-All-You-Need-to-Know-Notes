//Higher Order Function

//akta function theke jokhon amra arekta function ke return korte pari,othoba  akta function er bitore argument akare jokhon amra arekta function ke pass korte pari,tokhon seei function takee bolbo Higher order Function.
//Exmple:

//1st a 1 ta function create korbo

// function add(a,b){
    // return a+b
// }
//ae add function ta amra iccha kore arekta function er bitore pass korte parbo
//manipulate function ta jokhon call korsi tokhon amra 3 ta argument chacchi -->a,b,func valu cgacchi.and (a)parameter are (b)parameter first + korbo and tarpore amra - korbo.
// function manipulate(a,b,func){
//    var c = a+b
//    var d = a-b
 //  akhon amra new function create korbo jee function ta amra return korte chacchi
//    function multiply(){
    // var m = func(a,b) //func parameter ta add function ke passkorbe
    // return c*d*m
//    }
//    return multiply
//    
// }
//first a manipulate call korle multiply amra return pabo. and 3 ta jinis dara call korte hobe.3 tar modee first 2 ta holo number debo , last 1 ta holo func-> func holo (add function)
// var multiply = manipulate(3,4,add)
// console.log(multiply())

//................ae rokom kore  kora jai
function add(a,b){
    return a+b
}
function manipulate(a,b,func){
    var c = a+b
    var d = a-b

    // function multiply(){
        // var m = func(a,b)
        // return c*d*m
        // 
    // }
    // aevabe kora jai
    return function(){
        var m = func(a,b)
        return c*d*m
        
    }
}
var multiply = manipulate(3,4,add)
console.log(multiply())