import React, { useState } from 'react'
import { ContainerUser } from './styles'
import Btn from '../../../components/form/button/Button'
import ListUser from './List'

const User: React.FC<any> = (props) => {

    const [activeCard, setActiveCard] = useState('editUser')

    return (
        <ContainerUser>

            <h1>Gerenciar Usuário</h1>

            <div className="user-buttons">
                <Btn
                    className={activeCard === "editUser" ? "active" : ""} 
                    text="Editar"
                    onClick={() => setActiveCard("editUser")}
                />

                <Btn
                    className={activeCard === "deleteUser" ? "active" : ""}
                    text="Deletar" 
                    onClick={() => setActiveCard("deleteUser")}
                />

            </div>

            <hr></hr>            
            
            { activeCard === "editUser" && 
                <div className="create-user">
                    <h3 className="title">Editar Usuário</h3>
                    <form>
                        <input 
                            type="text"                        
                            placeholder="Nome" 
                        />
                        <input 
                            type="email"
                            placeholder="Email" 
                        />
                        <input 
                            type="password" 
                            placeholder="Senha"
                        /> 
                        <Btn 
                                text="Editar"
                        />
                            
                    </form>
                </div>
            }

            { activeCard === "deleteUser" && 
                <div className="create-user">
                    <h3 className="title">Deletar Usuário</h3>
                    <form>
                        <input 
                            type="text"                        
                            placeholder="Nome" 
                        />
                        <input 
                            type="password"
                            placeholder="Senha" 
                        />                        
                        <Btn 
                                text="Deletar"
                        />
                            
                    </form>
                </div>
            }
            
        </ContainerUser>
    )
}

export default User