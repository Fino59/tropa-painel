import styled from "styled-components"

export const ContainerPortfolio = styled.div`
    background: #E3E3E3;
    width: 100vw;
    height: 90vh;
    padding: 100px 10px 10px 80px;
    position: fixed;  
    h1 {
        color: #CC6237;
        padding: 30px 0 10px 80px;
    }
    hr {
        border: 1px solid #CC6237;
    }
    .list-contact {
        width: calc(100% - 60px);
        padding: 0 80px;
        .title {
            font-size: 18px;
        }
        table {
            background: #FFF;
            width: 85%;
            border: 1px solid #CC6237;
            thead {
                background: #D6BBA9;
                th {
                    border-left: 1px solid #FFF;
                }
            }
            th {
                font-weight: 500;
                border-left: 1px solid #CC6237;                
            }
            th:first-child {
                border-left: 0;
            }
            tbody > th {
                .gears {
                    background: #FFF;
                    border: none;
                    padding: 10px;                   
                }
                svg {
                    width: 20px;
                    height: 20px;
                    fill: #CC6237;
                    transition: 150ms ease-in-out;
                    &:hover {
                        transform: scale(1.5);
                    }                    
                }
            }
        }
    }
`