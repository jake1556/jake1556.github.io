const newQuoteButton = document.getElementById('js-new-quote');
const quoteText = document.getElementById('js-quote-text');
const authorText = document.getElementById('js-author-text');
const quoteImage = document.getElementById('js-image');
const tweetButton = document.getElementById('js-tweet');

const endpoint = 'https://api.quotable.io/random';

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = `"${data.content}"`;
      authorText.textContent = `— ${data.author}`;
      quoteImage.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.author)}&background=random`;
      tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${data.content}" — ${data.author}`)}`;
    })
    .catch(error => {
      quoteText.textContent = 'Oops! Something went wrong.';
      authorText.textContent = '';
      quoteImage.src = '';
      console.error(error);
    });
}

// Load one quote on page load
getQuote();
