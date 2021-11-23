import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Btn from '../../form/button/Button'
import TropaUm from '../../Svg/Tropa1'
import Astro from '../../Svg/Astro'
import { LoginContainer, LoginPage, LogoDiv, SignIn } from './style'

interface IAuth {
    Email: string
    Senha: string
}

const Login: React.FC = (props) => {

    const [loading, setLoading] = useState<boolean>(false)

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
        <LoginPage>

            <LoginContainer>

                <SignIn>

                    <form onSubmit={handleSubmit}>

                        <p className="description">Bem vindo!</p>

                        <input name="Email" placeholder="Digite aqui seu email" />

                        <input  name="Senha" placeholder="Digite aqui sua senha"  />

                        <Btn className="btn btn-primary" text="Entrar" /> {/* loading={loading} */}
                        
                        <Link to="/recuperar-senha" className="btn btn-link">Esqueceu a senha?</Link>

                    </form>

                </SignIn>

                <LogoDiv>  
                    <div className="icons"><Astro /></div>                  
                    <TropaUm />
                </LogoDiv>

            </LoginContainer>

        </LoginPage>
    )
}

export default Login