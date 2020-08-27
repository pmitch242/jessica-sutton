import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#001639',
            contrastText: '#f9f9f9',
        },
        secondary: {
            main: '#d8973c',
        },
        info: {
            main: '#d8973c',
        },
    },
    typography: {
        fontFamily: `'Open Sans', sans-serif`,
        h1: {
            fontFamily: `'EB Garamond', serif`,
            fontWeight: 500,
            textAlign: 'center',
            lineHeight: '40px',
            fontSize: '2rem',
        letterSpacing: '2px',
        marginBottom: '12px',
            '@media (min-width:600px)': {
                fontSize: '3.25rem',
                lineHeight: '60px',
                textAlign: 'left',
                letterSpacing: '1px',
                marginBottom: '5px',
            }
        },
        h2: {
            fontFamily: `'EB Garamond', serif`,
            fontWeight: 400,
            fontSize: "2rem",
            // color: '#001639'
        },
        h3: {
            fontFamily: `'EB Garamond', serif`,
            fontWeight: 400,
            fontSize: "1.5rem",

        },
        subtitle1: {
            fontWeight: 400,
            fontSize: '1rem',
            letterSpacing: '2px',
            lineHeight: '28px'
        },
    }
});

export default theme;