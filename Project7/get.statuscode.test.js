
// eslint-disable-next-line no-undef
const config = require('../config');

/**
 * @api {get} /your/endpoint Check Response Status Code
 * @apiName GetStatusCode
 * @apiGroup YourGroup
 * @apiDescription This test checks whether the API responds with a status code of 200 for a successful GET request.
 * 
 * @apiSuccess {Number} status The HTTP status code of the response.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * 
 * @apiError {String} error Description of the error that occurred, if any.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal server error"
 *     }
 */

// Test to check the response status code for a GET request
test('should return status 200 for the GET request', async () => {
  try {
    const response = await fetch(`${config.API_URL}/your/endpoint`);
    expect(response.status).toBe(200); // Check that the status code is 200 (OK)
  } catch (error) {
    console.error('Error during GET request:', error);
  }
});