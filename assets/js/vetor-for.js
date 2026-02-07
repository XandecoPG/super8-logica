// Incrementar 
// i = i + 1; // i = (atual) + 1;
// i += 1; // i = (atual) + 1;
// i++; // i = (atual) + 1

// Decrementar
// i = i - 1;
// i -= 1;
// i--;


function exemploJogos() {
    let jogos = [];

    // for(let i = 0; i < 5; i = i + 1){
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = prompt("Digite o nome do jogo");

        jogos.push(nomeJogo);
    }

    // Apresentar os jogos
    let textoParaApresentar = "";
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = jogos[i];
        textoParaApresentar = textoParaApresentar + nomeJogo + "\n";
    }

    alert("Jogos: " + textoParaApresentar);
}


function calculardora() {
    let numeros = [];

    // Solicitar os números
    for (let i = 0; i < 4; i += 1) {
        let numero = parseInt(prompt('Digite o número'));

        // Armazenar no vetor
        numeros.push(numero);
    }

    // Somar os números
    let somaManual = numeros[0] + numeros[1] + numeros[2] + numeros[3];
    alert("Soma manual: " + somaManual);

    let soma = 0;
    for (let i = 0; i < 4; i += 1) {
        let numero = numeros[i];
        soma = soma + numero;
    }

    alert("Soma: " + soma);
}

function calcularFolhasPagamento() {
    let colaboradores = ["Lorenzo", "Augusto", "Judity", "Narutinho"];
    let horasTrabalhadas = [320, 80, 220, 50];
    let valoresPorHora = [65, 15, 15, 700];
    let descontos = [1000, 200, 250, 1000];
    let auxilios = [1300, 150, 8, 5000];

    // let colaboradores = [];
    // let horasTrabalhadas = [];
    // let valoresPorHora = [];
    // let descontos = [];
    // let auxilios = [];
    let salariosBrutos = [];
    let salarioLiquidos = [];

    let quantidadeColaboradores = parseInt(
        prompt("Digite a quantidade de colaboradores que deseja gerar as folhas de pagamento"));

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let nomeColaborador = prompt("Digite o nome do colaborador");
        let quantidadeHorasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let valorPagoPorHora = parseFloat(prompt("Digite o valor pago por hora"));

        let temDescontos = confirm("Tem descontos?");
        let valorDescontos = 0;
        if (temDescontos === true) {
            valorDescontos = parseFloat(prompt("Digite o valor do desconto"));
        }

        let temAuxilios = confirm("Tem auxílios?");
        let valorAuxilios = 0;
        if (temAuxilios === true) {
            valorAuxilios = parseFloat(prompt("Digite o valor do auxílio"));
        }

        colaboradores.push(nomeColaborador);
        horasTrabalhadas.push(quantidadeHorasTrabalhadas);
        valoresPorHora.push(valorPagoPorHora);
        descontos.push(valorDescontos);
        auxilios.push(valorAuxilios);
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        const quantidadeHorasTrabalhadas = horasTrabalhadas[i];
        const valorPagoPorHora = valoresPorHora[i];

        let salarioBruto = quantidadeHorasTrabalhadas * valorPagoPorHora;
        salariosBrutos.push(salarioBruto);
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let salarioLiquido = salariosBrutos[i] - descontos[i] + auxilios[i];
        salarioLiquidos.push(salarioLiquido);
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        const nome = colaboradores[i];
        const horas = horasTrabalhadas[i];
        const valorHora = valoresPorHora[i];
        const bruto = salariosBrutos[i];
        const desconto = descontos[i];
        const auxilio = auxilios[i];
        const liquido = salarioLiquidos[i];

        alert(
            "🧾 Folha de Pagamento\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "👤 Colaborador: " + nome + "\n" +
            "⏱️ Horas trabalhadas: " + horas + "\n" +
            "💰 Valor por hora: R$ " + valorHora.toFixed(2) + "\n" +
            "🟢 Salário bruto: R$ " + bruto.toFixed(2) + "\n" +
            "🔻 Descontos: R$ " + desconto.toFixed(2) + "\n" +
            "🎁 Auxílios: R$ " + auxilio.toFixed(2) + "\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "✅ Salário líquido: R$ " + liquido.toFixed(2) + " 💵"
        );
    }
}

