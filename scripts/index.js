// These are all the settings you can adjust to change the charts. 
// I could not get some extra things to work, nor the responsiveness of the charts. But at least i got these calculations to work.

var fuel = 69;
var power = 84;
var damage = 75;

const FOOD = 250;
const WATER = 275;
const MEDICINE = 120;


var chartProgress = document.getElementById("fuelProgress");
// parseInt(document.getElementById("fuelslider")).value;
var noFuel = (100 - fuel);
if (chartProgress) {
  var myChartCircle = new Chart(chartProgress, {
    type: 'doughnut',
    data: {
      labels: ["", ''],
      datasets: [{
        backgroundColor: ["#000000"],
        data: [fuel, noFuel]
      }]
    },
    plugins: [{
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 100).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#9b9b9b";
        ctx.textBaseline = "middle";
    
        var text = fuel + "%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
  }],
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 85
    }

  });

  
}

var chartProgress = document.getElementById("powerProgress");
var noPower = (100 - power);
if (chartProgress) {
  var myChartCircle = new Chart(chartProgress, {
    type: 'doughnut',
    data: {
      labels: ["", ''],
      datasets: [{
        backgroundColor: ["#000000"],
        data: [power, noPower]
      }]
    },
    plugins: [{
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 100).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#9b9b9b";
        ctx.textBaseline = "middle";
    
        var text = power + "%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
  }],
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 85
    }

  });

  
}

var chartProgress = document.getElementById("damageProgress");
var noDamage = (100 - damage);
if (chartProgress) {
  var myChartCircle = new Chart(chartProgress, {
    type: 'doughnut',
    data: {
      labels: ["Hull Damage"],
      datasets: [{
        backgroundColor: ["#000000"],
        data: [damage, noDamage]
      }]
    },
    plugins: [{
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 100).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#9b9b9b";
        ctx.textBaseline = "middle";
    
        var text = damage + "%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
  }],
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 85
    }

  });

  
}


var ctx = document.getElementById('radarChart');
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
	    labels: ['Fuel', 'Power', 'Accuracy', 'Defense', 'Speed'],
	    datasets: [{
	        data: [fuel, power, ((power + fuel) / 1.84), ((power + fuel) / 1.89), (fuel / 1.04)]
	    }]
	},
    options: {
    	legend: {
    		display:false,
    	},

    	responsive: true,
	    scale: {
	        angleLines: {
	            display: false
	        },
	        ticks: {
	            suggestedMin: 0,
	            suggestedMax: 100,
	            stepSize: 20
	        }
	    }
	}
});

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	
var data = google.visualization.arrayToDataTable([
  ['Month', 'Food', 'Water', 'Medicine'],
  ['March', FOOD, WATER, MEDICINE],
  ['April', (FOOD / 1.2), (WATER / 1.2), (MEDICINE /1.1)],
  ['May', (FOOD / 1.3), (WATER/ 1.3), (MEDICINE /1.1)],
  ['June', (FOOD / 1.5), (WATER / 1.5), (MEDICINE /1.3)]
]);

var options = {
  responsive:true,
  chart: {
    title: 'Rations',
    subtitle: 'Food, Water, and Medicine',
  },
  legend: {
  	position: 'none',
  },
  colors: ['crimson', 'grey', 'dodgerblue'] 
};

var chart = new google.charts.Bar(document.getElementById('columnChart'));

chart.draw(data, google.charts.Bar.convertOptions(options));
}


