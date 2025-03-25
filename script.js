//your code here!

const list = document.getElementById("infi-list");

// Function to add list items
function addListItems(count = 2) {
  const currentItems = list.children.length;
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${currentItems + i + 1}`;
    list.appendChild(listItem);
  }
}

// Initial load with 10 items
addListItems(10);

// Event listener to detect scrolling to the bottom
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addListItems(2); // Add 2 more items when reaching the bottom
  }
});
