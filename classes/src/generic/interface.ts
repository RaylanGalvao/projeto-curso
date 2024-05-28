// type ProdutoNovo<R extends number>= {
//     nome: string
//     preco: <R>
// }
interface ProdutoNovo<R extends number>{
    nome: string
    preco: R
    formatar(valor: R):string
}
const arroz: ProdutoNovo<number>={
    nome: "arroz banco",
    preco: 123,
    formatar(valor:number):string{
        let valorFormatado = valor.toLocaleString('pt-br',
        {
            style: "currency",
            currency:"BRL"
        }
        )
        return valorFormatado
    }
}
console.log(arroz)
console.log(arroz.formatar(1500))