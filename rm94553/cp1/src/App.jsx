import React from "react"
import { useState } from "react"


export default function App(){
    
    // const listaDeProdutos = [
    //     {
    //         nomeProduto: "mouse",
    //         qtd: 100,
    //         categoria: "informática"
    //     },
    //     {
    //         nomeProduto: "lápis",
    //         qtd: 50,
    //         categoria: "material-escolar"
    //     },
    //     {
    //         nomeProduto: "camisa",
    //         qtd: 12,
    //         categoria: "roupas"
    //     },
    //     {
    //         nomeProduto: "PS4",
    //         qtd: 150,
    //         categoria: "informática"
    //     },
    //     {
    //         nomeProduto: "celular",
    //         qtd: 180,
    //         categoria: "informática"
    //     },
    // ]
    
    // const[produtos, setProdutos] = useState(listaDeProdutos)
    const[produtos, setProdutos] = useState = ([
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
    ])
    
    
    return(
        <>
            <h1>CP! de RWWD 2º SEMESTRE</h1>
        </>
    )
}