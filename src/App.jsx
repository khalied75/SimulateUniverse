import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './component/Layout';
import Home from './pages/Home';
import BlackHole from './pages/simulations/BlackHole';
import Spacetime from './pages/simulations/Spacetime';
import SolarSystem from './pages/simulations/SolarSystem';
import Schrodinger from './pages/simulations/Schrodinger';
import Stars from './pages/simulations/Stars';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/simulations/black-hole" element={<BlackHole />} />
            <Route path="/simulations/spacetime" element={<Spacetime />} />
            <Route path="/simulations/solar-system" element={<SolarSystem />} />
            <Route path="/simulations/schrodinger" element={<Schrodinger />} />
            <Route path="/simulations/stars" element={<Stars />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
