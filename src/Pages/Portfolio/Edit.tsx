import React from "react";

import { ContainerPortfolio } from "./style";

const Create: React.FC = (props) => {
    return (
        <ContainerPortfolio>
            <h1>Editar Portfólio</h1>

            <div className="list-contact">
                <p className="title">Editar Portfólio</p>
                <table>
                    <thead>
                        <th>Título</th>
                        <th>Ordenação</th>
                        <th>Tipo</th>
                        <th>Img principal</th>
                        <th>Img tipo</th>
                        <th>Descrição</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tbody>              
                </table>
            </div>
            
        </ContainerPortfolio>
    )
}

export default Create