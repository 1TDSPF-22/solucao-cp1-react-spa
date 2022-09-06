import React from "react";
import "./Produtos.css";
export default function Produtos(props) {
  return (
    <>
      <h2>Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {props.produtos.map((produto, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{produto.nomeProduto}</td>
              <td>{produto.qtd}</td>
              <td>{produto.categoria}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <caption>PRODUTOS</caption>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
