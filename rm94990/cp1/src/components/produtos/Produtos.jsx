import React from "react";

export default function Produtos(props) {
  return (
    <div>
      <h2>PRODUTOS</h2>
      <table border={1}>
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
            <tr
              key={i}
              style={
                i % 2 === 0
                  ? { backgroundColor: "#ccc" }
                  : { backgroundColor: "#afc" }
              }
            >
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
