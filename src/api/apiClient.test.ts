import apiClient from './apiClient';

describe('apiClient', () => {
  it('should be an instance of axios', () => {
    // In a real testing environment, you'd mock axios. 
    // Here, we're doing a basic check that it has common axios properties.
    expect(typeof apiClient.get).toBe('function');
    expect(typeof apiClient.post).toBe('function');
    expect(typeof apiClient.defaults).toBe('object');
  });

  it('should have the correct base URL', () => {
    expect(apiClient.defaults.baseURL).toBe('http://localhost:3000/api');
  });

  it('should have the correct Content-Type header', () => {
    expect(apiClient.defaults.headers['common']['Content-Type']).toBe('application/json');
  });
});
