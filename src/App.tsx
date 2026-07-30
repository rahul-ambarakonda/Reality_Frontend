import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage'; // Import the new page
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} /> {/* Add the new route */}
      </Routes>
    </Layout>
  );
}

export default App;
