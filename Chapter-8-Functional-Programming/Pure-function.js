//What is Pure Function?

//(1)->It Returns the same result if given the same arguments.
//--> joni ami same agruments provide korte thaki function tar bitore tahole se million/billion bar  tahole see sobsomy er jonne ,agee jee result ta return koresilo same result tai see return korbe.

//(2)->It does not cause any observable side effects.
// aeta dekhar moto kono side effect create kore na.

function sqr(n){
    return n * n
}
//console.log(sqr(2))
//console.log(sqr(4))
//kono somoy ae function ta 4 sara are kono kiso return korte parbe na.karon amra function tar bitore provide koresi number jeta n variable er bitore store korsi jeta parameter ta hocche (n).and return korsi n*n.sobmoy er jonno tar n*n ee return kora dorkar.mathematical ee sobsomoy jodi n*n return kora hoy .tahole sobsomoy er jonno seta same result return korbe.
//amader programming er  amader project er kono jaigai  ae code are kono effect felbe na.jeheto aeta kono effect felbe na seheto aeta akta Pure Function.

//.......................

var n = 10;
function sideEffect(){
    n =100
}
sideEffect()  //function call korle  baere theke n er vale change hoye 100 hoye jabe.
//console.log(n)
//aeta pure function na ,aetar akta side effect ase.
//ae function jokhon call hocche ,tokhon baerer akta variable ke  se change kore decche.tahole ae function ta pure function na.

//exmple2:

var point ={
    x:45,
    y:30
}
function pointpoint(point){
    //point value change
    point.x=100
    point.y=200
console.log(point)
}
pointpoint(point)
console.log(point) 
//ae function ta argument thik akare nese, kinto  jotobaree amra point argument akare pass korse totbar ee see same outpot decche. kinto se bahirer je point variable ta silo  seei variable/object take change korse.
//aetake amra side effect bolo.aeta pure function na.