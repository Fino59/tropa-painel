import styled from "styled-components"

export const ContainerBanner = styled.div`
    background: var(--light-gray);
    width: 100vw;
    height: 90vh; 
    padding: 100px 10px 10px 80px;
    position: fixed;    
    h1 {
        color: var(--primary); 
        margin: 0;
        padding: 20px 0 20px 80px;
    }
    hr {
        border: 1px solid var(--primary);
    }
    .banner-buttons {
        width: 85%;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 10px 0 20px 80px;
        button {
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
                background: var(--light-gray);
                color: var(--primary);
                border: 2px solid var(--primary);
            }
            &:focus {
                background: var(--light-gray);
                color: var(--primary);
                border: 2px solid var(--primary);
            }
        }
    }
    .create-banner{        
        background: var(--light-gray);
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
                box-sizing: border-box;
                height: 45px;
                padding: 5px;
                margin: 10px 0;
                font-size: 16px;                
                border-radius: 5px;
                border: none;
                opacity: 0.7;
                &:hover {
                    opacity: 1;
                    border: 2px solid var(--primary)
                }
                &:focus {
                    outline: none;                    
                    border-bottom: 3px solid var(--primary);
                    opacity: 1;                    
                }                
            }
            button {
                margin-top: 10px;
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
                    background: var(--light-gray);
                    color: var(--primary);
                    border: 2px solid var(--primary);
                }
            }
        }
    }    
`

export const Listcontainer = styled.div`
    width: calc(100% - 60px);
    padding: 0 80px; 
    margin-top: 27px;
    table {
        background: var(--white);
        width: 85%;
        border: 1px solid var(--primary);
        thead {
            background: var(--secondary);
            tr:first-child {
                opacity: 1;
            }
            th {
                border-left: 3px solid var(--white);
            }
        }        
        tr {
            opacity: 0.6;
            &:hover {
                opacity: 1;
            }
        }
        tr:nth-child(2n) {
            background: #dedede;                
        }
        th {
            font-weight: 500;
            border-left: 1px solid var(--primary);  
            border-bottom: 1px solid black;                
        }    
        .id {
            padding: 5px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            .spacing {
                width: 20px;
            }
            .id-filter {
                width: 20px;
                border: none;
                background: transparent;
                cursor: pointer;                    
                img {
                    width: 20px;
                }
            }
        }        
        th:first-child {
            border-left: 0;
        }            
        tbody > th {
            .gears {
                background: var(--white);
                border: none;
                padding: 10px;                   
            }
            svg {
                width: 20px;
                height: 20px;
                fill: var(--primary);
                transition: 150ms ease-in-out;
                &:hover {
                    transform: scale(1.5);
                }                    
            }
        }
    }        
`
