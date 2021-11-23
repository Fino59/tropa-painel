import React, { useState } from "react";
import List from "./List";

import { ContainerContact } from "./style";

const Create: React.FC = (props) => {

    const [activeCard, setActiveCard] = useState('createContact')

    return (
        <ContainerContact>
            <h1>Contatos</h1>

            <div className="contacts-buttons">
                <button 
                    className={activeCard === "createContact" ? "active" : ""} 
                    onClick={() => setActiveCard("createContact")}
                >
                    Criar
                </button>
                <button
                    className={activeCard === "listContact" ? "active" : ""} 
                    onClick={() => setActiveCard("listContact")}
                >
                    Listar
                </button>                
                <button
                    className={activeCard === "deleteContact" ? "active" : ""} 
                    onClick={() => setActiveCard("deleteContact")}
                >
                    Deletar
                </button>                
            </div>
            <hr></hr>

            { activeCard === "createContact" &&                
                <div className="list-contact">
                    <h3 className="title">Escreva sua mensagem</h3>
                    <form>
                        <input 
                            type="text"                        
                            placeholder="Nome" 
                        />
                        <input 
                            type="text"
                            placeholder="Email" 
                        />
                        <input 
                            type="text" 
                            placeholder="Mensagem"
                        /> 
                        <button>
                            Enviar
                        </button>
                    </form>                
                </div>
            }
            
            { activeCard === "listContact" &&                
                <List />
            }

            { activeCard === "deleteContact" &&
                <div className="list-contact">
                    <h3 className="title">Deletar contato</h3>
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
            
        </ContainerContact>
    )
}

export default Create