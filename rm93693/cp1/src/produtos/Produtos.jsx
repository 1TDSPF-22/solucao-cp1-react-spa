import React from "react";
import "./Produtos.css";
export default function Produtos(props) {
  return (
    <>
      <h2>Produtos</h2>
      <p>{props.produtos[0].nomeProduto}</p>
    </>
  );
}
