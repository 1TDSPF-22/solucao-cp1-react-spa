import React from "react";

export default function Produtos(props){
    return(
        <div>
            <h2>Produtos</h2>
            <p>{props.produtos[0].nomeProduto}</p>
        </div>
    )
}