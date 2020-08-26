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
        fontFamily: `'Lato', sans-serif`,
        h1: {
            fontFamily: `'Roboto', sans-serif`,
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
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 400,
            fontSize: "2rem",
            // color: '#001639'
        },
        h3: {
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 400,
            fontSize: "1.5rem",

        },
        subtitle1: {
            fontWeight: 400,
            fontSize: '1rem',
            letterSpacing: '2px',
            lineHeight: '19px'
        },
    }
});

export default theme;