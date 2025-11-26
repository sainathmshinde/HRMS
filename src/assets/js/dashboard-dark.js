(function ($) {
  'use strict';
    if ($("#visit-sale-chart").length) {
    const ctx = document.getElementById('visit-sale-chart');

    var graphGradient1 = document.getElementById('visit-sale-chart').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

    var gradientStrokeRed = graphGradient3.createLinearGradient(0, 0, 0, 300);
    gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
    var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';
    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1"];
    const bgColor3 = ["rgba(255, 191, 150, 1)"];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
        datasets: [{
          label: "CHN",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [20, 40, 15, 35, 25, 50, 30, 20],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        {
          label: "USA",
          borderColor: gradientStrokeRed,
          backgroundColor: gradientStrokeRed,
          hoverBackgroundColor: gradientStrokeRed,
          fillColor: bgColor2,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [40, 30, 20, 10, 50, 15, 35, 40],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        {
          label: "UK",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          hoverBackgroundColor: gradientStrokeBlue,
          fillColor: bgColor3,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [70, 10, 30, 40, 25, 50, 15, 30],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: false,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          var i;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          for (i = 0; i < chart.data.datasets.length; i++) {
            ul.innerHTML += `
              <li>
                <span style="background-color: ${chart.data.datasets[i].fillColor}"></span>
                ${chart.data.datasets[i].label}
              </li>
            `;
          }
          // alert(chart.data.datasets[0].backgroundColor);
          return document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }
  
  if ($("#visit-sale-chart1").length) {
    const ctx = document.getElementById('visit-sale-chart1');

    var graphGradient1 = document.getElementById('visit-sale-chart1').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart1').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart1').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

    var gradientStrokeRed = graphGradient3.createLinearGradient(0, 0, 0, 300);
    gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
    var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';
    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1"];
    const bgColor3 = ["rgba(255, 191, 150, 1)"];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%','90%','100%'],
        datasets: [{
          label: "Absent Employee Count",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [86, 239, 156, 197, 401, 230, 200, 11, 80, 322],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
         ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          var i;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          for (i = 0; i < chart.data.datasets.length; i++) {
            ul.innerHTML += `
              <li>
                <span style="background-color: ${chart.data.datasets[i].fillColor}"></span>
                ${chart.data.datasets[i].label}
              </li>
            `;
          }
          // alert(chart.data.datasets[0].backgroundColor);
          return document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }
  
  if ($("#visit-sale-chart2").length) {
    const ctx = document.getElementById('visit-sale-chart2');

    var graphGradient1 = document.getElementById('visit-sale-chart2').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart2').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart2').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

  
    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Manufacturing','Health Services', 'Infrastructure', 'Insurance', 'Tele-communication', 'Business Intelligence', 'Oracle Services', 'consulting'],
        datasets: [{
          label: "Male",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [40, 20, 76, 40, 13, 41, 75, 36],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        {
          label: "Female",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          fillColor: bgColor2,
          hoverBackgroundColor: gradientStrokeBlue,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [23, 35, 46, 12, 65, 45, 86, 36],
          barPercentage: 0.5,
          categoryPercentage: 0.5,}
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          var i;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          for (i = 0; i < chart.data.datasets.length; i++) {
            ul.innerHTML += `
              <li>
                <span style="background-color: ${chart.data.datasets[i].fillColor}"></span>
                ${chart.data.datasets[i].label}
              </li>
            `;
          }
          // alert(chart.data.datasets[0].backgroundColor);
          return document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }

   if ($("#visit-sale-chart3").length) {
    const ctx = document.getElementById('visit-sale-chart3');

    var graphGradient1 = document.getElementById('visit-sale-chart3').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart3').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart3').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

  
    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sep-16','Oct-16', 'Nov-16', 'Dec-16', 'Jan-16', 'Feb-16'],
        datasets: [{
          label: "Number Of Trainings",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [20, 14, 25, 7, 17, 11],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          var i;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          for (i = 0; i < chart.data.datasets.length; i++) {
            ul.innerHTML += `
              <li>
                <span style="background-color: ${chart.data.datasets[i].fillColor}"></span>
                ${chart.data.datasets[i].label}
              </li>
            `;
          }
          // alert(chart.data.datasets[0].backgroundColor);
          return document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }


  if ($("#visit-sale-chart4").length) {
    const ctx = document.getElementById('visit-sale-chart4');

    var graphGradient1 = document.getElementById('visit-sale-chart4').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart4').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart4').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

  
    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sep-16','Oct-16', 'Nov-16', 'Dec-16', 'Jan-16', 'Feb-16'],
        datasets: [{
          label: "Soft Skills",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [9, 7, 9, 5, 7, 3],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        {
         label: "Technical Skills",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeBlue,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [11, 7, 16, 2, 10, 8],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {
          const chartId = chart.canvas.id;
          var i;
          const legendId = `${chartId}-legend`;
          const ul = document.createElement('ul');
          for (i = 0; i < chart.data.datasets.length; i++) {
            ul.innerHTML += `
              <li>
                <span style="background-color: ${chart.data.datasets[i].fillColor}"></span>
                ${chart.data.datasets[i].label}
              </li>
            `;
          }
          // alert(chart.data.datasets[0].backgroundColor);
          return document.getElementById(legendId).appendChild(ul);
        }
      }]
    });
  }

  if ($("#visit-sale-chart5").length) {
    const ctx = document.getElementById('visit-sale-chart5');

    var graphGradient1 = document.getElementById('visit-sale-chart5').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart5').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart5').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2024','2025', '2026'],
        datasets: [{
          label: "A",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [39, 32, 51],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        {
         label: "B",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeBlue,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [18, 29, 26],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },

         {
         label: "C",
          borderColor: gradientStrokeRed,
          backgroundColor: gradientStrokeRed,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeRed,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [24, 20, 14],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },

          {
         label: "D",
          borderColor: gradientStrokeGreen,
          backgroundColor: gradientStrokeGreen,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeGreen,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [11, 19, 9],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

// if ($("#visit-sale-chart6").length) {
//     const ctx = document.getElementById('visit-sale-chart6');

//     var graphGradient1 = document.getElementById('visit-sale-chart6').getContext("2d");
//     var graphGradient2 = document.getElementById('visit-sale-chart6').getContext("2d");
//     var graphGradient3 = document.getElementById('visit-sale-chart6').getContext("2d");

//     var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
//     gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
//     gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
//     var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

//     var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
//     gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
//     gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
//     var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

//       var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
//     gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
//     gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
//     var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

//     const bgColor1 = ["rgba(218, 140, 255, 1)"];
//     const bgColor2 = ["rgba(54, 215, 232, 1)"];
//     const bgColor3 = ["rgba(227, 47, 47, 1)"];
//     const bgColor4 = ["rgba(47, 227, 89, 1)"];
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Team','Indivisual', 'Field Visit', 'Behaviour', 'KSA'],
//         datasets: [{
//           label: "Team",
//           borderColor: gradientStrokeViolet,
//           backgroundColor: gradientStrokeViolet,
//           fillColor: bgColor1,
//           hoverBackgroundColor: gradientStrokeViolet,
//           pointRadius: 0,
//           fill: false,
//           borderWidth: 1,
//           fill: 'origin',
//           data: [54, 69, 45, 64, 51],
//           barPercentage: 0.5,
//           categoryPercentage: 0.5,
//         },
//        ]   
      
//         },
        
//       options: {
//         responsive: true,
//         maintainAspectRatio: true,
//         elements: {
//           line: {
//             tension: 0.4,
//           },
//         },
//         scales: {
//           y: {
//             display: true,
//             grid: {
//               display: true,
//               drawOnChartArea: true,
//               drawTicks: false,
//             },
//           },
//           x: {
//             display: true,
//             grid: {
//               display: false,
//             },
//           }
//         },
//         plugins: {
//           legend: {
//             display: false,
//           }
//         }
//       },
//       plugins: [{
//         afterDatasetUpdate: function (chart, args, options) {
//           const chartId = chart.canvas.id;
//           var i;
//           const legendId = `${chartId}-legend`;
//           const ul = document.createElement('ul');
//           for (i = 0; i < chart.data.datasets.length; i++) {
//             ul.innerHTML += `
//               <li>
//                 <span style="background-color: ${chart.data.datasets[i].fillColor}"></span>
//                 ${chart.data.datasets[i].label}
//               </li>
//             `;
//           }
//           // alert(chart.data.datasets[0].backgroundColor);
//           return document.getElementById(legendId).appendChild(ul);
//         }
//       }]
//     });
//   }
if ($("#visit-sale-chart6").length) {
    const ctx = document.getElementById('visit-sale-chart6');

    var graphGradient1 = document.getElementById('visit-sale-chart6').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 146, 1)"];
    const bgColor4 = ["rgba(47, 227, 149, 1)"];
        const bgColor5 = ["rgba(154, 85, 255, 1)"];

    

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Team','Indivisual', 'Field Visit', 'Behaviour', 'KSA'],

        datasets: [{
          label: "Team",

          // ⭐ UPDATED – SET DIFFERENT COLORS FOR EACH BAR  
          backgroundColor: [
            bgColor1[0], // Team
            bgColor2[0], // Individual
            bgColor3[0], // Field Visit
            bgColor4[0], // Behaviour
            bgColor5[0]  // KSA
          ],

          // ⭐ UPDATED – BORDER COLORS PER BAR  
          borderColor: [
            bgColor1[0],
            bgColor2[0],
            bgColor3[0],
            bgColor4[0],
            bgColor5[0]
          ],

          // ⭐ UPDATED – REMOVE GRADIENT FROM BACKGROUND, USE SOLID COLORS ABOVE  
          hoverBackgroundColor: [
            bgColor1[0],
            bgColor2[0],
            bgColor3[0],
            bgColor4[0],
            bgColor5[0]
          ],

          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [54, 69, 45, 64, 51],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        }],
      },

      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: { display: false }
        }
      },

      plugins: [{
        afterDatasetUpdate: function (chart, args, options) {

          const chartId = chart.canvas.id;
          const legendId = `${chartId}-legend`;
          const legendContainer = document.getElementById(legendId);

          legendContainer.innerHTML = ""; // ⭐ UPDATED – PREVENT DUPLICATE LEGENDS

          const ul = document.createElement('ul');

          // ⭐ UPDATED – USE backgroundColor[i] INSTEAD OF fillColor
          for (let i = 0; i < chart.data.labels.length; i++) {
            ul.innerHTML += `
              <li>
                <span style="background-color: ${chart.data.datasets[0].backgroundColor[i]}"></span>
                ${chart.data.labels[i]}
              </li>
            `;
          }

          return legendContainer.appendChild(ul);
        }
      }]
    });
}

 if ($("#visit-sale-chart7").length) { 
    const ctx = document.getElementById('visit-sale-chart7');

    var graphGradient1 = document.getElementById('visit-sale-chart7').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart7').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart7').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Manufacturing','Health Services', 'Infrastructure', 'Insurance', 'Tele-communication', 'Business Intelligence', 'Oracle Services', 'Consulting'],
        datasets: [{
          label: "Cost In Lakhs",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [15, 4, 9, 2, 9, 10, 11, 10],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

   if ($("#visit-sale-chart8").length) { 
    const ctx = document.getElementById('visit-sale-chart8');

    var graphGradient1 = document.getElementById('visit-sale-chart8').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart8').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart8').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Manufacturing','Health Services', 'Infrastructure', 'Insurance', 'Tele-communication', 'Business Intelligence', 'Oracle Services', 'Consulting'],
        datasets: [{
          label: "Open Positions",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeBlue,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [15, 4, 9, 2, 9, 10, 11, 10],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
        {
          label: "Closed Positions",
          borderColor: gradientStrokeGreen,
          backgroundColor: gradientStrokeGreen,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeGreen,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [7, 3, 3, 9, , 2, 14, 4],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

  if ($("#visit-sale-chart9").length) { 
    const ctx = document.getElementById('visit-sale-chart9');

    var graphGradient1 = document.getElementById('visit-sale-chart9').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart9').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart9').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Casual Leave','Privilege Leave', 'Medical leave', 'Maternity Leave', 'Paternity Leave'],
        datasets: [{
          label: "Leave Consumption",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeBlue,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [15, 4, 9, 2, 9, 10, 11, 10],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
        
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

    if ($("#visit-sale-chart10").length) { 
    const ctx = document.getElementById('visit-sale-chart10');

    var graphGradient1 = document.getElementById('visit-sale-chart10').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart10').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart10').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

     var gradientStrokeRed = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeRed.addColorStop(0, 'rgba(243, 116, 116, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(255, 4, 0, 1)');
    var gradientLegendred = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2020','2021', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: "Accured",
          borderColor: gradientStrokeRed,
          backgroundColor: gradientStrokeRed,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeRed,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [39000, 35000, 10000, 31000, 40600, 7000],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
        {
          label: "Taken",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeBlue,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [15000, 15500, 25000, 30000, 28000, 40200],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

   if ($("#visit-sale-chart11").length) { 
    const ctx = document.getElementById('visit-sale-chart11');

    var graphGradient1 = document.getElementById('visit-sale-chart11').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart11').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart11').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

     var gradientStrokeRed = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeRed.addColorStop(0, 'rgba(243, 116, 116, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(255, 4, 0, 1)');
    var gradientLegendred = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sep-15','Oct-15', 'Nov-15', 'Dec-15', 'Jan-15', 'Feb-15'],
        datasets: [{
          label: "Present Trends",
          borderColor: gradientStrokeRed,
          backgroundColor: gradientStrokeRed,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeRed,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [1800, 1909, 1741, 1950, 1800, 1870],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
       
        
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

  if ($("#visit-sale-chart12").length) { 
    const ctx = document.getElementById('visit-sale-chart12');

    var graphGradient = ctx.getContext("2d");

    // Gradients
    var gradientStrokeViolet = graphGradient.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');

    var gradientStrokeBlue = graphGradient.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');

    var gradientStrokeRed = graphGradient.createLinearGradient(0, 0, 0, 360);
    gradientStrokeRed.addColorStop(0, 'rgba(243, 116, 116, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(255, 4, 0, 1)');

    var gradientStrokeGreen = graphGradient.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Present','Leave','Absent','Holiday','On Duty'],
            datasets: [{
                label: "",
                backgroundColor: [
                    gradientStrokeRed,
                    gradientStrokeBlue,
                    gradientStrokeViolet,
                    gradientStrokeGreen,
                    'rgba(255, 193, 7, 1)',
                    'rgba(0, 123, 255, 1)'
                ],
                borderWidth: 1,
                data: ['1354', '388', '30', '67', '92'],
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false }
            }
        },

        plugins: [{
            afterInit: function (chart, args, options) {

                const chartId = chart.canvas.id;
                const legendId = `${chartId}-legend`;
                const legendContainer = document.getElementById(legendId);
                if (!legendContainer) return;

                legendContainer.innerHTML = "";
                const ul = document.createElement('ul');

                chart.data.labels.forEach((label, i) => {
                    const color = chart.data.datasets[0].backgroundColor[i];
                    ul.innerHTML += `
                        <li>
                            <span style="background:${color};"></span>
                            ${label}
                        </li>
                    `;
                });

                legendContainer.appendChild(ul);
            }
        }]
    });
}


   if ($("#visit-sale-chart13").length) { 
    const ctx = document.getElementById('visit-sale-chart13');

    var graphGradient1 = document.getElementById('visit-sale-chart13').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart13').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart13').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

     var gradientStrokeRed = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeRed.addColorStop(0, 'rgba(243, 116, 116, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(255, 4, 0, 1)');
    var gradientLegendred = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sep-15','Oct-15', 'Nov-15', 'Dec-15', 'Jan-15', 'Feb-15'],
        datasets: [{
          label: "Village Halt",
          borderColor: gradientStrokeRed,
          backgroundColor: gradientStrokeRed,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeRed,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [500, 450, 300,700, 100, 300],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
        {
          label: "Field Halt",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeBlue,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [200, 300, 400,200, 300, 50],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
       
        
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

  if ($("#visit-sale-chart14").length) { 
    const ctx = document.getElementById('visit-sale-chart14');

    var graphGradient1 = document.getElementById('visit-sale-chart14').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart14').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart14').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

     var gradientStrokeRed = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeRed.addColorStop(0, 'rgba(243, 116, 116, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(255, 4, 0, 1)');
    var gradientLegendred = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sep-15','Oct-15', 'Nov-15', 'Dec-15', 'Jan-15', 'Feb-15'],
        datasets: [{
          label: "Monthly Total Expense",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [1000, 1140, 1160, 1240, 720, 460],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
     
        
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

  if ($("#visit-sale-chart15").length) { 
    const ctx = document.getElementById('visit-sale-chart15');

    var graphGradient1 = document.getElementById('visit-sale-chart15').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart15').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart15').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

     var gradientStrokeRed = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeRed.addColorStop(0, 'rgba(243, 116, 116, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(255, 4, 0, 1)');
    var gradientLegendred = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Manufacturing','Health Services', 'Infrastructure', 'Insurance', 'Tele-communication', 'Business Intelligence','Oracle Services', 'Consulting'],
        datasets: [{
          label: "Cost In Lakhs",
          borderColor: gradientStrokeViolet,
          backgroundColor: gradientStrokeViolet,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeViolet,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [15, 4, 9, 2, 9, 10,11,10],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
     
        
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

    if ($("#visit-sale-chart16").length) { 
    const ctx = document.getElementById('visit-sale-chart16');

    var graphGradient1 = document.getElementById('visit-sale-chart16').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart16').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart16').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

     var gradientStrokeRed = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeRed.addColorStop(0, 'rgba(243, 116, 116, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(255, 4, 0, 1)');
    var gradientLegendred = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Manufacturing','Health Services', 'Infrastructure', 'Insurance', 'Tele-communication', 'Business Intelligence','Oracle Services', 'Consulting'],
        datasets: [{
          label: "Open Position",
          borderColor: gradientStrokeGreen,
          backgroundColor: gradientStrokeGreen,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeGreen,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [7, 3, 3, 9, 9, ,2,14,4],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
        
        {
          label: "Closed Position",
          borderColor: gradientStrokeBlue,
          backgroundColor: gradientStrokeBlue,
          fillColor: bgColor1,
          hoverBackgroundColor: gradientStrokeBlue,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          fill: 'origin',
          data: [15, 4, 9, 2, 9, 10,11,10],
          barPercentage: 0.5,
          categoryPercentage: 0.5,
        },
     
        
         ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

  if ($("#visit-sale-chart17").length) { 
    const ctx = document.getElementById('visit-sale-chart17');

    var graphGradient1 = document.getElementById('visit-sale-chart17').getContext("2d");
    var graphGradient2 = document.getElementById('visit-sale-chart17').getContext("2d");
    var graphGradient3 = document.getElementById('visit-sale-chart17').getContext("2d");

    var gradientStrokeViolet = graphGradient1.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
    var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

  

    var gradientStrokeBlue = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');
    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

     var gradientStrokeRed = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeRed.addColorStop(0, 'rgba(243, 116, 116, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(255, 4, 0, 1)');
    var gradientLegendred = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeGreen = graphGradient2.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');
    var gradientLegendGreen = 'linear-gradient(to right, rgba(97, 226, 120, 1), rgba(35, 138, 26, 1))';

    const bgColor1 = ["rgba(218, 140, 255, 1)"];
    const bgColor2 = ["rgba(54, 215, 232, 1)"];
    const bgColor3 = ["rgba(227, 47, 47, 1)"];
    const bgColor4 = ["rgba(47, 227, 89, 1)"];
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['01-Feb-2025','02-Feb-2025', '03-Feb-2025', '04-Feb-2025', '05-Feb-2025', '08-Feb-2025','09-Feb-2025', '10-Feb-2025'],
        datasets: [
  {
    label: "Open Position",
    borderColor: gradientStrokeGreen,
    backgroundColor: gradientStrokeGreen,
    hoverBackgroundColor: gradientStrokeGreen,
    pointRadius: 0,
    fill: false,
    borderWidth: 1,
    data: [7, 3, 3, 9, 9, 2, 14, 4],
    barPercentage: 0.5,
    categoryPercentage: 0.5,
  },
  ]   
        },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          line: {
            tension: 0.4,
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              display: false,
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      },
     plugins: [{
  afterInit: function (chart, args, options) {

    const chartId = chart.canvas.id;
    const legendId = `${chartId}-legend`;
    const legendContainer = document.getElementById(legendId);

    if (!legendContainer) return;

    legendContainer.innerHTML = ""; // clear previous legends

    const ul = document.createElement('ul');

    chart.data.datasets.forEach((ds) => {
      const color = ds.backgroundColor;
      ul.innerHTML += `
        <li>
          <span style="background-color:${color}"></span>
          ${ds.label}
        </li>
      `;
    });

    legendContainer.appendChild(ul);
  }
}]

    });
  }

   if ($("#visit-sale-chart18").length) { 
    const ctx = document.getElementById('visit-sale-chart18');

    var graphGradient = ctx.getContext("2d");

    // Gradients
    var gradientStrokeViolet = graphGradient.createLinearGradient(0, 0, 0, 181);
    gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');

    var gradientStrokeBlue = graphGradient.createLinearGradient(0, 0, 0, 360);
    gradientStrokeBlue.addColorStop(0, 'rgba(108, 218, 230, 1)');
    gradientStrokeBlue.addColorStop(1, 'rgba(7, 142, 157, 1)');

    var gradientStrokeRed = graphGradient.createLinearGradient(0, 0, 0, 360);
    gradientStrokeRed.addColorStop(0, 'rgba(243, 116, 116, 1)');
    gradientStrokeRed.addColorStop(1, 'rgba(243, 105, 102, 1)');

    var gradientStrokeGreen = graphGradient.createLinearGradient(0, 0, 0, 360);
    gradientStrokeGreen.addColorStop(0, 'rgba(97, 226, 120, 1)');
    gradientStrokeGreen.addColorStop(1, 'rgba(35, 138, 26, 1)');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['18-25','26-30','31-35','36-40','41-45'],
            datasets: [{
                label: "",
                backgroundColor: [
                    gradientStrokeRed,
                    gradientStrokeBlue,
                    gradientStrokeViolet,
                    gradientStrokeGreen,
                    'rgba(255, 193, 7, 1)',
                    'rgba(0, 123, 255, 1)'
                ],
                borderWidth: 1,
                data: ["300", '388', '30', '67', '92'],
            }]
        },
       options: {
       responsive: true,
       maintainAspectRatio: true,

        plugins: {
        legend: { display: false },

        tooltip: {
            callbacks: {
                label: function(context) {
                    const value = Number(context.raw);
                    const dataArray = context.dataset.data.map(Number);
                    const total = dataArray.reduce((a, b) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return `${value} (${percentage}%)`;
                }
            }
        }
    }
}
,

        plugins: [{
            afterInit: function (chart, args, options) {

                const chartId = chart.canvas.id;
                const legendId = `${chartId}-legend`;
                const legendContainer = document.getElementById(legendId);
                if (!legendContainer) return;

                legendContainer.innerHTML = "";
                const ul = document.createElement('ul');

                chart.data.labels.forEach((label, i) => {
                    const color = chart.data.datasets[0].backgroundColor[i];
                    ul.innerHTML += `
                        <li>
                            <span style="background:${color};"></span>
                            ${label}
                        </li>
                    `;
                });

                legendContainer.appendChild(ul);
            }
        }]
    });
}

  if ($("#inline-datepicker").length) {
    $('#inline-datepicker').datepicker({
      enableOnReadonly: true,
      todayHighlight: true,
    });
  }
  if ($.cookie('purple-pro-banner') != "true") {
    document.querySelector('#proBanner').classList.add('d-flex');
    document.querySelector('.navbar').classList.remove('fixed-top');
  } else {
    document.querySelector('#proBanner').classList.add('d-none');
    document.querySelector('.navbar').classList.add('fixed-top');
  }

  if ($(".navbar").hasClass("fixed-top")) {
    document.querySelector('.page-body-wrapper').classList.remove('pt-0');
    document.querySelector('.navbar').classList.remove('pt-5');
  } else {
    document.querySelector('.page-body-wrapper').classList.add('pt-0');
    document.querySelector('.navbar').classList.add('pt-5');
    document.querySelector('.navbar').classList.add('mt-3');

  }
  document.querySelector('#bannerClose').addEventListener('click', function () {
    document.querySelector('#proBanner').classList.add('d-none');
    document.querySelector('#proBanner').classList.remove('d-flex');
    document.querySelector('.navbar').classList.remove('pt-5');
    document.querySelector('.navbar').classList.add('fixed-top');
    document.querySelector('.page-body-wrapper').classList.add('proBanner-padding-top');
    document.querySelector('.navbar').classList.remove('mt-3');
    var date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    $.cookie('purple-pro-banner', "true", {
      expires: date
    });
  });
})(jQuery);