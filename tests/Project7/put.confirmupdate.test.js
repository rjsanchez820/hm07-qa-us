/**
 * @api {put} /your/endpoint Parse PUT Response Data
 * @apiName ParsePutResponse
 * @apiGroup UrbanGrocers
 * @apiDescription This test parses the response body after a successful PUT request and checks if it contains the expected updated data.
 * 
 * @apiSuccess {Object} data The response body containing updated item details.
 * @apiSuccess {String} data.itemId The ID of the updated item.
 * @apiSuccess {String} data.item The new name of the item.
 * @apiSuccess {Number} data.quantity The updated quantity of the item.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "itemId": "12345",
 *       "item": "Updated Apple",
 *       "quantity": 10
 *     }
 * 
 * @apiError {String} error Error description if the request fails.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Invalid item or quantity"
 *     }
 */

// Test to parse the response body and check expected data
test('should return expected updated data in the response body after PUT request', async () => {
    try {
      const response = await fetch(`${config.API_URL}/your/endpoint`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      const data = await response.json(); // Parse the JSON from the response
  
      // Check the expected properties in the response body
      expect(data).toHaveProperty('itemId'); // Check that response contains 'itemId'
      expect(data.item).toBe('Updated Apple'); // Check that the 'item' field matches
      expect(data.quantity).toBe(10); // Check that the 'quantity' field matches
    } catch (error) {
      console.error('Error parsing the response body:', error);
    }
  });