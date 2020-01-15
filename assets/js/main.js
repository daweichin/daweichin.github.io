function scrollAppear() {
  var text = document.querySelector(".about-list");
  var introPosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;

  if (introPosition < screenPosition) {
    text.classList.add("fade-in-down");
  }
}

window.addEventListener("scroll", scrollAppear);

// modal logic for selecting correct modal
// let modalBtn1 = document.querySelector(".modal-1");
// var modalId = modalBtn1.classList[1];
// let modal = document.getElementById(modalId);
// let closeBtn1 = modal.querySelector(".close-btn");

// modalBtn.onclick = function() {
//   modal.style.display = "block";
// };
// closeBtn.onclick = function() {
//   modal.style.display = "none";
// };
// window.onclick = function(e) {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// };

let modalBtns = document.querySelectorAll(".button");
for (var i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener("click", function() {
    var modalId = this.classList[1];
    console.log(modalId);
    let modal = document.getElementById(modalId);
    let closeBtn = modal.querySelector(".close-btn");

    modal.style.display = "block";
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
    window.onclick = function(e) {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    };
  });
}
