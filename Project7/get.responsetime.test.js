/**
 * @api {get} /your/endpoint Check Response Time
 * @apiName CheckResponseTime
 * @apiGroup YourGroup
 * @apiDescription This test checks whether the API response time is within acceptable limits (200ms).
 * 
 * @apiSuccess {Number} responseTime The time it took to receive the response, in milliseconds.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "responseTime": 150
 *     }
 * 
 * @apiError {String} error Description of the error that occurred, if any.
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Server timeout"
 *     }
 */

// Additional test to check if the response time is within acceptable limits
test('Response should be received within 200ms', async () => {
    const startTime = Date.now();
    try {
        const response = await fetch(`${config.API_URL}/your/endpoint`);
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        expect(responseTime).toBeLessThanOrEqual(200); // Check if the response time is less than or equal to 200ms
    } catch (error) {
        console.error(error);
    }
});