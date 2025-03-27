document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('chart5', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Jumlah Mahasiswa Per Tahun Ajaran'
        },
        subtitle: {
            text: 'Tren Mahasiswa Dalam & Luar Kota'
        },
        xAxis: {
            categories: [
                '2020', '2021', '2022', '2023', '2024'
            ],
            accessibility: {
                description: 'Tahun Ajaran'
            }
        },
        yAxis: {
            title: {
                text: 'Jumlah Mahasiswa'
            },
            labels: {
                format: '{value}'
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 5,
                    lineColor: '#333',
                    lineWidth: 1
                }
            }
        },
        colors: ['#1abc9c', '#e74c3c', '#3498db'], // Hijau, Merah, Biru
        series: [
            {
                name: 'Dalam Kota Pacitan',
                marker: {
                    symbol: 'circle'
                },
                data: [300, 270, 280, 250, 230], // Tidak turun lurus, ada sedikit naik
                color: '#1abc9c'
            },
            {
                name: 'Luar Kota Pacitan',
                marker: {
                    symbol: 'diamond'
                },
                data: [250, 300, 290, 350, 400], // Naik-turun alami
                color: '#e74c3c'
            },
            {
                name: 'Total Mahasiswa',
                marker: {
                    symbol: 'square'
                },
                data: [550, 570, 570, 600, 630], // Naik dengan sedikit variasi
                color: '#3498db'
            }
        ]
    });
});
