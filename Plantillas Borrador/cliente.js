$(document).ready(function () {
  $("#clientTable").DataTable({
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

// Example of initializing a Chart.js bar chart
var ctx = document.getElementById("barChart").getContext("2d");
var barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
});
