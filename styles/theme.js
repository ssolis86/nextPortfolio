import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey, white, purple } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  
  palette: {
    primary: {
      main: grey[900],
      light: white,
    },
    secondary: purple,
  },
});

theme = responsiveFontSizes(theme);

export default theme;