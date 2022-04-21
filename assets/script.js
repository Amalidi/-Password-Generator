// Assignment Code
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
        
      };






    

    // get the password criteria
    const getPasswordCriteria = () => {
        const lowercaseCheck = ("Do you want to include lowercase letters in your password?");
        const uppercaseCheck = ("Do you want to include uppercase letters in your password?");
        const specialCheck   = ("Do you want to include special characters in your password?");
        const numberCheck   = ("Do you want to include numbers in your password?");
        
      }

    // create random password































// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// const getPasswordLength = () => {
//     return 10;
//   };
  
//   const getPasswordCriteria = () => {
//     return [
//       "abcdefghijklmnopqrstuvwxyz",
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//       "0123456789",
//       " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
//     ];
//   };

//   const createRandomPassword = () => {
//     return "kdUE28(@d0";
//   };
