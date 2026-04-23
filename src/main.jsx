import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import BlackHole from './pages/BlackHole';
import SpacetimeCurvature from './pages/SpacetimeCurvature';
import SolarSystem from './pages/SolarSystem';
import Schrodinger from './pages/Schrodinger';
import Stars from './pages/Stars';
import WavelengthEnergy from './pages/WavelengthEnergy';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/black-hole" element={<BlackHole />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spacetime" element={<SpacetimeCurvature />} />
          <Route path="/solar-system" element={<SolarSystem />} />
          <Route path="/schrodinger" element={<Schrodinger />} />
          <Route path="/stars" element={<Stars />} />
          <Route path="/wavelength-energy" element={<WavelengthEnergy />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
 
