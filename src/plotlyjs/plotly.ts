import Plotly from 'plotly.js-dist'
import austrianCities from './data/austrian-cities'

export function createChart() {
    const trace1 = {
        type: 'bar',
        x: austrianCities.cities, // [1, 2, 3, 4],
        y: austrianCities.populations, //[5, 10, 2, 8],
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
    };

    const data = [trace1];
    const layout = {
        title: 'Population of Austrian Cities',
        font: {size: 18}
    };

    const config = {responsive: true}


    const plot = document.getElementById('chart')
    Plotly.newPlot(plot, data, layout, config);
}
