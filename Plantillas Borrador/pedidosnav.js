document
  .getElementById("pedidos-toggle")
  .addEventListener("click", function () {
    let submenu = document.getElementById("submenu-pedidos");
    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });
