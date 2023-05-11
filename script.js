function checkPassword() {
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirm_password");
    console.log(password);
    console.log(confirm_password);
    if (password == confirm_password) {
        confirm_password.style.backgroundColor = "green";
        
        return true;
    } else {
        confirm_password.style.backgroundColor = "red";
        return false;
    }
}

const confirm_password = document.getElementById("confirm_password");
confirm_password.addEventListener("input", checkPassword);

const button = document.getElementById("check_password");
button.addEventListener("click", () => {
    if (checkPassword()) {
        alert("Password matches");
    } else  {
        alert("Password does not match, try again!");
    }
})