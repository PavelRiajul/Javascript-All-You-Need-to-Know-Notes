// Foreach Implementation
//  amader ke jodi akta array Travers korte bola hoy, tahole amra see array takee akta for loop chaleye  khob sohojee Travers korte pari. kinto ae way ta functional way na.
//are javascript a amra sobsomoy ae  functional way ta kee pradanno deye thakee. er karone amader code ta useable hoy,managable hoy and khob sohojee jekeo code ta bojte pari.

//akta array functional way te Travers korar jonno akta system implement obosthai ase. setar name hocche -->
//(forEach method) aeta akta javascript method . prottekta array er sathee amra ae method ta peye thakee.

//var arr = [1,2,3,4,5]

//arr.forEach(function(value,index,arr){})
//implement-> forEach method er kaj holo akta array ke 1st theke last porjonto travers kora.tarpot forEach(akta callback function dete hobe(callback function er argument akare 3 ta jinish pabo 1st parameter hesabe pabo akta value,tarpo index,tarpr  proper array takee ->arr))

// arr er sobo golo element sum korbo
// var sum = 0;
// arr.forEach(function(value,index,arr){
  //  console.log(value,index,arr)
    // sum += value
// })
// console.log(sum)

//..........................................................................
// kotha hocche ae  forEach function ta use kora kinto sohoj. ae function a kono for loop use korte hocche na kono variable declare korte hocche na ,akta condition set korte hocche na.

//akhon kotha hocche forEach method/system ta implement kora hoyese kivabe.jodi amader ke bola hoy aerokom akta system implement korte,jeheto amra callback function somporke jane, amra jani kivabe akta array Travers korte hoy.

var arr = [1,2,3,4,5]
//first a aee array ta ke akta manual/normal way te travers korbo,seta akta function er bitore korbo.
function forEachImplement(arr,cb){
    for(var i =0;i<arr.length;i++){
        //console.log(arr[i]) //derect console a implement korbo na
        // amra callback er maddome value debo
        cb(arr[i],i,arr)
    }
}
//sum korbo
var sum = 0;
forEachImplement(arr,function(value,index,arr){
    console.log(value,index,arr)
    sum += value
})
//console.log(sum)

//akta array Travers korar jonno oporer line golo amader must lagbee.array ta travers hoyar pore outpot jeta dekhte parsi, setee moloto vari korse-->(console.log(arr[i]))-> ae console.olg line ta moloto nirbot korse amraki array ta ke multiply korobo,naki Abstruction korbo,naki aekhan theke filter kore sodo matro Even number golake rakhbo,ki korbo,control korbo.tar jonno derectli console.log a implement korbo na.na kore ae line takee sere debo akta function er opore.amra kolpona kore nebo  forEach theke akta callback function(cb) keo ak jon amader ke provide korse.akhon ae callback(cb) function ta amra ja dara call korbo ,seei bisoee goloee amader ke porobortite callback function ta implement korar somoy argument akare ba parameter akare  amra pabo. 
//amra amader  forEach function create korbo.and oder forEach method ta behine the seen kivabe kaj korse seta amra bojte parbo.
//amra callbak function a value ber korbo.

//amra akta array er prottekta element er value 5 kore bara te chacchi
forEachImplement(arr,function(value,index,arr){
    arr[index] =value + 5
})
console.log(arr)