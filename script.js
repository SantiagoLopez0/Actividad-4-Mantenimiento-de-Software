// Animación para mostrar elementos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("header, main, footer");
    elements.forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, index * 300); // Aparece de manera escalonada
    });
  });
  