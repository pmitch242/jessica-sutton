import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f9f9f9', //white
    },
    secondary: {
      main: '#4b88a2', //coral blue
    },
    text: {
      secondary:'4b88a2'
    },
    hightlights: {
      primary: '#d8973c',
      secondary: '#4b88a2',
    }
  },
});

export default theme;