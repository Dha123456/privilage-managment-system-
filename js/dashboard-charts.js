var randomScalingFactor = function () {
    return Math.round(Math.random() * 50 * (Math.random() > 0.5 ? 1 : 1)) + 50;
};

var config = {
    type: 'bar',
    display: false,
    data: {
        display: false,
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: ' ',
            fill: true,
            barThickness: 12,
            borderColor: 'rgb(140, 198, 63);',
            backgroundColor: 'rgb(1 ,129 ,148)',
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },

        title: {
            display: false,

        },
        scales: {
            xAxes: [{
                display: true,
                ticks: {
                    callback: function (dataLabel, index) {
                        // Hide the label of every 2nd dataset. return null to hide the grid line too
                        return index % 2 === 0 ? dataLabel : '';
                    }
                }
            }],
            yAxes: [{
                display: true,
                beginAtZero: false
            }]
        }
    }
};
var configg = {
    type: 'pie',

    data: {

        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{

            data: [

                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: [
                'rgb(255 ,85 ,96)',
                'rgb(35, 204 ,184)'
            ]
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },

        title: {
            display: false,

        },
        scales: {
            xAxes: [{
                display: false,
                ticks: {
                    callback: function (dataLabel, index) {
                        // Hide the label of every 2nd dataset. return null to hide the grid line too
                        return index % 2 === 0 ? dataLabel : '';
                    }
                }
            }],
            yAxes: [{
                display: false,
                beginAtZero: false
            }]
        }
    }
};

var configgg = {
    type: 'pie',

    data: {

        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{

            data: [

                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: [
                'rgb(255 ,85 ,96)',
                'rgb(35, 204 ,184)'
            ]
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },

        title: {
            display: false,

        },
        scales: {
            xAxes: [{
                display: false,
                ticks: {
                    callback: function (dataLabel, index) {
                        // Hide the label of every 2nd dataset. return null to hide the grid line too
                        return index % 2 === 0 ? dataLabel : '';
                    }
                }
            }],
            yAxes: [{
                display: false,
                beginAtZero: false
            }]
        }
    }
};
window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
    var ctxx = document.getElementById('canvas-II').getContext('2d');
    window.myLinee = new Chart(ctxx, configg);
    var ctxxx = document.getElementById('canvas-III').getContext('2d');
    window.myLinee = new Chart(ctxxx, configgg);
};
