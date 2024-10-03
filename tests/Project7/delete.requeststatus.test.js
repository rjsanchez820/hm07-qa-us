const config = require('../config');

test('should return status 200 for a successful DELETE request', async () => {
  let response;

  try {
    response = await fetch(`${config.API_URL}/your/endpoint`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error during DELETE request:', error);
  }

  expect(response.status).toBe(200); // Check if the response status is 200 OK
});