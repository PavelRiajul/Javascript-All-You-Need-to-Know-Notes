//Function Expression
//amra akta function ke expression maddome define korbo.

//general function define
// function add(a,b){
    // return a+b
// }

//function expression
//akta variable er bitore  function declaration je rakha jai , aetake bola hou function expression
// var addition = function add(a,b){
//   return a+b
// }
// console.log(addition(12,34))

//jokhon amra kono function er name debo na tokon oi function take bolbo anonomus function. are anonumous function er maddomee function expression use korte parsi.
//exmple:1
var addition = function(a,b){
    return a+b
  }
  console.log(addition(12,34))

  //example2
  setTimeout(function(){
console.log('I will call after 5 second')
  },5000)

  var another = addition
  console.log(another(23,45))
    //amra addition function ke another variable a store korlam.jodio another er console.log ta sobar pore.settimeout ta agee,kinto agee another er console ta print hoise ,tar 5 second por setTimout ta print hoise--> ae behavior ta ki bola hoy -> (asynchronous)