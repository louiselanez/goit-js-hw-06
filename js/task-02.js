const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  ingredientElement.classList.add("item");
  fragment.appendChild(ingredientElement);
}

ingredientsList.appendChild(fragment);
