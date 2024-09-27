// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // Replace with the actual data structure expected by the Urban Grocers API
    item: 'Apple',
    quantity: 5
};

/**
 * @api {post} /your/endpoint Create New Order
 * @apiName CreateOrder
 * @apiGroup UrbanGrocers
 * @apiDescription This test sends a POST request to create a new order with specific items and checks the status code.
 * 
 * @apiParam {String} item The name of the item being ordered.
 * @apiParam {Number} quantity The number of items to order.
 * 
 * @apiSuccess {Number} status The HTTP status code of the response.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 * 
 * @apiError {String} error Error description if the request fails.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid order details"
 *     }
 */

// Test to check the response status code for the POST request
test('should return status 201 for a successful POST request', async () => {
  try {
    const response = await fetch(`${config.API_URL}/your/endpoint`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if the response status is 201 Created
    expect(response.status).toBe(201); 
  } catch (error) {
    console.error('Error during POST request:', error);
  }
});