import * as Highcharts from 'highcharts';
import austrianCities from './data/austrian-cities.js';


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
            text: 'Population of Austrian Cities',
            align: 'left'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://www.kaggle.com/datasets/juanmah/world-cities"' +
                'target="_blank">Kaggle.com</a>',
            align: 'left'
        },
        xAxis: {
            categories: austrianCities.cities,
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
        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'top',
        //     x: -40,
        //     y: 80,
        //     floating: true,
        //     borderWidth: 1,
        //     backgroundColor:
        //         Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        //     shadow: true
        // },
        credits: {
            enabled: false
        },
        series: [{
                name: 'Cities',
                data: austrianCities.populations
        }]
    });
}
