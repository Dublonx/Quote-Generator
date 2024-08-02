// Qoute Generator
document.addEventListener("DOMContentLoaded", () => {
const quote = [
  "You are enough just are you are.",
  "Perfection is not attainable, but if we chase perfection we can.",
  "The secret of getting ahead is getting started.",
  "Life is short and it is here to be lived.",
  "Happiness is not by chance, but by choice.",
  "Risking is better than regretting.",
  "Your smile is the most beautiful thing to me.",
  "Don't rush the process, good things take time.",
  "Smile, it's free therapy.",
  "When nothing goes right, goes left.",
  "Take the risk.",
  "I can and i will.",
  "The future depends on what you do today.",
  "It is all part of the process."
];
const quoteText = document.getElementById("quote");
const button = document.getElementById("genQuote");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quote.length);
  return quote[randomIndex];
}

button.addEventListener("click", () => {
  quoteText.textContent = generateQuote();
});

// quoteText.textContent = generateQuote();
});