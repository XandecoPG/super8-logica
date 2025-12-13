function exemploWhile() {
    let indice = 0;

    //Enquanto o indice for menor que 3, repete
    while (indice < 3) {
        let nome = prompt("Digite o nome");

        //Incrementando a variável indice em 1, ou seja, adicionar 1
        indice = indice + 1;
    }

    alert("Obrigado")
}


function exemploCalcularMedia() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("Digite a nota"));

        somaNotas = somaNotas + nota;

        indice = indice + 1;
    }

    const media = soma / 3;
    alert("Média: " + media)

}

function exemploVerificarAprovado() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("Digite a nota"));

        somaNotas = somaNotas + nota;

        indice = indice + 1;
    }

    const media = somaNotas / 3;

    let status = "";

    if (media >= 7) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }
    alert("Média: " + media + "\nStatus: " + status)

}

function exemploMaiorValor() {
    debugger
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 5) {
        let altura = parseFloat(prompt("Insira a altura")); //2.0

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        indice = indice + 1;
    }

    alert("Maior altura é: " + maiorAltura);
}

function exemploMenorValor() {
    let indice = 0;
    let menorNumero = 999999999;

    //while(indice < 4)
    while (indice <= 3) {
        let numero = parseInt(prompt("Digite o número"));

        if (numero < menorNumero) {
            menorNumero = numero;
        }

        indice = indice + 1;

    }
    alert("Menor número: " + menorNumero);
}

function exemploDescobrirQuemMaiorValor() {
    let indice = 0;
    let maiorPreco = 0;
    let produtoMaiorPreco = "";

    while (indice < 3) {
        const produto = prompt("Insira o nome do produto");
        const preco = parseFloat(prompt("Digite o preco"));

        if (preco > maiorPreco) {
            maiorPreco = preco;
            // Armazenar o nome do produto pois ele até o momento
            // Tem o maior preco
            produtoMaiorPreco = produto;
        }
        indice = indice + 1;
    }

    alert("O produto: " + " tem o maior preço " + maiorPreco);
}

function exemploQuantidadePorCategoria() {
    let indice = 0;
    let quantidadeAdulto = 0, quantidadeIdoso = 0, quantidadeCrianca = 0;

    while (indice < 5) {
        let idade = parseInt(prompt("Digite a idade"));

        if (idade < 18) {
            quantidadeCrianca = quantidadeCrianca + 1;
        } else if (idade <= 64) { //18...64
            quantidadeAdulto = quantidadeAdulto + 1;
        } else { // 65...
            quantidadeIdoso = quantidadeIdoso + 1;
        }

        indice = indice + 1;

    }
    alert("Quantidade crianças: " + quantidadeCrianca +
        "\nQuantidade Adultos: " + quantidadeAdulto +
        "\nQuantidade Idosos: " + quantidadeIdoso

    )


}


function exemplosRepetirQuantidadeDoUsuario() {
    let indice = 0, quantidadeP = 0, quantidadeM = 0, quantidadeG = 0;

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de calças que deseja cadastrar"));

    while (indice < quantidadeDesejada) {
        let tamanhoCalca = prompt("Digite o tamanho da calça [P/M/G]");

        //Validar a informação está correta
        while (tamanhoCalca != "P" && tamanhoCalca != "M" && tamanhoCalca != "G") {
            tamanhoCalca = prompt("Tamanho inexistente.\n Digite o tamanho da calça [P/M/G]");
        }

        if (tamanhoCalca === "P") {
            quantidadeP = quantidadeP + 1;
        } else if (tamanhoCalca === "M") {
            quantidadeM = quantidadeM + 1;
        } else if (tamanhoCalca === "G") {
            quantidadeG = quantidadeG + 1;
        }

        indice = indice + 1;
    }
    alert(
        "Resumo das calças cadastradas: \n\n" +
        "P: " + quantidadeP + "\n" +
        "M: " + quantidadeM + "\n" +
        "G: " + quantidadeG
    )
}

function exemploAteDigitarSair() {
    // Solicitar nome até o usuário digitar sair
    let nome = "";

    alert("Digite o nome dos jogadores do time de futebol")

    while (nome != "sair") {
        nome = prompt("Digite o nome ou 'sair' para encerrar");
    }

}

