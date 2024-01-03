const validationInput = document.getElementById("validation-input");
const expectedLength = parseInt(validationInput.dataset.length);

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const isValid = inputLength === expectedLength;

  if (isValid) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
