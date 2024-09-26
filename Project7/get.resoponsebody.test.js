/**
 * @api {get} /your/endpoint Retrieve Expected Data
 * @apiName GetExpectedData
 * @apiGroup YourGroup
 * @apiDescription This API endpoint returns data that includes an ID and a name.
 * 
 * @apiSuccess {Number} id The ID of the returned data.
 * @apiSuccess {String} name The name associated with the returned data.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Expected Name"
 *     }
 * 
 * @apiError {String} error Description of the error that occurred.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid request"
 *     }
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