function exemploAteDigitarSairComQuantidade() {
    //Solicitar nome até o usuário digitar sair,
    // Quero saber a quantidade de jogadores
    let nome = "";
    let quantidadeJogadores = 0;

    alert("Digite o nome dos jogadores do time de futebol")

    while (nome != "sair") {
        nome = prompt("Digite o nome ou 'sair' para encerrar");

        if (nome != "sair") {
            quantidadeJogadores = quantidadeJogadores + 1;
        }
    }

    alert("Quantidade de jogadores: " + quantidadeJogadores);
}

function exemploMenu() {
    let menu = undefined;

    let numero1 = parseInt(prompt("Digite o primeiro número"));
    let numero2 = parseInt(prompt("Digite o segundo número"));

    while (menu != 10) {
        menu = parseInt(prompt(`
MENU:
    1 - Somar
    3 - Subtrair
    4 - Multiplicar
    2 - Dividir
    5 - Alterar número 1
    6 - Alterar número 2
    10- Sair`));

        if (menu === 1) {
            const soma = numero1 + numero2;
            alert("Soma: " + soma);
        } else if (menu === 2) {
            const subtracao = numero2 - numero2;
            alert("Subtração: " + subtracao);
        } else if (menu === 3) {
            const multiplicacao = numero1 * numero2;
            alert("MUltiplicação: " + multiplicacao);
        } else if (menu === 4) {
            if (numero2 === 0) {
                alert("Não é possível por zero.");
            } else {
                const divisao = numero1 / numero2;
                alert("Divisão " + divisao);
            }
        } else if (menu === 5) {
            numero1 = parseInt(prompt("Digital o primeiro número", numero1))
        } else if (menu === 6) {
            numero2 = parseInt(prompt("Digite o segundo número", numero2))
        }
    }
}

function exemploColaboradores() {
    // ✔️ Cadastrar quantos colaboradores eu desejar
    // ✔️ Pedir:
    //  ✔️  - valor hora
    //  ✔️  - quantidade horas
    //  ✔️ - setor [Produção, Qualidade, Financeiro]
    // ✔️ Calcular o salário bruto
    // ✔️ Calcular o salário líquido
    // ✔️ Maior salário líquido
    // ✔️ Menor salário bruto
    // ✔️ Média dos salários brutos
    // ✔️ Nome pessoa que trabalha mais horas
    // Quantidade de pessoas por Setor

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de colaboradores"));
    let maiorSalarioLiquido = 0;
    let menorSalarioBruto = 99999999;
    let somaSalarioBrutos = 0;
    let maiorQuantidadeHoras = 0;
    let nomeMaiorQuantidadeHoras = "";
    let quantidadeProducao = 0, quantidadeQualidade = 0, quantidadeFinanceiro = 0;
    let quantidadeOutroSetor = 0;

    let indice = 0;

    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome do colaborador");
        let valorHora = parseFloat(prompt("Digite o valor da hora"));
        let horasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let setor = prompt(`
Digite o nome do setor:
Financeiro
Produção
Qualidade`);
        let salarioBruto = valorHora * horasTrabalhadas;
        let inss = salarioBruto * 0.08; // Calcular 8% de inss
        let ir = salarioBruto * 0.275; // Calcular 27.5% de imposto de renda
        let valeRefeicao = 1400;

        let salarioLiquido = salarioBruto - inss - ir + valeRefeicao;
        alert(
            "Folha de Pagamento\n\n" +
            "Colaborador: " + nome + "\n" +
            "Setor: " + setor + "\n\n" +
            "Valor da hora: R$ " + valorHora.toFixed(2) + "\n" +
            "Horas trabalhadas: " + horasTrabalhadas + "\n\n" +
            "Salário bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
            "Desconto INSS (8%): R$ " + inss.toFixed(2) + "\n" +
            "Desconto IR (27,5%): R$ " + ir.toFixed(2) + "\n" +
            "Vale refeição: R$ " + valeRefeicao.toFixed(2) + "\n\n" +
            "Salário líquido: R$ " + salarioLiquido.toFixed(2)
        );

        if (salarioLiquido > maiorSalarioLiquido) {
            maiorSalarioLiquido = salarioLiquido;
        }

        if (salarioBruto < menorSalarioBruto) {
            menorSalarioBruto = salarioBruto;
        }

        if (horasTrabalhadas > maiorQuantidadeHoras) {
            maiorQuantidadeHoras = horasTrabalhadas;
            nomeMaiorQuantidadeHoras = nome;
        }

        if (setor === "Qualidade") {
            quantidadeQualidade = quantidadeQualidade + 1;
        } else if (setor === "Financeiro") {
            quantidadeFinanceiro = quantidadeFinanceiro + 1;
        } else if (setor === "Produção") {
            quantidadeProducao = quantidadeProducao + 1;
        } else {
            quantidadeOutroSetor = quantidadeOutroSetor + 1;
        }

        somaSalarioBrutos = somaSalarioBrutos + salarioBruto;

        indice = indice + 1;// Incrementar
    }

    let mediaSalarioBrutos = somaSalarioBrutos / quantidadeDesejada;
    alert(
        "RESUMO GERAL DOS COLABORADORES\n\n" +

        "Maior salário líquido: R$ " + maiorSalarioLiquido.toFixed(2) + "\n" +
        "Menor salário bruto: R$ " + menorSalarioBruto.toFixed(2) + "\n" +
        "Média dos salários brutos: R$ " + mediaSalarioBrutos.toFixed(2) + "\n\n" +

        "Maior quantidade de horas trabalhadas: " + maiorQuantidadeHoras + "\n" +
        "Colaborador com mais horas: " + nomeMaiorQuantidadeHoras + "\n\n" +

        "Quantidade por setor:\n" +
        "Financeiro: " + quantidadeFinanceiro + "\n" +
        "Produção: " + quantidadeProducao + "\n" +
        "Qualidade: " + quantidadeQualidade + "\n" +
        "Outros setores: " + quantidadeOutroSetor
    );
}

