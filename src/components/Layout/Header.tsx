import React from "react";
import { ContainerHeader } from "./styles";
import LogoTropa from '../Svg/LogoTropa'

const Header: React.FC = (props) => {
    return (
        <ContainerHeader>
            <div className="logo">
                <LogoTropa />
            </div>

            <div className="containerAuth">
                <div>
                    <h3>Olá</h3>
                    <span className='user'>Nome do user</span>
                </div>
                <nav>
                    <button type="button">Logout</button>
                </nav>
            </div>    
        </ContainerHeader>
    )
}

export default Header