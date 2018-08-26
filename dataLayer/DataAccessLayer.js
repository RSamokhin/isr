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

// DataAccessLayer.getAverageDailyPuddingItemsPerCustomer = function () {
//     return provideAllData().then((data) => {
//         const keys = Array.from(new Set(data.map(deal => deal.date)));
//         const vaues = keys.map(date => data.filter(deal => deal.date === date).length);
        
//         return [
//             DataAccessLayer.generateSequence('Total Daily Items Sold', keys, vaues)
//         ];
//     });
// }



//

// getTotalDailyItemsSold: createApiService('total_daily_items_sold'),
//         getAverageDailyPuddingItemsPerCustomer: createApiService('average_daily_pudding_items_per_customer'),
//         getTotalDailyItemSalesPerPudding: createApiService('total_daily_item_sales_per_pudding')

// /api/total_daily_item_sales_per_pudding

// 1) Total daily pudding items sold
// 2) Average daily pudding items sold per customer
// 3) Total daily item sales, split into a line for each pudding item (Dani, Milki etc)

//customerId,item,count,date
// 2993,Dani,4,02/06/2016
module.exports = DataAccessLayer;
