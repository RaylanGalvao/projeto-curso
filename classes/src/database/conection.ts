 type Conection = {
    ip1: string
    nome50: string
}
export function connection(info: Conection): boolean{
    console.log("conecção realizada com sucesso", info.ip1)
    return true
}

export function statusConection(): void{
    console.log("servidor funcionando 100%")
}