(function () {
  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/demos/ex21', {
      templateUrl: 'views/ex21.html',
      controller: 'ex21Controller'
    });
  }]);




  app.controller('ex21Controller', function ($scope, $rootScope) {
    $rootScope.demoId = 'ex21';
    var vm = this,
    selectedDimension,
    dimensionMap = {
      '400X250': {
        width: '400px',
        height: '250px'
      },
      '600X350': {
        width: '600px',
        height: '350px'
      },
      '700X400': {
        width: '700px',
        height: '400px'
      }
    };
    $rootScope.currentTitle = 'Responsive charts';
    $scope.dimensionType = '600X350';    
    $scope.containerStyle = {height: '350px', width: '600px'};   
    $scope.myDataSource = {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
      },
      "data": [
          { "label": "Venezuela", "value": "290" },
          { "label": "Saudi", "value": "260" },
          { "label": "Canada", "value": "180" },
          { "label": "Iran", "value": "140" },
          { "label": "Russia", "value": "115" },
          { "label": "UAE", "value": "100" },
          { "label": "US", "value": "30" },
          { "label": "China", "value": "30"}
      ]
    };
    $scope.buttonClick = function(e){
      selectedDimension = dimensionMap[e.target.value];
      $scope.containerStyle.width = selectedDimension.width;
      $scope.containerStyle.height = selectedDimension.height;
    }

  });

}());