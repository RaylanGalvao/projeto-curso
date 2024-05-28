"use strict";
/*
permite criar estruturas que serao adaptaveis a varios tipos de dados
ajudando a reaproveitar melhor nosso codigo e deixa-lo mais flexivel

podemos usar os generics
funcoes | interface | type | classes
*/
/*
padroes em codigos
s => State
T => type
K => key
V => value
E => Element
*/
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const rep1 = repositorio();
rep1.setDados(15);
rep1.setDados("15");
console.log(rep1.getDados());
// const rep2 = repositorio<boolean>()
// rep2.setDados("25")
// console.log(rep2.getDados())
