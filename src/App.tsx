import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage'; // Import ProjectsPage
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} /> {/* Add the new route for ProjectsPage */}
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
