document.addEventListener('DOMContentLoaded', function () {
    (function (H) {
        H.seriesTypes.pie.prototype.animate = function (init) {
            const series = this,
                chart = series.chart,
                points = series.points,
                {
                    animation
                } = series.options,
                {
                    startAngleRad
                } = series;

            function fanAnimate(point, startAngleRad) {
                const graphic = point.graphic,
                    args = point.shapeArgs;

                if (graphic && args) {
                    graphic
                        .attr({
                            start: startAngleRad,
                            end: startAngleRad,
                            opacity: 1
                        })
                        .animate({
                            start: args.start,
                            end: args.end
                        }, {
                            duration: animation.duration / points.length
                        }, function () {
                            if (points[point.index + 1]) {
                                fanAnimate(points[point.index + 1], args.end);
                            }
                            if (point.index === series.points.length - 1) {
                                series.dataLabelsGroup.animate({
                                    opacity: 1
                                },
                                void 0,
                                function () {
                                    points.forEach(point => {
                                        point.opacity = 1;
                                    });
                                    series.update({
                                        enableMouseTracking: true
                                    }, false);
                                    chart.update({
                                        plotOptions: {
                                            pie: {
                                                innerSize: '40%',
                                                borderRadius: 8
                                            }
                                        }
                                    });
                                });
                            }
                        });
                }
            }

            if (init) {
                points.forEach(point => {
                    point.opacity = 0;
                });
            } else {
                fanAnimate(points[0], startAngleRad);
            }
        };
    }(Highcharts));

    // Data dari chart sebelumnya
    const dalamKotaData = [50, 60, 70, 40, 90];
    const luarKotaData = [80, 40, 50, 30, 60];

    // Hitung total mahasiswa dalam kota, luar kota, dan keseluruhan
    const totalDalamKota = dalamKotaData.reduce((a, b) => a + b, 0);
    const totalLuarKota = luarKotaData.reduce((a, b) => a + b, 0);
    const totalMahasiswa = totalDalamKota + totalLuarKota;

    Highcharts.chart('chart3', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Distribusi Mahasiswa Dalam dan Luar Kota'
        },
        subtitle: {
            text: 'Total Mahasiswa: ' + totalMahasiswa
        },
        tooltip: {
            headerFormat: '',
            pointFormat:
                '<span style="color:{point.color}">\u25cf</span> ' +
                '{point.name}: <b>{point.y} mahasiswa</b>'
        },
        accessibility: {
            point: {
                valueSuffix: ' mahasiswa'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                borderWidth: 2,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.y} mahasiswa',
                    distance: 20
                }
            }
        },
        series: [{
            enableMouseTracking: false,
            animation: {
                duration: 2000
            },
            colorByPoint: true,
            data: [
                { name: 'Mahasiswa Dalam Kota', y: totalDalamKota, color: '#2ecc71' }, // Hijau Muda
                { name: 'Mahasiswa Luar Kota', y: totalLuarKota, color: '#f39c12' }, // Oranye
                { name: 'Total Mahasiswa', y: totalMahasiswa, color: '#3498db' } // Biru Cerah
            ]
        }]
    });

});



