import { Amigo } from "./Amigo";
import { DVD } from "./DVD";

export abstract class Interface {
   public abstract imprime(dado: string): void;
   public abstract imprimeMenu(): void;
   public  abstract leDVD(): DVD;
   public abstract leAmigo(): Amigo;
   public abstract leEmprestimo(): void;
   public abstract alertaFaixaEtaria(amigo: Amigo, dvd: DVD): void
}