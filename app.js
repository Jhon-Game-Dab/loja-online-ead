function calcularTotal (itens){
    let total = 10

    for (let i = 0; i < itens.length; i++){
        total += itens[i].preco
    }

    // aplica desconto de fidelidade
    // antes de retornar o alor final

    return total
}

function mostrarMensagem(nome){
    return "Olá " + nome
}