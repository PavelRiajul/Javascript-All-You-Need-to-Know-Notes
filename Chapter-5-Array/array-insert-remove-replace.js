//array inset/add remove and replace element

//var arr = [1,2,3,4,5,6,7,8]
//insert 9 to index 3

//arr[3] = 9 // 3 number index a 9 bosbe kinto  4 out hoyegese 4 ke replace kore 9 tar jaigata dokhol korse.
//arr.push(9)  //jokhon amara arry te kono element  push korbo tokhon aeta array er last a insert/add hobe.
//arr.unshift(9) // array unshift korle  array er elemnt sobar first a boche.

//splice method use kore -> insert9 to index 3 problem solve korte parbo
//splice(index,remove,insert/add)
//arr.splice(3,0,9)
//console.log(arr)

//..................................................
//array remove -> amra 3 number index er data ke remove korte chisi.
//var arr1 = [1,2,3,4,5,6,7,8]
//arr1[3] = undefined // delete hobe kinto undefind roye jabe
//arr1.pop() // jokhon amra pop korbo tokhon  last element remove hoye jabe
//arr1.shift() // shift korle amader 1st element remove hoye jabe

//splice method use kore --> 3 number index er data ke remove korte pari
//arr1.splice(3,1)
//console.log(arr1)

//................................................
//array replace
//3 number index a jee data silo oita ke remove kore 44  insert korte chacchi.
var arr2 = [1,2,3,4,5,6,7,8]
arr2.splice(3,1,44)
console.log(arr2)