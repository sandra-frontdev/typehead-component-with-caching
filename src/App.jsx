import React from "react";

// Pages imports
import Home from "./pages/Home/Home";

// Components imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Semantic ui components imports
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import "./assets/styles/main.scss";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#88e85d"
      },
      secondary: {
        main: "#ff5741"
      },
      textPrimary: {
        main: "#000"
      },
      textSecondary: {
        main: "#fff"
      },
      inherit: {
        main: "#f6f6f6"
      },
      contrained: {
        main: "#88e85d"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
