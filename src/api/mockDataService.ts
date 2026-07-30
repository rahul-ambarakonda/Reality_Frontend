export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  status: string;
}

const projects: Project[] = [
  { id: '1', name: 'Project Alpha', description: 'Building a new office tower', location: 'New York', status: 'Active' },
  { id: '2', name: 'Project Beta', description: 'Renovating a historic landmark', location: 'London', status: 'Pending' },
  { id: '3', name: 'Project Gamma', description: 'Developing a residential complex', location: 'Paris', status: 'Completed' },
  { id: '4', name: 'Project Delta', description: 'Constructing a bridge', location: 'Berlin', status: 'Active' },
];

export const getProjects = (): Project[] => {
  return projects;
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};