const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" }
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quoteText = document.getElementById("quote");
    let authorText = document.getElementById("author");
    
    quoteText.classList.add("fade");
    setTimeout(() => {
        quoteText.innerText = quotes[randomIndex].text;
        authorText.innerText = "- " + quotes[randomIndex].author;
        quoteText.classList.remove("fade");

        // Change background color randomly
        document.body.style.background = `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`;
    }, 500);
}

function randomColor() {
    const colors = ['#ff7eb3', '#ff758c', '#6a89cc', '#82ccdd', '#b8e994', '#f8c291', '#e55039'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Generate an initial quote on load
window.onload = generateQuote;
