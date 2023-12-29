function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (name.length < 5) {
        alert("Name must be at least 5 characters");
        return false;
    }

    if (phone.length !== 10 || phone === '123456789') {
        alert("Enter a valid 10-digit phone number");
        return false;
    }

    if (!email.includes('@')) {
        alert("Enter a valid email address");
        return false;
    }

    if (password.length < 8 || password === 'password' || password === name) {
        alert("Password must be at least 8 characters and cannot be 'password' or your name");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // If all validations pass, you can submit the form
    return true;
}

function moveToNext(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    }
}