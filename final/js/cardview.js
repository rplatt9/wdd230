const gridView = document.querySelector("#grid_button");
const listView = document.querySelector("#list_button");

gridView.addEventListener("click", () => {
  cards.classList.add("gridview");
  cards.classList.remove("listview");
});
listView.addEventListener("click", () => {
  cards.classList.add("listview");
  cards.classList.remove("gridview");
});