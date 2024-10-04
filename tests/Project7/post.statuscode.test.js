const config = require('../../config');

const requestBody = {
    item: 'Apple',
    quantity: 5
};

test('should return status 201 for a successful POST request', async () => {
    let response;

    try {
        response = await fetch(`${config.API_URL}/your/endpoint`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });
    } catch (error) {
        console.error('Error during POST request:', error);
    }

    expect(response.status).toBe(201); // Check if the response status is 201 Created
});
