const express = require("express");
const bip39 = require("bip39");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8010;
app.use(express.json());
app.use(cors());

// Function to generate a seed phrase
function generateSeedPhrase(wordCount) {
  let mnemonic;
  if (wordCount === 12) {
    mnemonic = bip39.generateMnemonic(128); // 128 bits = 12 words
  } else if (wordCount === 24) {
    mnemonic = bip39.generateMnemonic(256); // 256 bits = 24 words
  } else {
    throw new Error("Invalid word count. Please use 12 or 24.");
  }
  return mnemonic;
}

// API endpoint to generate a seed phrase with a specified word count
app.get("/generate/:wordCount", (req, res) => {
  const wordCount = parseInt(req.params.wordCount, 10); // Get word count from URL parameter

  try {
    const seedPhrase = generateSeedPhrase(wordCount); // Generate the seed phrase
    res.json({ seedPhrase }); // Return the mnemonic as JSON
  } catch (error) {
    res.status(400).json({ error: error.message }); // Return error message if invalid
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
