import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Pricingpage from './pages/Pricingpage';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Channels from './pages/Channels';
import Reseller from './pages/Reseller';
import Setup from './pages/Setup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  return (
    <Router>
      {/* Floating WhatsApp button — rendered once so it shows on every page */}
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/reseller" element={<Reseller />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
