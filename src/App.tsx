import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkMode } from "./atom";
import Header from "./components/Header";
import GlobalStyle from "./Styles/GlobalStyle";
import { darkTheme, lightTheme } from "./Styles/theme";

function App() {
  const darkModeState = useRecoilValue(darkMode);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkModeState ? darkTheme : lightTheme}>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
