import React from "react";
import { useState } from "react";
import Produtos from "./produtos/Produtos";

// const listaDeProdutos = [
//   { nomeProduto: "Mouse Óptico", qtd: 100, categoria: "Informática" },
//   { nomeProduto: "Fone", qtd: 40, categoria: "Informática" },
//   { nomeProduto: "Celular", qtd: 200, categoria: "Informática" },
//   { nomeProduto: "Teclado", qtd: 100, categoria: "Informática" },
//   { nomeProduto: "Monitor", qtd: 100, categoria: "Informática" },
// ];

export default function App() {
  const [produtos, setProdutos] = useState([
    { nomeProduto: "Mouse Óptico", qtd: 100, categoria: "Informática" },
    { nomeProduto: "Fone", qtd: 40, categoria: "Informática" },
    { nomeProduto: "Celular", qtd: 200, categoria: "Informática" },
    { nomeProduto: "Teclado", qtd: 100, categoria: "Informática" },
    { nomeProduto: "Monitor", qtd: 100, categoria: "Informática" },
  ]);

  return (
    <>
      <h1>CP1 de RWD 2º SEMESTRE</h1>
      <Produtos produtos={produtos} />
    </>
  );
}
