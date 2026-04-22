// Smooth scroll with better control
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // navbar height adjust
        behavior: "smooth"
      });
    }
  });
});