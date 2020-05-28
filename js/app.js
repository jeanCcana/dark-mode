const checkbox = document.querySelector("#checkbox");

//Establecer segun las preferencias del sistema
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  checkbox.checked = true;
  document.body.classList.add("is-dark-mode");
}

// Trigger checkbox
checkbox.addEventListener("change", (event) => {
  document.body.classList.toggle("is-dark-mode");
});

// Trigger prferencias
window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
  if (e.matches) {
    checkbox.checked = true;
    document.body.classList.add("is-dark-mode");
  } else {
    checkbox.checked = false;
    document.body.classList.remove("is-dark-mode");
  }
});
