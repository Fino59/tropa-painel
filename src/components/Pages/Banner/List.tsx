import React from 'react'
import { ContainerBanner } from './style'

const List: React.FC<any> = (props) => {


    return (
        <ContainerBanner>
            <h1>Listar Banners</h1>

            <div className="list-banner">
                <p className="title">Listar Banner</p>
                <table>
                    <thead>
                        <th>Imagem titulo</th>
                        <th>Imagem descrição</th>
                        <th>Imagem</th>
                    </thead>
                    <tbody>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tbody>              
                </table>
            </div>
            
        </ContainerBanner>
    )
}

export default List