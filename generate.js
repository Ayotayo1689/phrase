const bip39 = require('bip39');

// Generate a new 24-word seed phrase
function generateSeedPhrase() {
    const mnemonic = bip39.generateMnemonic(256); // 256 bits = 24 words
    console.log('Generated Seed Phrase:', mnemonic);
    return mnemonic;
}

// Validate a seed phrase
function validateSeedPhrase(mnemonic) {
    const isValid = bip39.validateMnemonic(mnemonic);
    console.log(`Is the seed phrase valid? ${isValid}`);
    return isValid;
}

// Example Usage
const seedPhrase = generateSeedPhrase(); // Generate a new seed phrase
validateSeedPhrase(seedPhrase);          // Validate the generated seed phrase

// To validate an existing phrase, replace the seedPhrase in validateSeedPhrase()