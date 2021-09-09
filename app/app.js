// Global variable
const panels = document.querySelectorAll(".panel");

// Toggle the "open" class
function toggleOpen() {
  console.log("hello!");
  this.classList.toggle("open");
}

// Toggle the "open-active" class
function toggleOpenActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

// Event handler
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleOpenActive)
);
