import styled from "styled-components"

export const ContainerContact = styled.div`
    background: #E3E3E3;
    width: 100vw;
    height: 100vh;
    padding: 100px 10px 10px 80px;
    position: fixed; 
    h1 {
        color: #CC6237;
        margin: 0;
        padding: 30px 0 10px 80px;
    }
    hr {
        border: 1px solid #CC6237;
    }
    .contacts-buttons {
        width: 85%;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 10px 0 20px 80px;
        button {
            width: 180px;
            height: 45px;
            padding: 15px 0;
            background: #CC6237;
            border-radius: 30px;
            border: none;
            box-sizing: border-box;

            color: #FFF;
            font-family: 'Chaney'; 
            font-weight: normal;
            font-size: 14px;

            cursor: pointer;
            box-shadow: 1px 1px 5px #00000059;
            transition: 250ms ease-in-out;
            &:hover {                
                background: #E3E3E3;
                color: #CC6237;
                border: 2px solid #CC6237;
            }
        }
    }
    .list-contact{
        background: #E3E3E3;
        width: 100%;
        display: flex;
        flex-direction: column; 
        padding: 0 80px;       
        form {
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
                margin-top: 10px;
                height: 45px;
                padding: 15px 0;
                background: #CC6237;
                border-radius: 30px;
                border: none;
                box-sizing: border-box;

                color: #FFF;
                font-family: 'Chaney'; 
                font-weight: normal;
                font-size: 14px;

                cursor: pointer;
                box-shadow: 1px 1px 5px #00000059;
                transition: 250ms ease-in-out;
                &:hover {                
                    background: #E3E3E3;
                    color: #CC6237;
                    border: 2px solid #CC6237;
                }
            }
        }
    }
`
