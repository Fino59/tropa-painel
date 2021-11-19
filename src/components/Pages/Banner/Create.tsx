import React from 'react'
import List from './List'
import { ContainerBanner } from './style'

const Create: React.FC<any> = (props) => {

    return (
        <ContainerBanner>
            <h1>Gerenciar Banners</h1>

                <div className="banner-buttons">
                    <button 
                        // className={activeCard === "createCard" ? "active" : ""} 
                        // onClick={() => setActiveCard("createCard")}
                    >
                        Criar
                    </button>
                    <button
                        // className={activeCard === "listCard" ? "active" : ""} 
                        // onClick={() => setActiveCard("listCard")}
                    >
                        Listar
                    </button>
                    <button
                        // className={activeCard === "listCard" ? "active" : ""} 
                        // onClick={() => setActiveCard("listCard")}
                    >
                        Editar
                    </button>
                    <button
                        // className={activeCard === "deleteCard" ? "active" : ""} 
                        // onClick={() => setActiveCard("deleteCard")}
                    >
                        Deletar
                    </button>
                    <button
                        // className={activeCard === "uploadCard" ? "active" : ""} 
                        // onClick={() => setActiveCard("uploadCard")}
                    >
                        Upload
                    </button>
                </div>

            <hr></hr>

                { true ? "" : 
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
                        <button>
                            Enviar
                        </button>
                    </form>
                </div>
                }

                { true ? "" : 
                    <List />
                }

                { true ? "" : 
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
                        <button>
                            Enviar
                        </button>
                    </form>
                </div>
                }

                { true ? "" : 
                <div className="create-banner">
                    <h3 className="title">Deletar Banner</h3>
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

                { true ? "" : 
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