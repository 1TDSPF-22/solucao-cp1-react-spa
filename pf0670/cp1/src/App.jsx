import React from "react"
import { useState } from "react"

export default function App() {

    // const listaDeProdutos = [
    //     {
    //         nomeProduto: "Mouse Óptico",
    //         qtd: 100,
    //         categoria: "informatica"
    //     },
    //     {
    //         nomeProduto: "Netrogena",
    //         qtd: 1230,
    //         categoria: "higiene"
    //     },
    //     {
    //         nomeProduto: "Desodorante Avanço",
    //         qtd: 5000,
    //         categoria: "perfumaria"
    //     },
    //     {
    //         nomeProduto: "Balde de PVC",
    //         qtd: 555,
    //         categoria: "bazar"
    //     },
    //     {
    //         nomeProduto: "Acem sem Osso",
    //         qtd: 10000,
    //         categoria: "acougue"
    //     },
    // ]

    // const [produtos, setProdutos] = useState(listaDeProdutos)

    const [produtos, setProdutos] = useState([
        {
            nomeProduto: "Mouse Óptico",
            qtd: 100,
            categoria: "informatica"
        },
        {
            nomeProduto: "Netrogena",
            qtd: 1230,
            categoria: "higiene"
        },
        {
            nomeProduto: "Desodorante Avanço",
            qtd: 5000,
            categoria: "perfumaria"
        },
        {
            nomeProduto: "Balde de PVC",
            qtd: 555,
            categoria: "bazar"
        },
        {
            nomeProduto: "Acem sem Osso",
            qtd: 10000,
            categoria: "acougue"
        }
    ])

    return (
        <>
            <h1>CP1 de RWD 2º SEMESTRE</h1>
        </>
    )
}

// 2 – No App.jsx crie a seguinte estrutura. ( 3,5 Pontos)
// a) Adicione um fragmento.
// b) Um elemento h1 com o texto “CP1 de RWD 1º SEMESTRE”.
// c) Declare um useState de nome produtos que recebe uma lista de produtos com no
// mínimo 5 produtos e com os seguintes atributos:
// nomeProduto = “Mouse Óptico”
// qtd = 100
// categoria = “informatica”, ...
