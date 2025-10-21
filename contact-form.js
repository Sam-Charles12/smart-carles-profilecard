// Simple contact form validation
document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const form = document.getElementById("contactForm");
  const successMessage = document.querySelector(
    '[data-testid="test-contact-success"]'
  );
  const submitButton = document.querySelector(
    '[data-testid="test-contact-submit"]'
  );

  // Get form inputs
  const nameInput = document.querySelector('[data-testid="test-contact-name"]');
  const emailInput = document.querySelector(
    '[data-testid="test-contact-email"]'
  );
  const subjectInput = document.querySelector(
    '[data-testid="test-contact-subject"]'
  );
  const messageInput = document.querySelector(
    '[data-testid="test-contact-message"]'
  );

  // Get error message elements
  const nameError = document.querySelector(
    '[data-testid="test-contact-error-name"]'
  );
  const emailError = document.querySelector(
    '[data-testid="test-contact-error-email"]'
  );
  const subjectError = document.querySelector(
    '[data-testid="test-contact-error-subject"]'
  );
  const messageError = document.querySelector(
    '[data-testid="test-contact-error-message"]'
  );

  // Function to show error message
  function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("error");
    input.setAttribute("aria-invalid", "true");
  }

  // Function to clear error message
  function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("error");
    input.removeAttribute("aria-invalid");
  }

  // Check if name is valid
  function validateName() {
    const name = nameInput.value.trim();
    if (name === "") {
      showError(nameInput, nameError, "Full name is required");
      return false;
    }
    clearError(nameInput, nameError);
    return true;
  }

  // Check if email is valid
  function validateEmail() {
    const email = emailInput.value.trim();
    if (email === "") {
      showError(emailInput, emailError, "Email address is required");
      return false;
    }
    // Simple email check
    if (!email.includes("@") || !email.includes(".")) {
      showError(emailInput, emailError, "Please enter a valid email address");
      return false;
    }
    clearError(emailInput, emailError);
    return true;
  }

  // Check if subject is valid
  function validateSubject() {
    const subject = subjectInput.value.trim();
    if (subject === "") {
      showError(subjectInput, subjectError, "Subject is required");
      return false;
    }
    clearError(subjectInput, subjectError);
    return true;
  }

  // Check if message is valid
  function validateMessage() {
    const message = messageInput.value.trim();
    if (message === "") {
      showError(messageInput, messageError, "Message is required");
      return false;
    }
    if (message.length < 10) {
      showError(
        messageInput,
        messageError,
        "Message must be at least 10 characters long"
      );
      return false;
    }
    clearError(messageInput, messageError);
    return true;
  }

  // Check if entire form is valid
  function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
  }

  // Add validation when user leaves each field
  nameInput.addEventListener("blur", validateName);
  emailInput.addEventListener("blur", validateEmail);
  subjectInput.addEventListener("blur", validateSubject);
  messageInput.addEventListener("blur", validateMessage);

  // Clear errors when user starts typing
  nameInput.addEventListener("input", () => clearError(nameInput, nameError));
  emailInput.addEventListener("input", () =>
    clearError(emailInput, emailError)
  );
  subjectInput.addEventListener("input", () =>
    clearError(subjectInput, subjectError)
  );
  messageInput.addEventListener("input", () =>
    clearError(messageInput, messageError)
  );

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from submitting normally

    // Hide any previous success message
    successMessage.style.display = "none";

    // Check if form is valid
    if (validateForm()) {
      // Show loading state
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Simulate sending (wait 1 second)
      setTimeout(() => {
        // Show success message
        successMessage.style.display = "block";

        // Clear the form
        form.reset();

        // Reset button
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
      }, 1000);
    }
  });
});
