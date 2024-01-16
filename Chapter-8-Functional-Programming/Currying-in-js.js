//Curring in javascript
// main concept hocche --> akta function a jodi multiple argument thakee,seei multiple argument goloke amra benge felbo.akta function a amra akta kore argument pass korbo.

//and 1st function a jokhon akta   argument pass korbo,oi function ta arekta function return korbe jeta abar 2nd argument neba.seii function ta abar arekta function return korbe ,jeta abar 3rd argument neba.


//normal function
function add(a,b,c){
    return a+b+c
}
console.log(add(23,43,35))

//akhon ae normal function tar currying version ta implement korbo.

function currying(a){
    return function(b){
        return function(c){
            return a+ b+ c
        }
    }
}

//function call korar pore  3 ta argument aksate pass korte parbo na, akta akta kore pass korte hobe.
var result = currying(5)(10)(19)
console.log(result)