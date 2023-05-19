import { Typography, Box, useTheme } from "@mui/material";
// import { tokens "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box mb="30px">
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
