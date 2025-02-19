Assignment: API Data Fetching and DOM Manipulation

Objective

The purpose of this assignment is to evaluate your ability to:

Clone and pull a repository into your local code base.

Access and manipulate DOM elements.

Make an API request and populate the DOM with fetched data.

Ensure that data fetching completes before subsequent console logs execute.

Implement proper error handling in case of failures.

Instructions

1. Clone the Repository

You will be provided with a Git repository URL.

Clone the repository into your local environment.

Pull the latest changes to ensure your code is up to date.

2. Modify script.ts to Implement Data Fetching

Retrieve the necessary HTML elements using document.getElementById.

Fetch data from the API endpoint: https://restcountries.com/v3.1/name/canada.

Ensure the API response is parsed and the following data is populated in the HTML:

Flag: Display the country flag.

Country Name: Display the official name of the country.

Population: Display the total population.

Ensure the fetchDataWithTimeout function does not execute console.log('Check 2') until the data is fully fetched and rendered.

Implement proper error handling:

Display an error message in #errorContainer if the request fails.

Hide the data container when an error occurs.

Log error details in the console.

3. Attach Event Listener to Button

Ensure that clicking the "Fetch Data" button triggers the fetchDataWithTimeout function.

4. Testing & Validation

Run the project and click the "Fetch Data" button.

Ensure that the API data is correctly displayed.

Open the browser console and verify that console.log('Check 2') only executes after the data is displayed.

Simulate an API failure (e.g., modify the URL temporarily) and confirm that the error handling works as expected.

Submission Requirements

Push your completed code to your assigned repository.

Ensure all code follows best practices and is well-structured.

Submit the repository link for review.

Bonus: If you want to challenge yourself, modify the UI to allow users to input a country name dynamically and fetch data accordingly.

Good luck!
