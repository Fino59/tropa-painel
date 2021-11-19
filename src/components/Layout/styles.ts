import styled from 'styled-components'

export const ContainerLayout = styled.div`
position: relative;
display: block;
> .content{
    display: block;
    padding: 80px 30px 30px 80px;
    width: 90vw;
    height: 100vh;
}
`

export const ContainerHeader = styled.header`
    position: fixed;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;    

    background-color: #E3E3E3;
    box-shadow: 0px 0px 10px #0000001A;
    .logo > svg{
        width:  150px;
        height: 20px;        
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
                border-left: 1px solid #CC6237;
                font-size: 90%;
                color: #000;
            }
            .user {
                color: #CC6237;
            }
        }
        > nav{
            position: absolute;
            right: 0;
            opacity: 0;
            visibility: hidden;

            background-color: #E3E3E3;
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
                color: #000;
                transition: .2s;
                &:hover{
                    color: #CC6237;
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
    background: #CC6237;    
    z-index: 8;
    width: 80px;
    position: fixed;
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
                    fill: #E3E3E3;
                    opacity: 1;
                    stroke: #E3E3E3;
                    transition: .1s ease-in-out;
                    transition-delay: .1s;
                }
            }                        
            .title{
                margin-left: 20px;
                visibility: hidden;
                opacity: 0;
                width: 0;                
                color: #E3E3E3;
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
            background-color: #CC6237;
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
                            fill: #fff;
                            opacity: 1;
                            stroke: #fff;
                        }
                    }              
                }
            }
        }
    }   
`