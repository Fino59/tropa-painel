import React from 'react'
import { ListContact } from './style'
import SearchIcon from '../../assets/logo/search-icon.png'

const List: React.FC<any> = (props) => {


    return (
        <ListContact>
            <div className="list-contact">
                <h3 className="title">Listar contatos</h3>
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
                            <th>Nome</th>
                            <th>Email</th>
                            <th className="msg">Mensagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>001</th>
                            <th>Eduardo Lima</th>
                            <th>eduardolima@gmail.com</th>
                            <th>Quero um sistema para a minha empresa</th>
                        </tr>
                        <tr>
                            <th>002</th>
                            <th>Thiago Galhardo</th>
                            <th>tglhardo@gmail.com</th>
                            <th>Quero um app para meu negócio</th>
                        </tr>
                        <tr>
                            <th>003</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>004</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>              
                </table>
            </div>            
        </ListContact>
    )
}

export default List