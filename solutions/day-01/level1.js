//SOLUCIONES A LOS EJERCICIOS DE NIVEL 1 (level 1)
const array1 = [] //.1
console.log(array1)
const array2 = [1,2,3,4,5,6,7] //.2
console.log(array2)
console.log(array2.length)//.3
console.log(array2[0], array2[6], array2[3]) //.4
let mixedDataTypes = [1, 'a', 2.33, true, 'hello', null] //.5
console.log(mixedDataTypes)
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] //.6
console.log(itCompanies) //.7
console.log('Number of ItCompanies:' + itCompanies.length) //.8
console.log(itCompanies[0], itCompanies[3], itCompanies[6]) //.9
console.log(itCompanies.toString()) //.10
console.log(itCompanies.toString().toUpperCase( )) //.11
console.log(itCompanies.toString() + ' are big IT companies') //.12
i = itCompanies.indexOf('BM')
i != -1 
    ? console.log('Companie does exist') 
    : console.log("Companie doesn't exist"); //.13
    console.log(itCompanies.toString()) //.14