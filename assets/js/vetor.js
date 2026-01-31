// var => Variável global, ou seja, existe em todos os arquivos (inseguro)
// let => Variável que possuí escopo, ou seja existe dentro do if, while, function.....
// const => Variável que não permite alteração, ou seja, uma vez que foi definido o valor não é possível alterar. Tem a mesma característica do let em relação ao escopo, existe dentro do if, while, function, fora deixa de existir (ela morre).

function exemplo01(){
    alert("Abre o console filhão")
    // let nome1 = "Maçã";
    // let nome2 = "Pera";
    // let nome3 = "Tomate";

    //Criando um vetor
    let frutas = [];
    //Adicionando os itens no vetor
    frutas.push("Maça");
    frutas.push("Pera");
    frutas.push("totamte");
    frutas.push("Rúcula");

    //Alterando valor no setor
    frutas[2] = "Tomate";

    //Remover "Rúcula" da lista de frutas, porque não é uma fruta
    frutas.splice(3, 1) // 3 é a posição da Rúcula

    console.log("Tamanho do vetor: " + frutas.length);

    //Acessando uma posição específica do vetor, ou seja, acessando o valor armazenado naquele posição
    console.log("Fruta 1 : " + frutas[0]);
    console.log("Fruta 2 : " + frutas[1]);
    console.log("Fruta 3 : " + frutas[2]);
}

function exercicio1games(){
    alert("Console")

    let games = [];

    games.push("Tíbia");

    games.push("Battlefield 4");
    console.log(games)

    games.push("League of Legends");
    games.push("Metal of Honor");
    games.push("Gta 6");

    games.splice(3, 1);
    console.log("Tamanho do vetor: " + games.length)

    games[5] = "Gta VI"
    games.length
    console.log


}

function exercicio2culinaria(){

    let culinaria = [];

    culinaria.push("Strogonoff")
    culinaria.push("Panqueca")
    culinaria.push("Salada")
}