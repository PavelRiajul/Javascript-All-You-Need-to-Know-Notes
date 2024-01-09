//logical operators
// &&(and)->2 ta -> expression ba value true hoite hobe, 
//||(or)-> 1ta true and 1ta false holeo hobe .abar 2 ta true hole hobe  
//************** !(not) //-> kono expression true hole false . and flase hole true hobe



var a = 10
var b = 20
var c = 50
var d = 40
//and operator
if(a>b & c>d){
    console.log('A is greatern than B and C is greater than D')
}else{
    console.log('At is one condition is false')
}

//or operator
if(a>b || c>d){
    console.log('A is greatern than B and C is greater than D')
}else{
    console.log('At is one condition is false')
}

//not operator
var check = !(a>b)
console.log(check)