function SolicitarString() {
    let nome = prompt("Digite o seu nome");
    let sobrenome = prompt("Digite o seu sobrenome")

    let nomeSobrenome = nome + " " + sobrenome;
    alert("Nome Completo: " + nomeSobrenome)

}

function SolicitarInt() {
    let numeroCartao = parseInt(prompt("Digite o número do cartão"));
    let codigoSegurança = parseInt(prompt("Digite o código de segurança"));

    alert("Número: " + numeroCartao + "\nCVV: " + codigoSegurança);
   
}

function SolicitarFloat() {
    debugger
    let saldoBancario = parseFloat(prompt("Digite o saldo Bancário"));
    const saque = parseFloat(prompt("Digite o valor do saque"));

    saldoBancario = saldoBancario - saque;

    alert("Saque realizando: " + saque + "\nSaldo atual: " + saldoBancario);
    

}

function SolicitarBoolean() {

}

function paciente() {

}

