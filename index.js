document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".project-btn");

  const openLink = (url) => {
    if (!url) return;
    // Protect against window.opener vulnerabilities
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) newTab.opener = null;
  };

  buttons.forEach((btn) => {
    btn.setAttribute("type", "button"); // avoid accidental form submit
    btn.addEventListener("click", () => openLink(btn.dataset.link));

    // Keyboard accessibility: Enter/Space activate
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLink(btn.dataset.link);
      }
    });
  });
});
