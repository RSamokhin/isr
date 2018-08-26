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
        key: seqName,
        values: data
    }
}

DataAccessLayer.getTotalDailyItemsSold = function () {
    return provideAllData().then((data) => {
        const keys = Array.from(new Set(data.map(deal => deal.date)));
        const values = keys.map(date => data
            .filter(deal => deal.date === date) // getting only necessary date
            .reduce((prev, deal) => prev += deal.count, 0) // getting total sold
        );

        return [
            DataAccessLayer.generateSequence('Total Daily Items Sold', keys, values)
        ];
    });
}

DataAccessLayer.getAverageDailyPuddingItemsPerCustomer = function () {
    return provideAllData().then((data) => {
        const keys = Array.from(new Set(data.map(deal => deal.date)));
        const values = keys.map(date => data
            .filter(deal => deal.date === date) // getting only necessary date
            .reduce((prev, deal) => prev += deal.count, 0) // getting total sold
        ).map((soldPerDay, dayIndex) => {
            // good idea further to cache
            const customersCount = Array.from(new Set(data
                .filter(deal => deal.date === keys[dayIndex])
                .map(deal => deal.customerId)
            )).length;
            return soldPerDay / customersCount;
        });

        return [
            DataAccessLayer.generateSequence('Average daily pudding items sold per customer', keys, values)
        ];
    });
}

DataAccessLayer.getTotalDailyItemSalesPerPudding = function () {
    // good idea to add providers ith prefiltered data
    return provideAllData().then((data) => {
        // getting distinct item
        return Array
            .from(new Set(data.map(deal => deal.item)))
            .map(itemName => {
                const filteredData = data.filter(deal => deal.item === itemName);
                const keys = Array.from(new Set(filteredData.map(deal => deal.date)));
                const values = keys.map(date => filteredData
                    .filter(deal => deal.date === date)
                    .reduce((prev, deal) => prev += deal.count, 0)
                );                
                return DataAccessLayer.generateSequence(itemName, keys, values);
            });
    });
}

module.exports = DataAccessLayer;
