const config = require('../../config');

test('should return status 404 for the GET request', async () => {
  let response;

  try {
    response = await fetch(`${config.API_URL}/kits?cardId=1`);
  } catch (error) {
    console.error('Error during GET request:', error);
    throw new Error('GET request failed'); 
  }

  expect(response.status).toBe(200);

  const responseData = await response.json();

  expect(responseData).toEqual({
    id: 1,
    name: "For picnic",
    productsList: [
      {
        id: 1,
        name: "Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free",
        price: 2,
        weight: 473,
        units: "ml",
        quantity: 1
      }
    ]
  });
});