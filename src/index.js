import * as $ from "jquery";
import "./babel";
import "./styles/style.scss";
import "bootstrap";
import Chart from "chart.js";
import "./body.json";
import axios from "axios";
import "./styles/media.scss";
import "./styles/news.scss";
import "./styles/internet.scss";
import "./styles/for__people.scss";
import "./styles/grafic.scss";
import "./styles/footer.scss";
import "./styles/gos__links.scss";

// async function getPersent() {
//   const response = await axios.get("/src/body.json").then((response) => {
//     return response.data.years.map((item) => item.persent);
//   });

//   console.log(response);
// }

getResponceData();
// statisticsRes();
async function getResponceData() {
  const response = await axios.get("/src/body.json");
  const year = response.data.years.map((item) => item.year);
  const persent = response.data.years.map((item) => item.persent);

  Chartjson(year, persent);
  // console.log(year);
  // console.log(persent);
  // statisticsRes(response);
}

function Chartjson(year, persent) {
  let ctx = document.getElementById("myChart");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: year,
      datasets: [
        {
          label: "95% к 2020 году",
          data: persent,
          backgroundColor: ["#0d49cc"],
          borderColor: ["#0d49cc"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
