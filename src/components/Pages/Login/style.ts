import styled from "styled-components";


export const LoginPage = styled.div`
    background: var(--white);
    width: 100vw;
    height: 100vh; 
    padding: 20px;        
    display: flex;
    align-items: center;
    justify-content: center; 
    position: fixed;
`

export const LoginContainer = styled.div`
    width: 70%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;    
`

export const SignIn = styled.div`
    display: flex;    
    align-items: center;   
    justify-content: center;
    background: var(--light-gray);
    height: 100%;
    width: 50%;
    border-radius: 8px 0 0 8px;    
    form {
        width: 65%;
        display: flex;
        flex-direction: column;        
        align-items: center;
        .description {
            font-family: 'Bebas Neue';
            font-size: 30px;
            color: var(--primary);
        }
        input {
            box-sizing: border-box;
            width: 100%;
            height: 45px;
            margin-bottom: 25px;   
            padding: 0 10px;
            font-size: 18px;
            font-family: 'Bebas Neue';                        
            border: 0;
            outline: 0;
            background: transparent !important;
            border-bottom: 2px solid var(--primary);            
            color: var(--primary);
            &::placeholder {
                color: var(--primary);
            }
            /* &:focus {
                border-left: 2px solid var(--secondary);
                border-right: 2px solid var(--secondary);
                border-top: 2px solid var(--secondary);
            } */
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
        .btn.btn-primary {
            width: 100%;
            height: 45px;
            padding: 15px 0;
            background: var(--primary);
            border-radius: 30px;
            border: none;
            box-sizing: border-box;
            margin-bottom: 25px;

            color: var(--light-gray);
            font-family: 'Chaney'; 
            font-weight: normal;
            font-size: 14px;

            cursor: pointer;
            box-shadow: 1px 1px 5px #00000059;
            transition: 250ms ease-in-out;
            &:hover {                
                background: var(--light-gray);
                color: var(--primary);
                border: 2px solid var(--primary);
            }
        }
        .btn.btn-link {
            color: var(--primary);            
            transition: 250ms ease-in-out;
            &:hover {
                color: var(--black);                
            }
        }
    }
`

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #24201a;
    width: 50%;
    height: 100%;
    border-radius: 0 8px 8px 0;
    .icons {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        top: auto;
        bottom: auto;
        z-index: 0;
        svg {
            width: 280px;
            height: 280px;
            opacity: 0.2;
            path {
                stroke: var(--black);               
            }
        }
    }
    svg {
        width: 70%;
        z-index: 1;
    }
`
