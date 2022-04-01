import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey, lime, purple } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: purple,
  },
});

theme = responsiveFontSizes(theme);

export default theme;