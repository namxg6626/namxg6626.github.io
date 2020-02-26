export default async function createChart(timestamps, temperatureArr, humidityArr) {
    let ctx = document.getElementById('myChart').getContext('2d');
    let maxTemp = parseFloat(Math.max(...temperatureArr) + 5);
    let maxHumid = parseFloat(Math.max(...humidityArr) + 5);
    if (maxHumid >= 100)
        maxHumid = 99;

    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [
                {
                    yAxisID: 'temperature',
                    label: 'Nhiệt Độ',
                    data: temperatureArr,
                    fill: false,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointBorderWidth: 3,
                    borderWidth: 1,
                },
                {
                    yAxisID: 'humidity',
                    label: 'Độ ẩm',
                    data: humidityArr,
                    fill: false,
                    borderColor: 'rgba(38, 160, 252, 1)',
                    pointBackgroundColor: 'rgba(38, 160, 252, 1)',
                    pointBorderWidth: 3,
                    borderWidth: 1,
                },
            ]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        type: 'linear',
                        id: 'temperature',
                        position: 'left',
                        ticks: {
                            suggestedMax: maxTemp,
                            beginAtZero: true,
                            callback: (value, index, values) => value + '°',
                        },
                    },
                    {
                        type: 'linear',
                        id: 'humidity',
                        position: 'right',
                        ticks: {
                            suggestedMax: maxHumid,
                            beginAtZero: true,
                            callback: (value, index, values) => value + '%',
                        },
                    }
                ]
            },
            hover: true
        }
    });
}