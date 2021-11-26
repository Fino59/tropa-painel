import styled from 'styled-components'

export const ContainerLayout = styled.div`
    position: relative;
    display: block; 
`

export const ContainerHeader = styled.header`
    position: fixed;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;    

    background-color: var(--light-gray);
    box-shadow: 0px 0px 10px #0000001A;
    .logo > svg{
        width:  180px;
        height: 40px;        
        margin-left: 20px;
    }
    > .containerAuth{
        position: relative;
        cursor: pointer;
        margin-right: 20px;
        div {
            display: flex;
            align-items: center;
            > h3{
                margin: 20px 10px;
                padding-left: 20px;
                line-height: 40px;
                border-left: 1px solid var(--primary);
                font-size: 90%;
                color: #000;
            }
            .user {
                color: var(--primary);
            }
        }
        > nav{
            position: absolute;
            right: 0;
            opacity: 0;
            visibility: hidden;

            background-color: var(--light-gray);
            box-shadow: 0px 5px 10px #0000001A;
            transition: .2s;

            a, button {
                display: block;
                width: 100%;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                background: transparent;
                border: none;
                color: var(--black);
                transition: .2s;
                &:hover{
                    color: var(--primary);
                    cursor: pointer;                    
                }
            }
        }
        &:hover{
            > nav{
                opacity: 1;
                visibility: visible;
            }
        }
    }
`

export const Painel = styled.div`
    background: var(--primary);    
    z-index: 8;
    width: 80px;
    position: fixed;
    left: 0;
    .navbar {
        width: 80px;
        height: 100vh;
        transition: .1s ease-in-out;
        padding-top: 80px;        
        box-shadow: 0px 0px 20px #0000005A;        
        ul {
            padding-left: 0;
        }
        li {
            list-style: none;
            text-align: left;
            font-family: 'Bebas Neue';
            font-size: 1.2rem;
            margin: 20px 0;
            width: 70%;            
            a, button{
                display: flex;
                align-items: center;
                width: 100%;
                height: 60px;
                background: transparent;
                border: none;
                text-decoration: none;                
                transition: .1s ease-in-out;                
            }
            svg {                
                display: flex;
                justify-content: center;
                min-width: 80px;
                width: 80px;
                padding: 20px 0;
                path {
                    fill: var(--light-gray);
                    opacity: 1;
                    stroke: var(--light-gray);
                    transition: .1s ease-in-out;
                    transition-delay: .1s;
                }
            }                        
            .title{
                margin-left: 20px;
                visibility: hidden;
                opacity: 0;
                width: 0;                
                color: var(--light-gray);
                padding: 20px 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                transition: .1s ease-in-out;
                transition-delay: .1s;
            }
            &.active{                
                .icon{
                    opacity: 1;
                }
            }    
        }        
    }
    :hover, &.active{
        width: 280px;
        transition: .1s ease-in-out;
        transition-delay: .1s;
        > .navbar{
            width: 280px;
            background-color: var(--primary);
            overflow-y: auto;
            overflow-x: hidden;
            
            a, button{                
                .icon{
                    opacity: 1;                    
                }
                .title{
                    visibility: visible;
                    width: auto;
                    opacity: 0.8;                    
                }
                &:hover{
                    .title{   
                        color: white;
                        opacity: 1;                        
                    }
                    svg {                                                                
                        path {
                            fill: var(--white);
                            opacity: 1;
                            stroke: var(--white);
                        }
                    }              
                }
            }
        }
    }   
`