// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
let inputImg = document.getElementById('poster-form-img');
let inputTitle = document.getElementById('poster-form-title');
let inputQuote = document.getElementById('poster-form-quote');

let randomizeButton = document.getElementById('randomize');
let submitButton = document.getElementById('submit');

let posterImg = document.getElementById('poster-image');
let posterTitle = document.getElementById('poster-title');
let posterQuote = document.getElementById('poster-quote');
// Array of predefined poster objects
const posters = [
    {
      image: 'https://image-service.usw2.wp-prod-us.cultureamp-cdn.com/OqjzT0ErD2k23PVq3gNsGKXkiJY=/1440x0/cultureampcom/production/1e4/ddf/e68/1e4ddfe687e3363fe3f2e78b/blog-90-funny-jokes-to-share-with-coworkers.png',
      title: 'Poster 1',
      quote: 'Quote 1',
    },
    {
      image: 'https://cms-tc.pbskids.org/parents/expert-tips-and-advice/_pbsKidsForParentsSixteenNineRatioSmall/why-being-funny-is-good-for-your-family-hero.jpg',
      title: 'Poster 2',
      quote: 'Quote 2',
    },
    {
      image: 'https://thumbs.dreamstime.com/z/funny-face-12963753.jpg',
      title: 'Poster 3',
      quote: 'Quote 3',
    },
    // Add more poster objects as needed
  ];
  
  // Event listener for randomize button
  // TODO: Add an event listener to the randomizeButton that calls a function when clicked
  randomizeButton.addEventListener('click', generateRandomPoster);
  // Event listener for submit button
  // TODO: Add an event listener to the submitButton that calls a function when clicked
  submitButton.addEventListener('click', function(event) {
    generateCustomPoster(event);
  });
  
  // Function to generate a random poster
  function generateRandomPoster() {
    // TODO: Generate a random index within the range of the posters array length
    let randomIndex = Math.floor(Math.random() * posters.length);
    // TODO: Retrieve the random poster object from the posters array
    let randomPoster = posters[randomIndex];
    
    // TODO: Call the function to update the DOM with the values from the random poster object
    updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote);
  }
  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();
    // TODO: Retrieve the entered quote and title from the input fields
    // TODO: Create a custom poster object with the entered values
    let customPoster = {
      image: inputImg.value,
      title: inputTitle.value,
      quote: inputQuote.value,
    };
    posterImg.src = customPoster.image;
    posterTitle.innerText = customPoster.title;
    posterQuote.innerText = customPoster.quote;
    // TODO: Call the function to update the DOM with the values from the custom poster object
    updatePoster(customPoster.image, customPoster.title, customPoster.quote);
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    posterImg.src = imageUrl;
    posterTitle.innerText = title;
    posterQuote.innerText = quote;
  }
  