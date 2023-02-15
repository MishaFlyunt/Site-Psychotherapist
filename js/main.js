// FAQ
let btn = document.getElementsByClassName("acardion");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");
    let pannel = this.nextElementSibling;
    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
