const config = require('../config');

test('Delete kit with valid cardId should return 200 and success message', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`, {
            method: 'DELETE',
        });
        expect(response.status).toBe(200);  
        const data = await response.json();
        expect(data.message).toBe('Kit successfully deleted');
    } catch (error) {
        console.error('Error deleting kit:', error);
    }
});

test('Delete kit with invalid cardId should return 404', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=9999`, {
            method: 'DELETE',
        });
        expect(response.status).toBe(404);  
    } catch (error) {
        console.error('Error deleting kit with invalid ID:', error);
    }
});
