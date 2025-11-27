// Array of quotes to be used by the generator
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "STEVE JOBS"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "ALBERT EINSTEIN"
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "BUDDHA"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "ELEANOR ROOSEVELT"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "THOMAS EDISON"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "PETER DRUCKER"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "CONFUCIUS"
    },
    {
        quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
        author: "AYN RAND"
    },
    {
        quote: "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
        author: "MARK ZUCKERBERG"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "STEVE JOBS"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "FRANKLIN D. ROOSEVELT"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "NELSON MANDELA"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "CHINESE PROVERB"
    },
    {
        quote: "If you want to achieve greatness stop asking for permission.",
        author: "UNKNOWN"
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "STEVE JOBS"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        author: "MARK TWAIN"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "WINSTON CHURCHILL"
    },
    {
        quote: "The power of imagination makes us infinite.",
        author: "JOHN MUIR"
    },
    {
        quote: "Do not wait to strike till the iron is hot; but make the iron hot by striking.",
        author: "WILLIAM BUTLER YEATS"
    },
    {
        quote: "The future belongs to those who learn more skills and combine them in creative ways.",
        author: "ROBERT GREENE"
    }
];

let lastIndex = -1; // To ensure the next quote is different from the last one

const quoteTextElement = document.getElementById('quote-text');
const authorNameElement = document.getElementById('author-name');
const newQuoteButton = document.getElementById('new-quote-btn');

/**
 * Generates and displays a random quote from the array.
 */
function generateQuote() {
    let randomIndex;
    
    // Ensure the new quote is not the same as the previous one
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex && quotes.length > 1);

    const randomQuote = quotes[randomIndex];
    lastIndex = randomIndex; // Update the last index

    // Display the quote and author with a smooth transition (optional visual flair)
    quoteTextElement.style.opacity = '0';
    authorNameElement.style.opacity = '0';

    setTimeout(() => {
        quoteTextElement.textContent = randomQuote.quote;
        authorNameElement.textContent = '— ' + randomQuote.author + ' —';
        
        quoteTextElement.style.opacity = '1';
        authorNameElement.style.opacity = '1';
    }, 300); // Wait for fade out to complete before setting new text
}

// Initialize display with the first quote
function initializeApp() {
    // Add transition for smooth quote changes
    quoteTextElement.style.transition = 'opacity 0.3s ease-in-out';
    authorNameElement.style.transition = 'opacity 0.3s ease-in-out';
    
    // Generate the first quote on load
    generateQuote();
    
    // Attach event listener to the button
    newQuoteButton.addEventListener('click', generateQuote);
}

// Start the application setup when the window loads
window.onload = initializeApp;