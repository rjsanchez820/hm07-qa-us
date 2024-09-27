/**
 * @api {put} /your/endpoint Parse Error Response from Invalid PUT Request
 * @apiName ParseInvalidPutResponse
 * @apiGroup UrbanGrocers
 * @apiDescription This test parses the error response body when an invalid PUT request is sent.
 * 
 * @apiError {String} error The error message returned due to invalid data.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid item or quantity"
 *     }
 */

// Test to parse the error response body for an invalid PUT request
test('should return error message in response body for invalid PUT request', async () => {
    try {
      const response = await fetch(`${config.API_URL}/your/endpoint`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(invalidRequestBody)
      });
  
      const data = await response.json(); // Parse the JSON from the response
  
      // Check that the response contains an error message
      expect(data).toHaveProperty('error'); // Check that response contains 'error'
      expect(data.error).toBe('Invalid item or quantity'); // Check the specific error message
    } catch (error) {
      console.error('Error during invalid PUT request:', error);
    }
  })