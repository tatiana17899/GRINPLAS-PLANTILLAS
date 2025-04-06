$(document).ready(function () {
  $("#pedidoTable").DataTable({
    pageLength: 4,
    lengthChange: false,
    language: {
      paginate: {
        previous: "Previous",
        next: "Next",
      },
    },
  });
});
