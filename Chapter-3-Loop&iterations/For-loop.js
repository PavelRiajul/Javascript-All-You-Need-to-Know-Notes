
//**********************For loops************************************* */
//The javascript for loop iterate the elements for the fixed number of times.it should be used if number of iteration is khown.

//for(initializer->koto theke start hobe->variable a decleare korbo;condition;increment(i+=100)100 kore barabo,abar 1 kore o barate parbo){
// body --> body er bitore code golo bar bar re execute hobe,ba bar bar gorbe.
//}
//jodi amar nname ta 100 bar console a print korte chai.
// for(var i = 0; i<100;i++){
    // console.log((i+1),'Riajul islam')
// }

//......................
//1 theke 100 porjonto even and odd number check
// for(var i =0; i<=100;i++){
    // if(i %2==0){
        // console.log(i)
    // }
// }


// 1 theke 10 porjon number er sum
var sum = 0
for(var i = 1; i<=10;i++){
    console.log(sum + '+'+ i+ "="+ (sum + i))
    sum +=i

}
console.log( 'result=' + sum )