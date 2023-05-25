import React from 'react'
import { Box, useTheme } from '@mui/material'
import Header from 'components/Header.jsx'
import BreakdownChart from 'components/BreakdownChart.jsx'



const Breakdown = () => {
    const theme = useTheme();

  return (

    <Box m="1.5rem 2.5rem">
        <Header title="Breakdown" subtitle="Sales Breakdown" />
        <Box 
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '75vh',
                width: '86.5vw',
                mt: '40px',
                ml: '10px',
                backgroundColor: theme.palette.secondary[900],
                border: '1px solid',                
                borderColor: theme.palette.primary[400],
                borderRadius: '4px',
                boxShadow: theme.shadows[3],
            }}
        >
            <BreakdownChart />
        </Box>
    </Box>
  )
}

export default Breakdown