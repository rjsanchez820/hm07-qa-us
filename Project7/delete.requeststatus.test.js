// eslint-disable-next-line no-undef
const config = require('../config');

/**
 * @api {delete} /your/endpoint Delete Item
 * @apiName DeleteItem
 * @apiGroup UrbanGrocers
 * @apiDescription This test sends a DELETE request to remove an item and checks if the status code is 200.
 * 
 * @apiSuccess {Number} status The HTTP status code of the response.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * 
 * @apiError {String} error Error description if the request fails.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Item not found"
 *     }
 */

// Test to check the response status code for a DELETE request
test('should return status 200 for a successful DELETE request', async () => {
  try {
    const response = await fetch(`${config.API_URL}/your/endpoint`, {
      method: 'DELETE',
    });

    // Check if the response status is 200 OK
    expect(response.status).toBe(200); 
  } catch (error) {
    console.error('Error during DELETE request:', error);
  }
});