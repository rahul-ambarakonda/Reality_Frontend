import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/AppContext';
import { getProjects, Project } from '../api/mockDataService';
import { Link } from 'react-router-dom';
import { Typography, Box, Card, CardContent, CardActions, Button, CircularProgress, Grid } from '@mui/material';

const HomePage: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const fetchedProjects = getProjects();
      setProjects(fetchedProjects);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-4">
        Current theme: <strong>{isDarkMode ? 'Dark' : 'Light'} Mode</strong>
      </p>
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-md font-semibold
          ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}
        `}
      >
        Toggle Theme
      </button>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Projects
        </Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '150px' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card raised>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" component={Link} to={`/projects/${project.id}`}>
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default HomePage;
