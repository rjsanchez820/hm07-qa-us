
// eslint-disable-next-line no-undef
const config = require('../config');

// Test to check the response status code for a GET request
test('should return status 200 for the GET request', async () => {
  try {
    const response = await fetch(`${config.API_URL}/your/endpoint`);
    expect(response.status).toBe(200); // Check that the status code is 200 (OK)
  } catch (error) {
    console.error('Error during GET request:', error);
  }
});
