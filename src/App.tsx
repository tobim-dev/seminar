import React from "react";
import { Box, Button, Container } from "@mui/material";
import { FunctionComponent } from "react";
import { Header } from "./components/AppBar";
import { BasicCard } from "./components/BasicCard";

export const App: FunctionComponent = () => {
  return (
    <Box>
      <Header />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <BasicCard/>
      </Container>
    </Box>
  );
};
