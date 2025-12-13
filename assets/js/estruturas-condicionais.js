// Operadores Relacionais
// == Igual Valor
// === Igual Valor e Tipo
// > Maior
// >= Maior ou igual
// < Menor
// <= Menor ou igual
// != Diferente

function exemploBasico() {
    let idade = 92;

// se a idade for menor que 18
    if (idade < 18) {
        alert("Menor de idade");
    } else if (idade < 65) { // senão se a idade for menor que 65
        alert("Adulto");
    } else { // senão
        alert ("Idoso");
    }
}

// Operadores Lógicos
// && E
// || ou (pipeline)


// Tabela Verdade do Operador Lógico E
// V e V => V
// V e F => F
// F e V => F
// F e F => F

function exemploE() {
    let nivel = -8;
    //nível 0 .. 10 é bronze
    //nível 11 .. 20 é prata
    //nível 21 .. 30 é ouro

    if(nivel >= 0 && nivel <= 10) {
        alert("Elo Bronze")
    }
}

// Tabela Verdade do operador lógico OU
// V ou V => V
// F ou V => V
// V ou F => V
// F ou F => F

function exemploOu() {
    // Menor de Idade ou Estudante
    let idade = 30;
    let estudante = false;

    if(idade <18 || estudante === true) {
        alert("Pode comprar meio ingresso")
    } else {
        alert("Não pode comprar meio ingresso")
    }
}

function exemploIncremento() {
    debugger
    let = quantidadeIdoso = 0, quantidadeIdoso = 0;

    let nome1 = prompt("Digite o nome da primeira pessoa:");
    let idade1 = parseInt(prompt("Digite a idade de" + nome1 + ":" ));
    if (idade1 < 65) {
        //Adulto
        //Incrementar
        // quantidadeAdulto = 0 + 1; => 1
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        //Idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }

    //pessoa 2
    
    let nome2 = prompt("Digite o nome da primeira pessoa:");
    let idade2 = parseInt(prompt("Digite a idade de" + nome2 + ":" ));
    if (idade2 < 65) {
        //Adulto
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        //Idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }

    //pessoa 3

    let nome3 = prompt("Digite o nome da primeira pessoa:");
    let idade3 = parseInt(prompt("Digite a idade de" + nome3 + ":" ));
    if (idade3 < 65) {
        //Adulto
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        //Idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }

    alert(
        "Pessoa 1 \nNome: " + nome1 +  "| Idade: " + idade1 + "anos\n\n" +
        "Pessoa 2 \nNome: " + nome2 +  "| Idade: " + idade2 + "anos\n\n" +
        "Pessoa 3 \nNome: " + nome3 +  "| Idade: " + idade3 + "anos\n\n" +
        "Resumo:\n" +
        "Quantidade de Adultos: " + quantidadeAdulto + "\n" +
        "Quantidade de Idosos: " + quantidadeIdoso
    );
}

function exemploFinalAno2026() {
    //debugger

    let contagemRegressiva = 10;

    alert (contagemRegressiva);

    //Decrementar
    contagemRegressiva = contagemRegressiva -1; // 9
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 8
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 7
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 6
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 5
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 4
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 3
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 2
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 1
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva -1; // 0
    alert("Final Ano Novo 2026");

}

function somarNumeros() {
    let soma = 0;
    
    const numero1 = parseInt(prompt("Digite o numero 1: "));
    soma = soma + numero1;

    const numero2 = parseInt(prompt("Digite o numero 2: "));
    soma = soma + numero2;

    const numero3 = parseInt(prompt("Digite o numero 3: "));
    soma = soma + numero3;

    const numero4 = parseInt(prompt("Digite o numero 4: "));
    soma = soma + numero4;

    const media = soma / 4;

    alert("Soma: " + soma + "\nMédia: " + media);
}