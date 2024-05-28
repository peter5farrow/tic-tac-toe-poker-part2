console.log("hola");

const idInput = document.querySelector("#id");
const styleInput = document.querySelector("#style");
const button = document.querySelector("#button");

const setCard = () => {
  const card = document.querySelector(`#${idInput.value}`);

  // const card = idInput.value;
  console.log(card);
  const color = styleInput.value;

  card.style.color = color;

  // if (card === "diamonds" && color === "red") {
  //   document.querySelector("#diamonds").style.color = color;
  // } else if (card === "clubs" && color === "black") {
  //   document.querySelector("#clubs").style.color = color;
  // } else if (card === "hearts" && color === "red") {
  //   document.querySelector("#hearts").style.color = color;
  // } else if (card === "spades" && color === "black") {
  //   document.querySelector("#spades").style.color = color;
  // }
  return;
};

button.addEventListener("click", setCard);
