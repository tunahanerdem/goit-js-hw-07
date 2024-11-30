const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", (e) => {
  e.preventDefault();
  const inputValue = e.target.value;
  if (inputValue) {
    outputElement.textContent = inputValue;
  } else {
    outputElement.textContent = "Anonymous";
  }
});
