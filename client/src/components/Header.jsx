import { Typography, Box, useTheme } from "@mui/material";
// import { tokens "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box 
      mb="8px"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
        width: "99%",
        backgroundColor: theme.palette.primary[900],
        px: 2.5, 
        py: 1,
        mx: 1,
        borderRadius: "8px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

      }}    
    >
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography
        variant="5"
        color={theme.palette.secondary[300]}
        sx={{ m: "0 0 5px 0" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
