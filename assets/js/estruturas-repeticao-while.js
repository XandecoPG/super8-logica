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

    while (indice < 5) {
        let nome = prompt("Digite o nome do aluno ");
        alert("Aluno Cadastrado " + nome);
        indice = indice + 1;
    }
    alert("Cadastro Finalizado");
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

    while (indice < 4) {
        let cor = prompt("Digite sua cor preferida");
        alert("Cor escolhida: " + cor);
        indice = indice + 1;
    }

    alert("Obrigado por informar suas cores prediletas")
}

/*3. Criar uma função exercicio03()
- Pedir 3 nomes de cidades que o usuário quer viajar.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome da cidade.
    - Mostrar um alert com "Destino " + (indice + 1) + ": " + cidade.
    - Incrementar o indice.
- Ao final, mostrar um alert "Planejamento de viagem concluído".*/

function exercicio03() {
    let indice = 0;

    while (indice < 3) {
        let cidade = prompt("Digite o nome da cidade que deseja viajar");
        alert("Destino " + (indice + 1) + ": " + cidade);
        indice = indice + 1;
    }

    alert("Planjamento de viagem concluído");
}


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

function exercicio04() {
    let indice = 0;
    let soma = 0;
    while (indice < 5) {
        let numero = parseInt(prompt("Digite um número inteiro"));
        soma = soma + numero
        indice = indice + 1
    }

    alert("Soma total: " + soma)
}


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

function exercicio05() {
    let indice = 0;

    while (indice < 3) {
        let nome = prompt("Qual o nome do filme")
        let ano = prompt("Ano de lançamento")
        alert("Filme: " + nome + " " + "Ano: " + ano)
        indice = indice + 1;
    }
    alert("Lista de filmes cadastrada com sucesso")
}

/*
6. Criar uma função exercicio06()
- Solicitar 5 números utilizando enquanto
- Apresentar a soma dos números
- Apresentar a média dos números*/

function exercicio06() {
    let indice = 0;
    let soma = 0;


    while (indice < 5) {
        let numero = parseInt(prompt("Digite um número para somar"));
        soma = soma + numero
        indice = indice + 1
    }

    let media = soma / 5

    alert("Soma dos números: " + soma + "\nMédia dos números: " + media)
}

/*7. Criar uma função exercicio07()
- Solicitar o valor de 6 vendas
- Apresentar o total das vendas
- Calcular e apresenta 5% de comissão sobre total das vendas.*/

function exercicio07() {
    let indice = 0;
    let totalVendas = 0;

    while (indice < 6) {
        let venda = parseFloat(prompt("Digite o valor da venda"))
        totalVendas = totalVendas + venda
        indice = indice + 1
        alert("Valor: " + venda +
            "\nTotal: " + totalVendas
        )

    }

    let comissao = totalVendas * 0.05

    alert(
        "Total das vendas: " + totalVendas +
        "\nComissão (5%): " + comissao
    )

    alert("Comissão do funcionario: " + comissao)
}

/* 
8. Criar uma função exercicio08()
- Solicitar 10 números
- Apresentar se o número é par
- Apresentar se o número é ímpar */

function exercicio08() {
    for (let i = 1; i <= 10; i++) {
        let numero = Number(prompt("Digite um número:"));

        if (numero % 2 === 0) {
            alert("O número " + numero + " é par");
        } else {
            alert("O número " + numero + " é ímpar");
        }
    }
}

/* 9. Criar uma função exercicio09()
- Solicitar um número para o usuário
- Apresentar a tabuada desse número utilizando while
- Formato esperado:
- 5 x 1 = 5
- 5 x 2 = 10
- ...
- 5 x 10 = 50
- O número(5) apresentado foi digitado pelo usuário, ou seja, deve apresentar a tabuada do número digitado */

function exercicio09() {
    let indice = 1;
    let tabuada = "";

    numero = parseInt(prompt("Digite um número"));
    alert("A tabuada do " + numero)
    while (indice < 11) {
        resultado = numero * indice;
        tabuada = tabuada + numero + " x " + indice + " = " + resultado + " \n";
        indice = indice + 1;
    }

    alert(tabuada
    )

}

/* 10. Criar uma função exercicio10()
- Solicitar 10 números
- Apresentar a quantidade de números pares
- Apresentar a quantidade de números ímpares */

function exercicio10() {
    let indice = 0;
    let numero = 0;
    let par = 0;
    let impar = 0;

    alert("Digite 10 números")

    while (indice < 10) {
        numero = Number(prompt("Digite um número"))
        indice = indice + 1;

        if (numero % 2 === 0) {
            par = par + 1;
        } else {
            impar = impar + 1;
        }
    }

    alert("Quantidade de números pares: " + par
        + "\nQuantidade de números ímpares: " + impar
    )

}

