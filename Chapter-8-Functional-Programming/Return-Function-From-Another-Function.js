//Return Function From Another Function

//Higher order function er mainly 2 ta part
//(1)-> akta function ke argument akare arekta function a pass kora. jeta ke amra callback boli.
//(2)-> akta function theke kivabe arekta function return korte hoy.
//return kora amra dekhesi,kinto aeta kivabe kaj kore aeta amra akhon dekhbo.
//exmple:
// function greet(msg){
    // function greetings(name){
        // return msg +',' + name + '!'
    // }
    // return greetings
// }
//Good Morning sohokare data ta  arekta function er bitore store obosthai thakbe,jee way te data ta store obosthai seta ke clouser bole.
//kinto greet function ta instantly greetings function ke call kore debe na , se tore kore rakhbe.

// var gm = greet('Good Morning')  //akhon gm variable hocche nijosso   akta function
// var gn = greet('Good Night')
//console.log(typeof gm)
//gm function ta rakhse greetings function ta ke,jar bitore amra arguments o chaile pass korate pari.
// var msg = gm('Riajul islam') // gm er kaj hocche poro massage ta ke store kore rakhbe
// var msg2 = gn('Sirajul islam')
//console.log(msg)
//console.log(msg2)


//...........................................................
//exmple 2 -> base function create korbo,er bitore amra arekta function create korbo  name debo power.er bitore amra orginal power ta ke deye debo.je ae number ta power ber korte hobe.power ber korar concept hocche-> jotobar base(b) ase totobar power(n) take multioly korte hobe.

function base(b){
    return function(n){
        var result = 1 //jokhon ami multiply korbo ,result ami 0 rakhte parbo na , nonnotom 1 rakhte hobe.
        for(var i=0;i<b;i++){
            result *= n
        }
        return result
    }
}

var base10 = base(10)
//base dilam 10 -> akhon jodi amra base 10 er opore 2 dee,tahole 2 -> 10 bar multiply hobe.
console.log(base10(2))

var base5 = base(5)
console.log(base5(5))