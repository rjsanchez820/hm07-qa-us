const config = require('../../config');

test('should return status 200 and product with id 1 for the GET request', async () => {
  let response;

  try {
    response = await fetch(`${config.API_URL}/kits?cardId=1`);
  } catch (error) {
    console.error('Error during GET request:', error);
    throw new Error('GET request failed'); 
  }

  // Expecting a 200 status for a successful request
  expect(response.status).toBe(200);

  const responseData = await response.json();

  // Check that the response contains the product with id 1
  const productWithId1 = responseData.productsList.find(product => product.id === 1);
  
  expect(productWithId1).toBeDefined(); // Ensure the product exists
  expect(productWithId1).toEqual({
    id: 1,
    name: "Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free",
    price: 2,
    weight: 473,
    units: "ml",
    quantity: 1
  });
});
