import React from 'react'

export default function Produtos(props) {
    return(
        <div>
            <h2>Produtos</h2>

            <table border={1}>
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
                        <tr key="">
                            <td>{p.nomeProduto}</td>
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