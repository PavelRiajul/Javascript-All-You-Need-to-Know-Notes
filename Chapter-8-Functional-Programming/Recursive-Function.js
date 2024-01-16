//Recursive Function
// what is Recursive function?

// Recursive function hocce amon akta function jee function ta, nejee nejeke call korte pare.and nejee nejeke call korar maddome akta problem solve kore thakee.ae je nejee nejeke call korse , ae call kora jeno infinity na hoye jai infinity time na hoyejai ,ae jonno akta tarmonitor point set korte hoy.jokhon tarminitor point ta hit kore tokhon resursive function ta tarminit hoye jai ,tarpor stop hoye jai.

//Recursive hocche amon akta system ,jee system a ami loop chalate parbo,akta function call bar bar korar maddome  ami akta loop chalate pari,but sekhane amake for loop use korte hobe na.
//........................................................................
//exmple1
// function sayHi(n){
//n parameter-> hocche koto time ami console a print korte chacchi.
// if(n ===0){
    // return  //jokhon n er value 0 hoye jabe ,tokhon function ta return korbe.
// }
//jodi 0 na hoy see khetre agee screen a console
// console.log('hi i am riajul')
//  sayHi(n - 1)     // er por jee function ta amra define korse ,see function ta nejee nejekee abar call korbe.jeheto er akta parameter ase ,seheto sayHi() o amader ke akta argument dete hobe.kinto ae khetre amra 1 kom debo,jodi 10 input dee 9 print hobe.jodi sodo n provide korta tahole loop ta infinity time cholto.
// }
// sayHi(10)

//.................................................................

//exmple 2-> 1 theke 100 porjonto number er sum ber korbo
// function sum(n){
    // if(n === 1){
        // return 1  //jodi n er value 1 hoye jai tokhon se return korbe 1
    // }
  //  otherwise se return korbe
    // return n+ sum(n-1)
// }
// console.log(sum(5))

// implement ->recursive function 5 er sum ber korar kaj ta korse boro number theke --> 5+4+3+2+1 = 15

//...................................................................................
//exmple3- amra 5 factorial er man ber korta chacchi 
//5 er factorial holo -> 1*2*3*4*5 = 120

// function fact(n){
    // if(n ===1){
        // return 1
    // }
    // return n * fact(n-1)
// }
// console.log(fact(5))

//implement-> 5 er factorial joi amra recursive function use kore ber korte chai tahole,recursive code kaj korbe--> 5*4*3*2*1=120


//exmple4-> amra akta array er element golor sum ber korbo
var arr = [1,2,3,4,5]

//2 jinish provide korbo fiest a array tarpor array er lastIndex .lastindex count korbo karon amra 5 theke count korte corte 1 a ashbo.
function sumOfArray(arr, lastIndex){
    if(lastIndex < 0){
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr,lastIndex-1)
}
console.log(sumOfArray(arr, arr.length -1))