//busca meu arquivo que conecta com o banco de dados
import { connection, statusConection } from "./database/conection";
import status from './database/conection';

function acessarSistemas(){
    connection({id:"123.456. 789.10", nome:"mysql",)}
}
acessarSistemas()
statusConection()

status()