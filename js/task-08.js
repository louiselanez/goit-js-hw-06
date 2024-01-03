const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {};
  const formElements = loginForm.elements;

  for (const element of formElements) {
    if (element.tagName === "INPUT" && !element.value) {
      // Check if input is empty
      alert("Please fill in all fields.");
      return;
    }

    formData[element.name] = element.value;
  }

  console.log("Form data:", formData);
  loginForm.reset();
});
