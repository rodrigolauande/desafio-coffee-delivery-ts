import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.baseText};
        -webkit-font-smoothing: antialiased
 
    }

    body, input, textarea, button {
        font-family: 'Baloo 2', 'Roboto', sans-serif;
        font-weight: 400, 700;
        font-size: 1rem;
    }
`
