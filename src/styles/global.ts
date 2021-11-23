import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root {
    --primary: #CC6237;
  --secondary: #D6BBA9;
  --light-gray: #E3E3E3 ;
  --white: #FFF;
  --black: #000;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}
html {
    @media (max-width: 1080px) {
      font-size: 16px;
    }
    @media (max-width: 720px) {
      font-size: 14px;
    }
}
body {
    background: var(--background);
    color: var(--default);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
    font-family: 'Segoe UI', sans-serif;
    font-size: 14px;
    font-weight: 400;
    outline: none;
}
h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}
button {
    cursor: pointer;
}
hr {
    height: 1px;
    margin: 15px 0;
    background-color: #ddd;
    border: none;
}
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    height: 50px;
    background: transparent;
    border: none;
    border-radius: 5px;
    color: var(--primary);
    margin: 15px 0;
    font-weight: 600;
    transition: .2s;
    text-decoration: none;
    svg{
        margin: 0 5px;
    }
    &:hover{
        opacity: .8;
    }
    &.btn-primary {
        background-color: var(--primary);
        color: #FFFFFF;
        box-shadow:0px 10px 10px rgba(0,0,0,.03);
    }
    &.btn-primary-outline {
        background-color: transparent;
        border: 1px solid var(--primary);
        color: var(--primary);
        box-shadow:0px 10px 10px rgba(0,0,0,.03);
    }
    &.btn-secondary {
        background-color: var(--secondary);
        color: #FFFFFF;
        box-shadow:0px 10px 10px rgba(0,0,0,.03);
    }
    &.btn-secondary-outline {
        background-color: transparent;
        border: 1px solid var(--secondary);
        color: var(--secondary);
        box-shadow:0px 10px 10px rgba(0,0,0,.03);
    }
    &.btn-featured {
        background-color: var(--featured);
        color: #FFFFFF;
        box-shadow:0px 10px 10px rgba(0,0,0,.03);
    }
    &.btn-danger {
        background-color: var(--danger);
        color: #FFFFFF;
        box-shadow:0px 10px 10px rgba(0,0,0,.03);
    }
    &.btn-danger-outline {
        background-color: #fff;
        border: 1px solid var(--danger);
        color: var(--danger);
        box-shadow:0px 10px 10px rgba(0,0,0,.03);
    }
    &.btn-link-primary{
        color: var(--primary);
        &:hover{
            text-decoration: underline;
        }
    }
    &.btn-link-secondary{
        color: var(--secondary);
        &:hover{
            text-decoration: underline;
        }
    }
    &.btn-link-danger{
        color: var(--danger);
        &:hover{
            text-decoration: underline;
        }
    }
    &.btn-link{
        &:hover{
            text-decoration: underline;
        }
    }
}
.color-primary{
    color: var(--primary);
}
.center{
    text-align: center
}
`