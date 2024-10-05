const config = require('../config');

const updatedKit = {
    name: "Updated Picnic Kit",
    productsList: [
        {
            id: 1,
            name: "Mountain Dew",
            price: 1,
            weight: 1,
            units: 'l',
            quantity: 1
        }
    ]
};

const invalidUpdate = {
    name: "",  
    productsList: []
};

test('Update kit with valid data should return 200 and updated kit', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedKit),
        });
        expect(response.status).toBe(200);  
        const data = await response.json();
        expect(data.name).toBe(updatedKit.name);
    } catch (error) {
        console.error('Error updating kit:', error);
    }
});

test('Update kit with invalid data should return 400', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invalidUpdate),
        });
        expect(response.status).toBe(400);  
    } catch (error) {
        console.error('Error updating kit with invalid data:', error);
    }
});
