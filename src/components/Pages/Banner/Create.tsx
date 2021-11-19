import React from 'react'
import { ContainerBanner } from './style'

const Create: React.FC<any> = (props) => {


    return (
        <ContainerBanner>
            <h1>Gerenciar Banners</h1>
            <hr></hr>
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

        </ContainerBanner>
    )
}

export default Create