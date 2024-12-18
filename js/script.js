const form = document.getElementById("myForm");
const inputValue = document.getElementById("input");
const list = document.getElementById("list");

function checkIsListEmpty() {
  if (list.childElementCount === 0) {
    if (!document.getElementById("emptyMessage")) {
      const emptyMessage = document.createElement("p");
      emptyMessage.id = "emptyMessage";
      emptyMessage.textContent = "A lista está vazia!";
      emptyMessage.style.textAlign = "center";
      list.appendChild(emptyMessage);
    } 
  }
  else {
    const emptyMessage = document.getElementById("emptyMessage");
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemValue = inputValue.value.trim();

  if (itemValue == "") {
    alert("Insira um item válido!");
    return;
  }
  const newItem = document.createElement("div");
  newItem.classList.add("item");

  newItem.innerHTML = `
  <div>
      <input type="checkbox" />
      <span>${itemValue}</span>
    </div>
    <img src="./assets/icon_delete.svg" alt="Deletar item" class="delete-icon" />
  `;

  list.appendChild(newItem);
  inputValue.value = "";

  const deleteIcon = newItem.querySelector(".delete-icon");
  deleteIcon.addEventListener("click", function () {
    newItem.remove();
    checkIsListEmpty();
  });
  checkIsListEmpty();
});

checkIsListEmpty();
