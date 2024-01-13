//Function Scoping in javascript
//akta variable declare korar pore, see variable ta  kothai declare korle ,kotha theke setake access neya jabe ,aetae control kore thake scope.
//exmple:
//var a = 'abc'
// jekono js file er bitore kono akta variable define kori,and seta jodi ami browser a  run kori ,sekhetre ae variable ta (Global variable hobe.).browser a window object er sathe attect hoye jabe.
//variable ta je kono jaiga theke access korte parbo.

//javascript a ES6 er agee porjonto  ES5 projonto  javascript a block  bolte sodo matro function ke bojay.
//tar mane function sara onno je kono jaigai akta variable declare korle sob jaiga theke  seta accessble.
//exmple:

// if(true){
    // if(true){
        // var b = 'i am b'
    // }
    // console.log(b)
// }
// console.log(b)

//function er bitore
var a = 'abc' //Global ee variable declare
function x(){
    //var a =50
    function y(){
        //var a = 10
        console.log(a)
        //inner function theke kono variable declare korle outer function theke seta acesseble na.
    }
    console.log(a)
    y()
}
x()
// je kono childed tar parent er data te access nete parbe.je parant se tar child er data te kono access pabe na.
//jodi y function er bitore var a=10 variable ta na thakto y fynction er vitore kono variable khoje pai ni tokhon se upper scope a jeba mane parant er kase jabe,abar parant a jodi variable na pai tahole Gloval variable a jabe.


//arekta exmple:
function test(n){

    function a(){
  return n%3 == 0
    }

    function b(){
        return n%5==0
    }
    if(a() && b()){
        console.log(n+'is divisible by both 3 and 5')
    }else{
        console.log('Not a valid number')
    }
}
test(15)

// Scope neye koikta think mone rakhte hobe --> 
//Global variable sobar kas theke accesseble.
//akta child function er kono data te  ta parent function er kono access nee.
//akta parent function er kono data te child function er access ase.
