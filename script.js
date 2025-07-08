let currentQuote = "";
let currentAuthor = "";

async function displayQuotes() {
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");

  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();

    currentQuote = data.content;
    currentAuthor = data.author;

    quoteText.textContent = `"${currentQuote}"`;
    quoteAuthor.textContent = `- ${currentAuthor}`;
  } catch (err) {
    quoteText.textContent = "💥 Quote fetch failed. Try again.";
    quoteAuthor.textContent = "";
    console.error(err);
  }
}

function displayFav() {
  const favorites = JSON.parse(localStorage.getItem("favQuotes")) || [];
  if (favorites.length === 0) {
    alert("No favorite quotes saved yet!");
    return;
  }

  const random = favorites[Math.floor(Math.random() * favorites.length)];
  document.getElementById("quoteText").textContent = `"${random.text}"`;
  document.getElementById("quoteAuthor").textContent = `- ${random.author}`;
}

function displayAll() {
  const favorites = JSON.parse(localStorage.getItem("favQuotes")) || [];
  if (favorites.length === 0) {
    alert("No saved quotes.");
    return;
  }

  const all = favorites.map(q => `"${q.text}" - ${q.author}`).join("\n\n");
  alert(all);
}

function addQuotes() {
  const text = prompt("Enter your custom quote:");
  if (!text) return;

  const author = prompt("Enter the author (or leave blank):") || "Anonymous";

  const favorites = JSON.parse(localStorage.getItem("favQuotes")) || [];
  favorites.push({ text, author });
  localStorage.setItem("favQuotes", JSON.stringify(favorites));

  alert("Quote added to favorites!");
}

function shareQuotes() {
  const quote = document.getElementById("quoteText").textContent;
  const author = document.getElementById("quoteAuthor").textContent;
  const fullQuote = `${quote} ${author}`;

  navigator.clipboard.writeText(fullQuote)
    .then(() => alert("Copied to clipboard!"))
    .catch(() => alert("Could not copy to clipboard."));
}
const fallbackQuotes = [
  { content: "Metal up your life.", author: "ACGquoteGen" },
  { content: "I'm not lazy. I'm on energy-saving mode.", author: "Unknown" },
  { content: "Why so serious?", author: "Joker" }
];

// replace inside catch block
const fallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
quoteText.textContent = `"${fallback.content}"`;
quoteAuthor.textContent = `– ${fallback.author}`;
