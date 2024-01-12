//string Methods

//2 ta string ke concate korbo . mane jora lagabo
 
// var a = 'Riajul'
// var b = 'Islam'
// var c = 'Pvael'
// var fullName = a.concat(' ',b,' ',c)
//console.log(fullName)
//.....................................................
//substr(substring). ami chacchi  Riajul Islam Pavel theke amar name Islam  theke soro hobe-> mane Islam Pavel chacchi. string count kore 0 theke.

var d = fullName.substr(6)
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