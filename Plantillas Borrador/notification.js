document.addEventListener("DOMContentLoaded", function () {
  const bell = document.getElementById("notificationBell");
  const dropdown = document.getElementById("notificationDropdown");

  bell.addEventListener("click", function () {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!bell.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });
});
