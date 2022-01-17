const labels = ["Formales", "Informales"];

const data = {
  labels: ["% Informales", "% Formales"],
  datasets: [
    {
      label: "My First Dataset",
      data: [78, 22],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,
    },
  ],
};
const config = {
  type: "doughnut",
  data: data,
};

const myChart = new Chart(document.getElementById("myChart"), config);
