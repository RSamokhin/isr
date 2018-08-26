myApp.factory('DataService', ['$http', function($http) {
    
    // App configurations
    var createApiService = function(path) {
        return function() {
            return $http.get("/api/" + path, null);
        }
    };

    return {
        // app and them configurations
        getTotalDailyItemsSold: createApiService('total_daily_items_sold'),
        getAverageDailyPuddingItemsPerCustomer: createApiService('average_daily_pudding_items_per_customer'),
        getTotalDailyItemSalesPerPudding: createApiService('total_daily_item_sales_per_pudding')
    };
}]);