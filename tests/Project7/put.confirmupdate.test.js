/**
 * @api 
 * @apiName 
 * @apiGroup
 * @apiDescription 
 * 
 * @apiSuccess 
 * @apiSuccess 
 * @apiSuccess 
 * @apiSuccess 
 * 
 * @apiSuccessExample 
 * 
 * @apiError 
 * 
 * @apiErrorExample 
 */


const config = require('../config');

const requestBody = {
    itemId: '12345',
    item: 'Updated Apple',
    quantity: 10,
};

test('should return expected updated data in the response body after PUT request', async () => {
    let response;
    let data;

    try {
        response = await fetch(`${config.API_URL}/your/endpoint`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        data = await response.json(); // Parse the JSON from the response
    } catch (error) {
        console.error('Error parsing the response body:', error);
    }

    expect(response.status).toBe(200); // Check if the response status is 200 OK
    expect(data).toHaveProperty('itemId'); // Check that response contains 'itemId'
    expect(data.item).toBe('Updated Apple'); // Check that the 'item' field matches
    expect(data.quantity).toBe(10); // Check that the 'quantity' field matches
});