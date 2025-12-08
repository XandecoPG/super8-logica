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

function exercicio01() {
    let nome = prompt("Digite seu nome");
    let idade = parseInt(prompt("Digite a Idade"));
    const cidade = prompt("Digite a cidade");
    let tempoder = confirm("Tem poder?");
    let poder = ""
    if (tempoder === true) {
        poder = prompt("Qual o poder?");
    }
    const atuacao = prompt("Quantas atuações teve este mês?")

    alert(
        "Ficha do player:\n" +
        "\nNome: " + nome +
        "\nIdade: " + idade +
        "\nCidade: " + cidade +
        "\nPoder: " + (tempoder ? poder : "Não possui") +
        "\nAtuações: " + atuacao

    )
}

function exercicio02() {
    let lateralDireita = parseFloat(prompt("Qual o tamanho da lateral direita?"));
    let lateralInferior = parseFloat(prompt("Qual o tamanho da lateral inferior?"));
    let area = lateralDireita * lateralInferior;

    alert(
        "Soma dos tamanhos\n" +
        "\nLateral Direita " + lateralDireita +
        "\nLateral Inferior " + lateralInferior +
        "\nResultado " + area

    )
}

function exercicio03() {
    let nomefilme = prompt("Digite o nome do filme");
    let anolancamento = parseInt(prompt("Qual o ano de lançamento?"));
    let duracao = parseFloat(prompt("Qual a duração do filme?(Em minutos)"));
    let genero = prompt("Qual o gênero do filme?");
    let assistido = confirm("Já assistiu?");
    let assistiu = ""
    if (assistido === true) {
        assistiu = prompt("Quantas Vezes?");
    }

    alert(
        "Dados do filme:\n" +
        "\nNome do filme: " + nomefilme +
        "\nAno de Lançamento: " + anolancamento +
        "\nDuração do filme: " + duracao +
        "\nGênero: " + genero +
        "\nJá foi assistido: " + (assistiu ? assistido : "Não")
    )


}

function exercicio04() {
    let nome = prompt("Qual o nome do produto?");
    let preco = parseFloat(prompt("Qual o valor?"));
    let quantidade = parseInt(prompt("Comprou quantos?"));
    let soma = quantidade * preco;
    let premium = confirm("É assinante?");
    let assinante = ""
    if (premium) {
        soma = soma * 0.9;
    }

    alert(
        "Dados da compra: \n" +
        "\nProduto: " + nome +
        "\nValor do produto: " + preco +
        "\nQuantidade: " + quantidade +
        "\nValor: R$ " + soma

    )

}


function exercicio05() {
    const nome = prompt("Qual o nome do aluno?");
    let nota1 = parseFloat(prompt("Qual a primeira nota?"));
    let nota2 = parseFloat(prompt("Qual a segunda nota?"));
    let nota3 = parseFloat(prompt("Qual a terceira nota?"));
    let media = (nota1 + nota2 + nota3) / 3
    let situacao;
    if (media >= 7) {
        situacao = "Aprovado";
    }
    else if (media >= 5 && media < 7) {
        situacao = "Recuperação";
    }
    else {
        situacao = "Reprovado"
    }

    alert(
        "Boletim \n " +
        "\nNome: " + nome +
        "\nPrimeira nota: " + nota1 +
        "\nSegunda nota: " + nota2 +
        "\nTerceira nota: " + nota3 +
        "\nMédia: " + media +
        "\nSituação: " + (media ? situacao : "")

    )

}


