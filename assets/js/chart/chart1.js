document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('chart1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Persebaran Mahasiswa Asal Pacitan di Berbagai Kampus',
            align: 'left'
        },
        subtitle: {
            text: 'Data Tahun 2024',
            align: 'left'
        },
        xAxis: {
            categories: [
                'Universitas Brawijaya',
                'STIKP PGRI Pacitan',
                'Universitas Gadjah Mada',
                'Universitas Sebelas Maret',
                'Institut Teknologi Sepuluh Nopember',
                'Universitas Airlangga',
                'Universitas Diponegoro',
                'Universitas Lainnya'
            ],
            crosshair: true,
            title: {
                text: 'Nama Kampus'
            },
            labels: {
                style: {
                    fontSize: '11px'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Jumlah Mahasiswa'
            },
            labels: {
                formatter: function() {
                    return this.value.toLocaleString();
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:,.0f} mahasiswa</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return this.y.toLocaleString();
                    }
                }
            }
        },
        series: [{
            name: 'Jumlah Mahasiswa Asal Pacitan',
            data: [245, 180, 210, 165, 120, 155, 140, 385],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
                stops: [
                    // [0, '#FF6B6B'],
                    [1, '#000080']
                ]
            }
        }]
    });
});