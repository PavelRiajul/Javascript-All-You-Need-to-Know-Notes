//string length
//length count hoy -> 1 theke
//index count hoy -> 0 theke

//akta string er length ber korbo chartAt() mrthod use kore
//var str = "Some String"
//var str2 = str.charAt(12)
//console.log( typeof str2) //aekhane  akta amti('') string print hocchi kinto seta amra dekhte parsi na.

//.......................................... chartAt use kore 
var str = 'Some string'
var length = 0;
while(true){
    if(str.charAt(length)==''){
        break
    }else{
        length++
    }
}
//console.log(length)

//biltin method use kore length
console.log(str.length)
console.log('jeidnjendeidhenkemek'.length)
