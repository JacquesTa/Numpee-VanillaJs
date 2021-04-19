/////////---------CHARTS--------////////////////
new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [
      "9 Uhr",
      "10 Uhr",
      "11 Uhr",
      "12 Uhr",
      "13 Uhr",
      "14 Uhr",
      "15 Uhr",
      "16 Uhr",
      "17 Uhr",
      "18 Uhr",
      "19 Uhr",
    ],
    datasets: [
      {
        data: [0, 15, 24, 10, 35, 111, 133, 99, 45, 25, 15],
        label: "Visitors",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Today's number of visitors by the hour",
    },
  },
});

// Bar chart
new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Visitors",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [6502, 5267, 734, 784, 433],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Number of visitors per Year",
    },
  },
});

/////////---------COUNTER--------////////////////
function update_users_count() {
  $("#users").animate(
    {
      counter: 340000,
    },
    {
      duration: 6000,
      easing: "swing",
      step: function (now) {
        $(this).text(Math.ceil(now));
      },
      complete: update_users_count,
    }
  );
}

update_users_count();
//////////////////////////////////////////////////

const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".remove");

// addButton.addEventListener("click", function () {
//   numberOfVisitors.value = parseInt(numberOfVisitors.value) + 1;
//   if (numberOfVisitors.value >= parseInt(max)) {
//     numberOfVisitors.value = max;
//   }
// });

// removeButton.addEventListener("click", function () {
//   numberOfVisitors.value = parseInt(numberOfVisitors.value) - 1;
//   if (numberOfVisitors.value >= parseInt(min)) {
//     numberOfVisitors.value = min;
//   }
// });

function up(max) {
  const numberOfVisitors = document.getElementById("number");
  numberOfVisitors.value = parseInt(numberOfVisitors.value) + 1;
  if (numberOfVisitors.value >= parseInt(max)) {
    numberOfVisitors.value = max;
  } else if (numberOfVisitors > 20) {
    document.getElementById("warning").removeProperty("hidden");
  }
}
function down(min) {
  const numberOfVisitors = document.getElementById("number");
  numberOfVisitors.value = parseInt(numberOfVisitors.value) - 1;
  if (numberOfVisitors.value <= parseInt(min)) {
    numberOfVisitors.value = min;
  }
}
