
var rs = [
    {
        pregunta: 'pregunta 1',
        resp1: 3,
        resp2: 0,
        resp3: 1,
        resp4: 0,
        resp5: 0
    },
    {
        pregunta: 'pregunta 2',
        resp1: 1,
        resp2: 0,
        resp3: 0,
        resp4: 1,
        resp5: 0
    },
    {
        pregunta: 'pregunta 3',
        resp1: 1,
        resp2: 1,
        resp3: 1,
        resp4: 0,
        resp5: 0
    }
];

chart = AmCharts.makeChart("chartdiv", {
    type: "serial",
    theme: "light",
    legend: {
        horizontalGap: 1,
        maxColumns: 1,
        position: "right",
        useGraphSettings: true,
        markerSize: 10
    },
    marginRight: 25,
    dataProvider: rs,
    synchronizeGrid: true,
    categoryField: "pregunta",
    valueAxes: [{
            id: "v1",
            axisColor: "#FF6600",
            position: "left",
            title: "valores"
        }],
    graphs: [{
            valueAxis: "v1",
//                    id: "g1",
            title: "respuesta 1",
            valueField: "resp1",
            lineColor: "#FF6600",
//                    fillAlphas: 0.4,
            bullet: "diamond",
            bulletBorderColor: "#F0EEF0",
            bulletBorderAlpha: 1,
            balloonText: "<div style='margin:5px; font-size:11px;'>respuesta 1:<b>[[resp1]]</b></div>"
        }, {
            valueAxis: "v1",
//                    id: "g1",
            title: "respuesta 2",
            valueField: "resp2",
            lineColor: "#FCD202",
//                    fillAlphas: 0.4,
            bullet: "diamond",
            bulletBorderColor: "#F0EEF0",
            bulletBorderAlpha: 1,
            balloonText: "<div style='margin:5px; font-size:11px;'>respuesta 2:<b>[[resp2]]</b></div>"
        }
        ,{
            valueAxis: "v1",
//                    id: "g1",
            title: "respuesta 3",
            valueField: "resp3",
            lineColor: "#B0DE09",
//                    fillAlphas: 0.4,
            bullet: "diamond",
            bulletBorderColor: "#F0EEF0",
            bulletBorderAlpha: 1,
            balloonText: "<div style='margin:5px; font-size:11px;'>respuesta 3:<b>[[resp3]]</b></div>"
        }
        ,{
            valueAxis: "v1",
//                    id: "g1",
            title: "respuesta 4",
            valueField: "resp4",
            lineColor: "#0000FF",
//                    fillAlphas: 0.4,
            bullet: "diamond",
            bulletBorderColor: "#F0EEF0",
            bulletBorderAlpha: 1,
            balloonText: "<div style='margin:5px; font-size:11px;'>respuesta 4:<b>[[resp4]]</b></div>"
        }
        ,{
            valueAxis: "v1",
//                    id: "g1",
            title: "respuesta 5",
            valueField: "resp5",
            lineColor: "#173B0B",
//                    fillAlphas: 0.4,
            bullet: "diamond",
            bulletBorderColor: "#F0EEF0",
            bulletBorderAlpha: 1,
            balloonText: "<div style='margin:5px; font-size:11px;'>respuesta 5:<b>[[resp5]]</b></div>"
        }
    ],
    chartScrollbar: {},
    chartCursor: {
//        cursorPosition: "mouse",
//        zoomable: true
    },
    mouseWheelZoomEnabled: true,
});

chart.addListener("dataUpdated", zoomChart);
zoomChart();
function zoomChart() {
    chart.zoomToIndexes(chartData.length - 250, chartData.length - 100);
}