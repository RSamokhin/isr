const express = require('express');
const router = express.Router();

const {
    getTotalDailyItemsSold,
    getAverageDailyPuddingItemsPerCustomer,
    getTotalDailyItemSalesPerPudding
} = require('../dataLayer/DataAccessLayer');


const apiConfig = require('./api.config');
/* 
// New Router builder. Need test

Object.keys(apiConfig).forEach(method => {
    apiConfig[method].forEach(rest => {
        console.log(method, rest, rest.path);
        router[method](rest.path), function(req, res) {
            rest.func()
                .then(function(result) {
                    res
                        .status(200)
                        .json(result);
                }, function(err) {
                    res
                        .status(500)
                        .send(err);
                })
                .catch(err => {
                    res
                        .status(500)
                        .send(err);;
                });
        };
    })
}); 
*/

router.get('/total_daily_items_sold', function(req, res) {
    getTotalDailyItemsSold()
        .then(function(result) {
            res
                .status(200)
                .json(result);
        }, function(err) {
            res
                .status(500)
                .send(err);
        })
        .catch(err => {
            res
                .status(500)
                .send(err);;
        });
});

router.get('/average_daily_pudding_items_per_customer', function(req, res) {
    getAverageDailyPuddingItemsPerCustomer()
        .then(function(result) {
            res
                .status(200)
                .json(result);
        }, function(err) {
            res
                .status(500)
                .send(err);
        })
        .catch(err => {
            res
                .status(500)
                .send(err);;
        });
});

router.get('/total_daily_item_sales_per_pudding', function(req, res) {
    getTotalDailyItemSalesPerPudding()
        .then(function(result) {
            res
                .status(200)
                .json(result);
        }, function(err) {
            res
                .status(500)
                .send(err);
        })
        .catch(err => {
            res
                .status(500)
                .send(err);;
        });
});


module.exports = router;