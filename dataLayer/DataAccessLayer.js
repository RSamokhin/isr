const fs = require("fs");

const { provideAllData } = require('./DataProvider')

class DataAccessLayer {};

/* generates the data array for one line */
DataAccessLayer.generateSequence = function (seqName, seqKeys, seqValues) {
    let data = [];
    seqKeys.forEach((key, index) => {
        data.push({
            key: key,
            values: seqValues[index]
        })
    });
    return {
        name: seqName,
        data: data
    }
}
DataAccessLayer.getTotalDailyItemsSold = function () {
    return provideAllData().then((data) => {
        const keys = Array.from(new Set(data.map(deal => deal.date)));
        const vaues = keys.map(date => data.filter(deal => deal.date === date).length);
        
        return [
            DataAccessLayer.generateSequence('Total Daily Items Sold', keys, vaues)
        ];
    });
}

module.exports = DataAccessLayer;
