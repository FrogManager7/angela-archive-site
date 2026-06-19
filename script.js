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