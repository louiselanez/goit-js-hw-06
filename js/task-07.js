const fontSizeInput = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontSizeInput.addEventListener("input", () => {
  const fontSizeValue = fontSizeInput.value + "px";
  textElement.style.fontSize = fontSizeValue;
});
