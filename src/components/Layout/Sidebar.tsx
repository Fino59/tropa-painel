import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Painel } from "./styles"
import Astro from '../Svg/Astro'
import Cube from '../Svg/Cube'
import Envelope from '../Svg/Envelope'
import Globe from '../Svg/Globe'
import Arrow from '../Svg/Arrow'
import Clock from '../Svg/Clock'

const Sidebar: React.FC<any> = (props: any) => { 
    
    console.log("props",props)
    
    // const {banner, setBanner} = useState()

    // useEffect(() => {

    //     const id = props.match.params.id

    //     api.get('banner/'+id).then(response => {
    //         setBanner({...response.data.result})
    //     })

    // }, [props, setBanner])

    // async function getBanner() {
    //     try {
    //       const response = await axios.get('/banner');
    //       console.log(response);
    //     } catch (error) {
    //       console.error(error);
    //     }
    // }

    return (
        <Painel>

            <nav className="navbar">
                <ul>
                    <li className="link">
                        <Link to="/">
                            <Astro />
                            <span className="title">Conta</span>
                        </Link>
                    </li>

                    <li className="link">
                        <Link to="/banner">
                            <Clock />                            
                            <span className="title">Banners</span>
                        </Link>
                    </li>

                    <li className="link">
                        <Link to="/contatos">                            
                            <Envelope />
                            <span className="title">Contato</span>
                        </Link>
                    </li>

                    <li className="link">
                        <Link to="/portfolio">
                            <Cube />                            
                            <span className="title">Portfólio</span>
                        </Link>
                    </li>                   

                    <li className="link">
                        <Link to="/">                            
                            <Arrow />
                            <span className="title">Sair</span>
                        </Link>
                    </li>              
                </ul>
            </nav>

        </Painel>
    )
}

export default Sidebar;