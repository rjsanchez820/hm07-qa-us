/**
 * @api {get} /users Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {String} id User's unique ID.
 * @apiSuccess {String} name User's name.
 */

// Test to parse the response body and check expected data
test('should return expected data in the response body', async () => {
  try {
    const response = await fetch(`${config.API_URL}/your/endpoint`);
    const data = await response.json(); // Parse the JSON from the response

    // Example of checking expected data in the response body
    expect(data).toHaveProperty('id'); // Check that response contains 'id'
    expect(data.name).toBe('Expected Name'); // Check that the 'name' field matches expected data
  } catch (error) {
    console.error('Error parsing the response body:', error);
  }
});