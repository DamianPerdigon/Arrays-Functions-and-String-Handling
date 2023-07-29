// Prompt the user for input to encrypt
let userInput = prompt("Please enter the sentence you want to encrypt: ");

// Function that takes the message and transforms it using the Caesar cipher
function caesar(userInput) {
  const shift = 15;
  let encryptedMessage = "";

  // Iterate over each character in the user input
  for (let i = 0; i < userInput.length; i++) {
    let char = userInput[i];
    let ascii = char.charCodeAt(0);

    // Check if the character is a lowercase letter
    if (char >= "a" && char <= "z") {
      ascii = ((ascii - 97 + shift) % 26) + 97; // Apply the shift for lowercase letters
    }
    // Check if the character is an uppercase letter
    else if (char >= "A" && char <= "Z") {
      ascii = ((ascii - 65 + shift) % 26) + 65; // Apply the shift for uppercase letters
    }

    // Append the encrypted character to the encrypted message
    encryptedMessage += String.fromCharCode(ascii);
  }

  return encryptedMessage;
}

// Call the caesar function with the user input
const encryptedMessage = caesar(userInput);

// Output the encrypted message
console.log(encryptedMessage);
