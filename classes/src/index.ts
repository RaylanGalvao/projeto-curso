//busca meu arquivo que conecta com o banco de dados
import { connection, statusConection } from "./database/conection";
import status, { resetaBanco } from './database/aplicativo'
function acessarSistema(){
    connection({ip1:"12354", nome50:"mysql"})
}
acessarSistema()

statusConection()

status()

resetaBanco()