function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  const width = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = width + i * 10 + "px";
    box.style.height = width + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

const controls = document.querySelector("#controls");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");

createButton.addEventListener("click", () => {
  const input = controls.querySelector("input");
  const amount = parseInt(input.value);

  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});