function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  divContainer.innerHTML = "";
  const boxesArray = Array.from({ length: amount });
  let totalHeight = 0;
  boxesArray.forEach((_, index) => {
    const boxElement = document.createElement("div");
    boxElement.classList.add("box");

    const size = 30 + index * 10;
    boxElement.style.width = `${size}px`;
    boxElement.style.height = `${size}px`;
    boxElement.style.backgroundColor = getRandomHexColor();

    divContainer.appendChild(boxElement);
    totalHeight = Math.max(totalHeight, size); //x
  });
  divContainer.style.height = `${totalHeight + 32}px`; //x
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(inputElement.value);
  if (amount > 0 && amount < 100) {
    createBoxes(amount);
  } else {
    alert("Lütfen 1 ile 99 arasında bir değer giriniz...");
  }
});

destroyBtn.addEventListener("click", () => {
  divContainer.innerHTML = "";
});
