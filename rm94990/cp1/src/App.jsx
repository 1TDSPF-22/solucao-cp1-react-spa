import React from "react";
import { useState } from "react";

export default function App() {
  const listaDeProdutos = [
    {
      nomeProduto: "Mouse Óptico",
      qtd: 100,
      categoria: "informatica",
    },
    {
      nomeProduto: "Metanfetamina",
      qtd: 10,
      categoria: "Saúde",
    },
    {
      nomeProduto: "BMW",
      qtd: 80,
      categoria: "Veículos",
    },
    {
      nomeProduto: "Kalashnikov",
      qtd: 27,
      categoria: "Armas",
    },
    {
      nomeProduto: "Biblia",
      qtd: 48,
      categoria: "Religião",
    },
  ];

  const [produtos, setProdutos] = useState(listaDeProdutos);

  return (
    <>
      <h1>CP1 de RWD 2º SEMESTRE</h1>
    </>
  );
}