function jogoPalavras() {
    let palavras = ["Roblox", "Free Fire", "GTA"];
    let nomeJogador = prompt("Digite seu nome de jogador");
    let quantidadeTentativas = 10;

    if (nomeJogador.toLowerCase().includes("Lorenzo")) {
        quantidadeTentativas = 3;
    }

    while (quantidadeTentativas >= 0) {
        let nomeJogo = prompt("Tente adivinhar o nome dos 3 jogos");
        //Verificando se o nome que o usuário digitou está dentro da lista
        if (palavras.includes(nomeJogo)) {
            //Dar mais 3 tentativas a cada acerto
            quantidadeTentativas += 3;
            //Como descobrir a posição
            let indiceJogo = palavras.indexOf(nomeJogo);
            // remover da lista o jogo que acertou
            palavras.splice(indiceJogo, 1);
            console.log(palavras);
            alert(`Acertou ${nomeJogo}`);
            if (palavras.length === 0) {
                alert("Ganhou o jogo");
                break;
            }
        } else {
            //Decrementar em 1
            quantidadeTentativas -= 1;
            alert(`Errou\nVocê tem ${quantidadeTentativas} tentativas restantes`);
        }
        console.log("Quantidade de tentativas: " + quantidadeTentativas + "\npalavras: " + palavras);
        if (quantidadeTentativas <= 0) {
            alert("Perdeu o jogo");
            break;
        }
    }
}

function exemploCorTinta() {
    let tintas = []

    //Solicitando o nome de 5 tintas
    for (let i = 0; i < 5; i = i + 1) {
        //Solicitando o nome da tinta
        let nomeTinta = prompt("Digite o nome da cor de tinta");
        //Adicionando (salvando) o nome da tinta no vetor
        tintas.push(nomeTinta);
    }

    let texto = "";
    for (let i = 0; i < 5; i = i + 1) {
        // texto = texto + tintas [1];
        texto += tintas[i] + "\n";
    }

    alert("Tintas:\n" + texto);
}

function alunos() {
    let alunos = []

    for (let i = 0; i < 13; i = i + 1) {
        let nomeAluno = prompt("Digite o nome do aluno");
        // if (nomeAluno === Lorenzo){
        // continue;
        // }

        alunos.push(nomeAluno);
    }

    alert("Qtd de alunos: " + alunos.length);

    let resultado = "";
    //percorrer a lista
    for (let i = 0; i < 13; i = i + 1) {
        resultado += alunos[i] + "\n";

        alert(resultado);
        //Pegar o nome do aluno
        // let menorNomeAluno = alunos[0];
        let menorNomeAluno = "sdakndksnkdnksasdaskdjskajkdjsakjkdaskljdklsjakldjsajdka";
        let nomeAlunoPercorrido = alunos[i];
        //Verificar se o tamanho do nome do aluno é menor que o tamanho do menor de aluno
        if (nomeAlunoPercorrido.length < menorNomeAluno.length) {
            // Caso sim: atualizar o menorNomeAluno com o nome do aluno
            menorNomeAluno = nomeAlunoPercorrido;
        }
    }

    alert("Aluno com menor nome de aluno: " + menorNomeAluno);
}

/*
Ex 1: Criar uma função exercicio01, solicitando o nome dos smartphones
    - Criar uma lista com o nome dos smartphones (vazia)
    - Solicitar o nome de 5 smartphones (utilizar for) e armazenar em uma lista
    - Apresentar o nome dos 5 smartphones
Ex 2: Conti. Ex 1: Adicionar uma lista de quantidadeEstoque (vazia)
    - Modificar o for de solicitação do nome dos 5 smartphones para solicitar 
    também a quantidade de estoque 
    - Modificar a apresentação para apresentar a quantidade de estoque daquele produto
Ex 3: Conti. Ex 1: Deve apresentar um status de como está o estoque em si
    - Status: 
        Elevado     10
        Estável     7
        Preocupante 4
        Urgente     1
    De acordo com a quantidade estoque de cada smartphone deve apresentar seu status
*/

