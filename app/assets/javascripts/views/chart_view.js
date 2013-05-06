Fitness.ChartView = Ember.View.extend({
  templateName: 'chart',

  didInsertElement: function() {
    var ctx = document.getElementById('chart').getContext('2d');
    var data = {
      labels: ['January','February','March'],
      datasets: [{
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [65,59,90,81,56,55,40]
      },{
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [28,48,40,19,96,27,100]
      }]
    };
    new Chart(ctx).Line(data);
  }
});
