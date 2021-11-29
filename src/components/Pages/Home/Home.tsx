import React from "react";
import Tropa from "../../Svg/Tropa";
import { HomeContainer } from './style'

const Home: React.FC = (props) => {
    return (
        <HomeContainer>
            <div className="logo">
                <span>Bem vindo ao painel da</span>
                <Tropa />
            </div>            
        </HomeContainer>
    )
}

export default Home