/* 11. Criar uma função exercicio11()
- Solicitar 4 notas de um aluno utilizando enquanto
- Calcular a média das notas
- Apresentar a média
- Se a média for maior ou igual a 7 apresentar Aprovado
- Senão apresentar Reprovado */

/* 12. Criar uma função exercicio12()
- Solicitar o valor de 5 produtos utilizando enquanto
- Calcular o total da compra
- Se o total for maior que 200 aplicar 10% de desconto
- Apresentar o valor total sem desconto
- Apresentar o valor final com desconto (se houver) */

/* 13. Criar uma função exercicio13()
- Solicitar 6 idades utilizando enquanto
- Calcular a média das idades
- Apresentar a média das idades
- Se a média for maior ou igual a 18 apresentar Maior de idade
- Senão apresentar Menor de idade */

/* 14. Criar uma função exercicio14()
- Solicitar 5 salários utilizando enquanto
- Calcular o maior salário informado
- Calcular o menor salário informado
- Calcular a média dos salários
- Se a média for maior que 3000 apresentar mensagem Salários acima da média
- Senão apresentar mensagem Salários dentro da média */

/* /*15. Criar uma função exercicio15()
- Solicitar 4 valores de contas (água, luz, internet, aluguel) utilizando enquanto
- Calcular o total das contas
- Solicitar a renda mensal do usuário
- Se o total das contas for maior que 50% da renda apresentar mensagem Orçamento comprometido
- Senão apresentar mensagem Orçamento saudável
- Apresentar o total das contas e o percentual que representa da renda
 */

/*16. Criar uma função exercicio16()
 - Solicitar a altura de 5 pessoas
- Descobrir e armazenar a maior altura utilizando while
- Apresentar a maior altura informada */

/* 17. Criar uma função exercicio17()
- Solicitar o peso de 4 pessoas
- Descobrir e armazenar o menor peso utilizando while
- Apresentar o menor peso informado */

/* 18. Criar uma função exercicio18()
- Solicitar o nome e a idade de 5 pessoas
- Descobrir quem possui a maior idade utilizando while
- Apresentar o nome da pessoa e a idade dela */

/* 
19. Criar uma função exercicio19()
- Solicitar o preço de 6 produtos
- Descobrir o maior preço utilizando while
- Descobrir o menor preço utilizando while
- Apresentar o maior e o menor preço informados */

/* 20. Criar uma função exercicio20()
- Solicitar o nome e o valor do salário de 4 colaboradores
- Descobrir qual colaborador tem o maior salário utilizando while
- Apresentar o nome do colaborador e o salário dele */

/* 21. Criar uma função exercicio21()
- Solicitar a temperatura de 7 dias
- Descobrir a maior temperatura utilizando while
- Descobrir a menor temperatura utilizando while
- Apresentar a maior e a menor temperatura informadas */

/* 22. Criar uma função exercicio22()
- Solicitar o nome e o preço de 5 produtos
- Descobrir qual produto tem o menor preço utilizando while
- Apresentar o nome do produto e o preço dele */

/* 23. Criar uma função exercicio23()
- Solicitar a idade de 8 pessoas
- Contar quantas são crianças (idade < 12)
- Contar quantas são adolescentes (12 a 17)
- Contar quantas são adultos (18 a 59)
- Contar quantas são idosos (60 ou mais)
- Apresentar a quantidade em cada categoria */

/* 24. Criar uma função exercicio24()
- Solicitar a nota de 10 alunos
- Contar quantos alunos estão Reprovados (nota < 5)
- Contar quantos alunos estão em Recuperação (nota >= 5 e < 7)
- Contar quantos alunos estão Aprovados (nota >= 7)
- Apresentar a quantidade de Reprovados, Recuperação e Aprovados
 */
/* 25. Criar uma função exercicio25()
- Solicitar o salário de 7 colaboradores
- Contar quantos ganham até 2000
- Contar quantos ganham entre 2001 e 5000
- Contar quantos ganham acima de 5000
- Apresentar a quantidade de colaboradores em cada faixa salarial */

/* 26. Criar uma função exercicio26()
- Solicitar a temperatura de 6 dias
- Contar quantos dias foram Frios (temperatura < 15)
- Contar quantos dias foram Agradáveis (temperatura entre 15 e 25)
- Contar quantos dias foram Quentes (temperatura > 25)
- Apresentar a quantidade de dias Frios, Agradáveis e Quentes */

/* 27. Criar uma função exercicio27()
- Solicitar a avaliação de 10 clientes (1 a 5)
- Contar quantas avaliações foram Ruim (1 ou 2)
- Contar quantas avaliações foram Regular (3)
- Contar quantas avaliações foram Bom (4 ou 5)
- Apresentar a quantidade de respostas Ruim, Regular e Bom
 */