function exercicio06() {
    const carro = prompt("Qual é o carro?")
    const modelo = prompt(`Qual o modelo do carro? 
        [Hatch, Picapes, SUVs e Sedans]`);
    let ano = parseInt(prompt("Qual o ano do carro?"));
    let preco = parseFloat(prompt("Qual o valor do carro?"));
    let parcela = parseInt(prompt("Parcelado em quantas vezes?"));
    let valorparcela = preco / parcela;
    let seguro = confirm("Aceita incluir seguro?")
    if (seguro === true) {
        valorparcela = valorparcela + 150
    }

    alert(
        "Carro \n" +
        "\nCarro: " + carro +
        "\nModelo: " + modelo +
        "\nAno: " + ano +
        "\nPreço: R$" + preco +
        "\nParcelas:" + parcela + "x" +
        "\nSeguro: " + (seguro ? "Sim" : "Não") +
        "\nValor da parcela: R$" + valorparcela

    );
}

function exercicio07() {
    const nome = prompt("Qual o nome do jogo?");
    let horas = parseFloat(prompt("Joga quantas horas por dia?"));
    let dias = parseInt(prompt("Quantos dias na semana?"));
    let total = horas * dias
    let online = confirm("É online?");

    alert(
        "Game \n" +
        "\nNome: " + nome +
        "\nHoras por dia: " + horas +
        "\nDias por semana: " + dias +
        "\nTotal de horas: " + total + "h" +
        "\nOnline: " + (online ? "Sim" : "Não")

    )


}


function exercicio08() {
    const nome = prompt("Nome do restaurante?");
    let conta = parseFloat(prompt("Valor da conta?"));
    let pessoas = parseInt(prompt("Quantas pessoas há na mesa?"));
    let taxa = confirm("Será incluído a taxa?");
    if (taxa === true) {
        conta = conta * 1.10;
    }
    let divido = conta / pessoas;

    alert(
        "Conta \n" +
        "Restaurante: " + nome +
        "\nValor final da conta: R$ " + conta +
        "\nPessoas: " + pessoas +
        "\nIncluir taxa: " + (taxa ? "Sim" : "Não") +
        "\nValor por pessoa: R$ " + divido
    );

}

function exercicio09() {
    let nome = prompt("Nome do funcionário");
    let base = parseFloat(prompt("Qual o salário base"));
    let extra = parseFloat(prompt("Qual o valor das horas extras?"));
    let desconto = parseFloat(prompt("Quanto é descontado?"));
    let salario = base + extra - desconto;
    let imposto;
    if (salario > 3000) {
        imposto = "Imposto Alto";
    }
    else if (salario <= 3000) {
        imposto = "Imposto Padrão";
    }

    alert(
        "Folha de pagamento \n" +
        "\nNome do Funcionário:" + nome +
        "\nSalário Base: R$" + base +
        "\nHora Extra: R$" + extra +
        "\nDescontos: R$" + desconto +
        "\nSalário Final: R$" + salario +
        "\nTipo de imposto:  " + imposto

    )
}

/*Criar uma função exercicio10
- Solicitar o nome do cliente
- Solicitar o saldo atual da conta (número)
- Solicitar o valor de um depósito (número)
- Atualizar o saldo com o depósito
- Solicitar o valor de um saque (número)
- Verificar se o saque é menor ou igual ao saldo
    - Se for possível, atualizar o saldo subtraindo o saque
    - Se não for possível, não alterar o saldo e avisar que saldo é insuficiente
- Apresentar o nome do cliente e o saldo final da conta
*/
function exercicio10() {
    let nome = prompt("Qual seu nome?");
    let saldo = parseFloat(prompt("Qual o seu saldo atual?"));
    let deposito = parseFloat(prompt("Qual o valor do depósito?"));
    let saldoatual = saldo + deposito;
    let saque = parseFloat(prompt("Qual o valor do saque?"));
    let saldo2;

    if (saque <= saldoatual) {
        saldo2 = saldoatual - saque;
        alert(
            "Cliente: " + nome +
            "\nSaque realizado com sucesso!" +
            "\nSaldo final: R$ " + saldo2
        );
    } else {
        saldo2 = saldoatual;
        alert(
            "Cliente: " + nome +
            "\nSaldo insuficiente. Saque não realizado." +
            "\nSaldo final: R$ " + saldo2
        );
    }
}







