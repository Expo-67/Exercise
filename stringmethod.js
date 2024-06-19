// (validation of users input)validating users input either in  email addresses, password , phone number
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isValidEmail(email) {
  return emailPattern.test(email);
}

console.log(isValidEmail("user@example.com")); // Output: true
console.log(isValidEmail("invalid-email")); // Output: false

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

function isValidPassword(password) {
  return passwordPattern.test(password);
}

console.log(isValidPassword("Password123")); // Output: true
console.log(isValidPassword("pass")); // Output: false

//reference:https://bootcamp.uxdesign.cc/understanding-regular-expressions-%EF%B8%8F-in-javascript-real-life-scenarios-and-code-snippets-c41b18ac3d38

const phonePattern = /^(\+?\d{1,3})?[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;

function isValidPhoneNumber(phoneNumber) {
  return phonePattern.test(phoneNumber);
}

console.log(isValidPhoneNumber("+1 123-456-7890")); // Output: true
console.log(isValidPhoneNumber("123.456.7890")); // Output: true
console.log(isValidPhoneNumber("123456789")); // Output: false (invalid format)
