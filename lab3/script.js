// Shapes
// Collect the elements

let shape = document.querySelector(".shapeDiv");
let btnSquare = document.querySelector(".btnSquare");
let btnRectangle = document.querySelector(".btnRectangle");
let btnCircle = document.querySelector(".btnCircle");
let displayShape = document.querySelector(".shapeDiv p");

// Add a click event to each button
btnSquare.addEventListener("click", function () {
  shape.className = "square";
  displayShape.textContent = "square".toUpperCase();
});

btnRectangle.addEventListener("click", function () {
  shape.className = "rectangle";
  displayShape.textContent = "rectangle".toUpperCase();
});

btnCircle.addEventListener("click", function () {
  shape.className = "circle";
  displayShape.textContent = "circle".toUpperCase();
});
