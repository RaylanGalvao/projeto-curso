class Pessoa{
    readonly id: string = "123"
    nome: string
    idade: number

    constructor (nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    mostraId(){
        console.log("ID DO USUARIO", this.id)
    }
}
const jose = new Pessoa("jose", 50)
jose.mostraId()
console.log(jose)