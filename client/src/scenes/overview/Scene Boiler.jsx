import React from 'react'
import { Box, useTheme } from '@mui/material'
import Header from 'components/Header.jsx'



const Overview = () => {
    const theme = useTheme();

  return (

    <Box m="1.5rem 2.5rem">
        <Header title="TITLE" subtitle="Sub-Title" />
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '77vh',
                width: '86.5vw',
                mt: '40px',
                ml: '10px',
                backgroundColor: theme.palette.primary[900],
                border: '1px solid',                
                borderColor: theme.palette.primary[400],
                borderRadius: '4px',
                boxShadow: theme.shadows[3],
            }}
        >

        </Box>
    </Box>
  )
}

export default Overview