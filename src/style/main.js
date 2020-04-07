import { createGlobalStyle } from 'styled-components';
import { typeColor, themeColor } from './var/_colors';

export const theme = {
    colors: {
        typeColor: typeColor,
        ...themeColor
    },
}

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Red Hat Display', sans-serif;
        font-size: 14px;
        background-color: ${themeColor.default}
    }

    h1,h2,h3 {
        font-size: 20px;
        font-family: 'Gotu', sans-serif;
        color: ${themeColor.secondary}
    }

    input, select {
        color: ${themeColor.text};
        background-color: transparent;
        border: 2px solid ${themeColor.secondary};
        border-radius: 10px;
        padding: .4em;
    }

    input:hover, select:hover {
    }

    input, select:focus {
        
    }

    button {
        border: 1px solid ${themeColor.secondary};
        background-color: ${themeColor.secondary};
        color: ${themeColor.lightText};
        border-radius: 10px;
        padding: .4em .6em;
    }

    button:hover {
        background-color: ${themeColor.hover};
    }

    button:focus{
        border: 1px solid ${themeColor.active};
        background-color: ${themeColor.active};;
        color: ${themeColor.lightText};
    }
    
    *:focus { outline: none }
`