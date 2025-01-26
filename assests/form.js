

function button(){

    

    const firtName= document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const number = document.getElementById('number').value.trim();
    const date = document.getElementById('date').value.trim();
    const password= document.getElementById('password').value.trim();
    const confirm =document.getElementById('confirm').value.trim();

    if(firtName ===""){
        alert("First Name is empty");
    }

    if(lastName === ""){
        alert("Last name is empty");
    }

    if(number === ""){
        alert("Phone number empty");
    }

    if(date===""){
        alert("Date of birth is empty");
    }

    if(password ===" "){
        alert("Enter your password")
    }

    if(password !== confirm){
        alert("Password mismatch");
    }

    return;

}