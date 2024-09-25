const request = require('supertest');
const apiEndpoint = 'https://cnt-c1f21efe-aea6-43e0-ac49-46e5bf7f2446.containerhub.tripleten-services.com/'; // Import API endpoint from config

describe('GET /products', () => {

  // Test 1: Check the response status code
  it('should return a list of products', async () => {
    const response = await request(apiEndpoint).get('/products'); // GET request
    expect(response.statusCode).toBe(200); // Expect 200 OK
  });

