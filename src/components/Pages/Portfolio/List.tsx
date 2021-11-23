import React from "react";

const List: React.FC = (props) => {
    return (
        <>

            <div className="list-portfolio">
                <h3 className="title">Listar Portfólio</h3>
                <table>
                    <thead>
                        <tr>    
                            <th>Título</th>
                            <th>Ordenação</th>
                            <th>Tipo</th>
                            <th>Img principal</th>
                            <th>Img tipo</th>
                            <th>Descrição</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Aplicativo 1</th>
                            <th>4</th>
                            <th>Sistema</th>
                            <th>Caminho da img principal</th>
                            <th>Caminho da img tipo</th>
                            <th>Descrição do sistema</th>
                            <th>Inativo</th>
                        </tr>
                    </tbody>              
                </table>
            </div>
            
        </>
    )
}

export default List