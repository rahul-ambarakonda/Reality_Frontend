import React from 'react';
import { useTheme } from '../context/AppContext'; // Adjust path as necessary

const HomePage: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

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
      <p className="mt-4">Welcome to the home page!</p>
    </div>
  );
};

export default HomePage;
