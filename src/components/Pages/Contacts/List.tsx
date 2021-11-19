import React from 'react'
import { ContainerContact } from './style'

const List: React.FC<any> = (props) => {


    return (
        <ContainerContact>
            <h1>Listar Mensagens</h1>

            <div className="list-contact">
                <p className="title">Listar mensagens</p>
                <table>
                    <thead>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Mensagem</th>
                    </thead>
                    <tbody>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tbody>              
                </table>
            </div>
            
        </ContainerContact>
    )
}

export default List