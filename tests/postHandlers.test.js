const config = require('../config');

const validKit = {
    name: "Picnic Kit",
    productsList: [
        {
            id: 1,
            name: "Orange Juice",
            price: 2,
            weight: 473,
            units: 'ml',
            quantity: 1
        }
    ]
};

const invalidKit = {
    name: "",  
    productsList: []
};

test('Create kit with valid data should return 201 and created kit', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validKit),
        });
        expect(response.status).toBe(201);  
        const data = await response.json();
        expect(data.name).toBe(validKit.name);
    } catch (error) {
        console.error('Error creating kit:', error);
    }
});

test('Create kit with invalid data should return 400', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invalidKit),
        });
        expect(response.status).toBe(400);  
    } catch (error) {
        console.error('Error creating kit with invalid data:', error);
    }
});
