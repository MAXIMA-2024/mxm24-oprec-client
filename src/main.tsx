import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import "@/fonts.css";

const theme = extendTheme({
  // fonts: {
  //   body: "Minal",
  //   heading: "Minal",
  // },
  styles: {
    global: {
      body: {
        bg: "#f5f5f5",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
