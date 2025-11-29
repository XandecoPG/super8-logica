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
    let vencido = confirm("Produto vencido?");

    alert("Produto vencido: " + vencido);
}

function paciente() {
    let nome = prompt("Digite nome do paciente");
    const idade = parseInt(prompt("Digite a idade"));
    const peso = parseFloat(prompt("Digite o peso"));
    const possuiPlanoSaude = confirm("Possuí plano de saúde?");
    const cpf = prompt("Digite o CPF")

    let planoSaude = " ";
    //se possui planosaúde ==== true
    if (possuiPlanoSaude === true) {
        planoSaude = prompt("Digita o nome do plano de Saúde");

    }

    const tipoSanguineo = prompt("Digite o tipo Sanguíneo");
    const altura = parseFloat(prompt("Digite a altura"));

    const urgencia = prompt(`Escolha o nível de Urgência 
        [Migué, Atestado, Dorzinha, Dengue, Dor Extrema]`);

    let tempoEspera = 0;
    if (urgencia === "Migué") {
        tempoEspera = 180;
    } else if (urgencia === "Atestado") {
        tempoEspera = 150;
    } else if (urgencia === "Dorzinha") {
        tempoEspera = 120;
    } else if (urgencia === "Dengue") {
        tempoEspera = 60;
    } else if (urgencia === "Dor Extrema") {
        tempoEspera = 30;
    } else {
        alert("Nível de Urgência inexistente");
        return;
    }
    alert(
        "Dados do Paciente:\n" +
        "Nome: " + nome + "\n" +
        "Idade: " + idade + "\n" +
        "Peso: " + peso + "\n" +
        "Altura: " + altura + "\n" +
        "CPF: " + cpf + "\n" +
        "Tipo Sanguíneo: " + tipoSanguineo + "\n" +
        "Plano de Saúde: " + (possuiPlanoSaude ? planoSaude : "Não possui") + "\n" +
        "Urgência: " + urgencia + "\n" +
        "Tempo de espera: " + tempoEspera + " minutos"
    );




}

