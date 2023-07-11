function validateForm() {
    // Clear previous error messages
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }

    // Validate name
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        return false;
    }

    // Validate email
    const emailInput = document.getElementById('email');
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        return false;
    }

    // Validate phone
    const phoneInput = document.getElementById('phone');
    if (phoneInput.value.trim() === '') {
        document.getElementById('phone-error').textContent = 'Phone is required';
        return false;
    }

    // Validate company
    const companyInput = document.getElementById('company');
    if (companyInput.value.trim() === '') {
        document.getElementById('company-error').textContent = 'Company Name is required';
        return false;
    }

    // Validate message
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        return false;
    }

    // If all validations pass, the form can be submitted
    return true;
}