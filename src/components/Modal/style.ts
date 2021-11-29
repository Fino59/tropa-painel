import styled from "styled-components"

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .8);
        cursor: pointer;
    } 
    .modal-box {
        position: relative;
        width: 40%;
        margin: 0 10%;
        padding: 50px;
        box-sizing: border-box;
        border-radius: 10px;
        background-color: var(--white);        
        display: flex;
        flex-direction: column;
        .modal-title {
          color: var(--primary);
          font-size: 30px;
        }
        .modal-content {
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            color: #003d6a;
            font-size: 16px;
            form {
                display: flex;
                flex-direction: column;
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
                }
                .btn-primary {
                    width: 100%;
                    height: 45px;
                    padding: 15px 0;
                    background: var(--primary);
                    border-radius: 30px;
                    border: none;
                    box-sizing: border-box;
                    margin: 25px 0;

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
            }
        }
        .modal-close {
          cursor: pointer;  
          position: absolute;
          top: -20px;
          right: -20px;
          transition: transform 350ms ease-in-out;
          transform-origin: 50% 50%;
          width: 50px;
          height: 50px;
          padding: 10px;
          background: var(--primary);
          border-radius: 50%;
          border: none;
          transform: rotate(180deg);
          svg {
              width: 25px;
              height: 25px;
              path {
                fill: var(--white);
                stroke: var(--white);
              }
          }    
        }
        .modal-close:hover {
          transform: rotate(0deg);
        }
    }
`
  
  
  