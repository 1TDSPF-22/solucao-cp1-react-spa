import React from 'react'
import './Produtos.css
'

export default function Produtos(props) {
    return(
        <div>
            <h2>Produtos</h2>

            <table className="tblProdutos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produtos</th>
                        <th>Qtd</th>
                        <th>categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {props.produtos.map((p, i) =>
                        //<tr key="{i}" style={i%2===0 ? {backgroundColor: "#ccc"} : {backgroundColor: "#afc" }}>
                        <tr key={i}">
                            <td>{i+1}</td>
                            <td>{p.nomeProduto}</td>
                            <td>{p.qtd}</td>
                            <td>{p.categoria}</td>
                        </tr>

                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <caption>Produtos</caption>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}