/* 28. Criar uma função exercicio28()
- Solicitar 8 números inteiros
- Contar quantos números são negativos
- Contar quantos números são iguais a zero
- Contar quantos números são positivos
- Apresentar a quantidade de números negativos, iguais a zero e positivos
 */
/* 29. Criar uma função exercicio29()
- Solicitar o peso de 5 encomendas
- Contar quantas são Leves (peso < 2 kg)
- Contar quantas são Médias (peso entre 2 e 10 kg)
- Contar quantas são Pesadas (peso > 10 kg)
- Apresentar a quantidade de encomendas Leves, Médias e Pesadas */

/* 30. Criar uma função exercicio30()
- Solicitar a quantidade de pelúcias da Disney que deseja cadastrar
- Para cada pelúcia, solicitar o personagem [MICKEY/MINNIE/DONALD]
- Contar quantas pelúcias são do Mickey
- Contar quantas pelúcias são da Minnie
- Contar quantas pelúcias são do Donald
- Apresentar o resumo das pelúcias cadastradas por personagem
 */
/* 31. Criar uma função exercicio31()
- Solicitar a quantidade de clientes que irão responder a pesquisa
- Para cada cliente, solicitar a forma de pagamento utilizada [CRÉDITO/DÉBITO/DINHEIRO]
- Contar quantos pagaram no crédito
- Contar quantos pagaram no débito
- Contar quantos pagaram em dinheiro
- Apresentar o total de clientes em cada forma de pagamento */

/* 32. Criar uma função exercicio32()
- Solicitar a quantidade de ingressos vendidos
- Para cada ingresso, solicitar o tipo [INTEIRA/MEIA/CORTESIA]
- Contar quantos ingressos são INTEIRA
- Contar quantos ingressos são MEIA
- Contar quantos ingressos são CORTESIA
- Apresentar o total de ingressos por tipo */

/* 33. Criar uma função exercicio33()
- Solicitar a quantidade de lanches vendidos em um dia
- Para cada lanche, solicitar o tipo [HAMBURGUER/PIZZA/HOTDOG]
- Contar quantos pedidos foram de hambúrguer
- Contar quantos pedidos foram de pizza
- Contar quantos pedidos foram de hotdog
- Apresentar a quantidade de pedidos por tipo de lanche */

/* 34. Criar uma função exercicio34()
- Solicitar a quantidade de livros que deseja cadastrar
- Para cada livro, solicitar a categoria [FICÇÃO/ESTUDO/INFANTIL]
- Contar quantos livros são de Ficção
- Contar quantos livros são de Estudo
- Contar quantos livros são Infantis
- Apresentar a quantidade de livros em cada categoria
 */
/* 35. Criar uma função exercicio35()
- Solicitar o nome de personagens de anime até o usuário digitar sair
- Cada vez que um nome for digitado, exibir uma mensagem com o personagem cadastrado
- Ao digitar sair, encerrar o cadastro
- Apresentar a quantidade total de personagens cadastrados */

/* 36. Criar uma função exercicio36()
- Solicitar o nome de jogos favoritos até o usuário digitar sair
- Contar quantos jogos foram cadastrados
- Contar quantos jogos são do gênero RPG (quando o usuário digitar "RPG" em uma pergunta de gênero)
- Ao final, apresentar a quantidade total de jogos e quantos são RPG */

/* 37. Criar uma função exercicio37()
- Solicitar o nome de heróis da Marvel até o usuário digitar sair
- Para cada herói, solicitar também o nível de poder [BAIXO/MEDIO/ALTO]
- Contar quantos heróis têm poder BAIXO, MEDIO e ALTO
- Ao final, apresentar a quantidade em cada nível de poder
 */
/* 38. Criar uma função exercicio38()
- Solicitar o nome de séries geeks (ex: Star Wars, Star Trek, etc.) até o usuário digitar sair
- Para cada série cadastrada, solicitar uma nota de 0 a 10
- Calcular a média das notas das séries informadas
- Ao final, apresentar a quantidade de séries cadastradas e a média das notas */

/* 39. Criar uma função exercicio39()
- Solicitar o nome de consoles/jogos retrô (ex: SNES, Mega Drive) até o usuário digitar sair
- Contar quantos itens foram cadastrados
- Solicitar para cada item se o usuário já jogou [SIM/NÃO]
- Ao final, apresentar quantos itens foram cadastrados e quantos o usuário já jogou */

/* 40. Criar uma função exercicio40()
- Solicitar a distância percorrida em km e o consumo de combustível em litros
- Apresentar um MENU com as opções:
    1 - Calcular consumo médio (km/l)
    2 - Calcular custo da viagem (solicitar o preço do litro de combustível)
    3 - Alterar distância percorrida
    4 - Alterar consumo em litros
    10 - Sair
- Enquanto a opção digitada for diferente de 10
- Executar a opção escolhida e apresentar o resultado
- Ao escolher 10 encerrar o programa */
/* 
41. Criar uma função exercicio41()
- Solicitar o saldo inicial de uma conta bancária
- Apresentar um MENU com as opções:
    1 - Depositar
    2 - Sacar
    3 - Consultar saldo
    10 - Sair
- Enquanto a opção for diferente de 10
- Executar a operação escolhida
- No saque, não permitir sacar valor maior que o saldo
- Ao final, apresentar o saldo final da conta
 */
