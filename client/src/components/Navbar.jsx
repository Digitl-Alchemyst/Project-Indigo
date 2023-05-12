import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { profileImage } from "assets/profile.jpg";
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Box,
  Typography,
  InputBase,
  Menu,
  MenuItems,
  useTheme,
} from "@mui/material";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    // <AppBar
    //   sx={{
    //     position: "static",
    //     background: "none",
    //     boxShadow: "none",
    //   }}
    // >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side of Navbar */}
        <FlexBetween >
          <FlexBetween
            backgroundColor={theme.palette.primary[400]}
            borderRadius="5px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search...." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* Right Side of Navbar */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    // </AppBar>
  );
};

export default Navbar;
