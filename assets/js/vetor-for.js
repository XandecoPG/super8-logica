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

    while(quantidadeTentativas >= 0) {
        let nomeJogo  = prompt("Tente adivinhar o nome dos 3 jogos");
        //Verificando se o nome que o usuário digitou está dentro da lista
        if(palavras.includes(nomeJogo)) {
            //Dar mais 3 tentativas a cada acerto
            quantidadeTentativas += 3;
            //Como descobrir a posição
            let indiceJogo = palavras.indexOf(nomeJogo);
            // remover da lista o jogo que acertou
            palavras.splice(indiceJogo, 1);
            console.log(palavras);
            alert(`Acertou ${nomeJogo}`);
            if (palavras.length === 0){
                alert("Ganhou o jogo");
                break;
            }
        }else {
            //Decrementar em 1
            quantidadeTentativas -= 1;
            alert(`Errou\nVocê tem ${quantidadeTentativas} tentativas restantes`);
        }
        console.log("Quantidade de tentativas: " + quantidadeTentativas + "\npalavras: " + palavras);
        if(quantidadeTentativas <= 0){
            alert("Perdeu o jogo");
            break;
        }
    }
}

//        [0, 1, 2, 3]
// numeros = [1, 3, 4, 9]
// soma = 17
// i = 3
// numero = 9