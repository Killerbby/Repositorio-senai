const listaDePecas = ['peca de teste, ','AB','peca B']

console.log ('quantidade de peças')

if (listaDePecas.length <= 10){
    console.log('as peças podem ser cadastradas');
}

console.log('quantidade de caracteres')

for (let index = 0; index < listaDePecas.length; index++) {
    const pecaAtual = listaDePecas[index];
    if (pecaAtual.length < 3){
        console.log(pecaAtual + ' : a peça atual possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    } else {
        console.log(pecaAtual + ' : a peça pode ser cadstrada.')
    }
}

console.log('peso da peça')

const pesoDaPecaEmGramas = 150;

if(pesoDaPecaEmGramas >= 100){
    console.log('peso suficiente.')
} else {
    console.log('valor insuficuiente')
}