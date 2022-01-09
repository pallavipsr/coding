function validate(){
 
    let email=document.getElementById("email");
    let error=document.getElementById("error");
    
    
    
        let regexp=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if(regexp.test(email.value)){
    error.innerHTML="valid";
    error.style.color="green";
    return true;
    
        }
    
    else{
        error.innerHTML="invalid";
        error.style.color="red";
        window.alert("Invalid email.");
        return false;
    }
    }