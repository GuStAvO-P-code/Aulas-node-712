import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let produtos = [
    { nome: `notebook`, preco: 2500 },
    { nome: `monitor`, preco: 600 },
    { nome: `memoria`, preco: 200 },
    { nome: `placa de video`, preco: 1500 }
]

let carrinho = [
    { nome: `monitor`, preco: 600 },
    { nome: `memoria`, preco: 200 }
]




rl.question(`1- cadastrar produto\n 2- Criar carrinho \n 3- mostrar total \n 4- Exibir resumo da compra \n 5- sair`,(resposta) => {
    if (resposta == `1`) {
        console.log(resposta)
        cadastrarProduto(produtos)
    } else if (resposta == `2`) {
        criarCarrinho(carrinho)
    } else if (resposta == `3`) {
        totalCarrinho(carrinho)
    }else if (resposta == `4`){
        mostrarCompras(carrinho)
    }

})

function criarCarrinho(carrinho) {
    for (let i = 0; i < carrinho.length; i++) {
        console.log(`${i} - nome: ${carrinho[i].nome}, preço: ${produtos[i].preco}`)
    }
    rl.question('selecion o produto a ser selecionado\n', (resp) => {
        carrinho.push(produtos[resp])
        console.log(carrinho)

    })
}

function totalCarrinho(carrinho) {
    let total = 0
    for (let i = 0; i < carrinho.length; i++) {
        console.log(`${i} - nome: ${carrinho[i].nome}, preço: ${carrinho[i].preco}`)
        total += carrinho[i].preco
    }
    console.log(total)
}

function mostrarCompras(carrinho){
    console.log(`items do carrinho`)
    for(let i = 0;i<carrinho.length;i++){
        console.log(`nome: ${carrinho[i].nome} preco: ${carrinho[i].preco}`)
    }
    

}
console.log('nova att')


