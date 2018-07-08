$(document).ready(function () {
    $(".dropdown-menu a").click(function () {
        var selText = $(this).html();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    $('.tiles .circle').tooltip({
        container: '.tiles'
    });

    google.charts.load('current', { 'packages': ['line', 'corechart'] });


    function drawDonutChart() {
        var data = google.visualization.arrayToDataTable([
            ['x', 'y'],
            ['Property', 11],
            ['Category', 2]
        ]);

        var options = {
            pieHole: 0.6,
            slices: { 0: { color: '#13293d' }, 1: { color: '#29abe2' } },
            legend: { position: 'top', maxLines: 1 },
            chartArea: { 'width': '100%', 'height': '80%' },
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }

    function drawStackedChart() {
        // Define the chart to be drawn.
        var data = google.visualization.arrayToDataTable([
            ['y', 'Facebook', 'Twitter', 'Tumblr', 'Instagram', 'Google+', 'YouTube'],
            ['Audience', 45, 10, 15, 3, 6, 21],
            ['Content', 10, 10, 15, 33, 11, 21],
            ['Actions', 30, 10, 15, 3, 21, 21]
        ]);

        var options = {
            isStacked: true,
            series: {
                0: { color: '#3b5998' },
                1: { color: '#00aced' },
                2: { color: '#48a9a6' },
                3: { color: '#ec008c' },
                4: { color: '#f86624' },
                5: { color: '#ff0000' }
            },
            legend: { position: 'top', maxLines: 3 }
        };

        // Instantiate and draw the chart.
        var chart = new google.visualization.BarChart(document.getElementById('social_chart'));
        chart.draw(data, options);
    }

    if (document.getElementById('social_chart')) {
        google.charts.setOnLoadCallback(drawStackedChart);
    }

    if (document.getElementById('donutchart')) {
        google.charts.setOnLoadCallback(drawDonutChart);
    }

    if (document.querySelector('.height-790 .linear')) {
        google.charts.setOnLoadCallback(drawLinearChartOnMainPage);
    }

    if (document.querySelector('.social-row .linear')) {
        google.charts.setOnLoadCallback(drawSmallLinearChart);
    }

    //-----------------------

    function drawLinearChartOnMainPage() {
        var lineChartDiv1 = document.getElementById('line_chart_div1');
        var data = new google.visualization.DataTable();
        data.addColumn('date', '');
        data.addColumn('number', "Current");
        data.addColumn('number', "Historical");

        data.addRows([
            [new Date(2017, 1, 1), .5, 5.7],
            [new Date(2017, 1, 6), .4, 8.7],
            [new Date(2017, 1, 11), .5, 12],
            [new Date(2017, 1, 16), 2.9, 15.3],
            [new Date(2017, 1, 21), 1.3, 8.6],
            [new Date(2017, 1, 26), 1.3, 8.6],
            [new Date(2017, 2, 1), 3.3, 10.6],
            [new Date(2017, 2, 6), 4.3, 12.6]
        ]);

        var materialOptions = {
            legend: {position: 'none'},
            series: {
                // Gives each series an axis name that matches the Y-axis below.
                0: { axis: 'Temps', color: '#29abe2' },
                1: { axis: 'Daylight', color: '#13293d' }
            },
        };
        var materialChart = new google.charts.Line(lineChartDiv1);
        materialChart.draw(data, materialOptions);
    }
    //-----------------------

    function drawSmallLinearChart() {
        var lineChartDiv = document.getElementById('line_chart_small');
        var data = new google.visualization.DataTable();
        data.addColumn('date', '');
        data.addColumn('number', "Current");
        data.addColumn('number', "Historical");

        data.addRows([
            [new Date(2017, 1, 1), .5, 5.7],
            [new Date(2017, 1, 6), .4, 8.7],
            [new Date(2017, 1, 11), .5, 12],
            [new Date(2017, 1, 16), 2.9, 15.3],
            [new Date(2017, 1, 21), 1.3, 8.6],
            [new Date(2017, 1, 26), 1.3, 8.6],
            [new Date(2017, 2, 1), 3.3, 10.6],
            [new Date(2017, 2, 6), 4.3, 12.6]
        ]);

        var materialOptions = {
            legend: {position: 'none'},
            series: {
                // Gives each series an axis name that matches the Y-axis below.
                0: { axis: 'Temps', color: '#13293d' },
                1: { axis: 'Daylight', color: '#29abe2' }
            }
        };
        var materialChart = new google.charts.Line(lineChartDiv);
        materialChart.draw(data, materialOptions);
    }

});
