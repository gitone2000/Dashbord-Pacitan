
document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("chart4", {
    chart: {
      zoomType: "xy"
    },
    title: {
      text: "Jumlah Mahasiswa Berdasarkan Bidang"
    },
    xAxis: {
      categories: ["Teknik", "Kesehatan", "Ekonomi", "Hukum", "Pendidikan"],
      crosshair: true
    },
    yAxis: {
      title: {
        text: "Jumlah Mahasiswa"
      }
    },
    tooltip: {
      shared: true
    },
    plotOptions: {
      column: {
        borderWidth: 0
      }
    },
    colors: ['#27ae60', '#e67e22', '#2980b9'], // Warna baru yang lebih menarik
    series: [
      {
        name: "Dalam Kota Pacitan",
        type: "column",
        data: [50, 60, 70, 40, 90], // Warna Hijau Tua
        color: '#27ae60'
      },
      {
        name: "Luar Kota Pacitan",
        type: "column",
        data: [80, 40, 50, 30, 60], // Warna Oranye
        color: '#e67e22'
      },
      {
        name: "Total Mahasiswa",
        type: "line",
        data: [130, 100, 120, 70, 150], // Warna Biru
        color: '#2980b9',
        marker: {
          enabled: true,
          symbol: "circle",
          fillColor: '#2980b9',
          lineColor: '#fff',
          lineWidth: 2
        },
        lineWidth: 3
      }
    ]
  });

  document.getElementById("small").addEventListener("click", function () {
    chart.setSize(400);
  });

  document.getElementById("large").addEventListener("click", function () {
    chart.setSize(600);
  });

  document.getElementById("auto").addEventListener("click", function () {
    chart.setSize(null);
  });
});
