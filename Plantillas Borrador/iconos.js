document.querySelectorAll(".icon-status").forEach((group) => {
  const icons = group.querySelectorAll("i");

  // Obtener estado actual desde data-attribute
  const current = group.getAttribute("data-current");

  // Marcar solo el ícono activo
  icons.forEach((icon) => {
    if (icon.getAttribute("data-status") === current) {
      icon.classList.add("border", "border-3", "rounded-circle");
    }

    // Evento al hacer clic
    icon.addEventListener("click", () => {
      // Quitar resaltado de todos
      icons.forEach((i) =>
        i.classList.remove("border", "border-3", "rounded-circle")
      );

      // Marcar el nuevo
      icon.classList.add("border", "border-3", "rounded-circle");

      // Cambiar el estado actual en el contenedor (opcionalmente puedes enviar este valor al backend)
      group.setAttribute("data-current", icon.getAttribute("data-status"));
    });
  });
});
