const ctx = document.getElementById('doughnutChart');
const ctx1 = document.getElementById('lineChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [12, 13, 25, 50],
            borderWidth: [0]
        }]
    },

    options: {
        responsive: true,
        borderWidth: 10,
        cutout: 55,
        backgroundColor: ["rgba(255, 179, 94, 1)", "rgba(88, 222, 182, 1)", "rgba(98, 167, 255, 1)", "rgba(198, 198, 198, 0.8)"]
    }
});




const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        data: [10, 0, 15, 25, 30, 70, 50, 20, 30, 45, 80, 50],
        borderColor: 'blue', // Line color
        borderWidth: 3,      // Line width
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        showLine: true
    }]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
    }
    },
    scales: {
        y: {
            beginAtZero: false
        }
    }
};

const lineChart = new Chart(ctx1, {
    type: 'line',
    data: data,
    options: options
});

