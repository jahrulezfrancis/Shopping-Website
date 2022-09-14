import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Pages/HomePage';

function App() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Box>
  );
}

export default App;
