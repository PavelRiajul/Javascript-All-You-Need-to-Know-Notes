//Callback Function

//amra higher oder function a akta function er bitore arekta function argument akare pass kora jai ,ae system taee sondor vabee implement kora hocche Callback er maddome.er maddome abstruction hocche.

//amra akta function create korbo .and argument akare amra 2 ta jinish pass korbo/parameter(a,b) -> ae a are b first a amra + korbo. tarpor  amra - kore 2 ta variable er bitore rakhbo.tarpor amra dission nebo ki korbo.

// function simple(a,b){
    // var c = a+b
    // var d = a-b

    //c are d data tar + korte chacchi + amra bitore na kore function er baheri korbo. and arekta function create korbo jar num sum.

    //akhon sum function ta simple function er bitor theke call korbo.tar mane akta function jekhanee define kora hokna keno seei function ta amra arekta function theke define korte pari.
    // var result = sum(c,d)
    // return result
// }
// function sum(a,b){
    // return a+b
// }

// simple function er kaj korse holo -> simple function 2 ta number  ke argument akare necche, neyar pore seei 2 tar +,- ber korse. and finaly tar sum ber korse.
//console.log(simple(5,8))//outpot ashbe 10
// implement kori->var c= 5+8=13, var d=5-8=(-3). and var result sum(13+(-3))=10

//akhon kotha hocche amader same jodi akta interface dorkar hoy subtruction(-) korar khetre.tahole simple function ta kaje debe na.kinto first implemention samee thakbe(var c=a+b,var d = a-b).just var result er khetre sum na hoye subtruction(-) / Multiply(*hobe.kinto akhon possible na. amader simple function er moto kore arekta sumple function create korte hobe jekhane amra (subtruction (-)) korte parbo.abar jodi multiply kora lagee tahole amader abar code copy korte hobe.tahole kinto amader code dublicate hoye jacci.
//kinto aetar akta splution ase --> solution hocche amra simple function  a argument akare/parameter a bole debo je akta function amra pabo. ae function tar name bole thake callback function(cb).and sum er poriborte callback function use korbo. jodi callback ta sum kore thake tahole var result a sum result ashbe,jodi sub kori ,tahole sub result ashbe.

//noton kore implement kori
function sample(a,b,cb)/*cb holo callback function*/{
var c = a + b
var d = a - b
var result = cb(c,d) //cb hoilo callback function
return result
}
function sum(a,b){
    return a + b
}
var result = sum(5,8,sum) //aekhetre sum function ta ke kinto argument akare pass korsi.
console.log(result)
//implement-> amra kinto sample function use koree sumetion koresi.kono kisoe korini just amra sum sunction ta ke derict ne neye callback er moto kore neyesi.
//tarjonno amra khob sohojee sample sunction use kore substruc(-),multiply(*) korte parbo.same function use kore. ae system take bole callback

//exmple: amrajodi substruc(-) korte chai
//1st argument 4 nebo 2nd argument 3 nebo. and 3rd argument heshabe amaderke akta callback function dete hobe aecallback function er o koikta argument/paramenet thakbe .ae function ta  amra agee theke define korini ,akhon amra define korbo.javascript a akta trams ase
//first class function er trams amader jekhane dorkar sekhanee amra akta function create korte pari.
var result2 = sample(5,8, function(c,d){
//console.log(c,d)
return c - d
})
 console.log(result2)


 //sample function ta use kore multiply korbo
 var result3 = sample(10,3,function(c,d){
    return c * d
 })
 console.log(result3)

 //amra kolpona kore nicche je user akta function amader ke input/paramer hehsabe debe,seei function ta amra call kore rakhsi agee thekee .user jokhon main function a call korbe (simple function), see amader ke argument akare callback function(cb) ta provide korbe.

 //arekta kotha holo --> amaderke neje theke callback function create korte hobe na,keo na keo amader jonno callback function create koree rakhbe.beshirbag khetree.beshirbag khetree dekhbo je amra libray function golo use korsi framwork golo use korsi,sekhanee amader jonno system create korae ase,just amaderke main function golo call korte hocche.and jokhon amra main function call korbo  sekhane amader akta callbak function implement korte hocche,jeta kina akta annonomus function.amra sobsomoy annonomus function tai dekhe thabo,