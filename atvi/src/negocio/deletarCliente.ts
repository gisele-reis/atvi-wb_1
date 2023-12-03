import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Excluir from "./deletar";

let executa = true

export default class ExcluirCliente extends Excluir {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public Exclui(): void {
        console.log(`\nInicio da Exclusao do cliente`);
        executa = true
        while (executa){
            let busca = this.entrada.receberTexto(`Informe o número do CPF do cliente: `);
            let cont = 1
            this.clientes.forEach(cliente =>{
                if (cliente.getCpf.getValor == busca){
                    console.log(`Cliente encontrado, nome: ${cliente.nome}, deseja realmente excluir o cliente? `);
                    let confirma = this.entrada.receberNumero(`1. Excluir, 2. Cancelar: `)
                    switch(confirma){
                        case 1:
                            let indice = this.clientes.indexOf(cliente)
                            this.clientes.splice(indice, 1)
                            console.log(`Cliente excluido!`);
                            executa = false
                            break;
                        case 2:
                            executa = false
                            console.log(`cancelado`);
                            break;
                            
                    }
                }
                else if(cont == this.clientes.length){
                    console.log(`\n nenhum cliente encontrado com o CPF informado! \n`); 
                    executa = false
                }
                else{
                    cont++
                }
            })
                
                        
        }
    }

}