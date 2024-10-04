const config = require('../config');

test('should return expected data in the response body', async () => {
  let response;
  let data;

  try {
    response = await fetch(`${config.API_URL}/kits?cardId=1`);
    data = await response.json(); // Parse the JSON from the response
  } catch (error) {
    console.error('Error parsing the response body:', error);
  }

  expect(data).toHaveProperty('id'); // Check that response contains 'id'
  expect(data.name).toBe('Expected Name'); // Check that the 'name' field matches expected data
});