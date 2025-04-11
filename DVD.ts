import { FaixaEtaria } from "./FaixaEtaria";
import { Genero } from "./Genero";
import { Pessoa } from "./Pessoa";

export class DVD {
    private titulo: string;
    private sinopse: string;
    private artistaPrincipal: Pessoa;
    private diretor: Pessoa;
    private genero: Genero;
    private classificacao: FaixaEtaria;

    constructor(props: DVD) {}
}