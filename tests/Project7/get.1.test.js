const request = require('supertest');
const apiEndpoint = require('https://cnt-b1239970-ed46-4455-a573-119728f15023.containerhub.tripleten-services.com/'; // Import API endpoint from config

describe('GET /products', () => {

  // Test 1: Check the response status code
  it('should return status code 200', async () => {
    const response = await request(apiEndpoint).get('/products'); // GET request
    expect(response.statusCode).toBe(200); // Expect 200 OK
  });