function ex01() {
    let smartphone = [];//indice
    let estoque = [];
    let status = [];
    let statusFinal = "";
    let menorQuantidade = 99999;
    let maiorQuantidade = 0;
    let valor = [];


    for (let i = 0; i < 5; i = i + 1) {
        //solicitar nome smartphone
        let nomeSmartphone = prompt("Digite o nome do smartphone");
        // pede quantidade em estoque
        let quantidadeEstoque = parseInt(prompt("Digite a quantidade do item " + nomeSmartphone + " em estoque"));
        let preco = parseFloat(prompt("Digite o valor do " + nomeSmartphone));
        //salva dados
        smartphone.push(nomeSmartphone);
        estoque.push(quantidadeEstoque);
        valor.push(preco)

        if (estoque[i] > 10) {
            statusFinal = "Elevado"
        } else if (estoque[i] >= 7) {
            statusFinal = "Estável"
        } else if (estoque[i] >= 4) {
            statusFinal = "Preocupante"
        } else if (estoque[i] >= 1) {
            statusFinal = "Urgente"
        }
        status.push(statusFinal);
    };

    for (let i = 0; i < 5; i = i + 1) {
        if (estoque[i] < menorQuantidade) {
            menorQuantidade = estoque[i];
        }
    }

    for (let i = 0; i < 5; i = i + 1) {
        if (estoque[i] > maiorQuantidade) {
            maiorQuantidade = estoque[i];
        }
    }



    let smartResulta = "";
    for (let i = 0; i < 5; i = i + 1) {
        smartResulta += smartphone[i] + "\n";
        smartResulta += estoque[i] + "\n";
        smartResulta += valor[i] + "\n";
        smartResulta += status[i] + "\n";

    }
    alert(smartResulta);
    alert("Menor valor do estoque " + menorQuantidade);
    alert("Maior valor do estoque " + maiorQuantidade);

}
function ex02() {
    let produto = [];
    let categorias = [];
    let valorProduto = [];
    let classificacao = [];
    let classificacaoFinal = "";
    let menorPreco = 99999;
    let produtoMenorPreco = "";
    let maiorPreco = 0;
    let descontos = [];

    for (let i = 0; i < 5; i = i + 1){
        let nomeproduto = prompt("Digite o nome do produto");
        let categoriaproduto = prompt("O produto faz parte de qual categoria");
        let preco = parseFloat(prompt("Digite o valor"));
        let desconto = parseInt(prompt("Digite quanto por cento de desconto que tem no produto (%)"));
        produto.push(nomeproduto);
        categorias.push(categoriaproduto);
        valorProduto.push(preco);

        if (valorProduto[i] > 100) {
            classificacaoFinal = "Caro"
        } else if (valorProduto[i] >= 50 < 100) {
            classificacaoFinal = "Médio"
        } else if (valorProduto[i] >= 20 < 50) {
            classificacaoFinal = "Barato"
        } else if (valorProduto[i] < 20) {
            classificacaoFinal = "Muito Barato"
        }
        classificacao.push(classificacaoFinal);
        
        for (let i = 0; i < 5; i = i + 1) {
            if (valorProduto[i] > maiorPreco) {
                maiorPreco = valorProduto[i];
            }
        }

        for (let i = 0; i < 5; i = i + 1) {
            if (valorProduto[i] < menorPreco) {
                menorPreco = valorProduto[i];

                produtoMenorPreco = valorProduto;

            }
        }


    }
    let produtoResultado = "";
    for (let i = 0; i < 5; i = i + 1){
        produtoResultado += "Produto: " + produto[i] + "\n"
        produtoResultado += "Categoria: " + categorias[i] + "\n"
        produtoResultado += "Preço: R$ " + valorProduto[i] + "\n"
        produtoResultado += "Classificação: " + classificacao[i] + "\n"
        

    }alert(produtoResultado);
    alert("Maior valor da compra " + maiorPreco);
    alert("Menor valor da compra " + menorPreco);
    alert("O produto de menor valor é " + produtoMenorPreco + valorProduto);
}






// Calcular e apresentar o preço final:

// precoFinal = preco - (preco * desconto/100)

// Apresentar:
// Produto: <nome> | Preço: R$ <preco> | Desc: <desconto>% | Final: R$ <precoFinal></precoFinal>


//        [0, 1, 2, 3]
// numeros = [1, 3, 4, 9]
// soma = 17
// i = 3
// numero = 9