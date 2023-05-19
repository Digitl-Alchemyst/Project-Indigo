import React from 'react'
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import Header from 'components/Header';

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box>
      <Header title="DASHBOARD" subtitle="Company Overview"/>
    </Box>
  )
};

export default Dashboard