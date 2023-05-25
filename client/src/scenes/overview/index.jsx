import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import Header from "components/Header.jsx";
import OverviewChart from "components/OverviewChart.jsx";
import FlexBetween from "components/FlexBetween";

const Overview = () => {
  const theme = useTheme();

  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Sales Overview" subtitle="Overview of Recent Sales" />

      <FormControl sx={{ mt: "1rem", ml: "10px" }}>
        <InputLabel>View</InputLabel>
        <Select
          value={view}
          label="View"
          onChange={(e) => setView(e.target.value)}
        >
          <MenuItem value="units">Units</MenuItem>
          <MenuItem value="revenue">Sales</MenuItem>
        </Select>
      </FormControl>

      <Box
        sx={{
          height: "73vh",
          width: "86.5vw",
          mt: "20px",
          ml: "10px",
          mb: "5px",
          backgroundColor: theme.palette.primary[800],
          border: "1px solid",
          borderColor: theme.palette.primary[400],
          borderRadius: "4px",
          boxShadow: theme.shadows[3],
        }}
      >
        {/* <OverviewChart view={view} /> */}
        <OverviewChart view={view} />
      </Box>

      <Box>
        <FlexBetween>
          <Button
            sx={{
              height: "50px",
              width: "150px",
              anchor: "left",
              backgroundColor: theme.palette.primary[900],
              color: theme.palette.secondary[200],
              border: "1px solid",
              borderColor: theme.palette.primary[400],
              borderRadius: "4px",
              boxShadow: theme.shadows[3],
              textAlign: "center",
              fontSize: "0.75rem",
              fontWeight: "bold",
              ml: "10px",
              mt: "5px",
              "&:hover": {
                backgroundColor: theme.palette.primary[700],
                color: theme.palette.secondary[300],
                border: "1px solid",
                borderColor: theme.palette.primary[300],
                borderRadius: "4px",
              },
            }}
          >
            Download Report
          </Button>

          <Button
            sx={{
              height: "50px",
              width: "150px",
              anchor: "right",
              backgroundColor: theme.palette.primary[900],
              color: theme.palette.secondary[200],
              border: "1px solid",
              borderColor: theme.palette.primary[400],
              borderRadius: "4px",
              boxShadow: theme.shadows[3],
              textAlign: "center",
              fontSize: "0.75rem",
              fontWeight: "bold",
              mr: "10px",
              mt: "5px",
              "&:hover": {
                backgroundColor: theme.palette.primary[700],
                color: theme.palette.secondary[300],
                border: "1px solid",
                borderColor: theme.palette.primary[300],
                borderRadius: "4px",
              },
            }}
          >
            Email CVS
          </Button>
        </FlexBetween>
      </Box>
    </Box>
  );
};

export default Overview;
