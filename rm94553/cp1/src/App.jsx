import React from "react"
import { useState } from "react"
import Produtos from "./components/produtos/Produtos"


export default function App(){
    
    const listaDeProdutos = [
        {
            nomeProduto: "mouse",
            qtd: 100,
            categoria: "informática"
        },
        {
            nomeProduto: "lápis",
            qtd: 50,
            categoria: "material-escolar"
        },
        {
            nomeProduto: "camisa",
            qtd: 12,
            categoria: "roupas"
        },
        {
            nomeProduto: "PS4",
            qtd: 150,
            categoria: "informática"
        },
        {
            nomeProduto: "celular",
            qtd: 180,
            categoria: "informática"
        },
    ]
    
    const[produtos, setProdutos] = useState(listaDeProdutos)
    
    
    
    return(
        <>
            <h1>CP1 de RWWD 2º SEMESTRE</h1>
            <Produtos produtos={produtos}/>
        </>
    )
}

