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
import profileImage from "assets/profile.jpg";
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Box,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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
      <FlexBetween>
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

        <FlexBetween>
          <Button
            onClick={handleClick}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItem: "center",
              textTransform: "none",
              gap: "1rem",
            }}
          >
            <Box
              component="img"
              alt="profile"
              src={profileImage}
              height="38px"
              width="38px"
              borderRadius="50%"
              sx={{ objextFit: "cover" }}
            />

            <Box textAlign="left">
              <Typography
                fontWeight="bold"
                fontSize="0.85rem"
                sx={{ color: theme.palette.secondary[100] }}
              >
                {user.name}
              </Typography>
              <Typography
                fontSize="0.75rem"
                sx={{ color: theme.palette.secondary[200] }}
              >
                {user.occupation}
              </Typography>
            </Box>
            <ArrowDropDownOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
          </Menu>
        </FlexBetween>
      </FlexBetween>
    </Toolbar>
    // </AppBar>
  );
};

export default Navbar;
