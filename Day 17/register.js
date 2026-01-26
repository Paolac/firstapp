document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    
    // Error message elements
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    
    // Add animation to form elements on load
    animateFormElements();
    
    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset error messages
        resetErrors();
        
        // Validate form
        let isValid = true;
        
        // Username validation
        if (username.value.trim() === '') {
            showError(username, usernameError, 'Username is required');
            isValid = false;
        } else if (username.value.length < 3) {
            showError(username, usernameError, 'Username must be at least 3 characters');
            isValid = false;
        }
        
        // Email validation
        if (email.value.trim() === '') {
            showError(email, emailError, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, emailError, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Password validation
        if (password.value === '') {
            showError(password, passwordError, 'Password is required');
            isValid = false;
        } else if (password.value.length < 8) {
            showError(password, passwordError, 'Password must be at least 8 characters');
            isValid = false;
        } else if (!isStrongPassword(password.value)) {
            showError(password, passwordError, 'Password must include letters, numbers, and special characters');
            isValid = false;
        }
        
        // Confirm password validation
        if (confirmPassword.value === '') {
            showError(confirmPassword, confirmPasswordError, 'Please confirm your password');
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            showError(confirmPassword, confirmPasswordError, 'Passwords do not match');
            isValid = false;
        }
        
        // If form is valid, submit it
        if (isValid) {
            // Show success animation
            showSuccessAnimation();
            
            // In a real application, you would submit the form data to a server here
            console.log('Form submitted successfully');
            
            // Reset form after successful submission
            setTimeout(() => {
                form.reset();
                alert('Registration successful!');
            }, 1500);
        }
    });
    
    // Input event listeners for real-time validation
    username.addEventListener('input', function() {
        if (username.value.trim() !== '' && username.value.length >= 3) {
            clearError(username, usernameError);
        }
    });
    
    email.addEventListener('input', function() {
        if (isValidEmail(email.value)) {
            clearError(email, emailError);
        }
    });
    
    password.addEventListener('input', function() {
        if (password.value.length >= 8 && isStrongPassword(password.value)) {
            clearError(password, passwordError);
        }
        
        // Check confirm password match if it has a value
        if (confirmPassword.value !== '') {
            if (confirmPassword.value === password.value) {
                clearError(confirmPassword, confirmPasswordError);
            } else {
                showError(confirmPassword, confirmPasswordError, 'Passwords do not match');
            }
        }
    });
    
    confirmPassword.addEventListener('input', function() {
        if (confirmPassword.value === password.value) {
            clearError(confirmPassword, confirmPasswordError);
        }
    });
    
    // Helper functions
    function showError(input, errorElement, message) {
        input.classList.add('invalid');
        errorElement.textContent = message;
        
        // Add shake animation to the input
        input.classList.add('shake');
        setTimeout(() => {
            input.classList.remove('shake');
        }, 500);
    }
    
    function clearError(input, errorElement) {
        input.classList.remove('invalid');
        errorElement.textContent = '';
    }
    
    function resetErrors() {
        // Clear all error messages
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        
        // Remove invalid class from all inputs
        username.classList.remove('invalid');
        email.classList.remove('invalid');
        password.classList.remove('invalid');
        confirmPassword.classList.remove('invalid');
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isStrongPassword(password) {
        // Password must contain at least one letter, one number, and one special character
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(password);
    }
    
    function animateFormElements() {
        const formElements = document.querySelectorAll('.input-group, .button-container, .login-link');
        
        formElements.forEach((element, index) => {
            // Add initial styles
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            // Animate elements with delay
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 * (index + 1));
        });
    }
    
    function showSuccessAnimation() {
        const submitBtn = document.querySelector('.submit-btn');
        
        // Change button text and add success class
        submitBtn.textContent = 'Success!';
        submitBtn.classList.add('success');
        
        // Add success animation to form container
        const formContainer = document.querySelector('.form-container');
        formContainer.classList.add('success-animation');
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        
        .submit-btn.success {
            background-color: #37850e;
        }
        
        .success-animation {
            animation: successPulse 1.5s ease;
        }
        
        @keyframes successPulse {
            0% { box-shadow: 0 0 0 0 rgba(55, 133, 14, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(55, 133, 14, 0); }
            100% { box-shadow: 0 0 0 0 rgba(55, 133, 14, 0); }
        }
    `;
    document.head.appendChild(style);
});

