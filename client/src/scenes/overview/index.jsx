import React from 'react'
import { Box, useTheme, Button } from '@mui/material'
import Header from 'components/Header.jsx'



const Overview = () => {
    const theme = useTheme();

  return (

    <Box m="1.5rem 2.5rem">
        <Header title="Sales Overview" subtitle="Overview of Recent Sales" />

        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '79vh',
                width: '86.5vw',
                mt: '20px',
                ml: '10px',
                backgroundColor: theme.palette.primary[900],
                border: '1px solid',                
                borderColor: theme.palette.primary[400],
                borderRadius: '4px',
                boxShadow: theme.shadows[3],
            }}
        >

            



        </Box>

        <Button sx={{
            height: '50px',
            width: '150px',
            backgroundColor: theme.palette.primary[900],
            color: theme.palette.secondary[200],
            border: '1px solid',
            borderColor: theme.palette.primary[400],
            borderRadius: '4px',
            boxShadow: theme.shadows[3],
            textAlign: 'center',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            ml: '10px',
            mt: '5px',
            '&:hover': {
                backgroundColor: theme.palette.primary[700],
                color: theme.palette.secondary[300],
                border: '1px solid',
                borderColor: theme.palette.primary[300],
                borderRadius: '4px',
            }
        }}
        >
            Download Report
        </Button>

    </Box>
  )
}

export default Overview