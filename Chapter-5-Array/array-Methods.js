//array Methods

//var arr = [3,5,7,9]
//join() method
//console.log(arr.join("|"))// join() method er majkhane amamder ke separetor ta bole dete hobe join('/,| etc')

// fill() method -> jekono value dara full fill kore debe................................
//arr.fill(0) //pora array 0 dara fullfill hoye jabe.
//console.log(arr)

//..................................................................
//concat method 2 ta array ke marge kore new array generate korbo.
//  var arr4 = [2,4,5,7,9]
//  var arr6 = [65,34,32,1]
//   var newArray = arr4.concat(arr6)
//  console.log(newArray)


//....................................................................
//var arrys = [2,34,56,5]
//Array.isArray --> aetar kaj holo check korbe arras aeta array kina jodi sotto hoy tahole return korbe true .na hole false
//console.log(Array.isArray(arrys))

//..........................................
//Array.from()-> use korbo akta array theke arekta array create korar jonno
// var arr = [2,3,4,6,8]
// var arr2 = Array.from(arr)
// console.log(arr2)

//...........................................................................
//javascript array concat() method
//The javascript array concat() method combines two or more arrays and returns a new string.
//concat() method holo --> 2 ta array ke aksathe jora lagano ba addition kora.
//exmple;
// var arr1 = [1,2,3,4,5]
// var arr2 = [6,7,8,9,10]
// var result = arr1.concat(arr2)
// console.log(result)

//........................................................................
//javascript Array.from()
// The from() method creates a new array that holds the shallow copy from an array or iterable object.when applied to string, each word gets converted to an array element in the new array.
//arrayfrom() deye akta string ke bengee convert kore array re convert kora jai.

// var arr = Array.from("Riajul islam")
// console.log(arr)


//.............................................................................
//Array filter() method -> array.filter(callbackFunction)
//The javascript array filter() method filter and extract the element of an array that satisfying the provided condition.
// filter() method er kaj holo kono item ke khuje ber kora.
//exmple: marks array er bitor je item gola 50 theke boro oi item gola return korbe.
var marks = [12,56,99,65,67]
//  var result =marks.filter(function(item){
//    return item>50
//  })
//  console.log(result)
//*******onno way */
// function check(value){
    // return value>50
// }
// console.log(marks.filter(check))


//.............................................................................
//array find() method
//The javascript array find() method returns the first element of the given array that satisfies the provided function condition.
//kono akta element return korle je condition deya hobe, tar first element   provide korbe.
//exmple:
// var arr = [2,34,56,76,44,33]
// var result = arr.find(function(value){
//     return value>50
// })
// console.log(result)

//...............................................................................
//array findIndex() method
// kono akta element return korle je condition deya hobe ,tar first element er index number provide korbe.

// var arr = [2,34,56,76,44,33]
// var result = arr.findIndex(function(value){
    // return value>70
// })
// console.log(result)


//...............................................................................
//array forEach() method
//The javascript array forEach() method is used to invoke the specified function once for each array element.
//array theke element goloke forEach() method deye be kore ante parbo.

// var arr = [23,56,78,98,65,3]
// arr.forEach(function(item){
    // console.log(item)
// })


//...............................................................................
//array include() method
//includes() method use kore array er bitore specifice  element ase kina see dission ta hobe boolean->trye or false.

// var arr1 = [12,45,67,89,76,5]
// var result = arr1.includes(12)
// console.log(result)


//.................................................................................
//array indexof() method
//indexof() method use kore  akta array er bitore  kono akta specifice element/item er index number ta koto seta bre korbo.
//exmple:

// var arr2 = [34,67,89,65]
// var results = arr2.indexOf(34)
// console.log(results)


//.............................................................................
// array pop method
//The javascript array pop() method removes the last element from the given array and return that element.
//exmple:

// var arr = [12,34,67,78,9]
// arr.pop()
// console.log(arr)

//.............................................................................
//array push() method 
//The javascript array push() method adds one or more elements to the end of the given array.
//kono akra array   er bitore last a  element jog kora
//exmple:
// var arr = [12,45,65,3]
// arr.push(100)
// console.log(arr)

//.............................................................................
//array reverse() method
//The javascript array reverse() method changes the sequence of elements of the given array and returns the reverse sequence.
//reverse holo kono akta array ke oltiye deya
//exmple:

// var arr5 = [23,45,77,98,6]
// arr5.reverse()
// console.log(arr5)

//.............................................................................
//array sort() method
// akta array er bitore alomelo element goloke small theke boro and boro theke small a sajano.

// var arr = [34,55,32,34,67,2,34,6]
// var result = arr.sort() // sototheke boro
// var result = arr.sort().reverse()  // boro theke sot0
// console.log(result)


//..............................................................................
//array splice() method 
//splice(index,removeCount,item)
//3 number index a jee data silo oita ke remove kore 100  insert korte chacchi.
// var myNumber = [23,45,67,5,33,2]
// myNumber.splice(3,1,100)
// console.log(myNumber)