$(document).ready(function () {
  $("#messagesTable").DataTable({
    pagingType: "simple_numbers",
    pageLength: 4,
    language: {
      paginate: {
        previous: "Anterior",
        next: "Siguiente",
      },
      info: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    },
  });
});
