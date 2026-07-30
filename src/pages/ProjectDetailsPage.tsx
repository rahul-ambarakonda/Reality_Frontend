import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById, Project } from '../api/mockDataService';
import { Typography, Paper, Box, CircularProgress, Button } from '@mui/material';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      if (id) {
        const fetchedProject = getProjectById(id);
        setProject(fetchedProject);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!project) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>Project Not Found</Typography>
        <Button component={Link} to="/" variant="contained">
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Description:</strong> {project.description}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Location:</strong> {project.location}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Status:</strong> {project.status}
        </Typography>
        <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Paper>
    </Box>
  );
};

export default ProjectDetailsPage;
