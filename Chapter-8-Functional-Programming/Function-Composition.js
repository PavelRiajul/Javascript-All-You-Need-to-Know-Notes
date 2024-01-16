//Function Composition
//jodi 1st function input akare , jodi 2nd function er output deya jai, tokhon setake amra composition bolbo.

function print(inp){
    console.log(inp)
}

function multiplyByFive(n){
    return n * 5
}

function add(a,b){
    return a + b
}

//ae 3 ta function er somonnoee  je akta number ba 2ta number amra provide korlam, see 2 ta number 1st a Addition(+) hobe, Addition hobar pore 5 dara multiply(*) hobe ,tarpo seta print hobe.

//at 1st amader ke print function ke call korte hobe,print function er argument bitore jabe jeeta orginal number provade korte pare. er bitore provide korbo add function,and tar por add er bitore 2 ta number debo.
print(multiplyByFive(add(3,5))) //outpot deba =40
//rar mane first function holo print.input akare nilam multiplyByFive --> aetae function composition

//implement --> 1st a add 3 + 5=8, 2nd a multiplybyfive 8*5 = 50