const config = require('../config'); 

let validKit = { 
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

let invalidKit = { 
    name: "",  
    productsList: []
};

test('Create kit with valid data should return 201', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validKit), 
        });
    } catch (error) {
        console.error('Error creating kit:', error);
    }
    expect(response.status).toBe(201); 
});

test('Create kit with valid data should return the created kit', async () => {
    let response; 
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validKit),
        });
        const data = await response.json(); 
    } catch (error) {
        console.error('Error creating kit:', error);
    }
    expect(response.status).toBe(201);
    expect(data.name).toBe(validKit.name); 
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
    } catch (error) {
        console.error('Error creating kit with invalid data:', error);
    }
    expect(response.status).toBe(400); 
});
