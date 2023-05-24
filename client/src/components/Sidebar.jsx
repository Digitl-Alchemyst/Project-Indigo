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
import profileImage from "assets/profile.jpg";
import {
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  PieChartOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import RecentActorsSharpIcon from "@mui/icons-material/RecentActorsSharp";
import EngineeringSharpIcon from "@mui/icons-material/EngineeringSharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import RequestQuoteSharpIcon from "@mui/icons-material/RequestQuoteSharp";
import AssuredWorkloadSharpIcon from "@mui/icons-material/AssuredWorkloadSharp";
import ConstructionSharpIcon from "@mui/icons-material/ConstructionSharp";
import MuseumSharpIcon from "@mui/icons-material/MuseumSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";
import AssessmentSharpIcon from "@mui/icons-material/AssessmentSharp";
import PaymentsSharpIcon from "@mui/icons-material/PaymentsSharp";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme, width) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} )`,
  },
  [theme.breakpoints.up("md")]: {
    width: `calc(${width} - 1px)`,
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

const NavItems0 = [
  { text: "Dashboard", icon: <DashboardSharpIcon />, path: "/dashboard" },
];
// const NavItems1 = [
//   { text: "Personnel", icon: null },
//   { text: "Contacts", icon: <RecentActorsSharpIcon />, path: "/dashboard" },
//   { text: "Team", icon: <EngineeringSharpIcon />, path: "/drafts" },
//   { text: "Clients", icon: <PeopleSharpIcon />, path: "/inbox" },
//   { text: "Vendors", icon: <LocalShippingSharpIcon />, path: "/mail" },
// ];
const NavItems1 = [
  { text: "Tutorial", icon: null },
  { text: "Products", icon: <RecentActorsSharpIcon />, path: "/products" },
  { text: "Customers", icon: <EngineeringSharpIcon />, path: "/customers" },
  { text: "Clients", icon: <PeopleSharpIcon />, path: "/inbox" },
  { text: "Geography", icon: <LocalShippingSharpIcon />, path: "/geography" },
];
const NavItems2 = [
  { text: "Estimating Department", icon: null },
  { text: "Materials Catalouge", icon: <MenuBookSharpIcon />, path: "/all" },
  { text: "Estimating", icon: <RequestQuoteSharpIcon />, path: "/trash" },
  { text: "Outcome", icon: <AssuredWorkloadSharpIcon />, path: "/spam" },
];
const NavItems3 = [
  { text: "Project Manager", icon: null },
  { text: "Projects", icon: <ConstructionSharpIcon />, path: "/dashboard" },
  { text: "Showroom", icon: <MuseumSharpIcon />, path: "/inbox" },
  { text: "Reg Comp", icon: <InventorySharpIcon />, path: "/mail" },
  { text: "Calendar", icon: <CalendarMonthSharpIcon />, path: "/drafts" },
];
const NavItems4 = [
  { text: "Financial", icon: null },
  { text: "Invoices", icon: <ReceiptLongSharpIcon />, path: "/all" },
  { text: "Reports", icon: <AssessmentSharpIcon />, path: "/trash" },
  { text: "Payroll", icon: <PaymentsSharpIcon />, path: "/spam" },
];
const NavItems5 = [
  { text: "Sales", icon: null },
  { text: "Overview", icon: <PointOfSaleOutlined /> },
  { text: "Daily", icon: <TodayOutlined /> },
  { text: "Monthly", icon: <CalendarMonthOutlined /> },
  { text: "Breakdown", icon: <PieChartOutlined /> },
];
const NavItems6 = [
  { text: "All mail", icon: <InboxIcon />, path: "/all" },
  { text: "Trash", icon: <MailIcon />, path: "/trash" },
  { text: "Spam", icon: <InboxIcon />, path: "/spam" },
];

const Sidebar = ({ isNonMobile, user }) => {
  function MiniDrawer() {
    const theme = useTheme();
    // const { pathname } = useLocation();
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("");
    const navigate = useNavigate();

    const handleDrawer = () => {
      setOpen(!open);
    };

    // const handleNavigation = (item) => {
    //   setActive(item.text);
    //   navigate(item.path);
    // };

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

          <List sx={{ paddingLeft: 0 }}>
            {NavItems0.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }
              const lcText = text.toLowerCase();

              return (
                <ListItem key={text} disablePadding sx={{ my: -1 }}>
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

          <Divider sx={{ mb: -3 }} />

          <List sx={{ paddingLeft: 0 }}>
            {NavItems1.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }
              const lcText = text.toLowerCase();

              return (
                <ListItem key={text} disablePadding sx={{ my: -1 }}>
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

          <Divider sx={{ mb: -3 }} />

          <List sx={{ paddingLeft: 0 }}>
            {NavItems2.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }
              const lcText = text.toLowerCase();

              return (
                <ListItem key={text} disablePadding>
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

          <Divider sx={{ mb: -3 }} />

          <List sx={{ paddingLeft: 0 }}>
            {NavItems3.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }
              const lcText = text.toLowerCase();

              return (
                <ListItem key={text} disablePadding>
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

          <Divider sx={{ mb: -3 }} />

          <List sx={{ paddingLeft: 0 }}>
            {NavItems4.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }
              const lcText = text.toLowerCase();

              return (
                <ListItem key={text} disablePadding>
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

          <Divider sx={{ mb: -3 }} />

          <List sx={{ paddingLeft: 0 }}>
            {NavItems5.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }
              const lcText = text.toLowerCase();

              return (
                <ListItem key={text} disablePadding>
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

          {/* Profile Image and Name */}
          <Box position="absolute" left="-2.8rem" bottom="2rem">
            <Divider sx={{ mb: -3.5 }} />
            <FlexBetween
              textTransform="none"
              gap="1rem"
              m="1.5rem 2rem 0rem 3rem"
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objextFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="1rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </FlexBetween>
          </Box>
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
