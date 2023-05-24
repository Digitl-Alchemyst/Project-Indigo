import React from 'react'
import { Box } from '@mui/material'
import Header from "components/Header";
import { useTheme } from '@mui/material';
import theme from 'theme';



const Geography = () => {
    const theme = useTheme();

  return (
    <Box>
        <Header title="Geographical-Heatmap" subtitle="Customers Heatmap" />
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '85vh',
                width: '90vw',
                margin: 'auto',
                border: '1px solid',
                backgroundColor: theme.palette.primary[900],
                borderColor: theme.palette.primary[400],
                borderRadius: '1rem',
                boxShadow: theme.shadows[3],
            }}
        >

        </Box>
    </Box>
  )
}

export default Geography