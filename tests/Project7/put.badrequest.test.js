const config = require('../../config');

const invalidRequestBody = {
    itemId: '12345',
    item: '', 
    quantity: -10 
};

test('should return status 400 for an invalid PUT request', async () => {
    let response;

    try {
        response = await fetch(`${config.API_URL}/your/endpoint`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invalidRequestBody),
        });
    } catch (error) {
        console.error('Error during invalid PUT request:', error);
    }

    expect(response.status).toBe(400); 
});
