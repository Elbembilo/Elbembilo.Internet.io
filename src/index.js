import * as $ from "jquery";
import "./babel";
import "./styles/style.scss";
import "bootstrap";
import Chart from "chart.js";
import "./body.json";

var ctx = document.getElementById("myChart");
var requestURL = "./body.jason";
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [2010, 2011, 2012, 2013, 2014.2015, 2016, 2017],
    datasets: [
      {
        label: "90% к 2015 году",
        lable: "95% к 2020 году",
        data: [36, 26, 40, 42, 44, 46, 59, 80, 81, 82, 85, 84, 45, 50, 90],
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
