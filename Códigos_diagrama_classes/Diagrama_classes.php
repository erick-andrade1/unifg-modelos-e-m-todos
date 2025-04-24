<?php

class Produto {
    private int $quantidade;
    private string $valor;

    public function adicionarProduto(): void {}
    public function consultaEstoque(): string {}
    public function consultaValor(): string {}
}

class ReporEstoque {
    public function gerarPedido(): void {}
}

class Cliente {
    private string $nome;
    private string $telefone;
    private string $cpf;
    private string $endereco;
    private string $senha;

    public function validarSenha(): bool {}
}

class Atendente {
    private string $nome;
    private string $senha;

    public function consultarCliente(): ?Cliente {}
    public function cadastrarCliente(): Cliente {}
    public function removerCliente(): void {}
}

class CadastroCliente {
    public function cadastro(): Cliente {}
    public function gerarSenha(): string {}
}

class Pagamento {
    protected string $tipoDePagamento;

    public function verificarTipoDePagamento(): string {}
}

class CartaoDeCredito extends Pagamento {
    private int $parcelas;

    public function selecionarParcelas () {}
}

?>