// Getting the id from from the input element with the id of password
const passwordBox =document.getElementById('password');
// this is the length of the password;
const length =  12;
//below are all the characters that can be used in the password
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]></-='

const allCharacters = upperCase + lowerCase + numbers + symbols;

// this is where we store the characters that will be used to create a password.
const createPassword = () => {
    // declared a variable password and set it to an empty string
    // this is declared with let because we are going to be modifying the value of the variable.
    let password = '';
    // this is where we add the characters to the password variable.
    // this is generating random characters from the upperCase, lowerCase, numbers, and symbols variables from their respective length of each variable.
    // we use brackets in the upperCase[] <----- to acces the index from the value of each variable and then using the Math methods to get a rounded random number.
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    // here we are looping through the password variable and adding random characters to it until it reaches the length of the password variable.
    while(length > password.length) {
        //here we are adding a random character to the password variable.
        // we use the Math.random() method to get a random number between 0 and 1.
        // we then multiply the random number by the length of the allCharacters variable.
        // we use the Math.floor() method to get the nearest integer.
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    // here we are returning the password variable.
    // this will display the password in the input element with the id of password.
    passwordBox.value = password;
}
    //function to copy the password to the clipboard
const copyPassword = () => {
    passwordBox.select();
    document.execCommand('copy');
}