//Concat - concatenar
// const alunos = [
//     {nomeAluno: "Felipe", nota: 5, participativa: false},
//     {nomeAluno: "Ana", nota: 9, participativa: true},
//     {nomeAluno: "Pedro", nota: 3, participativa: true},
//     {nomeAluno: "Beatriz", nota: 7, participativa: true},
//     {nomeAluno: "Felipe", nota: 5, participativa: false},
// ]

// const part= p => p.participativo
// const nota = n => n.nota<5 

// console.log(alunos.filter(part).filter(nota))

//Filtro que retorna o Aluno que tem nota > 5
// console.log(alunos.filter(function(e){
//     return e.nota>5
// }))

//Filtro que retorna o Aluno que é participativo e nota < 5
// console.log(alunos.filter(function(e){
//     return e.participativo==false&&e.nota<5
// }))


// const professores = ["Fernando", "Douglas", "Leo"]

// alunos.forEach(function(nome, indice){
//     console.log(nome, indice)
// })

// alunos.splice(6,0,"Luis")
// console.log(alunos)

//Método para adicionar um item no array: PUSH
//professores.push("João")
//console.log(professores)

//Alterando a posição 1 do vetor, para Francisco
//professores[1] = "Francisco"
//console.log(professores)

//Ordenando o vetor
//alunos.sort()
//console.log(alunos)

//Deletando um item no array
//delete alunos[0]
//console.log(alunos)

//Removendo o último item do array - POP()
//alunos.pop()
//console.log(alunos)

//Removendo o primeiro item do array - SHIFT()
//alunos.shift()
//console.log(alunos)



// DESAFIOS

// Arrow function que receba dois números e retorno o produto
const multiplicar = (num1, num2) => num1 * num2;
console.log(multiplicar(10,10));

//Função que recebe dois números e retorne  soma, subtração, multiplicação e divisão dos números em um objeto
// function operacoesMat(x,y){
//     return {
//         soma: x + y,
//         subtracao: x - y,
//         multiplicacao: x * y,
//         divisao: x / y
//     }
// }
// console.log(operacoesMat(5,5))

function verificarNum(num){
    return num > 0 ? "Positivo" : num < 0 ? "Negativo":"Zero"
}
console.log(verificarNum(-33))