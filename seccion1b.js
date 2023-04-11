const images = document.querySelectorAll(".grid-image");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.querySelector(".close");


images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    console.log(image.src)
    modalContent.src = image.src;
  });
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}); 
