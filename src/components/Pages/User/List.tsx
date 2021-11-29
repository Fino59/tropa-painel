import React from 'react'
import SearchIcon from '../../../assets/logo/search-icon.png'
import { UserListContainer } from './styles'

const ListUser: React.FC<any> = (props) => {


    return (
        <UserListContainer>
            <h3 className="title">Listar Banner</h3>
            <table>
                <thead>
                    <tr>
                        <th className="id">
                            <div className="spacing"></div>
                            ID
                            <button className="id-filter">
                                <img src={SearchIcon} alt="Icone de busca por ID"/>
                            </button>
                        </th>{/* // <- Usar esse campo para pesquisar por id */}
                        <th>Título da Imagem </th>
                        <th>Descrição da imagem</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>001</th>
                        <th>Banner Um</th>
                        <th>Uma descrição de teste apenas aqui</th>
                        <th><img src="" alt="Imagem"/></th>
                    </tr>
                    <tr>
                        <th>002</th>
                        <th>Banner Dois</th>
                        <th>Uma descrição de teste apenas aqui</th>
                        <th><img src="" alt="Imagem"/></th>
                    </tr>
                    <tr>
                        <th>003</th>
                        <th>Banner Três</th>
                        <th>Uma descrição de teste apenas aqui</th>
                        <th><img src="" alt="Imagem"/></th>
                    </tr>
                    <tr>
                        <th>004</th>
                        <th>Banner Quatro</th>
                        <th>Uma descrição de teste apenas aqui</th>
                        <th><img src="" alt="Imagem"/></th>
                    </tr>
                </tbody>              
            </table>
        </UserListContainer>
    )
}

export default ListUser