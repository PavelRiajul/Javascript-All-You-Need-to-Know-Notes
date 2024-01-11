//Search Data
//kevabe akta array theke data search kore ana jai. search kore ene dekhbo tar inex number koto. seta aduu amader array te ase kina.jodi amader array te kono data thake tahole bolbo ase se data ta ato number index a ase. are jodi na thake tahole bolbo paoya jai ni.

var arr = [2,45,6,8,9,2,56,3,11,5]

var find  = 5 // amra dekhbo arr er bitore  find variable er data ta ase kina 
var isFound = false
for( var i = 0; i<arr.length;i++){
    if(arr[i]== find){
        console.log('data found at index ',i)
        isFound=true
        break
    }
}

if (!isFound){
    console.log('data not found')
}


