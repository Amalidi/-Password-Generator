//Assignment Code
const generateBtn = document.querySelector("#generate");


// main function to generate the random password
const generatePassword = () => {
    // ask users the length of password

    // get the password length
  const passwordLength = getPasswordLength();
  console.log("passwordlength" + passwordLength);

 if(passwordLength) {
  // get the password criteria
    const passwordCriteria = getPasswordCriteria();

    if(passwordCriteria.length === 0){
        alert("Password length must be a number between 8-128 characters")
    }  
      if(Number.isNaN(passwordLength)) {
        alert("Password length should be a number");
        }else{

        // create random password
       const password = createRandomPassword(passwordLength, passwordCriteria);
        return password;
        };

        }else{
            // when user input is incorrect 
        alert("Enter your password again.")
        }
        };


    // get the password length 
    const getPasswordLength = () => {
        const passwordlength = prompt("Choose how many characters long you'd like your password to be? Choose between 8 and 128")
        console.log(passwordlength);

        const detPassLength = parseInt (passwordlength, 10);
        console.log("detPassLength" + detPassLength);

        if (detPassLength >=8 && detPassLength <= 128){
            console.log("correct")
        } else {
            alert ("Password length must be a number between 8-128 characters");
            return false;
        }
        return detPassLength;
      };

    

    // get the password criteria
    const getPasswordCriteria = () => {
        const lowercaseCheck = confirm ("Do you want to include lowercase letters in your password?");
        const uppercaseCheck = confirm ("Do you want to include uppercase letters in your password?");
        const specialCheck   = confirm ("Do you want to include special characters in your password?");
        const numberCheck    = confirm ("Do you want to include numbers in your password?");
        const determinePassword = [];

        if(lowercaseCheck){
            determinePassword.push("abcdefghijklmnopqrstuvwxyz");
        }
        if(uppercaseCheck){
            determinePassword.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }
        if(specialCheck){
            determinePassword.push(" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
        }
        if(numberCheck){
            determinePassword.push("0123456789");
        }

        return determinePassword;

      };

    // create random password
    const createRandomPassword = (passwordLength, passwordCriteria) => {
        const passwordArray =[];
        for(let i = 0; i < passwordLength; i+=1){
        // select random categories from the array
        const randomCategoryIndex = Math.floor(Math.random() * passwordCriteria.length);
        // getting random categories 
        const randomCategory = passwordCriteria[randomCategoryIndex];
        // getting random index
        const randomIndex = Math.floor(Math.random() * randomCategory.length);
        // getting random character
        const randomCharacter = randomCategory.charAt(randomIndex)
        passwordArray.push(randomCategory);
        }
        return passwordArray.join("");
    };

    

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);