const categories = document.querySelectorAll("ul#categories li.item");
const categoryCount = categories.length;
console.log("Number of categories:", categoryCount);

for (const category of categories) {
  const categoryHeader = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li").length;
  console.log("Category:", categoryHeader);
  console.log("Elements:", categoryElements);
}
