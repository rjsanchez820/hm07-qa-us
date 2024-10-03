/**
 * @api  
 * @apiName 
 * @apiGroup 
 * @apiDescription 
 * 
 * @apiSuccess 
 * @apiSuccess 
 * 
 * @apiSuccessExample 
 *     
 * 
 * @apiError 
 * 
 * @apiErrorExample 
 * */
const config = require('../config');

test('should return status 200 for the GET request', async () => {
  let response;

  try {
    response = await fetch(`${config.API_URL}/your/endpoint`);
  } catch (error) {
    console.error('Error during GET request:', error);
  }

  expect(response.status).toBe(200); // Check that the status code is 200 (OK)
});