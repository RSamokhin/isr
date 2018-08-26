var express = require('express');
var router = express.Router();
var {
    getTotalDailyItemsSold
} = require('../dataLayer/DataAccessLayer');

router.get('/api/total_daily_items_sold', function(req, res) {
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

router.get('/api/average_daily_pudding_items_per_customer', function(req, res) {
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

router.get('/api/total_daily_item_sales_per_pudding', function(req, res) {
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


module.exports = router;