package br.com.fiap.main

open class Animal(){
    //Propriedades
    var cor:String = ""
    var idade:Int = 0
    var peso:Double = 0.0

    //Métodos
    open fun dormir(){
        println("Dormindo...")
    }
}

class Cachorro : Animal(){
    override fun dormir(){
        super.dormir()
        println("Dormindo como um cachorro...")
    }
    fun latir(){
        println("Latindo...")
    }
}

fun main(){
    var cachorro1 = Cachorro()
    cachorro1.cor = "Caramelo"
    cachorro1.peso = 5.0
    cachorro1.idade = 2
    cachorro1.dormir()
}