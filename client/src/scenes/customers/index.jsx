import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import Loading from "components/Loading";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log("data", data);

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.7 },
    { field: "name", headerName: "Name", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 1 },
    // {
    //   field: "phoneNumber",
    //   headerName: "Phone",
    //   flex: 0.5,
    //   renderCell: (params) => {
    //     return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    //   },
    // },
    // { field: "country", headerName: "Country", flex: 0.4 },
    // { field: "occupation", headerName: "Occupation", flex: 1 },
    // { field: "role", headerName: "Role", flex: 0.4 },
  ];

  return (
    <Box>
      <Header title="CUSTOMERS" subtitle="Customers Overview" />

      {/* Data Grid */}
      <Box
        mt="20px"
        mr="10px"
        ml="10px"
        height="75vh"
        sx={{
          backgroundColor: theme.palette.primary[900],
          backgroundImage: `none`,
          boxShadow: theme.shadows[2],
          borderRadius: theme.shape.borderRadius,
        }}
      >
        <DataGrid
          loading={<Loading /> || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;
