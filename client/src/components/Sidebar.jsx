import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});



const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const NavItems1 = [
  { text: "Inbox", icon: <InboxIcon />, path: "/dashboard" },
  { text: "Starred", icon: <MailIcon />, path: "/inbox" },
  { text: "Send email", icon: <InboxIcon />, path: "/mail" },
  { text: "Drafts", icon: <MailIcon />, path: "/drafts" },
];
const NavItems2 = [
  { text: "All mail", icon: <InboxIcon />, path: "/all" },
  { text: "Trash", icon: <MailIcon />, path: "/trash" },
  { text: "Spam", icon: <InboxIcon />, path: "/spam" },
];
const NavItems3 = [
  { text: "Inbox", icon: <InboxIcon />, path: "/dashboard" },
  { text: "Starred", icon: <MailIcon />, path: "/inbox" },
  { text: "Send email", icon: <InboxIcon />, path: "/mail" },
  { text: "Drafts", icon: <MailIcon />, path: "/drafts" },
];
const NavItems4 = [
  { text: "All mail", icon: <InboxIcon />, path: "/all" },
  { text: "Trash", icon: <MailIcon />, path: "/trash" },
  { text: "Spam", icon: <InboxIcon />, path: "/spam" },
];
const NavItems5 = [
  { text: "Inbox", icon: <InboxIcon />, path: "/dashboard" },
  { text: "Starred", icon: <MailIcon />, path: "/inbox" },
  { text: "Send email", icon: <InboxIcon />, path: "/mail" },
  { text: "Drafts", icon: <MailIcon />, path: "/drafts" },
];
const NavItems6 = [
  { text: "All mail", icon: <InboxIcon />, path: "/all" },
  { text: "Trash", icon: <MailIcon />, path: "/trash" },
  { text: "Spam", icon: <InboxIcon />, path: "/spam" },
];

const Sidebar = ({ isNonMobile }) => {
  function MiniDrawer() {
    const theme = useTheme();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("");
    const navigate = useNavigate();

    const handleDrawer = () => {
      setOpen(!open);
    };

    const handleNavigation = (item) => {
      setActive(item.text);
      navigate(item.path);
    };

    return (
      <Box component="nav" sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <Drawer
          variant="permanent"
          open={open}
          anchor="left"
          sx={{
            "& .MuiDrawer-paper": {
              color: theme.palette.grey[200],
              backgroundColor: theme.palette.primary[400],
              boxSizing: "border-box",
              borderWidth: isNonMobile ? "0" : "2px",
            },
          }}
        >

          <Box width="100%">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawer}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              {open && (

              <FlexBetween color={theme.palette.primary[500]}>
                <Box display="flex" alignItems="right" gap="0.5rem">
                  <Typography variant="h2" fontWeight="bold">
                    Indigo
                  </Typography>
                </Box>
              </FlexBetween>
                )}
            </Toolbar>
          </Box>

          <Divider />



          <List sx={{ paddingLeft: 0 }}>
            {NavItems1.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} 
                    sx={{ m: "2.25rem 0 1rem 3rem" }}
                    >
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.primary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.grey[400]
                            : theme.palette.primary[100],
                      }}
                    >
                       <ListItemIcon
                        sx={{
                          // ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[100]
                              : theme.palette.primary[100],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            
            <Divider />

          <List sx={{ paddingLeft: 0 }}>
            {NavItems2.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} 
                    sx={{ m: "2.25rem 0 1rem 3rem" }}
                    >
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.primary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.grey[400]
                            : theme.palette.primary[100],
                      }}
                    >
                       <ListItemIcon
                        sx={{
                          // ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[100]
                              : theme.palette.primary[100],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            
            <Divider />

            
          <List sx={{ paddingLeft: 0 }}>
            {NavItems3.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} 
                    sx={{ m: "2.25rem 0 1rem 3rem" }}
                    >
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.primary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.grey[400]
                            : theme.palette.primary[100],
                      }}
                    >
                       <ListItemIcon
                        sx={{
                          // ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[100]
                              : theme.palette.primary[100],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            
            <Divider />

            
          <List sx={{ paddingLeft: 0 }}>
            {NavItems4.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} 
                    sx={{ m: "2.25rem 0 1rem 3rem" }}
                    >
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.primary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.grey[400]
                            : theme.palette.primary[100],
                      }}
                    >
                       <ListItemIcon
                        sx={{
                          // ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[100]
                              : theme.palette.primary[100],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            
            <Divider />

            
          <List sx={{ paddingLeft: 0 }}>
            {NavItems5.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} 
                    sx={{ m: "2.25rem 0 1rem 3rem" }}
                    >
                      {text}
                    </Typography>
                  )
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.primary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.grey[400]
                            : theme.palette.primary[100],
                      }}
                    >
                       <ListItemIcon
                        sx={{
                          // ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[100]
                              : theme.palette.primary[100],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            
            <Divider />

        </Drawer>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MiniDrawer />
    </Box>
  );
};

export default Sidebar;
