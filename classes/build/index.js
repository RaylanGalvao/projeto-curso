"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//busca meu arquivo que conecta com o banco de dados
const conection_1 = require("./database/conection");
const conection_2 = __importDefault(require("./database/conection"));
function acessarSistemas() {
    (0, conection_1.connection)({ id: "123.456. 789.10", nome: "mysql", });
}
acessarSistemas();
(0, conection_1.statusConection)();
(0, conection_2.default)();
