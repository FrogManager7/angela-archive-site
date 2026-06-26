const noteButtons = document.querySelectorAll(".note-toggle");

noteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".note-card");
    card.classList.toggle("open");

    if (card.classList.contains("open")) {
      button.textContent = "−ノートを閉じる";
    } else {
      button.textContent = "＋ノートを開く";
    }
  });
});

const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  //ボタンを押した時は何もしない
  if (menuButton.contains(event.target)) return;
  //メニューの中を押した時は何もしない
  if (navMenu.contains(event.target)) return;
  //それ以外なら閉じる
  navMenu.classList.remove("open");
})

const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});