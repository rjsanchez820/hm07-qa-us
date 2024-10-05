const config = require('../config');

test('', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
});
