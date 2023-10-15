import Chart, {ChartConfiguration} from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import austrianCities from './data/austrian-cities.js'

//Global registration
//Chart.register(ChartDataLabels)

export async function createChart({createWithExtraStuff = true}) {
    const data = austrianCities.cities.map((city, index) => {
        return {city, population: austrianCities.populations[index]}
    })

    const formatter = (value: string) => {
        if (Number(value) > 999999) {
            const text = value.toString()
            const shortened = text.slice(0, text.length - 6) + '.' + text[text.length - 6]
            return shortened + 'M'
        } else if (Number(value) > 999) {
            const text = value.toString()
            const shortened = text.slice(0, text.length - 3) // + '.' + text[text.length - 6]
            return shortened + 'K'
        }
        return value;
    }

    const cityScale = {
        type: 'category',
        title: {
            display: true,
            text: 'City'
        },
        ticks: {
            autoSkip: false,
            maxRotation: 90, // Set the rotation angle to 0 degrees
            minRotation: 0  // Set the rotation angle to 0 degrees
        }
    } as const

    const populationScale = {
        title: {
            display: true,
            text: 'Population'
        },
        ticks: {
            // Include a dollar sign in the ticks
            callback: formatter
        }
    } as const

    const config: ChartConfiguration = {
        type: 'bar' as const,
        plugins: [ChartDataLabels],
        options: {
            onResize(chart: Chart, size: { width: number; height: number }) {
                if (size.width < 400) {
                    chart.options.scales.x = populationScale
                    chart.options.scales.y = cityScale
                    chart.options.indexAxis = "y"
                    // Additional options like rotation of axis ticks, bar labels are harder to adjust
                }
            },
            indexAxis: 'x',  // flipchart: turn to y
            scales: {
                x: cityScale, // flipchart: turn to populationScale
                y: populationScale // flipchart: turn to cityScale
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Population of Austrian Cities',
                    padding: {
                        bottom: 25
                    }
                },
                legend: {
                    display: false
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    // offset: 4
                    // color: '#36A2EB'
                    formatter
                }
            },
            responsive: true,
            maintainAspectRatio: false
        },
        data: {
            labels: data.map(row => row.city),
            datasets: [
                {
                    // label: 'Population of Austrian Cities',
                    data: data.map(row => row.population)
                }
            ]
        }
    }
    new Chart(document.getElementById('chart') as HTMLCanvasElement, config);
}


//Chart Options for no interactions and animations:
// {
//     type: 'bar' as const,
//     options: {
//         animation: false as const,
//         plugins: {
//             legend: {
//                 display: false
//             },
//             tooltip: {
//                 enabled: false
//             }
//         },
//         scales: {
//             ticks: {
//                 maxRotation: 0, // Initial rotation (horizontal)
//                 minRotation: 0,
//                 autoSkip: true,
//                 autoSkipPadding: 15
//             },
//             grid: {
//                 display: false
//             },
//             angleLines: {
//                 display: true,
//                 borderDash: [5, 5]
//             }
//         }
//     },
//     data: {
//         labels: data.map(row => row.year),
//         datasets: [
//             {
//                 label: 'Population of Austrian Cities',
//                 data: data.map(row => row.count)
//             }
//         ]
//     },
//     responsive: true
// }
