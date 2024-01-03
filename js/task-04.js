let counterValue = 0;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const valueDisplay = document.getElementById("value");

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterDisplay();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterDisplay();
});

function updateCounterDisplay() {
  valueDisplay.textContent = counterValue;
}
