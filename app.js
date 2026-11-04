// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    // Only execute if the form exists
    if (form) {
        form.addEventListener('submit', function(event) {
            // Stops page from automatically reloading
            event.preventDefault();

            const nameInput = document.getElementById('userName');
            const emailInput = document.getElementById('userEmail');
            const messageInput = document.getElementById('userMessage');
            
            const feedbackBox = document.getElementById('formFeedback');

            clearErrors();

            let isValid = true;

            // Name Validation
            if (nameInput.value.trim() === '') {
                showError('name-error', 'Please Enter Your Name');
                nameInput.classList.add('input-error');
                isValid = false;
            }

            // Email Validation
            const emailValue = emailInput.value.trim();
            if (emailValue === '') {
                showError('email-error', 'Please Enter a Valid Email Address');
                emailInput.classList.add('input-error');
                isValid = false;
            } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
                showError('email-error', 'Please Enter a Valid Email Address');
                emailInput.classList.add('input-error');
                isValid = false;
            }

            // Message Validation
            if (messageInput.value.trim() === '') {
                showError('message-error', 'Please Write a Message');
                messageInput.classList.add('input-error');
                isValid = false;
            }

            // Display Feedback Results
            if (isValid === true) {
                feedbackBox.textContent = `Thank you, ${nameInput.value}, your message has been sent`;
                feedbackBox.className = 'feedback-container success-message';
                form.reset();
            } else {
                feedbackBox.textContent = `Please correct the issues highlighted above`;
                feedbackBox.className = 'feedback-container error-banner';
            }
        });
    }
});

// Displays error message
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Reverts UI by clearing all error messages
function clearErrors() {
    const errorMessage = document.querySelectorAll('.error-message');
    errorMessage.forEach(msg => msg.textContent = '');

    const errorInputs = document.querySelectorAll('.input-error');
    errorInputs.forEach(input => input.classList.remove('input-error'));

    const feedback = document.getElementById('formFeedback');
    if (feedback) {
        feedback.className = 'feedback-container hidden';
    }
}

// category.html

// Makes sure page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const menuItems = document.querySelectorAll('.menu-item');

    // Run code if filter buttons exist on the current page layout
    if (filterButtons.length > 0) {
        // Attach a click event listener to every individual filter button
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Retrieve the specific category name
                const targetCategory = button.getAttribute('data-category');

                menuItems.forEach(item => {
                    const itemType = item.getAttribute('data-item-type');

                    // If 'All' is selected, or if the item's type matches the clicked category, reveal the item
                    if (targetCategory === 'all' || itemType === targetCategory) {
                        item.classList.remove('hidden-item')
                    } else {
                        item.classList.add('hidden-item')
                    }
                })
            })
        })
    }
});