import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e9e9e9', //gray
      main: '#f9f9f9', //white
      dark: '#001639', //dark blue
    },
    secondary: {
      light: '#d8973c', //musturd yellow
      main: '#4b88a2', //coral blue
    },
  },
});

export default theme;