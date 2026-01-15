const quotes = [
    { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" }
];

function generateQuote() {
    const quoteEl = document.getElementById("quote");
    const authorEl = document.getElementById("author");
    
    quoteEl.style.opacity = 0;
    authorEl.style.opacity = 0;

    setTimeout(() => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        quoteEl.innerText = random.text;
        authorEl.innerText = "— " + random.author;
        quoteEl.style.opacity = 1;
        authorEl.style.opacity = 1;
    }, 300);
}

window.onload = generateQuote;
