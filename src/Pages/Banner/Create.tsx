import React, { useState } from 'react'
import Btn from '../../components/form/button/Button'
import List from './List'
import { ContainerBanner } from './style'

const Create: React.FC<any> = (props) => {

    const [activeCard, setActiveCard] = useState('createCard')

    return (
        <ContainerBanner>
            <h1>Gerenciar Banners</h1>

                <div className="banner-buttons">
                    <Btn 
                        className={activeCard === "createCard" ? "active" : ""}
                        text="Criar" 
                        onClick={() => setActiveCard("createCard")}
                    />

                    <Btn
                        className={activeCard === "listCard" ? "active" : ""} 
                        text="Listar"
                        onClick={() => setActiveCard("listCard")}
                    />                        
                    
                    <Btn
                        className={activeCard === "editCard" ? "active" : ""} 
                        text="Editar"
                        onClick={() => setActiveCard("editCard")}
                    />

                    <Btn
                        className={activeCard === "deleteCard" ? "active" : ""}
                        text="Deletar" 
                        onClick={() => setActiveCard("deleteCard")}
                    />
                    
                    <Btn
                        className={activeCard === "uploadCard" ? "active" : ""} 
                        text="Upload"
                        onClick={() => setActiveCard("uploadCard")}
                    />

                </div>

            <hr></hr>

                { activeCard === "createCard" && 
                <div className="create-banner">
                    <h3 className="title">Criar Banner</h3>
                    <form>
                        <input 
                            type="text"                        
                            placeholder="Título" 
                        />
                        <input 
                            type="text"
                            placeholder="Descrição da imagem" 
                        />
                        <input 
                            type="text" 
                            placeholder="Imagens: .png, .jpg"
                        /> 
                        <Btn 
                            text="Criar"
                        />
                    </form>
                </div>
                }

                { activeCard === "listCard" && 
                    <List />
                }

                { activeCard === "editCard" && 
                <div className="create-banner">
                    <h3 className="title">Editar Banner</h3>
                    <form>
                        <input 
                            type="text"                        
                            placeholder="Título" 
                        />
                        <input 
                            type="text"
                            placeholder="Descrição da imagem" 
                        />
                        <input 
                            type="text" 
                            placeholder="Imagens: .png, .jpg"
                        /> 
                        <Btn 
                             text="Editar"
                        />
                            
                    </form>
                </div>
                }

                { activeCard === "deleteCard" && 
                <div className="create-banner">
                    <h3 className="title">Deletar Banner</h3>
                    <form>
                        <input 
                            type="text"                        
                            placeholder="Digite o título da imagem que deseja deletar" 
                        />                        
                        <input 
                            type="text" 
                            placeholder="Digite o ID da imagem que deseja deletar"
                        /> 
                        <button>
                            Deletar
                        </button>
                    </form>
                </div>
                }

                { activeCard === "uploadCard" && 
                <div className="create-banner">
                    <h3 className="title">Fazer Upload</h3>
                    <form>
                        <input 
                            type="text"                        
                            placeholder="Título" 
                        />
                        <input 
                            type="text"
                            placeholder="Descrição da imagem" 
                        />
                        <input 
                            type="text" 
                            placeholder="Imagens: .png, .jpg"
                        /> 
                        <button>
                            Enviar
                        </button>
                    </form>
                </div>
                }
                
        </ContainerBanner>
    )
}

export default Create