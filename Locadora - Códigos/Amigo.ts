import { FaixaEtaria } from "./FaixaEtaria";
import { Pessoa } from "./Pessoa";

export class Amigo extends Pessoa {
    private numTelefone: string;
    private email: string;
    private endereco: string;
    private faixaEtaria: FaixaEtaria
}