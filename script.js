async function displayQuotes() {
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");

  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    quoteText.textContent = `"${data.content}"`;
    quoteAuthor.textContent = `- ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Failed to fetch quote. Try again.";
    quoteAuthor.textContent = "";
    console.error("Quote error:", error);
  }
}

// Stub functions for buttons
function displayFav() {
  alert("Favorites feature coming soon!");
}

function displayAll() {
  alert("Show all quotes coming soon!");
}

function addQuotes() {
  alert("Create-your-own quote coming soon!");
}

function shareQuotes() {
  navigator.clipboard.writeText(document.getElementById("quoteText").textContent)
    .then(() => alert("Quote copied to clipboard!"))
    .catch(() => alert("Could not copy quote."));
}
