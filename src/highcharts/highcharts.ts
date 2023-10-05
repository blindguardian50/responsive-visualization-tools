import austrianCities from './data/austrian-cities.js';
import { chart, Options } from 'highcharts';

export function createChart() {
    const renderTo  = 'chart'
    const options: Options = {
        chart: {
            type: 'column'
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
        credits: {
            enabled: false
        },
        series: [{
            type: 'column', // same as as SeriesBarOptions
            name: 'Cities',
            data: austrianCities.populations
        }]
    }
    return chart(renderTo, options);
}
