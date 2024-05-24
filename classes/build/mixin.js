"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apllymixins_1 = require("./mixin/apllymixins");
class Automovel {
    ligar() {
        console.log("automovel ligado com sucesso");
    }
    desligar() {
        console.log("automovel desligado com sucesso");
    }
}
class Especificaçoes {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, apllymixins_1.applyMixins)(Carro, [Automovel, Especificaçoes]);
const gol = new Carro("gol 1.6");
gol.ligar();
gol.descricao = "modelo completo automatico";
console.log(gol);
gol.desligar();
