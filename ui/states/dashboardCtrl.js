

function configureChart(configureFn, getDataFn) {

    var lineChart = {};
    lineChart.labelX = "Date";
    lineChart.labelY = "# Items Sold";
    lineChart.guidelinesX = false;
    lineChart.guidelinesY = true;
    lineChart.formatY = "f";
    lineChart.legend = "bottom";
    configureFn(lineChart);

    getDataFn().then(function(data) {
        lineChart.data = data.data;
    }, function(err) {
        console.error("There was an error");
    });

    return lineChart;
}

angular.module('myApp')
.controller('dashboardCtrl', ['$scope', 'DataService', function($scope, DataService) {

    $scope.totalDailyItemsSoldChart = configureChart(function(lineChart) {
        lineChart.labelY = "# Items Sold";
    }, DataService.getTotalDailyItemsSold);

    $scope.averageDailyPuddingItemsPerCustomerChart = configureChart(function(lineChart) {
        lineChart.labelY = "# Sold per customer";
    }, DataService.getAverageDailyPuddingItemsPerCustomer);

    $scope.totalDailyItemSalesPerPuddingChart = configureChart(function(lineChart) {
        lineChart.labelY = "# Sales per pudding";
    }, DataService.getTotalDailyItemSalesPerPudding);

}]);
