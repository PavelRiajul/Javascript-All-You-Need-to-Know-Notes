//sort,some,every function

// sorting algorithom use kore  callback function er maddome biltin sorting algithom use kore akta array ba object ke sort korte pari.

var persons = [
    {
        name:"A",
        age:24
    },
    {
        name:"B",
        age:19
    },
    {
        name:"C",
        age:26
    },
    {
        name:"D",
        age:21
    }
]
var arr = [4,5,7,9,3,2,5,7,8,-9,9,4,2,6,8,6,9,4,3,-4]
//ae persons array er bitore object er element golo akta name er khetre akta order mintain kore ase,kinto age er khetre order maintain kora nae.ami jodi persons array ta ke  age dara sort korte chae/mane soto theke boro sajate chai
//soto theke boro te sajano ke bola hoy assinding order
//boro theke soto te sajano ke bola hoy desinding order

//abar akta array ase arr name a , er bitor number set kora ase je golo randomli set kora ase, kono rokom kono order maintain korse na.

//akhon amra arr takee sort korbo callback function use kore
//callback function a 2 ta value pabo -> ae a are b ak akta array element
arr.sort(function(a,b){
   if(a>b){
    return 1
   }else if(a<b){
    return -1
   }else{
    return 0
   }
})
//console.log(arr)

//akhon amra object  persons sort korbo age er maddome
//person er khetre a are b  paro object ta hocche ak  akta  array element
persons.sort(function(a,b){
    if(a.age > b.age){
        return 1
    }else if(a.age< b.age){
        return -1
    }else{
        return 0
    }
})
//console.log(persons)


//.............................................................................
//every method
var arr3 = [34,56,2,1,4,5,9,7,6,4,3,6,56,4,2,3,7]
//ae arr3 bitor  check korbo  arr3 er bitore sobgolo element even number kina. jodi na hoy tahole amader ke akta boolean return korbe, true or false
var res1 = arr3.every(function(value){
    return value % 2 ==0
})
//console.log(res1)

//check korbo ae array  er bito sob golo element positive number kina jodi positive hoy tahole return korbe true ,are nagative hole false
var res2 = arr3.every(function(value){
    return value>0
})
//console.log(res2)


//......................................................................
//some method 
//some method er kaj holo  -->  every method er olto --> see check korbe ae array er bitore akta hole o kono number thakbe jee number ta negetive,jodi akta number negetive pai ,tokhon se return korbe true.
//abar akta array element er bitor kom pokkhe akta even number ase kina jodi thake true return korbe.

var arr5 = [34,56,2,1,4,5,9,7,6,4,3,6,56,4,2,3,7,-1]

//even number ase kina  check
var res3 = arr5.some(function(value){
    return value % 2 == 0
})
console.log(res3)

//negative number ase kina check korbo
var res4 = arr5.some(function(value){
    return value <0
})
console.log(res4)