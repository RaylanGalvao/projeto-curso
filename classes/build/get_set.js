"use strict";
//caso de jogo
class Jogo {
    constructor(servidor) {
        this.id = "123";
        this.servidor = servidor;
    }
    // metodo GET  = para pegar o valor ao inves de acessar diretamente a propriedade
    get getServidorIp() {
        console.log("== METODO GET ==");
        return this.servidor;
    }
    //metodo set
    set setServidorIp(novoIp) {
        if (this.servidor === novoIp) {
            throw new Error("o novo IP deve ser diferente do IP antigo");
        }
        this.servidor = novoIp;
    }
}
const GTA5 = new Jogo("192.165.5.10");
GTA5.setServidorIp = "192.165.5.10";
console.log(GTA5.getServidorIp);
