package br.com.fiap.main

fun mostrarMsg(nome:String, sobrenome:String, cpf:Long){
    println("Olá... $nome $sobrenome com CPF $cpf")
}

fun calcIdade(anoNasc: Int) : Int{
    var idade = 2024 - anoNasc
    return idade
}

fun main() {
    mostrarMsg("Lucas", "Alcântara", 42595088866)
    println(calcIdade(1995))
}