/* 
1. Criar uma função exercicio01()
- Pedir 5 nomes de alunos.
- Usar uma variável indice começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir o nome do aluno com prompt.
    - Mostrar um alert com "Aluno cadastrado: " + nome.
    - Incrementar o indice.
- Ao final, mostrar um alert "Cadastro finalizado".*/

function exercicio01() {
    let indice = 0;

    while (indice <= 5);{
        let nome = prompt("Digite o nome dos alunos");
        indice = indice + 1;
    }

    alert("Aluno Cadastrado!" + nome)
    alert("\nCadastro finalizado")
}


/*2. Criar uma função exercicio02()
- Pedir 4 cores favoritas.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 4:
    - Pedir uma cor (ex: "Digite uma cor").
    - Mostrar um alert com "Cor escolhida: " + cor.
    - Incrementar o indice.
- Ao final, mostrar um alert "Obrigado por informar suas cores favoritas".*/

function exercicio02() {
    let indice = 0;

    while (indice <= 4);{
        let cor = prompt("Digite sua cor predileta")

        indice = indice + 1;
    }


    alert("Cor escolhida: " + cor)
}

/*3. Criar uma função exercicio03()
- Pedir 3 nomes de cidades que o usuário quer viajar.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome da cidade.
    - Mostrar um alert com "Destino " + (indice + 1) + ": " + cidade.
    - Incrementar o indice.
- Ao final, mostrar um alert "Planejamento de viagem concluído".*/

/*4. Criar uma função exercicio04()
- Pedir 5 números inteiros.
- Usar while com indice começando em 0.
- Criar uma variável soma começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir um número com prompt.
    - Converter para inteiro (parseInt).
    - Somar na variável soma.
    - Incrementar o indice.
- Ao final, mostrar um alert com "Soma total: " + soma.*/


/* 5. Criar uma função exercicio05()
- Pedir 3 filmes favoritos.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome do filme.
    - Pedir o ano de lançamento.
    - Mostrar um alert com "Filme: [nome] - Ano: [ano]".
    - Incrementar o indice.
- Ao final, mostrar um alert "Lista de filmes cadastrada com sucesso".
*/
