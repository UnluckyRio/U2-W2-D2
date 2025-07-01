// Script per mostrare/nascondere la sezione Saldi
document.getElementById("toggleSaldi").addEventListener("click", function (e) {
  e.preventDefault();
  const section = document.getElementById("saldiSection");
  if (section.style.display === "none") {
    section.style.display = "";
    this.textContent = "Nascondi sezione";
  } else {
    section.style.display = "none";
    this.textContent = "Mostra sezione";
  }
});
// Script per mostrare/nascondere la sezione Welcome Summer
document.getElementById("toggleSummer").addEventListener("click", function (e) {
  e.preventDefault();
  const section = document.getElementById("summerSection");
  if (section.style.display === "none") {
    section.style.display = "";
    this.textContent = "Nascondi sezione";
  } else {
    section.style.display = "none";
    this.textContent = "Mostra sezione";
  }
});
