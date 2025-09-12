document.querySelectorAll(".project-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    window.open(link, "_blank");
  });
});
