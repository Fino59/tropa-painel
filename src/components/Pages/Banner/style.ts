import styled from "styled-components"

export const ContainerBanner = styled.div`
    background: #E3E3E3;
    width: 100vw;
    height: 100vh;    
    h1 {
        color: #CC6237; 
        margin: 0;
        padding: 20px;
    }
    hr {
        border: 1px solid #CC6237;
    }
    .create-banner{        
        background: #E3E3E3;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        form {
        padding: 20px;
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
            input {
                height: 25px;
                padding: 5px;
                margin: 10px 0;
                border-radius: 5px;
                border: none;
            }
            button {
                font-family: 'Bebas Neue';
                font-size: 20px;
                background-color: #CC6237;
                border-radius: 5px;
                border: none;
                margin: 10px 0;
                padding: 10px;
                box-shadow: 1px 1px 5px #00000059;
            }
        }
    }
`
