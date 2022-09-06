import React from "react";
import "./Produtos.css";

export default function Produtos(props) {
  return (
    <div>
      <h2>PRODUTOS</h2>
      <table className="tb1Produtos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {props.lista.map((p, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{p.nomeProduto}</td>
              <td>{p.qtd}</td>
              <td>{p.categoria}</td>
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
    </div>
  );
}
