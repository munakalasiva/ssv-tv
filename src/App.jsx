import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialIcons from './components/SocialIcons';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import Warranty from './pages/Warranty';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminContacts from './pages/admin/AdminContacts';
import AdminBooking from './pages/admin/AdminBookings';
import AdminGallery from './pages/admin/AdminGallery';
import AdminWelcome from "./pages/admin/AdminWelcome";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminServices from "./pages/admin/AdminServices";

import BlogPage from "./blogs/BlogPage";

// Protected Route Wrapper
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" replace />;
}

function AppContent() {
  const location = useLocation();

  // Hide Navbar & Footer on admin pages
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {/* Show only on user pages */}
      {!isAdminRoute && <Navbar />}

      <main className="flex-grow">
        <Routes>

          {/* ---------- USER ROUTES ---------- */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<BlogPage />} />


          {/* ---------- ADMIN ROUTES ---------- */}

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Navigate to="/admin/login" />} />

          {/* Protected Admin Dashboard */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >     <Route index element={<AdminWelcome />} /> 
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="bookings" element={<AdminBooking />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="blogs" element={<AdminBlogs/>}/>
              <Route path="services" element={<AdminServices/>}/>
          </Route>

        </Routes>
      </main>

      {/* Show only on user pages */}
      {!isAdminRoute && (
        <>
          <Footer />
          <SocialIcons />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
