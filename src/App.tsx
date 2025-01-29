import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminServices from './pages/admin/AdminServices';
import AdminProjects from './pages/admin/AdminProjects';
import AdminAbout from './pages/admin/AdminAbout';
import AdminCareers from './pages/admin/AdminCareers';
import AdminBlogs from './pages/admin/AdminBlogs';
import AdminContact from './pages/admin/AdminContact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="about" element={<AdminAbout />} />
          <Route path="careers" element={<AdminCareers />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="contact" element={<AdminContact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;