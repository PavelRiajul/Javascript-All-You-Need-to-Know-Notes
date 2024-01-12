//string Methods
//The javascript string is an object that represents a sequence of characters
//2 ta string ke concate korbo . mane jora lagabo
 
// var a = 'Riajul'
// var b = 'Islam'
// var c = 'Pvael'
// var fullName = a.concat(' ',b,' ',c)
//console.log(fullName)
//.....................................................
//substr(substring). ami chacchi  Riajul Islam Pavel theke amar name Islam  theke soro hobe-> mane Islam Pavel chacchi. string count kore 0 theke.

//var d = fullName.substr(6)
//console.log(d)

//.......................................................
// amra dekhbo Riajul Islam Pavel er modee R , koto number gore ase.tai amra chartAt() use korbo-> tar mane koto akta string er bitore  ba  kono akta index a kon character  ta ase  seta jodi amader kejante hoy tahole amra charAt() method use korbo

//console.log(fullName.charAt(0))
//..........................................................
// Riajul Islam Pavel  --> name ta  Ri deye start hoise kina tarjonno amra startWith() method use korbo.jodi start hoy tahole true return korbe. jodi na asche false outpot ashbe.

//console.log(fullName.startsWith('Ri'))
//console.log(fullName.endsWith('el'))
//......................................................
//text uppercase and lowercase
//console.log(a,b,c.toUpperCase())
//console.log(a.toLowerCase())

//space remove.................................................
//console.log("              alalala      ".trim())
//var space = '       riajul         '
//console.log(space.trim())

//..................................................
//split() method --> akta text ke word a benge array te convert korbe.string ke  arrary te convert korar jonno split() method use korbo.are word a convert korar jonno space (' ') use korbo.
//console.log(fullName.split(' '))


//............................................................................
// string charAt() method
//it provides the char value present at the specified (index number)
// ami chacchi Bangladesh er d koto number index a ase seta jante chacchi.kon position a kon char ta ase seta index number deye ber kore ante parbo.

// var country = 'Bangladesh';
// var result = country.charAt(6)  // d 6 number index a ase.
// console.log(result)


//...............................................................................
// string concat() method
//concat() method -> holo akta string er sathe onn arekta string ke jora lagano.
//exmple:

// var country = 'Bangladesh';
// var country2 = 'phelestine'
// var result = country.concat(" "+country2)
// console.log(result)

//..................................................................................
//string indexof() method
//It provides the position of a char value present in the given string.
//akta string er bitore akta char koto number  position a ase oita dekhbo.
//exmple:

//var country1 = 'Bangladesh';
 //var result = country1.indexOf('a')  // jodi akta word er bitore sambe char multiple thake  tahole 1st index return korbe

 //jodi same char tar er modde last last a je char ta ase ami setar index ta jante chacchi.
 //tar jonno use korte hobe lastindexof() method
//var result = country1.lastIndexOf('a')
//console.log(result)


//................................................................................
//string replace method
//string er je kono part ke soriye new ki string modify korte pari.
//exmple: ami chacchi bangladesh thele desh ta bad deye DESH name ta modify korbo

// var country = 'bangladesh'
// var result = country.replace("desh",'DESH') //ami jee word golo replace korte chacche ->'desh'.are modify korbo'DESH'.
// console.log(result)

//...............................................................................
//string substr() method
//substr() method use kore amra akta string ke kete alada korte pari.
//exmple: ami chacche bangladesh er (desh) ta ke kete debo.

// var country = 'bangladesh'
 //var result = country.substr(0,6) //->(koto theke kata start korbo,koto porjonto katbo)
// var result = country.substr(6,4)
// console.log(result)


//...................................................................................
//string substring() method
//same kaj kore. kinto substring() er khetre amake first a length ta bole dete hobe. 
//exmple: 

// var country = 'bangladesh'
// var result = country.substring(6,10) //(koto theke katbo,pora length)
// console.log(result)


//....................................................................................
// toupperCase() method and to lowerCase method
//toupperCase() holo sob golo word boro size  hobe 
//toLowerCase() holo sob golo word small size hobe

// var country='bangladesh'
// console.log(country.toLocaleUpperCase())
// 
// var country1 = 'PHELESTINE';
// console.log(country1.toLowerCase())


//......................................................................................
// string trime() method
//akta string er bitore space goloke remove kore.

// var country = "         bangladesh        "
// var result = country.trim()
// console.log(result.length) //remove space
// console.log(country.length) // space soho