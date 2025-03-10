$(document).ready(function () {
  var table = $("#ordersTable").DataTable({
    pagingType: "simple", // Enable simple pagination (Previous/Next)
    pageLength: 5, // Show 5 entries per page
    language: {
      paginate: {
        previous: "Anterior",
        next: "Siguiente",
      },
    },
  });

  $("#filter-all").on("click", function () {
    table.search("").draw();
  });

  $("#filter-entregado").on("click", function () {
    table.search("Entregado").draw();
  });

  $("#filter-proceso").on("click", function () {
    table.search("Proceso").draw();
  });

  $("#filter-delivery").on("click", function () {
    table.search("Delivery").draw();
  });
});
