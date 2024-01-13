//Inner/Nested Function
//function er bitore arekta function declare korbo.


// function somethong(greet,name){
    // function sayHi(){
        // console.log(greet,name)
    // }
    // sayHi()
// }
// somethong('Good Morning','Riajul islam')

//..............................................
//amra first name ta ke ber kore neye ashbo.

function somethong(greet,name){
    function getFirstName(){
       if(name){
        return name.split(' ')[0]
       }else{
        return ''
       }
    }
    var messege = greet+ ' ' + getFirstName()
    console.log(messege)
}
somethong('Good Morning','Riajul islam')