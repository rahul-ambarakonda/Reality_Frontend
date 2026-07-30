// Mock react-router-dom
const mockUseParams = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Routes: ({ children }) => <div data-testid="Routes">{children}</div>,
  Route: ({ path, element }) => <div data-path={path}>{element}</div>, // Render element directly for testing
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useParams: () => mockUseParams(),
  BrowserRouter: ({ children }) => <div>{children}</div>, // Mock BrowserRouter
}));

// Mock child pages and layout to control their output
jest.mock('./pages/HomePage', () => () => <div data-testid="HomePage">Home Page Content</div>);
jest.mock('./pages/AboutPage', () => () => <div data-testid="AboutPage">About Page Content</div>);
jest.mock('./pages/ProjectsPage', () => () => <div data-testid="ProjectsPage">Projects Page Content</div>);
jest.mock('./pages/ProjectDetailsPage', () => () => <div data-testid="ProjectDetailsPage">Project Details Page Content</div>);
jest.mock('./components/Layout', () => ({ children }) => <div data-testid="Layout">{children}</div>);

import React from 'react';
import App from './App';

// A basic simulated render function for React components, returning a simplified structure
const render = (component: React.ReactElement) => {
  let output = '';

  // This is a very simplified rendering. In a real setup, we'd use React Testing Library.
  // Here, we traverse the mock components and extract their test IDs and paths.
  const processNode = (node: React.ReactElement) => {
    if (!node || !node.props) return;

    if (node.props['data-testid']) {
      output += `<div data-testid="${node.props['data-testid']}">`;
    }
    if (node.props['data-path']) {
      output += `<div data-path="${node.props['data-path']}">`;
    }

    if (node.props.children) {
      if (Array.isArray(node.props.children)) {
        node.props.children.forEach(child => {
          if (React.isValidElement(child)) {
            processNode(child);
          } else if (typeof child === 'string') {
            output += child;
          }
        });
      } else if (React.isValidElement(node.props.children)) {
        processNode(node.props.children);
      } else if (typeof node.props.children === 'string') {
        output += node.props.children;
      }
    }

    if (node.props['data-testid'] || node.props['data-path']) {
      output += '</div>';
    }
  };

  processNode(component);

  return {
    container: { innerHTML: output },
    queryByTestId: (id: string) => {
      const regex = new RegExp(`<div data-testid="${id}">.*?</div>`);
      return output.match(regex) ? { textContent: `Content for ${id}` } : null;
    },
    queryByPath: (path: string) => {
        const regex = new RegExp(`<div data-path="${path}">.*?</div>`);
        return output.match(regex) ? { textContent: `Element for path ${path}` } : null;
    },
    getAllByPath: (path: string) => {
        const regex = new RegExp(`<div data-path="${path}">.*?</div>`, 'g');
        const matches = [...output.matchAll(regex)];
        return matches.map(match => ({ textContent: `Element for path ${path}` }));
    }
  };
};

describe('App Routing', () => {
  it('renders Layout component', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('Layout')).not.toBeNull();
  });

  it('defines a route for Home page at /', () => {
    const { getAllByPath } = render(<App />);
    const homeRoutes = getAllByPath('/');
    expect(homeRoutes.length).toBeGreaterThan(0);
    // We expect the HomePage content to be associated with the root path
    // This is a simplified check due to the mocked Route element
    expect(homeRoutes[0].textContent).toContain('path / Content'); // This is a limitation of the current mock, will rely on data-path.
  });

  it('defines a route for About page at /about', () => {
    const { queryByPath } = render(<App />);
    const aboutRoute = queryByPath('/about');
    expect(aboutRoute).not.toBeNull();
  });

  it('defines a route for Projects page at /projects', () => {
    const { queryByPath } = render(<App />);
    const projectsRoute = queryByPath('/projects');
    expect(projectsRoute).not.toBeNull();
  });

  it('defines a dynamic route for Project Details page at /projects/:id', () => {
    const { queryByPath } = render(<App />);
    const projectDetailsRoute = queryByPath('/projects/:id');
    expect(projectDetailsRoute).not.toBeNull();
  });
});
