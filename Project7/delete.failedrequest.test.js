/**
 * @api {delete} /your/endpoint Parse DELETE Response Data
 * @apiName ParseDeleteResponse
 * @apiGroup UrbanGrocers
 * @apiDescription This test parses the response body after a successful DELETE request and checks if it contains the expected message.
 * 
 * @apiSuccess {Object} data The response body.
 * @apiSuccess {String} data.message A success message confirming the item was deleted.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Item deleted successfully"
 *     }
 * 
 * @apiError {String} error Error description if the request fails.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Item not found"
 *     }
 */

// Test to parse the response body and check for expected data
test('should return success message in response body after DELETE request', async () => {
    try {
      const response = await fetch(`${config.API_URL}/your/endpoint`, {
        method: 'DELETE',
      });
  
      const data = await response.json(); // Parse the JSON from the response
  
      // Check the response contains the success message
      expect(data).toHaveProperty('message'); // Check that response contains 'message'
      expect(data.message).toBe('Item deleted successfully'); // Check the specific message
    } catch (error) {
      console.error('Error parsing the response body:', error);
    }
  });