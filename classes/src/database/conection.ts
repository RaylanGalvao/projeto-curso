type Conection = {
    id: string
    nome: string
}
export function connection(info: Conection){
    console.log("conecção realizada com sucesso", info.id)
    return true
}

export function statusConection(): void{
    console.log("servidor funcionando 100%")
}