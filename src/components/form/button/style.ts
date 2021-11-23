import styled from "styled-components"

export const Button = styled.button`
    width: 180px;
    height: 45px;
    padding: 15px 0;
    background: var(--primary);
    border-radius: 30px;
    border: none;
    box-sizing: border-box;

    color: var(--white);
    font-family: 'Chaney'; 
    font-weight: normal;
    font-size: 14px;

    cursor: pointer;
    box-shadow: 1px 1px 5px #00000059;
    transition: 250ms ease-in-out;
    &:hover {                
        background: red;
        color: #CC6237;
        border: 2px solid #CC6237;
    }
`;