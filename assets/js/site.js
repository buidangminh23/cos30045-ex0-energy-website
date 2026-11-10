document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    answer.hidden = isOpen;
  });
});

document.querySelectorAll(".current-year").forEach(span => {
  span.textContent = new Date().getFullYear();
});
