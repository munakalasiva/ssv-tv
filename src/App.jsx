import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Warranty from './pages/Warranty';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
       <div className="fixed bottom-2 right-6 flex flex-col items-end space-y-4 z-50">
  <div className="animate-bounce [animation-delay:-0.5s]">
    <CallButton />
  </div>
  <div className="animate-bounce">
    <WhatsAppButton />
  </div>
</div>


        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
