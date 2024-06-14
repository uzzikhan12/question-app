import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from './config/appRouter';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{height:"100%",minHeight:"100vh",backgroundColor:"#f8f9fa"}}>
      <Router />
    </Box>
  );
}

export default App;
