document.write('<h1>Code fulfil following conditions</h1><p><ol type="a"><li>This string must contain @ <li>Ths string must contact chars <li> The @ must have at least 1 char in front <li>The string must contain .(dot) after @ and at least 1 char.</p>')

var emails = [
     'email@example.com', 
     'firstname.lastname@example.com', 
     'email@subdomain.example.com', 
     'firstname+lastname@example.com', 
     'email@123.123.123.123', 
     'email@[123.123.123.123]', 
     '"email"@example.com', 
     '1234567890@example.com', 
     '@example.com',
     '@a.com',
     '1@a.com',
     '1@a.',
     '@.com',
     'a.com@',
     '@'
];


var condition = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

for(var i=0 ; i < emails.length ; i++){
     if(emails[i].match(condition)) {
          document.write("<p style='color:green;'>"+emails[i]+"</p>")
     }
     else{
          document.write("<p style='color:red;'>"+emails[i]+"</p>")
     }
}

