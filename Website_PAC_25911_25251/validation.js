document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Get form elements
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    
    // Get error span elements
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');
    
    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    
    var isValid = true;
  
    // Validate name
    if (!nameInput.checkValidity()) {
      nameError.textContent = nameInput.validationMessage;
      isValid = false;
    }
  
    // Validate email
    if (!emailInput.checkValidity()) {
      emailError.textContent = emailInput.validationMessage;
      isValid = false;
    }
  
    // Validate message
    if (!messageInput.checkValidity()) {
      messageError.textContent = messageInput.validationMessage;
      isValid = false;
    }
  
    // If not valid, prevent form submission
    if (!isValid) {
      event.preventDefault();
    }
  });
  