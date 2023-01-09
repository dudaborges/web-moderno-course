let isAtivo = 1
console.log(!isAtivo) //! significa negação. 
//Quando não há contexto de true ou false, os números inteiros sempre são true, com exceção do 0

console.log(!!isAtivo) //passa a ser verdadeiro, pois são dois nãos

//situação que são true automaticamente

console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!!'a')
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = true))
console.log(!!null)
