function calcularTotal (itens){
    let total = 20

    for (let i = 0; i < itens.length; i++){
        total += itens[i].preco
    }

    // aplica desconto de fidelidade
    // antes de retornar o alor final

    return total
}

function mostrarMensagemNome(nome){
    return "Olá " + nome
}


function mostrarMensagemOlaMundo(nome){
    return "Olá " + nome
}