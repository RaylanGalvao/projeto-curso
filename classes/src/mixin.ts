import { applyMixins } from "./mixin/apllymixins"
class Automovel{
    ligar():void{
        console.log("automovel ligado com sucesso")
    }
    desligar():void{
        console.log("automovel desligado com sucesso")
    }
}

class Especificaçoes{
    descricao: string
    
    constructor(descricao: string){
        this.descricao = descricao
    }
}
class Carro{
    nome: string
    
    constructor(nome: string){
        this.nome = nome
    }
}

interface Carro extends Automovel, Especificaçoes{}

applyMixins(Carro, [Automovel, Especificaçoes])

const gol = new Carro("gol 1.6")

gol.ligar()

gol.descricao = "modelo completo automatico"

console.log(gol)

gol.desligar()