const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const isOpen = item.classList.contains("is-open");

    faqButtons.forEach((otherButton) => {
      const otherItem = otherButton.closest(".faq-item");
      const otherAnswer = otherItem.querySelector(".faq-answer");
      otherItem.classList.remove("is-open");
      otherButton.setAttribute("aria-expanded", "false");
      otherAnswer.style.maxHeight = "0px";
    });

    if (!isOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});
