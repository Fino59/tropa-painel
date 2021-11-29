import styled from "styled-components"


export const HomeContainer = styled.div`
    background: var(--light-gray);
    width: 95vw;
    height: 90vh; 
    padding: 100px 10px 10px 100px;
    position: fixed; 
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {        
        width: 550px;  
        span {
            font-size: 22px;
        }      
        svg {
            width: 100%;
        }
    }  
`