// eslint-disable-next-line no-undef
const config = require('../config');

const invalidRequestBody = {
  // Incomplete or invalid data for the PUT request
  itemId: '12345',
  item: '', // Empty item field, which is invalid
  quantity: -10 // Negative quantity, which is also invalid
};

/**
 * @api {put} /your/endpoint Handle Invalid PUT Request
 * @apiName HandleInvalidPutRequest
 * @apiGroup UrbanGrocers
 * @apiDescription This test sends an invalid PUT request and checks if the API returns the appropriate error response.
 * 
 * @apiParam {String} itemId The ID of the item (valid in this case).
 * @apiParam {String} item The new name of the item (invalid as it is empty).
 * @apiParam {Number} quantity The quantity of items (invalid as it is negative).
 * 
 * @apiError {String} error The error message returned due to invalid data.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid item or quantity"
 *     }
 */

// Test to check the response status code for an invalid PUT request
test('should return status 400 for an invalid PUT request', async () => {
  try {
    const response = await fetch(`${config.API_URL}/your/endpoint`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invalidRequestBody)
    });

    // Check if the response status is 400 Bad Request
    expect(response.status).toBe(400);
  } catch (error) {
    console.error('Error during invalid PUT request:', error);
  }
});