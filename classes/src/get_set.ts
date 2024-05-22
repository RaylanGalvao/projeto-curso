 
 //caso de jogo

 class Jogo{ 
    private servidor: string
    private id: string = "123"

    constructor(servidor: string){
        this.servidor = servidor
    }

    // metodo GET  = para pegar o valor ao inves de acessar diretamente a propriedade
    get getServidorIp(){
        console.log("== METODO GET ==")
        return this.servidor
    }
    //metodo set
    set setServidorIp(novoIp: string){
        if(this.servidor === novoIp){
            throw new Error("o novo IP deve ser diferente do IP antigo")
        }
        this.servidor = novoIp
    }
 }

 const GTA5 = new Jogo("192.165.5.10")

 try{
     GTA5.setServidorIp = "192.165.5.10" 
 }catch(error){
    console.log("ERROR", error)
 }


console.log(GTA5.getServidorIp)