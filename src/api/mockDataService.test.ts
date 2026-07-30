import { getProjects, getProjectById, Project } from './mockDataService';

describe('mockDataService', () => {
  const expectedProjects: Project[] = [
    { id: '1', name: 'Project Alpha', description: 'Building a new office tower', location: 'New York', status: 'Active' },
    { id: '2', name: 'Project Beta', description: 'Renovating a historic landmark', location: 'London', status: 'Pending' },
    { id: '3', name: 'Project Gamma', description: 'Developing a residential complex', location: 'Paris', status: 'Completed' },
    { id: '4', name: 'Project Delta', description: 'Constructing a bridge', location: 'Berlin', status: 'Active' },
  ];

  it('getProjects should return a hardcoded array of projects', () => {
    const projects = getProjects();
    expect(projects).toEqual(expectedProjects);
    expect(projects.length).toBe(4);
  });

  it('getProjectById should return the correct project for a given ID', () => {
    const project = getProjectById('1');
    expect(project).toEqual(expectedProjects[0]);
  });

  it('getProjectById should return undefined for an invalid ID', () => {
    const project = getProjectById('999');
    expect(project).toBeUndefined();
  });

  it('getProjectById should return undefined for a null or empty ID', () => {
    const projectNull = getProjectById(null as any);
    expect(projectNull).toBeUndefined();
    const projectEmpty = getProjectById('');
    expect(projectEmpty).toBeUndefined();
  });
});
