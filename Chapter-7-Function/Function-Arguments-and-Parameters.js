//Function Arguments and Parameters

// function sub(){
//     var c = 40
//     var d = 20
//     console.log(c-d)
// }

// function add(){
//     var a = 10
//     var b = 90
//     console.log(a+b)
// }
// sub() 
// add()

//sob somoy to amara 40 20 and 10 90 neye kaj korbo na . amader to data change hote pare. amra janina amader kokhon kon data neye kaj korte hobe. function add, function sub aegola hocce function er processing section.
//...........................................................................
//akhone amra function input kora dekhbo.

//function add(parameter/Input){}
//parameter hocche simple variable declaretion.

//2 ta number sum korbo
// function add(a,b){
    // var result = a+b
    // console.log(result)
// }
// add(20,10)
// add(34,56)   //argument pass
//amra akta function code akbar lekhlam see code ta bar bar addition er kaje use korte parbo.

//problem; 3 ta array create korbo . and 3 ta array er alada alada sumition ta chacchi.mane 3 ta array er bitore joto golo element ase sob golo element er alada alada  sub ta chicchi.

var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [7,8,9]

// var sum1 = 0
// for(var i=0;i<arr1.length;i++){
    // sum1+= arr1[i]
// }
// console.log(sum1)
// 
// var sum2 = 0
// for(var i=0;i<arr2.length;i++){
    // sum2+= arr2[i]
// }
// console.log(sum2)
// 
// var sum3 = 0
// for(var i=0;i<arr3.length;i++){
    // sum3+= arr3[i]
// }
// console.log(sum3)

//kinto amader bar bar code define korte hocchi.kinto  amra jodi akta function method create kori tahole million billion array er sum ber korte parbe.
var sum = 0
function sumOfArray(arr){
  var sum = 0
  for(var i =0;i<arr.length;i++){
    sum += arr[i]
  }
  console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)
