
let mail = document.getElementById("mail");
let continueBtn = document.getElementById("ContinueBtn");
let submitBtn = document.getElementById("submitBtn");
let otpSection = document.getElementById("otpSection");
let otpField = document.getElementById("otpField");


Continue = () => {
    if (mail.value == "") {
        alert("Please a input mail.");
        return;
    }
    else if(!mail.checkValidity()){
        alert("Input a proper mail.");
        return;
    }
    else{
        mail.style.borderColor = "green";
        otpSection.style.display = "block";
        continueBtn.style.display = "none";
        submitBtn.style.display = "block";

    }
}



checkField = () => {
    if (mail.value !== "") {
        continueBtn.style.backgroundColor = "#EC009B";
        continueBtn.style.color = "white";

    }
    
    else{
        continueBtn.style.backgroundColor = "#EFF1F4";
        continueBtn.style.color = "#858D9E";
    }
}

checkSubmit= ()=>{
    if(otpField.value.length ==6 ){
        submitBtn.style.backgroundColor = "#EC009B";
        submitBtn.style.color = "white";
    }
    else{
        submitBtn.style.backgroundColor = "#EFF1F4";
        submitBtn.style.color = "#858D9E";
    }
}


mail.addEventListener("input", checkField);
otpField.addEventListener("input", checkSubmit);
