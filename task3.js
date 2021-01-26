var password = prompt("Enter password");
var lettersAndNumers = /^[0-9a-zA-Z]{8,}$/;
if(password == null || password == "" ){
     alert("Password may not empty");
}
else if(password.match(lettersAndNumers)){
     var passwordArray = password.split("")    
     var number = /[0-9]/;
     var letter = /[a-zA-Z]/; 
     if(number.test(passwordArray[0])){
          alert("First letter should not be a number")
     }
     else if(!number.test(password)){
          alert("At least 1 number")
     }
     else{
          document.write("<p>Your password is strong<br><b>"+password+"</b><p>")
     }
}
else{
     alert("Password must be at least 8 character long")
}