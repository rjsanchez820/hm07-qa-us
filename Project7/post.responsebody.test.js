/**
 * @api {post} /your/endpoint Parse POST Response Data
 * @apiName ParsePostResponse
 * @apiGroup UrbanGrocers
 * @apiDescription This test checks that the response body contains the expected data when a new order is created.
 * 
 * @apiSuccess {Object} data The response body containing order details.
 * @apiSuccess {String} data.id The ID of the newly created order.
 * @apiSuccess {String} data.item The name of the item ordered.
 * @apiSuccess {Number} data.quantity The quantity of items ordered.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "id": "1234",
 *       "item": "Apple",
 *       "quantity": 5
 *     }
 * 
 * @apiError {String} error Error description if the request fails.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid order details"
 *     }
 */

// Test to parse the response body and check expected data
test('should return expected data in the response body after POST request', async () => {
    try {
      const response = await fetch(`${config.API_URL}/your/endpoint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      const data = await response.json(); // Parse the JSON from the response
  
      // Check the expected properties in the response body
      expect(data).toHaveProperty('id'); // Check that response contains 'id'
      expect(data.item).toBe('Apple'); // Check that the 'item' field matches
      expect(data.quantity).toBe(5); // Check that the 'quantity' field matches
    } catch (error) {
      console.error('Error parsing the response body:', error);
    }
  });