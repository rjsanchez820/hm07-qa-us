# Urban Grocers API Test Suite

# Description
    The Urban Grocers API Test Suite is a project dedicated to testing an API that manages kits, where each kit contains a list of products with details such as name, price, and quantity. The API supports creating, updating, deleting, and fetching kits and their associated products. The purpose of this project is to demonstrate comprehensive test coverage for all HTTP methods (GET, POST, PUT, DELETE), ensuring the API complies with functional requirements and behaves correctly as documented.

# Documentation
    This project uses apiDoc to generate API documentation based on code comments. apiDoc allows for creating detailed and structured documentation that stays in sync with the codebase.

    Accessing the API Documentation:
    Copy URL from triple-ten webiste from sprint 7 project.
    Paste URL into web browser with /docs/ at the end of URL 

# Technologies and Techniques Used

    Node.js: The server-side runtime environment used to build and run the API.
    Express.js: A web framework for building API routes and handling HTTP requests and responses.
    apiDoc: A documentation generator that creates API documentation from code comments, ensuring the documentation stays up-to-date with the code.
    Jest: A JavaScript testing framework used for writing and running automated unit and integration tests.
    Fetch API: Utilized within the tests (using node-fetch) to send HTTP requests and handle responses asynchronously.
    Postman: Used for manual API testing and inspecting API responses during development.
    Visual Studio Code: The code editor used for writing and managing the project's source code.
    GitHub: Used for version control, collaboration, and hosting the project repository.
    PowerShell / Git Bash: Terminals for executing commands, running the test suite, and managing Git.

# Installation Instructions

    To get the project up and running on your local machine, follow these steps:
    1. Clone the Repository:
    
    bash
    Copy code
    git clone https://github.com/rjsanchez820/hm07-qa-us.git
    cd hm07-qa-us

    2. Install Dependencies:

    After navigating to the project directory, install the required Node.js packages:

    bash
    Copy code
    npm install
    Set the Test URL:

    Before running the test suite, ensure that the API URL is correctly set in the config.js file located in the root directory. The configuration file should define the following:

    javascript
    Copy code
    // config.js
    module.exports = {
  API_URL: 'https://cnt-99b86930-b6bf-4db7-a374-63f485d6783d.containerhub.tripleten-services.com',
};
    Replace the API_URL value with your actual API endpoint if it's different.

# Running the Test Suite

    To validate the API functionality and ensure all tests pass, follow these steps:

    1. Run the Test Suite:

    Execute the following command to run all tests using the Jest framework:

    bash
    Copy code
    npx jest
    Or, if you have Jest installed globally:

    bash
    Copy code
    jest
    Test Coverage:

The tests cover all HTTP methods (GET, POST, PUT, DELETE) for the various endpoints. Each test checks for appropriate status codes, response structures, and correct error handling based on the API documentation.