export abstract class FaixaEtaria {
    private de: number;
    private ate: number;

    public abstract ehAbaixo(faixaEtaria: FaixaEtaria): boolean
}