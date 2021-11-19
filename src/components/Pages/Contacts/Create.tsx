import React from "react";

import { ContainerContact } from "./style";

const Create: React.FC = (props) => {
    return (
        <ContainerContact>
            <h1>Contatos</h1>

            <div className="contacts-buttons">
                <button 
                    // className={activeCard === "createContact" ? "active" : ""} 
                    // onClick={() => setActiveCard("createContact")}
                >
                    Criar
                </button>
                <button
                    // className={activeCard === "listContact" ? "active" : ""} 
                    // onClick={() => setActiveCard("listContact")}
                >
                    Listar
                </button>                
                <button
                    // className={activeCard === "deleteContact" ? "active" : ""} 
                    // onClick={() => setActiveCard("deleteContact")}
                >
                    Deletar
                </button>                
            </div>
            <hr></hr>

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
            
        </ContainerContact>
    )
}

export default Create