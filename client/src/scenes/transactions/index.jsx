import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import { useTheme, Box } from "@mui/material";
import theme from "theme";
import GridCustomToolbar from "components/GridCustomToolbar";

const Transactions = () => {
  const theme = useTheme();

  // Values to be sent to back-end
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  console.log("data:", data);

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.7 },
    { field: "userId", headerName: "User ID", flex: 0.5 },
    { field: "createdAt", headerName: "CreatedAt", flex: 1 },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.4,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Transactions" subtitle="Transactions Overview" />
      <Box
        mt="20px"
        mr="10px"
        ml="10px"
        height="85vh"
        sx={{
          backgroundColor: theme.palette.primary[900],
          backgroundImage: `none`,
          boxShadow: theme.shadows[2],
          // borderRadius: "2rem",

          "& .MuiDataGrid-root": {
            border: "none",
            backgroundColor: theme.palette.primary[900],
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnsHeader": {
            // backgroundColor: theme.palette.primary[100],
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primary[900],
            color: theme.palette.secondary[100],
            borderTop: `none`,
            // boxShadow: theme.shadows[2],
            // borderRadius: theme.shape.borderRadius,
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary[800],
            // backgroundImage: `none`,
            // boxShadow: theme.shadows[2],
            // borderRadius: theme.shape.borderRadius,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[100]} !important`,
          },
        }}
      >
        <DataGrid
          isLoading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: GridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
