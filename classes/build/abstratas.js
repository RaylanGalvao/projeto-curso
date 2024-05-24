"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("=================================================");
        console.log(`nova conta fisica criada com sucesso ${dados.nome}`);
        console.log("=================================================");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("=================================================");
        console.log(`nova conta juridica 
         criada com sucesso ${dados.nome}`);
        console.log("=================================================");
        return true;
    }
}
const maria = new PessoaFisica();
maria.abrirConta({
    nome: "maria jose",
    numero: "1234",
    endereço: "rua tuidosbangostusdusbagos",
});
const sujeito = new PessoaJuridica();
sujeito.abrirConta({
    nome: "sujeito",
    numero: "987",
    endereço: "carinha que mora logo ali",
});
