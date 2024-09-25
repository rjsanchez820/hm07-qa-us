// Additional test to check if the response time is within acceptable limits
test('Response should be received within 200ms', async () => {
    const startTime = Date.now();
    try {
        const response = await fetch(`${config.API_URL}/your/endpoint`);
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        expect(responseTime).toBeLessThanOrEqual(200); // Check if the response time is less than or equal to 200ms
    } catch (error) {
        console.error(error);
    }
});
