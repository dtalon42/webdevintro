
function validateItems() {
    var nameCheck = document.forms["restaurantContact"]["name"].value;
    var emailCheck = document.forms["restaurantContact"]["email"].value;
    var phoneCheck = document.forms["restaurantContact"]["phone"].value;
    var infoCheck = document.forms["restaurantContact"]["info"].value;

    if(nameCheck == "")
    {
        alert("Please enter your name.");    
    }
    else{ 
        alert("Name entered.");
    }

    if(emailCheck == "")
    {
        alert("Please enter your email.");
    }
    else {
        alert("Email entered.");
    }

    if(phoneCheck == "")
    {
        alert("Please enter your phone number");
    }
    else {
        alert("Phone number entered.")
     }

    if(infoCheck == "")
    {
        alert("Please enter additonal information.");
    }
    else{
        alert("Information entered. Thank you for your contribution.")
    }
    
return false;
}

