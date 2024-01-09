//Loops are Statements which Execute some block of code repeatedly until the condition becomes flase
//loop holo akta satement je statement ta use kora hoy repeateted task gula reduce korar jonno.
//loops & and Conditions are Two main fundamental concepts core programming.

//There are mainly Three types of Loops
//(1)For loop
//(2)while Loop
//(3)do while loop

//**********************For loops************************************* */
//for(initializer->koto theke start hobe->variable a decleare korbo;condition;increment(i+=100)100 kore barabo,abar 1 kore o barate parbo){
//
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