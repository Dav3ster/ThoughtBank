// add and remove error message 
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

// add event listner to on click for login
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    // need to finish lgin validation
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform login Validation

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
    // valiadation for sign up form
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "Username must be at least 6 characters in length");
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupEmail" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "Please enter valid Email");
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "Password much be atleast 6 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});