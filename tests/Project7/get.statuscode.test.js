const config = require('../../config');

test('should return status 200 for the GET request', async () => {
  let response;

  try {
    response = await fetch(`${config.API_URL}/kits?cardId=1`);
  } catch (error) {
    console.error('Error during GET request:', error);
    throw new Error('GET request failed'); 
  }

  // Check that the response status is 200
  expect(response.status).toBe(200);
});
