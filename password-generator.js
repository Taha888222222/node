const generatePassword = require('generate-password');

// Create a function to generate random passwords
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });

  console.log(password);
}

// Call the function to generate and log a random password
generateRandomPassword();