/* 42. Criar uma função exercicio42()
- Apresentar um MENU de conversão de temperaturas:
    1 - Celsius para Fahrenheit
    2 - Fahrenheit para Celsius
    10 - Sair
- Enquanto a opção for diferente de 10
- Solicitar a temperatura conforme a opção
- Realizar a conversão e apresentar o resultado
- Voltar ao MENU até o usuário escolher sair
 */
/* 43. Criar uma função exercicio43()
- Apresentar um MENU de calculadora de IMC:
    1 - Calcular IMC
    2 - Ver instruções de uso
    10 - Sair
- Enquanto a opção for diferente de 10
- Na opção 1 solicitar peso e altura, calcular e apresentar o IMC
- Na opção 2 apresentar uma breve explicação do que é IMC
- Voltar ao MENU até o usuário escolher sair
 */
/* 44. Criar uma função exercicio44()
- Apresentar um MENU de controle de estoque:
    1 - Adicionar itens ao estoque
    2 - Remover itens do estoque
    3 - Consultar quantidade em estoque
    10 - Sair
- Declarar uma variável estoque iniciando em 0
- Enquanto a opção for diferente de 10
- Executar a opção escolhida atualizando o estoque
- Não permitir remover quantidade maior que o estoque
- Ao sair, apresentar a quantidade final em estoque
 */
/* 45. Criar uma função exercicio45()
- Apresentar um MENU de lanche:
    1 - Adicionar Hambúrguer (R$ 15,00)
    2 - Adicionar Pizza (R$ 25,00)
    3 - Adicionar Refrigerante (R$ 8,00)
    4 - Ver total parcial
    10 - Finalizar pedido
- Declarar uma variável total começando em 0
- Enquanto a opção for diferente de 10
- Somar o valor do item escolhido ao total
- Permitir consultar o total parcial
- Ao finalizar o pedido, apresentar o valor total
 */
/* 46. Criar uma função exercicio46()
- Apresentar um MENU de notas de aluno:
    1 - Cadastrar nota
    2 - Ver média das notas
    3 - Ver quantidade de notas cadastradas
    10 - Sair
- Utilizar while para repetir o MENU
- Somar as notas cadastradas e contar quantas foram inseridas
- Na opção 2 calcular e apresentar a média
- Na opção 3 apresentar a quantidade de notas cadastradas
 */
/* 47. Criar uma função exercicio47()
- Apresentar um MENU de pesquisa de satisfação:
    1 - Registrar resposta "Ruim"
    2 - Registrar resposta "Regular"
    3 - Registrar resposta "Bom"
    4 - Ver resumo da pesquisa
    10 - Encerrar pesquisa
- Utilizar contadores para cada tipo de resposta
- Enquanto a opção for diferente de 10
- Registrar a opção escolhida
- Na opção 4 apresentar a quantidade de respostas Ruim, Regular e Bom
- Ao encerrar, mostrar o resumo final da pesquisa
 */
/* 48. Criar uma função exercicio48()
- Cadastrar quantas vendas desejar
- Para cada venda solicitar:
    - Nome do cliente
    - Valor da compra
    - Forma de pagamento [CRÉDITO/DÉBITO/PIX]
- Calcular o maior valor de compra
- Calcular o menor valor de compra
- Calcular a média das compras
- Contar quantas vendas foram em CRÉDITO, DÉBITO e PIX
- Apresentar um resumo geral das vendas
 */
/* 49. Criar uma função exercicio49()
- Cadastrar quantos alunos desejar
- Para cada aluno solicitar:
    - Nome
    - Idade
    - Peso
    - Altura
- Calcular o IMC de cada aluno
- Contar quantos alunos estão Abaixo do peso, Peso normal e Acima do peso
- Descobrir qual aluno tem o maior IMC
- Descobrir qual aluno tem o menor IMC
- Calcular a média das idades
- Apresentar um resumo geral dos alunos
 */
/*50. Criar uma função exercicio50()
- Cadastrar quantos títulos desejar em uma maratona geek
- Para cada título solicitar:
    - Nome do título
    - Tipo [FILME/SÉRIE/ANIME]
    - Nota (0 a 10)
- Calcular a maior nota atribuída
- Calcular a menor nota atribuída
- Calcular a média das notas
- Contar quantos são FILME, quantos são SÉRIE e quantos são ANIME
- Apresentar um resumo geral da maratona

*/
