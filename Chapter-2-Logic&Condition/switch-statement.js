//switch statement
var date = new Date()
//logic 0->sunday, 1->monday ,2->Tuesday
var today = date.getDay()

// switch(today){
    // case 0:
    // console.log('today is sundy')
    // break
    // case 1:
    // console.log('today is monday')
    // break
    // case 2:
    // console.log('today is Tuesday')
    // break
    // case 3:
    // console.log('today is wednesday')
    // break
    // case 4:
    // console.log('today is Thursday')
    // break
    // case 5:
    // console.log('today is Friday')
    // break
    // case 6:
    // console.log('today is saturday')
    // break
    // default:console.log('not a valid number')
// }

if(today==0){
    console.log('today is sunday')
}else if(today==1){
    console.log('today is monday')
}else if(today==2){
    console.log('today is tuesday')
}else if(today==3){
    console.log('today is wednesday')
}else if(today== 4){
    console.log('today is friday')
}