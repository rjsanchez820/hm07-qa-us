// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  // Replace with the actual data structure for the PUT request
  itemId: '12345',
  item: 'Updated Apple',
  quantity: 10
};

/**
 * @api {put} /your/endpoint Update Item Information
 * @apiName UpdateItem
 * @apiGroup UrbanGrocers
 * @apiDescription This test sends a PUT request to update an item’s information and checks if the status code is 200.
 * 
 * @apiParam {String} itemId The ID of the item to update.
 * @apiParam {String} item The new name of the item.
 * @apiParam {Number} quantity The updated quantity of the item.
 * 
 * @apiSuccess {Number} status The HTTP status code of the response.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * 
 * @apiError {String} error Error description if the request fails.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid item or quantity"
 *     }
 */

// Test to check the response status code for a PUT request
test('should return status 200 for a successful PUT request', async () => {
  try {
    const response = await fetch(`${config.API_URL}/your/endpoint`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if the response status is 200 OK
    expect(response.status).toBe(200); 
  } catch (error) {
    console.error('Error during PUT request:', error);
  }
});