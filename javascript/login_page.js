function login_validation() {
    let login=document.getElementById("login").value;
    let password=document.getElementById("password").value;

    if(login!="")
    {
        if(password!="")
        {
           if(login=="manju@gmail.com" && password=="12345")
           {
               window.location.href="./html_pages/hotel_roombooking.html";
               //return false;
           }
           else {
               alert("Enter correct email or password");
               /*document.getElementById("login").focus();
               return false;*/
               document.getElementById("login").value = "";
               document.getElementById("password").value="";
               document.getElementById("login").focus();
               return false;
            
           }
        }
        else {
         alert("Please enter password")
         document.getElementById("password").focus();
         return false;
        }
    }
    else {
     alert("Please enter email")
        document.getElementById("login").focus();
        return false;

    }    
}