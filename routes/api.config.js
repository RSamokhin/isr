const {
    getTotalDailyItemsSold,
    getAverageDailyPuddingItemsPerCustomer,
    getTotalDailyItemSalesPerPudding
} = require('../dataLayer/DataAccessLayer');

module.exports = {
    get: [
        {
            path: '/total_daily_items_sold',
            func: getTotalDailyItemsSold
        }, {
            path: '/average_daily_pudding_items_per_customer',
            func: getAverageDailyPuddingItemsPerCustomer
        }, {
            path: '/total_daily_item_sales_per_pudding',
            func: getTotalDailyItemSalesPerPudding
        }
    ]
}