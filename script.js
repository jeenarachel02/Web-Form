const registrationForm = document.getElementById('SignUpForm');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const dateOfBirth = document.getElementById('DOB').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const confirmPassword = document.getElementById('Confirm').value;

    // Validate form
    if (!firstName) { 
        alert('Please enter your first name');
        return;
    }

    if (!lastName) {
        alert('Please enter your last name');
        return;
    }

    if (!dateOfBirth) {
        alert('Please enter your date of birth');
        return;
    }

    if (!email) {
        alert('Please enter your email address');
        return;
    }

    if (!password) {
        alert('Please enter your password');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const successMessage = document.createElement('div');
    successMessage.textContent = 'Successfully Signed in!';
    successMessage.style.color = 'Blue';
    successMessage.style.fontWeight = 'bold';
    registrationForm.appendChild(successMessage);
});
