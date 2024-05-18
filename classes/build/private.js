"use strict";
class Conta {
    constructor() {
        this.limite = 48;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
const fulano = new Conta();
fulano.solicitarLimiteApp(true, 700);
console.log(fulano);
