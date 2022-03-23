import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey, lime } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: lime,
  },
});

theme = responsiveFontSizes(theme);

export default theme;