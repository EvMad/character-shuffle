//Client input

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "@", "#", "$", "^", "&", "*", "_", "-", "+", "="];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;
 
var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

//Client interface

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    ps = writePassword();
    document.getElementById("password").placeholder = ps;
});

function writePassword() {

enter = parseInt(prompt("Choose between 8 and 128 characters:"));
     
    if (!enter) {
        alert("Enter a number between 8 and 128.");
    } 
    else if (enter < 8 || enter > 128) {
       
        enter = parseInt(prompt("You must choose between 8 and 128."));

    } 
    else {
        
        confirmNumber = confirm("Will this password contain numbers?");
        confirmCharacter = confirm("Will this password include special characters?");
        confirmUppercase = confirm("Will this password contain Uppercase letters?");
        confirmLowercase = confirm("Will this password contain Lowercase letters?");
    };

// Character combinations
    
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Please select at least one criteria.");

    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } 
    else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } 
    else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);
    } 

    else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } 
    else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
  
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
   
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    var password = [];


    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
 

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

//Client return

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
