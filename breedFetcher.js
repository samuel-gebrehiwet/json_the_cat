const request = require('request');

// Function to fetch and display breed information
function fetchBreedDescription(breedName) {
  // Construct the API endpoint URL with the breedName as a query parameter
  const apiEndpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Make the GET request to the API endpoint
  request(apiEndpoint, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    // Parse the JSON response body into a JavaScript object
    const data = JSON.parse(body);

    // Check if the API returned no results (empty array)
    if (data.length === 0) {
      console.log(`Breed '${breedName}' not found.`);
      return;
    }

    // Extract the description of the breed from the first result
    const breedDescription = data[0].description;

    // Print the breed description
    console.log(`Breed: ${breedName}`);
    console.log(`Description: ${breedDescription}`);
  });
}

// Get the breed name from command-line arguments
const breedName = process.argv[2];

// Check if a breed name was provided as a command-line argument
if (!breedName) {
  console.log('Please provide a breed name as a command-line argument.');
} else {
  // Call the function to fetch and display breed information
  fetchBreedDescription(breedName);
}
