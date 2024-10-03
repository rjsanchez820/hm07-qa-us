const config = require('../config');

const requestBody = {
    // put your body here
};

test('should return expected data in the response body after POST request', async () => {
    let response;
    let data;

    try {
        response = await fetch(`${config.API_URL}/your/endpoint`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        data = await response.json(); // Parse the JSON from the response
    } catch (error) {
        console.error('Error parsing the response body:', error);
    }

    expect(data).toHaveProperty('id'); // Check that response contains 'id'
    expect(data.item).toBe('Apple'); // Check that the 'item' field matches
    expect(data.quantity).toBe(5); // Check that the 'quantity' field matches
});
