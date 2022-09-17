const button = document.querySelector("#burger-menu");
const items = document.querySelector("#menu-items");

button.addEventListener("click", () => {
  if (items.classList.contains("hidden")) {
    items.classList.remove("hidden");
  } else {
    items.classList.add("hidden");
  }
});
