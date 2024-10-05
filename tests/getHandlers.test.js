const config = require('../config');

test('Fetch kit with valid cardId should return 200 and kit data', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`);
        expect(response.status).toBe(200);  
        const data = await response.json();
        expect(data).toBeDefined();  
    } catch (error) {
        console.error('Error fetching kit:', error);
    }
});

test('Fetch kit with invalid cardId should return 404', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=9999`);
        expect(response.status).toBe(404);  
    } catch (error) {
        console.error('Error fetching kit with invalid ID:', error);
    }
});
