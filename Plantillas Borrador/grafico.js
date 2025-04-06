const ctx1 = document.getElementById("pieChart").getContext("2d");
new Chart(ctx1, {
  type: "pie",
  data: {
    labels: ["Tipo 1", "Tipo 2", "Tipo 3"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#007bff", "#17a2b8", "#343a40"],
      },
    ],
  },
});

const ctx2 = document.getElementById("barChart").getContext("2d");
new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Ventas", "Stock"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#007bff", "#343a40"],
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});
