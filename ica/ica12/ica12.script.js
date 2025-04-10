// Step 1: Select the buttons and quote areas from the page
const newQuoteButton = document.querySelector('#js-new-quote');
const answerButton = document.querySelector('#js-tweet');

const quoteText = document.getElementById('js-quote-text');
const answerText = document.getElementById('js-answer-text');

// Step 2: Create a variable to hold the API URL
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

// stores the answer we get from the API
let currentAnswer = '';

// Step 3: Add event listeners to the buttons
newQuoteButton.addEventListener('click', getQuote);
answerButton.addEventListener('click', showAnswer);

// Step 4: Create the function to get quote
function getQuote() {
  console.log('Get Quote button was clicked!');

  // Clear the answer each time we get a new one
  answerText.textContent = '';

  // Used to fetch data from the API
  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data); // See the data we got
      displayQuote(data);
    })
    .catch(function(error) {
      console.log('There was an error:', error);
      alert('Something went wrong. Please try again later.');
    });
}

// Creates the function to show the quote on the page
function displayQuote(data) {
  quoteText.textContent = data.question;
  currentAnswer = data.answer; // Save the answer for later
}


function showAnswer() {
  if (currentAnswer) {
    answerText.textContent = currentAnswer;
  } else {
    answerText.textContent = 'Click the button to get a question first!';
  }
}


getQuote();
