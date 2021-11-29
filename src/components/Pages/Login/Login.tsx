import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Btn from '../../form/button/Button'
import TropaUm from '../../Svg/Tropa1'
import Astro from '../../Svg/Astro'
import { LoginContainer, LoginPage, LogoDiv, SignIn } from './style'
import { Modal } from '../../Modal/Modal'

interface IAuth {
    Email: string
    Senha: string
}

const Login: React.FC = (props) => {

    const [loading, setLoading] = useState<boolean>(false)

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!isModalOpen);

    const [login, setLogin] = useState<IAuth>({
        Email: "",
        Senha: ""
    })

    // const onChangeLogin = (key:string, value:string) => {
    //     if( key === "Email" ) login.Email = value
    //     if( key === "Senha" ) login.Senha = value
    //     setLogin({...login})
    // }

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

    return (
        <>
        <LoginPage>

            <LoginContainer>

                <SignIn>

                    <form onSubmit={handleSubmit}>

                        <p className="description">Olá Astronauta!</p>

                        <input name="Email" placeholder="Digite aqui seu email" />

                        <input  name="Senha" placeholder="Digite aqui sua senha"  />

                        <Btn className="btn btn-primary" text="Entrar" /> {/* loading={loading} */}

                    </form>

                    <div className="forgot">
                        <Link to="/recuperar-senha" className="password">Esqueceu a senha?</Link>
                        <Btn onClick={toggleModal} text="Novo aqui?" className="new-user" />                         
                    </div>

                </SignIn>

                <LogoDiv>  
                    <div className="icons"><Astro /></div>                  
                    <TropaUm />
                </LogoDiv>

            </LoginContainer>

        </LoginPage>

        <Modal
            isOpen={isModalOpen}
            onClose={toggleModal}
        >        
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, modi nobis omnis veritatis culpa earum soluta aperiam aliquam cupiditate doloribus iusto, quisquam hic molestiae deleniti temporibus vitae incidunt maiores fuga!
        </Modal>
        </>
    )
}

export default Login