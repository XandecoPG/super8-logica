function exemplo01() {
    let indice = 0;

    while (indice < 4) {
        let nome = prompt("Digite o nome");

        indice = indice + 1;
    }

    //Declarar variável
    //Condição
    //Incrementar 
    for (let indice = 0; indice < 4; indice = indice + 1) {
        let nome = prompt("Digite o nome");
    }
}

function relogio() {
    for (let hora = 0; hora < 24; hora = hora + 1){
        for (let minuto = 0; minuto < 60; minuto = minuto + 1){
            for (let segundo = 0; segundo < 60; segundo = segundo + 1){
                alert(hora + ":" + minuto + ":" + segundo);
            }
        }
    }
}

function exemploContagemRegressiva(){
    // declarar variável; condição; decremnetar
    for (let indice = 10; indice >= 0; indice = indice - 1){
        alert(indice);
    }
    alert('Feliz ano novo!')
}

function apresentarNumerosParesAte1000(){
    for(let i = 0; i <= 1000; i = i + 1){
        if (i % 2 == 0){
            alert(i);
        }
    }

    for(let i = 0; i <= 1000; i = i + 2){
        alert(i);
    }
}