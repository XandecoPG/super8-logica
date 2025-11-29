function exemploVariaveisTexto() {
    const produto1 = "Xbox";//string pq tem aspas""
    const produto2 = "Gameboy Color";

    //concatenando a variável produto1 com espaço e depois com produto2
    const produtos = produto1 + " " + produto2;


    alert("Produto: " + produtos);
}

function exemploVariaveisInteiro() {
    const numero1 = 18;
    const numero2 = 147;

    //const soma = 18 + 147 =165
    // + da linha abaixo ele está fazendo uma soma
    const soma = numero1 + numero2;

    // + da linha abaixo ele esta fazendo uma concatenação
    alert("Soma: " + soma)
}

function exemploVariavelFloat() {
    const quantidadeHoras = 10;
    const valorHora = 2.31;

    const salarioBruto = quantidadeHoras * valorHora;

    alert("Salário bruto:" + salarioBruto)
}

function exemploVariaveisBoolean() {
    //let: permite retrinuir o valor da variável depois de criada.
    //const: não permite reatribuir o valor, apenas a leitura (o vínculo é constante).
    let lorenzoFechouAba = false;

    lorenzoFechouAba = true;

    alert("Lorenzo fechou a aba: " + lorenzoFechouAba)
}

function exemploVariaveis() {
    const destino = "Maceió"
    const quantidadeDias = 20;
    const precoDiaria = 1300.1;
    let finalizarCompra = false;

    let valorTotal = quantidadeDias * precoDiaria;

    // Usuário finalizou a compra
    finalizarCompra = true;

    alert(
        "Destino " + destino +
        "\nQuantidade de dias: " + quantidadeDias +
        "\nPreço Diária: " + precoDiaria +
        "\nFinalizar compra: " + finalizarCompra +
        "\nvalor total: R$ " + valorTotal
    )
}

//COMENTÁRIO EM LINHA
/*COMENTÁRIO EM BLOCO*/

/* Exemplo  criar uma função exercicioPokemon
nome 
numero 
descrição
altura
peso 
categoria
habilidade 

Calcular o IMC do pokemon peso/altura²
APresentar todos os dados do pokemon e seu imc


*/

function exercicioPokemon() {
    const nome1 = "Purugly";
    const numero1 = "Nº 432";
    const descricao1 = "Ele reivindicaria o ninho de outro Pokémon como seu se encontrasse um ninho suficientemente confortável.";
    const altura1 = 1.0;
    const peso1 = 43.8;
    const categoria1 = "Normal";
    const habilidade1 = "Thick Fat" + " " + "Own Tempo";
    const imc1 = altura1 * altura1 / peso1;


    const nome2 = "Phanpy";
    const numero2 = "Nº 231";
    const descricao2 = "Este Pokémon vive e faz seu ninho na margem de um rio. Depois de brincar na lama, ele não conseguirá se acalmar a menos que lave o corpo.";
    const altura2 = 0.5;
    const peso2 = 33.5;
    const categoria2 = "Ground";
    const habilidade2 = "Pickup";
    const imc2 = altura2 * altura2 / peso2;



    alert(
        "Pokemon1 " +
        "\nNome: " + nome1 +
        "\nNúmero de Série: " + numero1 +
        "\nDescriação: " + descricao1 +
        "\nAltura: " + altura1 +
        "\nPeso: " + peso1 +
        "\nCategoria: " + categoria1 +
        "\nHabilidade: " + habilidade1 +
        "\nIMC: " + imc1 + 
        "\nPokemon2" +
        "\nNome: " + nome2 +
        "\nNúmero de Série: " + numero2 +
        "\nDescriação: " + descricao2 +
        "\nAltura: " + altura2 +
        "\nPeso: " + peso2 +
        "\nCategoria: " + categoria2 +
        "\nHabilidade: " + habilidade2 +
        "\nIMC: " + imc2
    )

}

