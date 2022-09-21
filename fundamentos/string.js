const escola = "Cod3r"

console.log(escola.charAt(3)) //retorna a letra pelo índice
console.log(escola.indexOf('C'))
console.log(escola.substring(1))//retorna o resto após índice definido, incluindo ele mesmo
console.log(escola.substring(2, 4))//vai do 2 ao 4)

console.log('Escola '.concat(escola).concat('!'))//Concatenação

console.log(escola.replace(3, 'e'))//substitui o 3 por e

console.log('Ana,Maria,João'.split(','))//para retornar um array com cada vírgula