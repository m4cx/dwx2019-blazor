
window.createChart = function (canvasId, type, labels, dataSets, options) {

    var canvas = document.getElementById(canvasId);
    var chartContext = canvas.getContext("2d");

    var chart = new Chart(chartContext, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {}
    });

    return chart;
};