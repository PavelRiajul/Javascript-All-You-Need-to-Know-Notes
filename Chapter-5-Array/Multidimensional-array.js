// Multi Dimensional Array
//akta array er akadir array thake tokhon setake bole 2 dimensional array.abar see array er bitore  jodi akadik array thake tokho setaki bole 3 dimensional array.
//but besi use kora hoy  2 dimensional array neye kaj korbo.

//2 dimentional array neye amra kivabe/keno/kon sechoetion a kaj korbo?
// akta array te akta class er sobgolo students er physices number gola rakhabe .kento akta array te sob golo students er physices,math,chemistry,highermath er number  rakhte hobe.see khetre ak ak ta student er jonno 4 ta kore number lagse. ae jonno amra use korbo 2 dimentional array.
// var arr = [
//     [
//         [], //3 dimensional array
//         [],
//         []
//     ],
//     [], //2 dimensional array
//     []
// ]

var arr = [
    [23,45,76,45], //roll1 er number
    [45,66,99,76],
    [11,67,87,65]
]
//console.log(arr)
//console.log(arr[0][0])

//arr travers korle 2 dimentional er jonn  amader ke 2 ta loop neye kaj korte hobe-> akta loop hocchi row goloke  count korbe .arekta hocche just collum goloke count korbe.

for(var i =0;i<arr.length;i++){
    for(var j = 0;j<arr[i].length;j++){
        //console.log(arr[i][j])
        console.log('Element'+i+ ":"+arr[i][j])
    }
}