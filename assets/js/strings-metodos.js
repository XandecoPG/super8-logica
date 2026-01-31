function removerEspaçoComeco() {
    let texto = " Um frase bem legal"
    let textoSemEspacoComeco = texto.trimStart();

    alert(`Texto original: ' ${texto}'
        Texto sem espaços no começo: ' ${textoSemEspacoComeco}'`
    )
}

function removerEspaçoFinal() {

    let texto = "Um frase bem legal "
    let textoSemEspacoFinal = texto.trimEnd();
    alert(`Texto original: '${texto}'
        Texto sem espaços no final: '${textoSemEspacoFinal}'`);
}

function removerEspacosComecoFinal() {
    let texto = " Um frase bem legal "
    // let textoSemEspaçoComecoFinal = texto.trimStart(). trimEnd();
    let textoSemEspacosComecoFinal = texto.trim();

    alert(`Texto original: '${texto}'
        Texto sem espaços no começo e final: '${textoSemEspacosComecoFinal}'`);

}

function substituir() {
    let texto = "Lorenzo faltou";
    let novoTexto = texto.replace("Lorenzo", "Lorenzo");

    alert(`Texto original: '${texto}'
        Texto Subatituído: '${novoTexto}'`);
}

function substituirCaminho() {
    let valorString = "R$ 1.932.183,94";
    let valorStringNovo = valorString.replace("R$", "").replaceAll(".", "").replace(",", ".");
    let valor = parseFloat(valorStringNovo);

    alert("Valor invertido: " + valor + "\nValor dobrado: " + valor * 2)
}

function substring() {
    //31/01/2026
    // dia 
    // mes
    // ano
    //          0123456789
    let data = "31/01/2026";
    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5);
    let ano = data.substring(6, 9);
    // apresentar assim
    // Blumenau, <Dia> de <Mês> de <Ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);

}

function substringHorario() {
    //                         01234567
    // ler horarioAmericano = "08:30 pm"
    let horarioAmericano = prompt("Digite o horário no formato Americano");

    let hora = parseInt(horarioAmericano.substring(0, 2)); //08
    let minuto = horarioAmericano.substring(3, 5); //30
    let periodo = horarioAmericano.substring(6, 8); // pm

    let horaBrasil = 0;

    if (periodo === "am") {
        horaBrasil = hora;
    } else {
        //Pós almoço
        horaBrasil = hora + 12;
    }
    let horarioBrasil = `${horaBrasil}:${minuto}`
    alert(`Horário USA: ${horarioAmericano}
        Horário Brasil: ${horarioBrasil}`);
}

function exemploLenght() {
    let texto = "vingadores Guerra Infinita";
    let quantidadeCaracteres = texto.length;

    alert(`Texto: ${texto}
    quantidade de caracteres: ${quantidadeCaracteres}`);
}

function comecaCom() {
    let nomeEmpresa = "Blusoft";

    let empresaBlumenau = false;
    if (nomeEmpresa.toLowerCase().startsWith("blu") === true) {
        empresaBlumenau = true;
    }
    alert(`Empresa de Blumenau: ${empresaBlumenau}
    Nome da empresa: ${nomeEmpresa}`);
}

function terminaCom() {
    let nomeCompleto = "Ana da Silva SouZA";

    if (nomeCompleto.toUpperCase().endsWith("SILVA") || nomeCompleto.toUpperCase().endsWith("SOUZA")) {
        alert("Sobreme comum")
    } else {
        alert("Não é um sobrenome comum")
    }
}

function contem() {
    let refeicao = "Purê de feijão com o frango";

    if (refeicao.toLowerCase().includes("feijão") || refeicao.toLowerCase().includes("feijao")) {
        alert("Tipicamente do Brasil");
    } else {
        alert("Outra comida");
    }

}

function indiceDoCaracter() {
    let hora = "23:49";
    //Retornar o indice do caractere encontrado, caso não encontrar retorna -1
    let indiceDoisPontos = hora.indexOf("49");
    alert(`Hora: ${hora}
        Indice do ':' ${indiceDoisPontos}`);
}

function quebrarString() {
    let data = "31/01/2026";
    let partes = data.split("/"); // => ["31", "01", "2026"]
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];
    // Apresentar assim
    // Blumenau, <dia> de <mês> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);

}

function quebrarStringDataFora() {
    let dataHora = "31/01/2026 23:49:10";
    let parteDataHora = dataHora.split(" "); // => ["31/01/2026", "23:49:10"]
    let partesData = parteDataHora[0].split("/"); // "31/01/2026" => ["31", "01", "2026"]
    let parteHora = parteDataHora[1].split(":"); // "23:49:10" => ["23", "49", "10"]
    let dia = partesData[0]; //31
    let mes = partesData[1]; // 01
    let ano = partesdata[2]; //2026

    let hora = partesHora[0]; // 23
    let minuto = partesHora[1]; // 49
    let segundo = partesHora[2]; // 10
    //apresentar assim
    // Blumenau, <dia> de <mês> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}
        Hora: ${hora} Minuto: ${minuto} Segundo: ${segundo}`);
}

function padStart() { 
    // Apresentar sempre 15 caracteres
    let numeroCartao = "5230 9713 6338 5801";
    let ultimosNumeros = numeroCartao.substring(15, 19);
    alert(ultimosNumeros.padStart(16, "*"));
}

function padEnd() {
    //CSV Separando por caracteres
    // Matheus;25;5930.24
    // CSV Separado por largura fixa
    // Nome 30 caracteres idade 3 Salario 10
    // Matheus                  25 5930.24
    // Ana da Silva Souza       74 25419.37
    let nome = "Matheus";
    let idade = 25;
    let salario = 5930.24;

    let linha = nome.padEnd(30, " ") + idade.toString().padEnd(3, " ") + salario.toString().padEnd(10, " ");
    alert(`Linha do CSV: '${linha}'`);
}