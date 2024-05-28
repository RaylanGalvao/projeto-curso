"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusConection = exports.connection = void 0;
function connection(info) {
    console.log("conecção realizada com sucesso", info.ip1);
    return true;
}
exports.connection = connection;
function statusConection() {
    console.log("servidor funcionando 100%");
}
exports.statusConection = statusConection;
