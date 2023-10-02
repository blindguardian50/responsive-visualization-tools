import Chart from 'chart.js/auto'
import austrianCities from './data/austrian-cities.js';

export async function createChart({createWithExtraStuff = true}) {
    // const data = [
    //     {year: 2010, count: 10},
    //     {year: 2011, count: 20},
    //     {year: 2012, count: 15},
    //     {year: 2013, count: 25},
    //     {year: 2014, count: 22},
    //     {year: 2015, count: 30},
    //     {year: 2016, count: 28},
    // ];
    const data = austrianCities.cities.map((city, index) => {
        return {city, population: austrianCities.populations[index]}
    })

    const config = createWithExtraStuff ?
        {
            type: 'bar' as const,
            data: {
                labels: data.map(row => row.city),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.population)
                    }
                ]
            },
            responsive: true
        } :
        {
            type: 'bar' as const,
            options: {
                animation: false as const,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                scales: {
                    ticks: {
                        maxRotation: 0, // Initial rotation (horizontal)
                        minRotation: 0,
                        autoSkip: true,
                        autoSkipPadding: 15
                    },
                    grid: {
                        display: false
                    },
                    angleLines: {
                        display: true,
                        borderDash: [5, 5]
                    }
                }
            },
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                    }
                ]
            },
            responsive: true
        }
    new Chart(document.getElementById('acquisitions') as HTMLCanvasElement, config);
}
