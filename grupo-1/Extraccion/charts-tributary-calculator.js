let xValues = [
  "Remuneracion Neta",
  "Gratificaciones x Mes",
  "CTS x Mes",
  "Vacaciones x Mes",
];

let colors = ["blue", "cyan", "orange", "green"];
const yValues = [];
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let index = 0; index < xValues.length; index++) {
  yValues.push(getRandomArbitrary(25, 456));
}

new Chart("pie", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: colors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "CORRESPONDE",
    },
  },
});
new Chart("pie2", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: colors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "CORRESPONDE",
    },
  },
});
new Chart("pie3", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: colors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "CORRESPONDE",
    },
  },
});
new Chart("pie4", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: colors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "CORRESPONDE",
    },
  },
});
new Chart("pie5", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: colors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "CORRESPONDE",
    },
  },
});
