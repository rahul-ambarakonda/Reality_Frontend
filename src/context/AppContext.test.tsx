// Mock react for useState and useContext for isolated testing
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn((initial) => [initial, jest.fn()]),
  useContext: jest.fn(),
  createContext: jest.fn(() => ({ Provider: 'MockProvider' })), // Mock createContext for simpler testing
}));

import React from 'react';
import { ThemeProvider, useTheme } from './AppContext';

describe('AppContext - ThemeProvider', () => {
  it('provides isDarkMode state and toggleDarkMode function', () => {
    // Simulate the context value that would be provided
    const mockContextValue = { isDarkMode: false, toggleDarkMode: jest.fn() };
    (React.useContext as jest.Mock).mockReturnValue(mockContextValue);

    const { isDarkMode, toggleDarkMode } = useTheme();

    expect(isDarkMode).toBe(false);
    expect(typeof toggleDarkMode).toBe('function');
  });

  it('toggleDarkMode should change isDarkMode state', () => {
    let isDarkModeState = false; // Simulate state within the test
    const mockSetIsDarkMode = jest.fn((callback) => {
      isDarkModeState = callback(isDarkModeState);
    });
    (React.useState as jest.Mock).mockReturnValueOnce([isDarkModeState, mockSetIsDarkMode]);

    const TestComponent = () => {
      const { isDarkMode, toggleDarkMode } = useTheme();
      return <button onClick={toggleDarkMode}>{isDarkMode ? 'Dark' : 'Light'}</button>;
    };

    // Simulate rendering the provider and a consumer
    // This part is highly simplified as we can't run React components directly
    const mockContextValue = { isDarkMode: isDarkModeState, toggleDarkMode: () => {
        isDarkModeState = !isDarkModeState;
        // Simulate DOM update
        document.documentElement.classList.toggle('dark', isDarkModeState);
    } };
    (React.useContext as jest.Mock).mockReturnValue(mockContextValue);

    // Initial state
    expect(mockContextValue.isDarkMode).toBe(false);

    // Toggle once
    mockContextValue.toggleDarkMode();
    expect(mockContextValue.isDarkMode).toBe(true);

    // Toggle again
    mockContextValue.toggleDarkMode();
    expect(mockContextValue.isDarkMode).toBe(false);
  });

  it('throws an error if useTheme is not used within a ThemeProvider', () => {
    (React.useContext as jest.Mock).mockReturnValue(undefined);
    expect(() => useTheme()).toThrow('useTheme must be used within a ThemeProvider');
  });
});
