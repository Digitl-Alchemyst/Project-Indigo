import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Layout from './scenes/layout';
import Products from "scenes/products";
import Customers from "./scenes/customers";
import Geography from "scenes/geography";
import Transactions from "scenes/transactions";
// import Overview from "scenes/overview";
// import Daily from "scenes/daily";
// import Monthly from "scenes/monthly";
// import Breakdown from "scenes/breakdown";
// import Admin from "scenes/admin";
// import Performance from "scenes/performance";
import Form from "scenes/form";
// import Clients from "scenes/Clients";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/Clients" element={<Clients />} /> */}
              <Route path="/customers" element={<Customers />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/transactions" element={<Transactions />} />
              {/* <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />  */}

            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
