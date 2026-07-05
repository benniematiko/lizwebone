import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import People from './pages/people/People';
import Profile from './pages/profile/Profile';
import Insights from './pages/insights/Insights';
import Contact from './pages/contact/Contact';
import Expertise from './pages/expertise/Expertise';

import NotFound from './pages/notFound/NotFound';



function App() {
  return (
    <Router>
      {/* Navbar stays at the top across all pages */}
      <Navbar /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          {/* Dynamic route for individual lawyer profiles */}
          <Route path="/people/:id" element={<Profile />} />
          <Route path="/insights" element={<Insights />} />          
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/people/:id" element={<div>Profile Page Coming Soon</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;