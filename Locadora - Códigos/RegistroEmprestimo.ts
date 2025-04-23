import { Amigo } from "./Amigo";
import { DVD } from "./DVD";
import { Emprestimo } from "./Emprestimo";

export class RegistroEmprestimo {
    public emprestimos: Emprestimo[];
    
    constructor() {
        this.emprestimos = [];
    }

    public empresta(amigo: Amigo, dvd: DVD): void{}
    
    public devolve(dvd: DVD): void{}
    
    private estahEmprestado(dvd: DVD): void{}
    
    private faixaEtariaAbaixo(amigo: Amigo, dvd: DVD): void{}
    

}