// eslint-disable-next-line no-undef
const config = require('../config');

test('Status code should be 200', async () => {
    let actualStatusCode;
    try {
        const requestBody = {
            "cardId": "300",
            "name": "A kit created for testing purposes",
        };

        const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!postResponse.ok) {
            const errorText = await postResponse.text();
            throw new Error(`Failed to create kit: ${postResponse.status} ${errorText}`);
        }

        const postResponseData = await postResponse.json();
        const createdKitId = postResponseData.id;

        const deleteResponse = await fetch(`${config.API_URL}/api/v1/kits/${300}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        actualStatusCode = deleteResponse.status;
    } catch (error) {
        console.error('Error during POST or DELETE request:', error);
        throw error;
    }

    expect(actualStatusCode).toBe(200);
});

test('Response body should contain expected message', async () => {
    let actualResponseBody;
    try {
        const requestBody = {
            "cardId": "300",
            "name": "A kit created for testing purposes",
        };

        const postResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!postResponse.ok) {
            const errorText = await postResponse.text();
            throw new Error(`Failed to create kit: ${postResponse.status} ${errorText}`);
        }

        const postResponseData = await postResponse.json();
        const createdKitId = postResponseData.id;

        const deleteResponse = await fetch(`${config.API_URL}/api/v1/kits/${300}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!deleteResponse.ok) {
            const errorText = await deleteResponse.text();
            throw new Error(`Failed to delete kit: ${deleteResponse.status} ${errorText}`);
        }

        actualResponseBody = await deleteResponse.json();
    } catch (error) {
        console.error('Error during POST or DELETE request:', error);
        throw error; 
    }

    expect(actualResponseBody.ok).toBe(true);
});