import React from "react";

import { ContainerPortfolio } from "./style";

const Create: React.FC = (props) => {
    return (
        <ContainerPortfolio>
            <h1>Criar Portfólio</h1>

            <div className="list-contact">
                <p className="title">Criar Portfólio</p>
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
                        <th>Aplicativo 1</th>
                        <th>1</th>
                        <th>Sistema</th>
                        <th>Caminho da imagem principal</th>
                        <th>Tipo imagem</th>
                        <th>Descrição do sistema</th>
                        <th>Inativo</th>
                    </tbody>              
                </table>
            </div>
            
        </ContainerPortfolio>
    )
}

export default Create