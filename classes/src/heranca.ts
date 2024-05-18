//Herança > quando nos temos uma classe que herda de outra classe
//ClasePai tem seus atributos e a ckase FILHA vai herda todos atributos do pai alem dos seus proprios atributos

/*protected >> atributos e metodos protegidos podem se acessados ou alterados por meio da classe em que foram criados e por meiio das classes filhas (quemextende al classe pai)

private >> podem ser acessados ou alterados apenas por meio da classes que foram criadas, ou seja ela nao pode ser acessado ou modificado fora da classe em que foi criada

reandonly >> (apenas para os atributos) podemos apenas ler e ver esses atributos porem nao podemos alterar ele
*/

class Usuario {
    id:  number
    public nome:string
    public email:string

    constructor(id: number, nome: string, email:string){
        this.id = id
        this.nome = nome
        this.email = email
    }
}

class admim extends Usuario{

    public cargo: string
    public nivel: number
    
    constructor(id: number, nome: string, email: string, cargo: string, nivel: number){
        //Chamando o constructor da classe pai
        super(id, nome, email)
        
        this.cargo = cargo
        this.nivel = nivel
    }
    protected mudarCargo(cargo: string): void{
        console.log("alterando cargo para", cargo)
        console.log("id do usuario", this.id)
    }
    public acessarAdmim(){
        this.mudarCargo("designer")
    }
}

const usuario1 = new admim(55,"jose", "josw@gmail", "fullstak", 5)
// console.log(usuario1)


console.log(usuario1.cargo)

usuario1.acessarAdmim()