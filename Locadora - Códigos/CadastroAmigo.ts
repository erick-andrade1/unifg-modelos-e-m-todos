import { Amigo } from "./Amigo";

export class CadastroAmigo {
    private amigos: Amigo[]

    constructor(props: Amigo[]) {
        this.amigos = props
    }

    public inclui(amigo: Amigo): void {}
    public altera(int: number): void{}
    public exclui(int: number): void{}
}