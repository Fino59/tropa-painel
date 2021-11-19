import React from "react";
import Tropa from "../../Svg/Tropa";
import { Wtf } from './style'

const Home: React.FC = (props) => {
    return (
        <Wtf>
            <div className="logo">
                <span>Bem vindo ao painel da</span>
                <Tropa />
            </div>            
        </Wtf>
    )
}

export default Home