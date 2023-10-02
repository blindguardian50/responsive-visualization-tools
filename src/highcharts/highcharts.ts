import * as Highcharts from 'highcharts';

// import Chart from 'highcharts/es-modules/Core/Chart/Chart.js';
// import BarSeries from 'highcharts/es-modules/Series/Bar/BarSeries.js';


// Alternatively, this is how to load Highcharts Stock. The Maps and Gantt
// packages are similar.
// import Highcharts from 'highcharts/highstock';

// // Load the exporting module.
// import * as Exporting from 'highcharts/modules/exporting';
// // Initialize exporting module.
// Exporting(Highcharts);

// // Initialize the bar chart module
// import HighchartsSeries from 'highcharts/modules/bar';
// HighchartsSeries(Highcharts);

export function createChart() {
    return Highcharts.chart('chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Historic World Population by Region',
            align: 'left'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
                'target="_blank">Wikipedia.org</a>',
            align: 'left'
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: {
                text: null
            },
            gridLineWidth: 1,
            lineWidth: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 0
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                borderRadius: '50%',
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.1
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 1990',
            data: [631, 727, 3202, 721, 26]
        }, {
            name: 'Year 2000',
            data: [814, 841, 3714, 726, 31]
        }, {
            name: 'Year 2010',
            data: [1044, 944, 4170, 735, 40]
        }, {
            name: 'Year 2018',
            data: [1276, 1007, 4561, 746, 42]
        }]
    });
}
