import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#de683a",
      main: "#d64309",
      dark: "#952e06",
      contrastText: "#fff"
    },
    secondary: {
      light: "#999999",
      main: "#565656",
      dark: "#4E4848",
      contrastText: "#000"
    }
  }
});

export default theme;
