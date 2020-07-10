import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f9f9f9', //white
    },
    secondary: {
      main: '#4b88a2', //coral blue
    },
    custom: {
      white:'#f9f9f9',
      gray: '#e9e9e9',
      darkBlue:'#001639',
      musturd: '#d8973c',
      lightBlue: '#4b88a2',
    }
  },
});

export default theme;