//Argument Object of a Function
//parameter bad deye o amra function define korte pari, and bahir theke data provide korte pari.argument object use kore.
//jokhon akta function defaine kora hocche, tokho jee variable golo neya hocche seta holo function parameters. are jokhon function ta call kora hocchi tokhon jede real data golo provide kora hocche oita holo function Arguments.data pass korata hocche Arguments.

// function test(a,b,c){
//     console.log(arguments)  //arguments obj ta holo array like obj
// }
// test(12,34,56)

//amra jodi parameter bole na dee .taholeo amra arguments theke data provide korte pari. arguments object use kore.
// function test(){
 //   console.log(arguments)
//    loop chalae
    // for(var i =0; i<arguments.length;i++){
        // console.log(arguments[i])
    // }
// }
// test(12,34,5)

//sum korbo
function addAll(){
    var sum = 0
    for(var i =0;i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum)
}
addAll(12,3,5,77) //argument pass
addAll(87 ,45,334,222)