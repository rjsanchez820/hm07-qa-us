// eslint-disable-next-line no-undef
const config = require('../config');

const updateRequestBody = {
    "productsList": [
        {
            "id": 5,
            "quantity": 3
        }
    ]
};

test('Status code should be 200 for PUT request', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateRequestBody)
        });
        actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }

    expect(actualStatusCode).toBe(200);
});

test('Response body should reflect the updated data', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateRequestBody)
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(actualResponseBody.ok).toBe(true);
});
