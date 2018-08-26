var Q = require('q');
var fs = require("fs");

var getExampleItemData = function() {
    var deferred = Q.defer();
    
    var result = [
        {key: "2016-06-02", values: 10},
        {key: "2016-06-03", values: 15},
        {key: "2016-06-04", values: 16},
        {key: "2016-06-05", values: 17},
        {key: "2016-06-06", values: 25},
        {key: "2016-06-07", values: 5},

    ];

    deferred.resolve(result);

    return deferred.promise;
}

module.exports = {
    // export methods here
    getExampleItemData: getExampleItemData,
};
