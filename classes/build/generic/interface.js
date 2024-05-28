"use strict";
const arroz = {
    nome: "arroz banco",
    preco: 123,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-br', {
            style: "currency",
            currency: "BRL"
        });
        return valorFormatado;
    }
};
console.log(arroz);
console.log(arroz.formatar(1500));
