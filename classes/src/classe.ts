/*
o que e uma classe?
>> uma classe armazena as caracteristicas e as acoes que esse objeto vai possuir
iu seja conjuto de atributos ew metodos
*/

type Status = "ABERTO" | "FECHADO"

class Loja {
    nome: string
    categoria: string

    constructor(nome: string, categoria: string){
        this.nome = nome
        this. categoria = categoria
 }
 criarLoja(): void{
    console.log(`Loja ${this.nome}, categoria: ${this.categoria} criada`)
 }
 emitirPedido(mesa: number, ...pedidos: string[]): string{
    pedidos.map((pedido)=>{
        console.log(`Saindo novo pedido: ${pedido}`)
    })
    return `pedido na mesa ${mesa}`
 }

 mudarStatus(status: Status):void{
    if (status==="ABERTO"){
        console.log("loja aberta com sucesso")
    }else{
        console.log("loja fechou")
    }
 }

}


const redBurgue = new Loja("red Burguer", "lanches")
// const sucos =  new Loja("suco gelado", "sucos")
// const sorveteria = new Loja("sorveteria", "sorvete")

// console.log(redBurgue.nome)
// console.log(redBurgue.categoria)
// console.log(sucos.nome)
// console.log(sucos.categoria)

redBurgue.criarLoja()
// sorveteria.criarLoja()

const retornoLoja = redBurgue.emitirPedido(48, "suco gelado", "hamburgue duplo", "coca 2l")

redBurgue.mudarStatus("ABERTO")

console.log(retornoLoja)
