function formValidate(){
    const name = document.getElementById("form-name")
    const email = document.getElementById("form-email")
    const phone = document.getElementById("form-phone")
    const pass = document.getElementById("form-pass")
    const pref = document.getElementById("form-pref")
    const body = document.getElementById("form-body")
    const skin = document.getElementById("form-skin")
    const checkbox = document.getElementById("form-checkbox")
    const errorMsg1 = document.getElementById("error 1")
    const errorMsg2 = document.getElementById("error 2")
    const errorMsg3 = document.getElementById("error 3")
    const errorMsg4 = document.getElementById("error 4")
    const errorMsg5 = document.getElementById("error 5")
    
    

    if(name.value.length < 4){
        errorMsg1.innerHTML = "Name must be at least 4 characters"
    }
    if(!email.value.endsWith("@gmail.com") && !email.value.endsWith("@yahoo.com")){
        errorMsg2.innerHTML = "Email input is invalid"
    }
    if(isNaN(phone.value)){
        errorMsg3.innerHTML = "Must be a number"
    }
    if(pass.value.length > 12){
        errorMsg4.innerHTML ="Password max is 12 characters"
    }
    if(!body.isChecked && !skin.isChecked){
        errorMsg5.innerHTML ="Choose the preference"
    }
    if(!checkbox.checked){
        alert("Please accept the terms and condition")
    }

}
    
    
