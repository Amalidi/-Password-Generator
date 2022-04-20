// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  return 10;
};

const getPasswordCriteria = () => {
  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
};

const createRandomPassword = () => {
  return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
    // ask users the length of password
    passwordLength = prompt("Choose how many characters long you'd like your password to be (Choose between 8 and 128)");
    console.log("Password length " + passwordLength);

  // get the password length
  const passwordLength = getPasswordLength();
  //   if number
  if (Number.isNaN(passwordLength)) {
    alert("Password length must be a number between 8-128 characters");
    return false;
    }else if(passwordLength <= 8 && passwordLength >= 128){
        passwordLength
     }



  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
