import React from "react";

export default function Produtos(props) {
  return (
    <div>
      <h2>PRODUTOS</h2>
      <p>{props.lista[0].nomeProduto}</p>
    </div>
  );
}
