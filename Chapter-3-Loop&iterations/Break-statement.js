//Break statement
// akta running loop theke loop ta ke break mane stop  kore dee.

while(true){
    var rand =Math.floor( Math.random()*10+1)
    if(rand===9){
        console.log('winner is chicken dinner')
        break
    }else{
        console.log('You have got'+rand)
    }
}

for(var i =1;i<10;i++){
    if(i % 8==0){
        break
    }
    console.log(i)
}