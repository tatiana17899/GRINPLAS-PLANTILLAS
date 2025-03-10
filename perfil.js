document.addEventListener("DOMContentLoaded", function () {
  const profileImage = document.querySelector("#profileContainer img"); // Selecciona la imagen del perfil
  const profilePanel = document.getElementById("profilePanel");
  const closeProfile = document.getElementById("closeProfile");
  const overlay = document.getElementById("overlay");

  // Mostrar el panel de perfil y el fondo oscuro al hacer clic en la imagen
  profileImage.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que el evento se propague al documento
    profilePanel.classList.add("active");
    overlay.style.display = "block"; // Muestra el fondo oscuro
  });

  // Ocultar el panel de perfil y el fondo oscuro al hacer clic en el botón de cerrar
  closeProfile.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que el evento se propague al documento
    profilePanel.classList.remove("active");
    overlay.style.display = "none"; // Oculta el fondo oscuro
  });

  // Ocultar el panel de perfil y el fondo oscuro al hacer clic fuera
  document.addEventListener("click", function (event) {
    if (
      !profilePanel.contains(event.target) &&
      !profileImage.contains(event.target) // Verifica si el clic fue fuera de la imagen y del panel
    ) {
      profilePanel.classList.remove("active");
      overlay.style.display = "none"; // Oculta el fondo oscuro
    }
  });
});
