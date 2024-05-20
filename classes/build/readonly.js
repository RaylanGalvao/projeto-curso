"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    mostraId() {
        console.log("ID DO USUARIO", this.id);
    }
}
const jose = new Pessoa("jose", 50);
jose.mostraId();
console.log(jose);
