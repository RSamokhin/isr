const fs = require("fs");

const Deal = require('../models/Deal');

class DataProvider {}
DataProvider.provideAllData = function () {
    return new Promise(function(resolve, reject) {
        fs.readFile('./data/data.csv', 'utf-8', function(err, data) {
            if (err) { 
                reject(err);
            }
            data = data.split('\n');
            /* to remove the first line; */
            data.shift(); 
            resolve(
                data
                    .map(line => {
                        return new Deal(...line.split('\r')[0].split(','));
                    })
                    .map(deal => deal.toJson())
            )
        });
    })
}

module.exports = DataProvider;