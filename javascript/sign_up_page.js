// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Event Handlers @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function signup_validation() {
    
    let returnValue=false;
    
    let o_password=document.getElementById("password");
    let o_confirmpassword=document.getElementById("confirmpassword");
    let o_username=document.getElementById("username");

    if(userNameValidation(o_username)) {
        if(passwordValidation(o_password,o_confirmpassword)){
            alert("Registration Successful");
            returnValue=true;
        }
    }
    
    return returnValue;
}

function cancelform() {
    window.location.href="../login_page.html";
}



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Form Field Validations @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    /*********************** User Name Validation *********************************** */
    function userNameValidation(o_username) {
        
        let returnValue = true;
        let usernamerules = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!o_username.value.length>0) {
            alert("User Name is Mandatory");
            o_username.focus();
            returnValue=false;
        }else if(!usernamerules.test(o_username.value)) {
            alert("Enter Valid Email ID");
            o_username.focus();
            returnValue=false;
        }
        return returnValue;
    }
    /************************************************************************************ */

    // ************************* Password Field Validations *******************************
    function passwordValidation(o_password,o_confirmpassword) {

        let returnValue = true;
        let passwordrules = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


        if(!o_password.value.length>0) {
            alert("Please Enter password test test");
            o_password.focus();
            returnValue=false;
        }else if(!o_confirmpassword.value.length>0) {
            alert("Please Enter confirm password");
            o_confirmpassword.focus();
            returnValue=false;
        }else {
            if(o_password.value!==o_confirmpassword.value) {
                alert("Password mismatch");
                o_password.focus();
                returnValue=false;
            }else if(!passwordrules.test(o_password.value)) {
                alert("Password must be 8 Characters in length\n"
                        + "Password must have one speacial character\n"
                        + "Password must have upper and lower cases\n");
                        o_password.focus();
                returnValue=false;
            }
        }

        return returnValue;
    }

    //********************************************************************************** */