
const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0123456789";
const symbols = "@£_&-+()#*:;!?,.€¥$¢^°={}∆¶×÷π√•|><";
const allCharacters = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
  let password = "";
  /*
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  */
  
  
  while (length > password.length){
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
  
}

function copyPassword(){
  if(passwordBox.value === ''){
    alert("Generate password first")
  }
  else{
    passwordBox.select();
    document.execCommand("copy");
    alert("Password has been copied successfully!")
  }
}
