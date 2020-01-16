// about me text fadein effect
function scrollAppear() {
  var text = document.querySelector(".about-list");
  var introPosition = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;

  if (introPosition < screenPosition) {
    text.classList.add("fade-in-down");
  }
}
window.addEventListener("scroll", scrollAppear);

// modal button logic
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
