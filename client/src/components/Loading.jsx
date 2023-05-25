import React from "react";
import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import loading from "../assets/loading.gif";

import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";




const Loading = () => {
    const theme = useTheme();

        return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                >
                  <h1>
                  <p>The DataBase is currently loading....</p>
                  <img src={loading} alt="loading" />
                  
                  
                  <p>Please wait for the data to load.</p>
                  </h1>
                </Box>
        );
    };

export default Loading;
