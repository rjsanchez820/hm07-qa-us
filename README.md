# Sprint 7 project
Urban Grocers API Test Suite

## Description

This project is an API for managing kits, where each kit contains a list of products with details such as name, price, and quantity. The API supports creating, updating, deleting, and fetching kits and their associated products. The purpose of this project is to demonstrate comprehensive test coverage for all HTTP methods (GET, POST, PUT, DELETE), ensuring the API complies with functional requirements and correct behavior as documented.

## Documentation 

The project uses apiDoc to generate API documentation. You can access the API documentation by following these steps:

1. Run npm install to install the necessary packages.
2. Use the command npm run doc to generate the documentation files.
3. Open the generated documentation in your browser.

## Technonogies and Techniques

-**Node.js**: The server-side runtime used to build the API.
-**Express.js**: A web framework for building the API routes and handling requests.
-**apiDoc**: Used for generating API documentation based on code comments.
-**Jest**: A testing framework used to run unit and integration tests.
-**Fetch API**: Utilized within the tests to send HTTP requests and handle responses.
-**Postman**: Used for manual API testing and inspecting API responses during development.
-**Visual Studio Code**: The code editor used for writing and managing the project's source code.
-**GitHub**: Used for version control, collaboration, and hosting the project repository.
-**PowerShell / Git Bash**: Terminals for executing commands, running the test suite, and managing Git.

## Installation Instructions

To get the project up and running on your local machine, follow these steps:

1. Clone the Repository:

```bash
git clone https://github.com/rjsanchez820/hm07-qa-us/tree/main
cd hm07-qa-us

2. Install Dependencies: After navigating to the project directory, install the required Node.js packages by running:

npm install

3. Set the Test URL: Before running the test suite, ensure that the API URL is correctly set in the config.js file located in the root directory. The configuration file should define the following:

module.exports = {
    API_URL: 'https://cnt-99b86930-b6bf-4db7-a374-63f485d6783d.containerhub.tripleten-services.com'
};

## Running the Test Suite

To validate the API functionality and ensure all tests pass, follow these steps:

1. Run the Test Suite: Execute the following command to run all tests using the Jest framework:

npm test

2. Test Coverage: The tests cover all HTTP methods (GET, POST, PUT, DELETE) for the various endpoints. Each test checks for appropriate status codes, response structures, and correct error handling based on the API documentation.