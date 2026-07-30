import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getProjects, Project } from '../api/mockDataService';
import { Typography, Box, CircularProgress, List, ListItem, ListItemText, Paper } from '@mui/material';

const ProjectsPage: React.FC = () => {
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

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Projects
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        {projects.length === 0 ? (
          <Typography variant="body1">No projects found.</Typography>
        ) : (
          <List>
            {projects.map((project) => (
              <ListItem
                key={project.id}
                component={RouterLink}
                to={`/projects/${project.id}`}
                sx={{ '&:hover': { backgroundColor: 'action.hover' }, textDecoration: 'none', color: 'inherit' }}
                divider
              >
                <ListItemText
                  primary={<Typography variant="h6">{project.name}</Typography>}
                  secondary={project.description}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
};

export default ProjectsPage;
