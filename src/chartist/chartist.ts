import { BarChart } from 'chartist';
import austrianCities from './data/austrian-cities'

export function createChart() {
    // for (let i = 1; i < 4; i++) {
    //     new BarChart('#chart' + i, {
    //         labels: austrianCities.cities, //['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    //         series: [austrianCities.populations] //[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    //     }, {
    //         // high: 10,
    //         // low: -10,
    //         axisX: {
    //             // labelInterpolationFnc: (value, index) => (index % 2 === 0 ? value : null)
    //         }
    //     });
    //
    // }
    return new BarChart('#chart', {
        labels: austrianCities.cities, //['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [austrianCities.populations] //[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    }, {
        // high: 10,
        // low: -10,
        axisX: {
            // labelInterpolationFnc: (value, index) => (index % 2 === 0 ? value : null)
        },
        axisY: {

        },
        chartPadding: { left: 30, top: 20, bottom: 20 } //Necessary for example data, without it labels get cut off
    });
}

