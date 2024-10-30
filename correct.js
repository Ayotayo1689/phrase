const bip39 = require('bip39');

// Given seed phrase with the missing word "geny"
let seedPhrase = "cactus merge erase stable car scene custom cement powder audit jelly carpet business limb nest blame raccoon excess romance guitar turn noble identify".split(" ");

// Function to find the missing word in a BIP-39 seed phrase
async function findCorrectWord(seedPhrase) {
    // Get the list of all valid BIP-39 words
    const wordList = bip39.wordlists.english;

    // Iterate through all possible words in the BIP-39 wordlist
    for (let word of wordList) {
        // Insert the current word in place of the missing word
        let candidatePhrase = [...seedPhrase.slice(0, 6), word, ...seedPhrase.slice(6)];

        // Join the words back into a single string
        let candidateMnemonic = candidatePhrase.join(" ");

        // Validate if the mnemonic is correct
        if (bip39.validateMnemonic(candidateMnemonic)) {
            console.log("Found Correct Seed Phrase:", candidateMnemonic);
            return candidateMnemonic;
        }
    }
    console.log("No valid word found");
    return null;
}

// Run the function to find the correct word
findCorrectWord(seedPhrase);