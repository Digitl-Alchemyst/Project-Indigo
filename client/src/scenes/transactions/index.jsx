import React from 'react'
import { useState } from 'react'
import { dataGrid } from '@mui/x-data-grid'
import { useGetTransactionsQuery } from 'state/api'
import { Box } from '@mui/material'
import Header from 'components/Header'
import { useTheme } from '@mui/material/styles'
import theme from 'theme'

const Transactions = () => {
    // const useTheme = useTheme()

    // Values to be sent to back-end
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");

    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
    });
    console.log("data:", data)

  return (
    <Box>
        <Header title="Transactions" subtitle="Transactions Overview" />
    </Box>
    
  )
}

export default Transactions