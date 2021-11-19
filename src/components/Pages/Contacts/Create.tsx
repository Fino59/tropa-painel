import React from "react";

import { ContainerContact } from "./style";

const Create: React.FC = (props) => {
    return (
        <ContainerContact>
            <h1>Nova Mensagem</h1>
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