import React from 'react'
import { useState } from 'react'

export default function App(){

    const listaDeProdutos = [
        {
            nomeProduto : "Mouse Óptico",
            qtd : 100, 
            categoria : "informatica"
        },
        {
            nomeProduto : "Netrogena",
            qtd : 1230, 
            categoria : "higiene"
        },
        {
            nomeProduto : "Desodorante",
            qtd : 1230, 
            categoria : "higiene"
        },{
            nomeProduto : "Netrogena",
            qtd : 1230, 
            categoria : "higiene"
        },{
            nomeProduto : "Netrogena",
            qtd : 1230, 
            categoria : "higiene"
        },{
            nomeProduto : "Netrogena",
            qtd : 1230, 
            categoria : "higiene"
        },{
            nomeProduto : "Netrogena",
            qtd : 1230, 
            categoria : "higiene"
        }
    ]

    const[produtos, setProdutos] = useState(listaDeProdutos)

    return(
        <>
            <h1>CP1 de RWD 2º SEMESTRE</h1>
            <Produtos produtos={produtos} />
        </>
    )
}