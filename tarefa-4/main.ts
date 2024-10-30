interface Pagamento {
    valor: number;
    pagar(): void;
}

class PagamentoCheque implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }
    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por cheque.`);
    }
}

class PagamentoDinheiro implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por dinheiro.`);
    }

}

class PagamentoPorPix implements Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    pagar(): void {
        console.log(`O pagamento de ${this.valor} será feito por pix.`);
    }
}

const pagamentoCheque = new PagamentoCheque(100);
pagamentoCheque.pagar();

const pagamentoDinheiro = new PagamentoDinheiro(200);
pagamentoDinheiro.pagar();

const pagamentoTransferencia = new PagamentoPorPix(300);
pagamentoTransferencia.pagar();
