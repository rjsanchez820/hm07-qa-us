const config = require('../../config');

test('should return expected data in the response body', async () => {
  let response;
  let data;

  try {
    response = await fetch(`${config.API_URL}/kits?cardId=1`);
    data = await response.json(); 
  } catch (error) {
    console.error('Error parsing the response body:', error);
  }

  expect(data).toHaveProperty('id'); 
  expect(data.name).toBe('Expected Name'); 
});