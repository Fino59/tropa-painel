import React, { useState } from "react";

import { ContainerPortfolio } from "./style";
import List from "./List";


const Create: React.FC = (props) => {

    const [activeCard, setActiveCard] = useState('createPortfolio')

    return (
        <ContainerPortfolio>
            <h1>Criar Portfólio</h1>

            <div className="portfolio-buttons">
                <button 
                    className={activeCard === "createPortfolio" ? "active" : ""} 
                    onClick={() => setActiveCard("createPortfolio")}
                    >
                    Criar
                </button>
                <button
                    className={activeCard === "listPortfolio" ? "active" : ""} 
                    onClick={() => setActiveCard("listPortfolio")}
                    >
                    Listar
                </button>                
                <button
                    className={activeCard === "deletePortfolio" ? "active" : ""} 
                    onClick={() => setActiveCard("deletePortfolio")}
                    >
                    Deletar
                </button>                
            </div>

            <hr></hr>

            { activeCard === "createPortfolio" &&                
                <div className="create-portfolio">
                    <h3 className="title">Digite os dados do portfólio </h3>
                    <form>
                        <input 
                            type="text"                        
                            placeholder="Título" 
                        />
                        <input 
                            type="text"
                            placeholder="Ordenação" 
                        />
                        <input 
                            type="text" 
                            placeholder="Tipo"
                        /> 
                        <input 
                            type="text" 
                            placeholder="Imagem principal"
                        /> 
                        <input 
                            type="text" 
                            placeholder="Imagem Tipo"
                        /> 
                        <input 
                            type="text" 
                            placeholder="Descrição"
                        /> 
                        <input 
                            type="text" 
                            placeholder="Status"
                        /> 
                        <button>
                            Enviar
                        </button>
                    </form>                
                </div>
            }
            
            { activeCard === "listPortfolio" &&                
                <List />
            }

            { activeCard === "deletePortfolio" &&
                <div className="create-portfolio">
                    <h3 className="title">Deletar portfólio</h3>
                    <form>
                        <input 
                            type="text"                        
                            placeholder="ID" 
                        />
                        <input 
                            type="text"                        
                            placeholder="Nome" 
                        />
                        <input 
                            type="text"
                            placeholder="Email" 
                        />                        
                        <button>
                            Deletar
                        </button>
                    </form>                
                </div>
            }
            
            
        </ContainerPortfolio>
    )
}

export default Create