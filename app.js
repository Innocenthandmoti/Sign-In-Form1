// Selecting all field wrappers called form__input

const wrappers = document.querySelectorAll(`.form__input`);

// A function that will be used for validation of the input fields

function validateField(wrapper) {
  const inputField = wrapper.querySelector(`.input__field`);
  const errorMsg = wrapper.querySelector(`.error__msg`);
  let errorMessage = ``;

  // declaring some variables

  const value = inputField.value.trim();
  const name = inputField.name.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // if statements

  if (!value) {
    errorMessage = `${inputField.placeholder} cannot be empty`;
  } else if (name === `email`) {
    emailRegex;

    if (!emailRegex.test(value)) {
      errorMessage = `Looks like this is not an email`;
    }
  } else if (name === `password` && value.length < 8) {
    errorMessage = `Password must be at least 8 characters`;
  }

  if (errorMessage) {
    wrapper.classList.add(`error`);
    errorMsg.textContent = errorMessage;
  } else {
    wrapper.classList.remove(`error`);
    errorMsg.textContent = ``;
  }
}

// Validation setup for all fields

wrappers.forEach((wrapper) => {
  const inputField = wrapper.querySelector(`.input__field`);

  // Using blur method when user leaves the field

  inputField.addEventListener(`blur`, () => {
    validateField(wrapper);
  });

  // Using input method to clear error messages on the input while user starts typing

  inputField.addEventListener(`input`, () => {
    if (wrapper.classList.contains(`error`)) {
      wrapper.classList.remove(`error`);
      wrapper.querySelector(`.error__msg`).textContent = ``;
    }
  });
});

// On the submit button to validate everything

const form = document.querySelector(`.form__box`);
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  wrappers.forEach(validateField);
});
