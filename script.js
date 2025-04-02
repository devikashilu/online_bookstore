document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("timer");
    const eventDate = new Date("2025-05-01T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = eventDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
});



function validateName() {
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Name field cannot be empty!");
        return false;
    }
    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Invalid email format!");
        return false;
    }
    return true;
}


function validatePassword() {
    let password = document.getElementById("password").value;
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(password)) {
        alert("Password must be at least 8 characters, including a letter and a number.");
        return false;
    }
    return true;
}

function registered() {
    alert("You have been successfully registered!");
}


function validateForm() {
    return validateName() && validateEmail() && validatePassword() && registered();
}
