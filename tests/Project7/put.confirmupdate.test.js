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
        response = await fetch(`${config.API_URL}/tests/Project7/put.confirmupdate.test.js`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        data = await response.json(); 
    } catch (error) {
        console.error('Error parsing the response body:', error);
    }

    expect(response.status).toBe(200); 
    expect(data).toHaveProperty('itemId'); 
    expect(data.item).toBe('Updated Apple'); 
    expect(data.quantity).toBe(10); 
});