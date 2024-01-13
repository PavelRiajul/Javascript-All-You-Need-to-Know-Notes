// Return something from a function.
//jokhon amra akta function theke kono kiso return korbo.tokhon oi  kebol amra see data ta ke akta variable a strore korte parbo.

function addAll(){
    var sum = 0;
    for(var i =0; i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}
var result = addAll(12,34,45)
var result1 = addAll(34,56,78)
console.log(result)
console.log(result1)

//problem: akta function create korbo person name a.input/parameter debo  name and email.return korbe oi person er object?

function person(name,email){
    return{
        name:name,
        email:email
    }
    console.log('riajul') //call hobe na
}
var pi = person("Riajul islam",'riajul@gmail.com')
console.log(pi)

// mathai rakhte hobe-> return statement jodi akbar call hoye jai,tahole tar neser code a jai thakok na keno seta are call hobena