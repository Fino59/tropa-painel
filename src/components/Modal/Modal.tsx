import React, { useState } from 'react'
import Btn from '../form/button/Button';
import Arrow from '../Svg/Arrow';
import { ModalContainer } from './style'


interface ModalProps {    
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, }) => {
    const overlayRef = React.useRef(null);

    const [loading, setLoading] = useState<boolean>(false)

    const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault()
            setLoading(true)
            // let response = await api.post("/auth/login", login)
            // setLoading(false)
            // if( response.data.error === true ) throw response.data.message
            // window.localStorage.setItem("token", response.data.result.token)
            // window.localStorage.setItem("profile", JSON.stringify(response.data.result.profile))
            window.location.href = "/"
        } catch(message){
            // Message.error(String(message))
        }
    }

    return isOpen ? (
        <ModalContainer>
            <div 
                className='modal-overlay'
                ref={overlayRef} 
                onClick={handleOverlayClick} 
            />
            <div className='modal-box'>
                <button 
                    className='modal-close'
                    onClick={onClose}
                >
                    <Arrow />
                </button>
                <div className='modal-title'>
                    <p>Cadastre-se</p>
                </div>
                <div className='modal-content'>
                    <form onSubmit={handleSubmit}>

                        <input name="Nome" placeholder="Digite aqui seu nome" />

                        <input name="Email" placeholder="Digite aqui seu email" />

                        <input  name="Senha" placeholder="Digite aqui sua senha"  />

                        <Btn className="btn-primary" text="Cadastrar" /> {/* loading={loading} */}

                    </form>
                </div>
            </div>
        </ModalContainer>    
    ) : null;
}