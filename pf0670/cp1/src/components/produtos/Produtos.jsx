import React from 'react'

export default function Produtos(props) {
    return (
        <div>
            <h2>PRODUTOS</h2>
            <p>{props.produtos[0].nomeProduto}</p>

        </div>
    )
}


// 4 – No componente Produtos deve ser realizada através dos método necessários o consumo
// da lista de produtos: ( 3,5 Pontos)
// a) A lista de produtos deve ser apresentada em uma <table>.
// b) Adicione a coluna ID a tabela.
// c) As linhas da tabela devem ser de cores diferentes, ou seja, uma tabela zebrada.
// Utilize algum tipo de índice para poder realizar esse processo