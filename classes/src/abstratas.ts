
type DadosConta{
    nome: String
    numero: String
    endereço: String
}

abstract class ContaBanco{
    abstract abrirConta(dados: DadosConta): boolean

}

class PessoaFisica extends ContaBanco{
    abrirConta(dados: DadosConta): boolean {
        console.log("=================================================")
        console.log(`nova conta fisica criada com sucesso ${dados.nome}`)
        console.log("=================================================")
        return true
    }
}

class PessoaJuridica extends ContaBanco{
    abrirConta(dados: DadosConta): boolean {
        console.log("=================================================")
        console.log(`nova conta fisica criada com sucesso ${dados.nome}`)
        console.log("=================================================")
        return true
    }
}

const maria = new PessoaFisica()

maria.abrirConta({
    nome: "maria jose",
    numero: "1234",
    endereço: "rua tuidosbangostusdusbagos",
})

const sucodefrutas = new PessoaJuridica()

sucodefrutas.abrirConta({
    nome: "sujieto", 
    numero:"5689",
    endereço:"carinhaquemoralogoali",
})