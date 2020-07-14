import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fafafa',
            main: '#f9f9f9',
            dark: '#aeaeae',
            contrastText: '#000',
        },
        secondary: {
            light: '#334460',
            main: '#001639',
            dark: '#000f27',
            contrastText: '#f9f9f9',
        },
        info: {
            main: '#d8973c',
        },
    },
    typography: {
        fontFamily: `'Noto Sans TC', sans-serif`,
        h1: {
            fontFamily: `'Noto Serif', serif`,
            fontWeight: 700,
            fontSize: "3.5rem",
        },
        h2: {
            fontFamily: `'Noto Serif', serif`,
            fontWeight: 400,
            fontSize: "2rem",
            // color: '#001639'
        },
        h3: {},
        subtitle1: {
            fontWeight: 300,
            fontSize: '1rem',
            letterSpacing: '1px',
            lineHeight: 1.5
        },
    }
});

export default theme;