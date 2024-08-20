package br.com.fiap.main

class Casa(cor:String, vagasGaragem: Int){
    //Atributos
    var cor:String = ""
    var vagasGaragem:Int = 0

    init {
        this.cor = cor
        this.vagasGaragem = vagasGaragem
    }

    //Métodos
    fun detalhesCasa(){
        println("COR: ${cor} - Vagas: ${vagasGaragem}")
    }
}

fun main() {
    var casaDoPresidente = Casa("Cinza", 5)
    casaDoPresidente.detalhesCasa()

}